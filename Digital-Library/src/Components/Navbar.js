import React from 'react'
// import Logout from './Logout'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        toast.success('Logout Successful!', {
            position: toast.POSITION.TOP_RIGHT
        });
        setTimeout(() => {
            navigate('/login');
        }, 6000)
    }
    return (
        <>
            <nav style={{backgroundColor:'#f4f9fd'}}>
                <div className="heading">
                    <h1  style={{float:'left'}}>Digital-Library</h1>
                </div>
                <div className="logout">
                    <input style={{float:'right'}} type="logout" value="Logout" onClick={handleLogout} />
                </div>
            </nav>
            <ToastContainer />
        </>
    )
}

export default Navbar
