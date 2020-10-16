import React from "react";
import img from './images/animation-apps-mobile.png'

import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common name={'Grow Your Business With '} imgsrc={img} visit={'/service'} btnname={'Get Started'}/>
        </>
    )
};

export default Home;