import React from 'react';
import './LetterHolder.css';

export type LetterHolderProps = {
  visible?: boolean;
  letter: string;
};

const LetterHolder: React.FC<LetterHolderProps> = ({
  visible = false,
  letter,
}) => {
  return <div className="letter">{visible ? letter : ''}</div>;
};

export default LetterHolder;
