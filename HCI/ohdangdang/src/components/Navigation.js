import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css"

function Navigation(){
    return(
        <>
        <div className="burger">
            <input className="burger-check" type="checkbox" id="burger-check" />
            <label className="burger-icon" htmlFor="burger-check">
                <span className="burger-sticks"></span>
            </label>
            <div className="menu">
                 <div style={{width: "200px"}}></div>
                 <ul>
                     <li><Link to="/" style={{color: "dimgray"}}>Home</Link></li>
                     <li><Link to="/profile" style={{color: "dimgray"}}>Profile</Link></li>
                     <li><Link to="/about" style={{color: "dimgray"}}>About</Link></li>
                 </ul>
            </div>
        </div>  
        </>
    )
}

export default Navigation;