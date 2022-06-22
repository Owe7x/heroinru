import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import imgIconBtn from '../images/Main/button-bottom.svg'
import Menu from '../components/menu'
import Cursor from '../components/cursor'
import { useGlobalEvent } from "beautiful-react-hooks";


function Main() {
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
   return (
     <>
      
     <div className="page-main" style={{ height: `${windowHeight}px` } } >
      <header className="header-main">
        <NavLink to="/" className="header-main__path" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter}>[IN]</NavLink>
        <NavLink to='/case' className="header-main__link-works" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter}>our works +</NavLink>
      </header>
      {windowHeight}
      <main className="main">
          <h2 className="main__subtitlte" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter}>digital addiction <br /> marketing <span className="main__subtitlte-right">agency</span>   </h2>
          <h1 className="main__title" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter}>hero[in]marketing</h1>
          <div className="main__trends">
            <img src={imgIconBtn} alt="Button" className="main__trends-img"/>
            <p className="main__trends-text" onMouseLeave={handleMouseLeave}  onMouseOver={handleMouseEnter}>
            We catch  new <br /> marketing trends <br /> match ideas with <br /> people
            </p>
          </div>

      </main>
     </div>
     <Menu onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></Menu>
     <Cursor isActives={isActive}></Cursor>


   </>
   )
};

export default Main;