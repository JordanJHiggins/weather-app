function createElement(tag, className) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);

  return element;
}

export default function renderLocationInput() {
  const rootElement = document.getElementById('root');

  const inputCard = createElement('div', 'input-card');

  const locationInput = createElement('input', 'location-input');
  locationInput.type = 'text';

  const locationSubmit = createElement('button', 'location-submit');
  locationSubmit.innerText = 'Search';
  inputCard.append(locationInput, locationSubmit);
  rootElement.appendChild(inputCard);
}
