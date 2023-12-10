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
            count: data.cases[date],
          }));
          
          setNumCases(casesData);
        } else {
          throw new Error('Data in CasesApi Not here my friend');
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
