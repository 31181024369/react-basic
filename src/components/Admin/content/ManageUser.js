import React, { useState } from 'react';
import ModelCreateUser from './ModelCreateUser';
import './ManageUser.scss'
import { FcPlus } from "react-icons/fc";

const ManageUser = () => {
    const [showModelCreateUser,setShowModelCreateUser]=useState(false);
    return (
        <div className="manage-user-container">
            <div className='title'>
                Manage user
            </div>
            <div className='users-content'>
                <div className="btn-add-new">
                    <button 
                    className="btn btn-primary"
                    onClick={()=>{setShowModelCreateUser(true)}}
                    ><FcPlus></FcPlus>Add new users</button>
                </div>
                <div className="table-users-container">
                    table users
                    <ModelCreateUser
                    show={showModelCreateUser}
                    setShow={setShowModelCreateUser}
                    ></ModelCreateUser>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;