import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './component/Welcome'
import Counter from './component/Counter'
import Display from './component/Display'
import ClickHand from './component/ClickHand'
import EventBind from './component/EventBind'

  

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Arun Pratap Khichi</h1>
       <EventBind/>
     
      {/* <ClickHand/> */}
    {/* <Welcome name="Arun" age="22"/>
    <h1>Lifting state up Example </h1>
    <Counter count={count} setCount={setCount}/>
    <Display count={count}/> */}


     
    
      </div>
     
     
    </>
  )
}

export default App
