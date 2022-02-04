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
  },
  {
    username: 'some guy',
    score: 1000,
    profilePicture:
      'http://www.canada-work.com/_/rsrc/1531284300421/assistants/female_generic_profile.png',
    isDrawing: false,
  },
  {
    username: 'some guy',
    score: 1000,
    profilePicture:
      'http://www.canada-work.com/_/rsrc/1531284300421/assistants/female_generic_profile.png',
    isDrawing: false,
  },
  {
    username: 'some guy',
    score: 1000,
    profilePicture:
      'http://www.canada-work.com/_/rsrc/1531284300421/assistants/female_generic_profile.png',
    isDrawing: false,
  },
  {
    username: 'some guy',
    score: 1000,
    profilePicture: 'url',
    isDrawing: false,
  },
  {
    username: 'some guy',
    score: 1000,
    profilePicture: 'url',
    isDrawing: false,
  },
  {
    username: 'some guy',
    score: 1000,
    profilePicture: 'url',
    isDrawing: false,
  },
];

const PlayersList = () => {
  return (
    <div className="playersListContainer">
      {listOfPlayers.map((el, index) => {
        return (
          <PlayerCard
            key={`${el.username}:${index}`}
            username={el.username}
            profilePicture={el.profilePicture}
            score={el.score}
            isDrawing={el.isDrawing}
          ></PlayerCard>
        );
      })}
    </div>
  );
};

export default PlayersList;
