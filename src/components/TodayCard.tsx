import { Card } from "antd";
import { TodayWeather } from "../interfaces/Weather";

function TodayCard({ city, temperature, icon, description, humidity, windSpeed } : TodayWeather) {

  return (
    <Card className="items-center w-3/12 flex flex-col text-xl text-center">
      <p className="font-bold text-xl py-2">{city}</p>
      <p className="italic py-2">Hoy</p>
      <div className="flex justify-center items-center">
        <img
          src={require(`../assets/${icon}.png`)}
          alt={description}
        />
      </div>
      <p className="font-bold text-4xl py-2">
        {temperature?.toFixed(0)}°C
      </p>
      <p className="italic text-2xl">{description}</p>
      <div className="flex gap-10 mt-4 justify-center">
        <p>
          Humedad
          <br />
          <span className="font-bold text-xl">{humidity}%</span>
        </p>
        <p>
          Viento
          <br />
          <span className="font-bold text-xl">{windSpeed}m/s</span>
        </p>
      </div>
    </Card>
  );
}

export default TodayCard;
