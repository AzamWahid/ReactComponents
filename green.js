import React from 'react';
// import logo from './logo.svg';
import './App.css';



class Green extends React.Component {
  render() {
  // var helloWorld = 'Welcome to the Road to learn React';
  return (
  <div className="App">
    <div className='greenbox' onClick={()=>alert("Green box")}> Green</div>
  </div>
  );
  }
  }

  export default Green