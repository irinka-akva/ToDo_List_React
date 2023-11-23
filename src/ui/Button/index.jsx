import React from 'react';
import cn from 'classnames'
import styles from './styles.module.scss'

const Button = ({innerClass, children, type, disabled, onClick}) => {
    return (<button className={cn(styles.btn, innerClass)} type={type} onClick={onClick} disabled={disabled}>
                {children}
            </button>
    );
};

export default Button;