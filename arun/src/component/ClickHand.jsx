import React from 'react'

const ClickHand = () => {

    function clickhandler(){
        alert("Arun is clicked on button");
    }

  return (
    <button onClick={clickhandler}>Click Me</button>
  )
}

export default ClickHand
