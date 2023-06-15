import React, { useState } from 'react';
import ModalTest from '@components/Auth/Modal.jsx';
import Modal from 'react-modal';
import Popup from '@components/PopUp/PopUp.jsx';
import AuthBtn from '../components/AuthBtn/AuthBtn.jsx';

const StartPage = () => {
   const [modalActive, setModalActive] = useState(true);

   return (
      <div>
         <main>
            <AuthBtn clickHandler={() => setModalActive(true)} text={'ENTER THE MATRIX'}/>

         </main>
         <ModalTest active={modalActive} setActive={setModalActive}>
            <div className={'title'}>
               <h1>WEB<span style={{ fontWeight: 'normal' }}> App </span></h1>
               <button onClick={()=> setModalActive(false)}>+</button>
            </div>

             <h2>Войдите в свой профиль</h2>

            <div className={'form'}>
               <span>Логин</span>
               <input type="text" placeholder={'Логин'}/>
            </div>

            <div className={'form'}>
               <span>Пароль</span>
               <input type="text" placeholder={'Пароль'}/></div>

             <button className={'submitBtn'}>Войти</button>

            <div className='forgotten'>
               <Popup openTitle={'Я забыл пароль'} children={
                  <div>Как можно было забыть пароль 1234?</div>
               }/>
               <Popup openTitle={'Регистрация'} children={
                  <div>Впервые тут? Рады тебя видеть!</div>
               }/>
            </div>

             <p>Написать в поддержку</p>

         </ModalTest>
      </div>

   );
};

export default StartPage;
