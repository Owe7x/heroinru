import React, {useState, useRef, useEffect} from "react";
import { Parallax, Background } from "react-parallax";
import { NavLink } from "react-router-dom";
import { useGlobalEvent } from "beautiful-react-hooks";
import Menu from "../components/menu";
import Footer from "../components/footer";
import { Link, animateScroll as scroll } from "react-scroll";
import pochta from '../video/pochta.webp'
import dnk from '../video/dnk.webp'
import pepsi from '../video/pepsi.gif'
import forbes from '../video/forbes.webp'
import russian from '../video/russian.webp'
import exportCenter from '../video/export.webp'
import yandex from '../video/yandex.gif'
import base from '../video/BASE.gif'
import village from '../video/skolkovo.webp'
import kaspersky from '../video/kaspersky.webp'
import fiveKa from '../video/5ka.webp'
import nobel from '../video/nobel.webp'
import sheremetyevo from '../video/sheremetyevo.webp'
import MMCO from '../video/MMCO.webp'
import avon from '../video/AVON.webp'
import Bitrix from '../video/Bitrix.webp'
import Infourok from '../video/Infourok.webp'
import LIFT from '../video/LIFT.webp'
import STARTUP from '../video/STARTUP.webp'
import Loader from "../components/loader";
import buttonSlide from '../images/Services/array.svg'
import {caseBrand, csp1, csp2} from '../utils/case-import';
import Cursor from '../components/cursor'


