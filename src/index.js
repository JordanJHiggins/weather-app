import { getCoords, getWeatherData } from './openWeather';
import renderLocationInput from './view';
import './style.css';

function search() {
  const inputCard = document.querySelector('.input-card');

  inputCard.addEventListener('click', async (e) => {
    if (e.target.classList.contains('location-submit')) {
      const userLocation = document.querySelector('.location-input');

      const userCoordinates = await getCoords(userLocation.value);

      const currentWeather = getWeatherData(
        userCoordinates.latitude,
        userCoordinates.longitude
      );

      console.log(currentWeather);
    }
  });
}

renderLocationInput();
search();
