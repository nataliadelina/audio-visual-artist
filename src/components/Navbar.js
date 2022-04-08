import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/navbar.css'

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/" activeclassname="active-link" className="logo">JS</NavLink>
            <div className="nav-links">
                <NavLink to="/work" activeclassname="active-link">work</NavLink>
                <NavLink to="/skills" activeclassname="active-link">skills</NavLink>
                <NavLink to="/about" activeclassname="active-link">about</NavLink>
                <NavLink to="/contact" activeclassname="active-link">contact</NavLink>
            </div>
        </nav>
    )
}
