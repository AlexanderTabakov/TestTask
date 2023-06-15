import React, { useState } from 'react';
import ModalTest from '@components/Auth/Modal.jsx';
import AuthBtn from '../components/AuthBtn/AuthBtn.jsx';
import Modal from 'react-modal';
import Popup from '@components/PopUp/PopUp';



const StartPage = () => {

    const [modalActive, setModalActive] = useState(false)

    return (
        <div>
            <main>
                <AuthBtn clickHandler={()=> setModalActive(true)} text={'ENTER THE MATRIX'}/>

            </main>
            <ModalTest active={modalActive} setActive={setModalActive}>
                <p>ТЕКСТ</p>
                <input type="text"/>
                <input type="text"/>
                <Popup openTitle={'Я забыл пароль'} children={
                    <div>Как можно было забыть пароль 1234??</div>
                }/>
                <Popup openTitle={'Регистрация'} children={
                    <div>Впервые тут? Рады тебя видеть!</div>
                }/>
            </ModalTest>
        </div>

    );
};

export default StartPage;
