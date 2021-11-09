import React from 'react';

class App extends React.Component{

  state={
    username:""
  }

  changeData =(e)=>{
    let val =e.target.name;  //username
    let myvalue=e.target.value //geting value
    this.setState({[val]:myvalue}); //value set on the state
  }
  render(){
    return(
      <div className="App">
        <h1>HEllos {this.state.username}</h1>
        <div>
          <form>
            <div className="form-group" style={{ marginLeft:200 }}>
                <label>Username : </label>
                <br></br>
                  <input type="text" name="username" onChange={this.changeData}></input>
                  <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default App;
