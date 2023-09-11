//* DOM Events
//* 1. Attribute events
//* 2. Assign event using the element node

var h2Elements = document.querySelectorAll('h2');
var h2Element = document.querySelector('h2');
h2Elements.forEach((a) => {
    return a.onclick = function (e) {
        console.log(e.target.innerText);
    }
})

h2Element.onclick = function (e) {
    console.log(e.target.innerText);
}

//* 3. Input / select

var inputValue;

var inputElement = document.querySelector('input[type="text"]');
inputElement.onchange = function (e) {
    inputValue = e.target.value;
}

// inputElement.oninput = function(e) {
//     console.log(e.target.value);
// }

var inputElement1 = document.querySelector('input[type="checkbox"]');

inputElement1.onchange = function (e) {
    console.log(e.target.checked);
}

var selectElement = document.querySelector('select');

selectElement.onchange = function (e) {
    console.log(e.target.value);
}

//* 4. Key up / down

var keyElement = document.querySelector('.name');

// keyElement.onkeydown = function(e) {
//     console.log(e.target.value);
// }

keyElement.onkeydown = function (e) {
    console.log(e.which);
}

document.onkeydown = function (e) {
    switch (e.which) {
        case 27:
            console.log('Exiting...');
            break;
    }
}

//* 5. PreventDefault: Ngăn chặn hành vi mặc định của html
var aElement = document.querySelectorAll('a');
aElement.forEach((a) => {
    a.onclick = function (e) {
        if (!e.target.href.startsWith('http://fb.com')) {
            e.preventDefault();
        }
    };
})

var ulElement = document.querySelector('ul');

ulElement.onmousedown = (e) => {
    e.preventDefault();
}

ulElement.onclick = (e) => {
    console.log(e.target);
}
//* 6. StopPropagation: Ngăn chặn sự nổi bọt

document.querySelector('div').onclick = (e) => {
    console.log("DIV");   
};
document.querySelector('button').onclick = (e) => {
    e.stopPropagation();
    console.log("Click Me");   
};






