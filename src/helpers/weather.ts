import axios from "axios";
import { toast } from "react-toastify";

const getWeather = (location: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=metric&include=days%2Ccurrent&lang=es&key=${process.env.REACT_APP_KEY}&contentType=json`
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

export { getWeather };
