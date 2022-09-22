import { NavLink } from "react-router-dom";
import React, {useState} from "react";
import Cursor from '../components/cursor'
import * as a from "../utils/about-img"
import map from '../images/About/map.svg'
import icon1 from '../images/About/icon-1.svg'
import icon2 from '../images/About/icon-2.svg'
import bg1 from '../images/About/bg-1.svg'
import bg2 from '../images/About/bg-2.svg'
import Menu from '../components/menu'
import Loader from "../components/loader";

function About () {
    const [isActive, setActive] = useState(false);
    const [isActiveLoader, setActiveLoader] = useState(true);
    const [isActiveLoaderBg, setActiveLoaderBg] = useState(true);
    const [isActiveMenu, setActiveMenu] = useState(false);

    const handleMouseEnter = e => {
        setActive(true)
    }
      const handleMouseLeave = e => {
        setActive(false)
    }

    setTimeout(() => {
        setActiveLoaderBg(false)
    }, 3300 )
    setTimeout(() => {
        setActiveLoader(false)
    }, 1500 )

    return (
        <>
        <div className={isActiveLoader ? 'loader-active ' : ' loader-inactive '}>
            <div className={isActiveLoaderBg ? 'loader-container' : 'loader-container-none'}>
                <Loader ></Loader>
            </div>
        </div>
        <div className={isActiveLoaderBg || isActiveMenu ? 'page-about page-about-100vh' : 'page-about'} >
            <header className="header-about">
                <NavLink onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="/" className="header-main__path" >[IN]</NavLink>
            </header>
            <div className="main-about">
                <div className="main-about__blocks">
                    <div className="main-about__block">
                        <h1 className="main-about__title">
                            ABOUT US
                        </h1>
                        <p className="main-about__subtitle">
                            Привет, мы агентство HERO[IN]MARKETING и мы собрали <span className="f-w--500">лучшую экспертизу</span> рынка и внедряем ее в продукты наших клиентов по всему миру 
                        </p>
                        <div className="elem-blocks">
                            <div className="elem-block"> DIGITAL ADV </div>
                            <div className="elem-block"> SMM </div>
                            <div className="elem-block"> EVENT </div>
                            <div className="elem-block"> STRATEGY </div>
                            <div className="elem-block"> PR </div>
                            <div className="elem-block"> PRODUCTION </div>
                            <div className="elem-block"> WEB </div>
                            <div className="elem-block"> INFLUENCE </div>
                            <div className="elem-block"> EMAIL-MARKETING</div>
                        </div>
                    </div>
                    
                    <div className="main-about__block--absolute">
                        <p className="main-about__title--28">
                            WE CREATE A NEW
                        </p>
                        <p className="main-about__title--68">
                            DIGITAL WORLD
                        </p>
                    </div>
                </div>
                <div className="main-about__block">
                    <p className="main-about__title--40">
                    <span className="f-w--500">260+ проектов</span>  с 2016 года 
                    </p>
                    <p className="main-about__title--25">
                        С 2016 года мы сделали более  260 проектов для брендов и корпораций в сфере digital.
                    </p>
                    <p className="main-about__title--25">                    
                        Наши проекты не ограничиваются рамками и мы делаем проекты по всему миру, включая Нидерланды, Германию, Великобританию, США, ОАЭ и других странах центральной и восточной Европы.
                    </p>
                </div>
                <p className="main-about__title--client">
                    Клиенты агентства:
                </p>
                <div className="main-about__client">
                    <div className="main-about-img"><img src={a.img2} alt="" /></div>
                    <div className="main-about-img"><img src={a.img38} alt="" /></div>
                    <div className="main-about-img"><img src={a.img36} alt="" /></div>
                    <div className="main-about-img"><img src={a.img37} alt="" /></div>
                    <div className="main-about-img"><img src={a.img25} alt="" /></div>
                    <div className="main-about-img"><img src={a.img35} alt="" /></div>
                    <div className="main-about-img"><img src={a.img34} alt="" /></div>
                    <div className="main-about-img"><img src={a.img33} alt="" /></div>
                    <div className="main-about-img"><img src={a.img32} alt="" /></div>
                    <div className="main-about-img"><img src={a.img31} alt="" /></div>
                    <div className="main-about-img"><img src={a.img30} alt="" /></div>
                    <div className="main-about-img"><img src={a.img29} alt="" /></div>
                    <div className="main-about-img"><img src={a.img15} alt="" /></div>
                    <div className="main-about-img"><img src={a.img28} alt="" /></div>
                    <div className="main-about-img"><img src={a.img27} alt="" /></div>
                    <div className="main-about-img"><img src={a.img26} alt="" /></div>
                    <div className="main-about-img"><img src={a.img13} alt="" /></div>
                    <div className="main-about-img"><img src={a.img11} alt="" /></div>
                    <div className="main-about-img"><img src={a.img24} alt="" /></div>
                    <div className="main-about-img"><img src={a.img9} alt="" /></div>
                    <div className="main-about-img"><img src={a.img23} alt="" /></div>
                    <div className="main-about-img"><img src={a.img22} alt="" /></div>
                    <div className="main-about-img"><img src={a.img21} alt="" /></div>
                    <div className="main-about-img"><img src={a.img20} alt="" /></div>
                    <div className="main-about-img"><img src={a.img7} alt="" /></div>
                    <div className="main-about-img"><img src={a.img5} alt="" /></div>
                    <div className="main-about-img"><img src={a.img3} alt="" /></div>
                    <div className="main-about-img"><img src={a.img19} alt="" /></div>
                    <div className="main-about-img"><img src={a.img18} alt="" /></div>
                    <div className="main-about-img"><img src={a.img17} alt="" /></div>
                    <div className="main-about-img"><img src={a.img16} alt="" /></div> 
                    <div className="main-about-img"><img src={a.img1} alt="" /></div> 
                    <div className="main-about-img"><img src={a.img14} alt="" /></div>
                    <div className="main-about-img"><img src={a.img12} alt="" /></div>
                    <div className="main-about-img"><img src={a.img10} alt="" /></div>
                    <div className="main-about-img"><img src={a.img8} alt="" /></div>
                    <div className="main-about-img"><img src={a.img6} alt="" /></div>
                    <div className="main-about-img"><img src={a.img4} alt="" /></div>

                </div>
            </div>
            <img src={map} alt="" className="about-map" />
            <img src={icon1} alt="" className="about-icon1" />
            <img src={icon2} alt="" className="about-icon2" />
            <img src={bg1} alt="" className="about-bg1" />
            <img src={bg2} alt="" className="about-bg2" />
        </div>
        <Menu setActiveMenu={setActiveMenu} isActiveMenu={isActiveMenu}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></Menu>
        <Cursor isActives={isActive}></Cursor> 
        </>
    )
}

export default About