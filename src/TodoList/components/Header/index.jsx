import SearchBar from './components/SearchBar'
import SelectFilter from './components/SelectFilter'
import ThemeSwitcher from './components/ThemeSwitcher'
import Title from './components/Title'
import styles from './styles.module.scss'

const Header = () => {

   return (
      <div>
         <Title>TODO LIST</Title>
         <section className={styles.settings}>
            <div className={styles.settings_wrapper}>
               <SearchBar />
               <SelectFilter />
               <ThemeSwitcher />
            </div>
         </section>
      </div>
   );
};

export default Header;