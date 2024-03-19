import React, { useEffect, useState } from "react";
import TodayCard from "./components/TodayCard";
import { getWeather } from "./helpers/weather";
import { Forecast, TodayWeather } from "./interfaces/Weather";
import SearchBar from "./components/SearchBar";
import ForecastCards from "./components/ForecastCards";

function App() {
  const [search, setSearch] = useState<string>("");
  const [today, setToday] = useState<TodayWeather>();
  const [forecast, setForecast] = useState<Forecast[]>([]);

  const handleWeather = async (location: string) => {
    try {
      await getWeather(location).then((response: any) => {
        setToday({
          city: response.resolvedAddress,
          temperature: response.currentConditions.temp,
          description: response.currentConditions.conditions,
          icon: response.currentConditions.icon,
          humidity: response.currentConditions.humidity,
          windSpeed: response.currentConditions.windspeed,
        });

        const forecastArr: Forecast[] = [];
        for(let i = 1; i <= 6; i++){
          forecastArr.push({
            date: response.days[i].datetime,
            temperatureMax: response.days[i].tempmax,
            temperatureMin: response.days[i].tempmin,
            description: response.days[i].conditions,
            icon: response.days[i].icon,
          })
        }
        setForecast(forecastArr);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setSearch(`${latitude}, ${longitude}`);
        console.log(latitude);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (search !== "") handleWeather(search);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  return (
    <div className="w-screen min-h-screen h-max bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-center">
      <h1 className="font-bold italic">Weather App</h1>
      <SearchBar setLocation={setSearch} />
      {today && forecast ? (
        <>
          <TodayCard
            city={today.city}
            temperature={today.temperature}
            description={today.description}
            icon={today.icon}
            humidity={today.humidity}
            windSpeed={today.windSpeed}
          />
          <p>Pronóstico próximos 6 días</p>
          <ForecastCards forecast={forecast} />
        </>
      ) : (
        <p>Weather App</p>
      )}
    </div>
  );
}

export default App;
