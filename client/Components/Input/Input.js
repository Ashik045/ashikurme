import React, { useState } from 'react';
import styles from './input.module.scss';

const Input = (input) => {
    const [focus, setFocus] = useState(false)
    const {label, errMsg, value, onChange, ...others} = input;
    
    const handleInpBlur = (e) => {
        setFocus(true)
    }

    return (
        <div className={styles.input_div}>
        <label className={styles.input_label}>{label}</label>
            <input className={styles.input_inp} {...others} onChange={onChange} onBlur={handleInpBlur} focused={focus.toString()} />
            <span className={styles.input_err}>{errMsg}</span>
        </div>
    )
}

export default Input