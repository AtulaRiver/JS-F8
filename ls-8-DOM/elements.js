// * Class name

var classHeading = document.getElementsByClassName('heading');

console.log(classHeading);

for(var i of classHeading) {
    console.log(i);
}

//* Id name

var idHeading = document.getElementById('idHeading');
console.log(idHeading);

// * Tag name

var tagHeading = document.getElementsByTagName('p');
console.log(tagHeading);

// * CSS selector

var cssHeading = document.querySelector('h3');
console.log(cssHeading);

// * CSS selector all

var cssAllHeading = document.querySelectorAll('.river');
console.log(cssAllHeading);

//* test
//* method 1:
var listItemNodes = document.querySelectorAll('.box-1 li');

console.log(listItemNodes);

//* method 2:
var boxNode = document.querySelector('.box-1');
console.log(boxNode.querySelectorAll('li'));