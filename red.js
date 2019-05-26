import React from 'react';
// import logo from './logo.svg';
import './App.css';



class Red extends React.Component {
  render() {
  // var helloWorld = 'Welcome to the Road to learn React';
  return (
  <div className="App">
    <div className='redbox' onClick={()=>alert("Red box")}> Red</div>
  </div>
  );
  }
  }

  export default Red