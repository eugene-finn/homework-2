import React, { Component } from 'react';
import Message from "../Message";
import "./Chat.css";


export class Chat extends React.Component {
  state = {
    messageInput: '',
    messages: [],
  };

  changeInputMessage = (event) => {
    // console.log(event.target);

    this.setState({
      messageInput: event.target.value
    })
  };

  sendMessageOnEnter = (event) => {
    // console.log(this.state.messageInput);
    // console.log(event.key);
    // event.preventDefault();

    if (event.key === 'Enter' && this.state.messageInput) {
      this.setState({
        messages: [...this.state.messages, {
          text: this.state.messageInput,
        }

        ], messageInput: ''
      })
    }

  };

  render() {
    return (
      // <p>типа сообщения:{this.state.messageInput}</p>
      <div className="chat">
        <input className="input-message" value={this.state.messageInput} onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter}></input>
        {/* <button onClick={this.sendMessageOnEnter}>Enter</button> */}
        <div className="message-list">
          {this.state.messages.length > 0 ? <div className="messages">{this.state.messages.map(element => <Message text={element.text} />)}</div> : <div>Пусто</div>}
        </div>
      </div>

    );

  }
}
