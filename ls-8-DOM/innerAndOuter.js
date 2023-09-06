//* innerHTML

var innerElement = document.querySelector('.inner');

innerElement.innerHTML = '<h1 style="color: red;">Hello World!</h1>';

console.log(innerElement.innerHTML);

//* outerHTML

var outerHTML = document.querySelector('.outer');

console.log(outerHTML.outerHTML);


var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var html = courses.map((a, b) => {
        return `<li>${a}</li>`;
    })
    return document.querySelector('ul').innerHTML = html.join('');
}

render(courses);