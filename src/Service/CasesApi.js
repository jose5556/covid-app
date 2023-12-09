import React, { useEffect, useState } from 'react'

function CasesApi() {

  const casesDeathApi = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";
  const [numCases, setNumCases] = useEffect([]);

  useEffect(() => {
    fetch(casesDeathApi)
    .then((response) => response.json())
    .then((data) => {

      const cases = data.map((index) => {
        if (data || data.length > 0) {
          return index.cases;
        }
      })
      setNumCases(cases);
    })
    .catch((error) => {
      console.error("CasesApi is not working fine", error)
    }) 
  })

  return (
    <div>CasesApi</div>
  )
}

export default CasesApi