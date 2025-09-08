import React, { useState } from "react";


function Counter({count,setCount}) {
//   const [count, setCount] = useState(0);

  return (
    <div>
        {/* <p>Counter Value : {count}</p> */}
        <button onClick={() => setCount(count>0 ? count-1: 0)}>Remove</button>
        <button onClick={()=> setCount(count+1)}>Add</button>
    </div>
  );
}

export default Counter;
