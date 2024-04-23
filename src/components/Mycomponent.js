import React, { useState } from "react";
import UserInfor from "./UserInfor";
import DisPlayInfor from "./DisplayInfor";


const Mycomponent=()=>{
    const [listUsers,setListUsers]=useState(
        [
            { id:1,name:"John",age:12},
            { id:2,name:"tom",age:13},
            { id:3,name:"tomny",age:24},
        ]
    );
    const handleAddNewUser=(newObj)=>{
        setListUsers([newObj,...listUsers]);
    }
    const handleDeleteUser=(userId)=>{
        let listUserClone=listUsers;
        listUserClone=listUserClone.filter(item=> item.id !==userId );
        setListUsers(listUserClone);
    }
    return (
        <>
            <br></br>
              <UserInfor handleAddNewUser={handleAddNewUser}></UserInfor>
              <hr></hr>
              <DisPlayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser}></DisPlayInfor>

        </>

    );

}
export default Mycomponent;