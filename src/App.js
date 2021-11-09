import React from 'react';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <h1>HEllos</h1>
        <div>
          <form>
            <div className="form-group">
                <label>Username : </label>
                <br></br>
                  <input type="text" name="username"></input>
                  <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default App;
