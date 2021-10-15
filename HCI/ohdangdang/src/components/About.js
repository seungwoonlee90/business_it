import React from 'react';
import './About.css'

function About() {
    return (
        <div className="bg">
            <div className="text-area">
                <h1>
                    <div className="volume">Ver .1</div>
                    <div className="title">Classics <br /> never <br /> get old</div>
                </h1>
                <p>We'll make a platform <br /> for our pet friends.</p>
            </div>
            <div className="Footer">
                &copy; {new Date().getFullYear()} HCI TEAM-2 All Rights Reserved.
            </div>
        </div>
    )
}

export default About;