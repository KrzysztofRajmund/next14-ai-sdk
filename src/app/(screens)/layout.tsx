import NavBar from '@/components/NavBar/NavBar'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}