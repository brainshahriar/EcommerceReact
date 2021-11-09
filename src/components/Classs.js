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
    // console.log("Hello shahriar");
    // alert('clicked');
    this.setState({
        fruits:[
            {name:'ahsan',weight:'20'},
            {name:'habib',weight:'21'},
            {name:'lelin',weight:'22'}
        ]
    });
};
    render(){
        return (
            <div>
                <button onClick={this.ClickHandler}>Click ME </button>
                <h1>babu name is {this.state.fruits[0].name} and weight is {this.state.fruits[0].weight}</h1>
                <h1>babu name is {this.state.fruits[1].name} and weight is {this.state.fruits[1].weight}</h1>
                <h1>babu name is {this.state.fruits[2].name} and weight is {this.state.fruits[2].weight}</h1>

            </div>
        );
    }
};
export default Learning