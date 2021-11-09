import React,{useState} from "react";

const Hook = props => {

 const[fruitState,setFruitState] = useState({
        fruits:[
            {name:'apple',weight:'50gm'},
            {name:'orange',weight:'20gm'},
            {name:'banana',weight:'10gm'}
        ]
    });
   const ClickHandler = () => {
        setFruitState({
            fruits:[
                {name:'ahsan',weight:'20'},
                {name:'habib',weight:'21'},
                {name:'lelin',weight:'22'}
            ]
        })
    }
        return (
            <div>
                <button onClick={ClickHandler}>Change ME </button>
                <h1>babu name is {fruitState.fruits[0].name}</h1>
                <h1>babu name is {fruitState.fruits[1].name}</h1>
                <h1>babu name is {fruitState.fruits[2].name}</h1>

            </div>
        );
        
};
export default Hook



