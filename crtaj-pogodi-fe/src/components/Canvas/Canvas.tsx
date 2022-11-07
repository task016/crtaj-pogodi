import React, { ChangeEvent, useState } from 'react';
import './Canvas.css';
import CanvasDraw from 'react-canvas-draw';
import classNames from 'classnames';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';

type CanvasProps = {
  className?: string;
  width: number;
  height: number;
};

const Canvas: React.FC<CanvasProps> = ({className, height, width}) => {
  const [brushRadius, setBrushRadius] = useState<number>(12);
  const [brushColor, setBrushColor] = useState<string>('rgb(0,0,0)');
  const [canvasRef, setCanvasRef] = useState<CanvasDraw | null>();
  const classes = classNames(className, 'canvas-container');

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
      <ButtonGroup orientation='horizontal'>
        <Button label='+' onClick={handleIncrease} shape='circle'></Button>
        <Button label='-' onClick={handleDecrease} shape='circle'></Button>
        <Button label='Erase' onClick={handleEraser} ></Button>
        <Button label='Clear' onClick={handleClear} ></Button>
        <Button label='Undo' onClick={handleUndo} ></Button>
        <input type="color" value="#000000" onChange={handleColorChange}></input>
      </ButtonGroup>
    </div>
  );
};

export default Canvas;
