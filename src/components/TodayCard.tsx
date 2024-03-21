import { TodayWeather } from "../interfaces/Weather";

function TodayCard({
  city,
  sunrise,
  sunset,
  temperature,
  icon,
  description,
  humidity,
  windSpeed,
}: TodayWeather) {
  return (
    <div key={city} className="items-center justify-center sm:w-max w-10/12 flex lg:flex-row flex-col text-xl text-center bg-white rounded-md p-4 animate-fadeBounce">
      <div className="p-3 border-b-2 lg:border-r-2 lg:border-b-0">
        <p className="font-bold text-xl py-2">{city}</p>
        <p className="italic py-2">Hoy</p>
        <div className="flex justify-center items-center">
          <img src={require(`../assets/${icon}.png`)} alt={description} />
        </div>
        <div className="flex justify-between gap-3 items-end">
          <p>
            Amanecer
            <br />
            <span className="font-bold text-xl">{sunrise}</span>
          </p>
          <p className="font-bold text-xl py-2">{temperature?.toFixed(0)}°C</p>
          <p>
            Anochecer
            <br />
            <span className="font-bold text-xl">{sunset}</span>
          </p>
        </div>
      </div>
      <div className="p-3">
        <p className="italic text-2xl">{description}</p>
        <div className="flex gap-8 mt-4 justify-center">
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
      </div>
    </div>
  );
}

export default TodayCard;
