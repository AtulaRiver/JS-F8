//* DOM CSS
var boxElement = document.querySelector('.box');

// boxElement.style.backgroundColor = 'red';

Object.assign(boxElement.style, {
    width:'200px',
    height: '200px',
    backgroundColor: 'green'
});

console.log(boxElement.style.backgroundColor);