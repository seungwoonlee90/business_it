import React from 'react';
import rocket from './images/rocket.png';
import "./css/Landing.css";

function Landing(){
    return (
        <div>
            <div className="containers">
                <div className="content">
                <p>Website Is Optimized for Viewing Chrome</p>
                <h1>We're <span>Launching</span> Soon</h1>
                <div className="launch-time">
                    <div>
                        <p id="days">00</p>
                        <span>Days</span>
                    </div>
                    <div>
                        <p id="hours">00</p>
                        <span>Hours</span>
                    </div>
                    <div>
                        <p id="minutes">00</p>
                        <span>Minutes</span>
                    </div>
                    <div>
                        <p id="seconds">00</p>
                        <span>Seconds</span>
                    </div>
                </div>
                <button type="button">Learn More</button>
            </div>
            <img src={rocket} alt="rocket" className="rocket"></img>
            </div>
        </div>
    )
}

export default Landing;