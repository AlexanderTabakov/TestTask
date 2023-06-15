import React from 'react';

import './AuthBtn.scss';
import Auth from '@components/Auth/Modal.jsx';
import StartPage from '../../pages/StartPage.jsx';

const AuthBtn = ({ clickHandler, text }) => (
   <button className='auth_btn' onClick={clickHandler}>{text}</button>
);

export default AuthBtn;
