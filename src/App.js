import './App.css';
import Map from './components/Map.js'
import CovidNavbar from './components/CovidNavbar.js';
import CountryApi from './Service/CountryApi.js';
import LineChart from './components/LineChart.js';


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
        <LineChart />
      </div>
      </div>
    </div>
  );
}

export default App;