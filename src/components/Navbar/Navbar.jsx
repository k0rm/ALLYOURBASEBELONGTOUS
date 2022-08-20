import React from 'react';
import './styles.scss';

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navContainer">
            <div className="navLogo">
                <h2>ALL YOUR BASE ARE BELONG TO US</h2>
            </div>
            <div className="navLinks">
                <ul className="navLinks">
                    <li className="navLink">
                        <Link to="/about" className='nl'>ABOUT ALL YOUR BASES</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar