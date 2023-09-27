import {apiKey, baseUrl} from "../../utils/constants";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (city) => {
        try {
            const res = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);
            const data = await res.json();
            const weatherInfo = {
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset,
                error: null
            };
            return weatherInfo;
        }catch (e){
            const weatherInfo = {
                city: null,
                country: null,
                temp: null,
                pressure: null,
                sunset: null,
                error: 'City is not found. Enter correct city'
            };
            return weatherInfo;
        }
    }
)

