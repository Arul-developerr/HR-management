import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {ReducedMotionConfig} from '@animate-ui/react/utils/motion';
import App from './App';
import './styles.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter><ReducedMotionConfig><App/></ReducedMotionConfig></BrowserRouter></React.StrictMode>);
