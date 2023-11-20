import SearchBar from './components/SearchBar'
import SelectFilter from './components/SelectFilter'
import ThemeSwitcher from './components/ThemeSwitcher'

const Header = () => {
   return (
      <div>
         Header
         <SearchBar />
         <SelectFilter />
         <ThemeSwitcher />
      </div>
   );
};

export default Header;