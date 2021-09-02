import React, {useState, Fragment} from "react";

import "../styles/Card.css";

function Card(props) {
    const [days, setDay] = useState([])
    const [imgURLs, setImgURL] = useState([])
    const [dayTemperatures, setDayTemperature] = useState([])
    const [dayDescriptions, setDayDescription] = useState([])
    const handleClick = () => {
        if ("data" in props.weather) {
        const day = props.weather.data.daily.map(item => new Date(item.dt*1000).toLocaleString('ru', {weekday: 'long'})).slice(1);
        setDay(day)
        const imgURL = props.weather.data.daily.map(item => "owf owf-"+ item.weather[0].id +" owf-5x icon-style").slice(1);
        setImgURL(imgURL)
        const dayTemperature = props.weather.data.daily.map(item => item.temp.day).slice(1);
        setDayTemperature(dayTemperature)
        const dayDescription = props.weather.data.daily.map(item => item.weather[0].description).slice(1);
        setDayDescription(dayDescription)
        }
    };
    const handleClickDay = () => {
        if ("data" in props.weather) {
        const day = props.weather.data.hourly.map(item => new Date(item.dt*1000).toLocaleString('ru', {weekday: 'long', hour: '2-digit', minute: '2-digit'})).slice(1);
        setDay(day)
        const imgURL = props.weather.data.hourly.map(item => "owf owf-"+ item.weather[0].id +" owf-5x icon-style").slice(1);
        setImgURL(imgURL)
        const dayTemperature = props.weather.data.hourly.map(item => item.temp).slice(1);
        setDayTemperature(dayTemperature)
        const dayDescription = props.weather.data.hourly.map(item => item.weather[0].description).slice(1);
        setDayDescription(dayDescription)
        }
    };
    const handleClickMin = () => {
        if ("data" in props.weather) {
        const day = props.weather.data.minutely.map(item => new Date(item.dt*1000).toLocaleString('ru', {weekday: 'long', hour: '2-digit', minute: '2-digit'})).slice(1);
        setDay(day)
        const imgURL = props.weather.data.minutely.map(item => "owf owf-"+ item.weather[0].id +" owf-5x icon-style").slice(1);
        setImgURL(imgURL)
        const dayTemperature = props.weather.data.minutely.map(item => item.temp).slice(1);
        setDayTemperature(dayTemperature)
        const dayDescription = props.weather.data.minutely.map(item => item.weather[0].description).slice(1);
        setDayDescription(dayDescription)
        }
    };

    return(
        <div>
            <button onClick={handleClick}>
                Отобразить погоду за неделю
            </button>

            <button onClick={handleClickDay}>
                Отобразить погоду за 2 дня
            </button>

            <button onClick={handleClickMin}>
                Отобразить погоду за час
            </button>

            <div className="grid-wrapper">
                <div className="grid-wrapper-in-tab">
                    {days.map((item, index) => <div key={index} className="grid-item">
                       <h3>{item}</h3>
                       <i className={imgURLs[index]}></i>
                       <h2>{Math.round(dayTemperatures[index])} °C</h2>
                       <button>{dayDescriptions[index]}</button>
                    </div>)}
                </div>
            </div>
        </div>
    );
}

export default Card

/*<div>
                {days.length>0 ? days.map((item, index) => <div key={item}>{item}{index}</div>): "no data"}
            </div>*/