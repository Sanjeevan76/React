import React, { useEffect } from 'react'
import UseEffect from './UseEffect';

const UseEffect2 = ({props}) => {

   
    
        function propFunction(){
            console.log("prop call")
        }
          useEffect(()=>{
            propFunction()
        },[props])
 
  return (
    <div>
  <p>prop value {props}</p>
    
    </div>
  )
}

export default UseEffect2
