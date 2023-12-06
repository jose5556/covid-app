import React from 'react'
import CovidNavbar from '../components/CovidNavbar';
import { useEffect, useState } from 'react'

function CountryApi() {

    const covidApi = "https://disease.sh/v3/covid-19/countries";
    const [countriesData, setCountriesData] = useState([]);

    useEffect(() => {
        fetch(covidApi)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)

                const countryInformationCovid = data.map((covidData) => ({
                    cases: covidData.cases,
                    country: covidData.country,
                    flag: covidData.flag,
                }));

                setCountriesData(countryInformationCovid);
            })

            .catch((error) => {
                console.error("Error in CountryApi:", error)
            })
    }, [covidApi])
    return (
        <CovidNavbar countriesData={countriesData} />
    )
}

export default CountryApi