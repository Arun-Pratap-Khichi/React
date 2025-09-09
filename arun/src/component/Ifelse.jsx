import React from "react";

const IfElseExample = ({ isLoggedIn }) => {
 return (
    <div>
        {isLoggedIn ? <h1>Hi user</h1> : <h1>Please Sign in</h1>}
    </div>
 )
};

export default IfElseExample;
