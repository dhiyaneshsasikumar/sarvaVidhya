import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const customStyle = ({ isActive, isPending, isTransitioning }) => {
        const isMobile = window.innerWidth <= 768;

        return {
            fontWeight: isActive ? (isMobile ? "" : "600") : "",
            color: isActive ? (isMobile ? "whitesmoke" : "black") : "",
            viewTransitionName: isTransitioning ? "slide" : "",
            backgroundColor: isActive ? (isMobile ? "rgb(29, 29, 29)" : "") : '',
            borderRadius: isMobile ? "8px" : "",
        };
    };

    return (
        <nav>
            <Link to={'/'} className={styles.title}>SARVA VIDHYA</Link>
            <div>
                <img
                    onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}
                    className={styles.menu}
                    src="Nav/menu.png"
                    alt=""
                />
            </div>
            <ul className={`${styles.navList} ${menuOpen ? styles.open : ""}`}>
                <li>
                    <NavLink to="/webDevelopment" style={customStyle}>Web-Development</NavLink>
                </li>
                <li>
                    <NavLink to="/digitalMarketing" style={customStyle}>Digital Marketing</NavLink>
                </li>
                <li>
                    <NavLink to='/about' style={customStyle}>About Career</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' style={customStyle}>Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav