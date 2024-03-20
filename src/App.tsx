import React, { useEffect, useState } from "react";
import TodayCard from "./components/TodayCard";
import { getWeather } from "./helpers/weather";
import { Forecast, TodayWeather } from "./interfaces/Weather";
import SearchBar from "./components/SearchBar";
import ForecastCards from "./components/ForecastCards";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [search, setSearch] = useState<string>("");
  const [today, setToday] = useState<TodayWeather>();
  const [forecast, setForecast] = useState<Forecast[]>([]);

  const handleWeather = async (location: string) => {
    try {
      await getWeather(location).then((response: any) => {
        setToday({
          city: response.resolvedAddress === response.address ? response.timezone : response.resolvedAddress,
          sunrise: response.currentConditions.sunrise,
          sunset: response.currentConditions.sunset,
          temperature: response.currentConditions.temp,
          description: response.currentConditions.conditions,
          icon: response.currentConditions.icon,
          humidity: response.currentConditions.humidity,
          windSpeed: response.currentConditions.windspeed,
        });
        const forecastArr: Forecast[] = [];
        for (let i = 1; i <= 6; i++) {
          forecastArr.push({
            date: response.days[i].datetime,
            temperatureMax: response.days[i].tempmax,
            temperatureMin: response.days[i].tempmin,
            description: response.days[i].conditions,
            icon: response.days[i].icon,
          });
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
      <ToastContainer />
      <h1 className="text-3xl mt-4">Weather App</h1>
      <SearchBar setLocation={setSearch} />
      {today && forecast ? (
        <>
          <TodayCard
            city={today.city}
            sunrise={today.sunrise}
            sunset={today.sunset}
            temperature={today.temperature}
            description={today.description}
            icon={today.icon}
            humidity={today.humidity}
            windSpeed={today.windSpeed}
          />
          <p className="p-4 text-xl">Pronóstico próximos 6 días</p>
          <ForecastCards forecast={forecast} />
        </>
      ) : (
        <p className="text-3xl italic text-gray-700">Realiza una búsqueda o activa los permisos de ubicación</p>
      )}
    </div>
  );
}

export default App;
