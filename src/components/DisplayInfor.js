import React from 'react';
import './DisplayInfor.scss';
import logo from './../logo.svg';

const DisPlayInfor=(props)=>{

    const { listUsers, handleDeleteUser}=props;
    return (
        <div className='display-info-container'>
                        
            <div>
                {true && listUsers.map((user,index)=>{
                    return (
                            <div key={user.id} className={+user.age > 18 ? "green":"red"}>
                                <div>
                                    <div>my name's {user.name}</div>
                                    <div>age name's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={()=>{handleDeleteUser(user.id)} }>Delete</button>
                                </div>
                            </div>
                            )
                })}
            </div>
        
        </div>
    );
        

}
export default DisPlayInfor;