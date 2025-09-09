import React from "react";

function SyntheticEventExample() {
  function handleClick(event) {
    console.log("React Synthetic Event:", event);   // SyntheticEvent
    console.log("Native Event:", event.nativeEvent); // Original browser event
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default SyntheticEventExample;
