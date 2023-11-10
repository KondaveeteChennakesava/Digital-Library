import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Logout() {
    const navigate = useNavigate();
    // useEffect(()=>{
    //     localStorage.removeItem('userdata_user');
    //     toast.success('Logout Successful!',{
    //         position: toast.POSITION.TOP_RIGHT
    //     });

    // setTimeout(() => {
    //     navigate('/login');
    // }, 6000)
    // })
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
            <input type="logout" value="Logout" onClick={handleLogout}/>
            <ToastContainer />
        </>
    )
}

export default Logout
