import './App.css';
import {useEffect, useState} from 'react'

function App() {
  const[d,setDate]=useState(new Date().toLocaleTimeString())
    // setInterval(()=>{
    //   setDate(new Date().toLocaleTimeString());
    //   console.log("nikku")
    // },1000)
    
    console.log("nikku")
  return (
    <div className="App">
      <div className="container">
        <span>{d}</span>
      </div>
    </div>
  );
}

export default App;
