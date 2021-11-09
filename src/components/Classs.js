import React,{Component} from "react";
import './Classs.css';

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
        const style={
            backgroundcolor:'orange',
            border:'2px solid moron',
            cursor:'pointer',
        };
        return (
            <div>
                <button style={style} onClick={this.ClickHandler}>Click ME </button>
                <h1 className="Card">babu name is {this.state.fruits[0].name} and weight is {this.state.fruits[0].weight}</h1>
                <h1 className="Card">babu name is {this.state.fruits[1].name} and weight is {this.state.fruits[1].weight}</h1>
                <h1 className="Card">babu name is {this.state.fruits[2].name} and weight is {this.state.fruits[2].weight}</h1>

            </div>
        );
    }
};
export default Learning