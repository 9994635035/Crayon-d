import { Filter } from '@material-ui/icons';
import '../src/App.css';
import './responsive.css'
import ItemList from './components/itemList';
import FilterSec from './components/filter';
import NavBar from './components/navbar';





function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <ItemList/>
      {/* <FilterSec/> */}
      {/* <NavBar/> */}
    </div>
  );
}

export default App;
