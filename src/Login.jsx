import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import logo from './images/logo.jpg'


const Login = () => {

    const [value , setValue] = useState({
        email:'',
        password:''
    })

    const inputEvent = (event)=>{

        const {name , value} = event.target

        setValue((oldata)=>{
            return {
                ...oldata,
                [name]:value
            }
        })
    }

    const inputSubmit = (e)=>{
        e.preventDefault();


    }

    return (
        <>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form" onClick={inputSubmit}>
					<span className="login100-form-logo">
                        <i className="zmdi zmdi-landscape" ></i>
					</span>

                            <span className="login100-form-title p-b-34 p-t-27">
						Log in
					</span>

                            <div className="wrap-input100 validate-input" data-validate="Enter username">
                                <input className="input100" type="email"  placeholder="Email"
                                       autoComplete={'off'} name={'email'} value={value.email} onChange={inputEvent}/>
                                {/*<span className="focus-input100" data-placeholder="&#xf207;"></span>*/}
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <input className="input100" type="password"  placeholder="Password"
                                       name={'password'} value={value.password} onChange={inputEvent}
                                />
                                {/*<span className="focus-input100" data-placeholder="&#xf191;"></span>*/}
                            </div>

                            {/*<div className="contact100-form-checkbox">*/}
                            {/*    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />*/}
                            {/*        <label className="label-checkbox100" htmlFor="ckb1">*/}
                            {/*            Remember me*/}
                            {/*        </label>*/}
                            {/*</div>*/} <br/>
                            <br/>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Login
                                </button>
                            </div>

                            <div className="text-center p-t-90">
                                <NavLink className="txt1" to={'/forget'}>
                                    Forgot Password?
                                </NavLink>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;