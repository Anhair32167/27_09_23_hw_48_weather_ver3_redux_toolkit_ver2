import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../getWeatherAction";

const initialState = {
    weather: {
        city: '',
        country: '',
        temp: '',
        pressure: '',
        sunset: '',
        error: 'Enter city'
    }
};
const weatherSlice = createSlice({
    name:'weather',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.fulfilled,(state, action)=>{
            state.weather = action.payload;
        });
        builder.addCase(fetchWeather.rejected,(state, action)=>{
            state.weather = action.payload;
        });
    }
});


export default weatherSlice.reducer;