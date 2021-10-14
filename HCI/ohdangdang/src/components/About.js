import React from 'react';
import './About.css'

function About() {
    return (
        <div className='Footer'>
            &copy; {new Date().getFullYear()} HCI TEAM-2 All Rights Reserved.
        </div>
    )
}

export default About;