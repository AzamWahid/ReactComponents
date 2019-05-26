import React from 'react';
// import logo from './logo.svg';
import './App.css';



class Orange extends React.Component {
  render() {
  // var helloWorld = 'Welcome to the Road to learn React';
  return (
  <div className="App">
    <div className='orangebox' onClick={()=>alert("Orange box")}> Orange</div>
   
  </div>
  );
  }
  }

  export default Orange