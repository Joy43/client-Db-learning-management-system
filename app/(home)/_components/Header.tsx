import React from 'react'
import Searchbar from './Searchbar'
import { UserButton } from '@clerk/nextjs'

export default function Header() {
  return (
    <div className='ml-64 p-6 border-b flex justify-between'>
        <Searchbar></Searchbar>
       <UserButton></UserButton>
    </div>
  )
}
