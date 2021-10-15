import React from 'react';
import './About.css'

function About() {
    return (
        <div className="bg">
            <div className="Footer">
                &copy; {new Date().getFullYear()} HCI TEAM-2 All Rights Reserved.
            </div>
        </div>
    )
}

export default About;