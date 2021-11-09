import React,{Component} from "react";

class Learning extends Component{

    constructor(props){
        super(props)

        this.state={
            fruits:[
                {name:'apple',weight:'50gm'},
                {name:'orange',weight:'20gm'},
                {name:'banana',weight:'10gm'}
            ]
        };
    };
ClickHandler = () => {
    console.log("Hwllo shahriar");
    alert('clicked');
};
    render(){
        return (
            <div>
                <button onClick={this.ClickHandler}>Click ME </button>
                <h1>babu name is {this.state.fruits[1].name} and weight is {this.state.fruits[2].weight}</h1>
            </div>
        );
    }
};
export default Learning