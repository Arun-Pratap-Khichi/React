import './App.css'
// import Myform from './component/Myform'
// import SyntheticEventExample from './component/SyntheticEventExample'
import Welcome from './component/Welcome'
//import Display from './component/Display'
// import ClickHand from './component/ClickHand'
// import EventBind from './component/EventBind'
// import Ifelse from './component/Ifelse';
// import MapFruit from './component/MapFruit';
import Counter from './component/Counter'
import Home from './component/Home'
import {Link,Route,Routes} from 'react-router-dom';
  

function App() {
//  const [count, setCount] = useState(0)

  return (
    <>
     
    <nav>
        <Link to="/Home">Home</Link> 
        <br/>
        <Link to="/counter">Counter</Link>
        <NavLink to='/Welcome'>Welcome</NavLink>
    </nav>
     

 <h1>Arun Pratap Khichi</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
    



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
