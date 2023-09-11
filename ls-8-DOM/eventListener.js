var btn = document.querySelector('#btn');
console.log(btn);

// btn.onclick = function() {
//     console.log("viec 1");
//     console.log("viec 2");
//     alert('Viec 3');   
// }

// setTimeout(() => {
//     btn.onclick = () => {};
// }, 3000);

function job1(){
    console.log('viec 1');
}

// btn.addEventListener('click', (e) => {
//     console.log('Event 1');
// })
// btn.addEventListener('click', (e) => {
//     console.log('Event 2');
// })
// btn.addEventListener('click', (e) => {
//     console.log('Event 3');
// })

btn.addEventListener('click', job1);

setTimeout(() => {
    btn.removeEventListener('click', job1);
}, 3000);