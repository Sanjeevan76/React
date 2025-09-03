import React, { useState } from 'react';
import Clock from './Clock';

const ClockColor = () => {
    const [color,setcolor]=useState("pink");
  return (
    <div>
        <h1>Pick Your Color</h1>
      <select onChange={(event)=>setcolor(event.target.value)} style={{padding:"8px",borderRadius:"20%",color:"white",backgroundColor:color}}>
    <option value="pink">pink</option>
    <option value="red">red</option>
    <option value="blue">blue</option>

      </select>
      <Clock design={color}/>
    </div>
  )
}

export default ClockColor
