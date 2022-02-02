import React from 'react';
import './LetterHolder.css';

export type LetterHolderProps = {
  letter: string;
};

const LetterHolder: React.FC<LetterHolderProps> = ({ letter }) => {
  return <div className={letter !== ' ' ? 'letter': 'letter__space'}>{letter}</div>;
};

export default LetterHolder;
