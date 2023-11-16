import "./Main.css";
import { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Main() {
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState({});
  // New location coordinates (Example: New York City)
  const lat = "40.7128";
  const lon = "-74.0060";
  const APIkey = "d97247090d05a055c938b8972cec9430"; 

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(` HTTP Error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((actualData) => {
        setWeatherData(actualData);
        setLoadingData(false);
        // console.log(actualData)
      })
      .catch((err) => {
        setError(err.message);
        setLoadingData(false);
      });
  }, [lat, lon, APIkey]);

  // Helper function to convert Kelvin to Celsius
  const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);

  // Render
  return (
    <TransitionGroup>
      {loadingData && (
        <CSSTransition timeout={500} classNames="fade">
          <div>Loading...</div>
        </CSSTransition>
      )}
      {error && (
        <CSSTransition timeout={500} classNames="fade">
          <div>Error: {error}</div>
        </CSSTransition>
      )}
      {!loadingData && !error && weatherData.main && (
        <CSSTransition timeout={500} classNames="fade">
          <div>
            <p>Location: {weatherData.name}</p>
            <p>Temperature: {kelvinToCelsius(weatherData.main.temp)}&#8451;</p>
            <p>Min Temperature: {kelvinToCelsius(weatherData.main.temp_min)}&#8451;</p>
            <p>Max Temperature: {kelvinToCelsius(weatherData.main.temp_max)}&#8451;</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            <p>Wind Degree: {weatherData.wind.deg}&deg;</p>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
}

export default Main;
