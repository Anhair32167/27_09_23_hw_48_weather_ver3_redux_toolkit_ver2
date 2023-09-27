import weatherReducer from "./slices/weatherSlice";
import {configureStore} from "@reduxjs/toolkit";

const weatherStore = configureStore(
    {
        reducer:{weather: weatherReducer}
    }
)
export default weatherStore;