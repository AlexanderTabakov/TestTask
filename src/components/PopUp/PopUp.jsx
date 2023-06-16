import React, { useState } from 'react';
import './PopUp.scss';

const Popup = ({ openTitle, children }) => {
   const [toggle, setToggle] = useState(false);

   const togglePopup = () => setToggle((prevToggle) => !prevToggle);
   return (
      <>
         <div onClick={togglePopup}>{openTitle}</div>
         {toggle && (
            <div className="popup">
               <div className="popup_content">
                  {children}
                  <button className="close-icon" onClick={togglePopup }>
              +
                  </button>
               </div>
            </div>
         )}
      </>
   );
};

export default Popup;
