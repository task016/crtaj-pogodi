import React from 'react';
import LetterHolder from '../LetterHolder/LetterHolder';
import './WordHolder.css';

type WordHolderProps = {
  characters: string[];
};

const WordHolder: React.FC<WordHolderProps> = ({ characters }) => {
  return (
    <span className="word">
      {characters.map((char, index) => (
        <LetterHolder key={`${char}${index}`} letter={char} />
      ))}
    </span>
  );
};

export default WordHolder;
