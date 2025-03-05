import React, { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography } from "@mui/material";
import "../styles/Weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2174c3c824364cb8bdf115820251702&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      alert("City not found!");
    }
  };

  return (
    <Container className="weather-container">
      <Typography variant="h4">Check Weather</Typography>
      <TextField 
        label="Enter City" 
        variant="outlined" 
        onChange={(e) => setCity(e.target.value)} 
      />
      <Button variant="contained" color="primary" onClick={fetchWeather}>
        Get Weather
      </Button>
      {weather && (
        <Typography variant="h6">
          {weather.name}: {weather.main.temp}°C, {weather.weather[0].description}
        </Typography>
      )}
    </Container>
  );
};

export default Weather;
