import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate();
    const [formdata, setFormdata] = useState({
        'user': '',
        'email': '',
        'password': ''
    })
    let [credentials, setCred] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/getcred').then((response) => {
            setCred(response.data.creddata); // output of the frontend data
        })
    }, []);
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
            let flag = 0;
            credentials.map((ele, index, arr) => {
                return (
                    <>
                        {(() => {
                            if (ele.email === formdata.email) {
                                toast.warning('Already Registered !', {
                                    position: toast.POSITION.TOP_RIGHT
                                });
                                flag = 1;
                            }
                        })()}
                    </>
                )
            })

            if (!flag) {
                axios.post('http://localhost:5000/register', { formdata })
                    .then((res) => console.log(res.data))
                
                toast.success('Registered Succesful !', {
                    position: toast.POSITION.TOP_RIGHT
                });
                setTimeout(() => {
                    navigate('/login');
                }, 6000)
            }
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
                        <input type="email" name="email" onChange={(e) => setFormdata({ ...formdata, email: e.target.value })} />
                        <label>Email</label>
                    </div>
                    <div className="text_field">
                        <input type="password" name="password" autoComplete="current-password" onChange={(e) => setFormdata({ ...formdata, password: e.target.value })} />
                        <label>Password</label>
                    </div>
                    <input type="submit" value="submit" />
                    <div className="signup_link">
                        Already Have an Account<Link to='/' className="link"><strong>LOGIN</strong></Link>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    );
}
export default Register;