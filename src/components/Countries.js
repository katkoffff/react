import React, {useState, Fragment} from "react";
import axios from "axios";
import Card from './Card';

function Countries() {
    const [countries, setCountries] = useState([]);
    const [currentCountries, setCurrentCountries] = useState("");
    const handleChange = () => {
        setCurrentCountries(document.getElementById("chooseCountry").value);
    };
    let [weather, setNewWeather] = useState({});
    const handleClick = () => {
        if (currentCountries != "") {
            let currData = countries.filter(item => item.capital==currentCountries);
            let lat = currData[0].latlng[0] + "";
            let lon = currData[0].latlng[1] + "";

            let weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&lang=ru&units=metric&exclude=alerts&APPID=c1ac084383e6c7be5e331daf8e8f1e0f";
            axios.get(weatherURL).then(res => {
            setNewWeather(res);
            });
            if ("data" in weather) {
                console.log(weather.data.daily)
                }
            else {
                alert("данные не получены, жми ишо раз!")
            }

        } else {
            console.log("Не выбрана страна!!!");
        }
    };
    /*formatCards = () => {
                    return weather.data.daily.map((day, index) => <Card day={day} key={index}/>)
                  }*/
    if (!countries.length) {
        axios.get("https://restcountries.eu/rest/v2/all").then(res => {
            setCountries(res.data);
        });
    }
    return (
        <Fragment>
            <div>Выберите город</div>
            <div>
                <select id="chooseCountry" onFocus={handleChange} onChange={handleChange}>
                    {countries.map(country => <option key={country.alpha3Code}>{country.capital}</option>)}
                </select>
            </div>

            <div>
                <button onClick={handleClick}>
                        Получить погоду
                </button>
            </div>

            <div>
                <h2>погода в городе: {currentCountries}</h2>
            </div>

            <Card weather={weather} />

        </Fragment>
    );
}

export default Countries;