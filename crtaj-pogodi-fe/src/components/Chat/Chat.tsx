import React, { useEffect, useState } from 'react';
import './Chat.css';
import ChatBubble from '../ChatBubble/ChatBubble';
import { KeyboardEvent } from 'react';

const inputJSON: Array<ChatMessage> = [
  {
    username: 'user 1',
    text: 'hello from 1',
  },
  {
    username: 'user 2',
    text: 'hello from 2',
  },
  {
    username: 'user 1',
    text: 'hello from 1 again',
  },
  {
    username: 'user 3',
    text: 'hello from 3',
  },
  {
    username: 'user ME',
    text: 'hello from ME',
  },
  {
    username: 'user 3',
    text: 'hello from 3',
  },
  {
    username: 'user ME',
    text: 'hello from ME',
  },
  {
    username: 'user 3',
    text: 'hello from 3',
  },
];

type Position = 'left' | 'right';

type ChatMessage = {
  username: string;
  text: string;
};

const Chat = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>(inputJSON);
  const [inputRef, setInputRef] = useState<HTMLInputElement | null>();
  const [contentDivRef, setContentDivRef] = useState<HTMLDivElement | null>();
  const loggedInUser = 'user ME';

  useEffect(() => {
    if (contentDivRef)
      contentDivRef.scrollTop = contentDivRef.scrollHeight
        ? contentDivRef.scrollHeight
        : 0;
  }, [contentDivRef, chatHistory]);

  const chatItems = chatHistory.map((item, index) => {
    const position: Position =
      item.username === loggedInUser ? 'right' : 'left';
    return (
      <ChatBubble
        key={index}
        position={position}
        username={item.username}
        text={item.text}
      ></ChatBubble>
    );
  });

  const handleInputKeyPressed = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter' && event.code !== '13') return;
    if (!inputRef || !inputRef.value) return;

    setChatHistory([
      ...chatHistory,
      {
        username: 'user ME',
        text: inputRef.value,
      },
    ]);
    inputRef.value = '';
  };

  return (
    <div>
      <div
        className="content"
        ref={(div) => {
          setContentDivRef(div);
        }}
      >
        <div className="chatContainer">{chatItems}</div>
      </div>
      <input
        className="chatInput"
        type="text"
        placeholder="Type your guess"
        onKeyUp={handleInputKeyPressed}
        ref={(input) => {
          setInputRef(input);
        }}
      ></input>
    </div>
  );
};

export default Chat;
