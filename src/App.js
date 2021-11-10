import React from 'react';

class App extends React.Component{




  render(){

    const names = ['a','b','c','d','e'];
    const items = names.map((item,idx)=>{
      return <li key={idx}>{idx}:{item}</li>
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
