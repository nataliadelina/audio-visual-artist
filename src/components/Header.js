import React from 'react'
import DarkMode from './DarkMode'
import Navbar from './Navbar'

export default function Header() {
    return (
        <header>
            <Navbar />
            <DarkMode />
        </header>
    )
}
