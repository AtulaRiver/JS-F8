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

