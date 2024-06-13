export const Footer = ()=>{
    return(
        <footer className="footer section">
        <div className="footer__container container grid">
            <a href="#" className="footer__logo">
                <img src="/logo.png" alt=""/>
            </a>

            <div className="footer__content">
                <h3 className="footer__title">Sitio Oficial</h3>

                <ul className="footer__links">
                    <li>
                        <a href="#" className="footer__link">Acerca de</a>
                    </li>
                    <li>
                        <a href="#" className="footer__link">Modelos</a>
                    </li>
                    <li>
                        <a href="#" className="footer__link">Ford Argentina</a>
                    </li>
                    <li>
                        <a href="#" className="footer__link">mustang-mach1</a>
                    </li>
                </ul>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Green Studios</h3>

                <ul className="footer__links">
                    <li>
                        <a href="#" className="footer__link">Nosotros</a>
                    </li>
                    <li>
                        <a href="#" className="footer__link">Servicios</a>
                    </li>
                    <li>
                        <a href="#" className="footer__link">Blog</a>
                    </li>
                    <li>
                        <a href="#" className="footer__link">Contactanos</a>
                    </li>
                </ul>
            </div>

            <div className="footer__content">
                <form action="" className="footer__form">
                    <input type="email" placeholder="Email" className="footer__input"/>
                    <button className="button button--flex">
                        <i className="ri-send-plane-line button__icon"></i> Enviar mensaje
                    </button>
                </form>

                <div className="footer__social">
                    <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                        <i className="ri-facebook-fill"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                        <i className="ri-instagram-line"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank" className="footer__social-link">
                        <i className="ri-twitter-line"></i>
                    </a>
                </div>
            </div>
        </div>

        <p className="footer__copy">
             Green Studios &#169; Todos los derechos reservados.
        </p>
    </footer>
    )
}

export default Footer;