import React from 'react';
import styles from './styles.module.scss'

const EmptyListIcon = ({isTaskListEmpty}) => {
   
    return isTaskListEmpty ? (<div className={styles.main_empty}>
            <img className={styles.main_empty_icon} src='src/assets/detective.png' alt="Список пуст" width="221" height="174"></img>
            <span className={styles.main_empty_text}>Empty...</span>
        </div>) : null
};

export default EmptyListIcon;