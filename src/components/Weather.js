import React from 'react';
import {useSelector} from "react-redux";
const Weather = () => {
    const {weather} = useSelector(state => state.weather);
    console.log(weather)
    return (
        <div style={{width: '60%', fontSize:' 15px', color: '#fff'}}>
            {!weather.error &&
            <div >
                <p>Location (city): {weather.city}, {weather.country}</p>
                <p>Temp: {weather.temp}</p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunset: {new Date(weather.sunset * 1000).toString()}</p>
            </div>
            }
            <p>{weather.error}</p>
        </div>
    )
};

export default Weather;