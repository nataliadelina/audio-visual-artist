import React from 'react'
// import { Link } from 'react-router-dom'
import heroImg from '../assets/images/hero-img.png'
import playIcon from '../assets/icons/play-icon.png'
import mainWork1 from '../assets/images/main-img-1.png'
import mainWork2 from '../assets/images/main-img-2.png'
import mainWork3 from '../assets/images/main-img-3.png'
import Card3D from '../components/Card3D'

export default function Home() {
    return (
        <div>
            <div className="hero-desc" id='home'>
                <h1>Audiovisual Artist </h1>
                {/* <h2>Content Production</h2> */}
                <p>Video Editing, Sound & Soundtracks Composition, Visual Effects, Animation </p>
                {/* <Link to="/work" className="btn btn-primary">explore</Link>
                <Link to="/contact" className="btn btn-secondary">contact</Link> */}
            </div>
            <div className="hero-img">
                <img src={playIcon} alt="dragon" />
                <img src={heroImg} alt="dragon" />
            </div>

            <div className="main-work" id='main-work'>
                <img src={mainWork1} alt="work" />
                <img src={mainWork2} alt="work" />
                <img src={mainWork3} alt="work" />
            </div>

            <Card3D />

            <div className="main-audio" id='main-audio'>

            </div>

            <div className='parallax' id="main-bg-img"></div>
        </div>
    )
}
