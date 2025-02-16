import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const DemoWeather = () => {

    let [city,setCity] = useState("");

    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = '323d2ef41073a32524e6d68dcc551c44';

    let getWeatherInfo = async () => {
       let reponse = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse = await reponse.json();
       
       let result = {
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weathher: jsonResponse.weather[0].description,
      };
      console.log(result);
    };


    
    let handleChange = (event) => {
        setCity(event.target.value);
    };
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    };

  return (
    <div>
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
      <TextField id='city' label="City Name" variant='outlined' color="secondary" value={city} onChange={handleChange} required />
      <br /> <br /> 
      <Button variant="contained" type='submit'>Search</Button>
      </form>
    </div>
  )
}

export default DemoWeather
