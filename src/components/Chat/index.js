import React from 'react';
import Message from '../Message';
import './Chat.css';

// Нужно собрать упрощеную модель окна мессанджера. [Пример](https://awesome-stonebraker-fa2b72.netlify.com/).

// Для того, что бы обрабатывать изменения инпута, нужно использовать метод`onChange`.
// 1. Для того, что бы обработать нажатие кнопки Enter,
// нужно использовать метод `onKeyPress`, а в хендлере делать проверку`if (event.key === 'Enter')`.
// 1. Значение инпута должно быть равно значению из стейта —
// `<input value={this.state.messageInput} />`

// При нажатии Enter в input, значение в state.messages станет содержать
// [{ text: значение_из_messageInput }], а state.messageInput станет пустой строкой ""

class Chat extends React.Component {
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = e => {
    this.setState({ messageInput: e.target.value });
    // console.log(e.target.value);
  };
  sendMessageOnEnter = e => {
    if (e.key === 'Enter') {
      this.setState({
        // messages: [...this.state.messages, this.state.messageInput]
        messages: [...this.state.messages, { text: this.state.messageInput }],
        messageInput: ''
      });
      console.log(this.state.messages);
    }
  };

  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <Message messages={this.state.messages} />
        </div>
        <input
          className="input-message"
          type="text"
          value={this.state.messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}

export default Chat;
