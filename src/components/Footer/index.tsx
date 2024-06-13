import Link from "next/link";
import SettingsExtraInf from "../SettingsExtraInf";

export const Footer = ()=>{
    return(
        <footer className="footer section">
        <div className="footer__container container grid">

            <div className="footer__content">
                <h3 className="footer__title">Ford</h3>

                <ul className="footer__links">
                    <li>
                        <Link href={"https://www.ford.com/"} className="footer__link">Sitio oficial</Link>
                    </li>
                    <li>
                        <Link href={"https://www.ford.com.ar/todos/"} className="footer__link">Modelos</Link>
                    </li>
                    <li>
                        <Link href={"https://www.ford.com.ar/"} className="footer__link">Ford Argentina</Link>
                    </li>
                    <li>
                        <Link href={"https://www.ford.com.ar/autos/mustang/models/mustang-mach1/"} className="footer__link">mustang-mach1</Link>
                    </li>
                </ul>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Santiago Cabral</h3>

                <ul className="footer__links">
                    <li>
                        <Link href={"https://santiagocabral.vercel.app/"} className="footer__link">Portfolio</Link>
                    </li>
                    <li>
                        <Link href={"https://santiagocabral.vercel.app/proyectos"} className="footer__link">Mas Proyectos</Link>
                    </li>
                    <li>
                        <Link href={"https://www.linkedin.com/in/santiago-cabral-6617bb2b3/"} className="footer__link">LinkedIn</Link>
                    </li>
                    <li>
                        <Link href={"https://www.instagram.com/santiaco.c.web/"} className="footer__link">Instagram</Link>
                    </li>
                </ul>
            </div>

            <div className="footer__content">
                <SettingsExtraInf/>
            </div>
        </div>

        <p className="footer__copy">
            Ford Mach 1 &#169; creado por <Link href={"https://santiagocabral.vercel.app/"}> <b style={{color: "#ededed"}} >Santiago Cabral</b> </Link>.
        </p>
    </footer>
    )
}

export default Footer;