import React, { useEffect, useState } from 'react';
import LineChart from '../components/LineChart';

function CasesApi() {
  const Api = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all';
  const [numCases, setNumCases] = useState([]);

  useEffect(() => {
    fetch(Api)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.cases) {
          const casesData = Object.keys(data.cases).map((date) => ({
            date,
          }));
          console.log(casesData); 
          setNumCases(casesData);
        } else {
          throw new Error('Data or cases not found');
        }
      })
      .catch((error) => {
        console.error('CasesApi is not working fine', error);
      
      });
  }, [Api]);

  return (
    <div>
      <LineChart numCases={numCases} />
    </div>
  );
}

export default CasesApi;
