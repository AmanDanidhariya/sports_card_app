'use client'
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeButton = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true) }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className='text-xl'
        >
            {resolvedTheme === 'dark' ? <FaSun className='text-yellow-400' /> : <FaMoon className='text-slate-800' />}
        </button>
    )
}

export default ThemeButton