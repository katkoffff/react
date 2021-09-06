import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";
import Weather from "./Weather";

function Countries() {
    const [countries, setCountries] = useState({isLoaded: false, items: []});
    const [currentCountries, setCurrentCountries] = useState("");
    const handleChange = () => {
        setCurrentCountries(document.getElementById("chooseCountry").value)
    };

    useEffect(() => {
        updateItems();
      }, [countries.isLoaded]);

    const updateItems =() => {
        axios.get("https://restcountries.eu/rest/v2/all").then(res => {
            setCountries({isLoaded: true, items: res.data});

        })
    }
    return countries.isLoaded ? (
        <Fragment>
            <div>Выберите город</div>

            <div>
                <select id="chooseCountry" onFocus={handleChange} onChange={handleChange} autoFocus>
                    {countries.items.map(country => <option key={country.alpha3Code}>{country.capital}</option>)}
                </select>
            </div>

            <div>
                <h2>погода в городе: {currentCountries}</h2>
            </div>
            <Weather country={countries.items.filter(item => item.capital==currentCountries)} />
        </Fragment>
    ) : "loading...";
}

export default Countries;