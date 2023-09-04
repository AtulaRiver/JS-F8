// Callback
// 1. Là hàm
// 2. Truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)


// function myFunction(param) {
//     param('Hoc lap trinh');
// }

// function myCallback(value) {
//     console.log('Value:', value);
// }

// myFunction(myCallback);

// function sumCb(a, b) {
//     return a + b;
// }

// function calculate(a, b, cb) {
//     return cb(a, b);
// }

// console.log(calculate(1, 2, sumCb));

// var courses = [
//     'Java',
//     'JS',
//     'PHP'
// ]

var courses = [
    {
        name: 'HTML - CSS Pro',
        price: 0
    },
    {
        name: 'Javascript Pro',
        price: 0
    },
    {
        name: 'Ruby',
        price: 100
    },
    {
        name: 'Ruby',
        price: 100
    }
]

// courses.map(function(course) {
//     console.log(`${course}`);
// })

// Array.prototype.map2 = function(callback) {
//     var output = [], arrLength = this.length;
//     for(let i = 0; i < arrLength; i++) {
//         var result = callback(this[i]);
//         output.push(result);
//     }
//     return output;
// }

// var htmls = courses.map2(function(course) {
//     return `<h2>${course}</h2> \n`;
// })

// console.log(htmls.join(''));

// Array.prototype.forEach2 = function(callback) {
//     var arrLength = this.length;
//     for(let i = 0; i < arrLength; i++) {
//         callback(this[i]);
//     }
// }

// var htmls = courses.forEach2(function(course) {
//     console.log(course); 
// })

// Array.prototype.myEvery = function(callback) {
//     var arrLength = this.length;
//     for(let i = 0; i < arrLength; i++) {
//         if(!callback(this[i])) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(courses.myEvery(function(course) {
//     return course.price == 0;
// }));

// Array.prototype.mySome = function(callback) {
//     var arrLength = this.length;
//     for(let i = 0; i < arrLength; i++) {
//         if(callback(this[i])) {
//             return true;
//         }
//     }
//     return false;
// }

// var isFree1 = courses.some(function(course) {
//     return course == 0;
// })

// console.log(isFree1);

// Array.prototype.myFind = function(callback) {
//     var arrLength = this.length;
//     for(let i = 0; i < arrLength; i++) {
//         if(callback(this[i])) {
//             return this[i]
//         }
//     }
// }

// var isJs = courses.myFind(function (course, index) {
//     return course.name == 'Javascript Pro';
// })

// console.log(isJs);

// Array.prototype.myFilter = function(cb) {
//     var output = [], arrLength = this.length;
//     for(let i = 0; i < arrLength; i++) {
//         if(cb(this[i])) {
//             output.push(this[i]);
//         }
//     }
//     return output;
// }

// var list = courses.myFilter(function(course) {
//     return course.name == 'Ruby';
// })

// console.log(list);


// var courses = ['PHP', 'JS', 'Java'];

// courses.length = 10;

// for(var key of courses) {
//     console.log(key);
// }