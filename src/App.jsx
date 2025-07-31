
import './App.css';
import { useState } from 'react';
import Toggle from './toggle.jsx';

function App() {
  const[fruit,setFruit]=useState(0);
  const handleName=()=>{
    setFruit(fruit+1);
  }

  const[love,setLove]=useState("Hiii");

  // const handleLove = () => {
  //   setLove(love === "love you" ? "Love You More" : "love you");
  // };
  
  return (
    <>
    <Toggle/>
     <h1>Hello Everyone</h1>
     <h2>{fruit}</h2>
     <button onClick={handleName}>
    Click Me
     </button>
  
    <h2>{love}</h2>
     <button onClick={()=>setLove(love === "love you" ? "Love You More" : "love you")}>
     Click Me
      </button>
      {/* handle onclick event without fn */}
      
    
     </>
  )
}

export default App
