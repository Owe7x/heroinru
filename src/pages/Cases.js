import React, {useState} from "react";
import { Parallax, Background } from "react-parallax";
import { NavLink } from "react-router-dom";
import { useGlobalEvent } from "beautiful-react-hooks";
import Menu from "../components/menu";
import Footer from "../components/footer";


import csp1 from '../images/Cases/cs-p-1.png'

import cs1 from '../images/Cases/cs-1.png'
import cs2 from '../images/Cases/cs-2.png'
import cs3 from '../images/Cases/cs-3.png'
import cs4 from '../images/Cases/cs-4.svg'
import cs5 from '../images/Cases/cs-5.svg'
import cs6 from '../images/Cases/cs-6.svg'
import cs7 from '../images/Cases/cs-7.svg'
import cs8 from '../images/Cases/cs-8.svg'
import cs9 from '../images/Cases/cs-9.svg'
import cs10 from '../images/Cases/cs-10.svg'
import cs11 from '../images/Cases/cs-11.svg'
import cs12 from '../images/Cases/cs-12.svg'

import pochta from '../images/Cases/pochta.gif'
import pka from '../video/5ka.mp4'
import base from '../video/base.mp4'
import dnk from '../video/dnk.mp4'
import kasper from '../video/kasper.mp4'
import mec from '../video/mec.mp4'
import nobel from '../video/nobel.mp4'
import yandex from '../video/yandex.mp4'


