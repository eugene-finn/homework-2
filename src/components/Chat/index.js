import React, { Component } from 'react';
import "./Chat.css";

class Chat extends React.Component {
  state = { messageInput: '' };

  changeInputMessage = () => {
    this.setState({ messageInput: this.state.messageInput })
  };

  // sendMessageOnEnter = () => { };

  render() {
    return <div className="chat"><input className="input-message" value={this.state.messageInput}></input> </div>
  }
}

export default Chat;



// constructor(props) {
  //   this.super(props);
  //   this.super(props);
  // }
  // state = { messageInput: message };

// changeInputMessage() { }
// sendMessageOnEnter() { }

