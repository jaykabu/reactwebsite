import React from "react";
import {useHistory} from 'react-router-dom';

const Fpassword = () => {

    const history = useHistory();

    return (
        <>
            <div>
                <div className={'container fpass'}>
                    <h1>Success! Your Password has been changed!</h1>
                    <button onClick={()=> history.push('/')}>Go To HomePage.</button>
                </div>
            </div>
        </>
    )
};

export default Fpassword;