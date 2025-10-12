
// import './App.css';
import Getinputval from './Getinputval';
// import { useState } from 'react';
// import Toggle from './toggle.jsx';
// import MultToggle from './multToggle.jsx';
// import Props1 from './props1.jsx';

// function App() {
//   const[fruit,setFruit]=useState(0);
//   const handleName=()=>{
//     setFruit(fruit+1);
//   }

//   const[love,setLove]=useState("Hiii");

//   // const handleLove = () => {
//   //   setLove(love === "love you" ? "Love You More" : "love you");
//   // };
  
//   return (
//     <>
//     <Toggle/>
//      <h1>Hello Everyone</h1>
//      <h2>{fruit}</h2>
//      <button onClick={handleName}>
//     Click Me
//      </button>
  
//     <h2>{love}</h2>
//      <button onClick={()=>setLove(love === "love you" ? "Love You More" : "love you")}>
//      Click Me
//       </button>
//       {/* handle onclick event without fn */}
//       <br></br>
//       <br></br>
//     <MultToggle/>

//       {/* Props */}
//       <Props1 name={"sanjeevan"} age={20} email="sam@gmail.com"/>
//      </>
//   )
// }

// export default App


//props ,in above code one props send,object send in this code
// import React from 'react'
// import Props1 from './props1';

// const App = () => {
//   let userOBJ={
//       name:"sanjeevan",
//       age:20,
//       email:"sam@gmail.com"
//   }
//   let userOBJ1={
//       name:"sam",
//       age:20,
//       email:"sam@gmail.com"
//   }
//   let userOBJ2={
//       name:"sanjeevan kumar",
//       age:20,
//       email:"sam@gmail.com"
//   }
  
//   return (
//     <div>
//       <Props1 user={userOBJ}/>
//       <Props1 user={userOBJ1}/>
//       <Props1 user={userOBJ2}/>
//     </div>
//   )
// }

// export default App

//props ARRAY

import React from 'react';
// import Props1 from './props1';
// import Cnotrolled from './Cnotrolled';
// import HandleCheckbox from './HandleCheckbox';
// import RadioDropdown from './RadioDropdown';
// import Arrayobject from './Arrayobject';
// import Mapargument from './1mapargument';
// import ClockColor from './ClockColor';
// import NestedLoop from './NestedLoop';
// import UseEffect from './UseEffect';
// import CssInLine1 from './CssInLine1';
// import UseRef from './useRef';
// import PureFn from './PureFn';
// import ObjectUpd from './ObjectUpd';
// import ArrayUpd from './ArrayUpd';
// import UseActionState from './UseActionState';
// import UserId from './UseId';
// import ApiDataFetch from './ApiDataFetch';
// import ApiDataFetch2 from './ApiDataFetch2';


// import AddUserApi from './AddUserApi';
// import { Route, Routes } from 'react-router';
// import UserEdit from './UserEdit';


// import ErrorAleart from './errorAleart';
import UseReducer from './UseReducer';

const App = () => {
  // let array=["sam","elen","mark"];
  return (
    <div>
 {/* <Props1 props={array}/> */}
 {/* <Cnotrolled/> */}
 {/* <Getinputval/> */}
{/* <HandleCheckbox/> */}
{/* <RadioDropdown/> */}
{/* <Arrayobject/> */}
{/* <Mapargument/> */}
{/* <ClockColor/> */}
{/* <NestedLoop/> */}
{/* <UseEffect/> */}
{/* <CssInLine1/> */}
 {/* <UseRef/> */}
{/* <PureFn/> */}
{/* <ObjectUpd/> */}
{/* <ArrayUpd/> */}
{/* <UseActionState/> */}
{/* <UserId/> */}
{/* <ApiDataFetch/> */}
{/* < ApiDataFetch2/> */}
{/* <AddUserApi/> */}
{/* <Routes>
  <Route path='/edit/:id' element={<UserEdit/>}/>
  <Route path='/' element={<AddUserApi/>}/>
</Routes> */}

{/* <ErrorAleart/> */}
<UseReducer/>
    </div>
  )
}

export default App

