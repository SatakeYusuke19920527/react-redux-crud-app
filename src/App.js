import React from 'react'
import './App.css'

const App = () => {
  const profiles = [
    {
      name: "cat",
      age: 10,
    },
    {
      name: "hanako",
      age: 11,
    },
    {
      name: "taro",
      age: 15,
    },
    {
      
      
    }
  ]
  return (
    <div>
      {
        profiles.map((data, index) => {
          return (
            <Cat
              name={data.name}
              age={data.age}
              key={index}
            />
          );
        })
      }
    </div>
  );
}

const Cat = (props) => {
  return (
    <div>
      Meow!
    I am {props.name}. {props.age} years old
    </div>
  );
}

Cat.defaultProps = {
  name:'defaultName',
  age:1
}

export default App;
