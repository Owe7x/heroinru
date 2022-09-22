import React,  {  useState } from 'react';
import { NavLink } from "react-router-dom";

function Menu({isMain, onMouseEnter, onMouseLeave, isActiveMenu, setActiveMenu, onMouseTelegram}) {
    const [isActive, setActive] = useState(false);

    const toggleclassName = () => {
      setActive(!isActive);
      setActiveMenu(!isActiveMenu)
    };

  return (
      <>
      <div className={isMain ? 'button__menu-main' : ''}>
        <div className={isActive ? 'button__menu button__menu-active': 'button__menu'}  onClick={ toggleclassName } onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <span></span>
            <span></span>
            <span className={isMain ? 'button__menu_span-unactive' : 'button__menu_span-unactive-all'}></span>
        </div>
      </div>
    <div className={isActive ? 'menu menu-active': 'menu'}>
        
        <div className="menu__wrapper">
            <div className={isActive ? 'menu__container-menu menu__container-menu-active': 'menu__container-menu'} >
                <div className="menu__container-centr">
                <NavLink to="/" className={isActive ? 'header-main__path header-main__path--menu header-main__path--active': 'header-main__path header-main__path--menu '}  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>[IN]</NavLink>
                    <nav className="menu__nav">
                        <li className={isActive ? 'menu__item menu__item-active': 'menu__item'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><NavLink to='/cases' className="menu__link" >/projects</NavLink></li>
                        <li className={isActive ? 'menu__item menu__item-active': 'menu__item'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><NavLink to='/services' className="menu__link" >/services</NavLink></li>
                        {/* <li className={isActive ? 'menu__item menu__item-active': 'menu__item'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><NavLink to='/about' className="menu__link" >/about</NavLink></li>  */}
                        <li className={isActive ? 'menu__item menu__item-active': 'menu__item'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><NavLink to='/contact' className="menu__link" >/contact</NavLink></li> 
                    </nav>
                </div>
            </div>

            <div className="menu__container-contacts" >
                <div className={isActive ? 'menu__container-centr_contacts menu__container-centr_contacts-active': 'menu__container-centr_contacts'} >
                    <p className="menu__contacts-title" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    contacts
                    </p>
                    <div className="menu__contacts">
                        <a href="mailto:giveme@heroinmarketing.com" className="menu__contact-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>giveme@heroinmarketing.com</a> 
                        <a href="tel:+74994042756" className="menu__contact-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>+7 499 404 27 56</a> 
                    </div>
                    <div className="menu__social">
                        <a href="https://t.me/heroinmarketing" target="_blank" rel="noopener noreferrer" className="menu__social-item--telegram" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >telegram</a>
                        <a href="https://www.instagram.com/heroinmarketing" target="_blank" rel="noopener noreferrer" className="menu__social-item--instagram" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>instagram</a>
                    </div> 
                    <div className="menu__contacts">
                        <p  className="menu__contact-item margin-0">Moscow, Russia</p>
                        <a href='https://yandex.ru/maps/213/moscow/house/novodmitrovskaya_ulitsa_2k2/Z04Ycw5gSkEDQFtvfXRxdXhkZQ==/?ll=37.590344%2C55.804471&z=17.09' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  className="menu__contact-item margin-0"> Савеловский Сити, ул.Новодмитровская д. 2, к 2</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Menu;