import React, { useEffect, useState } from 'react'
import UseEffect2 from './UseEffect2';

// const UseEffect = () => {

//     const [count,setCount]=useState(0);
//    function Check(){
//         console.log("hello");
//     }
//     Check();
        
//   return (
//     <div>
//       <p>UseEffect Usecase</p>
//       <button onClick={()=>setCount(count+1)}>count_{count}</button>
//     </div>
//   )
// }

// export default UseEffect
 
//upar ke code me agar button click krege to Check har click pe call hota hai ab hum chate hai ki koi function ya koi value tab change ho jab koi specific condition apply ho so usko handle krne ke liye useEffect use kiya jata hai ,jaise niche



const UseEffect = () => { //props from useEffect2
      const [count,setCount]=useState(0);
      const [data,setdata]=useState(0);
        const [prop,setprop]=useState(0);

   function Check(){
        console.log("hello");
    }

    //   useEffect(()=>{ //ab kya hoga ki ye har baar call hoga kuki [] pass kiya hai
    //      Check();
    // },)

    // useEffect(()=>{ //ab kya hoga ki ye ek baar call hoga kuki [] pass kiya hai
    //      Check();
    // },[])

      useEffect(()=>{ //ab kya hoga ki ye tab call hoga jab data ki value change hogi  kuki [data] pass kiya hai. agar count wala button click hoga to check call nhi hoga
         Check();
    },[data])
    //[] me ham ek se zyda bhi condition daal skte hai "props " bhi pass kr skte hai

    // useEffect(()=>{
    //     propFunction()
    // },[prop])

    // function propFunction(){
    //     console.log("propFUnction call")
    // }
   
  return (
    <div>
         <p>UseEffect Usecase</p>
       <button onClick={()=>setCount(count+1)}>count_{count}</button>
       <button onClick={()=>setdata(data+1)}>data_{data}</button>
        <UseEffect2 props={prop} />
       <button onClick={()=>setprop(prop+2)}>prop {prop}</button>
     
    </div>
  )
}

export default UseEffect
