import React from 'react';
import styles from './styles.module.scss'

const TitleModal = ({children}) => {
    return (
        <h2 className={styles.title}>
            {children}
        </h2>
    );
};

export default TitleModal;