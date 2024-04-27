import React from 'react';
import ModelCreateUser from './ModelCreateUser';
import './ManageUser.scss'


const ManageUser = () => {
    return (
        <div className="manage-user-container">
            <div className='title'>
                Manage user
            </div>
            <div className='users-content'>
                <div>
                    <button>Add new users</button>
                </div>
                <div>
                    table users
                    <ModelCreateUser></ModelCreateUser>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;