import React from "react";
import axios from "axios";

const Form = ({ cityName, setCityName, setWeather, setError }) => {
  const getWeatherData = (e) => {
    e.preventDefault();
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3261eea11c60d266919bac0e631ae33e`
    )
      .then(({ data }) => {
        setWeather(data);
        setCityName("");
        setError(false);
      })
      .catch(() => {
        setWeather(null);
        setError(true);
      });
  };

  const inputHandler = (e) => {
    setCityName(e.target.value);
  };

  return (
    <form onSubmit={getWeatherData}>
      <label>
        <input
          type="text"
          placeholder="Введите город"
          value={cityName}
          onChange={inputHandler}
        />
        <button type="submit">Найти</button>
      </label>
    </form>
  );
};

export default Form;
