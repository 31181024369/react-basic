import React, { useState } from 'react';
import SideBar from './SideBar';
import './Admin.scss';
import { FaHeart, FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar'
const Admin = () => {
    const [collapsed,setCollapsed]=useState(false);
    return (
        <div className='admin-container'>
            <div className='admin-sidebar'>
                <SideBar collapsed={collapsed}></SideBar>
            </div>
            <div className='admin-content'>
                <div className='admin-header'>
                    <FaBars onClick={()=>{setCollapsed(!collapsed)}}></FaBars>admin content
                </div>
                <div className='admin-mains'>
                    <PerfectScrollbar>
                        <Outlet></Outlet>
                    </PerfectScrollbar>
                </div>
            
            </div>
           
        </div>
    );
};

export default Admin;