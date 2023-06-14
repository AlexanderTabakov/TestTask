import React from 'react';

import './Modal.scss';

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? 'auth active' : 'auth'} onClick={() => setActive(false)}>
            <div className='auth__content' onClick={ e => e.stopPropagation()}></div>
        </div>
    )
};

export default Modal;
