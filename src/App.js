import './App.css';
import Map from './components/Map.js'
import CountryApi from './Service/CountryApi.js'


function App() {


  return (
    <div className="App">
      <Map />
      <CountryApi />
    </div>
  );
}

export default App;
