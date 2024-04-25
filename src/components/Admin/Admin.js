import React, { useState } from 'react';
import SideBar from './SideBar';
import './Admin.scss';
import { FaHeart, FaBars } from 'react-icons/fa';
const Admin = () => {
    const [collapsed,setCollapsed]=useState(false);
    return (
        <div className='admin-container'>
            <div className='admin-sidebar'>
                <SideBar collapsed={collapsed}></SideBar>
            </div>
            <div className='admin-content'>
            <FaBars onClick={()=>{setCollapsed(!collapsed)}}></FaBars>admin content
            </div>
        </div>
    );
};

export default Admin;