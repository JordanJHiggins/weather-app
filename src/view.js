function createElement(tag, className) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);

  return element;
}

function clearView(view) {
  if (view.contains(document.querySelector('.weather-card'))) {
    document.querySelector('.weather-card').remove();
  }
}

function updateView(card) {
  const weatherContainer = document.querySelector('.weather-container');

  clearView(weatherContainer);

  weatherContainer.append(card);
}

export function renderLocationInput() {
  const rootElement = document.getElementById('root');

  const weatherContainer = createElement('div', 'weather-container');

  const inputCard = createElement('div', 'input-card');

  const locationInput = createElement('input', 'location-input');
  locationInput.type = 'text';

  const locationSubmit = createElement('button', 'location-submit');
  locationSubmit.innerText = 'Search';

  inputCard.append(locationInput, locationSubmit);
  rootElement.append(inputCard, weatherContainer);
}

export function renderWeatherCard(currentWeather) {
  const weatherCard = createElement('div', 'weather-card');

  const locationName = createElement('p', 'location-name');
  locationName.innerText = currentWeather.name;

  const temp = createElement('p', 'temp');
  temp.innerText = currentWeather.main.temp;

  const feelsLike = createElement('p', 'feels-like');
  feelsLike.innerText = currentWeather.main.feels_like;

  const humidity = createElement('p', 'humidity');
  humidity.innerText = currentWeather.main.humidity;

  weatherCard.append(locationName, temp, feelsLike, humidity);

  updateView(weatherCard);
}
