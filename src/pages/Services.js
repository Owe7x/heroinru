import React, {useState, useRef,useEffect} from "react";
import { NavLink } from "react-router-dom";
import Menu from '../components/menu'
import Cursor from '../components/cursor'
import Footer from '../components/footer'
import { useGlobalEvent } from "beautiful-react-hooks";
import * as img from "../utils/services-img"
import { Link, animateScroll as scroll } from "react-scroll";
import Slider from "react-slick";
import Loader from "../components/loader";
import {caseBrand, csp1, csp2} from '../utils/case-import';
import buttonSlide from '../images/Services/array.svg'

function Services() {
    const [isActive, setActive] = useState(false);
    const [isActiveTelegram, setActiveTelegam] = useState(false);
    const [isActiveInst, setActiveInst] = useState(false);
    const [isActiveLoader, setActiveLoader] = useState(true);
    const [isActiveLoaderBg, setActiveLoaderBg] = useState(true);
    const [isActiveMenu, setActiveMenu] = useState(false);
    const [windowWidth , setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(document.documentElement.clientHeight);
    
    const onWindowResize = useGlobalEvent("resize");
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const refMenu = useRef(null);
    const footer = useRef(null);


    onWindowResize((event: React.SyntheticEvent) => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(document.documentElement.clientHeight);
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

      
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 360,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
    };

   window.addEventListener('scroll' , (e) => {
        const pageHeight = document.documentElement.scrollHeight
        const meScroll = window.pageYOffset + document.documentElement.clientHeight
        const heightFooter = footer.current.clientHeight
        const invisible = pageHeight - heightFooter / 2
        console.log(meScroll);
        console.log(invisible);
        if(meScroll < invisible) {
            refMenu.current.classList.remove('menu-invisible')
        } else {
            refMenu.current.classList.add('menu-invisible')
        }

    }) 

    return (
      <>
        <div className={isActiveLoader ? 'loader-active ' : ' loader-inactive '}>
            <div className={isActiveLoaderBg ? 'loader-container' : 'loader-container-none'}>
                <Loader ></Loader>
            </div>
        </div>
      
        <div className={isActiveLoaderBg || isActiveMenu ? 'page-loader-100vh' : 'page-loader'}>
            <div className="page-services"  >
            <header className="header-services" >
                <div className="header-services__logo">
                    <NavLink to="/" className="header-main__path" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter}>[IN]</NavLink>
                </div>
                <div className="header-services__main">
                    <div className="header-services__info">
                        <h1 className="header-services__title">
                            <span className="header-services__title-thin">SERVICES</span>
            
                            we are in
                        </h1>
                    </div>
                    <div  className="services-nav__ul services-nav__ul-main">
                    
                                    <li className="services-nav__link"><Link   className=' services-nav__href' to="digital" spy={true} smooth={true} offset={-140} duration={600} >digital</Link></li>
                                    <li className="services-nav__link"><Link   className=' services-nav__href' to="event" spy={true} smooth={true} offset={-140} duration={600} >event(+livestream)</Link></li>
                                    <li className="services-nav__link"><Link   className=' services-nav__href' to="web" spy={true} smooth={true} offset={-140} duration={600} >web / app</Link></li>
                                    <li className="services-nav__link"><Link   className=' services-nav__href' to="pr" spy={true} smooth={true} offset={-140} duration={600} >pr / new media</Link></li>
                                    <li className="services-nav__link"><Link   className=' services-nav__href' to="production" spy={true} smooth={true} offset={-140} duration={600} >production</Link></li>
                                    <li className="services-nav__link"><Link   className=' services-nav__href' to="blogger" spy={true} smooth={true} offset={-140} duration={600} >bloggers</Link></li>
                                    <li className="services-nav__link"><Link   className=' services-nav__href' to="smm" spy={true} smooth={true} offset={-140} duration={600} >smm / content</Link></li>
                                    <li className="services-nav__link"><Link   className=' services-nav__href' to="email" spy={true} smooth={true} offset={-140} duration={600} >email-marketing</Link></li>
                                    <li className="services-nav__link"><Link   className=' services-nav__href' to="strategy" spy={true} smooth={true} offset={-140} duration={600} >strategy</Link></li>
                                    {/* <li className="services-nav__link"><Link className=' services-nav__href' to="projects" spy={true} smooth={true} offset={-140} duration={600} >special projects</Link></li> */}
                    </div>
                </div>
                <Link onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className='servisces-button-slide' to="digital" spy={true} smooth={true} offset={-140} duration={600} ><img src={buttonSlide} alt="" /></Link>
            </header>
            <main className="main-services">
                    <div className="bg-radial-1"></div>
                    <div className="bg-radial-2"></div>
                    <div className="bg-radial-3"></div>
                    <div className="bg-radial-4"></div> 
                    <div className="bg-radial-5"></div> 
                    <div className="main-services__container" >
                        <div className="main-services__blocks" style={ windowWidth <=1050 ? {height: 'auto'} : { height: `${windowHeight - 150 }px` } }>
                            <div className="main-services__block-main" id="digital">
                                <div className="main-services__block-main__header b-header-1">
                                    <div className="main-services__block-main__header__wrapper">
                                        <div className="main-services__block-main__header__title">
                                            <h1 className="main-services__block__title">
                                            DIGITAL -РЕКЛАМА
                                            </h1>
                                        </div>
    {/*                                     <div className="main-services__block-main__header__button">
                                            more
                                        </div> */}
                                    </div>
                                    <div className="main-services__block-main__header__wrapper">
                                        <p className="main-services__block-main__header__text-2">
                                        ПРИВЛЕЧЕНИЕ КЛИЕНТОВ, ПРОДВИЖЕНИЕ B2B УСЛУГ, УВЕЛИЧЕНИЕ ЗНАНИЯ
                                        </p>
                                    </div>
                                </div>
                                <div className="main-services__block-main__item">
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={csp2.skOpen} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Комплексная digital-кампания и 100 000+ online-участников на крупнейшем технологическом форуме России
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Forbes} alt="" className="main-services__block-main__item__block__logo" />    
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Продвижение клубных программ Forbes Ontology для топ-менеджеров со стоимостью участия 450 000 рублей
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={csp2.business} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text br-none">
                                        Digital-продвижение программ поддержки предпринимателей от Правительсва Москвы
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                </div>
                                <Slider {...settings} className='main-services__block-main__item__block-slider'>
                                <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={csp2.skOpen} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Комплексная digital-кампания и 100 000+ online-участников на крупнейшем технологическом форуме России
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Forbes} alt="" className="main-services__block-main__item__block__logo" />    
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Продвижение клубных программ Forbes Ontology для топ-менеджеров со стоимостью участия 450 000 рублей
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={csp2.business} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text br-none">
                                        Digital-продвижение программ поддержки предпринимателей от Правительсва Москвы
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                </Slider>
                                <img src={csp2.arrowRight} alt="" className="main-services__arrow" />
    {/*                             <div className="main-services__block-main__header__button main-services__block-main__header__button-mobile">
                                            more
                                </div> */}
                            </div>
                        </div>
                        <div className="main-services__blocks" style={ windowWidth <=1050 ? {height: 'auto'} : { height: `${windowHeight - 150 }px`  } }>
                            <div className="main-services__block-main" id="event">
                                <div className="main-services__block-main__header b-header-2 br-none">
                                    <div className="main-services__block-main__header__wrapper">
                                        <div className="main-services__block-main__header__title">
                                            <h1 className="main-services__block__title">
                                            EVENTS 
                                            </h1>
                                        </div>
    {/*                                     <div className="main-services__block-main__header__button">
                                            подробнее <img className="array-btn" src={img.arrayBtn} alt="" srcSet="" />
                                        </div> */}
                                    </div>
                                    <div className="main-services__block-main__header__wrapper">
                                        <p className="main-services__block-main__header__text max-width-340">
                                        ПРОДВИЖЕНИЕ КРУПНЕЙШИХ БИЗНЕСА, IT и ОБРАЗОВАтельных мероприятий
                                        </p>
                                        <p className="main-services__block-main__header__text-thin max-width-320">
                                        Собственная Livestream платформа для проведения online-мероприятий 
                                        </p>
                                    </div>
                                </div>
                                <div className="main-services__block-main__item">
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.MadeinRussia} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Главное экспортное событие года - 53 000 участников и прямая трансляция Россия 24
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.skolkovo} alt="" className="main-services__block-main__item__block__logo" />    
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        5 лет продвижения форумов Sk - Открытые инновации, Nobel Forum, Startup Village 
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Soho} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text br-none">
                                        Культовые дубайские вечеринки с мировыми звездами - Bob Sinclar, Jason Derulo, Black Coffee
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                </div>
                                <Slider {...settings} className='main-services__block-main__item__block-slider'>
                                <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.MadeinRussia} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Главное экспортное событие года - 53 000 участников и прямая трансляция Россия 24
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.skolkovo} alt="" className="main-services__block-main__item__block__logo" />    
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        5 лет продвижения форумов Sk - Открытые инновации, Nobel Forum, Startup Village 
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Soho} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text br-none">
                                        Культовые дубайские вечеринки с мировыми звездами - Bob Sinclar, Jason Derulo, Black Coffee
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                </Slider>
                                <img src={csp2.arrowRight} alt="" className="main-services__arrow" />
    {/*                             <div className="main-services__block-main__header__button main-services__block-main__header__button-mobile">
                                            подробнее
                                            <img className="array-btn" src="/static/media/array-btn.61e9d60c2c395a705e6a420f704531fa.svg" alt="" srcSet=""></img>
                                </div> */}
                            </div>
                        </div>
                        <div className="main-services__blocks" style={ windowWidth <=1050 ? {height: 'auto'} : { height: `${windowHeight - 150 }px`  } }>
                            <div className="main-services__block-main" id="web">
                                <div className="main-services__block-main__header b-header-3 br-none">
                                    <div className="main-services__block-main__header__wrapper">
                                        <div className="main-services__block-main__header__title">
                                            <h1 className="main-services__block__title">
                                            web / app
                                            </h1>
                                        </div>
    {/*                                     <div className="main-services__block-main__header__button">
                                        узнать больше <img className="array-btn" src={img.arrayBtn} alt="" srcSet="" />
                                        </div> */}
                                    </div>
                                    <div className="main-services__block-main__header__wrapper">
                                        <p className="main-services__block-main__header__text max-width-340">
                                        Разработка САЙТов, WEB-ПОРТАЛов и мобильных приложений
                                        </p>
                                        <p className="main-services__block-main__header__text-thin max-width-320">
                                        Полный цикл создания проекта от идеи и маркетингового наполнения до разработки и администрования
                                        </p>
                                    </div>
                                </div>
                                <div className="main-services__block-main__item">
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Kaspersky} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        5 лет web-разработки и технической поддержки ключевого b2b-проекта компании
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Pepsico} alt="" className="main-services__block-main__item__block__logo" />    
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Разработка внутреннего web-портал Pepsico для сотрудников из 7 стран и 20 бренд-юнитов
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Pyaterochka} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text br-none">
                                        Web- и App-разработка HR-brand проекта для 100 000+ сотрудников по всей России
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                </div>
                                <Slider {...settings} className='main-services__block-main__item__block-slider'>
                                <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Kaspersky} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        5 лет web-разработки и технической поддержки ключевого b2b-проекта компании
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Pepsico} alt="" className="main-services__block-main__item__block__logo" />    
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Разработка внутреннего web-портал Pepsico для сотрудников из 7 стран и 20 бренд-юнитов
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Pyaterochka} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text br-none">
                                        Web- и App-разработка HR-brand проекта для 100 000+ сотрудников по всей России
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                </Slider>
                                <img src={csp2.arrowRight} alt="" className="main-services__arrow" />
    {/*                             <div className="main-services__block-main__header__button main-services__block-main__header__button-mobile">
                                узнать больше
                                <img className="array-btn" src="/static/media/array-btn.61e9d60c2c395a705e6a420f704531fa.svg" alt="" srcSet=""></img>
                                </div> */}
                            </div>
                        </div>
                        <div className="main-services__blocks" style={ windowWidth <=1050 ? {height: 'auto'} : { height: `${windowHeight - 150 }px`  } }>
                            <div className="main-services__block-main" id="pr">
                                <div className="main-services__block-main__header b-header-4 br-none">
                                    <div className="main-services__block-main__header__wrapper">
                                        <div className="main-services__block-main__header__title max-width-auto">
                                            <h1 className="main-services__block__title">
                                            PR / New Media
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="main-services__block-main__header__wrapper">
                                        <p className="main-services__block-main__header__text-2">
                                        РАЗРАБОТКА MEDIA-СТРАТЕГИЙ, ЗАПУСК PR-КАМПАНИЙ И ИНТЕГРАЦИИ В NEW MEDIA
                                        </p>
                                    </div>
                                </div>
                                <div className="main-services__block-main__item">
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.exportCenter} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        PR-кампания и организация пресс-центра крупнейшего экспортного форума от РЭЦ «Сделано в России» 
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Kaspersky} alt="" className="main-services__block-main__item__block__logo" />    
                                        </div>
                                        <p className="main-services__block-main__item__block__text ">
                                        Реализация размещений в ведущих бизнес и IT-СМИ, разработка и продвижение спецпроектов компании
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.mos} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text br-none">
                                        PR- и GR-сопровождение крупнейшего события в сфере образования с участием первых лиц государства
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                </div>
                                <Slider {...settings} className='main-services__block-main__item__block-slider'>
                                <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.exportCenter} alt="" className="main-services__block-main__item__block__logo w-100" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text main-services__block-main--minh-140">
                                        PR-кампания и организация пресс-центра крупнейшего экспортного форума от РЭЦ «Сделано в России» 
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Kaspersky} alt="" className="main-services__block-main__item__block__logo" />    
                                        </div>
                                        <p className="main-services__block-main__item__block__text main-services__block-main--minh-140">
                                        Реализация размещений в ведущих бизнес и IT-СМИ, разработка и продвижение спецпроектов компании
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.mos} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text main-services__block-main--minh-140 br-none">
                                        PR- и GR-сопровождение крупнейшего события в сфере образования с участием первых лиц государства
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                </Slider>
                                <img src={csp2.arrowRight} alt="" className="main-services__arrow" />
                            </div>
                        </div>
                        <div className="main-services__blocks" style={ windowWidth <=1050 ? {height: 'auto'} : { height: `${windowHeight - 150 }px`  } }>
                            <div className="main-services__block-main" id="production">
                                <div className="main-services__block-main__header b-header-5 br-none">
                                    <div className="main-services__block-main__header__wrapper">
                                        <div className="main-services__block-main__header__title max-width-auto">
                                            <h1 className="main-services__block__title">
                                            Production
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="main-services__block-main__header__wrapper">
                                        <p className="main-services__block-main__header__text-2">
                                        Создание рекламных и корпоративных видеороликов от креативной идеи до запуска в сети и на ТВ
                                        </p>
                                    </div>
                                </div>
                                <div className="main-services__block-main__item">
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Action} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Продюсирование и ведение главного YouTube-канала для бухгалтеров. Более 2 500 000 просмотров на канале
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.MadeinRussia} alt="" className="main-services__block-main__item__block__logo" />    
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Создание видео-роликов и презентаций для пленарного заседания с участием премьер министра России
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Ui} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text br-none">
                                        Создание рекламных роликов образовательного портала для размещения на ТВ
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                </div>
                                <Slider {...settings} className='main-services__block-main__item__block-slider'>
                                <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Action} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Продюсирование и ведение главного YouTube-канала для бухгалтеров. Более 2 500 000 просмотров на канале
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.MadeinRussia} alt="" className="main-services__block-main__item__block__logo" />    
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Создание видео-роликов и презентаций для пленарного заседания с участием премьер министра России
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Ui} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text br-none">
                                        Создание рекламных роликов образовательного портала для размещения на ТВ
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                </Slider>
                                <img src={csp2.arrowRight} alt="" className="main-services__arrow" />
                            </div>
                        </div>
                        <div className="main-services__blocks" style={ windowWidth <=1050 ? {height: 'auto'} : { height: `${windowHeight - 150 }px` } }>
                            <div className="main-services__block-main" id="blogger">
                                <div className="main-services__block-main__header b-header-6 br-none">
                                    <div className="main-services__block-main__header__wrapper">
                                        <div className="main-services__block-main__header__title max-width-auto">
                                            <h1 className="main-services__block__title">
                                            Bloggers 
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="main-services__block-main__header__wrapper">
                                    <p className="main-services__block-main__header__text-2">
                                    РАЗРАБОТКА И РЕАЛИЗАЦИЯ РЕКЛАМНЫХ КАМПАНИЙ И НАТИВНОГО ПРОДВИЖЕНИЯ С УЧАСТИЕМ БЛОГЕРОВ 
                                        </p>
                                    </div>
                                </div>
                                <div className="main-services__block-main__item">
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.skVision} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Охватная анонсирующая  кампания c привлечением топ-блогеров: Шихман, Варламов, Wylsacom, Лебедев и др.
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.OpenInnovation} alt="" className="main-services__block-main__item__block__logo" />    
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Масштабная анонсирующая кампания с привлечением блогеров и посевами в tech Telegram-каналах
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Dnk} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text br-none">
                                        Блогерская промокампания клуба рэпера Geegun и Grand-открытие с участием мировой звезды - рэпера Tyga
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                </div>
                                <Slider {...settings} className='main-services__block-main__item__block-slider'>
                                <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.skVision} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text main-services__block-main--minh-140">
                                        Охватная анонсирующая  кампания c привлечением топ-блогеров: Шихман, Варламов, Wylsacom, Лебедев и др.
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.OpenInnovation} alt="" className="main-services__block-main__item__block__logo" />    
                                        </div>
                                        <p className="main-services__block-main__item__block__text main-services__block-main--minh-140">
                                        Масштабная анонсирующая кампания с привлечением блогеров и посевами в tech Telegram-каналах
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Dnk} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text main-services__block-main--minh-140 br-none">
                                        Блогерская промокампания клуба рэпера Geegun и Grand-открытие с участием мировой звезды - рэпера Tyga
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                </Slider>
                                <img src={csp2.arrowRight} alt="" className="main-services__arrow" />
                            </div>
                        </div>
                        <div className="main-services__blocks" style={ windowWidth <=1050 ? {height: 'auto'} : { height: `${windowHeight - 150 }px`  } }>
                            <div className="main-services__block-main b-7-1" id="smm">
                                <div className="main-services__block-main__header b-header-7 br-none">
                                    <div className="main-services__block-main__header__wrapper">
                                        <div className="main-services__block-main__header__title max-width-auto">
                                            <h1 className="main-services__block__title">
                                            SMM / Content
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="main-services__block-main__header__wrapper">
                                        <p className="main-services__block-main__header__text max-width-340">
                                        МАРКЕТИНГ ПОЛНОГО ЦИКЛА В СОЦИАЛЬНЫХ СЕТЯХ 
                                        </p>
                                        <p className="main-services__block-main__header__text-thin max-width-320">
                                        Помогаем привлечь новых клиентов и выстроить доверительные отношения между брендом и аудиторией
                                        </p>
                                    </div>
                                </div>
                                <div className="main-services__block-main__item">
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.SkRegions} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Повышение вовлеченности аудитории в 3 раза и запуск новых интерактивных рубрик с экспертами Фонда
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.iPark} alt="" className="main-services__block-main__item__block__logo" />    
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Разработка стратегии ведения социальных сетей и визуальная концепция для нового Технопарка
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Aim} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text br-none">
                                        Коммуникационная и SMM-стратегия для работы с IT-сообществом Агентства инноваций Москвы
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                </div>
                                <Slider {...settings} className='main-services__block-main__item__block-slider'>
                                <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.SkRegions} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Повышение вовлеченности аудитории в 3 раза и запуск новых интерактивных рубрик с экспертами Фонда
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.iPark} alt="" className="main-services__block-main__item__block__logo" />    
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Разработка стратегии ведения социальных сетей и визуальная концепция для нового Технопарка
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Aim} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text br-none">
                                        Коммуникационная и SMM-стратегия для работы с IT-сообществом Агентства инноваций Москвы
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                </Slider>
                                <img src={csp2.arrowRight} alt="" className="main-services__arrow" />
                            </div>
                        </div>
                        <div className="main-services__blocks" style={ windowWidth <=1050 ? {height: 'auto'} : { height: `${windowHeight - 150 }px`  } }>
                            <div className="main-services__block-main " id="email">
                                <div className="main-services__block-main__header b-header-8 br-none">
                                    <div className="main-services__block-main__header__wrapper">
                                        <div className="main-services__block-main__header__title ">
                                            <h1 className="main-services__block__title">
                                            Email-marketing
                                            </h1>
                                        </div>
    {/*                                     <div className="main-services__block-main__header__button">
                                        узнать больше <img className="array-btn" src={img.arrayBtn} alt="" srcSet="" />
                                        </div> */}
                                    </div>
                                    <div className="main-services__block-main__header__wrapper">
                                    <p className="main-services__block-main__header__text-2 max-width-620">
                                    ПРИВЛЕЧЕНИЕ НОВЫХ КЛИЕНТОВ И ФОРМИРОВАНИЕ ЛОЯЛЬНОЙ АУДИТОРИИ ЧЕРЕЗ ИНСТУМЕНТЫ EMAIL-МАРКЕТИНГА  
                                        </p>
                                    </div>
                                </div>
                                <div className="main-services__block-main__item">
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.yandexBook} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Управление базой 2 000 000+ подписчиков крупнейшего образовательного сервиса Яндекс
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.skolkovo} alt="" className="main-services__block-main__item__block__logo" />    
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Email-маркетинг для ключевых мероприятий Сколково по базе инвесторов, стартаперов, gr-аудитории и корпорациям
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={csp2.business} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text br-none">
                                        Выстраивание системы email-маркетинга и интеграция с внутренними ресурсами для Правительства Москвы 
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                </div>
                                <Slider {...settings} className='main-services__block-main__item__block-slider'>
                                <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.yandexBook} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text main-services__block-main--minh-140">
                                        Управление базой 2 000 000+ подписчиков крупнейшего образовательного сервиса Яндекс
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.skolkovo} alt="" className="main-services__block-main__item__block__logo" />    
                                        </div>
                                        <p className="main-services__block-main__item__block__text main-services__block-main--minh-140">
                                        Email-маркетинг для ключевых мероприятий Сколково по базе инвесторов, стартаперов, gr-аудитории и корпорациям
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={csp2.business} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text main-services__block-main--minh-140 br-none ">
                                        Выстраивание системы email-маркетинга и интеграция с внутренними ресурсами для Правительства Москвы
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                </Slider>
                                <img src={csp2.arrowRight} alt="" className="main-services__arrow" />
    {/*                             <div className="main-services__block-main__header__button main-services__block-main__header__button-mobile">
                                узнать больше
                                <img className="array-btn" src="/static/media/array-btn.61e9d60c2c395a705e6a420f704531fa.svg" alt="" srcSet=""></img>
                                </div> */}
                            </div>
                        </div>
                        <div className="main-services__blocks" style={ windowWidth <=1050 ? {height: 'auto'} : { height: `${windowHeight - 150 }px`  } }>
                            <div className="main-services__block-main " id="strategy">
                                <div className="main-services__block-main__header b-header-9 br-none">
                                    <div className="main-services__block-main__header__wrapper">
                                        <div className="main-services__block-main__header__title ">
                                            <h1 className="main-services__block__title">
                                            Strategy
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="main-services__block-main__header__wrapper">
                                        <p className="main-services__block-main__header__text-2 max-width-620">
                                        СОЗДАНИЕ МАРКЕТИНГОВЫХ СТРАТЕГИЙ ДЛЯ БИЗНЕСА НА ПЕРЕСЕЧЕНИИ ТРАДИЦИОННЫХ КАНАЛОВ И NEW MEDIA
                                        </p>
                                    </div>
                                </div>
                                <div className="main-services__blocks-plank">
                                    <img src={csp1.arrow} alt="" />
                                    <p className="main-services__blocks-plank__text">
                                    Мы доверяем технологиям, но верим в людей, продумываем этапы запуска новых продуктов и каналы вирусного посева сообщений
                                    </p>
                                </div>
                            </div>
                        </div>
{/*                         <div className="main-services__blocks" style={ windowWidth <=720 ? {height: 'auto'} : { height: `${windowHeight - 150 }px`  } }>
                            <div className="main-services__block-main " id="projects">
                                <div className="main-services__block-main__header b-header-10 br-none">
                                    <div className="main-services__block-main__header__wrapper">
                                        <div className="main-services__block-main__header__title ">
                                            <h1 className="main-services__block__title">
                                            Special Projects
                                            </h1>
                                        </div>
                                       <div className="main-services__block-main__header__button">
                                        узнать больше <img className="array-btn" src={img.arrayBtn} alt="" srcSet="" />
                                        </div> 
                                    </div>
                                    <div className="main-services__block-main__header__wrapper">

                                        <p className="main-services__block-main__header__text-thin max-width-620">
                                        РАЗРАБОТКА И РЕАЛИЗАЦИЯ РЕКЛАМНЫХ КАМПАНИЙ И НАТИВНОГО ПРОДВИЖЕНИЯ С УЧАСТИЕМ БЛОГЕРОВ 
                                        </p>
                                    </div>
                                </div>
                                <div className="main-services__block-main__item">
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.village} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Выстраивание системы email-маркетинга и интеграция с внутренними ресурсами для Правительства Москвы
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Pepsico} alt="" className="main-services__block-main__item__block__logo" />    
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Email-маркетинг для главных мероприятий Сколково по базе инвесторов, стартаперов, gr-аудитории и корпорациям
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Soho} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text br-none">
                                        Привлекли новых клиентов и увеличили % повторных заказов
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                </div>
                                <Slider {...settings} className='main-services__block-main__item__block-slider'>
                                <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.village} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Выстраивание системы email-маркетинга и интеграция с внутренними ресурсами для Правительства Москвы
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Pepsico} alt="" className="main-services__block-main__item__block__logo" />    
                                        </div>
                                        <p className="main-services__block-main__item__block__text">
                                        Email-маркетинг для главных мероприятий Сколково по базе инвесторов, стартаперов, gr-аудитории и корпорациям
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                    <div className="main-services__block-main__item__block">
                                        <div className="main-services__block-main__item__block-img">
                                            <img src={img.Soho} alt="" className="main-services__block-main__item__block__logo" />
                                        </div>
                                        <p className="main-services__block-main__item__block__text br-none">
                                        Привлекли новых клиентов и увеличили % повторных заказов
                                        </p>
                                        <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                                    </div>
                                </Slider>
                             <div className="main-services__block-main__header__button main-services__block-main__header__button-mobile">
                                    узнать больше
                                    <img className="array-btn" src="/static/media/array-btn.61e9d60c2c395a705e6a420f704531fa.svg" alt="" srcSet=""></img>
                                </div> 
                            </div>
                        </div> */}
                    </div> 
                    <div className="main-services__block-nav " ref={refMenu}>
                        <div className="services-nav__ul">
                                    <li className="services-nav__link"><Link onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} activeClass="services-nav__link-active" className=' services-nav__href' to="digital" spy={true} smooth={true} offset={-150} duration={600} >digital</Link></li>
                                    <li className="services-nav__link"><Link onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} activeClass="services-nav__link-active" className=' services-nav__href' to="event" spy={true} smooth={true} offset={-150} duration={600} >event(+livestream)</Link></li>
                                    <li className="services-nav__link"><Link onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} activeClass="services-nav__link-active" className=' services-nav__href' to="web" spy={true} smooth={true} offset={-150} duration={600} >web / app</Link></li>
                                    <li className="services-nav__link"><Link onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} activeClass="services-nav__link-active" className=' services-nav__href' to="pr" spy={true} smooth={true} offset={-150} duration={600} >pr / new media</Link></li>
                                    <li className="services-nav__link"><Link onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} activeClass="services-nav__link-active" className=' services-nav__href' to="production" spy={true} smooth={true} offset={-150} duration={600} >production</Link></li>
                                    <li className="services-nav__link"><Link onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} activeClass="services-nav__link-active" className=' services-nav__href' to="blogger" spy={true} smooth={true} offset={-150} duration={600} >bloggers</Link></li>
                                    <li className="services-nav__link"><Link onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} activeClass="services-nav__link-active" className=' services-nav__href' to="smm" spy={true} smooth={true} offset={-150} duration={600} >smm / content</Link></li>
                                    <li className="services-nav__link"><Link onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} activeClass="services-nav__link-active" className=' services-nav__href' to="email" spy={true} smooth={true} offset={-150} duration={600} >email-marketing</Link></li>
                                    <li className="services-nav__link"><Link onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} activeClass="services-nav__link-active" className=' services-nav__href' to="strategy" spy={true} smooth={true} offset={-150} duration={600} >strategy</Link></li>
                                    {/* <li className="services-nav__link"><Link activeClass="services-nav__link-active" className=' services-nav__href' to="projects" spy={true} smooth={true} offset={-150} duration={600} >special projects</Link></li> */}
                        </div>
                    </div>

            </main>
            </div>


            
            {/* <Cursor isActives={isActive}></Cursor>  */}
            <footer className="footer" ref={footer}>
                <div className="footer__container">
                    <div className="footer__block">
                        <p className="menu__contacts-title" >
                            контакты
                        </p>
                        <div className="menu__contacts">
                            <p  className="menu__contact-item margin-0">Москва, ул.Новодмитровская д. 2, к 2</p>
                        </div>
                        <div className="menu__contacts">
                            <a href="malito:giveme@heroinmarketing.com" className="menu__contact-item" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter}>giveme@heroinmarketing.com</a> 
                            <a href="tel:+74994042756" className="menu__contact-item" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter}>+7 499 404 27 56</a> 
                        </div>
                        <div className="menu__social">
                            <a href="https://t.me/heroinmarketing" target="_blank" rel="noopener noreferrer" className="menu__social-item--telegram"  >telegram</a>
                            <a href="https://www.instagram.com/heroinmarketing" target="_blank" rel="noopener noreferrer" className="menu__social-item--instagram" >instagram</a>
                        </div>
                        <div className="menu__contacts">
                        <NavLink onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} to='/politic' className="menu__contact-item" >политика конфендициальности</NavLink>
                        </div>

                    </div>
                    <div className="footer__block">
                        <div className="footer__min-block">
                            <p className="footer__next">
                                далее
                            </p>
                            <NavLink onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} to='/contact' className="menu__link footer__link" >/contact</NavLink>
                        </div>
                        <div className="footer__direction ">
                            <p className="contact__sumbol">+</p>
                            <NavLink onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} to='/contact' className="footer__href" >contact us</NavLink>
                        </div>     

                    </div>
                </div>
        </footer>  
        </div>
        <Menu setActiveMenu={setActiveMenu} isActiveMenu={isActiveMenu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></Menu>
         <Cursor isActives={isActive} isActiveTelegram={isActiveTelegram} isActiveInst={isActiveInst}></Cursor> 
    </>
    )
 };
 
 export default Services;