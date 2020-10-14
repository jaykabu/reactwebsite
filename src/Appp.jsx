import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import About from './About';
import Contact from "./Conatct";
import Service from "./Service";
import Login from "./Login";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Note from "./Note";


const Appp = () => {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/service'} component={Service}/>
                <Route exact path={'/about'} component={About}/>
                <Route exact path={'/login'} component={Login}/>
                <Route exact path={'/note'} component={Note} />
                <Route exact path={'/contact'} component={Contact}/>
                <Redirect to={'/'}/>
            </Switch>
            <Footer/>
        </>
    )
};

export default Appp;