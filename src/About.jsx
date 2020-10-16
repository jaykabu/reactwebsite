import React from "react";
import img1 from './images/how-to-write-a-good-photography-about-me-page.jpg'
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common name={'Welcome To About Page'} imgsrc={img1} visit={'/contact'} btnname={'Contact Now'}/>
        </>
    )
};

export default About;