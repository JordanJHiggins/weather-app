// Takes in city name, converts name to lat and long for curren weather API
export async function getCoords(cityName) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=862bd6b42e2fcb43a8b4557d161e2601`
    );
    if (!response.ok) {
      throw new Error(`Cant find ${cityName}. Please try again.`);
    }
    const data = await response.json();

    const longitude = await data[0].lon;
    const latitude = await data[0].lat;

    return { latitude, longitude };
  } catch (err) {
    console.log(`Whoops, something went wrong! ${err}. Please try again.`);
  }
}

export async function getWeatherData(latitude, longitude) {
  try {
    const units = 'metric';

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=862bd6b42e2fcb43a8b4557d161e2601`
    );

    const currentWeather = await response.json();

    return currentWeather;
  } catch (err) {
    console.log(`Whoops, something went wrong! ${err}. Please try again.`);
  }
}
