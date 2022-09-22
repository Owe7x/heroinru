import React, {useEffect, useState} from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor({isActives, isActiveInst , isActiveTelegram}) {
    const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })


    useEffect(() => {
        const moveCursor = (e) => {
            const x = e.clientX - (isActives ? 50 : 25)
            const y = e.clientY - (isActives ? 50 : 25)
            setCursorXY({ x, y })
          }
    
        window.addEventListener("mousemove", moveCursor);
    
        return () => {
          window.removeEventListener("mousemove", moveCursor);
        };
      }, [isActives]);

  return (

    <div className={isActives ? `cursor cursor-active ${isActiveInst ? 'cursor-active--inst ': '' ||  isActiveTelegram ? 'cursor-active--telegram' : ''} ` : 'cursor '} style={{ transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)` } }>
    </div>
  );
}