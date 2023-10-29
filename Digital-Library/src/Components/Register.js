import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
    const [formdata, setFormdata] = useState({
        'user': '',
        'email': '',
        'password': ''
    })
    const handlesubmit = (e) => {
        e.preventDefault();
        if (formdata.user === '') {
            alert('Please fill the user name')
        }
        else if (formdata.email === '') {
            alert('Please fill the mail')
        }
        else if (formdata.password === '') {
            alert('Please fill the password')
        }
        else {
            console.log(formdata)
            axios.post('http://localhost:5000/register', { formdata })
                .then((res) => console.log(res.data))
            // Navigate(<Login />)
        }
    }
    return (
        <div className="center">
            <h1>Register</h1>
            <form onSubmit={handlesubmit}>
                <div className="text_field">
                    <input type="text" name="user" onChange={(e) => setFormdata({ ...formdata, user: e.target.value })} />
                    <label>Name</label>
                </div>
                <div className="text_field">
                    <input type="email" name="email" onChange={(e) => setFormdata({ ...formdata, email: e.target.value })} />
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
    );
}
export default Register;