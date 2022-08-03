import "./style.css";

const component = () => {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  //  element.innerHTML = _.join(['Hello123', 'webpack'], ' ');
  //  element.classList.add('hello');

  // Add the image to our existing div.

  return element;
}

document.body.appendChild(component());
