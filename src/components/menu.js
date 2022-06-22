import React,  {  useState } from 'react';
import { NavLink } from "react-router-dom";

function Menu({onMouseEnter, onMouseLeave}) {
    const [isActive, setActive] = useState(false);

    const toggleclassName = () => {
      setActive(!isActive);
    };

  return (
      <>
    <div className={isActive ? 'button__menu button__menu-active': 'button__menu'}  onClick={ toggleclassName } onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <span></span>
        <span></span>
    </div>
    <div className={isActive ? 'menu menu-active': 'menu'}>
        <div className="menu__wrapper">
            <div className={isActive ? 'menu__container-menu menu__container-menu-active': 'menu__container-menu'} >
                <div className="menu__container-centr">
                    <nav className="menu__nav">
                        <li className={isActive ? 'menu__item menu__item-active': 'menu__item'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><span className="menu__li-number">01</span><a href="/" className="menu__link">home</a></li>
                        <li className={isActive ? 'menu__item menu__item-active': 'menu__item'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><span className="menu__li-number">02</span><NavLink to='/cases' className="menu__link" >projects</NavLink></li>
                        <li className={isActive ? 'menu__item menu__item-active': 'menu__item'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><span className="menu__li-number">03</span><NavLink to='/services' className="menu__link" >services</NavLink></li>
                        <li className={isActive ? 'menu__item menu__item-active': 'menu__item'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><span className="menu__li-number">04</span><a href="about.html" className="menu__link">about</a></li>
                        <li className={isActive ? 'menu__item menu__item-active': 'menu__item'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><span className="menu__li-number">05</span><a href="brif" className="menu__link">contact</a></li> 
                    </nav>
                </div>
            </div>

            <div className="menu__container-contacts" >
                <div className={isActive ? 'menu__container-centr_contacts menu__container-centr_contacts-active': 'menu__container-centr_contacts'} >
                    <p className="menu__contacts-title" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    CONTACTS
                    </p>
                    <div className="menu__contacts">
                        <a href="mailto:example@mail.com" className="menu__contact-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>givememore@heroinmarketing.com</a>
                        <a href="tel:+79990000000" className="menu__contact-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>+7 999 000 00 00</a> 
                    </div>
                    <div className="menu__social">
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="menu__social-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>FACEBOOK</a>
                        <p className="menu__social-item">  —  </p>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="menu__social-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>INSTAGRAM</a>
                        <p className="menu__social-item">  —  </p>
                        <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" className="menu__social-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>YOUTUBE</a>
                    </div> 
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Menu;