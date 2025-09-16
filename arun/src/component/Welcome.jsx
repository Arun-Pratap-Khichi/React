import React, { Component } from "react";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome page</h2>
        <h1>Hello, {this.props.name} you are  {this.props.age} years old</h1>
      </div>
    );
  }
}

export default Welcome;
