import React from 'react';
import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

interface Option {
  id: number;
  name: string;
  icon: React.ElementType | string;
}

const OptionSection: React.FC = () => {
  const optionsList: Option[] = [
    {
      id: 1,
      name: 'github',
      icon: FaGithub,
    },
    {
      id: 2,
      name: 'demo',
      icon: FaTwitter,
    },
    {
      id: 3,
      name: 'Youtube',
      icon: FaYoutube,
    },
   
  ];

  return (
    <div className='flex items-center gap-3 bg-green-400 text-white'>
      {optionsList.map((option,index) => (
        <div key={index} className='p-2 border rounded-lg flex flex-col items-center w-full cursor-pointer'>
          {typeof option.icon === 'string' ? null : <option.icon />}
          <h2 className='text-2xl'>{option.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default OptionSection;
