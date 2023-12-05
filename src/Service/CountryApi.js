import React from 'react'
import { useEffect } from 'react'

function CountryApi() {

    const covidApi = "https://disease.sh/v3/covid-19/countries"

    useEffect(() => {
        fetch(covidApi)
            .then((response) => response.json())
            .then((data) => {
                data.forEach((country) => {
                    console.log(country.country)
                })
            })

    })
    return (
        <div>CountryApi</div>
    )
}

export default CountryApi