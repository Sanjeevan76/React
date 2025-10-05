import  { useActionState } from 'react'

export default function UseActionState() {
    const handlesubmit=async(previousdata,formData)=>{
        console.log("submit button click")
        let name=formData.get('name');
        let password=formData.get('password');
        
        await new Promise(res=>setTimeout(res,2000));
        console.log(name,password);
        if(name && password)
        {
            return {message:"you form submited",name,password};
        }else{
            return {error:"enter required filled"};
        }
    }
    const [data,action,pending]=useActionState(handlesubmit,undefined)
    console.log(data) //it will run when line no 11 code written
    console.log(data?.name)
  return (
    <div>
      <form action={action}>
        <input type="text" placeholder='Enter Name' name='name'/><br></br><br></br>
        <input type="password" placeholder='Enter Password' name='password'/><br></br><br></br>
        <button disabled={pending}>Submit</button>
      </form>
      {
        data?.error && <span style={{color:"red"}}>{data.error}</span>
      }
      {
        data?.message && <span style={{color:"green"}}>{data.message}</span>
      }
      <h4>Name:{data?.name}</h4>
      <h4>password:{data?.password}</h4>
    </div>
  )
}
