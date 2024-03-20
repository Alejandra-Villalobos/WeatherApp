import React from "react";
import { Forecast } from "../interfaces/Weather";

type Props = {
  forecast: Forecast[];
};

function ForecastCards({ forecast } : Props) {
  

  return (
    <div className="flex 2xl:justify-center justify-start py-2 gap-4 px-4 overflow-x-scroll w-full h-full">
      {forecast.map((card) => (
        <div className="items-center min-w-56 p-5 flex flex-col text-xl text-center bg-white rounded-md" key={card.date}>
          <p className="font-bold text-xl py-2">{card.date.slice(5).split('-').reverse().join('/')}</p>
          <div className="flex justify-center items-center">
            <img
              src={require(`../assets/${card.icon}.png`)}
              alt={card.description}
            />
          </div>
          <p className="font-bold text-xl py-2">
            {card.temperatureMax.toFixed(0)}°C/{card.temperatureMin.toFixed(0)}°C
          </p>
          <p className="italic text-xl">{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ForecastCards;
