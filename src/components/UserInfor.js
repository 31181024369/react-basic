import React, { useState } from "react";

const UserInfor=(props)=>{
    const [name,setName]=useState("");
    const [address,setAddress]=useState('hoi dan it');
    const [age,setAge]=useState("");
    const {handleAddNewUser }=props;
    const handOnchangeName=(event)=>{
        setName(event.target.value);
    }
    const handOnSubmit=(event)=>{
        event.preventDefault();
        handleAddNewUser({
            id:Math.floor(Math.random() * 100),
            name:name,
            age:age
        });
        //console.log(this.state);
    }
    const handOnchangeAge=(event)=>{
        setAge(event.target.value);
    }
    return (
            <div>
                my name is {name} and my age is {age}
                <form onSubmit={(event)=>{handOnSubmit(event)}}>
                    <label>user</label>
                    <input onChange={(event)=>{handOnchangeName(event)}} value={name} type="text"></input>
                    <label>age</label>
                    <input type="text" value={age} onChange={(event)=>{handOnchangeAge(event)}}></input>
                 
                    <button type="submit">submit</button>

                </form>
                {/* <button onMouseOver={this.handOnMoverOver}>hover me</button>
                <button onClick={(event)=>{this.handleClick(event) }}>click me</button> */}
            </div>

    );




}
export default UserInfor;