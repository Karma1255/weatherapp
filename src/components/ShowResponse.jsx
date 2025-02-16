import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './ShowResponse.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const ShowResponse = ({weatherInfo}) => {
  

  const EXTREM_COLD = 'https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const NORMAL_COLD = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const NORMAL_HEAT = 'https://images.unsplash.com/photo-1595339796956-e4bd91b6c7f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const EXTREME_HEAT = 'https://images.unsplash.com/photo-1495467033336-2effd8753d51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const RAIN = 'https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHJhaW58ZW58MHx8MHx8fDA%3D.unsplash.com/photo-1501999635878-71cb5379c2d8?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D635878-71cb5379c2d8?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.com/photo-1496034663057-6245f1https://c4.wallpaperflare.com/wallpaper/929/1017/70/city-lights-bokeh-lights-blurred-blurry-wallpaper-preview.jpg1be793?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  // if (weatherInfo.humidity > 80) {
  //   setImage(RAIN);
  //  } else {
  //    if(weatherInfo.temp >= 15 && weatherInfo.temp <= 30){
  //      setImage(NORMAL_HEAT);
  //    }
  //   //  else if( weatherInfo.temp > 30){
  //   //    setImage(EXTREME_HEAT) }
  //   //  else if (weatherInfo.temp > 5 && weatherInfo.temp < 15){
  //   //    setImage(NORMAL_COLD);
  //   //  }
  //   //  else{
  //   //   setImage(EXTREM_COLD);
  //   //  }
  // }

// {weatherInfo.humidity > 80  ? RAIN : ( (weatherInfo.temp >= 15 && weatherInfo.temp <= 30)  ? NORMAL_HEAT : ( (weatherInfo.temp > 30) ? EXTREME_HEAT : ( (weatherInfo.temp > 5 && weatherInfo.temp < 15) ? NORMAL_COLD : EXTREM_COLD)  ))}

  return (
    <div className='Display'>
      <Card sx={{ maxWidth: 600 , borderRadius: 10}} className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={weatherInfo.humidity > 80  ? RAIN : ( (weatherInfo.temp >= 15 && weatherInfo.temp <= 30)  ? NORMAL_HEAT : ( (weatherInfo.temp > 30) ? EXTREME_HEAT : ( (weatherInfo.temp > 5 && weatherInfo.temp < 15) ? NORMAL_COLD : EXTREM_COLD)  ))}
          alt=""
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {weatherInfo.city} {weatherInfo.humidity > 80  ? <ThunderstormIcon></ThunderstormIcon> : ( (weatherInfo.temp >= 15 && weatherInfo.temp <= 30)  ? <WbSunnyIcon></WbSunnyIcon> : ( (weatherInfo.temp > 30) ? <WbSunnyIcon></WbSunnyIcon> : ( (weatherInfo.temp > 5 && weatherInfo.temp < 15) ? <AcUnitIcon></AcUnitIcon> : <AcUnitIcon></AcUnitIcon>)  ))}
            
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
          <b>
           <p>Current Temperature: {weatherInfo.temp}&deg;C</p>
           <p>Minimum Temperature: {weatherInfo.tempMin}&deg;C</p> 
           <p>Maximum Temperature: {weatherInfo.tempMax}&deg;C</p>
           <p>Humidity: {weatherInfo.humidity}</p>
           <p> The weather can be described as {weatherInfo.weather} and feels like {weatherInfo.feelsLike}&deg;C </p>
           </b>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default ShowResponse
