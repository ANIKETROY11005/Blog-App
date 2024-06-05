import Link from 'next/link'
import React from 'react'

export default function Navbar() {

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
        <nav className='flex text-base'>
            <ul className='flex'>
                {
                    navlink.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