function Cases() {
    const [isActive, setActive] = useState(false);
    const [isActiveTelegram, setActiveTelegam] = useState(false);
    const [isActiveInst, setActiveInst] = useState(false);
    const [isActiveLoader, setActiveLoader] = useState(true);
    const [isActiveLoaderBg, setActiveLoaderBg] = useState(true);
    const [isActiveMenu, setActiveMenu] = useState(false);
    const [popupActive, setPopupActive] = useState(false);
    const [windowHeight, setWindowWidth] = useState(document.documentElement.clientHeight);
    const onWindowResize = useGlobalEvent("resize");
    const refPage = useRef(null);
    const refPopup = useRef(null);
    onWindowResize((event: React.SyntheticEvent) => {
      setWindowWidth(document.documentElement.clientHeight);
    });
    function openPopup(e) {
        console.log( );
        /* refPage.current.style.overflow = 'hidden' */
/*         refPage.current.style.height = `${windowHeight - 96}px` */
        setPopupActive(e.currentTarget.id)
        

    }
    function closePopup(e) {
        setPopupActive(false)
        refPage.current.style.height = `auto`
        console.log(e);
    }
    function closePopupOverlay(e) {
        if (e.target.className === 'popup popup__active') {
            setPopupActive(false)
            refPage.current.style.height = `auto`
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

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

    useEffect(() => {
        const handleEsc = (event) => {
           if (event.keyCode === 27) {
            setPopupActive(false)
            refPage.current.style.height = `auto`
            refPage.current.style.overflow = 'unset'
          }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
      }, []);



    return(
        <>
        <div className={isActiveLoader ? 'loader-active ' : ' loader-inactive '}>
            <div className={isActiveLoaderBg ? 'loader-container' : 'loader-container-none'}>
                <Loader  ></Loader>
            </div>
        </div>
        <div className={isActiveLoaderBg || isActiveMenu ? 'page-loader-100vh' : 'page-loader' }>
            <div ref={refPage} className='page-cases'>
                <header className="header-services header-cases " >
                    <div className="header-bg-1"></div>
                    <div className="header-bg-2"></div>
                    <div className="header-bg-3"></div>
                    <div className="header-bg-4"></div>
                    <div className="header-bg-5"></div>
                    <div className="header-bg-6"></div>
                    <div className="header-bg-7"></div>

                    <div className="header-services__logo header-cases__logo">
                        <NavLink to="/" className="header-main__path" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter}>[IN]</NavLink>
                    </div>
                    <div className=" header-cases__main">
                        <div className=" header-cases__info">
                            <h1 className=" header-cases__title">
                                Cases <br /> & RESULTS
                                <span className=" header-cases__title-thin">always do your best</span>
                            </h1>
                        </div>
                    </div>
                    <Link onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className='cases-button-slide' to="innovation" spy={true} smooth={true} offset={-140} duration={600} ><img src={buttonSlide} alt="" /></Link>
                </header>
                <main className="cases">
                    <div className="cases__bg-1"></div>
                    <div className="cases__bg-2"></div>
                    <div className="cases__container" >
                        <div onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="case" id="innovation" onClick={openPopup}>
                            <img src={csp1.openinnovations} alt="" className="case__brand" />
                            <Parallax bgImage={pochta} strength={0} className='parallax-img'>
                                <div className="case__height">
                                </div>
                            </Parallax>
                            <p className="case__name">Skolkovo</p>
                            <p className="case__title">SK - Открытые Инновации </p>
                            <p className="case__text">
                            Комплексная digital-кампания и 100 000+ online-участников на крупнейшем технологическом форуме России
                            </p>
                            <div className="case__group">
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">digital</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">event</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">bloggers</div>
                                </div>
                            </div>
                        </div>
                        <div onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="case case-mt" id="forbes" onClick={openPopup}>
                            <img src={csp2.forbes} alt="" className="case__brand" />
                            <Parallax bgImage={forbes} strength={0} className='parallax-img'>
                            <div className="case__height">
                                </div>
                            </Parallax>
                            <p className="case__name">FORBES ONTOLOGY</p>
                            <p className="case__title">Forbes Ontology </p>
                            <p className="case__text">
                            Продвижение клубных программ Forbes для топ-менеджеров со стоимостью участия 450 000 рублей
                            </p>
                            <div className="case__group">
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">digital</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">premium</div>
                                </div>
                            </div>
                        </div>
                        <div onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="case  case-mb-2" id="pepsico" onClick={openPopup}>
                            <img src={caseBrand.cs3} alt="" className="case__brand" />
                            <Parallax bgImage={pepsi} strength={0} className='parallax-img'>
                            <div className="case__height">
                                </div>
                            </Parallax>
                            <p className="case__name">PepsiCo</p>
                            <p className="case__title">PepsiCo House</p>
                            <p className="case__text">
                            Разработка внутреннего web-портала Pepsico для сотрудников из 7 стран и 20 бренд-юнитов
                            </p>
                            <div className="case__group">
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">web</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">event</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">creative</div>
                                </div>
                            </div>
                        </div>
                        <div onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="case case-mt-minus" id="exportCenter" onClick={openPopup}>
                            <img src={caseBrand.cs4} alt="" className="case__brand" />
                            <Parallax bgImage={exportCenter} strength={0} className='parallax-img'>
                            <div className="case__height">
                                </div>
                            </Parallax>
                            <p className="case__name">Московский экспортный центр</p>
                            <p className="case__title">Правительство Москвы</p>
                            <p className="case__text">
                            Digital и PR продвижение программ поддержки предпринимателей от Правительсва Москвы (МЭЦ) 
                            </p>
                            <div className="case__group">
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">digital</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">social</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">pr</div>
                                </div>
                            </div>
                        </div>
                        <div onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="case case-mb" id="dnk" onClick={openPopup}>
                            <img src={caseBrand.cs5} alt="" className="case__brand" />
                            <Parallax bgImage={dnk} strength={0} className='parallax-img'>
                            <div className="case__height">
                                </div>
                            </Parallax>
                            <p className="case__name">DNK </p>
                            <p className="case__title">Клуб ДНК от Geegun  </p>
                            <p className="case__text">
                            Открытие и промокампания клуба ДНК от рэпера Джигана с привлечением мировой звезды Tyga  - 1 млрд. просмотров клипов
                            </p>
                            <div className="case__group">
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">digital</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">bloggers</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">event</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">creative</div>
                                </div>
                            </div>
                        </div>
                        <div onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="case case-mt-minus" id="kaspersky" onClick={openPopup}>
                            <img src={caseBrand.cs6} alt="" className="case__brand" />
                            <Parallax bgImage={kaspersky} strength={0} className='parallax-img'>
                            <div className="case__height">
                                </div>
                            </Parallax>
                            <p className="case__name">Kaspersky </p>
                            <p className="case__title">Kaspersky - Space Lab  </p>
                            <p className="case__text">
                                Разработка многофункциональной web-платформы для b2b-сегмента и креативных промоактиваций 
                            </p>
                            <div className="case__group">
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">web</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">creative</div>
                                </div>
                            </div>
                        </div>
                        <div onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="case case-mt-minus case-mb-minus" id="nobel" onClick={openPopup}>
                            <img src={caseBrand.cs7} alt="" className="case__brand" />
                            <Parallax bgImage={nobel} strength={0} className='parallax-img'>
                            <div className="case__height">
                                </div>
                            </Parallax>
                            <p className="case__name">Skolkovo</p>
                            <p className="case__title">Nobel Forum Open Innovation 2.0</p>
                            <p className="case__text">
                            Промокампания крупнейшего научно-технологического форума с ведущими Tech и ESG-блогерами
                            </p>
                            <div className="case__group">
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">bloggers</div>
                                </div>
                            </div>
                        </div>
                        <div onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="case case-mb case-mb-3" id="yandex" onClick={openPopup}>
                            <img src={caseBrand.cs8} alt="" className="case__brand" />
                            <Parallax bgImage={yandex} strength={0} className='parallax-img'>
                            <div className="case__height">
                                </div>
                            </Parallax>
                            <p className="case__name">Яндекс </p>
                            <p className="case__title">Яндекс.Учебник  </p>
                            <p className="case__text">
                            Email-маркетинг для сервисов Яндекс - управление базой в 2 000 000 + подписчиков и 400+ сегментов 
                            </p>
                            <div className="case__group">
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">email-marketing</div>
                                </div>
                            </div>
                        </div>
                        <div onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="case case-mt-minus case-mb-minus" id="bdsr" onClick={openPopup}>
                            <img src={caseBrand.cs9} alt="" className="case__brand" />
                            <Parallax bgImage={base} strength={0} className='parallax-img'>
                            <div className="case__height">
                                </div>
                            </Parallax>
                            <p className="case__name">BASE DUBAI {'&'} SOHO </p>
                            <p className="case__title">Base Dubai in Moscow  </p>
                            <p className="case__text">
                            Digital-PR на зарубежную аудиторию luxury-вечеринок с мировыми звездами - Bob Sinclar, Jason Derulo, Black Coffee
                            </p>
                            <div className="case__group">
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">digital</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">pr</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">bloggers </div>
                                </div>
                            </div>
                        </div>
                        <div onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="case case-mt-minus"  id="russian" onClick={openPopup}>
                            <img src={caseBrand.cs10} alt="" className="case__brand" />
                            <Parallax bgImage={russian} strength={0} className='parallax-img'>
                            <div className="case__height">
                                </div>
                            </Parallax>
                            <p className="case__name">РЭЦ </p>
                            <p className="case__title">Форум Сделано в России  </p>
                            <p className="case__text">
                            Главное экспортное событие года с участием первых лиц государства и прямой трансляцие на Россия 24
                            </p>
                            <div className="case__group">
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">event</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">web</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">pr</div>
                                </div>
                            </div>
                        </div>
                        <div onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="case  case-mb" id="x5" onClick={openPopup}>
                            <img src={caseBrand.cs11} alt="" className="case__brand" />
                            <Parallax bgImage={fiveKa} strength={0} className='parallax-img'>
                            <div className="case__height">
                                </div>
                            </Parallax>
                            <p className="case__name">Пятерочка  </p>
                            <p className="case__title">Турбостарты ‘20 / ‘21 </p>
                            <p className="case__text">
                            Web и App разработка для проекта Турбостарты со 100 000+ участников по всей России
                            </p>
                            <div className="case__group">
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">web</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">event</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">digital</div>
                                </div>
                            </div>
                        </div>
                        <div onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="case case-mt-minus" id="village" onClick={openPopup}>
                            <img src={caseBrand.cs12} alt="" className="case__brand" />
                            <Parallax bgImage={village} strength={0} className='parallax-img'>
                            <div className="case__height">
                                </div>
                            </Parallax>
                            <p className="case__name">skolkovo </p>
                            <p className="case__title">Skolkovo Forums   </p>
                            <p className="case__text">
                            5 лет продвижения форумов Sk - Открытые инновации, Nobel Forum, Startup Village, Startup Tour
                            </p>
                            <div className="case__group">
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">digital</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">social </div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">bloggers </div>
                                </div>
                            </div>
                        </div>
                        <div onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="case case-mt-minus case-mb-minus" id="sheremetyevo" onClick={openPopup}>
                            <img src={csp2.sheremetyevo} alt="" className="case__brand" />
                            <Parallax bgImage={sheremetyevo} strength={0} className='parallax-img'>
                            <div className="case__height">
                                </div>
                            </Parallax>
                            <p className="case__name">Шереметьево </p>
                            <p className="case__title">Шереметьево   </p>
                            <p className="case__text">Разработка и web-поддержка сайта Шереметьево, дизайн и seo-продвижение </p>
                            <div className="case__group">
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">web</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">seo </div>
                                </div>
                            </div>
                        </div>
                        <div onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="case case-mb case-mt-minus-2" id="educationSalon" onClick={openPopup}>
                            <img src={csp2.educationSalon} alt="" className="case__brand" />
                            <Parallax bgImage={MMCO} strength={0} className='parallax-img'>
                            <div className="case__height">
                                </div>
                            </Parallax>
                            <p className="case__name">ММСО</p>
                            <p className="case__title">ММСО ‘19 / ‘20  </p>
                            <p className="case__text">Сопровождение крупнейшего образовательного события - 260 000 участников и 1 000+ спикер </p>
                            <div className="case__group">
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">event</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">web</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">pr</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">gr</div>
                                </div>
                            </div>
                        </div>
                        <div onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="case case-mt-minus case-mb-minus" id="avon" onClick={openPopup}>
                            <img src={csp2.avon} alt="" className="case__brand" />
                            <Parallax bgImage={avon} strength={0} className='parallax-img'>
                            <div className="case__height">
                                </div>
                            </Parallax>
                            <p className="case__name">avon </p>
                            <p className="case__title">AVON   </p>
                            <p className="case__text">
                            Продвижение ключевого события  с анонсом глобального ребрендинга
                            </p>
                            <div className="case__group">
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">event</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">bloggers</div>
                                </div>
                            </div>
                        </div>
                        <div onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="case  case-mt-minus" id="education" onClick={openPopup}>
                            <img src={csp2.education} alt="" className="case__brand" />
                            <Parallax bgImage={LIFT} strength={0} className='parallax-img'>
                            <div className="case__height">
                                </div>
                            </Parallax>
                            <p className="case__name">АФК Система </p>
                            <p className="case__title">Лифт в будущее   </p>
                            <p className="case__text">Профориентационное online-мероприятие от фонда АФК «Система» </p>
                            <div className="case__group">
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">event</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">bloggers </div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">pr </div>
                                </div>
                            </div>
                        </div>
                        <div onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="case case-mb " id="infourok" onClick={openPopup}>
                            <img src={csp2.infourok} alt="" className="case__brand" />
                            <Parallax bgImage={Infourok} strength={0} className='parallax-img'>
                            <div className="case__height">
                                </div>
                            </Parallax>
                            <p className="case__name">инфоурок </p>
                            <p className="case__title">Инфофорум  </p>
                            <p className="case__text">Онлайн-форум для педагов на тему буллинга от крупнейшего edtech-сервиса «Инфоурок»</p>
                            <div className="case__group">
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">event</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">gr</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">pr</div>
                                </div>
                            </div>
                        </div>
                        <div onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="case case-mt-minus" id="skolkovo" onClick={openPopup}>
                            <img src={csp2.skolkovoCase} alt="" className="case__brand" />
                            <Parallax bgImage={STARTUP} strength={0} className='parallax-img'>
                            <div className="case__height">
                                </div>
                            </Parallax>
                            <p className="case__name">SK </p>
                            <p className="case__title">Skolkovo  </p>
                            <p className="case__text">Email-маркетинг для ключевых событий Сколково - Открытые инновации, Sturtup Village, Nobel Forum, Startup Tour</p>
                            <div className="case__group">
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">email-marketing</div>
                                </div>
                            </div>
                        </div>
                        <div onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="case case-mt-minus case-mb-minus" id="bitrix" onClick={openPopup}>
                            <img src={csp2.bitrix} alt="" className="case__brand" />
                            <Parallax bgImage={Bitrix} strength={0} className='parallax-img'>
                            <div className="case__height">
                                </div>
                            </Parallax>
                            <p className="case__name">Битрикс24 </p>
                            <p className="case__title">Битрикс24  </p>
                            <p className="case__text">Продвижение b2b-продуктов для управления бизнесом в Telergam-каналах </p>
                            <div className="case__group">
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">social</div>
                                </div>
                                <div className="case__direction">
                                    <p className="case__sumbol">+</p>
                                    <div className="case__direction-name">bloggers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                
            </div>
            <div onClick={closePopupOverlay} className={ popupActive === 'innovation' ? 'popup popup__active' : 'popup'}>
                <div className="popup__container">
                    <button className="popup__close" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} onClick={closePopup}>X</button>
                    <div className="innvoation">
                        <div className="popup__group">
                            <img src={csp1.openinnovations} alt="" className="popup__logo" />
                            <img src={csp1.skolkovo} alt="" className="popup__logo" />
                        </div>
                        <p className="popup__name">Livestream  /  Правительственный форум</p>
                        <h1 className="popup__title">
                        OPEN INNOVATIONS 
                        </h1>
                        <div className="popup__group">
                            <img src={csp1.arrow} alt="" className="popup__arrow" />
                            <p className="popup__subtitle">Digital-продвижение ключевого форума о цифровой трансформации</p>
                        </div>
                        <div className="popup__group-stat ">
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                180+ млн

                                </p>
                                <p className="popup__text-stat">
                                совокупный медиа-охват 
                                </p>
                            </div>
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                100 000 +

                                </p>
                                <p className="popup__text-stat">
                                онлайн-участников 
                                </p>
                            </div>
                        </div>
                        <div className="popup__group-block ">
                            <div className="popup__block">
                                <p className="popup__block-title">
                                Digital-продвижение

                                </p>
                                <p className="popup__block-subtitle">
                                ключевых партнеров форума
                                </p>
                            </div>
                            <div className="popup__block">
                                <p className="popup__block-title">
                                Telegram-каналы



                                </p>
                                <p className="popup__block-subtitle">
                                посевы в целевых пабликах 
                                </p>
                            </div>
                            <div className="popup__block">
                                <p className="popup__block-title">
                                Дизайн и креатив

                                </p>
                            </div>
                        </div>
                        <p className="popup__text-brand">
                            Digital-продвижение партнеров:
                        </p>
                        <div className="popup__logo-2">
                            <img src={csp1.logo2} alt="" className="popup__logo" />
                            <img src={csp1.logo1} alt="" className="popup__logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={closePopupOverlay} className={ popupActive === 'forbes' ? 'popup popup__active' : 'popup'}>
                <div className="popup__container">
                    <button onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="popup__close" onClick={closePopup}>X</button>
                    <div className="forbes">
                        <div className="popup__group">
                            <img src={csp2.forbes} alt="" className="popup__logo" />
                        </div>
                        <p className="popup__name">Рекламная кампания</p>
                        <h1 className="popup__title">
                        Forbes ontology 
                        </h1>
                        <div className="popup__group">
                            <img src={csp1.arrow} alt="" className="popup__arrow" />
                            <p className="popup__subtitle popup__subtitle-2">Образовательный продукт бизнес-класса для топ-менеджеров и руководителей
                            <br />
                            <br />
    8 уикендов теоретических и практических знаний</p>
                        </div>
                        <div className="popup__group-stat">
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                50 МЕСТ


                                </p>
                            </div>
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                450 000 ₽

                                </p>
                                <p className="popup__text-stat">
                                стоимость участия 
                                </p>
                            </div>
                        </div>
                        <div className="popup__group-block popup__group-block-2">
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                    Digital-реклама
                                </p>
                                <p className="popup__block-subtitle">
                                разработка рекламных материалов, настройка и ведение рекламной кампании
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                    Smm-продвижение
                                </p>
                                <p className="popup__block-subtitle">
                                    повышение лояльности аудитории    и узнаваемости бренда 
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                call-центр и телемаркетинг

                                </p>
                                <p className="popup__block-subtitle">
                                коммуникация с аудиторией с помощью телефона
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                    e-mail маркетинг
                                </p>
                                <p className="popup__block-subtitle">
                                    рассылка писем для целевой аудитории 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={closePopupOverlay} className={ popupActive === 'pepsico' ? 'popup popup__active' : 'popup'}>
                <div className="popup__container">
                    <button onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} className="popup__close" onClick={closePopup}>X</button>
                    <div className="pepsico">
                        <div className="popup__group">
                            <img src={csp2.pepsico} alt="" className="popup__logo" />
                        </div>
                        <p className="popup__name-light">Web-платформа для проведения ключевого внутреннего
    мероприятия компании по итогам года
    </p>
                        <h1 className="popup__title">
                        PEPSICO
                        </h1>
                        <div className="popup__group">
                            <img src={csp1.arrow} alt="" className="popup__arrow" />
                            <p className="popup__subtitle popup__subtitle-2">Крупнейшая транснациональная корпорация в сфере FMCG </p>
                        </div>
                        <div className="popup__group-stat">
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                2000+
                                </p>
                                <p className="popup__text-stat">
                                Online-участников 
                                </p>
                            </div>
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                7 

                                </p>
                                <p className="popup__text-stat">
                                стран 
                                </p>
                            </div>
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                20 

                                </p>
                                <p className="popup__text-stat">
                                брендов 
                                </p>
                            </div>
                        </div>
                        <div className="popup__group-block popup__group-block-2">
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                digital expo
                                </p>
                                <p className="popup__block-subtitle">
                                удобный online-формат представления достижений компании
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                чаты и нетворкинг
                                </p>
                                <p className="popup__block-subtitle">
                                чаты по интересам, live-обсуждения и возможность написать любому участнику
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                трансляция
                                </p>
                                <p className="popup__block-subtitle">
                                возможность ретрансляции в социальные сети для дополнительного охвата
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                геймификация
                                </p>
                                <p className="popup__block-subtitle">
                                увеличение вовлеченности за счет опросов, квестов, игр
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={closePopupOverlay} className={ popupActive === 'russian' ? 'popup popup__active' : 'popup'}>
                <div className="popup__container">
                    <button className="popup__close" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} onClick={closePopup}>X</button>
                    <div className="russian">
                        <div className="popup__group">
                            <img src={csp2.russianLogo} alt="" className="popup__logo" />
                        </div>
                        <p className="popup__name-light">Международный экспортный форум</p>
                        <h1 className="popup__title">
                        СДЕЛАНО 
                        В РОССИИ 2021 
                        </h1>
                        <div className="popup__group">
                            <img src={csp1.arrow} alt="" className="popup__arrow" />
                            <p className="popup__subtitle popup__subtitle-2">PR и освещение в СМИ</p>
                        </div>
                        <div className="popup__group-stat">
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                200+
                                </p>
                                <p className="popup__text-stat">
                                аккредитаций СМИ 
                                </p>
                            </div>
                            <div className="popup__stat">
                                <img className="popup__stat-img" src={csp2.tv} alt="" />
                                <p className="popup__text-stat">
                                Прямая трансляция 
                                </p>
                            </div>
                        </div>
                        <div className="popup__group-block popup__group-block-2">
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                концепция и продвижение


                                </p>
                                <p className="popup__block-subtitle">
                                формирование программы и проведение анонсирующей кампании
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                онлайн-трансляция


                                </p>
                                <p className="popup__block-subtitle">
                                организация онлайн-трансляции  и международных телемостов 
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                дизайн и видео-продакшн

                                </p>
                                <p className="popup__block-subtitle">
                                производство роликов для сессии и разработка key visuals
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                застройка форума
                                </p>
                                <p className="popup__block-subtitle">
                                техническое обеспечение и визуальное оформление форума 
                                </p>
                            </div>
                        </div>
                        <div className="popup__speaker">
                            <div className="popup__speaker-group">
                                <img className="popup__speaker-logo" src={csp2.speakerLogo} alt="" />
                                <p className="popup__speaker-text">Спикеры форума:</p>
                            </div>
                            <div className="popup__speaker-author">
                                <div className="speaker">
                                    <img src={csp2.speaker5} alt="" className="speaker__img" />
                                    <p className="speaker__name">
                                    Михаил Мишустин
                                    </p>
                                </div>
                                <div className="speaker">
                                    <img src={csp2.speaker1} alt="" className="speaker__img" />
                                    <p className="speaker__name">
                                    Игорь Шувалов
                                    </p>
                                </div>
                                <div className="speaker">
                                    <img src={csp2.speaker2} alt="" className="speaker__img" />
                                    <p className="speaker__name">
                                    Алексей Кудрин
                                    </p>
                                </div>
                                <div className="speaker">
                                    <img src={csp2.speaker3} alt="" className="speaker__img" />
                                    <p className="speaker__name">
                                    Эльвира Набиуллина
                                    </p>
                                </div>
                                <div className="speaker">
                                    <img src={csp2.speaker4} alt="" className="speaker__img" />
                                    <p className="speaker__name">
                                    Ана Брнабич
                                    <br />
                                    (Премьер Сербии)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={closePopupOverlay} className={ popupActive === 'exportCenter' ? 'popup popup__active' : 'popup'}>
                <div className="popup__container">
                    <button className="popup__close" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} onClick={closePopup}>X</button>
                    <div className="export">
                        <div className="popup__group">
                            <img src={csp2.business} alt="" className="popup__logo" />
                            <img src={csp2.exportCenter} alt="" className="popup__logo" />
                        </div>
                        <p className="popup__name-light">Московский экспортный центр</p>
                        <h1 className="popup__title">
                        ПРАВИТЕЛЬСТВО МОСКВЫ 
                        </h1>
                        <div className="popup__group">
                            <img src={csp1.arrow} alt="" className="popup__arrow" />
                            <p className="popup__subtitle popup__subtitle-2">Продвижение услуг по поддержке столичных экспертов</p>
                        </div>
                        <div className="popup__group-stat">
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                300 + млн
                                </p>
                                <p className="popup__text-stat">
                                совокупный медиа-охват 
                                </p>
                            </div>
                            <div className="popup__stat">
                            <p className="popup__text-stat popup__text-stat--fs-50">
                            2000 +

                                </p>
                                <p className="popup__text-stat">
                                целевых заявок 
                                </p>
                            </div>
                        </div>
                        <div className="popup__group-block popup--no-after">
                            <div className="popup__block">
                                <p className="popup__block-title">
                                digital-реклама
                                </p>
                            </div>
                            <div className="popup__block">
                                <p className="popup__block-title">
                                спецпроекты          в сми
                                </p>
                            </div>
                            <div className="popup__block">
                                <p className="popup__block-title">
                                блогеры и telegram-каналы


                                </p>
                            </div>
                        </div>
                        <p className="popup__text-brand">
                        Каналы продвижения:
                        </p>
                        <div className="popup__logo-2">
                            <img src={csp2.logo1Export} alt="" className="popup__logo" />
                            <img src={csp2.logo2Export} alt="" className="popup__logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={closePopupOverlay} className={ popupActive === 'yandex' ? 'popup popup__active' : 'popup'}>
                <div className="popup__container">
                    <button className="popup__close" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} onClick={closePopup}>X</button>
                    <div className="yandex">
                        <div className="popup__group">
                            <img src={csp2.logoYandex} alt="" className="popup__logo" />
                        </div>
                        <p className="popup__name">Сервис для учителей #edtech</p>
                        <h1 className="popup__title">
                        ЯНДЕКС УЧЕБНИК 
                        </h1>
                        <div className="popup__group">
                            <img src={csp1.arrow} alt="" className="popup__arrow" />
                            <p className="popup__subtitle popup__subtitle-2">Яндекс.Учебник уже используют</p>
                        </div>
                        <div className="popup__group-stat">
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                48
                                </p>
                                <p className="popup__text-stat">
                                регионов 
                                </p>
                            </div>
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                2 млн
                                </p>
                                <p className="popup__text-stat">
                                учеников
                                </p>
                            </div>
                        </div>
                        <div className="popup__group-block popup__group-block-2">
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                    разработка рассылок
                                </p>
                                <p className="popup__block-subtitle">
                                    автоматические цепочки и промо-рассылки 
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                отправка email
                                </p>
                                <p className="popup__block-subtitle">
                                повышение % открытий и доставляемости
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                сегментация базы
                                </p>
                                <p className="popup__block-subtitle">
                                анализ аудитории и взаимодействия с контентом 
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                анализ результатов


                                </p>
                                <p className="popup__block-subtitle">
                                рекомендации и выдвижение новых гипотез  
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={closePopupOverlay} className={ popupActive === 'bdsr' ? 'popup popup__active' : 'popup'}>
                <div className="popup__container">
                    <button className="popup__close" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} onClick={closePopup}>X</button>
                    <div className="bdsr">
                        <div className="popup__group popup__group--center">
                            <img src={csp2.logo1Bdsr} alt="" className="popup__logo" />
                            <img src={csp2.logo2Bdsr} alt="" className="popup__logo" />
                        </div>
                        <p className="popup__name-light">Культовый дубайский клуб</p>
                        <h1 className="popup__title">
                        base dubai 
    soho rooms 
                        </h1>
                        <div className="popup__group">
                            <img src={csp1.arrow} alt="" className="popup__arrow" />
                            <p className="popup__subtitle popup__subtitle-2">ПРОМО САЙТ ПРОЕКТА <br /> basedubai.ru </p>
                        </div>
                        <div className="popup__group-block popup__group-block-2">
                            <div className="popup__block popup__block-3">
                                <p className="popup__block-title">
                                    PR-спецпрокты
                                </p>
                                <p className="popup__block-subtitle">
                                    афиша, ELLE, BAZAAR
                                </p>
                            </div>
                            <div className="popup__block popup__block-3">
                                <p className="popup__block-title">
                                    VIP-партнеры
                                </p>
                                <p className="popup__block-subtitle">
                                    Gett Premium, Aspire 
                                </p>
                            </div>
                            <div className="popup__block popup__block-3">
                                <p className="popup__block-title">
                                    таргетинг
                                </p>
                                <p className="popup__block-subtitle">
                                коммуникации на иностранных гостей с привлечением СМИ и партнеров 
                                </p>
                            </div>
                            <div className="popup__block popup__block-3">
                                <p className="popup__block-title">
                                блогеры
                                </p>
                                <p className="popup__block-subtitle">
                                8 млн. подписчиков
                                </p>
                            </div>
                            <div className="popup__block popup__block-3">
                                <p className="popup__block-title">
                                digital-кампания

                                </p>
                                <p className="popup__block-subtitle">
                                на иностранцев в Москве
                                </p>
                            </div>
                            <div className="popup__block popup__block-3">
                                <p className="popup__block-title">
                                скрытый маркетинг


                                </p>
                                <p className="popup__block-subtitle">
                                посев «вирусных» видео 
                                </p>
                            </div>
                        </div>
                        <div className="popup__speaker popup__speaker-2">
                            <div className="popup__speaker-group">
                                
                                <p className="popup__speaker-text popup__speaker-text--bdsr">LINEUP:</p>
                                
                            </div>
                            <div className="popup__speaker-author popup__speaker-author-2">
                                <div className="speaker">
                                    <img src={csp2.avatarBdsr7} alt="" className="speaker__img" />
                                    <p className="speaker__name">
                                    Jason <br /> Derulo
                                    </p>
                                </div>
                                <div className="speaker">
                                    <img src={csp2.avatarBdsr1} alt="" className="speaker__img" />
                                    <p className="speaker__name">
                                    Bob <br /> Sinclar
                                    </p>
                                </div>
                                <div className="speaker">
                                    <img src={csp2.avatarBdsr2} alt="" className="speaker__img" />
                                    <p className="speaker__name">
                                    Timati
                                    </p>
                                </div>
                                <div className="speaker">
                                    <img src={csp2.avatarBdsr3} alt="" className="speaker__img" />
                                    <p className="speaker__name">
                                    Egor <br /> Kreed
                                    </p>
                                </div>
                                <div className="speaker">
                                    <img src={csp2.avatarBdsr4} alt="" className="speaker__img" />
                                    <p className="speaker__name">
                                    Gianluca <br /> Vacchi
                                    </p>
                                </div>
                                <div className="speaker">
                                    <img src={csp2.avatarBdsr5} alt="" className="speaker__img" />
                                    <p className="speaker__name">
                                    Alessandra <br /> Ambrosio
                                    </p>
                                </div>
                                <div className="speaker">
                                    <img src={csp2.avatarBdsr6} alt="" className="speaker__img" />
                                    <p className="speaker__name">
                                    Black <br /> Coffee
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={closePopupOverlay} className={ popupActive === 'x5' ? 'popup popup__active' : 'popup'}>
                <div className="popup__container">
                    <button className="popup__close" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} onClick={closePopup}>X</button>
                    <div className="x5">
                        <div className="popup__group">
                            <img src={csp2.logoX5} alt="" className="popup__logo" />
                        </div>
                        <p className="popup__name">Web-платформа проекта</p>
                        <h1 className="popup__title">
                        15 лет 
                        <br />
    X5 Group 
                        </h1>
                        <div className="popup__group">
                            <img src={csp1.arrow} alt="" className="popup__arrow" />
                            <p className="popup__subtitle">Создание платформы для проведения корпоративного online-марафона</p>
                        </div>
                        <div className="popup__group-block popup--no-after popup__group-block--x5">
                            <div className="popup__block popup__block--h-194">
                                <p className="popup__block-title">
                                    web
                                </p>
                                <p className="popup__block-subtitle">
                                    разработка уникальной платформы для проведения корпоративного online-марафона*
                                </p>
                            </div>
                            <div className="popup__block popup__block--h-194">
                                <p className="popup__block-title">
                                    ONLINE-нетворкинг
                                </p>
                                <p className="popup__block-subtitle">
                                многофункциональный чат для участников с модерацией и возможностью оставлять реакции 
                                </p>
                            </div>
                            <div className="popup__block popup__block--h-194">
                                <p className="popup__block-title">
                                    Геймификация
                                </p>
                                <p className="popup__block-subtitle">
                                отслеживание результатов командных игр и интеграция с мобильным приложением 
                                </p>
                            </div>
                        </div>
                        <p className="popup__name--foter">*платформа включала три трека: спорт, ментальное здоровье 
    и полезные привычки</p>
                    </div>
                </div>
            </div>
            <div onClick={closePopupOverlay} className={ popupActive === 'village' ? 'popup popup__active' : 'popup'}>
                <div className="popup__container">
                    <button className="popup__close" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} onClick={closePopup}>X</button>
                    <div className="village">
                        <div className="popup__group">
                            <img src={csp2.village} alt="" className="popup__logo" />
                            <img src={csp1.skolkovo} alt="" className="popup__logo" />
                        </div>
                        <p className="popup__name">Livestream конференция</p>
                        <h1 className="popup__title">
                        startup village 
                        </h1>
                        <div className="popup__group">
                            <img src={csp1.arrow} alt="" className="popup__arrow" />
                            <p className="popup__subtitle">Крупнейшее startup событие в формате online
    с трансляцией в соцсети с охватом 1+ млн </p>
                        </div>
                        <div className="popup__group-stat ">
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                107 000+

                                </p>
                                <p className="popup__text-stat">
                                участников online 
                                </p>
                            </div>
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                100
                                </p>
                                <p className="popup__text-stat">
                                стран подключений
                                </p>
                            </div>
                        </div>
                        <div className="popup__group-block popup--no-after">
                            <div className="popup__block">
                                <p className="popup__block-title">
                                digital-кампания
                                </p>
                                <p className="popup__block-subtitle">
                                масштабная кампания в онлайн-среде 
                                </p>
                            </div>
                            <div className="popup__block">
                                <p className="popup__block-title">
                                social-реклама
                                </p>
                                <p className="popup__block-subtitle">
                                размещения в нишевых tg-каналах 
                                </p>
                            </div>
                            <div className="popup__block">
                                <p className="popup__block-title">
                                media-размещения
                                </p>
                                <p className="popup__block-subtitle">
                                на ресурсах лидеров мнений
                                </p>
                            </div>
                        </div>
                        <p className="popup__text-brand">
                        Digital-продвижение партнеров:
                        </p>
                        <div className="popup__logo-2">
                            <img src={csp2.logo1Village} alt="" className="popup__logo" />
                            <img src={csp2.logo2Village} alt="" className="popup__logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={closePopupOverlay} className={ popupActive === 'kaspersky' ? 'popup popup__active' : 'popup'}>
                <div className="popup__container">
                    <button className="popup__close" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} onClick={closePopup}>X</button>
                    <div className="kaspersky">
                        <div className="popup__group">
                            <img src={csp2.kaspersky} alt="" className="popup__logo" />
                        </div>
                        <p className="popup__name">Ведущая it-компания</p>
                        <h1 className="popup__title">
                        kaspersky 
                        </h1>
                        <div className="popup__group">
                            <img src={csp1.arrow} alt="" className="popup__arrow" />
                            <p className="popup__subtitle">полное сопровождение b2b маркетинга 
    реклама, web-разработка, СМИ </p>
                        </div>
                        <div className="popup__group-stat ">
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                4 года

                                </p>
                                <p className="popup__text-stat">
                                сотрудничества
                                </p>
                            </div>
                        </div>
                        <div className="popup__group-block popup--no-after">
                            <div className="popup__block">
                                <p className="popup__block-title">
                                pr | creative design
                                </p>
                                <li className="popup__block-li">
                                    размещение в целевых СМИ
                                </li>
                                <li className="popup__block-li">
                                    разработка рекламных модулей
                                </li>
                            </div>
                            <div className="popup__block">
                                <p className="popup__block-title">
                                digital | marketing
                                </p>
                                <li className="popup__block-li">
                                проведение нестандартных digital-кампаний

                                </li>
                                <li className="popup__block-li">
                                разработка креативных рекламных материалов
                                </li>
                            </div>
                            <div className="popup__block">
                                <p className="popup__block-title">
                                web | loyalty project

                                </p>
                                <li className="popup__block-li">
                                запуск онлайн-портала мотивационной программы

                                </li>
                                <li className="popup__block-li">
                                креатив, художественный дизайн и web-разработка
                                </li>
                            </div>
                        </div>
                        <div className="popup__title--kaspersky">
                        онлайн-портал
                        </div>
                        <div className="popup__subtitle--kaspersky">
                        spacelab.kaspersky.ru
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={closePopupOverlay} className={ popupActive === 'nobel' ? 'popup popup__active' : 'popup'}>
                <div className="popup__container">
                    <button className="popup__close" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} onClick={closePopup}>X</button>
                    <div className="nobel">
                        <div className="popup__group popup__group--center">
                            <img src={csp1.openinnovations} alt="" className="popup__logo" />
                        </div>
                        <p className="popup__name-light">Livestream  /  Правительственный форум</p>
                        <h1 className="popup__title popup__title--nobel">
                        Nobel Vision.
                        <br />
                        Open Innovations 2.0 
                        </h1>
                        <div className="popup__group">
                            <img src={csp1.arrow} alt="" className="popup__arrow" />
                            <p className="popup__subtitle popup__subtitle-2">Международный форум об инновациях и новых технологиях с участием лауреатов нобелевской премии в онлайн и офлайн формат </p>
                        </div>
                        <div className="popup__group-stat ">
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                5 700 000 +
                                </p>
                                <p className="popup__text-stat">
                                общий охват аудитории 
                                </p>
                            </div>
                        </div>
                        <div className="popup__speaker-group popup__speaker-group--nobel">
                                <img className="popup__speaker-logo" src={csp2.speakerLogo} alt="" />
                                <p className="popup__speaker-text">ПРИВЛЕЧЕНИЕ УЧАСТНИКОВ НА ФОРУМ:</p>
                            </div>
                        <div className="popup__group-block popup__group-block-2">
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                    SOCIAL-РЕКЛАМА
                                </p>
                                <p className="popup__block-subtitle">
                                    размещения в целевых telegram-каналах
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                    ЛИДЕРЫ МНЕНИЙ
                                </p>
                                <p className="popup__block-subtitle">
                                    привлечение блогеров для анонса события 
                                </p>
                            </div>
                        </div>
                        <div className="popup__speaker popup__speaker-3">
                            <div className="popup__speaker-group">
                                
                                <p className="popup__speaker-text popup__speaker-text--bdsr">Блогеры:</p>
                                
                            </div>
                            <div className="popup__speaker-author popup__speaker-author-2">
                                <div className="speaker">
                                    <img src={csp2.speaker1Nobel} alt="" className="speaker__img" />
                                    <p className="speaker__name">
                                    Илья Варламов
                                    </p>
                                </div>
                                <div className="speaker">
                                    <img src={csp2.speaker2Nobel} alt="" className="speaker__img" />
                                    <p className="speaker__name">
                                    Алексей Пивоваров
                                    </p>
                                </div>
                                <div className="speaker">
                                    <img src={csp2.speaker3Nobel} alt="" className="speaker__img" />
                                    <p className="speaker__name">
                                    Валентин Петухов
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={closePopupOverlay} className={ popupActive === 'sheremetyevo' ? 'popup popup__active' : 'popup'}>
                <div className="popup__container popup__container--767">
                    <button className="popup__close" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} onClick={closePopup}>X</button>
                    <div className="sheremetyevo ">
                        <div className="popup__group">
                            <img src={csp2.sheremetyevo} alt="" className="popup__logo" />
                        </div>
                        <p className="popup__name">Digital-сопровождение</p>
                        <h1 className="popup__title">
                        sheremetyevo 
                        </h1>
                        <div className="popup__group">
                            <img src={csp1.arrow} alt="" className="popup__arrow" />
                            <p className="popup__subtitle popup__subtitle-2">Web-поддержка сайта, и продвижение</p>
                        </div>
                        <div className="popup__group-stat">
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                4+ года

                                </p>
                                <p className="popup__text-stat">
                                сотрудничества
                                </p>
                            </div>
                        </div>
                        <div className="popup__group-block popup__group-block-2">
                            <div className="popup__block popup__block-2 popup__min-height-80">
                                <p className="popup__block-title">
                                разработка web-сайта
                                </p>

                            </div>
                            <div className="popup__block popup__block-2 popup__min-height-80">
                                <p className="popup__block-title">
                                техническая поддержка
                                </p>

                            </div>
                            <div className="popup__block popup__block-2 popup__min-height-80">
                                <p className="popup__block-title">
                                digital-продвижение
                                </p>

                            </div>
                            <div className="popup__block popup__block-2 popup__min-height-80">
                                <p className="popup__block-title">
                                анализ результатов
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={closePopupOverlay} className={ popupActive === 'educationSalon' ? 'popup popup__active' : 'popup'}>
                <div className="popup__container popup__container--767">
                    <button className="popup__close" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} onClick={closePopup}>X</button>
                    <div className="educationSalon">
                        <div className="popup__group">
                            <img src={csp2.educationSalon} alt="" className="popup__logo" />
                        </div>
                        <p className="popup__name-light">Московский международный  ‘19 ‘20</p>
                        <h1 className="popup__title">
                        салон ОБРАЗОВАНИЯ
                        </h1>
                        <div className="popup__group">
                            <img src={csp1.arrow} alt="" className="popup__arrow" />
                            <p className="popup__subtitle popup__subtitle-2">Продвижение события,  PR & GR поддержка, web-разработка livestream-платформы</p>
                        </div>
                        <div className="popup__group-stat">
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                260 000 +
                                </p>
                                <p className="popup__text-stat">
                                online-участников в 2020
                                </p>
                            </div>
                            <div className="popup__stat">
                            <p className="popup__text-stat popup__text-stat--fs-50">
                                50 000 +
                                </p>
                                <p className="popup__text-stat">
                                очных участников в 2019
                                </p>
                            </div>
                        </div>
                        <div className="popup__group-block popup__group-block-2">
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                PR и GR поддержка
                                </p>
                                <p className="popup__block-subtitle">
                                информационная кампания в СМИ, привлечение медиа-партнеров, пресс-центр 2-х министерств 
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                Web-разработка 
                                </p>
                                <p className="popup__block-subtitle">
                                создание livestream-портала события для 260 000+ участников и 200+ партнеров online-выставки
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                Digital-продвижение
                                </p>
                                <p className="popup__block-subtitle">
                                digital-рекламной камании события на целевую аудиторию педагогов, родителей и нового поколения 
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                Social-кампания 
                                </p>
                                <p className="popup__block-subtitle">
                                ведение соцсетей салона и организация спецпроектов с блогерами в рамках события
                                </p>
                            </div>
                        </div>
                        <div className="popup__speaker popup__speaker-3">
                            <div className="popup__speaker-group">
                                
                                <p className="popup__speaker-text popup__speaker-text--bdsr">Соорганизаторы:</p>
                                
                            </div>
                            <img src={csp2.educationSalonOrg} alt=""  />

                        </div>
                    </div>
                </div>
            </div>
            <div onClick={closePopupOverlay} className={ popupActive === 'avon' ? 'popup popup__active' : 'popup'}>
                <div className="popup__container popup__container--767">
                    <button className="popup__close" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} onClick={closePopup}>X</button>
                    <div className="avon">
                        <div className="popup__group">
                            <img src={csp2.avon} alt="" className="popup__logo" />
                        </div>
                        <p className="popup__name-light">Livestream event</p>
                        <h1 className="popup__title">
                        AVON 
                        </h1>
                        <div className="popup__group">
                            <img src={csp1.arrow} alt="" className="popup__arrow" />
                            <p className="popup__subtitle popup__subtitle-2">Продвижение ключевого события с анонсом глобального ребрендинга</p>
                        </div>
                        <div className="popup__group-stat popup__group-stat-2">
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                350 000 +
                                </p>
                                <p className="popup__text-stat">
                                участников трансляции
                                </p>
                            </div>
                            <div className="popup__stat">
                            <p className="popup__text-stat popup__text-stat--fs-50">
                                800 000 +
                                </p>
                                <p className="popup__text-stat">
                                охват рекламной кампании
                                </p>
                            </div>
                        </div>
                        <div className="popup__group-block popup__group-block-2">
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                digital-реклама
                                </p>
                                <p className="popup__block-subtitle">
                                фокусная digital- кампания на продвижение трансляции  
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                bloggers  
                                </p>
                                <p className="popup__block-subtitle">
                                привлечение beauty-блогеров анонса события
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div onClick={closePopupOverlay} className={ popupActive === 'education' ? 'popup popup__active' : 'popup'}>
                <div className="popup__container popup__container--767">
                    <button className="popup__close" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} onClick={closePopup}>X</button>
                    <div className="education">
                        <div className="popup__text-absolut">
                            <p className="popup__text-absolut__title">
                            Саша Монтаг
                            </p>
                            <p className="popup__text-absolut__subtitle">
                            ведущая 2х2, видеоблогер, музыкант
                            </p>
                        </div>
                        <div className="popup__text-absolut-2">
                            <p className="popup__text-absolut__title">
                            Сергей Матвиенко
                            </p>
                            <p className="popup__text-absolut__subtitle">
                            юморист, актер шоу “Импровизация” на ТНТ
                            </p>
                        </div>
                        <div className="popup__group">
                            <img src={csp2.education} alt="" className="popup__logo" />
                        </div>
                        <p className="popup__name-light">Онлайн-мероприятие для старшеклассников
    от Благотворительного фонда АФК «Система»</p>
                            <h1 className="popup__title popup__title-2">
                            ВСЕРОССИЙСКИЙ 
        УРОК ПО УСТОЙЧИВОМУ РАЗВИТИЮ
                            </h1>
                        <div className="popup__group">
                            <img src={csp1.arrow} alt="" className="popup__arrow" />
                            <p className="popup__subtitle popup__subtitle-2">Онлайн-тестирование в прямой трансляции</p>
                        </div>
                        <div className="popup__group-stat">
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                1 000+
                                </p>
                                <p className="popup__text-stat">
                                активных участников
                                </p>
                            </div>
                        </div>
                        <div className="popup__group-block popup__group-block-2">
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                EVENT-МЕНЕДЖМЕНТ
                                </p>
                                <p className="popup__block-subtitle">
                                организация онлайн-мероприятия под ключ, формирование концепции мероприятия, интеграция интерактивных механик для взаимодействия с участниками
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                PRODUCTION
                                </p>
                                <p className="popup__block-subtitle">
                                организация полного съемочного процесса, разработка визуальных материалов и сборка трансляции
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                ПРОГРАММА И СПИКЕРЫ
                                </p>
                                <p className="popup__block-subtitle">
                                формирование программы мероприятия, подбор и брифинг спикеров
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                PR-СОПРОВОЖДЕНИЕ
                                </p>
                                <p className="popup__block-subtitle">
                                анонсирование проекта в массовых СМИ и на ресурсах медиа-партнеров 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={closePopupOverlay} className={ popupActive === 'infourok' ? 'popup popup__active' : 'popup'}>
                <div className="popup__container popup__container--767">
                    <button className="popup__close" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} onClick={closePopup}>X</button>
                    <div className="infourok">
                        <div className="popup__group">
                            <img src={csp2.infourok} alt="" className="popup__logo" />
                        </div>
                        <p className="popup__name-light">Онлайн-форум о буллинге в школах 
    от образовательного проекта “Инфоурок”</p>
                        <h1 className="popup__title">
                        ИНФОФОРУМ
                        </h1>
                        <div className="popup__group">
                            <img src={csp1.arrow} alt="" className="popup__arrow" />
                            <p className="popup__subtitle popup__subtitle-2">Организация и продвижения онлайн мероприятия</p>
                        </div>
                        <div className="popup__group-stat">
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                53 000+
                                </p>
                                <p className="popup__text-stat">
                                участников мероприятия 
                                </p>
                            </div>
                        </div>
                        <div className="popup__group-block popup__group-block-2">
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                ПРОГРАММА И СПИКЕРЫ
                                </p>
                                <p className="popup__block-subtitle">
                                формирование программы мероприятия, подбор и брифинг спикеров
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                ОНЛАЙН-ТРАНСЛЯЦИЯ
                                </p>
                                <p className="popup__block-subtitle">
                                организация многопоточной онлайн-трансляции
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                PR-СОПРОВОЖДЕНИЕ
                                </p>
                                <p className="popup__block-subtitle">
                                анонсирование проекта в массовых СМИ и на ресурсах медиа-партнеров
                                </p>
                            </div>
                        </div>
                        <div className="popup__speaker ">
                            <div className="popup__speaker-group popup__speaker-group-2">
                                <img className="popup__speaker-logo" src={csp2.speakerLogo} alt="" />
                                <p className="popup__speaker-text">ВЕДУЩИЕ</p>
                            </div>
                            <div className="popup__speaker-author popup__speaker-author-2">
                                <div className="speaker">
                                    <img src={csp2.infourokAuthor1} alt="" className="speaker__img" />
                                    <p className="speaker__name">
                                        Шалва Амонашвили
                                    </p>
                                    <p className="speaker__name-subtitle">
                                        Кандидат педагогических наук, доктор психологических наук
                                    </p>
                                </div>
                                <div className="speaker">
                                    <img src={csp2.infourokAuthor2} alt="" className="speaker__img" />
                                    <p className="speaker__name">
                                        Шалва Амонашвили
                                    </p>
                                    <p className="speaker__name-subtitle">
                                        Кандидат педагогических наук, доктор психологических наук
                                    </p>
                                </div>
                                <div className="speaker">
                                    <img src={csp2.infourokAuthor3} alt="" className="speaker__img" />
                                    <p className="speaker__name">
                                        Шалва Амонашвили
                                    </p>
                                    <p className="speaker__name-subtitle">
                                        Кандидат педагогических наук, доктор психологических наук
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={closePopupOverlay} className={ popupActive === 'skolkovo' ? 'popup popup__active' : 'popup'}>
                <div className="popup__container popup__container--767">
                    <button className="popup__close" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} onClick={closePopup}>X</button>
                    <div className="skolkovo">
                        <div className="popup__group">
                            <img src={csp2.skolkovoCase} alt="" className="popup__logo" />
                        </div>
                        <h1 className="popup__title">
                        Skolkovo
                        </h1>
                        <div className="popup__group">
                            <img src={csp1.arrow} alt="" className="popup__arrow" />
                            <p className="popup__subtitle popup__subtitle-2">Email-маркетинг для ключевых событий в Сколково</p>
                        </div>
                        <div className="popup__group-block-3">
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                Привлечение участников
                                </p>
                                <p className="popup__block-subtitle">
                                — прогрев и привлечение аудитории
                                — обеспечение большого процента переходов на сайт
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                контент 
                                </p>
                                <p className="popup__block-subtitle">
                                полный цикл создания писем: дизайн, копирайтинг, верстка, адаптация
                                </p>
                            </div>
                            <div className="popup__block popup__block-2">
                                <p className="popup__block-title">
                                Управление базой
                                </p>
                                <p className="popup__block-subtitle">
                                выделение сегментов базы по типу участника, гео и поведенчиским факторам 
                                </p>
                            </div>
                        </div>
                        <div className="popup__buttons ">
                            <p className="popup__button">
                                бизнес
                            </p>
                            <p className="popup__button">
                                технологии
                            </p>
                            <p className="popup__button">
                                стартапы
                            </p>
                            <p className="popup__button">
                                GR
                            </p>
                            <p className="popup__button">
                                инвесторы
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={closePopupOverlay} className={ popupActive === 'bitrix' ? 'popup popup__active' : 'popup'}>
                <div  className="popup__container popup__container--767">
                    <button className="popup__close" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} onClick={closePopup}>X</button>
                    <div className="bitrix">
                        <div className="popup__group">
                            <img src={csp2.bitrix} alt="" className="popup__logo" />
                        </div>
                        <h1 className="popup__title popup__title-2">
                        БИТРИКС24
                        </h1>
                        <div className="popup__group">
                            <img src={csp1.arrow} alt="" className="popup__arrow" />
                            <p className="popup__subtitle popup__subtitle-2">Широкоохватная кампания в Telergam-каналах
    по продвижению инструментов для управления бизнесом</p>
                        </div>
                        <div className="popup__group-stat">
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                100 +
                                </p>
                                <p className="popup__text-stat">
                                рекламных размещений
                                </p>
                            </div>
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                2 200 000 +
                                </p>
                                <p className="popup__text-stat">
                                суммарный охват публикаций
                                </p>
                            </div>
                        </div>
                        <div className="popup__group-block-3">
                            <div className="popup__block popup__block-4">
                                <p className="popup__block-title">
                                высокоохватные
                                </p>
                                <p className="popup__block-subtitle">
                                и массовые каналы
                                </p>
                            </div>
                            <div className="popup__block popup__block-4">
                                <p className="popup__block-title">
                                узкоцелевые каналы
                                </p>
                                <p className="popup__block-subtitle">
                                с высоким % целевой аудитории 
                                </p>
                            </div>
                            <div className="popup__block popup__block-4">
                                <p className="popup__block-title">
                                тематические каналый
                                </p>
                                <p className="popup__block-subtitle">
                                для анонсирования конкретных продуктов 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={closePopupOverlay} className={ popupActive === 'dnk' ? 'popup popup__active' : 'popup'}>
                <div className="popup__container popup__container--767">
                    <button className="popup__close" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} onClick={closePopup}>X</button>
                    <div className="dnk">
                        <div className="popup__text-absolut-3">
                            <p className="popup__text-absolut__title">
                            Who is Tyga?
                            </p>
                            <p className="popup__text-absolut__subtitle">
                            Американский рэпер <br /> <br />
                           <b>1 МЛРД просмотров</b> 
                           <br />
                            / клип Taste
                            </p>
                        </div>
                        <div className="popup__group">
                            <img src={caseBrand.cs5} alt="" className="popup__logo" />
                        </div>
                        <p className="popup__name-light">TYGA & ДЖИГАН</p>
                        <h1 className="popup__title popup__title--dnk">
                            ГРАНД ОТКРЫТИЕ КЛУБА ДНК
                        </h1>
                        <div className="popup__group">
                            <img src={csp1.arrow} alt="" className="popup__arrow" />
                            <p className="popup__subtitle popup__subtitle-2">Промо-кампания открытия ночного клуба Джигана с выступлением мировой звезды - рэпера Tyga</p>
                        </div>
                        <div className="popup__group-stat popup__group-stat-2">
                            <div className="popup__stat">
                                <p className="popup__text-stat popup__text-stat--fs-50">
                                8 000 000+
                                </p>
                                <p className="popup__text-stat">
                                просмотров на youtube и в ig
                                </p>
                            </div>
                        </div>
                        <div className="popup__group-block popup__group-block--dnk">
                            <div className="popup__block popup__block-2 popup__block--dnk">
                                <p className="popup__block-subtitle">
                                    Видео промо-кампания гранд открытия клуба с анонсом участия мега-звезды собрала миллионы просмотров на YouTube и в Instagram
                                </p>
                            </div>
                            <div className="popup__block popup__block-2 popup__block--dnk">
                                <p className="popup__block-subtitle">
                                    Дополнительно были приглашены популярные блогеры, сделавшие анонсы в соцсетях, и журналисты главных глянцевых изданий
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

{    /* <Cursor isActives={isActive}></Cursor> */}
<footer className="footer">
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
                            <NavLink onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} to='/services' className="menu__link footer__link" >/services</NavLink>
                        </div>
                        <div className="footer__direction ">
                            <p className="contact__sumbol">+</p>
                            <NavLink onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} to='/contact' className="footer__href" >contact us</NavLink>
                        </div>     

                    </div>
                </div>
        </footer>   
        </div>
        <Cursor isActives={isActive} isActiveTelegram={isActiveTelegram} isActiveInst={isActiveInst}></Cursor> 
        <Menu setActiveMenu={setActiveMenu} isActiveMenu={isActiveMenu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></Menu>

        </>
    )
}

export default Cases