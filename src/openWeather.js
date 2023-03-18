// Takes in city name, converts name to lat and long for curren weather API
export default async function getCoords(cityName) {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=Fredericton&limit=5&appid=862bd6b42e2fcb43a8b4557d161e2601`
  );

  const data = await response.json();
  const longitude = await data[0].lat;
  const latitude = await data[0].lon;

  console.log(longitude, latitude);
}
