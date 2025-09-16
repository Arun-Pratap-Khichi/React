import './App.css'
// import Myform from './component/Myform'
// import SyntheticEventExample from './component/SyntheticEventExample'
//import Display from './component/Display'
// import ClickHand from './component/ClickHand'
// import EventBind from './component/EventBind'
// import Ifelse from './component/Ifelse';
// import MapFruit from './component/MapFruit';
import Counter from './component/Counter'
import Welcome from './component/Welcome'
import Home from './component/Home'
import {Link,Route,Routes} from 'react-router-dom';
import { Navigate ,NavLink} from 'react-router-dom';
import { createContext,useContext,useState } from 'react';
import Contexts from './component/Contexts';
  


export const UserContext = createContext(null);

function App() {
//  const [count, setCount] = useState(0)


 const [user, setUser] = useState("Arun");


  return (
    <>
     
 
      <UserContext.Provider value={user}>
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">Welcome to Context API Example</h1> 
      <Contexts/>
    </UserContext.Provider>
     

 <h1>Arun Pratap Khichi</h1>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Welcome" element={<Welcome />} />
           <Route path="/Counter" element={<Counter />} />
           {/* <Route path='**' element={<notfound/>} /> }
        </Routes> */}


          {/* <nav>
         <Link to="/Welcome">Welcome</Link> 
         <br/>
         <Link to="/Counter">Counter</Link> 
          <br/>
          <NavLink    to="/Home"
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: "none"
          })}>Home</NavLink>
    </nav> */}
        
    



    {/* <MapFruit/> */}
      {/* <Ifelse/> */}
      {/* <Myform/> */}
      {/* <SyntheticEventExample/> */}
       {/* <EventBind/> */}
     
      {/* <ClickHand/> */}
    {/* <Welcome name="Arun" age="22"/>
    <h1>Lifting state up Example </h1> */}
    {/* <Counter/> */}
    {/* <Display count={count}/> */}

 
     
     
    </>
  )
}

export default App
