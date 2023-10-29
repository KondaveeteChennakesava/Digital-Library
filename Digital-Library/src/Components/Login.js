import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
            alert('Please fill the mail')
        }
        else if (formdata.password === '') {
            alert('Please fill the password')
        }
        else {
            // console.log(credentials)
            // console.log(formdata)
            credentials.map((ele, index, arr) => {
                return (
                    <>
                        {(() => {
                            if (ele.email === formdata.email && ele.password === formdata.password) {
                                // console.log(true)
                                navigate('/main', { user: ele.user });
                            }
                        })()}
                    </>
                )
            })
        }
    }
    return (
        <div className='center'>
            <h1>Login</h1>
            <form onSubmit={handlesubmit}>
                <div className="text_field">
                    <input type="email" name="email" onChange={(e) => setFormdata({ ...formdata, email: e.target.value })} />
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
    );
}
export default Login;