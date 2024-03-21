import axios from "axios";

const getLocation = (lat: number, lon: number) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://us1.locationiq.com/v1/reverse?key=${process.env.REACT_APP_LOCATION_KEY}&lat=${lat}&lon=${lon}&format=json&`
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

export { getLocation };