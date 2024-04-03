'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeButton from './ThemeButton'

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className='w-full'>
            <ul className=' grid sm:grid-cols-12'>
                <li className='text-xl font-bold'>
                    <Link className={`link ${pathname === '/sports' ? 'border-b-2 border-[#738FFF] ' : ''}`} href="/sports">Sports</Link>
                </li>
                <li className='sm:col-start-12'>
                    <ThemeButton />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar