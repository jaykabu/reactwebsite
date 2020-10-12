import React from "react";

const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <>
            <footer className={'w-100 bg-light text-center'}>
            <p> {date} JayKabutarwala. All Right Reserved | Terms And Conditions </p>
            </footer>
        </>
    )
};
export default Footer;