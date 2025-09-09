// import { useEffect } from "react";
import React,{ useState ,useEffect} from "react";


function Counter() {
  const [count, setCount] = useState(0);


  // only one time load on every render 

  // useEffect(() => {
  //   console.log("Component rendered! Count is:", count);
  // });


  // when value of count change  then it loads

  // useEffect(() => {
  //   console.log("Count changed:", count);
  // }, [count]); 
  

  // one time run when component mount and cleanup on unmount

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("Timer running...");
  //   }, 100);
  //   return () => {
  //     clearInterval(interval); // Cleanup
  //     console.log("Timer stopped");
  //   };
  // }, []);

//  const [users, setUsers] = useState([]);
//   useEffect(() => {
//     // API Call
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(data => setUsers(data))
//       .catch(error => console.error("Error fetching users:", error));
//   }, []); // Empty array → सिर्फ 1 बार fetch होगा (mount पर)




  return (
    <>


     <p>Counter Value : {count}</p>
        
    <button onClick={() => setCount(count-1)}>Remove</button>
        <button onClick={()=> setCount(count+1)}>Add</button>
       
<h1>This is counter page</h1>






          {/* <h2>Users List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li> // key = unique id
        ))}
      </ul> */}



    </>
  );
}

export default Counter;
