'use client'
import React from 'react';

function Allnote() {
    const files = [
        {
          id: '1pFY8OdzoVVsEknCQp0MXx6PQHd2w-xZ2',
          name: 'c ++ datatype',
          downloads: '2k'
        },
        {
          id: '1-zO06KiF-c7Ca39reFkmmr19aPhsZkIN',
          name: 'Code Node js',
          downloads: '15k'
        },
        {
          id: '1MyVqzqr6pyV4hCjOArNMu5sKTLmG_HRB',
          name: 'React native guide',
          downloads: '10k'
        },
        {
          id: '1jGdFO1mjrTfHySscHWM-H-32Vb4KaUSD',
          name: 'system design',
          downloads: '5k'
        }
      ];

  const handleDownload = (fileID:string) => {
    const downloadLink = `https://drive.google.com/uc?export=download&id=${fileID}`;
    const downloadElement = document.createElement('a');
    downloadElement.href = downloadLink;
    downloadElement.click();
  };

  return (
    <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 min-h-screen bg-[#17193b]'>
      {files.map((file, index) => (
        <div key={index} onClick={() => handleDownload(file.id)} className="flex flex-row m-auto bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 p-6 gap-8 rounded-lg border-2 border-purple-500 cursor-pointer">
          <div className="my-auto">
          <div className="text-lg text-purple-300">{file.name}</div>
            <div className="text-4xl text-purple-100">{file.downloads}</div>
          </div>
          <div className="text-purple-300 my-auto bg-gradient-to-l from-purple-700 via-purple-800 to-purple-900 rounded-full p-4">
            {/* -----------Download Icon ---------------*/}
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Allnote;

