import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css"

function Navigation(){
    return(
        <>
            <div className="menu-wrap">
                <input type="checkbox" className="toggler" />
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div>
                        <div>   
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/profile">Profile</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation;