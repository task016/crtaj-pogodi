import React from 'react';
import LetterHolder from '../LetterHolder/LetterHolder';
import './WordHolder.css';

type WordHolderProps = {
  word: string;
  visibleLetters: boolean[];
};

const WordHolder: React.FC<WordHolderProps> = (props) => {
  const { word, visibleLetters } = props;
  const letters = [...word];

  return (
    <span className="word">
      {letters.map((letter, index) => (
        <LetterHolder
          key={`${letter}${index}`}
          letter={letter}
          visible={visibleLetters[index]}
        />
      ))}
    </span>
  );
};

export default WordHolder;
