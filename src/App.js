import React from 'react';

class App extends React.Component{




  render(){

    const names = [

      {name:'sha',age:20,grade:2.50},
      {name:'riar',age:15,grade:3.50},
      {name:'mehedi',age:12,grade:7.85}

    ];
    const items = names.map((item,idx)=>{
      return <li key={idx}>

        Name:{item.name},Age: {item.age},Grade:{item.grade}
        <button>Edit</button>
        <button>Delete</button>


      </li>
    });

    return(
      <div className="App">
        <h1>Student List</h1>
        <div>
          {items}
        </div>
      </div>
    )
  }
}

export default App;
