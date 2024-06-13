export const SectVideo = ()=>{
    return(
        <section className="videoSection products" id="video">
        <video style={{width: "100%"}} autoPlay loop muted className="videoTrailler" src="/videoplayback.webm">
        </video>
        <div className="infLink">
            <a href="https://www.ford.com.ar/autos/mustang/models/mustang-mach1/" className="infAndLogo">
                <div className="VidLogoCont">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png" alt=""/>
                </div>
                <div className="VidTextCont">
                    Conoce mas sobre <br/> match 1 
                </div>
            </a>
        </div>
    </section>
    )
}

export default SectVideo;