import React from 'react';

class EventBind extends React.Component {
  constructor() {
    super();
    this.state = { name: "Arun" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("Hello " + this.state.name);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Greet</button>
    );
  }
}

export default EventBind;
