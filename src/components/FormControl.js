import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {fetchWeather} from "./redux/getWeatherAction";


const FormControl = () => {
    const [city, setCity] = useState({city: ''});
    const dispatch = useDispatch();
    const handleChange = event => setCity({city: event.target.value});
    const handleSubmit = event => {
        event.preventDefault();
        dispatch(fetchWeather(city.city));
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type={'text'} name={'city'} value={city.city} onChange={handleChange}/>
            <button type={"submit"}>Get weather</button>
        </form>
    );
}
export default FormControl;




