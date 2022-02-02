import React, { useCallback, useMemo, useState } from 'react';
import './WordAndTimer.css';
import WordHolder from '../WordHolder/WordHolder';
import Timer from '../Timer/Timer';

type WordAndTimerProps = {
  className?: string;
  word: string;
};

const random = (upperLimit: number) =>
  Math.floor(Math.random() * (upperLimit + 1));

const WordAndTimer = ({ word }: WordAndTimerProps) => {
  const [characters, setCharacters] = useState<string[]>(
    new Array(word.length).fill(''),
  );

  const [time, setTime] = useState(60);

  const lettersMap: Record<string, string> = useMemo(() => {
    const letters = [...word];
    const map = letters.reduce(
      (acc, letter, index) => ({
        ...acc,
        [index]: letter,
      }),
      {},
    );
    return map;
  }, [word]);

  const shouldRevealLetter = useCallback(() => {}, []);

  const onChange = useCallback(
    (time) => {
      setTime(time);
      const letterIndices = Object.keys(lettersMap);
      if (!letterIndices.length) return;

      const revealIndex = letterIndices[random(letterIndices.length - 1)];

      setCharacters((prevChars) => {
        const newChars = [...prevChars];
        newChars[+revealIndex] = lettersMap[revealIndex];
        return newChars;
      });

      delete lettersMap[revealIndex];
    },
    [lettersMap],
  );

  return (
    <div className="wordAndTimerContainer">
      <div>
        <Timer startValue={60} interval={1000} onValueChange={onChange}></Timer>
        <WordHolder characters={[...characters]}></WordHolder>
      </div>
    </div>
  );
};

export default WordAndTimer;
