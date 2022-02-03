import { useCallback, useMemo, useState } from 'react';

const UPPER_TIME_BOUND = 45;

const useCharacters = (word: string) => {
  const [characters, setCharacters] = useState<string[]>(() => {
    const chars = new Array(word.length).fill('');
    chars[word.indexOf(' ')] = ' ';
    return chars;
  });
  const [numOfSpaces] = useState(() => {
    return characters.reduce((acc, c) => (c === ' ' ? acc + 1 : acc), 0);
  });

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

  const shouldRevealLetter = useCallback(
    (time) => {
      const interval = Math.round(
        (UPPER_TIME_BOUND - 5) /
          Math.ceil((characters.length - numOfSpaces) / 3),
      );
      if (time < UPPER_TIME_BOUND && time >= 5) {
        return (UPPER_TIME_BOUND - 1) % interval === time % interval;
      }
      return false;
    },
    [characters.length, numOfSpaces],
  );

  return {
    lettersMap,
    numOfSpaces,
    shouldRevealLetter,
    characters,
    setCharacters,
  };
};

export default useCharacters;
