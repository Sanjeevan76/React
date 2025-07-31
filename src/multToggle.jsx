import { useState } from "react"


const MultToggle=()=>{
    const [toggle,setToggle]=useState(0);
    return(
        <>
        <button onClick={()=>setToggle(toggle+1)}>condition toggle</button>
       {
         toggle==0?"condition 0":
         toggle==1?"condition 1":
         toggle==2?"condition 2":
         toggle==3?"condition 3":
         toggle==4?"condition 4":
         toggle==5?"condition 5":<h1>limit exceed</h1>
       }
        </>
    )
}

export default MultToggle