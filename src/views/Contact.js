import React from 'react'
import arrowTop from '../assets/icons/arrow-top.png'
import '../style/views.css'

export default function Contact() {
    return (
        <div className='flex-column parallax contact'>
            <h2>Let’s work together</h2>
            <p>Whether you are looking to work together, or are simply a fan, feel free to reach out.</p>
            <p>Sincerely,</p>
            <p>juanSession</p>
            <button>send me a message</button>

            <div className="top">
                <a href="#home">
                    <img src={arrowTop} alt="to the top" />
                    <p>to the top</p>
                </a>
            </div>
        </div>
    )
}
