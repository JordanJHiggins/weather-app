import { getCoords, getWeatherData } from './openWeather';
import { renderHome, renderLocationInput, renderWeatherCard } from './view';
import './style.css';

function search() {
  const inputCard = document.querySelector('.input-card');

  inputCard.addEventListener('click', async (e) => {
    if (e.target.classList.contains('location-submit')) {
      const userLocation = document.querySelector('.location-input');

      if (userLocation.value !== '') {
        try {
          const userCoordinates = await getCoords(userLocation.value);

          const currentWeatherData = await getWeatherData(
            userCoordinates.latitude,
            userCoordinates.longitude
          );

          renderWeatherCard(currentWeatherData);
        } catch (err) {
          alert(
            `Cannot find location: ${userLocation.value}. Please enter a new location.`
          );
        }
      } else {
        alert('City name cannot be empty.');
      }
    }
  });
}

renderHome();
search();
