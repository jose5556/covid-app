import React from 'react'
import { useEffect, useState } from 'react'

function CountryApi() {

    const covidApi = "https://disease.sh/v3/covid-19/countries";
    const [covidCountries, setCovidCountries] = useState([]);
    const [cases, setCases] = useState([]);


    useEffect(() => {
        fetch(covidApi)
            .then((response) => response.json())
            .then((data) => {
                const country = []
                const cases = []
                data.forEach((apiData) => {
                    country.push(apiData.country)
                    cases.push(apiData.cases)
                })
                setCovidCountries(country);
                setCases(cases);
            })

            .catch((error) => {
                console.error("Error in CountryApi:", error)
            })

    }, [covidApi])
    return (
        <div>CountryApi</div>
    )
}

export default CountryApi