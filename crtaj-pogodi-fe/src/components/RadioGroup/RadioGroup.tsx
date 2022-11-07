import React from 'react';
import './RadioGroup.css';

type RadioGroupOption = {
    label: string,
    value: string
}

type RadioGroupProps = {
    options: RadioGroupOption[],
    name: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioGroup: React.FC<RadioGroupProps> = ({options, name, onChange}) => {
    return (
        <div className='radio-group-container'>
            {options.map((option, index)=>(
                    <label key={option.value}>
                        <input type='radio' name={name} value={option.value} id={`radio-${option.value}`} onChange={onChange} defaultChecked={index===0}></input>
                        {option.label}
                    </label>
            ))}
        </div>
    )
}

export default RadioGroup;