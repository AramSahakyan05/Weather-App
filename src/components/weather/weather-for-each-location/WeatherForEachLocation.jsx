import React, { useContext } from 'react'
import { WeatherData } from '../Weather';
import './WeatherForEachLocation.css';
import { CiSearch } from "react-icons/ci";
import { ImArrowDown, ImArrowUp } from "react-icons/im";
import { MdWaterDrop } from "react-icons/md";
import { GiWhirlwind } from "react-icons/gi";



const WeatherForEachLocation = () => {
  const {value, setValue, data,getWeatherData} = useContext(WeatherData);
  const clearInputValue = () => {
    setValue("");
  }

  return (
          <div className='weather-for-each-location'>
          <form onSubmit={e => {
            e.preventDefault();
            getWeatherData();
            clearInputValue();
          }}>
            <input type="text" value={value} onChange={e => {
                setValue(e.target.value);
            }} className='search-input'/>
            <CiSearch />
          </form>
          <section>
              <h4>Current Weather</h4>
              <div className='weather-info'>
                <div className="location-temperature">
                  <h4>{data && data.name}</h4>
                  <div className='temperature'>
                    <img src={`https://openweathermap.org/img/wn/${data && data.weather && data.weather[0] && data.weather[0].icon}.png`} style={{display: data == false ? "none" : "block"}} alt="" />
                    <h1>
                      {data && data.main && data.main.temp + "°"}
                    </h1>
                  </div>
                  <span>
                    {data && data.weather && data.weather && data.weather[0].description}
                  </span>
                </div>
                <div className="wind-humidity">
                  <h4>{"Feels like " + data && data.main && data.main.feels_like + "°"}</h4>
                  <div className="min-max-temp">
                    <h5 className='margin'>
                    <ImArrowUp />
                      {data && data.main && Math.ceil(data.main.temp_max)}
                    </h5>
                    <h5 className='margin'>
                    <ImArrowDown />
                      {data && data.main && Math.floor(data.main.temp_min)}
                    </h5>
                  </div>
                  <div className="hum-wind-press">
                    <h5>
                      <MdWaterDrop />
                      {"Humidity" + data && data.main && data.main.humidity}
                    </h5>
                    <h5>
                      <GiWhirlwind />
                      {"Wind" + data && data.wind && data.wind.speed}
                    </h5>
                    <h5>
                      <MdWaterDrop />
                      {"Pressure" + data && data.main && data.main.pressure + "hPa"}
                    </h5>
                  </div>
                </div>
              </div>
          </section>
        </div>
  )
}
export default WeatherForEachLocation
