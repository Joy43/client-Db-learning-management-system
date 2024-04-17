import React from 'react'
import Searchbar from './Searchbar'

export default function Header() {
  return (
    <div className='ml-64 p-6 border-b flex justify-between'>
        <Searchbar></Searchbar>
        <button>login</button>
    </div>
  )
}
