import React, { useState } from "react";
import {
  TiWeatherSunny,
  TiWeatherPartlySunny,
  TiWeatherCloudy,
  TiWeatherWindyCloudy,
  TiWeatherShower,
  TiWeatherDownpour,
  TiWeatherStormy,
  TiWeatherSnow,
  TiWeatherWindy,
} from "react-icons/ti";
import { Card } from "antd";
import { TodayWeather } from "../interfaces/Weather";

function TodayCard() {
  const [today, setToday] = useState<TodayWeather>({
    city: "San Salvador",
    temperature: 30,
    description: "Soleado",
    icon: "a",
    humidity: 91,
    windSpeed: 0.78,
  });

  return (
    <Card className="items-center w-3/12 flex flex-col text-xl text-center">
        <p className="font-bold text-3xl py-2">{today.city}</p>
      <TiWeatherSunny size={100} color="yellow" className="w-full" />
      <p className="font-bold text-4xl py-2">{today.temperature}°C</p>
      <p className="italic text-2xl">{today.description}</p>
      <div className="flex gap-10 mt-4">
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
