import React, { useCallback } from 'react';
import './WordAndTimer.css';
import WordHolder from '../WordHolder/WordHolder';
import Timer from '../Timer/Timer';
import useCharacters from './hooks/useCharacters.hook';

type WordAndTimerProps = {
  className?: string;
  word: string;
};

const random = (upperLimit: number) =>
  Math.floor(Math.random() * (upperLimit + 1));


const WordAndTimer = ({ word }: WordAndTimerProps) => {
 const {lettersMap, numOfSpaces,characters, setCharacters, shouldRevealLetter} = useCharacters(word)

  const onChange = useCallback(
    (time: number) => {
      const letterIndices = Object.keys(lettersMap);
      if (!letterIndices.length) return;
      if (lettersMap[' ']) delete lettersMap[' '];

      const revealIndex =
        letterIndices[random(letterIndices.length - 1 - numOfSpaces)];

      if (time === 0) {
        setCharacters([...word]);
        return;
      }
      if (!(time && shouldRevealLetter(time))) return;

      setCharacters((prevChars: string[]) => {
        const newChars = [...prevChars];
        newChars[+revealIndex] = lettersMap[revealIndex];
        return newChars;
      });

      delete lettersMap[revealIndex];
    },
    [lettersMap, numOfSpaces,setCharacters, shouldRevealLetter, word],
  );

  return (
    <div className="wordAndTimerContainer">
      <div>
        <Timer startValue={60} interval={1000} onValueChange={onChange}></Timer>
        <WordHolder characters={characters}></WordHolder>
      </div>
    </div>
  );
};

export default WordAndTimer;
