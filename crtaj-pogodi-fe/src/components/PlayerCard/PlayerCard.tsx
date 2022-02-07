import React from 'react';
import './PlayerCard.css';

interface PlayerCardProps {
  username: string;
  profilePicture: string;
  score: number;
  isDrawing: boolean;
  isWinning: boolean;
}

const PlayerCard = (props: PlayerCardProps) => {
  const { username, profilePicture, score, isDrawing, isWinning } = props;

  const getArticleClassName = () => {
    let className = 'leaderboard__profile';
    if (isDrawing) className += ' drawing';
    if (isWinning) className += ' winning';
    return className;
  };

  return (
    <article className={getArticleClassName()}>
      <img
        src={profilePicture}
        alt={username}
        className="leaderboard__picture"
      ></img>
      <span className="leaderboard__name">{username}</span>
      <span className="leaderboard__value">{score}</span>
    </article>
  );
};

export default PlayerCard;
