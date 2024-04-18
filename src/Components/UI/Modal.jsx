import React from 'react'
import { useRef,useEffect} from 'react'

import { createPortal } from 'react-dom'

function Modal({open,children,onClose ,classname=''}) {
    const dialog = useRef()
    useEffect(()=>{
      const dummyref= dialog.current;
        if(open){
          dummyref.showModal();
        }
        return ()=>dummyref.close();

    },[open])
  return createPortal (
    <dialog ref={dialog} className={`modal${classname}`} onClose={onClose}>
      {children}
    </dialog>,document.getElementById('modal')
  )
}

export default Modal
