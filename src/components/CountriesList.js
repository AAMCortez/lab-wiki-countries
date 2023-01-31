import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setCountries(response.data);
    }
    getCountries();
  }, []);

  return (
    <ul>
      {countries.map((country) => {
        return (
          <li key={country.alpha3Code}>
            <Link to={`/${country.alpha3Code}`}>{country.name.official}</Link>
          </li>
        );
      })}
    </ul>
  );
}
export default CountriesList;
