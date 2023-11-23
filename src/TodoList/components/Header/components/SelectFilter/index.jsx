import React from 'react';
import styles from './styles.module.scss'

const SelectFilter = () => {
   return (
      <div className={styles.select_wrapper}>
         <select className={styles.select} name="sort" id="sort">
            <option>ALL</option>
            <option>COMPLETE</option>
            <option>INCOMPLETE</option>
         </select>
      </div>
   );
};

export default SelectFilter;