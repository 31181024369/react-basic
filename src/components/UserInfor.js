import React from "react";

class UserInfor extends React.Component {
    state={
        name:'longhoang',
        address:'hoi dan it',
        age:23
    };
    handleClick(event){
        console.log(">> click me by button");
        this.setState({
            name:'long dex',
            age:Math.floor((Math.random() * 100) + 1)
        });
      
    }
    handOnMoverOver(event){
        console.log(event.pageX);
    }
    handOnchangeName=(event)=>{
        this.setState({name: event.target.value});
    }
    handOnSubmit=(event)=>{
        event.preventDefault();
        this.props.handleAddNewUser({
            id:Math.floor(Math.random() * 100),
            name:this.state.name,
            age:this.state.age
        });
        //console.log(this.state);
    }
    handOnchangeAge=(event)=>{
        this.setState({age: event.target.value});
    }
    render(){
        return (
            <div>
                my name is {this.state.name} and my age is {this.state.age}
                <form onSubmit={(event)=>{this.handOnSubmit(event)}}>
                    <label>user</label>
                    <input onChange={(event)=>{this.handOnchangeName(event)}} value={this.state.name} type="text"></input>
                    <label>age</label>
                    <input type="text" value={this.state.age} onChange={(event)=>{this.handOnchangeAge(event)}}></input>
                 
                    <button type="submit">submit</button>

                </form>
                {/* <button onMouseOver={this.handOnMoverOver}>hover me</button>
                <button onClick={(event)=>{this.handleClick(event) }}>click me</button> */}
            </div>
        )

    };
}
export default UserInfor;