// import React from 'react';

// const Mycomponent = () => {
//     return (
//         <div>
//             My first component
//             {Math.random()}
//         </div>
//     );
// };

// export default Mycomponent;
import React from "react";
import UserInfor from "./UserInfor";
import DisPlayInfor from "./DisplayInfor";

class Mycomponent extends React.Component {
    state={
        listUsers:[
            { id:1,name:"John",age:12},
            { id:2,name:"tom",age:13},
            { id:3,name:"tomny",age:24},
        ]
    }
    handleAddNewUser=(newObj)=>{
        let listUserNew=this.state.listUsers;
        listUserNew.unshift(newObj);
        this.setState({listUsers:listUserNew});
        // this.setState({ listUsers:[newObj,...this.state.listUsers]});

        console.log(">>new obj",newObj);

    }
    handleDeleteUser=(userId)=>{
        let listUserClone=this.state.listUsers;
        listUserClone=listUserClone.filter(item=> item.id !==userId );
        this.setState({listUsers:listUserClone});
      

    }
    render(){
        return (
            <>
            <br></br>
              <UserInfor handleAddNewUser={this.handleAddNewUser}></UserInfor>
              <hr></hr>
              <DisPlayInfor listUsers={this.state.listUsers} handleDeleteUser={this.handleDeleteUser}></DisPlayInfor>

            </>
        )
    }
  
}
export default Mycomponent;