import React, { useState } from 'react';
import Canvas from './components/Canvas/Canvas';
import './App.css';
import Chat from './components/Chat/Chat';
import WordAndTimer from './components/WordAndTimer/WordAndTimer';
import PlayersList from './components/PlayersList/PlayersList';
import SessionModal from './components/SessionModal/SessionModal';

const App = () => {
  const [word] = useState('MALA SIRENA');
  const [showSessionModal, setShowSessionModal] = useState(true);

  const handleSessionModalClose = () => {
    setShowSessionModal(false);
  }

  return (
    <div className="mainContainer">
      <SessionModal show={showSessionModal} onClose={handleSessionModalClose}></SessionModal>
      <WordAndTimer word={word}></WordAndTimer>
      <div className="canvasAndChatContainer">
        <PlayersList></PlayersList>
        <Canvas width={800} height={650} />
        <Chat></Chat>
      </div>
    </div>
  );
};

export default App;
