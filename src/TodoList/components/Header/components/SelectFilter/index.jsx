import styles from './styles.module.scss'

const SelectFilter = ({changeValue, filterValue}) => {
   return (
      <div className={styles.select_wrapper}>
         <select className={styles.select} name="sort" id="sort" onChange={changeValue} value={filterValue}>
            <option>ALL</option>
            <option>COMPLETE</option>
            <option>INCOMPLETE</option>
         </select>
      </div>
   );
};

export default SelectFilter;