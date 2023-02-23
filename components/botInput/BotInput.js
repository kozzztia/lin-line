import React from 'react';
import style from './style.module.scss'
const BotInput = ({title , value , setValue , inputType , formStatus}) => {

    return (
        <div className={style.input}>
            <label htmlFor={inputType}>{title}:</label>
            <input
                disabled={formStatus}
                type={inputType === 'phone'?'tel':'text'}
                id={inputType}
                name={inputType}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                required
            />
            
        </div>
    );
};

export default BotInput;