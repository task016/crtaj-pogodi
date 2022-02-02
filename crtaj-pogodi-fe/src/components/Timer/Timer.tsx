import React, { useCallback, useEffect, useState } from 'react';

type TimerProps = {
  startValue: number;
  interval: number;
  onValueChange: () => void;
  className?: string;
};

const Timer: React.FC<TimerProps> = ({
  startValue,
  interval,
  onValueChange,
}) => {
  const [value, setValue] = useState(startValue);

  useEffect(() => {
    const intervalHandle = setInterval(
      () => setValue((oldValue) => (oldValue > 0 ? oldValue - 1 : 0)),
      interval,
    );
    return () => clearInterval(intervalHandle);
  }, [interval]);

  const onChange = useCallback(() => {
    if (onValueChange) {
      onValueChange();
    }
  }, [onValueChange]);

  useEffect(() => {
    onChange();
  }, [value, onChange]);

  return (
    <div className="timer">
      <span>{value}</span>
    </div>
  );
};

export default Timer;
