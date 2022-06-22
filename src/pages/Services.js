import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Menu from '../components/menu'
import Cursor from '../components/cursor'
import Footer from '../components/footer'
import { useGlobalEvent } from "beautiful-react-hooks";
import * as img from "../utils/services-img"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

function Services() {
    const [isActive, setActive] = useState(false);
    const [windowHeight, setWindowWidth] = useState(document.documentElement.clientHeight);
    const onWindowResize = useGlobalEvent("resize");
  
    onWindowResize((event: React.SyntheticEvent) => {
      setWindowWidth(document.documentElement.clientHeight);
    });
    
    const handleMouseEnter = e => {
      setActive(true)
    }
    const handleMouseLeave = e => {
      setActive(false)
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
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
    return (
      <>
      
      
     <div className="page-services">
         <header className="header-services" style={{ height: `${windowHeight}px` } }>
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
                 <div className="services-nav__ul">
                     <li className="services-nav__link">strategy</li>
                     <li className="services-nav__link">digital</li>
                     <li className="services-nav__link">event(+livestream)</li>
                     <li className="services-nav__link">web / app</li>
                     <li className="services-nav__link">smm / content</li>
                     <li className="services-nav__link">email-marketing</li>
                     <li className="services-nav__link">bloggers</li>
                     <li className="services-nav__link">pr / new media</li>
                     <li className="services-nav__link">production</li>
                     <li className="services-nav__link">special projects</li>
                 </div>
             </div>
         </header>
         <main className="main-services">
                <div className="bg-radial-1"></div>
                <div className="bg-radial-2"></div>
                <div className="bg-radial-3"></div>
                <div className="bg-radial-4"></div>
             <div className="main-services__blocks">
                 <div className="main-services__block-main">
                    <div className="main-services__block-main__header b-header-1">
                        <div className="main-services__block-main__header__wrapper">
                            <div className="main-services__block-main__header__title">
                                <h1 className="main-services__block__title">
                                DIGITAL -РЕКЛАМА
                                </h1>
                            </div>
                            <div className="main-services__block-main__header__button">
                                more
                            </div>
                        </div>
                        <div className="main-services__block-main__header__wrapper">
                            <p className="main-services__block-main__header__text">
                            Продвижение b2b услуг, привлечение клиентов, увеличение знания
                            </p>
                            <p className="main-services__block-main__header__text-thin">
                            разработка от имиджевых промо-стum dolor sit amet, consectetur adipiscing elit, sed do eiu
                            </p>
                        </div>
                    </div>
                    <div className="main-services__block-main__item">
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.Delivery} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text">
                                Продвижение клубных программ Forbes Ontology для топ-менеджеров со стоимостью участия 450 000 рублей
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.OpenInnovation} alt="" className="main-services__block-main__item__block__logo" />    
                            </div>
                            <p className="main-services__block-main__item__block__text">
                                Комплексная digital-кампания и 100 000+ online-участников на крупнейшем технологическом форуме России
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.MadeinRussia} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text br-none">
                                Digital-продвижение программ поддержки от Правительсва Москвы (МЭЦ) для предпринимателей
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                    </div>
                    <Slider {...settings} className='main-services__block-main__item__block-slider'>
                    <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.Delivery} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text">
                                Продвижение клубных программ Forbes Ontology для топ-менеджеров со стоимостью участия 450 000 рублей
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.OpenInnovation} alt="" className="main-services__block-main__item__block__logo" />    
                            </div>
                            <p className="main-services__block-main__item__block__text">
                                Комплексная digital-кампания и 100 000+ online-участников на крупнейшем технологическом форуме России
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.MadeinRussia} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text br-none">
                                Digital-продвижение программ поддержки от Правительсва Москвы (МЭЦ) для предпринимателей
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                    </Slider>
                    <div className="main-services__block-main__header__button main-services__block-main__header__button-mobile">
                                more
                    </div>
                 </div>
                 <div className="main-services__block-nav">
                    <div className="services-nav__ul">
                        <li className="services-nav__link">strategy</li>
                        <li className="services-nav__link services-nav__link-active"><b>digital</b></li>
                        <li className="services-nav__link">event(+livestream)</li>
                        <li className="services-nav__link">web / app</li>
                        <li className="services-nav__link">smm / content</li>
                        <li className="services-nav__link">email-marketing</li>
                        <li className="services-nav__link">bloggers</li>
                        <li className="services-nav__link">pr / new media</li>
                        <li className="services-nav__link">production</li>
                        <li className="services-nav__link">special projects</li>
                    </div>
                 </div>
             </div>
             <div className="main-services__blocks">
                 <div className="main-services__block-main">
                    <div className="main-services__block-main__header b-header-2 br-none">
                        <div className="main-services__block-main__header__wrapper">
                            <div className="main-services__block-main__header__title">
                                <h1 className="main-services__block__title">
                                EVENT <img src={img.world} className='icon-world' alt="" srcset="" />
                                </h1>
                            </div>
                            <div className="main-services__block-main__header__button">
                                подробнее <img className="array-btn" src={img.arrayBtn} alt="" srcset="" />
                            </div>
                        </div>
                        <div className="main-services__block-main__header__wrapper">
                            <p className="main-services__block-main__header__text max-width-340">
                            Продвижение крупнейших мероприятий для бизнеса, it и образования
                            </p>
                            <p className="main-services__block-main__header__text-thin max-width-320">
                            Разработка от имиджевых промо-страниц до многоуровневых web-порталов с глубокой интеграцией в бизнес заказчика
                            </p>
                        </div>
                    </div>
                    <div className="main-services__block-main__item">
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.kaspersky} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text">
                            Культовые Дубайские вечеринки с мировыми звездами - Bob Sinclar, Jason Derulo, Black Coffee
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.Pyaterochka} alt="" className="main-services__block-main__item__block__logo" />    
                            </div>
                            <p className="main-services__block-main__item__block__text">
                            5 лет продвижения  форумов Sk - Открытые инновации, Nobel Forum, StartUp Village 
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.Pepsico} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text br-none">
                            Главное экспортное событие года - 53 000 участников и прямая трансляция на Россия 24
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                    </div>
                    <Slider {...settings} className='main-services__block-main__item__block-slider'>
                    <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.kaspersky} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text">
                            Культовые Дубайские вечеринки с мировыми звездами - Bob Sinclar, Jason Derulo, Black Coffee
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.Pyaterochka} alt="" className="main-services__block-main__item__block__logo" />    
                            </div>
                            <p className="main-services__block-main__item__block__text">
                            5 лет продвижения  форумов Sk - Открытые инновации, Nobel Forum, StartUp Village 
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.Pepsico} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text br-none">
                            Главное экспортное событие года - 53 000 участников и прямая трансляция на Россия 24
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                    </Slider>
                    <div className="main-services__block-main__header__button main-services__block-main__header__button-mobile">
                                подробнее
                                <img class="array-btn" src="/static/media/array-btn.61e9d60c2c395a705e6a420f704531fa.svg" alt="" srcset=""></img>
                    </div>
                 </div>

                 <div className="main-services__block-nav">
                    <div className="services-nav__ul">
                        <li className="services-nav__link">strategy</li>
                        <li className="services-nav__link">digital</li>
                        <li className="services-nav__link services-nav__link-active"><b>event(+livestream)</b></li>
                        <li className="services-nav__link">web / app</li>
                        <li className="services-nav__link">smm / content</li>
                        <li className="services-nav__link">email-marketing</li>
                        <li className="services-nav__link">bloggers</li>
                        <li className="services-nav__link">pr / new media</li>
                        <li className="services-nav__link">production</li>
                        <li className="services-nav__link">special projects</li>
                    </div>
                 </div>
             </div>
             <div className="main-services__blocks">
                 <div className="main-services__block-main">
                    <div className="main-services__block-main__header b-header-3 br-none">
                        <div className="main-services__block-main__header__wrapper">
                            <div className="main-services__block-main__header__title">
                                <h1 className="main-services__block__title">
                                web / app
                                </h1>
                            </div>
                            <div className="main-services__block-main__header__button">
                            узнать больше <img className="array-btn" src={img.arrayBtn} alt="" srcset="" />
                            </div>
                        </div>
                        <div className="main-services__block-main__header__wrapper">

                            <p className="main-services__block-main__header__text-thin max-width-620">
                            Разработка от имиджевых промо-страниц до многоуровневых web-порталов с глубокой интеграцией в бизнес заказчика
                            </p>
                        </div>
                    </div>
                    <div className="main-services__block-main__item">
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.village} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text">
                            Web и App разработка проекта Турбостарты со 100 000 участников по всей России
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
                                <img src={img.kaspersky} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text br-none">
                            5 лет "Ада Сисадмина" - разработка и поддежка мультфункциональной web-платформы
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
                            Web и App разработка проекта Турбостарты со 100 000 участников по всей России
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
                                <img src={img.kaspersky} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text br-none">
                            5 лет "Ада Сисадмина" - разработка и поддежка мультфункциональной web-платформы
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                    </Slider>
                    <div className="main-services__block-main__header__button main-services__block-main__header__button-mobile">
                    узнать больше
                    <img class="array-btn" src="/static/media/array-btn.61e9d60c2c395a705e6a420f704531fa.svg" alt="" srcset=""></img>
                    </div>
                 </div>
                 <div className="main-services__block-nav">
                    <div className="services-nav__ul">
                        <li className="services-nav__link">strategy</li>
                        <li className="services-nav__link">digital</li>
                        <li className="services-nav__link">event(+livestream)</li>
                        <li className="services-nav__link services-nav__link-active"><b>web / app</b></li>
                        <li className="services-nav__link">smm / content</li>
                        <li className="services-nav__link">email-marketing</li>
                        <li className="services-nav__link">bloggers</li>
                        <li className="services-nav__link">pr / new media</li>
                        <li className="services-nav__link">production</li>
                        <li className="services-nav__link">special projects</li>
                    </div>
                 </div>
             </div>
             <div className="main-services__blocks">
                 <div className="main-services__block-main">
                    <div className="main-services__block-main__header b-header-4 br-none">
                        <div className="main-services__block-main__header__wrapper">
                            <div className="main-services__block-main__header__title max-width-auto">
                                <h1 className="main-services__block__title">
                                PR / New Media
                                </h1>
                            </div>
                        </div>
                        <div className="main-services__block-main__header__wrapper">

                            <p className="main-services__block-main__header__text-thin max-width-620">
                            Разработка PR стратегий, классический PR и работа с новыми медиа бла бла бля 
                            </p>
                        </div>
                    </div>
                    <div className="main-services__block-main__item">
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.village} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text">
                            Виртуальная стартап-конференция startup village 2020
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.Pepsico} alt="" className="main-services__block-main__item__block__logo" />    
                            </div>
                            <p className="main-services__block-main__item__block__text">
                            PepsiCo House
                            Разработка online-платформы для
                            проведения масштабного корпоративного события
                            в период пандемии
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.kaspersky} alt="" className="main-services__block-main__item__block__logo" />
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
                            Виртуальная стартап-конференция startup village 2020
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.Pepsico} alt="" className="main-services__block-main__item__block__logo" />    
                            </div>
                            <p className="main-services__block-main__item__block__text">
                            PepsiCo House
                            Разработка online-платформы для
                            проведения масштабного корпоративного события
                            в период пандемии
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.kaspersky} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text br-none">
                            Привлекли новых клиентов и увеличили % повторных заказов
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                    </Slider>
                 </div>
                 <div className="main-services__block-nav">
                    <div className="services-nav__ul">
                        <li className="services-nav__link">strategy</li>
                        <li className="services-nav__link">digital</li>
                        <li className="services-nav__link">event(+livestream)</li>
                        <li className="services-nav__link">web / app</li>
                        <li className="services-nav__link">smm / content</li>
                        <li className="services-nav__link">email-marketing</li>
                        <li className="services-nav__link">bloggers</li>
                        <li className="services-nav__link services-nav__link-active"><b>pr / new media</b></li>
                        <li className="services-nav__link">production</li>
                        <li className="services-nav__link">special projects</li>
                    </div>
                 </div>
             </div>
             <div className="main-services__blocks">
                 <div className="main-services__block-main">
                    <div className="main-services__block-main__header b-header-5 br-none">
                        <div className="main-services__block-main__header__wrapper">
                            <div className="main-services__block-main__header__title max-width-auto">
                                <h1 className="main-services__block__title">
                                Production
                                </h1>
                            </div>
                        </div>
                        <div className="main-services__block-main__header__wrapper">

                            <p className="main-services__block-main__header__text-thin max-width-620">
                            ОТ ИДЕИ ДО ФИНАЛЬНОГО КАТА.  Полный цикл создания видеоконтента для бизнеса.
                            </p>
                        </div>
                    </div>
                    <div className="main-services__block-main__item">
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.village} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text">
                            Виртуальная стартап-конференция startup village 2020
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.Pepsico} alt="" className="main-services__block-main__item__block__logo" />    
                            </div>
                            <p className="main-services__block-main__item__block__text">
                            PepsiCo House
                            Разработка online-платформы для
                            проведения масштабного корпоративного события
                            в период пандемии
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.kaspersky} alt="" className="main-services__block-main__item__block__logo" />
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
                            Виртуальная стартап-конференция startup village 2020
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.Pepsico} alt="" className="main-services__block-main__item__block__logo" />    
                            </div>
                            <p className="main-services__block-main__item__block__text">
                            PepsiCo House
                            Разработка online-платформы для
                            проведения масштабного корпоративного события
                            в период пандемии
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.kaspersky} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text br-none">
                            Привлекли новых клиентов и увеличили % повторных заказов
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                    </Slider>
                 </div>
                 <div className="main-services__block-nav">
                    <div className="services-nav__ul">
                        <li className="services-nav__link">strategy</li>
                        <li className="services-nav__link">digital</li>
                        <li className="services-nav__link">event(+livestream)</li>
                        <li className="services-nav__link">web / app</li>
                        <li className="services-nav__link">smm / content</li>
                        <li className="services-nav__link">email-marketing</li>
                        <li className="services-nav__link">bloggers</li>
                        <li className="services-nav__link">pr / new media</li>
                        <li className="services-nav__link services-nav__link-active"><b>production</b></li>
                        <li className="services-nav__link">special projects</li>
                    </div>
                 </div>
             </div>
             <div className="main-services__blocks">
                 <div className="main-services__block-main">
                    <div className="main-services__block-main__header b-header-6 br-none">
                        <div className="main-services__block-main__header__wrapper">
                            <div className="main-services__block-main__header__title max-width-auto">
                                <h1 className="main-services__block__title">
                                Bloggers 
                                </h1>
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
                            Виртуальная стартап-конференция startup village 2020
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.Pepsico} alt="" className="main-services__block-main__item__block__logo" />    
                            </div>
                            <p className="main-services__block-main__item__block__text">
                            PepsiCo House
                            Разработка online-платформы для
                            проведения масштабного корпоративного события
                            в период пандемии
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.kaspersky} alt="" className="main-services__block-main__item__block__logo" />
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
                            Виртуальная стартап-конференция startup village 2020
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.Pepsico} alt="" className="main-services__block-main__item__block__logo" />    
                            </div>
                            <p className="main-services__block-main__item__block__text">
                            PepsiCo House
                            Разработка online-платформы для
                            проведения масштабного корпоративного события
                            в период пандемии
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.kaspersky} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text br-none">
                            Привлекли новых клиентов и увеличили % повторных заказов
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                    </Slider>
                 </div>
                 <div className="main-services__block-nav">
                    <div className="services-nav__ul">
                        <li className="services-nav__link">strategy</li>
                        <li className="services-nav__link">digital</li>
                        <li className="services-nav__link">event(+livestream)</li>
                        <li className="services-nav__link">web / app</li>
                        <li className="services-nav__link">smm / content</li>
                        <li className="services-nav__link">email-marketing</li>
                        <li className="services-nav__link services-nav__link-active"><b>bloggers</b></li>
                        <li className="services-nav__link">pr / new media</li>
                        <li className="services-nav__link">production</li>
                        <li className="services-nav__link">special projects</li>
                    </div>
                 </div>
             </div>
             <div className="main-services__blocks">
                 <div className="main-services__block-main b-7-1">
                    <div className="main-services__block-main__header b-header-7 br-none">
                        <div className="main-services__block-main__header__wrapper">
                            <div className="main-services__block-main__header__title max-width-auto">
                                <h1 className="main-services__block__title">
                                SMM / Content
                                </h1>
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
                            Повышение вовлеченности в 3 раза и запуск новых рубрик, прожарка стартапов и системный SMM
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.Pepsico} alt="" className="main-services__block-main__item__block__logo" />    
                            </div>
                            <p className="main-services__block-main__item__block__text">
                            Разработка стратегии ведения социальных сетейи визуальная концепция для нового технопарка в Уфе 
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.kaspersky} alt="" className="main-services__block-main__item__block__logo" />
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
                                <img src={img.village} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text">
                            Повышение вовлеченности в 3 раза и запуск новых рубрик, прожарка стартапов и системный SMM
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.Pepsico} alt="" className="main-services__block-main__item__block__logo" />    
                            </div>
                            <p className="main-services__block-main__item__block__text">
                            Разработка стратегии ведения социальных сетейи визуальная концепция для нового технопарка в Уфе 
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.kaspersky} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text br-none">
                            Коммуникационная и SMM-стратегия для работы с IT-сообществом Агентства инноваций Москвы
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                    </Slider>
                 </div>
                 <div className="main-services__block-nav">
                    <div className="services-nav__ul">
                        <li className="services-nav__link">strategy</li>
                        <li className="services-nav__link">digital</li>
                        <li className="services-nav__link">event(+livestream)</li>
                        <li className="services-nav__link">web / app</li>
                        <li className="services-nav__link services-nav__link-active"><b>smm / content</b></li>
                        <li className="services-nav__link">email-marketing</li>
                        <li className="services-nav__link">bloggers</li>
                        <li className="services-nav__link">pr / new media</li>
                        <li className="services-nav__link">production</li>
                        <li className="services-nav__link">special projects</li>
                    </div>
                 </div>
             </div>
             <div className="main-services__blocks">
                 <div className="main-services__block-main ">
                    <div className="main-services__block-main__header b-header-8 br-none">
                        <div className="main-services__block-main__header__wrapper">
                            <div className="main-services__block-main__header__title ">
                                <h1 className="main-services__block__title">
                                Email-marketing
                                </h1>
                            </div>
                            <div className="main-services__block-main__header__button">
                            узнать больше <img className="array-btn" src={img.arrayBtn} alt="" srcset="" />
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
                                <img src={img.kaspersky} alt="" className="main-services__block-main__item__block__logo" />
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
                                <img src={img.kaspersky} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text br-none">
                            Привлекли новых клиентов и увеличили % повторных заказов
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                    </Slider>
                    <div className="main-services__block-main__header__button main-services__block-main__header__button-mobile">
                    узнать больше
                    <img class="array-btn" src="/static/media/array-btn.61e9d60c2c395a705e6a420f704531fa.svg" alt="" srcset=""></img>
                    </div>
                 </div>
                 <div className="main-services__block-nav">
                    <div className="services-nav__ul">
                        <li className="services-nav__link">strategy</li>
                        <li className="services-nav__link">digital</li>
                        <li className="services-nav__link">event(+livestream)</li>
                        <li className="services-nav__link">web / app</li>
                        <li className="services-nav__link">smm / content</li>
                        <li className="services-nav__link services-nav__link-active"><b>email-marketing</b></li>
                        <li className="services-nav__link">bloggers</li>
                        <li className="services-nav__link">pr / new media</li>
                        <li className="services-nav__link">production</li>
                        <li className="services-nav__link">special projects</li>
                    </div>
                 </div>
             </div>
             <div className="main-services__blocks">
                 <div className="main-services__block-main ">
                    <div className="main-services__block-main__header b-header-9 br-none">
                        <div className="main-services__block-main__header__wrapper">
                            <div className="main-services__block-main__header__title ">
                                <h1 className="main-services__block__title">
                                Strategy
                                </h1>
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
                            Виртуальная стартап-конференция startup village 2020
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.Pepsico} alt="" className="main-services__block-main__item__block__logo" />    
                            </div>
                            <p className="main-services__block-main__item__block__text">
                                PepsiCo House
                                Разработка online-платформы для
                                проведения масштабного корпоративного события
                                в период пандемии
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.kaspersky} alt="" className="main-services__block-main__item__block__logo" />
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
                            Виртуальная стартап-конференция startup village 2020
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.Pepsico} alt="" className="main-services__block-main__item__block__logo" />    
                            </div>
                            <p className="main-services__block-main__item__block__text">
                                PepsiCo House
                                Разработка online-платформы для
                                проведения масштабного корпоративного события
                                в период пандемии
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                        <div className="main-services__block-main__item__block">
                            <div className="main-services__block-main__item__block-img">
                                <img src={img.kaspersky} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text br-none">
                            Привлекли новых клиентов и увеличили % повторных заказов
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                    </Slider>
                 </div>
                 <div className="main-services__block-nav">
                    <div className="services-nav__ul">
                        <li className="services-nav__link services-nav__link-active"><b>strategy</b></li>
                        <li className="services-nav__link">digital</li>
                        <li className="services-nav__link">event(+livestream)</li>
                        <li className="services-nav__link">web / app</li>
                        <li className="services-nav__link">smm / content</li>
                        <li className="services-nav__link">email-marketing</li>
                        <li className="services-nav__link">bloggers</li>
                        <li className="services-nav__link">pr / new media</li>
                        <li className="services-nav__link">production</li>
                        <li className="services-nav__link">special projects</li>
                    </div>
                 </div>
             </div>
             <div className="main-services__blocks">
                 <div className="main-services__block-main ">
                    <div className="main-services__block-main__header b-header-10 br-none">
                        <div className="main-services__block-main__header__wrapper">
                            <div className="main-services__block-main__header__title ">
                                <h1 className="main-services__block__title">
                                Special Projects
                                </h1>
                            </div>
                            <div className="main-services__block-main__header__button">
                            узнать больше <img className="array-btn" src={img.arrayBtn} alt="" srcset="" />
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
                                <img src={img.kaspersky} alt="" className="main-services__block-main__item__block__logo" />
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
                                <img src={img.kaspersky} alt="" className="main-services__block-main__item__block__logo" />
                            </div>
                            <p className="main-services__block-main__item__block__text br-none">
                            Привлекли новых клиентов и увеличили % повторных заказов
                            </p>
                            <img src={img.ArrayBlock} alt="" className="main-services__block-main__item__block__array" />
                        </div>
                    </Slider>
                    <div className="main-services__block-main__header__button main-services__block-main__header__button-mobile">
                        узнать больше
                        <img class="array-btn" src="/static/media/array-btn.61e9d60c2c395a705e6a420f704531fa.svg" alt="" srcset=""></img>
                    </div>
                 </div>
                 <div className="main-services__block-nav">
                    <div className="services-nav__ul">
                        <li className="services-nav__link">strategy</li>
                        <li className="services-nav__link">digital</li>
                        <li className="services-nav__link">event(+livestream)</li>
                        <li className="services-nav__link">web / app</li>
                        <li className="services-nav__link">smm / content</li>
                        <li className="services-nav__link">email-marketing</li>
                        <li className="services-nav__link">bloggers</li>
                        <li className="services-nav__link">pr / new media</li>
                        <li className="services-nav__link">production</li>
                        <li className="services-nav__link services-nav__link-active"><b>special projects</b></li>
                    </div>
                 </div>
             </div>
             <div className="main-services__thank">
                 <img src={img.Thank} alt="" className="main-services__thank-img" />
             </div>
         </main>
     </div>
     <Menu onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></Menu>
{    /* <Cursor isActives={isActive}></Cursor> */}
     <Footer></Footer>
    </>
    )
 };
 
 export default Services;