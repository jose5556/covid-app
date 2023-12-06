import './App.css';
import Map from './components/Map.js'
import CovidNavbar from './components/CovidNavbar.js';


function App() {


  return (
    <div className="App">
      <div className='navBar'>
        <CovidNavbar name='jose'/>
      </div>
      <Map />
    </div>
  );
}

export default App;
