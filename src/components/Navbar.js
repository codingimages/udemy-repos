import React from 'react'
import { Link } from "gatsby"
import Logo from "../images/favicon.png"
import navStyle from "../components/css/navbar.module.css"

const Navbar = () => {
    return (
        <div className={navStyle.navbarFull}>
            <div className={navStyle.navbarContainer}>
                <div className={navStyle.navbarAlign} >
                    <img alt="website logo" src={Logo} />
                    <Link className={navStyle.links} to="/">Coding Images</Link>
                </div>
                <div className={navStyle.navbarLinks}>
                    <Link className={navStyle.links} to="/">Start</Link>
                    <Link className={navStyle.links} to="/services">Services</Link>
                    <Link className={navStyle.links} to="/portfolio">Portfolio</Link>
                    <Link className={navStyle.links} to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
