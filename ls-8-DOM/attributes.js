//* DOM Attribute

var headingElement = document.querySelector('h1');

headingElement.className = 'heading';

headingElement.setAttribute('id', 'headingId');

headingElement.setAttribute('style', 'color: red;')

console.log(headingElement.getAttribute('id'));

console.log(headingElement);