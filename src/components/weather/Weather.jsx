import React, { createContext, useState } from 'react'
import axios from 'axios';
import WeatherForEachLocation from './weather-for-each-location/WeatherForEachLocation';
import ShowError from '../error/ShowError';
import ErrorPage from '../../pages/ErrorPage';

export const WeatherData = createContext();

const Weather = () => {
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);
    const getWeatherData = async () => {
        try {
            const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=e34bf48faf93288d455e57db11fb58bb`);
            console.log(data);
            setData(data);
        } catch ({error}) {
            {!data && <ErrorPage />}
        } 
    }
  return (
    <div className='weather'>
            <WeatherData.Provider value={{value, setValue, data, setData, getWeatherData}}>
                <WeatherForEachLocation/>
            </WeatherData.Provider>
    </div>
  )
}

export default Weather
