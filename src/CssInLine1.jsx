import React, { useState } from 'react'

const CssInLine1 = () => {

    const [cardStyle,setcardStyle]=useState(

        { border:"2px solid #7c7171ff",
           width:"202px",
           margin:"4px",
           boxShadow:"2px 4px 2px 2px #bbaeae96",
           cursor:"pointer"
        }
    )

    const [text,settext]=useState("green")

   const changeCOlor=(bgcolor,textcolor)=>{
        setcardStyle({...cardStyle,backgroundColor:bgcolor})
        settext(textcolor)
    }

    const [wrap,setwrap]=useState("");

    const setwrapstyle=(wraps)=>{
        setwrap(wraps)
        console.log(wraps)
    }

  return (
    
    <>
    <button onClick={()=>changeCOlor('pink','black')}>set color</button>
    <button onClick={()=>changeCOlor('white','green')}>not set color</button>

    <button onClick={()=>setwrapstyle("wrap")}>toggle</button>
    <div style={{display:"flex",flexWrap:wrap}}>
      <div style={cardStyle}>
        <img style={{height:"200px",width:"200px",border:"2px solid black"}} src="https://imgs.search.brave.com/8ylarQ0Xf9DIrDR0ypzj4DPdPWmPmoUhgkhi4SwM8gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE3/OTk4MjY0L3ZlY3Rv/ci9tYWxlLXVzZXIt/aWNvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NFJNaHFJ/WGNKTWNGa1JKUHE2/SzhoN296dVVvWmhQ/d0tuaUVrZTZLWWFf/az0" alt="user image" />
            <h2 style={{padding:"5px",color:text}} >Sanjeevan Kumar</h2> 
            <p style={{padding:"5px",color:text}} >Software Developer</p>
      </div>
      <div style={cardStyle}>
        <img style={{height:"200px",width:"200px",border:"2px solid black"}} src="https://imgs.search.brave.com/8ylarQ0Xf9DIrDR0ypzj4DPdPWmPmoUhgkhi4SwM8gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE3/OTk4MjY0L3ZlY3Rv/ci9tYWxlLXVzZXIt/aWNvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NFJNaHFJ/WGNKTWNGa1JKUHE2/SzhoN296dVVvWmhQ/d0tuaUVrZTZLWWFf/az0" alt="user image" />
            <h2 style={{padding:"5px",color:text}} >Sanjeevan Kumar</h2> 
            <p style={{padding:"5px",color:text}} >Software Developer</p>
      </div>
      <div style={cardStyle}>
        <img style={{height:"200px",width:"200px",border:"2px solid black"}} src="https://imgs.search.brave.com/8ylarQ0Xf9DIrDR0ypzj4DPdPWmPmoUhgkhi4SwM8gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE3/OTk4MjY0L3ZlY3Rv/ci9tYWxlLXVzZXIt/aWNvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NFJNaHFJ/WGNKTWNGa1JKUHE2/SzhoN296dVVvWmhQ/d0tuaUVrZTZLWWFf/az0" alt="user image" />
            <h2 style={{padding:"5px",color:text}} >Sanjeevan Kumar</h2> 
            <p style={{padding:"5px",color:text}} >Software Developer</p>
      </div>
      <div style={cardStyle}>
        <img style={{height:"200px",width:"200px",border:"2px solid black"}} src="https://imgs.search.brave.com/8ylarQ0Xf9DIrDR0ypzj4DPdPWmPmoUhgkhi4SwM8gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE3/OTk4MjY0L3ZlY3Rv/ci9tYWxlLXVzZXIt/aWNvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NFJNaHFJ/WGNKTWNGa1JKUHE2/SzhoN296dVVvWmhQ/d0tuaUVrZTZLWWFf/az0" alt="user image" />
            <h2 style={{padding:"5px",color:text}} >Sanjeevan Kumar</h2> 
            <p style={{padding:"5px",color:text}} >Software Developer</p>
      </div>
      <div style={cardStyle}>
        <img style={{height:"200px",width:"200px",border:"2px solid black"}} src="https://imgs.search.brave.com/8ylarQ0Xf9DIrDR0ypzj4DPdPWmPmoUhgkhi4SwM8gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE3/OTk4MjY0L3ZlY3Rv/ci9tYWxlLXVzZXIt/aWNvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NFJNaHFJ/WGNKTWNGa1JKUHE2/SzhoN296dVVvWmhQ/d0tuaUVrZTZLWWFf/az0" alt="user image" />
            <h2 style={{padding:"5px",color:text}} >Sanjeevan Kumar</h2> 
            <p style={{padding:"5px",color:text}} >Software Developer</p>
      </div>
      <div style={cardStyle}>
        <img style={{height:"200px",width:"200px",border:"2px solid black"}} src="https://imgs.search.brave.com/8ylarQ0Xf9DIrDR0ypzj4DPdPWmPmoUhgkhi4SwM8gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE3/OTk4MjY0L3ZlY3Rv/ci9tYWxlLXVzZXIt/aWNvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NFJNaHFJ/WGNKTWNGa1JKUHE2/SzhoN296dVVvWmhQ/d0tuaUVrZTZLWWFf/az0" alt="user image" />
            <h2 style={{padding:"5px",color:text}} >Sanjeevan Kumar</h2> 
            <p style={{padding:"5px",color:text}} >Software Developer</p>
      </div>
      <div style={cardStyle}>
        <img style={{height:"200px",width:"200px",border:"2px solid black"}} src="https://imgs.search.brave.com/8ylarQ0Xf9DIrDR0ypzj4DPdPWmPmoUhgkhi4SwM8gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE3/OTk4MjY0L3ZlY3Rv/ci9tYWxlLXVzZXIt/aWNvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NFJNaHFJ/WGNKTWNGa1JKUHE2/SzhoN296dVVvWmhQ/d0tuaUVrZTZLWWFf/az0" alt="user image" />
            <h2 style={{padding:"5px",color:text}} >Sanjeevan Kumar</h2> 
            <p style={{padding:"5px",color:text}} >Software Developer</p>
      </div>
      <div style={cardStyle}>
        <img style={{height:"200px",width:"200px",border:"2px solid black"}} src="https://imgs.search.brave.com/8ylarQ0Xf9DIrDR0ypzj4DPdPWmPmoUhgkhi4SwM8gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE3/OTk4MjY0L3ZlY3Rv/ci9tYWxlLXVzZXIt/aWNvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NFJNaHFJ/WGNKTWNGa1JKUHE2/SzhoN296dVVvWmhQ/d0tuaUVrZTZLWWFf/az0" alt="user image" />
            <h2 style={{padding:"5px",color:text}} >Sanjeevan Kumar</h2> 
            <p style={{padding:"5px",color:text}} >Software Developer</p>
      </div>
      <div style={cardStyle}>
        <img style={{height:"200px",width:"200px",border:"2px solid black"}} src="https://imgs.search.brave.com/8ylarQ0Xf9DIrDR0ypzj4DPdPWmPmoUhgkhi4SwM8gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE3/OTk4MjY0L3ZlY3Rv/ci9tYWxlLXVzZXIt/aWNvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NFJNaHFJ/WGNKTWNGa1JKUHE2/SzhoN296dVVvWmhQ/d0tuaUVrZTZLWWFf/az0" alt="user image" />
            <h2 style={{padding:"5px",color:text}} >Sanjeevan Kumar</h2> 
            <p style={{padding:"5px",color:text}} >Software Developer</p>
      </div>
      <div style={cardStyle}>
        <img style={{height:"200px",width:"200px",border:"2px solid black"}} src="https://imgs.search.brave.com/8ylarQ0Xf9DIrDR0ypzj4DPdPWmPmoUhgkhi4SwM8gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE3/OTk4MjY0L3ZlY3Rv/ci9tYWxlLXVzZXIt/aWNvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NFJNaHFJ/WGNKTWNGa1JKUHE2/SzhoN296dVVvWmhQ/d0tuaUVrZTZLWWFf/az0" alt="user image" />
            <h2 style={{padding:"5px",color:text}} >Sanjeevan Kumar</h2> 
            <p style={{padding:"5px",color:text}} >Software Developer</p>
      </div>
      <div style={cardStyle}>
        <img style={{height:"200px",width:"200px",border:"2px solid black"}} src="https://imgs.search.brave.com/8ylarQ0Xf9DIrDR0ypzj4DPdPWmPmoUhgkhi4SwM8gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE3/OTk4MjY0L3ZlY3Rv/ci9tYWxlLXVzZXIt/aWNvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NFJNaHFJ/WGNKTWNGa1JKUHE2/SzhoN296dVVvWmhQ/d0tuaUVrZTZLWWFf/az0" alt="user image" />
            <h2 style={{padding:"5px",color:text}} >Sanjeevan Kumar</h2> 
            <p style={{padding:"5px",color:text}} >Software Developer</p>
      </div>
      <div style={cardStyle}>
        <img style={{height:"200px",width:"200px",border:"2px solid black"}} src="https://imgs.search.brave.com/8ylarQ0Xf9DIrDR0ypzj4DPdPWmPmoUhgkhi4SwM8gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE3/OTk4MjY0L3ZlY3Rv/ci9tYWxlLXVzZXIt/aWNvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NFJNaHFJ/WGNKTWNGa1JKUHE2/SzhoN296dVVvWmhQ/d0tuaUVrZTZLWWFf/az0" alt="user image" />
            <h2 style={{padding:"5px",color:text}} >Sanjeevan Kumar</h2> 
            <p style={{padding:"5px",color:text}} >Software Developer</p>
      </div>

      
    </div>

    </>
  )
}

export default CssInLine1
