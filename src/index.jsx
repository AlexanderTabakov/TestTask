import React from 'react';
import { createRoot } from 'react-dom/client';

import './style.scss';
import AuthBtn from '@components/AuthBtn/AuthBtn';
import StartPage from './pages/StartPage';


const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

const DemoPage = () => (
   <h1 className={'demo'}>React template is loaded</h1>
);

root.render(
   <StartPage/>
);
