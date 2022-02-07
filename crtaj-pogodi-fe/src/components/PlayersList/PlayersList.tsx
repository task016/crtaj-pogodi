import React from 'react';
import './PlayersList.css';
import PlayerCard from '../PlayerCard/PlayerCard';

const listOfPlayers = [
  {
    username: 'some guy',
    score: 1000,
    profilePicture:
      'http://www.canada-work.com/_/rsrc/1531284300421/assistants/female_generic_profile.png',
    isDrawing: false,
    isWinning: false,
  },
  {
    username: 'some guy',
    score: 1000,
    profilePicture:
      'http://www.canada-work.com/_/rsrc/1531284300421/assistants/female_generic_profile.png',
    isDrawing: false,
    isWinning: true,
  },
  {
    username: 'some guy',
    score: 1000,
    profilePicture:
      'http://www.canada-work.com/_/rsrc/1531284300421/assistants/female_generic_profile.png',
    isDrawing: false,
    isWinning: false,
  },
  {
    username: 'some guy',
    score: 1000,
    profilePicture:
      'http://www.canada-work.com/_/rsrc/1531284300421/assistants/female_generic_profile.png',
    isDrawing: false,
    isWinning: false,
  },
  {
    username: 'some guy',
    score: 1000,
    profilePicture:
      'http://www.canada-work.com/_/rsrc/1531284300421/assistants/female_generic_profile.png',
    isDrawing: true,
    isWinning: false,
  },
  {
    username: 'some guy',
    score: 1000,
    profilePicture:
      'http://www.canada-work.com/_/rsrc/1531284300421/assistants/female_generic_profile.png',
    isDrawing: false,
    isWinning: false,
  },
  {
    username: 'some guy',
    score: 1000,
    profilePicture:
      'http://www.canada-work.com/_/rsrc/1531284300421/assistants/female_generic_profile.png',
    isDrawing: false,
    isWinning: false,
  },
];

const PlayersList = () => {
  return (
    <div>
      <main className="leaderboard__profiles">
        {listOfPlayers.map((el, index) => (
          <PlayerCard
            key={`${el.username}:${index}`}
            username={el.username}
            score={el.score}
            profilePicture={el.profilePicture}
            isDrawing={el.isDrawing}
            isWinning={el.isWinning}
          ></PlayerCard>
        ))}
      </main>
    </div>
  );
};

export default PlayersList;
