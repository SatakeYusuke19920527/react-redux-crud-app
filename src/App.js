import React from 'react'
import './App.css'

// class App extends Component {
//   render(){
//   return(
//     <div className="wrapper">
//       <h1>Hello world</h1>
//       <label>bar:</label>
//       <input
//         type="text"
//         title="onClick"
//         onChange={(text) => {
//         console.log(text);
//       }}
//       />
//     </div>
//   )
//     }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
}

const Cat = () => {
  return (
    <div>
      Meow!
    </div>
  );
}

export default App;
