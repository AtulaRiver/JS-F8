//* DOM Events
//* 1. Attribute events
//* 2. Assign event using the element node

var h2Elements = document.querySelectorAll('h2');

h2Elements.forEach((a) => {
    return a.onclick = function(e) {
        console.log(e.target.innerText);
    }
})


