import React, { useState } from 'react';
import './SessionModal.css'
import Button from '../Button/Button';
import RadioGroup from '../RadioGroup/RadioGroup';
import Input from '../Input/Input';
import classNames from 'classnames';

type SessionModalProps = {
    show: boolean,
    onClose: () => void
}

type createSessionDTO = {
    nickname: string,
}

const SUBMIT_BUTTON_JOIN = 'Join';
const SUBMIT_BUTTON_CREATE = 'Create';

const accessTypeOptions = [
    {label: 'Join Session', value: 'join'},
    {label: 'Create Session', value: 'create'}
]

const SessionModal: React.FC<SessionModalProps> = ({show, onClose}) => {

    const [nickname, setNickname] = useState('');
    const [sessionId, setSessionId] = useState('');
    const [submitButtonText, setSubmitButtonText] = useState(SUBMIT_BUTTON_JOIN);
    const [accessType, setAccessType] = useState('join');

    const handleClose = () => {
        onClose();
    }

    const handleAccessTypeChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        setAccessType(event.target.value);
        if(event.target.value === 'join'){
            setSubmitButtonText(SUBMIT_BUTTON_JOIN);
        }else{
            setSubmitButtonText(SUBMIT_BUTTON_CREATE);
        }
    }

    const handleNicknameChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        setNickname(event.target.value);
    }

    const handleSessionIdChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        setSessionId(event.target.value);
    }

    const handleSubmit = async () => {
        console.log(nickname, sessionId);
        // const response = await fetch('http://127.0.0.1:3001/sessions', {
        //     mode: 'cors',
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({nickname})
        // });
        // const responseBody = await response.json();
    }

    return(
        <div className={classNames({'modal':true,'center-items':true,'hidden':!show})}> 
            <div className='session-form'>
                <RadioGroup options={accessTypeOptions} name='radio-access-type' onChange={handleAccessTypeChange}></RadioGroup>
                <Input label='Nickname' name='input-nickname' onChange={handleNicknameChange}></Input>
                <Input hidden={accessType !== 'join'} label='Session Id' name='input-session-id' onChange={handleSessionIdChange}></Input>
            </div>
            <div className='session-control-buttons'>
                <Button onClick={handleSubmit} label={submitButtonText} variant='standard' type='submit'></Button>
                <Button onClick={handleClose} label='Close' variant='neutral' type='close'></Button>
            </div>
        </div>
    )
}

export default SessionModal;