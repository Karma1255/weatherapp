import React, { useEffect, useState } from 'react'
import ShowResponse from './ShowResponse';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Weather.css';

const Weather = () => {
    let [city,setCity] = useState("");
    let [weatherInfo,setWeatherInfo] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "323d2ef41073a32524e6d68dcc551c44";

   

    function onChange (event) {
        setCity(event.target.value);
    }

    let finaleAPI = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        
        let result = {
          temp: jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,
          tempMax: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          feelsLike: jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0].description,
          city: city,
        };
        setWeatherInfo(result);
      
    };

   

    const formDefault = (event) => {
        event.preventDefault();
        console.log(city);
        // setCity("");
        finaleAPI();
    };


  return (
    <div className='SearchBox'>

      <form onSubmit={formDefault}>
      <TextField id='city' label="City Name" variant='filled' color="standard" value={city} onChange={onChange} required 
      />
      <br /> <br /> 
      <Button variant="contained" type='submit' sx={{ borderRadius: 2}}>Search</Button>
      </form>
      <br /><br /><br />
      <ShowResponse weatherInfo={weatherInfo}></ShowResponse>
    </div>
  )
}

export default Weather
