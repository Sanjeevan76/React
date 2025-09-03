import React, { useEffect, useState } from 'react';
import ClockColor from './ClockColor';

const Clock = ({design}) => {
    const [time,settime]=useState(0);
    useEffect(()=>{
        setInterval(() => {
            settime(new Date().toLocaleTimeString())
        }, 1000);
    },[])
  return (
    <div>
       
      <h1 style={{color:design}}>{time}</h1>
    </div>
  )
}

export default Clock



// import React, { useEffect, useState } from "react";

// const Clock = ({ design, minutes = 5 }) => {
//   // total seconds = minutes * 60
//   const [time, setTime] = useState(minutes * 60);

//   useEffect(() => {
//     if (time <= 0) return; // stop when time reaches 0

//     const timer = setInterval(() => {
//       setTime((prev) => prev - 1); // decrease by 1 sec
//     }, 1000);

//     return () => clearInterval(timer); // cleanup
//   }, [time]);

//   // Convert seconds → mm:ss format
//   const formatTime = (secs) => {
//     const m = Math.floor(secs / 60);
//     const s = secs % 60;
//     return `${m}:${s < 10 ? "0" : ""}${s}`;
//   };

//   return (
//     <div>
//       <h1 style={{ color: design }}>{formatTime(time)}</h1>
//       {time === 0 && <h2>⏰ Time’s Up!</h2>}
//     </div>
//   );
// };

// export default Clock;

