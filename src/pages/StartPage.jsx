import React, { useState } from 'react';
import AuthBtn from '../components/AuthBtn/AuthBtn.jsx';
import Modal from '@components/Auth/Modal';

const StartPage = () => {

    const [modalActive, setModalActive] = useState(true)

    return (
        <div>
            <main>
                <AuthBtn test={setModalActive}/>
            </main>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>

    );
};

export default StartPage;
