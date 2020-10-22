import React, {useState} from 'react';


const Signup = () => {

    const [item, setItem] = useState({
        fname: '',
        lname: '',
        gender: '',
        email: '',
        address: '',
        pass: '',
        nub: ''
    })

    // const [item1 , setItem1] = useState([]);

    const eventInput = (event) => {
        const {name, value} = event.target;

        setItem((oldItem) => {
            return {
                ...oldItem,
                [name]: value
            }
        })
    }

    const inputSubmit = (e) => {
        e.preventDefault();
    //     setItem1(item);
    //
        setItem({
            fname: '',
            lname: '',
            gender: '',
            email: '',
            address: '',
            pass: '',
            nub: ''
        });
        alert('form submitted');
    }


    return (
        <>
            <div>
                <div className={"container-fluid nav_bg"}>
                    <div className={'row'}>
                        <div className={'col-10 mx-auto'}>

                            <div>
                                <h1 className={'text-center mt-2'}>
                                    Sign Up
                                </h1>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">FirstName</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="FirstName" autoComplete={'off'} name={'fname'} value={item.fname}
                                       onChange={eventInput}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">LastName</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="LastName" autoComplete={'off'} name={'lname'} value={item.lname}
                                       onChange={eventInput}/>
                            </div>

                            <div>
                                <label htmlFor="exampleFormControlInput4" className="form-label">Gender</label>
                                <select className="form-select" aria-label="Default select example" name={'gender'}
                                        value={item.gender} onChange={eventInput}>
                                    <option selected>open</option>
                                    <option value={"male"}>male</option>
                                    <option value={"female"}>female</option>
                                    <option value={"other"}>other</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput3" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Email address" autoComplete={'off'} name={'email'}
                                       value={item.email} onChange={eventInput}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Address</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                          placeholder={'Address'}
                                          name={'address'} value={item.address} onChange={eventInput}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput3" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Password" name={'pass'} value={item.pass} onChange={eventInput}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput3" className="form-label">Contact Number</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Contact Number" name={'nub'} value={item.nub}
                                       onChange={eventInput}/>
                            </div>

                            <div>
                                <button style={{textAlign: 'center'}} type="button"
                                        className="btn btn-primary mb-3 mt-3" onClick={inputSubmit}>Submit Form
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            {/*<div className={'text-center'}>*/}
            {/*    <li> firstname : {item1.fname}</li>*/}
            {/*    <li>lastname : {item1.lname}</li>*/}
            {/*    <li>gender : {item1.gender}</li>*/}
            {/*    <li>email : {item1.email}</li>*/}
            {/*    <li>address : {item1.address}</li>*/}
            {/*    <li>password : {item1.pass}</li>*/}
            {/*    <li>number : {item1.nub}</li>*/}
            {/*</div>*/}
        </>
    )
}

export default Signup;