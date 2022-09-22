import React, {useState} from "react";
import Cursor from '../components/cursor'
import logo from '../images/Footer/footer-logo.svg'

function Footer() {
    const [isActive, setActive] = useState(false);

    const handleMouseEnter = e => {
      setActive(true)
    }
    const handleMouseLeave = e => {
      setActive(false)
    }
     return (
       <>
        
       <div className="footer" >
           <div className="footer-container">
            <img src={logo} alt="" className="footer__logo" />
                <p className="footer__text">
                    MOSCOW. RUSSIA. WORLDWIDE
                    <br />
                    ALL RIGHTS RESERVED
                </p>
                <div className="footer__contact">
                    <a className="footer__contact-link" href="mailto:giveme@heroinmarketing.com">giveme@heroinmarketing.com</a>
                    <a className="footer__contact-link" href="tel:+74994042756">+7 499 404 27 56</a>
                </div>
           </div>
       </div>
{/*        <Cursor isActives={isActive}></Cursor> */}
  
  
     </>
     )
  };

export default Footer