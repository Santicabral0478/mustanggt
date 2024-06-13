"use client"

import React, { useEffect } from 'react';

const Simulator = () => {
  useEffect(() => {
    const contenedor = document.querySelector('.contenedor');
    const interior = document.querySelector('.interior');
    const readyButton = document.querySelector('.ready-prog');
    const stopButton = document.querySelector('.stop-prog');
    const screenLoad = document.querySelector('.screen-load');
    const kmmetter = document.querySelector('.kmmetter');

    const puntos = [
        { x: 58, y: 13 },
        { x: 91, y: 10 },
        { x: 100, y: 43 },
        { x: 95, y: 75 },
        { x: 74, y: 80 },
        { x: 44, y: 76 },
        { x: 22, y: 93 },
        { x: 6, y: 62 },
        { x: 0, y: 32 },
        { x: 39, y: 42 }
    ];

    let currentIndex = 0;
    let animationInterval = null;
    let degensInterval = null;

    const startAnimation = () => {
      if (!animationInterval) {
          animationInterval = setInterval(moveInterior, 100000 / puntos.length);
          
          screenLoad.classList.remove('nonpre');

        setTimeout(() => {
          screenLoad.classList.add('nonpre');
        }, 10000);

        setTimeout(() => {
            kmmetter.classList.add('degens');
            setTimeout(() => {
              kmmetter.classList.remove('degens');
            }, 800); 
      
            setTimeout(() => {
              kmmetter.classList.add('degens2');
            }, 10000); 
      
            setTimeout(() => {
              kmmetter.classList.add('degens3');
            }, 10500); 
      
            setTimeout(() => {
              kmmetter.classList.add('degens4');
            }, 10000); 
      
            setTimeout(() => {
              kmmetter.classList.remove('degens4');
            }, 17000); 
      
            setTimeout(() => {
              kmmetter.classList.add('degens4');
            }, 22000); 
      
            setTimeout(() => {
              kmmetter.classList.remove('degens4');
            }, 27000); 
      
            setTimeout(() => {
              kmmetter.classList.add('degens4');
            }, 32000); 
      
            setTimeout(() => {
              kmmetter.classList.remove('degens4');
            }, 37000);
      
            setTimeout(() => {
              kmmetter.classList.add('degens4');
            }, 42000); 
      
            setTimeout(() => {
              kmmetter.classList.remove('degens4');
            }, 47000);
      
            setTimeout(() => {
              kmmetter.classList.add('degens4');
            }, 52000); 
      
            setTimeout(() => {
              kmmetter.classList.remove('degens4');
            }, 57000); 
      
            setTimeout(() => {
              kmmetter.classList.add('degens4');
            }, 62000); 
      
            setTimeout(() => {
              kmmetter.classList.remove('degens4');
            }, 67000); 
      
            setTimeout(() => {
              kmmetter.classList.add('degens4');
            }, 72000); 
      
            setTimeout(() => {
              kmmetter.classList.remove('degens4');
            }, 77000); 
      
            setTimeout(() => {
              kmmetter.classList.add('degens4');
            }, 82000); 
      
            setTimeout(() => {
              kmmetter.classList.remove('degens4');
            }, 87000); 
          }, 11000);

          setTimeout(()=>{
            clearInterval(animationInterval);
            clearInterval(degensInterval);
            animationInterval = null;
            degensInterval = null;
            kmmetter.classList.remove('degens3');
            kmmetter.classList.remove('degens2');
          }, 117000 )
      }
    };

    const stopAnimation = () => {
      clearInterval(animationInterval);
      clearInterval(degensInterval);
      animationInterval = null;
      degensInterval = null;
    };

    const moveInterior = () => {
      const currentPoint = puntos[currentIndex];
      interior.style.left = currentPoint.x + '%';
      interior.style.top = currentPoint.y + '%';
      currentIndex = (currentIndex + 1) % puntos.length;
    };

    if (readyButton && stopButton) {
      readyButton.addEventListener('click', startAnimation);
      stopButton.addEventListener('click', stopAnimation);
    }

    return () => {
      if (readyButton && stopButton) {
        readyButton.removeEventListener('click', startAnimation);
        stopButton.removeEventListener('click', stopAnimation);
      }
    };
  }, []);

  return (
    <section className="discount section" id="simu">
      <div className="discount__container container grid">
        <div className="discount__animate">
          <div className="nogap">
            <h2 className="discount__title">Mach 1: <br/> ¡Acelera al Límite!</h2>
            <p className="discount__description">desata su velocidad en este  simulador</p>
            <div className="gen-numb-punt-cont">
              <div className="km-cont">
                <div className="imgcont">
                  <img src="assets/imgauto/dash.png" alt=""/>
                  <div className="puntimg-cont">
                    <img className="kmmetter" src="/punte.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons-cont">
            <a id="startButton" className="ready-prog btn-run">Inciar</a>
            <a id="stopButton" className="stop-prog btn-run"><i className="fa-solid fa-stop"></i></a>
          </div>
        </div>
        <div className="load-map-cont">
          <div className="map-general-cont">
            <div className="screen-load nonpre">
              <div className="items">
                <svg viewBox="-2000 -1000 4000 2000">
                  <path id="inf" d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"></path>
                </svg>
                <p className="load-text">Cargando...</p>
              </div>  
            </div>
            <div className="contenedor">
              <div className="interior " id="car"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulator;
