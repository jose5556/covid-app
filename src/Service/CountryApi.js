import React, { useEffect, useState } from 'react';
import CovidNavbar from '../components/CovidNavbar';

function CountryApi() {

    const [countriesData, setCountriesData] = useState([]);
    const covidApi = "https://disease.sh/v3/covid-19/countries?sort=cases";

    useEffect(() => {
        fetch(covidApi)
            .then((response) => response.json())
            .then((data) => {

                const countryInformationCovid = data.map((covidData) => ({
                    cases: covidData.cases,
                    country: covidData.country,
                    flag: covidData.countryInfo.flag,
                }));

                setCountriesData(countryInformationCovid);
            })

            .catch((error) => {
                console.error("Error in CountryApi:", error)
            })

    }, [covidApi]);
    return (
        <div>
            <CovidNavbar countriesData={countriesData} />
        </div>
    )
}

export default CountryApi