import React from 'react';
import cn from 'classnames'
import styles from './styles.module.scss'

const InputField = ({ innerClass, type, name, id, placeholder }) => {
    return (
    <input className={cn(styles.input, innerClass)} type={type} name={name} id={id}
                placeholder={placeholder} />
    );
};

export default InputField;