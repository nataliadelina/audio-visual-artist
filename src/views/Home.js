import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/images/hero-img.png'
import playIcon from '../assets/icons/play-icon.png'

export default function Home() {
    return (
        <div>
            <div className="hero-desc">
                <h2>JuanSessions</h2>
                <h1>Video & Audio </h1>
                <h2>Content Production</h2>
                <p>Creative and active person, ready to achieve
                    more experience and work hard in Video and
                    Audio production</p>
                <Link to="/work" className="btn btn-primary">explore</Link>
                <Link to="/contact" className="btn btn-secondary">contact</Link>
            </div>
            <div className="hero-img">
                <img src={playIcon} alt="dragon" />
                <img src={heroImg} alt="dragon" />
            </div>
        </div>
    )
}
