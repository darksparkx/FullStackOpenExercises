import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Country = ({ country }) => {
    const lat = country.latlng[0]
    const lon = country.latlng[1]
    const [weather, setWeather] = useState()
    const [wind, setwind] = useState()

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=${ process.env.REACT_APP_WEATHER_API_KEY }`)
            .then(response => {
                setWeather(Math.floor(response.data.main.temp - 273.15))
                setwind(response.data.wind.speed)
                console.log(response.data);
            })
    })

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital: {country.capital}</p>
            <p>area: {country.area}</p>

            <p><b>Languages:</b></p>
            <ul>
                {
                    Object.values(country.languages).map((value, index) => <li key={index}>{value}</li>)
                }
            </ul>

            <img src={country.flags.png} alt={country.name.common} />

            <h1>Weather in {country.name.common}</h1>
            <p>temperature: {weather} Celcius</p>
            <p>wind: {wind} m/s</p>
        </div>
    )
}

export default Country