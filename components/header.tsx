import React from 'react'
import Navbar from './navbar'
import Link from 'next/link'

export default function Header() {
    return (
        <header className='flex justify-between px-5 mt-5 border-b-[1.5px]'>
            <Link href="/" className='text-lg font-bold'>BLOG</Link>
            <Navbar />
        </header>
    )
}
