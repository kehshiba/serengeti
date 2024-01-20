const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const { createClient } = require('redis')
const { v4 } = require('uuid')
const moment = require('moment')
const { json } = require('body-parser')
const { blueBright, greenBright, redBright, yellowBright} = require('chalk');
require('dotenv').config()

const app = express();
const server = http.createServer(app);
const io = new Server(server)

app.use(json());
app.use(cors());

const client = createClient({
    password: process.env.PASSWORD,
    socket: {
        host: process.env.URL,
        port: 13894
    }
});
client.on('error', console.error);

client.connect().then(() => console.log(blueBright.bold('Connected to redis locally!')))
  .catch(() => { console.error(redBright.bold('Error connecting to redis')) });

app.get('/', (req, res) => {
  res.send({ msg: 'hi' });
});

app.post('/create-room-with-user', async (req, res) => {  //to be activated when user clicks 'go' or whatever
  const { username } = req.body;
  const room_id = v4();

  await client
    .hSet(`${room_id}:info`, {
      created: moment(),
      updated: moment(),
    })
    .catch((err) => {
      console.error(1, err);
    });
  res.status(201).send({ room_id });
});

io.on('connection', (socket) => {
  socket.on('CODE_CHANGED', async (code) => {
    const { roomId, username } = await client.hGetAll(socket.id)
    const roomName = `ROOM:${roomId}`
    // io.emit('CODE_CHANGED', code)
    socket.to(roomName).emit('CODE_CHANGED', code)
  })

  socket.on('DISCONNECT_FROM_ROOM', async ({ roomId, username }) => {})

  socket.on('CONNECTED_TO_ROOM', async ({ roomId, username }) => {
    await client.lPush(`${roomId}:users`, `${username}`)
    await client.hSet(socket.id, { roomId, username })
    const users = await client.lRange(`${roomId}:users`, 0, -1)
    const roomName = `ROOM:${roomId}`
    socket.join(roomName)
    io.in(roomName).emit('ROOM:CONNECTION', users)
  })

  socket.on('disconnect', async () => {
    // if 2 users have the same name
    const { roomId, username } = await client.hGetAll(socket.id)
    const users = await client.lRange(`${roomId}:users`, 0, -1)
    const newUsers = users.filter((user) => username !== user)
    if (newUsers.length) {
      await client.del(`${roomId}:users`)
      await client.lPush(`${roomId}:users`, newUsers)
    } else {
      await client.del(`${roomId}:users`)
    }

    const roomName = `ROOM:${roomId}`
    io.in(roomName).emit('ROOM:CONNECTION', newUsers)
  })
})

server.listen(3300, () => {
  console.log('server started');
});
