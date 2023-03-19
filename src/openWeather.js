// Takes in city name, converts name to lat and long for curren weather API
export async function getCoords(cityName) {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=862bd6b42e2fcb43a8b4557d161e2601`
  );

  const data = await response.json();
  const longitude = await data[0].lon;
  const latitude = await data[0].lat;

  console.log(longitude, latitude);

  return { latitude, longitude };
}

export async function getWeatherData(latitude, longitude) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=862bd6b42e2fcb43a8b4557d161e2601`
  );

  const currentWeather = await response.json();

  console.log(currentWeather);
}
