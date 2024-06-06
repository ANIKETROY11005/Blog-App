import React, { ReactNode } from 'react'

type Props = { children: ReactNode }

export default function Container({ children }: Props) {
    return (
        <div className='max-w-5xl h-screen mx-auto flex-row justify-between'>
            {children}
        </div>
    )
}
