import React from 'react'
import Navbar from './navbar'

export default function Header() {
    return (
        <header className='flex w-full justify-between mx-10 my-4 border-b-[1.5px]'>
            <div className='text-lg font-bold'>BLOG</div>
            <Navbar />
        </header>
    )
}
