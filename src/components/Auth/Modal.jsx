import React, { useState } from 'react';

import './Modal.scss';

const ModalTest = ({active, setActive, children}) => {
    const togglePopup = () => setActive((prevToggle) => !prevToggle)

    return (
        <div className={active ? 'auth active' : 'auth'} onClick={() => setActive(false)}>
            <div className='auth__content' onClick={ e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
};

export default ModalTest;


