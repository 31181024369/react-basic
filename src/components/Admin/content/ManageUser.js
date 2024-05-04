import React, { useEffect, useState } from 'react';
import ModelCreateUser from './ModelCreateUser';
import './ManageUser.scss'
import { FcPlus } from "react-icons/fc";
import TableUser from './TableUser';
import { getAllUsers,getUserWithPaginate } from '../../../services/apiService';
import ModelUpdateUser from './ModelUpdateUser';
import ModelDeleteUser from './ModelDeleteUser';
import TableUserPaginate from './TableUserPaginate';

const ManageUser = () => {
    const LIMIT_USER=6;
    const [currentPage,setCurrentPage]=useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [showModelCreateUser,setShowModelCreateUser]=useState(false);
    const [showModelUpdateUser,setShowModelUpdateUser]=useState(false);
    const [showModelDeleteUser,setShowModelDeleteUser]=useState(false);
    const [listUsers,setListUsers]=useState([]);
    const [dataUpdate,setDataUpdate]=useState({});
    const [dataDelete,setDataDelete]=useState({});
    useEffect(()=>{
        // fetchListUsers();
        fetchListUsersWithPaginate(1);

    },[])
    const fetchListUsers= async()=>{
        let res= await getAllUsers();
        if(res.EC===0){
            setListUsers(res.DT);
        }
    }

    const fetchListUsersWithPaginate= async(page)=>{
        let res= await getUserWithPaginate(page,LIMIT_USER);
        if(res.EC===0){
            setListUsers(res.DT.users);
            setPageCount(res.DT.totalPages);
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
    const handleClickBtnDelete=(user)=>{
        setShowModelDeleteUser(true);
        setDataDelete(user);
        console.log(user);
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
                    {/* <TableUser 
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnDelete={handleClickBtnDelete}
                   
                     ></TableUser> */}
                     <TableUserPaginate
                      listUsers={listUsers}
                      handleClickBtnUpdate={handleClickBtnUpdate}
                      handleClickBtnDelete={handleClickBtnDelete}
                      fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                      pageCount={pageCount}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                     >

                     </TableUserPaginate>
                    <ModelCreateUser
                        show={showModelCreateUser}
                        setShow={setShowModelCreateUser}
                        fetchListUsers={fetchListUsers}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    ></ModelCreateUser>

                    <ModelUpdateUser
                        show={showModelUpdateUser}
                        setShow={setShowModelUpdateUser}
                        fetchListUsers={fetchListUsers}
                        dataUpdate={dataUpdate}
                        resetUpdateData={resetUpdateData}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        fetchListUsersWithPaginate={fetchListUsersWithPaginate}

                    ></ModelUpdateUser>

                    < ModelDeleteUser
                        show={showModelDeleteUser}
                        setShow={setShowModelDeleteUser}
                        dataDelete={dataDelete}
                        fetchListUsers={fetchListUsers}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                       
                    ></ModelDeleteUser>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;