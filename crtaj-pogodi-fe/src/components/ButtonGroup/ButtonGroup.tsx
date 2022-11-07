import React from 'react';
import './ButtonGroup.css';

type ButtonGroupProps = {
    children: React.ReactNode | React.ReactNode[],
    orientation?: 'horizontal' | 'vertical'
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({children, orientation='horizontal'}) => {

    return (
        <div className='buttons-container' data-orientation={orientation}>
            {children}
        </div>
    )
}

export default ButtonGroup;
