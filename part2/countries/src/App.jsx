import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import Filter from './components/Filter'
import Countries from './components/Countries'
import Country from './components/Country'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const [countryData, setCountryData] = useState(null)

  useEffect(() => {
      countriesService.getAll()
      .then(response => {
        const commonNames = response.data.map(country => country.name.common);
        setCountries(commonNames);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      })
    }, [])

  const handleShowCountry = (name) => {
    countriesService.get(name)
      .then(response => {
        const countryData = response.data;
        setCountryData(countryData)
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      })
  }

  useEffect(() => {
    const countriesMatch= filter === '' ? countries : 
      countries.filter(country => country.toLowerCase().includes(filter.toLowerCase()))
    setCountriesToShow(countriesMatch)

    if(countriesMatch.length === 1){
      showCountry(countriesMatch[0])
    }
    else
      setCountryData(null)
  }, [filter, countries])

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      {countriesToShow.length > 10 &&
        <p>Too many matches, specify another filter</p>
      }
      {countriesToShow.length < 10 && countriesToShow.length > 1 &&
        <Countries countries={countriesToShow} showCountry={handleShowCountry}/>
      }
      {countryData &&
        <Country country={countryData} />
      }
    </div>
  )
}

export default App
