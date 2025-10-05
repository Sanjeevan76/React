import React from 'react'
let data=0;
const PureFn = () => {
  return (
    <div>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  )
}

const Counter=()=>{
    data=data+1;
   return <h1>Counter {data}</h1> 
}
export default PureFn
