import './App.css';
import MonacoEditor from "./components/Editor";
import ThemeToggler from "./utils/ThemeToggler";
import SyncRoom from "./components/SyncRoom";

function App() {

  return (
    <div className="bg-white dark:bg-gray-700 max-h-100vh">
      <header className="bg-gray-100 shadow-2xl dark:bg-gray-700 border-b-2-green-300 drop-shadow-xl">
        <div className="flex justify-between max-w-80vh px-8 py-8 sm:px-4 lg:px-4">
            <p className="text-gray-800 text-3xl font-semibold tracking-tight sm:text-md dark:text-white">serengeti <span className="text-green-500">ide</span></p>
            <ThemeToggler/>
        </div>
      </header>
      <main>
        <div className="flex max-w-100vh py-6 px-10 sm:px-6 lg:px-8 transition-1s-ease-in dark:bg-gray-700">
            <MonacoEditor/>
            <SyncRoom />
        </div>

          <footer className="rounded-lg shadow mx-8 dark:bg-gray-800">
              <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> made with ❤️
    </span>
              </div>
          </footer>


      </main>


    </div>
  );
}

export default App;
