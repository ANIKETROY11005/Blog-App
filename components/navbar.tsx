import React from 'react'

export default function Navbar() {

    const navlink = {
        "post": {
            "dir": "/posts"
        },
        "create-post": {
            "dir": "/create-post"
        }
    }


    return (
        <nav className='flex gap-1 text-base'>
            <li className=''>
                <ul className=''>post</ul>
            </li>
        </nav>
    )
}
