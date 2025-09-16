import React, { useContext } from 'react'
import { UserContext } from '../App';



const Contexts = () => {
const user = useContext(UserContext);

  return (
    <div>
      <h2>Hello, {user} 👋</h2>
    </div>
  )
}

export default Contexts
