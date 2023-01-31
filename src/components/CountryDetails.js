import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CountriesDetails() {
  const [countries, setCountries] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getCountries() {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${id}`
      );
      setCountries(response.data);
      
    }
    getCountries();  
  }, [id]);
console.log(countries)

if(!countries) return <>loading...</>
  return (
    <>
      <div>{countries.name.official}</div>
      <div>{countries.capital}</div>
      <div>{countries.area} km</div>
      <ul>
        <li>{countries.borders}</li>
      </ul>
    </>
  );
}

export default CountriesDetails;
