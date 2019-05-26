import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Blue from './blue';
import Green from './green';
import Red from './red';
import Orange from './orange';




class App extends React.Component {
  render() {
  // var helloWorld = 'Welcome to the Road to learn React';
  return (
  <div className="App">
  <Blue/>
  <Green/>
  <Red/>
  <Orange/>

  </div>
  );
  }
  }

// function App() {
//   return (
//     <div className="App">
//       <div className='bluebox' onClick={()=>alert("sadasd")}>Blue</div>
//       <div className='greenbox'>Green</div>
//       <div className='orangebox'>Orange</div>
//       <div className='redbox'>Red</div>
//       {/* <div className='redbox'>Red</div> */}


//     </div>
//   );
// }

export default App;
