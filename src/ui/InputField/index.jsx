import React, {forwardRef} from 'react';
import cn from 'classnames'
import styles from './styles.module.scss'

const InputField = forwardRef(({ innerClass, type, name, id, placeholder, value, onChange}, ref) => {
    return (
    <input className={cn(styles.input, innerClass)} type={type} name={name} id={id}
                placeholder={placeholder} value={value} onChange={onChange} ref={ref}/>
    );
});

export default InputField;