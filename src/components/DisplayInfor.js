import React from 'react';
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisPlayInfor extends React.Component {
    state={
        isShowListUser:true
    };
    handleShowHide=()=>{
        console.log('111');
        this.setState({
            isShowListUser: !this.state.isShowListUser
        });
    }
    render() {
        const { listUsers}=this.props;
        return (
            <div className='display-info-container'>
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={()=>{this.handleShowHide()}}>
                        { this.state.isShowListUser===true ? "Hide list user":"show list user"}
                    </span>
                </div>
                <div>
                    {this.state.isShowListUser && listUsers.map((user,index)=>{
                        return (
                        <div key={user.id} className={+user.age > 18 ? "green":"red"}>
                            <div>
                                <div>my name's {user.name}</div>
                                <div>age name's {user.age}</div>
                            </div>
                            <div>
                                <button onClick={()=>{this.props.handleDeleteUser(user.id)} }>Delete</button>
                            </div>
                        </div>
                        )
                    })}
                </div>

            </div>
           
           
        );

    }

}
export default DisPlayInfor;