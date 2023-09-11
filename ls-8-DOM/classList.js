//* ClassList Property

//* add
//* contains
//* remove
//* toggle

var boxElement = document.querySelector('.box');

// console.log(boxElement.classList);
// console.log(boxElement.classList[0]);
// console.log(boxElement.classList.values);

boxElement.classList.add('red', 'blue', 'green');

// console.log(boxElement.classList.contains('red'));

// boxElement.classList.remove('red');

setTimeout(() => {
    boxElement.classList.remove('red');
}, 3000);

setInterval(() => {
    boxElement.classList.toggle('blue')
}, 1000);

console.log(boxElement);


