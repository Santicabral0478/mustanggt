"use client"

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const Simulator = () => {
  const videoRef: any = useRef(null);
  const [displayNone, setDisplayNone] = useState("")

  const handlePlay = () => {
    if(displayNone == "") setDisplayNone("displayNone")
    if (videoRef.current) {
      videoRef.current.play();
    }
  };


  return (
    <section className="discount section" id="simu">
      <div className="discount__container container grid">
        <div className="discount__animate">
          <div className="nogap">
            <h2 className="discount__title">Ford Performance</h2>
            <p className="discount__description">
              <b>Es el enfrentamiento definitivo en circuito:</b>
              <br/><br/>
              Ocho modelos de la gama global Ford Performance <br /> 
              juntos en un circuito por primera vez, llevados <br /> 
              al límite por los pilotos del equipo Ford Chip <br /> 
              Ganassi Racing.
            </p>
              <Link href={"https://www.youtube.com/watch?v=kMf-qtvYRJc"} className='viewMoreYt'>
                Ver mas
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"  viewBox="0 0 24 24" className='ytSvg'><path d="M12.04 3.5c.59 0 7.54.02 9.34.5a3.02 3.02 0 0 1 2.12 2.15C24 8.05 24 12 24 12v.04c0 .43-.03 4.03-.5 5.8A3.02 3.02 0 0 1 21.38 20c-1.76.48-8.45.5-9.3.51h-.17c-.85 0-7.54-.03-9.29-.5A3.02 3.02 0 0 1 .5 17.84c-.42-1.61-.49-4.7-.5-5.6v-.5c.01-.9.08-3.99.5-5.6a3.02 3.02 0 0 1 2.12-2.14c1.8-.49 8.75-.51 9.34-.51zM9.54 8.4v7.18L15.82 12 9.54 8.41z"/></svg>
              </Link>
          </div>
          <div className="buttons-cont">
          </div>
        </div>
        <div className="load-map-cont">
          <div className="map-general-cont">
            <video ref={videoRef} controls>
              <source src="/ford.mp4" type="video/mp4" />
              Video no soportado :/
            </video>
            <div className={`minCont ${displayNone}`}>
              <button onClick={handlePlay} className="buttonPlay">
                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulator;