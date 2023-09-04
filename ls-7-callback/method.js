// * forEach() method callback

// var courses = [
//     'Javascript',
//     'Ruby',
//     'PHP'
// ]

// Array.prototype.myForeach = function (callback) {
//     for (var index in this) {
//         if(this.hasOwnProperty(index)) {
//             callback(this[index], index, this);
//         }
//     }
// }

// console.log(courses);

// var learn = courses.myForeach((course, index, array) => {
//     console.log(course, index, array)
// })


// * filter() method callback

// Array.prototype.myFilter = function (callback) {
//     var output = [];
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this);
//             if(result) {
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output;
// }

// var course = [
//     {
//         name: "Javascript",
//         coin: 0,
//     },
//     {
//         name: "HTML, CSS",
//         coin: 680,
//     },
//     {
//         name: "Ruby",
//         coin: 860,
//     },
//     {
//         name: "Ruby",
//         coin: 720,
//     }
// ]

// var filterCourses = course.myFilter((course, index, array) => {
//     return course.coin > 700;
// })

// console.log(filterCourses);

// * mySome() method callback

var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: false,
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: true,
    },
    {
        name: 'Ruby',
        coin: 860,
        isFinish: false,
    },
];

Array.prototype.mySome = function(cb) {
    for(var index in courses) {
        if(this.hasOwnProperty(index)) {
            if(cb(this[index]), index, this) {
                return true;
            }
        }
        return false;
    }
}

console.log(courses.mySome((course, index, array) => {
    return course.isFinish === true;
}));






