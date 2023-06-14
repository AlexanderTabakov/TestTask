import React from 'react';

import './AuthBtn.scss';
import Auth from '@components/Auth/Modal.jsx';
import StartPage from '../../pages/StartPage.jsx';

const AuthBtn = ({test}) => {

    return (
        <button className='auth_btn' onClick={test}>Войти</button>
    )
};

export default AuthBtn;
