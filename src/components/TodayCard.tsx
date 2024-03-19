import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { TodayWeather } from "../interfaces/Weather";
import { getWeatherByCity } from "../helpers/weather";

function TodayCard() {
  const handleWeather = async () => {
    try {
      await getWeatherByCity("Ayutuxtepeque").then((response: any) =>
        setToday({
          city: response.resolvedAddress,
          temperature: response.currentConditions.temp,
          description: response.currentConditions.conditions,
          icon: response.currentConditions.icon,
          humidity: response.currentConditions.humidity,
          windSpeed: response.currentConditions.windspeed,
        })
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    //handleWeather();
  }, []);

  const [today, setToday] = useState<TodayWeather>({
    city: "San Salvador",
    temperature: 30,
    description: "Soleado",
    icon: "clear-night",
    humidity: 91,
    windSpeed: 0.78,
  });

  return (
    <Card className="items-center w-3/12 flex flex-col text-xl text-center">
      <p className="font-bold text-xl py-2">{today.city}</p>
      <p className="italic py-2">Today</p>
      <div className="flex justify-center items-center">
        <img
          src={require(`../assets/${today.icon}.png`)}
          alt={today.description}
        />
      </div>
      <p className="font-bold text-4xl py-2">
        {today.temperature.toFixed(0)}°C
      </p>
      <p className="italic text-2xl">{today.description}</p>
      <div className="flex gap-10 mt-4 justify-center">
        <p>
          Humedad
          <br />
          <span className="font-bold text-xl">{today.humidity}%</span>
        </p>
        <p>
          Viento
          <br />
          <span className="font-bold text-xl">{today.windSpeed}m/s</span>
        </p>
      </div>
    </Card>
  );
}

export default TodayCard;
