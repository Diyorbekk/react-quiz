import React from 'react';
import classes from './Input.module.css'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

function Input(props) {
    const inputType = props.type || 'text';
    const inputPlaceholder = props.placeholder || props.type;
    const htmFor = `${inputType}-${Math.random()}`;
    const cls = [classes.Input];

    if (isInvalid(props)) {
        cls.push(classes.invalid)
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmFor}
                value={props.value}
                placeholder={inputPlaceholder}
                onChange={props.onChange}
            />

            {
                isInvalid(props)
                ? <span>{props.errorMessage || 'To\'g\'ri qiymatni kiriting' }</span> : null
            }


        </div>
    );
}

export default Input;