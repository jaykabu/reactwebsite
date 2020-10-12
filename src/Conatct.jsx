import React, {useState} from "react";

const Contact = () => {

    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: ''
    })

    const inputEvent = (event) => {
        const {name, value} = event.target

        setData((oldData) => {
            return {
                ...oldData,
                [name]: value
            }
        })

    }

    const formSubmit = (e) => {
        e.preventDefault()
        // alert(`My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email} , Here is what I went to say ${data.msg }`)
    }

    return (
        <>
            <div className={'my-5'}>
                <h1 className={'text-center'}>Contact US</h1>
            </div>
            <div className={'container contact_div'}>
                <div className={'row'}>
                    <div className={'col-md-6 col-10 mx-auto'}>
                        <form onClick={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">FullName</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                       name={'fullname'} value={data.fullname} onChange={inputEvent}
                                       placeholder="Enter Your FullName" autoComplete={'off'}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1"
                                       name={'phone'} value={data.phone} onChange={inputEvent}
                                       placeholder="Enter Your PhoneNumber"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       name={'email'} value={data.email} onChange={inputEvent}
                                       placeholder="Enter Your Email Address" autoComplete={'off'}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
                                          name={'msg'} value={data.msg} onChange={inputEvent}

                                />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contact;