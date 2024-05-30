'use client'
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';

function Liveclass() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('https://db-lern-server.vercel.app/liveclass')
      .then((response) => response.json())
      .then((data) => setClasses(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Live class</h1>
      <div className="border rounded-lg overflow-hidden dark:bg-gray-900">
        <table className="w-full table-auto">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-50">Inex No</th>
              <th className="px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-50">Description</th>
              <th className="px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-50">Date</th>
              <th className="px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-50">Join Class</th>
              {/* <th className="px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-50">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {Array.isArray(classes) && classes.length > 0 ? (
              classes.map((liveClass,index) => (
                <tr key={liveClass._id} className="border-t border-gray-200 dark:border-gray-800">
                  <td className="px-6 py-4 font-medium text-white"> {index}</td>
                  <td className="px-6 py-4 text-white text-lg dark:text-gray-400">
                    {liveClass.description}
                  </td>
                  <td className="px-6 py-4 text-lg text-white">
                    {new Date(liveClass.time).toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Button
                        className="border-blue-500 text-white hover:bg-blue-500 hover:text-white dark:border-gray-800 dark:text-gray-50 dark:hover:bg-blue-500 dark:hover:text-gray-50"
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(liveClass.link, '_blank')}
                      >
                        Join Live
                      </Button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {/* <Button
                        className="bg-red-600 text-gray-50 hover:bg-red-700 dark:bg-red-600 dark:text-gray-50 dark:hover:bg-red-700"
                        size="sm"
                        variant="destructive"
                        
                      >
                        Delete
                      </Button> */}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-white">
                  No live classes available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Liveclass;
