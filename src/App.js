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

  formSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.username);
  }
  render(){
    return(
      <div className="App">
        <h1>Hello</h1>
        <div>
          <form onSubmit={this.formSubmit}>
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
