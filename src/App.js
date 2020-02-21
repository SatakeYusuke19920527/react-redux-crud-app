import React, {Component} from 'react'
import './App.css'

class App extends Component {
  render(){
  return(
    <div className="foo">
      <h1>Hello world</h1>
      <label>bar:</label>
      <input
        type="text"
        title="onClick"
        onChange={() => {
        console.log("test");
      }}
      />
    </div>
  )
    }
}

export default App;
