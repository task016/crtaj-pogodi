import React, { useState } from 'react';
import Canvas from './components/Canvas/Canvas';
import './App.css';
import Chat from './components/Chat/Chat';
import WordAndTimer from './components/WordAndTimer/WordAndTimer';
import PlayersList from './components/PlayersList/PlayersList';

const App = () => {
  const [word] = useState('MALA SIRENA');

  return (
    <div className="mainContainer">
      <WordAndTimer word={word}></WordAndTimer>
      <div className="canvasAndChatContainer">
        <PlayersList></PlayersList>
        <Canvas width={800} height={800} />
        <Chat></Chat>
      </div>
    </div>
  );
};

export default App;
