import React from 'react'
import artistFace from '../assets/images/artist-face.jpg'
import '../style/views.css'

export default function About() {
    return (
        <div className='about'>
            <div >
                <h2>about me</h2>
                <p>Ipsum für Designer, Schriftsetzer, Layouter, Grafikenthusiasten und alle anderen. Generiere einfach soviel Lorem</p>
            </div>
            <img src={artistFace} alt="artist face" />
        </div>
    )
}
