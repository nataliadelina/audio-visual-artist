import React from 'react'
// import { Link } from 'react-router-dom'
import heroImg from '../assets/images/hero-img.png'
import playMainIcon from '../assets/icons/play-icon.png'
import playIcon from '../assets/icons/play.png'
import mainWork1 from '../assets/images/main-img-1.png'
import mainWork2 from '../assets/images/main-img-2.png'
import mainWork3 from '../assets/images/main-img-3.png'
import Card3D from '../components/Card3D'
import '../style/home.css'

export default function Home() {
    return (
        <div>
            <div className="main flex-column-center">
                <div className="main-desc " id='home'>
                    <h1>Audiovisual Artist </h1>
                    {/* <h2>Content Production</h2> */}
                    <p>Video Editing, Sound & Soundtracks Composition, Visual Effects, Animation </p>
                    {/* <Link to="/work" className="btn btn-primary">explore</Link>
                <Link to="/contact" className="btn btn-secondary">contact</Link> */}
                </div>

                <div className="main-img">
                    <a href="">
                        <img src={playMainIcon} alt="dragon" className='playMainIcon' />
                    </a>
                    <img src={heroImg} alt="dragon" />
                </div>
            </div>

            <div className="main-work flex-row-center" id='main-work'>
                <div className="main-work-video flex-column">
                    <img src={mainWork1} alt="work" className='main-work-video-img' />
                    <div className='main-work-desc flex-row'>
                        <h3>biking</h3>
                        <img src={playIcon} alt="dragon" className='playIcon' />
                    </div>
                </div>
                <div className="main-work-video">
                    <img src={mainWork2} alt="work" className='main-work-video-img' />
                    <div className='main-work-desc flex-row'>
                        <h3>flow organically</h3>
                        <img src={playIcon} alt="dragon" className='playIcon' />
                    </div>
                </div>
                <div className="main-work-video">
                    <img src={mainWork3} alt="work" className='main-work-video-img' />
                    <div className='main-work-desc flex-row'>
                        <h3>often alone</h3>
                        <img src={playIcon} alt="dragon" className='playIcon' />
                    </div>
                </div>
            </div>

            <Card3D />

            <div className="main-audio" id='main-audio'>

            </div>

            <div className='parallax juan-studio-img' id="main-bg-img"></div>
        </div>
    )
}
