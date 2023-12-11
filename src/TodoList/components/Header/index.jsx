import React, {useState} from 'react';
import SearchBar from './components/SearchBar'
import SelectFilter from './components/SelectFilter'
import ThemeSwitcher from './components/ThemeSwitcher'
import Title from './components/Title'
import styles from './styles.module.scss'

const Header = ({changeFilterValue, filterValue, searchValue, setSearchValue}) => {

   return (
      <div>
         <Title>TODO LIST</Title>
         <section className={styles.settings}>
            <div className={styles.settings_wrapper}>
               <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
               <SelectFilter changeValue={changeFilterValue} filterValue={filterValue}/>
               <ThemeSwitcher />
            </div>
         </section>
      </div>
   );
};

export default Header;