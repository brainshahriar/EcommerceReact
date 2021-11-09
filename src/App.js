import React from 'react';

class App extends React.Component{

  state={
    name:""
  }

  changeData =(e)=>{
    let val =e.target.value;
    this.setState({name:val})
  }
  render(){
    return(
      <div className="App">
        <h1>HEllos {this.state.name}</h1>
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
