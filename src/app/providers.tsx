import React, { Children, ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

interface Props {
    children: ReactNode;
}

const providers = ({ children }: Props) => {
    return (
        <ThemeProvider attribute='class'>{children}</ThemeProvider>
    )
}

export default providers