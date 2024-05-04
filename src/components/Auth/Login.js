import React, { useState } from 'react';
import './Login.scss';
import { NavLink,Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { postLogin } from '../../services/apiService';
const Login = (props) => {
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
   
    const handleLogin= async()=>{
        let data= await postLogin(email,password);
        if(data && data.EC===0){
            toast.success(data.EM);
            navigate('/');
        }
        if(data && +data.EC!==0){
            toast.error(data.EM);
        }
    }
    return (
        <div className="login-container">
            <div className='header'>
                <span> Don't have an account yet?   </span>
                <button>Sign up</button>
               
            </div>
            <div className='title col-4 mx-auto'>
                HoiDanIT
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello,who's this?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <lable>Email</lable>
                    <input type="email"
                     className="form-control"
                     value={email}
                     onChange={(event)=>setEmail(event.target.value)}
                     ></input>
                </div>
                <div className='form-group'>
                    <lable>Password</lable>
                    <input type="password"
                     className="form-control"
                     value={password}
                     onChange={(event)=>setPassword(event.target.value)}
                     ></input>
                </div>
                <span>Forget password?</span>
                <div>
                    <button onClick={()=>handleLogin()}>Login to HoiDanIT</button>
                </div>
                <div className=' text-center'>
                    <span className='back' onClick={()=>{ navigate('/')}}>&#60;&#60;Go to Homepage</span>
                </div>
            </div>
        </div>
    );
};

export default Login;