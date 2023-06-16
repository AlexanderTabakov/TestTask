import React, { useState } from 'react';
import ModalTest from '@components/Auth/Modal.jsx';
import Modal from 'react-modal';
import Popup from '@components/PopUp/PopUp.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import AuthBtn from '../components/AuthBtn/AuthBtn.jsx';

const StartPage = () => {
   const [modalActive, setModalActive] = useState(false);

   return (
      <div>
         <main>
            <AuthBtn clickHandler={() => setModalActive(true)} text={'ENTER THE MATRIX'}/>

         </main>
         <ModalTest active={modalActive} setActive={setModalActive}>
            <div className={'title text'}>
               <h1>WEB<span style={{ fontWeight: 'normal' }}> App </span></h1>
               <button onClick={() => setModalActive(false)}>+</button>
            </div>

            <h2>Войдите в свой профиль</h2>

            <div className={'form text'}>
               <span>Логин</span>
               <input type="text" placeholder={'Логин'}/>
            </div>

            <div className={'form text'}>
               <span>Пароль</span>
               <input type="text" placeholder={'Пароль'}/></div>

            <button className={'submitBtn text'}>Войти</button>

            <div className='forgotten text'>
               <Popup openTitle={'Я забыл пароль'} children={
                  <div style={{ color: 'black' }}>Как можно было забыть пароль 1234?</div>
               }/>
               <Popup openTitle={'Регистрация text'} children={
                  <div style={{ color: 'black' }}>Впервые тут? Рады тебя видеть!</div>

               }/>
            </div>

            <div className={'writeToSupport text'}>
               <FontAwesomeIcon icon={faEnvelope} bounce />
               <p> Написать в поддержку</p>
            </div>

         </ModalTest>
      </div>

   );
};

export default StartPage;
