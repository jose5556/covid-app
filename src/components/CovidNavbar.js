import React from 'react'
import '../App.css';

function CovidNavbar({ countriesData }) {

  if (!Array.isArray(countriesData)) {
    return <div>No data available</div>; // Ou algo semelhante para lidar com a ausência de dados
  }

  return (
    <div className='sideBar' style={{ width: '25%', paddingTop: '20px'}}>
    {countriesData.map((data, index) => (
      <div key={index}>
        <p>{data.cases} in {data.country}</p>
        <img src={data.flag} alt={`Flag ${index}`} style={{ width: '50px', height: 'auto', marginBottom: '10px' }} />
      </div>
    ))}
  </div>
  )
  
}

export default CovidNavbar



