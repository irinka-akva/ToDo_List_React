import React from 'react';
import styles from './styles.module.scss'

const EmptyListIcon = () => {
    
    return (
        <div className={styles.main_empty}>
            <img className={styles.main_empty_icon} src='src/assets/detective.png' alt="Список пуст" width="221" height="174"></img>
            <span className={styles.main_empty_text}>Empty...</span>
        </div>
    );
};

export default EmptyListIcon;