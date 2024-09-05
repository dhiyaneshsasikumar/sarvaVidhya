import React, { useState, useEffect } from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import '../../index.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle('no-scroll');

        document.getElementById("menu").classList.toggle("spin")
        // document.getElementById("menu").classList.toggle("original")
        // document.getElementById("menu").classList.toggle("cross")
    };

    return (
        <nav className="navbar">
            <h1 className="logo"><Link to={"/"}>SARVA VIDHYA</Link></h1>
            <ul className={`nav-links ${isMenuOpen ? 'mobile-menu' : ''}`}>
                <li>
                    <Link to="/webDevelopment" className={`${location.pathname === '/webDevelopment' ? 'active ' : ''}services-link`} >
                        <div className="services-link-content" >
                            Web Development
                            {/* <MdOutlineArrowDropDown /> */}
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/digitalMarketing" className={`${location.pathname === '/digitalMarketing' ? 'active ' : ''}services-link`} >
                        <div className="services-link-content" >
                            Digital Marketing
                            {/* <MdOutlineArrowDropDown /> */}
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                        About Career
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                        Contact Us
                    </Link>
                </li>

            </ul>
            <img
                src=""
                alt=""
                id='menu'
                className={`menu-btn original`}
                onClick={toggleMenu}
            />
        </nav>
    );
};

export default Navbar;