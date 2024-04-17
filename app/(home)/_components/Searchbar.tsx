import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Searchbar() {
  return (
    <div className=' flex gap-3 text-[14px] items-center border p-2 rounded-md'>
        <FaSearch>

        </FaSearch>
        <input 
        className='text bg-transparent outline-none'
        placeholder='search icon'
        
        >
        </input>

    </div>
  )
}
