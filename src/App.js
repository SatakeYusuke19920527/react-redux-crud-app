import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

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
      name:"satake",
      age:17,
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
};


Cat.defaultProps = {
  name: 'defaultName',
  age: 1
};


Cat.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};

export default App;
