import React from 'react';
import './Message.css';

export default class Message extends React.Component {
  render() {
    return (
      <div className="messages">
        {this.props.messages.map((message, i) => {
          return (
            <span className="message" key={i}>
              {message.text}
            </span>
          );
        })}
      </div>
    );
  }
}
