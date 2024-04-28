import React, { useEffect, useState } from 'react';
import ModelCreateUser from './ModelCreateUser';
import './ManageUser.scss'
import { FcPlus } from "react-icons/fc";
import TableUser from './TableUser';
import { getAllUsers } from '../../../services/apiService';
import ModelUpdateUser from './ModelUpdateUser';

const ManageUser = () => {
    const [showModelCreateUser,setShowModelCreateUser]=useState(false);
    const [showModelUpdateUser,setShowModelUpdateUser]=useState(false);
    const [listUsers,setListUsers]=useState([]);
    const [dataUpdate,setDataUpdate]=useState({});
    useEffect(()=>{
        fetchListUsers();

    },[])
    const fetchListUsers= async()=>{
        let res= await getAllUsers();
        if(res.EC===0){
            setListUsers(res.DT);
        }
    }
    const handleClickBtnUpdate=(user)=>{
        setShowModelUpdateUser(true);
        console.log("data",user);
        setDataUpdate(user);

    }
    const resetUpdateData=()=>{
        setDataUpdate({});
    }
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
                    <TableUser 
                    listUsers={listUsers}
                    handleClickBtnUpdate={handleClickBtnUpdate}
                   
                     ></TableUser>
                    <ModelCreateUser
                    show={showModelCreateUser}
                    setShow={setShowModelCreateUser}
                    fetchListUsers={fetchListUsers}
                    ></ModelCreateUser>

                    <ModelUpdateUser
                    show={showModelUpdateUser}
                    setShow={setShowModelUpdateUser}
                    fetchListUsers={fetchListUsers}
                    dataUpdate={dataUpdate}
                    resetUpdateData={resetUpdateData}
                    ></ModelUpdateUser>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;