// import React from 'react'   //method 1

// const Props1 = (props) => {
//   console.log(props.name);
//   return (
//     <div>
//       <h1>user{props.name}</h1>
//     </div>
//   )
// }

// export default Props1



//method 2

// import React from 'react'

// const Props1 = ({name,age,email}) => {  //take same name which pass as props and want to access directly use { }
//   console.log({name,age,email});
//   return (
//     <div>
//       <h1>Name:{name}</h1>
//       <h1>Age:{age}</h1>
//       <h1>Email:{email}</h1>
//     </div>
//   )
// }

// export default Props1

//method 2 Object

// import React from 'react'

// const props1 = ({user}) => {
//     console.log(user);
//   return (
//     <div>
//       <hr></hr>
//       <p> user:{user.name}</p>
//       <p> user:{user.age}</p>
//       <p> user:{user.email}</p>
//     </div>
//   )
// }

// export default props1

import React from 'react'

const props1 = ({props}) => {
  console.log(props);
  return (
    <div>
      {/* whole array */}
     <h1>{props}</h1> 
     <h1>{props[0]}</h1>
      {/* access first index of array */}
    </div>
  )
}

export default props1

