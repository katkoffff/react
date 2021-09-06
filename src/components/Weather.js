import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";
import Card from "./Card";

function Weather(props) {
    const [weather, setNewWeather] = useState({isLoaded: false, weather:{}});

    const currData = props.country
    useEffect(() => {
        updateWeather();
      }, [weather.isLoaded, currData[0].capital]);
    const updateWeather = () => {
        if (currData[0].capital.length > 0) {
            console.log(currData[0].capital)
            const lat = currData[0].latlng[0] + "";
            const lon = currData[0].latlng[1] + "";
            const weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&lang=ru&units=metric&exclude=alerts&APPID=c1ac084383e6c7be5e331daf8e8f1e0f";
            axios.get(weatherURL).then(res => {
            setNewWeather({isLoaded: true, weather: res});
            });
            if ("data" in weather.weather) {
                console.log(weather.weather.data.daily)
                }
            else {
                console.log("данные не получены, жми ишо раз!")

            }

        } else {
            console.log("Не выбрана страна!!!");
        }
    }
    const handleClick = () => {
        setNewWeather({isLoaded: false, weather: {}});
    }

    return (
        <Fragment>
            <div>
                <button onClick={handleClick}>
                    Обновить погоду
                </button>
            </div>
            <Card weather={weather.weather}/>
        </Fragment>
    );
}


export default Weather;