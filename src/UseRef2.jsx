import React, { useState, useRef } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const timerId = useRef(null);

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
  };


//    const [tcount, settCount] = useState(0);
//   const prevCount = useRef();

//   useEffect(() => {
//     prevCount.current = tcount;
//   }, [tcount]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>

       {/* <div>
      <p>Now: {tcount}, Before: {prevCount.current}</p>
      <button onClick={() => settCount(tcount + 1)}>Increase</button>
    </div> */}
    </div>
  );
}
 export default Timer;



//  import React, { useState, useEffect, useRef } from "react";

// function Timer() {
//   const [count, setCount] = useState(0);
//   const prevCount = useRef();

//   useEffect(() => {
//     prevCount.current = count;
//   }, [count]);

//   return (
//     <div>
//       <p>Now: {count}, Before: {prevCount.current}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }
// export default Timer