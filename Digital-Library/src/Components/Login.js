import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const [formdata, setFormdata] = useState({
        'email': '',
        'password': ''
    })
    let [credentials, setCred] = useState([]) // let data = []
    useEffect(() => {
        axios.get('http://localhost:5000/getcred').then((response) => {
            setCred(response.data.creddata); // output of the frontend data
        })
    }, []);
    const handlesubmit = (e) => {
        e.preventDefault();
        if (formdata.email === '') {
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
            // console.log(credentials)
            // console.log(formdata)
            let flag = 0;
            credentials.map((ele, index, arr) => {
                return (
                    <>
                        {(() => {
                            if (ele.email === formdata.email && ele.password === formdata.password) {
                                // console.log(true)
                                flag = 1;
                                navigate('/main', { user: ele.user });
                            }
                        })()}
                        {(() => {
                            if (flag === 0){
                                toast.error('Invalid Details !', {
                                    position: toast.POSITION.TOP_RIGHT
                                });
                                flag = 1;
                            }
                        })()}
                    </>
                )
            })
        }
    }
    return (
        <>
        <div className='center'>
            <h1>Login</h1>
            <form onSubmit={handlesubmit}>
                <div className="text_field">
                    <input type="email" autoComplete="off" name="email" onChange={(e) => setFormdata({ ...formdata, email: e.target.value })} />
                    <span></span>
                    <label>Email</label>
                </div>
                <div className="text_field">
                    <input type="password" autoComplete="off" name="password" onChange={(e) => setFormdata({ ...formdata, password: e.target.value })} />
                    <span></span>
                    <label>Password</label>
                </div>
                <input type="submit" value="Login"/>

                <div className="signup_link">
                    Not a member<Link to='/' className="link"><strong>REGISTER</strong></Link>
                </div>
            </form>

        </div>
        <ToastContainer />
        </>
    );
}
export default Login;