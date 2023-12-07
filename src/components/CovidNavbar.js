import React from 'react'
import '../App.css';

function CovidNavbar({ countriesData }) {

  if (!countriesData || countriesData.length < 0) {
    return <div>Nothing here my friend</div>;
  }
  //introduzir o react-router-dom para que cada país seja um link
  return (
    <div>
      <div>{countriesData.reduce((total, data) => total + data.cases, 0)}</div>

      {countriesData.map((data, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ marginRight: '10px' }}>{data.cases} in {data.country}</p>
          <img src={data.flag} alt={`Flag ${index}`} style={{ width: '23px', height: 'auto' }} />
        </div>
      ))}
    </div>
  )

}

export default CovidNavbar



