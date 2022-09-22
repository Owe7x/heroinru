import { NavLink } from "react-router-dom";
import QR from '../images/Contact/qr.svg'
import React, {useState, useEffect, useRef} from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { FormValidation } from '../hooks/formValidation';
import { send } from 'emailjs-com';
import Loader from "../components/loader";
import Menu from '../components/menu'
import Cursor from '../components/cursor'

function Form () {
    const [isActive, setActive] = useState(false);
    const [isActiveMenu, setActiveMenu] = useState(false);
    const [isActiveTelegram, setActiveTelegam] = useState(false);
    const [isActiveInst, setActiveInst] = useState(false);
    const [value, setValue] = useState()

    const refForm = useRef(null);
    const [btnDisable , setBtnDisable] = useState(true)
    const [deactiveForm , setDeactivForm] = useState(false)
    const validForm = FormValidation()
    const [isActiveLoader, setActiveLoader] = useState(true);
    const [isActiveLoaderBg, setActiveLoaderBg] = useState(true);

    useEffect(() => {
        validForm.isValid ? setBtnDisable(false) : setBtnDisable(true)
    }, [validForm.isValid])
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    function formSubmit (evt) {
        evt.preventDefault();
        SendValue({ ...validForm.values, ['tel']: value })
        setDeactivForm(true)
        refForm.current.reset()
        
    }

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

    function SendValue (value) {
        console.log(value);
        send('service_x7a7l7g', 'template_gge6qaj', value, 'RDzyID7qA1CQRZrwF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
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
        <div className={isActiveLoaderBg || isActiveMenu ? 'page-contact page-contact-100vh' : 'page-contact'} >
            <header className="header-contact">
                <NavLink onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="/" className="header-main__path" >[IN]</NavLink>
                <NavLink to='/services' className="header-main__link-works" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter}>
                    <div className="case__direction">
                        <p className="main__sumbol">+</p>
                        <div className="main__direction-name">services </div>
                    </div>
                </NavLink>
            </header>
            <main className="main-contact">
                <h1 className="main-contact__title">
                Contact us
                </h1>

                <form  className={deactiveForm ? 'form-none' : 'form'} ref={refForm} onSubmit={formSubmit}>
                    <div className="form__inputs">
                        <label className="form__label"> 
                            <input className={`form__input ${validForm.errors.name && 'form__input-error'}`}
                                type='text' 
                                name='name'
                                id='name' 
                                minLength='2' 
                                maxLength='30'
                                pattern='^[A-Za-zА-Яа-яЁё\s\-]{2,30}$'
                                title='поле может содержать только латиницу, кириллицу, пробел или дефис'
                                value={validForm.values.this}
                                onChange={validForm.handleChange}
                                placeholder="Имя"
                                required/>
                                <span className='label__input-error'>{validForm.errors.name}</span>
                        </label>
                        <label className="form__label"> 
                            <input className={`form__input ${validForm.errors.company && 'form__input-error'}`}
                                type='text' 
                                name='company'
                                id='company' 
                                minLength='2' 
                                maxLength='30'
                                pattern='^[A-Za-zА-Яа-яЁё\s\-]{2,30}$'
                                
                                value={validForm.values.this}
                                onChange={validForm.handleChange}
                                placeholder="Компания"
                                title='поле может содержать только латиницу, кириллицу, пробел или дефис'
                                required/>
                                <span className='label__input-error'>{validForm.errors.company}</span>
                        </label>
                        <label className="form__label"> 
{/*                             <input className={`form__input ${validForm.errors.tel && 'form__input-error'}`}
                                type='text' 
                                name='tel'
                                id='tel' 
                                pattern="7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}"
                                title='поле может содержать только числа'
                                minLength='12' 
                                maxLength='12'
                                
                                value={validForm.values.this}
                                onChange={validForm.handleChange}
                                placeholder="+7 (999) 999-99-99"
                                required/> */}
                                <PhoneInput
                                    type='text' 
                                    name='tel'
                                    id='tel' 
                                    title='поле может содержать только числа'
                                    maxLength='17'
                                    className={`form__input ${validForm.errors.tel && 'form__input-error'}`}
                                    defaultCountry="RU"
                                    placeholder="(999) 999-99-99"
                                    required
                                    value={value}
                                    onChange={setValue}/>
                                <span className='label__input-error'>{validForm.errors.tel}</span>
                        </label>
                        <label className="form__label"> 
                            <input className={`form__input ${validForm.errors.email && 'form__input-error'}`}
                                type='email' 
                                name='email'
                                id='email' 
                                minLength='6' 
                                maxLength='40'
                                pattern='^[^@\s]+@[^@\s]+\.[^@\s]+$'
                                value={validForm.values.this}
                                onChange={validForm.handleChange}
                                placeholder="E-mail"
                                title='поле должно содержать формат электронного адреса' 
                                required/>
                                <span className='label__input-error'>{validForm.errors.email}</span>
                        </label>
                        <label className="form__label form__label--description"> 
                            <input className={`form__input ${validForm.errors.description && 'form__input-error'}`}
                                type='text' 
                                name='description'
                                id='description' 
                                minLength='2' 
                                maxLength='150'
                                pattern='^[A-Za-zА-Яа-яЁё\s\-]{2,150}$'
                                value={validForm.values.this}
                                onChange={validForm.handleChange}
                                placeholder="Краткое описание проекта"
                                title='поле может содержать только латиницу, кириллицу, пробел или дефис'
                                required/>
                                <span className='label__input-error'>{validForm.errors.description}</span>
                        </label>

                    </div>
                    <div className="checkbox">
                        <input className="custom-checkbox" type="checkbox" checked  readOnly id="checkbox" name="checkbox" value="indigo" />
                        <label className="checkbox__text" htmlFor="checkbox">я согласен с                 <NavLink onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} to='/politic'  >политика конфендициальности</NavLink>  </label>
                    </div>
                    <div className="contact_direction">
                        <p className="main__sumbol">+</p>
                        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} type="submit" className={`form__submit ${btnDisable && 'form__submit_disabled'}`}> send</button>
                    </div>        
                        
                    
                </form>
                <div className={deactiveForm ? 'thanks' : 'thanks-none'}>
                    <p className="thanks__text">
                        Спасибо, ваша заявка успешно отправлена
                    </p>
                    <div className="contact_direction">
                        <p className="contact__sumbol">+</p>
                        <NavLink onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="/" className="btn__thanks" >На главную</NavLink>
                    </div>        
                    
                </div>
            </main>
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
                            <NavLink to='/cases' className="menu__link footer__link" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} >/projects</NavLink>
                        </div>
                        <div className="footer__direction ">
                            <p className="contact__sumbol">+</p>
                            <NavLink onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter} to='/contact' className="footer__href" >contact us</NavLink>
                        </div>     

                    </div>
                </div>
        </footer>                        
        </div>
        <Menu setActiveMenu={setActiveMenu} isActiveMenu={isActiveMenu}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></Menu>
        <Cursor isActives={isActive} isActiveTelegram={isActiveTelegram} isActiveInst={isActiveInst}></Cursor> 

        </>
    )
}

export default Form