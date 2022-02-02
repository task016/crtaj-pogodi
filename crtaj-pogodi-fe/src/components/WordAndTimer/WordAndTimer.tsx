import React, { useState } from 'react';
import './WordAndTimer.css';
import WordHolder from '../WordHolder/WordHolder';
import Timer from '../Timer/Timer';

type WordAndTimerProps = {
  className?: string;
  word: string;
};

const WordAndTimer = ({ word }: WordAndTimerProps) => {
  const [visibleLetters, setVisibleLetters] = useState<boolean[]>(
    [...word].map((l) => false),
  );

  const onTimerChange = () => {
    const hiddenLettersCount = visibleLetters.reduce(
      (prev, cur) => (cur === false ? prev + 1 : prev),
      0,
    );
    let nextVisibleLetter = Math.floor(Math.random() * hiddenLettersCount);
    let nextVisibleIndex = 0;
    visibleLetters.forEach((el, index) => {
      if (el === false) nextVisibleLetter--;
      if (nextVisibleLetter === 0) {
        nextVisibleIndex = index;
      }
    });
    const nextVisibleLetters = [...visibleLetters];
    nextVisibleLetters[nextVisibleIndex] = true;
    setVisibleLetters(nextVisibleLetters);
  };

  return (
    <div className="wordAndTimerContainer">
      <div>
        <Timer
          startValue={60}
          interval={1000}
          onValueChange={onTimerChange}
        ></Timer>
        <WordHolder word="pogodak" visibleLetters={visibleLetters}></WordHolder>
      </div>
    </div>
  );
};

export default WordAndTimer;
