import { useState, useEffect } from 'react'
import Search from './components/Search'
import axios from "axios"
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [countryShown, setCountryShown] = useState()
  const [show, setShow] = useState(false)
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    setShow(false)
  }, [filter])


  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setFilteredCountries(countries.filter((item) => item.name.common.toLowerCase().includes(e.target.value.toLowerCase())))
  }


  const handleCountryShow = (e) => {
    const name = e.target.value
    const country = filteredCountries.filter((item) => item.name.common === name)
    setCountryShown(country[0])
    setShow(true)

  }


  return (
    <div>

      <Search
        filter={filter}
        handleFilterChange={handleFilterChange}
      />

      {
        !show && filteredCountries.length === 0 ?
          <p>Please search a country</p>

          : !show && filteredCountries.length === 1 ?
            <Country country={filteredCountries[0]} />

            : !show && filteredCountries.length > 10 ?
              <p>Too many countries to list</p>

              : !show && filteredCountries.map((item, index) => {
                return (
                  <div key={index}>
                    <p>{item.name.common} <button value={item.name.common} onClick={handleCountryShow}>Show</button></p>

                  </div>
                )
              })
      }
      {
        show && <Country country={countryShown} />
      }


    </div >
  )
}

export default App