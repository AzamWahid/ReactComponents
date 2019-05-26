import React from 'react';
// import logo from './logo.svg';
import './App.css';



class Blue extends React.Component {
  render() {
  // var helloWorld = 'Welcome to the Road to learn React';
  return (
  <div className="App">
   <div className='bluebox' onClick={()=>alert("BlueBox")}>Blue</div>
  </div>
  );
  }
  }

  export default Blue