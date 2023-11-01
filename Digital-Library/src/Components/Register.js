import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [formdata, setFormdata] = useState({
        'user': '',
        'email': '',
        'password': ''
    })
    const handlesubmit = (e) => {
        e.preventDefault();
        if (formdata.user === '') {
            toast.error('Please fill the user name !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (formdata.email === '') {
            toast.error('Please fill the mail !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (formdata.password === '') {
            toast.error('Please fill the password !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            console.log(formdata)
            axios.post('http://localhost:5000/register', { formdata })
                .then((res) => console.log(res.data))
                // const showToastMessage = () => {
                    toast.success('Registered Succesful !', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                // };
                // showToastMessage()
                setTimeout(()=>{
                    window.location.reload();
                },6000)
            // Navigate(<Login />)
        }
    }
    return (
        <>
        <div className="center">
            <h1>Register</h1>
            <form onSubmit={handlesubmit}>
                <div className="text_field">
                    <input type="text" autoComplete="off" name="user" onChange={(e) => setFormdata({ ...formdata, user: e.target.value })} />
                    <label>Name</label>
                </div>
                <div className="text_field">
                    <input type="email" autoComplete="off" name="email" onChange={(e) => setFormdata({ ...formdata, email: e.target.value })} />
                    <label>Email</label>
                </div>
                <div className="text_field">
                    <input type="password" name="password" onChange={(e) => setFormdata({ ...formdata, password: e.target.value })} />
                    <label>Password</label>
                </div>
                <input type="submit" value="submit" />
                <div className="signup_link">
                    Already Have an Account<Link to='/login' className="link"><strong>LOGIN</strong></Link>
                </div>
            </form>
        </div>
        <ToastContainer />
        </>
    );
}
export default Register;