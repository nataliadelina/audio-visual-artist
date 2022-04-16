import React from 'react'
import { NavLink } from 'react-router-dom'
import DarkMode from './DarkMode'
import Navbar from './Navbar'

export default function Header() {
    return (
        <header>
            <NavLink to="/" activeclassname="active-link" className="logo">juanSessions</NavLink>
            <Navbar />
            <DarkMode />
        </header>
    )
}
