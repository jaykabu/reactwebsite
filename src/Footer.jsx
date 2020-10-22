import React from "react";

const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <>
            <div className={"container-fluid nav_bg"}>
                <div className={'row'}>
                    <div className={'col-10 mx-auto'}>
                        <footer className={'w-100 bg-light text-center'}>
                            <p> {date} JayKabutarwala. All Right Reserved | Terms And Conditions </p>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Footer;