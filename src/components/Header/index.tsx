"use client"

import { useState } from "react";

export const Header =()=>{
    
    const [activeNav, setActiveNav] = useState("")

    const handleOnActive = ()=>{
        if(activeNav == "") setActiveNav("show-menu")
            else setActiveNav("")
    }

    const handleOnClose = ()=>{
        setActiveNav("")
    }

    return(
        <header className="header" id="header">
            <nav className="nav">
                <a href="#" className="nav__logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png" alt=""/>
                </a>
                <div className={`nav__menu ${activeNav}`} id="nav-menu">
                    <ul className="nav__list">
                        <li onClick={handleOnClose} className="nav__item">
                            <a href="#home" className="nav__link">Home</a>
                        </li>
                        <li onClick={handleOnClose} className="nav__item">
                            <a href="#specs" className="nav__link">características </a>
                        </li>
                        <li onClick={handleOnClose} className="nav__item">
                            <a href="#simu" className="nav__link">Performance</a>
                        </li>
                        <li onClick={handleOnClose} className="nav__item">
                            <a href="#video" className="nav__link">Creditos</a>
                        </li>
                    </ul>
                    <div className="nav__close" id="nav-close">
                        <button style={{background: "none"}} onClick={handleOnActive}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f8f8f8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                </div>
                <div className="nav__toggle" id="nav-toggle">
                    <button style={{background: "none"}} onClick={handleOnActive} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f8f8f8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>                    
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;