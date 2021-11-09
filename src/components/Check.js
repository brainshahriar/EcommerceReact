import React,{Component} from "react";

class Check extends Component{


    state={
        name:'babu mia'
    }

    changeName = (e) =>{
        this.setState({
            name:e.target.value
        })
    }
    render(){
        return (
            <div>
                <input type="text" onChange={this.changeName} value={this.state.name}></input>
                <h1>HEllo {this.state.name}</h1>
            </div>
        )
    }
}
export default Check