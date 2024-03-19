import axios from "axios";
import { toast } from "react-toastify";

const getWeatherByCity = (city: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=metric&include=days%2Ccurrent&lang=es&key=${process.env.REACT_APP_KEY}&contentType=json`
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log("Error:", error.response.data);
        reject(error);
      });
  });
};

export { getWeatherByCity };
