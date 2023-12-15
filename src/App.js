import './App.css';
import Map from './components/Map.js'
import CountryApi from './service/CountryApi.js';
import CasesApi from './service/CasesApi.js';

function App() {

  return (
    <div className="App">
      <div className='navbar'>
        <CountryApi />
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