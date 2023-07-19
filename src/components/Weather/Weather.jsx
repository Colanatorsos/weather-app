import React from "react";

const Weather = ({ weather, getTime }) => {
  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(0);
  };

  return (
    <>
      {weather && (
        <div>
          <div>
            <p>{weather.name}</p>
            <p>
              <img
                src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                alt=""
              />{" "}
              {kelvinToCelsius(weather.main.temp)}°C
            </p>
          </div>
          <div>
            <p>Рассвет: {getTime(weather.sys.sunrise)}</p>
            <p>Закат: {getTime(weather.sys.sunset)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
