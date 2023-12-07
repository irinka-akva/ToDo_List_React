import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'

const IconButton = ({innerClass, children, onClick}) => {
    return (
        <button type='button' className={cn(styles.btn_icon, innerClass)} onClick={onClick}>
            {children}
        </button>
    );
};

export default IconButton;