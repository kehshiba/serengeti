import React from "react";

export default function SyncRoom() {
    return (
        <div className="flex xs:invisible">
            <div className="flex flex-col h-90vh px-16 py-4 bg-white shadow w-20vh dark:bg-green-500 ">
                <div className="space-y-3 ">
                    <div className="flex items-center">
                        <h2 className="p-2 text-xl text-green-400 font-bold dark:text-black">sync</h2>
                    </div>
                    <div className="flex flex-col gap-3">
                       <button className="p-2 bg-black text-sm text-white rounded-lg">
                           join.
                       </button>
                        <button className="p-2 bg-black text-sm text-white rounded-lg">create.
                        </button>
                    </div>
                </div>


                <div className="space-y-2">
                    <hr className="w-auto h-px my-8 shadow-lg bg-gray-200 border-0 dark:bg-gray-700" />
                        <div className="flex items-center">
                            <h2 className="p-2 text-xl text-green-400 font-bold dark:text-black">chat</h2>
                        </div>
                        <div className="flex flex-col gap-3">
                          <div>
                              <ol className="relative border-s border-gray-200 dark:border-gray-700 ">
                                  <li className="mb-10 ms-4">
                                      <div
                                          className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                      <time
                                          className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">[user0]
                                      </time>
                                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-white">chat message</p>
                                  </li>
                              </ol>
                          </div>
                            <div>

                            <label htmlFor="message"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                            <textarea id="message" rows="4"
                                      className=" p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="send a message"></textarea>
                            </div>
                            <button className="p-2 bg-black text-sm text-white rounded-lg">
                                send.
                            </button>
                        </div>
                </div>
            </div>
        </div>
    );
}