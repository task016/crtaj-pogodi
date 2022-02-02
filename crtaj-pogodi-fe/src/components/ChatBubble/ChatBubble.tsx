import React from 'react';
import './ChatBubble.css';
import ClassNames from 'classnames';

type ChatBubbleProps = {
  className?: string;
  text: string;
  username: string;
  position: string;
};

const ChatBubble = (props: ChatBubbleProps) => {
  const { className, text, username, position } = { ...props };
  const chatBubbleDivClassName = ClassNames(
    'talk-bubble tri-right top',
    className,
    {
      'talk-bubble-left': position === 'left',
      'talk-bubble-right': position === 'right',
      'tri-right': true,
      top: true,
      left: position === 'left',
      right: position === 'right',
    },
  );

  return (
    <div className={chatBubbleDivClassName}>
      <div className="talktext">
        <div>{username}</div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
