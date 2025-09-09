import React from 'react'

const Myform = () => {
    function handlesubmit(e)
     {
        e.preventDefault();
        alert("Form submitted");
     }
  return (
    <div>
      <form onSubmit={handlesubmit}><button>Submit</button></form>
    </div>
  )
}

export default Myform;
