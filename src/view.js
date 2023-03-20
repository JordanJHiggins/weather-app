function createElement(tag, className) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);

  return element;
}

export default function renderLocationInput() {
  const rootElement = document.getElementById('root');

  const inputCard = createElement('div', 'input-card');

  rootElement.appendChild(inputCard);
}
