import React from 'react';
import './Input.css';

type InputProps = {
    label: string,
    name: string,
    hidden?: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({label, name, hidden = false, onChange}) => {
    return (
    <div hidden={hidden} className='input-container'>
        <label htmlFor={name}>{label}</label>
        <input type='text' onChange={onChange} name={name}></input>
    </div>
    )
}

export default Input;