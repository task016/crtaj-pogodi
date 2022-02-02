import React from 'react';
import Canvas from './components/Canvas/Canvas';
import './App.css';
import Chat from './components/Chat/Chat';
import WordAndTimer from './components/WordAndTimer/WordAndTimer';

const App = () => {
  return (
    <div className="mainContainer">
      <WordAndTimer word="pogodak"></WordAndTimer>
      <div className="canvasAndChatContainer">
        <Canvas width={800} height={800} />
        <Chat></Chat>
      </div>
    </div>
  );
};

export default App;
