import React, { useState } from "react";
import Form from "../Form/Form";
import Error from "../Error/Error";
import Weather from "../Weather/Weather";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState(false);

  const getTime = (timeStamp) => {
    const time = new Date(timeStamp * 1000);
    const h = time.getHours();
    const m = time.getMinutes();
    return `${h} : ${m}`;
  };

  return (
    <div>
      {
        <Form
          cityName={cityName}
          setCityName={setCityName}
          setWeather={setWeather}
          setError={setError}
        />
      }
      <Weather weather={weather} getTime={getTime} />
      <Error error={error} />
    </div>
  );
};

export default App;
