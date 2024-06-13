import Simulator from "../Simulator";

export const Main =()=>{
return(
        <main className="main">
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="mustangCarCont" >
                        <img src="/principal.jpg" alt="" className="home__img"/>
                    </div>
                    
                    <div className="home__data">
                        <div className="home__header">
                            <div className="covergradient">
                                <img className="sololog" src="/sololog.png" alt=""/>
                            </div>
                            <h2 className="home__subtitle">Mach <span className="macknumber">1</span></h2>
                        </div>
        
                        <div className="home__footer">
                            <h3 className="home__title-description">Overview</h3>
                            <p className="home__description">En 2023, el Ford Mustang Mach 1, parte de la icónica familia Mustang, mantiene su legado de potencia y estilo, elevando el rendimiento a nuevos niveles y proporcionando una emocionante experiencia de conducción.
                            </p>
                            <div className="wrapper1">
                                <div className="link_wrapper">
                                <a className="buttonEro" href="#specs">Ver mas</a>
                                
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sponsor section">
            <div className="sponsor__container container grid">
                <img src="/sponsor1.png" alt="" className="sponsor__img"/>
                <img src="/sponsor2.png" alt="" className="sponsor__img"/>
                <img src="/sponsor3.png" alt="" className="sponsor__img"/>
                <img src="/sponsor4.png" alt="" className="sponsor__img"/>
            </div>
            </section>

            <section className="specs section grid" id="specs">
            <h2 className="section__title section__title-gradient">Principal</h2>
    
            <div className="specs__container">
                <div className="specs__content grid">
                    <div className="specs__data">
                        <i className="fa-solid fa-gears specs__icon"></i>
                        <h3 className="specs__title">Motor</h3>
                        <span className="specs__subtitle">V8 5.0L TiVCT</span>
                    </div>
    
                    <div className="specs__data">
                        <i className="fa-solid fa-bolt specs__icon"></i>
                        <h3 className="specs__title">Potencia</h3>
                        <span className="specs__subtitle">475 CV/7.250 rpm</span>
                    </div>
    
                    <div className="specs__data">
                        <i className="fa-solid fa-gas-pump specs__icon"></i>
                        <h3 className="specs__title">Tanque</h3>
                        <span className="specs__subtitle">569 Nm /4.900 rpm</span>
                    </div>
    
                    <div className="specs__data">
                        <i className="fa-solid fa-gauge-simple-high specs__icon"></i>
                        <h3 className="specs__title">Transmisión</h3>
                        <span className="specs__subtitle">Automática secuencial <br/> de 10 velocidades</span>
                    </div>
                </div>
                
                <div className="backfront1">
                    {/* <img src="/front.png" alt="" className="specs__img"/> */}
                    <div className=""></div>
                </div>
            </div>
            </section>

            <section className="case section grid">
            <h2 className="section__title section__title-gradient">Diseño</h2>
    
            <div className="specs2__container">
                <div className="blackfont2">
                    <div className=""></div>
                </div>
    
                <div className="case__data">
                    <p className="case__description">
                        El Ford Mustang Mach 1 posee un diseño agresivo y elegante que combina elementos retro y modernos, rindiendo homenaje a la herencia del Mustang mientras proyecta una imagen futurista.
                    </p>
                </div>
            </div>
            </section>

            <Simulator/>

            <section className="products section">
            
            <div className="products__container container">
                <article className="products__card">
                    <div className="products__content">
                        <img src="/motorV8.avif" alt="" className="products__img"/>
    
                        <h3 className="products__title">Motor V8</h3>
                        <span className="products__price">
                            <i className="fa-solid fa-angles-right"></i> Motor V8 5.0L TiVCT, con 4 válvulas por cilindro y distribución variable. <br/>
                            <i className="fa-solid fa-angles-right"></i> Potencia máxima 475 CV a 7.250 rpm <br/>
                            <i className="fa-solid fa-angles-right"></i> Torque máximo 569 NM a 4.900 rpm</span>
    
                    </div>
                </article>
                <article className="products__card">
                    <div className="products__content">
                        <img src="/cajaautomatica.jpg" alt="" className="products__img"/>
    
                        <h3 className="products__title">Transmisión Automática</h3>
                        <span className="products__price"><i className="fa-solid fa-angles-right"></i> Automática secuencial de 10 velocidades con levas al volante.</span>
    
                    </div>
                </article>
                <article className="products__card">
                    <div className="products__content">
                        <img src="/amortiguacion.jpg" alt="" className="products__img"/>
    
                        <h3 className="products__title">Sistema de amortiguación MagneRide</h3>
                        <span className="products__price"><i className="fa-solid fa-angles-right"></i> Permite variar la dureza de los amortiguadores para lograr una experiencia de manejo única y personalizable.</span>
    
                    </div>
                </article>
            </div>
            </section>
        </main>
    )
}

export default Main;