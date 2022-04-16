import React from 'react'
import artistFace from '../assets/images/artist-face.jpg'
import linkedin from '../assets/icons/LinkedIn.png'
import bandcamp from '../assets/icons/Bandcamp.png'
import youtube from '../assets/icons/YouTube.png'
import '../style/views.css'

export default function About() {
    return (
        <div className='about parallax'>
            <div >
                <h2>about me</h2>
                <p>Ipsum für Designer, Schriftsetzer, Layouter, Grafikenthusiasten und alle anderen. Generiere einfach soviel Lorem</p>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/juan-perusin-a708101a6/" target="_blank">
                        <img src={linkedin} alt="LinkedIn" width="30" />
                    </a>
                    <a href="https://juansessions.bandcamp.com/album/amalgamating" target="_blank">
                        <img src={bandcamp} alt="Bandcamp" width="30" />
                    </a>
                    <a href="#" target="_blank">
                        <img src={youtube} alt="YouTube" width="30" />
                    </a>
                </div>
            </div>
            <img src={artistFace} alt="artist face" width="300" height="350" />
        </div>
    )
}
