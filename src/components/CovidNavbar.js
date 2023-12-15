import React, { useState } from 'react';
import '../App.css';

function CovidNavbar({ countriesData }) {
  const [input, setInput] = useState("");
  
  if (!countriesData || countriesData.length === 0) {
    return;
  }

  const handleChange = e => {
    setInput(e.target.value);
    console.log(setInput)
  };

  let filteredCountries = countriesData;

  if (input.trim() !== "") {
    filteredCountries = countriesData.filter(data =>
      data.country.toLowerCase().includes(input.toLowerCase())
    );
  }

  return (
    <div>
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
    </div>
  );
}

export default CovidNavbar;


