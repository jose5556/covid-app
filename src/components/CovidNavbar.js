import React from 'react'
import '../App.css';

function CovidNavbar(props) {

  return (
    <div className='sideBar' style={{ width: '25%', paddingTop: '20px'}}>
       <a href="#section">{props.name} </a>
    </div>
  )
  
}

export default CovidNavbar