function Cases() {
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
      const insideStyles = {
        background: "white",
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
      };
    return(
        <>
        <div className="page-services">
            <header className="header-services header-cases " style={{ height: `${windowHeight}px` } }>
                <div className="header-services__logo header-cases__logo">
                    <NavLink to="/" className="header-main__path" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter}>[IN]</NavLink>
                </div>
                <div className="header-services__main header-cases__main">
                    <div className="header-services__info header-cases__info">
                        <h1 className="header-services__title header-cases__title">
                            
                            cases
                            <span className="header-services__title-thin header-cases__title-thin">brand new marketing</span>
                        </h1>
                    </div>
                    <div className="services-nav__ul">
                        <li className="services-nav__link">web-разработка</li>
                        <li className="services-nav__link">event</li>
                        <li className="services-nav__link">digital</li>
                        <li className="services-nav__link">premium</li>
                        <li className="services-nav__link">social</li>
                    </div>
                </div>
            </header>
            <main className="cases">
                <div className="cases__container">
                    <div className="case">
                        <img src={cs1} alt="" className="case__brand" />
                        <Parallax bgImage={pochta} strength={500} className='parallax-img'>
                            <div style={{ height: 560 }}>
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
                        </div>
                    </div>
                    <div className="case case-mt">
                        <img src={cs2} alt="" className="case__brand" />
                        <Parallax bgImage={csp1} strength={500} className='parallax-img'>
                            <div style={{ height: 650 }}>
                            </div>
                        </Parallax>
                        <p className="case__name">FORBES ONTOLOGY</p>
                        <p className="case__title">Forbes Ontology </p>
                        <p className="case__text">
                        Продвижение клубных программ Forbes Ontology для топ-менеджеров со стоимостью участия 450 000 рублей
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
                    <div className="case case-mb">
                        <img src={cs3} alt="" className="case__brand" />
                        <Parallax bgImage={csp1} strength={500} className='parallax-img'>
                            <div style={{ height: 650 }}>
                            </div>
                        </Parallax>
                        <p className="case__name">PepsiCo</p>
                        <p className="case__title">PepsiCo House</p>
                        <p className="case__text">
                        Разработка внутреннего web-портал Pepsico для сотрудников из 7 стран и 20 бренд-юнито
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
                                <div className="case__direction-name">creativ</div>
                            </div>
                        </div>
                    </div>
                    <div className="case case-mt-minus">
                        <img src={cs4} alt="" className="case__brand" />
                        <div className="ParallaxVideo">
                            <video autoPlay muted loop>
                            <source src={mec} type="video/mp4" />
                            </video>
                        </div>
                        <p className="case__name">Московский экспортный центр</p>
                        <p className="case__title">Правительство Москвы</p>
                        <p className="case__text">
                            Digital-продвижение программ поддержки от Правительсва Москвы (МЭЦ) для предпринимателей
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
                        </div>
                    </div>
                    <div className="case case-mb">
                        <img src={cs5} alt="" className="case__brand" />
                        <div className="ParallaxVideo">
                            <video autoPlay muted loop>
                            <source src={dnk} type="video/mp4" />
                            </video>
                        </div>
                        <p className="case__name">DNK </p>
                        <p className="case__title">Grand openning DNK bu Geegun </p>
                        <p className="case__text">
                        Открытие клуба ДНК от рейпера Джигана с привлечением мирового рэйпера Tyga 
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
                                <div className="case__direction-name">creativ</div>
                            </div>
                        </div>
                    </div>
                    <div className="case case-mt-minus">
                        <img src={cs6} alt="" className="case__brand" />
                        <div className="ParallaxVideo">
                            <video autoPlay muted loop>
                            <source src={kasper} type="video/mp4" />
                            </video>
                        </div>
                        <p className="case__name">Kaspersky </p>
                        <p className="case__title">Space Lab + Ад Сисадмина </p>
                        <p className="case__text">
                            5 лет "Ада Сисадмина" - разработка и поддежка мультфункциональной web-платформы
                        </p>
                        <div className="case__group">
                            <div className="case__direction">
                                <p className="case__sumbol">+</p>
                                <div className="case__direction-name">web</div>
                            </div>
                        </div>
                    </div>
                    <div className="case case-mt-minus case-mb-minus">
                        <img src={cs7} alt="" className="case__brand" />
                        <div className="ParallaxVideo">
                            <video autoPlay muted loop>
                            <source src={nobel} type="video/mp4" />
                            </video>
                        </div>
                        <p className="case__name">Skolkovo</p>
                        <p className="case__title">Nobel Forum Open Innovarion 2.0</p>
                        <p className="case__text">
                        Привлечение топ-блогеров для анонсирование крупнейшего форму
                        </p>
                        <div className="case__group">
                            <div className="case__direction">
                                <p className="case__sumbol">+</p>
                                <div className="case__direction-name">bloggers</div>
                            </div>
                        </div>
                    </div>
                    <div className="case ">
                        <img src={cs8} alt="" className="case__brand" />
                        <div className="ParallaxVideo">
                            <video autoPlay muted loop>
                            <source src={yandex} type="video/mp4" />
                            </video>
                        </div>
                        <p className="case__name">Яндекс </p>
                        <p className="case__title">Яндекс.Учебник  </p>
                        <p className="case__text">
                        Email-маркетинг для учителей и учеников. 2 000 000 + подписчиков за 2 года работы 
                        </p>
                        <div className="case__group">
                            <div className="case__direction">
                                <p className="case__sumbol">+</p>
                                <div className="case__direction-name">e-mail marketing</div>
                            </div>
                        </div>
                    </div>
                    <div className="case case-mt-minus case-mb-minus">
                        <img src={cs9} alt="" className="case__brand" />
                        <div className="ParallaxVideo">
                            <video autoPlay muted loop>
                            <source src={base} type="video/mp4" />
                            </video>
                        </div>
                        <p className="case__name">BASE DUBAI {'&'} SOHO </p>
                        <p className="case__title">Base Dubai in Moscow  </p>
                        <p className="case__text">
                        Культовые Дубайские вечеринки с мировыми звездами - Bob Sinclar, Jason Derulo, Black Coffee
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
                                <div className="case__direction-name">partners </div>
                            </div>
                        </div>
                    </div>
                    <div className="case case-mt-minus">
                        <img src={cs10} alt="" className="case__brand" />
                        <Parallax bgImage={csp1} strength={500} className='parallax-img'>
                            <div style={{ height: 650 }}>
                            </div>
                        </Parallax>
                        <p className="case__name">РЭЦ </p>
                        <p className="case__title">Сделано в России </p>
                        <p className="case__text">
                        Главное экспортное событие года - 53 000 участников и прямая трансляция Россия 24
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
                                <div className="case__direction-name">PR</div>
                            </div>
                        </div>
                    </div>
                    <div className="case case-mb">
                        <img src={cs11} alt="" className="case__brand" />
                        <div className="ParallaxVideo">
                            <video autoPlay muted loop>
                            <source src={pka} type="video/mp4" />
                            </video>
                        </div>
                        <p className="case__name">Пятерочка  </p>
                        <p className="case__title">Турбостарты 2020/21 </p>
                        <p className="case__text">
                        Web и App разработка проекта Турбостарты со 
100 000 участников по всей России
                        </p>
                        <div className="case__group">
                            <div className="case__direction">
                                <p className="case__sumbol">+</p>
                                <div className="case__direction-name">web</div>
                            </div>
                        </div>
                    </div>
                    <div className="case case-mt-minus">
                        <img src={cs12} alt="" className="case__brand" />
                        <Parallax bgImage={csp1} strength={500} className='parallax-img'>
                            <div style={{ height: 650 }}>
                            </div>
                        </Parallax>
                        <p className="case__name">skolkovo </p>
                        <p className="case__title">Skolkovo Forums   </p>
                        <p className="case__text">
                        5 лет продвижения форумов Sk - Открытые инновации, Nobel Forum, StartUp Village 
                        </p>
                        <div className="case__group">
                            <div className="case__direction">
                                <p className="case__sumbol">+</p>
                                <div className="case__direction-name">digital</div>
                            </div>
                            <div className="case__direction">
                                <p className="case__sumbol">+</p>
                                <div className="case__direction-name">digital PR </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
         </div>
         <Menu onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></Menu>
{    /* <Cursor isActives={isActive}></Cursor> */}
     <Footer></Footer>
        </>
    )
}

export default Cases