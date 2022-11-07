import React from 'react';
import './Button.css';
import icon_edit from './icons/edit.svg';
import icon_submit from './icons/submit.svg';
import icon_close from './icons/close.svg';

type IconType = 'submit' | 'edit' | 'close';
type VariantType = 'standard' | 'neutral';
type Shape = 'rectangle' | 'circle';

type ButtonProps = {
    label: string,
    variant?: VariantType,
    type?: IconType,
    shape?: Shape,
    onClick: (event: React.MouseEvent<HTMLElement>)=>void
}

type Icons = {
    [k in IconType]: string
}

const icons: Icons = {
    submit: icon_submit,
    edit: icon_edit,
    close: icon_close
}

const getImgIcon = (type?: IconType) =>  type && (<img src={icons[type]} alt=''></img>)

const Button: React.FC<ButtonProps> = ({label, variant='standard', type, shape='rectangle', onClick}) =>  
        <button onClick={onClick} className='button' data-variant={variant} data-shape={shape}>
            {getImgIcon(type)}
            {label}
        </button>
    

export default Button;