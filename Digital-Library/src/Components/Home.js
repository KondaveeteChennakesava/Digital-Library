import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="register">
                <Link className='link' to='/register'><strong>Register</strong></Link>
            </div>
            <div className="login">
                <Link className='link' to='/login'><strong>Login</strong></Link>
            </div>
        </>
    );
};
export default Home;