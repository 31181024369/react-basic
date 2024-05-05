import React, { useState } from 'react';
import './Register.scss';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { postRegister } from '../../services/apiService';
const Register = () => {
    const navigate = useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [username,setUserName]=useState("");
    const [isShowPassword,setIsShowPassword]=useState(false);
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      const handleRegister= async()=>{
        const isValidEmail=validateEmail(email,password,username);
        if(!isValidEmail){
            toast.error('Invalid email');
            return;
        }
        if(!password){
            toast.error('Invalid password');
            return;
        }
        let data=await postRegister(email,password,username);
        if(data && data.EC===0){
            toast.success(data.EM);
            navigate('/login');
        }
        if(data && data.EC!==0){
            toast.error(data.EM);
        }

      }
    

    return (
        <>
        <div className='contaner-register'>
        <div className='header'>
                <span>Already have an account?</span>
                <button onClick={()=>{navigate('/login')}}>Log in</button>
            </div>
            <div className='title mt-3 col-4 mx-auto text-center'>
                <h2>Hỏi Dân IT & Eric</h2>
                <h4 className=' mt-3'>Start your journey</h4>
            </div>
            <div className='form-register col-4 mx-auto mt-3'>
            <form>
                <div className="form-group mt-3">
                    <label for="">Email(*)</label>
                    <input type="email"
                     class="form-control"
                     value={email}
                     onChange={(event)=>setEmail(event.target.value)}
                       />
                    
                </div>
                <div className="form-group mt-3 pass-group">
                    <label for="">Password(*)</label>
                    <input 
                    type={isShowPassword ? "text" : "password"}
                     class="form-control"
                     value={password}
                     onChange={(event)=>{setPassword(event.target.value)}}
                      />
                      {isShowPassword ? 
                      <span className='icons-eye'
                      onClick={()=>{setIsShowPassword(false)}}
                      ><VscEye /></span> :
                      <span className='icons-eye'
                      onClick={()=>{setIsShowPassword(true)}}
                      ><VscEyeClosed /></span>
                      }
                </div>
                <div className="form-group mt-3">
                    <label for="">Username(*)</label>
                    <input type="text"
                     class="form-control"
                     value={username}
                     onChange={(event)=>{setUserName(event.target.value)}}
                       />
                    
                </div>
                <button 
                 className="btn btn-primary mt-4"
                 onClick={()=>{handleRegister()}}
                  >Submit</button>
                <span onClick={()=>{ navigate('/')}}>&#60;&#60;Go to Homepage</span>
            </form>

            </div>s

        </div>

        </>
    );
};

export default Register;