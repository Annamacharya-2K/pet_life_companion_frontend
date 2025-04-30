import React, { useState } from 'react';
import './adminauth.css';

import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { USER_SIGNUP_URL } from '../URLconstants';

const UserSignUp = () => {
    const history = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [mailid, setmailid] = useState('');
    const [phoneno, setphoneno] = useState('');
    const [btndisabled, setbtnDisabled] = useState(false)

    const onSignUp = async () => {
        setbtnDisabled(true)
        try {
            const response = await axios({
                method: 'post', url: USER_SIGNUP_URL, data: {
                    username: username,
                    password: password,
                    firstname: firstname,
                    lastname: lastname,
                    mailid: mailid,
                    phoneno: phoneno,

                }
            });

            if (response && response.status === 200) {
                toast.success("SignUp Successful");
                history("/userlogin")

            }
            setUsername('')
            setPassword('')
            setfirstname('')
            setlastname('')
            setmailid('')
            setphoneno('')
        }

        catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else if (error.request) {
                toast.error('No response received from the server');
            } else {
                toast.error('Error: ' + error.message);
            }
        }

        setbtnDisabled(false)
    }
    return (
        <div className='bg-color'>
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-sm-4'></div>
                    <div className='col-sm-6'>
                        <div className={`vertical-center border-style signup-page`}>
                            <div className='text-center'>
                                {/* <img src={logo}
                                height="25"
                                width={25} alt="logo" className="mt-2" /> */}
                                <p className='logo-header'>Pet Life Companion</p>
                            </div>
                            <div className='form-group'>
                                <p style={{color:"white"}}>Username</p>
                                <input type='text' placeholder="username" onChange={(e) => setUsername(e.target.value)} className='form-control' value={username} />
                            </div>
                            <div className='form-group'>
                                <p style={{color:"white"}}>Password</p>
                                <input type='password' placeholder="password" onChange={(e) => setPassword(e.target.value)} className='form-control mb-4' value={password} />
                            </div>
                            <div className='form-group'>
                                <p style={{color:"white"}}>firstname</p>
                                <input type='text' placeholder="firstname" onChange={(e) => setfirstname(e.target.value)} className='form-control mb-4' value={firstname} />
                            </div>
                            <div className='form-group'>
                                <p style={{color:"white"}}>lastname</p>
                                <input type='text' placeholder="lastname" onChange={(e) => setlastname(e.target.value)} className='form-control mb-4' value={lastname} />
                            </div>
                            <div className='form-group'>
                                <p style={{color:"white"}}>mailid</p>
                                <input type='mailid' placeholder="mailid" onChange={(e) => setmailid(e.target.value)} className='form-control mb-4' value={mailid} />
                            </div>
                            <div className='form-group'>
                                <p style={{color:"white"}}>phoneno</p>
                                <input type='phoneno' placeholder="phoneno" onChange={(e) => setphoneno(e.target.value)} className='form-control mb-4' value={phoneno} />
                            </div>
                            <div style={{textAlign:'center',marginTop:'20px'}} id='custom-btn-label'>
                            <button className='btn btn-custom btn-lg' type={'submit'}  onClick={() => { onSignUp() }} disabled={btndisabled}>Sign Up</button>
                            </div>
                           
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default UserSignUp;