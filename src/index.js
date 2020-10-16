import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Appp from './Appp';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <>
        <BrowserRouter>
            <Appp />
        </BrowserRouter>
    </>,
    document.getElementById('root')
);
