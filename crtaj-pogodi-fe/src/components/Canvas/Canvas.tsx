import React, { ChangeEvent, useState } from 'react';
import './Canvas.css';
import CanvasDraw from 'react-canvas-draw';
import classNames from 'classnames';

type CanvasProps = {
  className?: string;
  width: number;
  height: number;
};

const Canvas: React.FC<CanvasProps> = (props) => {
  const { className, height, width } = { ...props };
  const [brushRadius, setBrushRadius] = useState<number>(12);
  const [brushColor, setBrushColor] = useState<string>('rgb(0,0,0)');
  const [canvasRef, setCanvasRef] = useState<CanvasDraw | null>();
  const classes = classNames(className, 'canvas-hidecursor');

  const handleIncrease = () => {
    setBrushRadius(brushRadius + 4);
  };

  const handleDecrease = () => {
    setBrushRadius(brushRadius - 4);
  };

  const handleEraser = () => {
    setBrushColor('rgb(255,255,255)');
  };

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBrushColor(event.target.value);
  };

  const handleClear = () => {
    canvasRef?.clear();
  };

  const handleUndo = () => {
    canvasRef?.undo();
  };

  return (
    <div className={classes}>
      <CanvasDraw
        ref={(canvas) => {
          setCanvasRef(canvas);
        }}
        className="canvas-hidecursor"
        brushColor={brushColor}
        brushRadius={brushRadius}
        canvasWidth={width}
        canvasHeight={height}
      />
      <button className="roundButton" onClick={handleIncrease}>
        +
      </button>
      <button className="roundButton" onClick={handleDecrease}>
        -
      </button>
      <button
        className="roundButton roundButton__btn-clear"
        onClick={handleClear}
      >
        Clear
      </button>
      <button
        className="roundButton roundButton__btn-clear"
        onClick={handleEraser}
      >
        Erase
      </button>
      <button
        className="roundButton roundButton__btn-clear"
        onClick={handleUndo}
      >
        Undo
      </button>
      <input type="color" value="#000000" onChange={handleColorChange}></input>
    </div>
  );
};

export default Canvas;
