"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {

    const path = usePathname();
    console.log(path)

    const navlink = [
        {
            "href": "/posts",
            "name": "posts"
        },
        {
            "href": "/create-post",
            "name": "create-post"
        }
    ]


    return (
        <nav className='flex text-base h-10'>
            <ul className='flex gap-8'>
                {
                    navlink.map((link) => (
                        <li key={link.href}>
                            <Link className={path == link.href ? "text-black" : "text-gray-400"} href={link.href}>{link.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
