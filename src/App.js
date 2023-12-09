import './App.css';
import Map from './components/Map.js'
import CovidNavbar from './components/CovidNavbar.js';
import CountryApi from './Service/CountryApi.js';
import CasesApi from './Service/CasesApi.js';


function App() {


  return (
    <div className="App">
      <div className='navbar'>       
        <CountryApi />
        <CovidNavbar />
      </div>
      <div className='map'>
        <Map />
      <div className='graphic'>
        <CasesApi />
        
      </div>
      </div>
    </div>
  );
}

export default App;