export const Header =()=>{
    
    return(
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png" alt=""/>
                </a>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#specs" className="nav__link">características </a>
                        </li>
                        <li className="nav__item">
                            <a href="#simu" className="nav__link">simulador</a>
                        </li>
                        <li className="nav__item">
                            <a href="#video" className="nav__link">Products</a>
                        </li>
                    </ul>
                    <div className="nav__close" id="nav-close">
                        <i className="ri-close-line"></i>
                    </div>
                </div>
                <div className="nav__toggle" id="nav-toggle">
                    <i className="ri-function-line"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;