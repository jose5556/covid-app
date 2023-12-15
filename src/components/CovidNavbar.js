import React, { useState } from 'react';
import '../App.css';

function CovidNavbar({ countriesData }) {
  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
  };

  let filteredCountries = countriesData;

  if (input !== "") {
    filteredCountries = countriesData.filter(data =>
      data.country.toLowerCase().includes(input.toLowerCase())
    );
  }

  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        {filteredCountries.reduce((total, data) => total + data.cases, 0)}
      </div>

      <div className="input-container">
        <button className="square-button">up</button>
        <input
          type="text"
          className="input-field"
          value={input}
          onChange={handleChange}
          placeholder="Search..."
        />
      </div>

      {filteredCountries.map((data, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '5px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ marginRight: '10px' }}>{data.cases} in {data.country}</p>
          </div>
          <img
            src={data.flag}
            alt={`Flag ${index}`}
            style={{ width: '23px', height: 'auto' }}
          />
        </div>
      ))}
</>
    
  );
}
export default CovidNavbar;

//fragments react ( <> )


