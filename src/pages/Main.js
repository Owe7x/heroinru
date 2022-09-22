import React, {useState, useEffect, useRef} from "react";
import { NavLink } from "react-router-dom";
import imgIconBtn from '../images/Main/button-bottom.svg'
import Menu from '../components/menu'
import Cursor from '../components/cursor'
import { useGlobalEvent } from "beautiful-react-hooks";
import Loader from "../components/loader";
import allBrands from '../images/Main/all-brand.svg'
import * as img from "../utils/main-img"
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

function Main() {
  const [isActive, setActive] = useState(false);
  const [isActiveTelegram, setActiveTelegam] = useState(false);
  const [isActiveInst, setActiveInst] = useState(false);
  const [isMain, setIsMain] = useState(true);
  const [isActiveLoader, setActiveLoader] = useState(true);
  const [isActiveLoaderBg, setActiveLoaderBg] = useState(true);
  const [isActiveMenu, setActiveMenu] = useState(false);
  const [windowHeight, setWindowWidth] = useState(document.documentElement.clientHeight);
  const onWindowResize = useGlobalEvent("resize");
  const refSwap = useRef();
  const arrSwap = [ 'SOCIAL', 'STRATEGY', 'WEB', 'DIGITAL', 'EVENT', 'PR', 'MARKETING']
  var i = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      Swap()
    }, 1600)
  
    return () => clearInterval(interval);
  }, [])

/*   setInterval(() => {

    
    Swap()

  }, 1200) */
  onWindowResize((event: React.SyntheticEvent) => {
    setWindowWidth(document.documentElement.clientHeight);
  });
  
  const handleMouseEnter = e => {
    if(e.target.className === 'menu__social-item--telegram') {
      setActiveTelegam(true)
    } 
    if(e.target.className === 'menu__social-item--instagram') {
      setActiveInst(true)
    }
    setActive(true)
  }
  const handleMouseLeave = e => {
    setActiveTelegam(false)
    setActiveInst(false)
    setActive(false)
  }


  setTimeout(() => {
    setActiveLoaderBg(false)
  }, 3300 )
  setTimeout(() => {
      setActiveLoader(false)
  }, 1500 )

  function Swap() {
    console.log(refSwap.current);
    refSwap.current.innerHTML = arrSwap[i++];
    i = i % 7
  }





   return (
     <>
        <div className={isActiveLoader ? 'loader-active ' : ' loader-inactive '}>
            <div className={isActiveLoaderBg ? 'loader-container' : 'loader-container-none'}>
                <Loader  ></Loader>
            </div>
        </div>
      
     <div className={ isActiveMenu ? 'page-main page-loader-100vh' : 'page-main' } style={{ height: `${windowHeight}px` } } >
      <div className="bg-main-1"></div>
      <div className="bg-main-2"></div>
      <div className="bg-main-3"></div>
      <div className="bg-main-4"></div>
      <header className="header-main">
        <NavLink to="/" className="header-main__path" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter}>[IN]</NavLink>
        <div className="header-main__blocks">
        <NavLink to='/services' className="header-main__link-works" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter}>
          <div className="case__direction">
              <p className="main__sumbol">+</p>
              <div className="main__direction-name">services </div>
          </div>
        </NavLink>
        <NavLink to='/contact' className="header-main__link-works" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter}>
          <div className="case__direction">
              <p className="main__sumbol">+</p>
              <div className="main__direction-name">contact us </div>
          </div>
        </NavLink>
        </div>

      </header>
      <main className="main">
        <div className="main__info">
        <h2 className="main__subtitlte" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter}>HERO[IN]MARKETING AGENCY    </h2>
          <div className="main__titles" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter}>
            <h1 className="main__title" >WE ARE [IN]  </h1>
            <span ref={refSwap} className=" main__title swap">marketing</span>
          </div>
          
        </div>

          <div className="main__blocks">
              <div className="main__text">
                <p className="main__trends-text" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter}> 
                 <b className="main__bold">we catch  new <br /> marketing trends</b>   <br /> & match ideas with <br /> people 
                </p>
              </div>
              <div className="main__slider">
              <Splide options={ {
                        type    : 'loop',
                        perPage : 5,
                        autoplay: true,
                        interval: 3000,
                        arrows: false,
                        pagination: false,
                        breakpoints: {
                          1540: {
                            perPage: 4,
                          },
                          600: {
                            perPage: 3,
                          },
                          430: {
                            perPage: 2,
                          },
                        }
                      } }>
                  <SplideSlide>
                    <img src={img.skolkovo} alt="" srcset="" />
                  </SplideSlide>
                  <SplideSlide>
                    <img src={img.x5} alt="" srcset="" />
                  </SplideSlide>
                  <SplideSlide>
                    <img src={img.yandex} alt="" srcset="" />
                  </SplideSlide>
                  <SplideSlide>
                    <img src={img.kaspersky} alt="" srcset="" />
                  </SplideSlide>
                  <SplideSlide>
                    <img src={img.pepsico} alt="" srcset="" />
                  </SplideSlide>
                  <SplideSlide>
                    <img src={img.moscow} alt="" srcset="" />
                  </SplideSlide>
                  <SplideSlide>
                    <img src={img.education} alt="" srcset="" />
                  </SplideSlide>
                  <SplideSlide>
                    <img src={img.exportCenter} alt="" srcset="" />
                  </SplideSlide>
                  <SplideSlide>
                    <img src={img.forbes} alt="" srcset="" />
                  </SplideSlide>
                  <SplideSlide>
                    <img src={img.Pyaterochka} alt="" srcset="" />
                  </SplideSlide>
                </Splide>
              </div>
              <div className="main__slider-mb"></div>
              
{/*               <div className="main__trends">
                <NavLink to="/сases" className="header-main__path" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter}><img src={imgIconBtn} alt="Button" className="main__trends-img"/></NavLink>
              </div> */}
          </div>
      </main>
     </div>
     <Menu isMain={isMain} setActiveMenu={setActiveMenu} isActiveMenu={isActiveMenu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ></Menu>
     <Cursor isActives={isActive} isActiveTelegram={isActiveTelegram} isActiveInst={isActiveInst}></Cursor>


   </>
   )
};

export default Main;