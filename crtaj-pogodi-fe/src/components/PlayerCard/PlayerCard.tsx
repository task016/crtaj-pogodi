import React from 'react';
import './PlayerCard.css';

interface PlayerCardProps {
  username: string;
  profilePicture: string;
  score: number;
  isDrawing: boolean;
}

const PlayerCard = (props: PlayerCardProps) => {
  const { username, profilePicture, score, isDrawing } = props;
  return (
    <div className="playerCardContainer">
      <div className="profilePictureContainer">
        <img height={60} width={60} src={profilePicture} alt={username}></img>
      </div>
      <div>
        <p>{username}</p>
        <p>{score}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
