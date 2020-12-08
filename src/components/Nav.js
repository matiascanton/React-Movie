import React, { useEffect, useState } from 'react'
import '../Nav.css'
import logo from '../images/netelix.png'
import SearchBox from './SearchBox';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        })
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])

    return (
        <div className={`nav ${show && "nav__black"} `}>
            <img
                className="nav__logo"
                src={logo}
                alt="Logo"
            />


        </div>


    )
}

export default Nav
