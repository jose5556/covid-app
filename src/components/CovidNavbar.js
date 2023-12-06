import React from 'react'
import '../App.css';

function CovidNavbar({ countriesData }) {


  if (!countriesData) {
    return <div>Nothing here my friend</div>;
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



