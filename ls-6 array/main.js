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
        price: 0
    }
]

// var numbers = [100, 100, 100];

// var totalNumber = numbers.reduce(function (total, number) {
//     return total + number
// })

// console.log(totalNumber);

// courses.forEach(function (course) {
//     console.log(course);
// })

// var isFree = courses.every(function (course, index) {
//     return course.price === 0;
// })



// var isFree1 = courses.some(function (course, index) {
//     return course.price === 0;
// })

// console.log(isFree1);

// var isRuby = courses.find(function (course, index) {
//     return course.name == 'Ruby';
// })

var list = courses.filter(function (course, index) {
    return course.name == 'Ruby';
})


// console.log(isFree);
// console.log(isFree1);
// console.log(isRuby);
console.log(list);

// var newCourses = courses.map(function (course, index, originArray) {
//     return {
//         id: index + 1,
//         name: `Khoa hoc: ${course.name}`,
//         price: course.price,
//         priceText: `Gia: ${course.price}`,
//         originArray: originArray
//     }
// });

// console.log(newCourses);

// var i = 0;
// var totalCoin = courses.reduce(function (accumulator, currentValue, currentIndex, originArray) {
//     i++;
//     var total = accumulator + currentValue.price;
//     console.table({
//         'Lượt chạy:': i,
//         'Biến lưu trữ:': accumulator,
//         'Đơn giá:': currentValue.price,
//         'Tổng tiền:': total
//     })
//     return total;
// }, 0)

// var totalCoin = courses.reduce((a, b) => a + b.price, 0);
// console.log(totalCoin);

// Flat - làm phẳng mảng từ depth array - "mảng sâu"
// var depthArr = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArr = depthArr.reduce(function (flatOutput, depthItem) {
//     return flatOutput.concat(depthItem)
// }, [])

// console.log(flatArr);

// var topics = [
//     {
//         topic: "Front-End",
//         courses: [
//             {
//                 id: 1,
//                 title: "HTML, CSS"
//             },
//             {
//                 id: 2,
//                 title: "Javascript"
//             }
//         ]
//     },
//     {
//         topics: "Back-End",
//         courses:
//             [
//                 {
//                     id: 1,
//                     title: "PHP"
//                 },
//                 {

//                     id: 2,
//                     title: "NodeJS"
//                 }]
//     }];

// var newLearn = topics.reduce(function(courses, topic) {
//     return courses.concat(topic.courses)
// }, [])

// console.log(newLearn);

// var html = newLearn.map(function(learn) {
//     return `
//     <div>
//         <h2>ID: ${learn.id} </h2>
//         <p>${learn.title}</p>
//     </div>
//     `
// })

// console.log(html.join(''));


// var watchList = [
//     {
//         "Title": "Inception",
//         "Year": "2010",
//         "Rated": "PG-13",
//         "Released": "16 Jul 2010",
//         "Runtime": "148 min",
//         "Genre": "Action, Adventure, Crime",
//         "Director": "Christopher Nolan",
//         "Writer": "Christopher Nolan",
//         "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//         "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//         "Language": "English, Japanese, French",
//         "Country": "USA, UK",
//         "imdbRating": "8.8",
//         "imdbVotes": "1,446,708",
//         "imdbID": "tt1375666",
//         "Type": "movie",
//     },
//     {
//         "Title": "Interstellar",
//         "Year": "2014",
//         "Rated": "PG-13",
//         "Released": "07 Nov 2014",
//         "Runtime": "169 min",
//         "Genre": "Adventure, Drama, Sci-Fi",
//         "Director": "Christopher Nolan",
//         "Writer": "Jonathan Nolan, Christopher Nolan",
//         "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//         "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//         "Language": "English",
//         "Country": "USA, UK",
//         "imdbRating": "8.6",
//         "imdbVotes": "910,366",
//         "imdbID": "tt0816692",
//         "Type": "movie",
//     },
//     {
//         "Title": "The Dark Knight",
//         "Year": "2008",
//         "Rated": "PG-13",
//         "Released": "18 Jul 2008",
//         "Runtime": "152 min",
//         "Genre": "Action, Adventure, Crime",
//         "Director": "Christopher Nolan",
//         "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//         "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//         "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//         "Language": "English, Mandarin",
//         "Country": "USA, UK",
//         "imdbRating": "9.0",
//         "imdbVotes": "1,652,832",
//         "imdbID": "tt0468569",
//         "Type": "movie",
//     },
//     {
//         "Title": "Batman Begins",
//         "Year": "2005",
//         "Rated": "PG-13",
//         "Released": "15 Jun 2005",
//         "Runtime": "140 min",
//         "Genre": "Action, Adventure",
//         "Director": "Christopher Nolan",
//         "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//         "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//         "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//         "Language": "English, Urdu, Mandarin",
//         "Country": "USA, UK",
//         "imdbRating": "8.3",
//         "imdbVotes": "972,584",
//         "imdbID": "tt0372784",
//         "Type": "movie",
//     },
//     {
//         "Title": "Avatar",
//         "Year": "2009",
//         "Rated": "PG-13",
//         "Released": "18 Dec 2009",
//         "Runtime": "162 min",
//         "Genre": "Action, Adventure, Fantasy",
//         "Director": "James Cameron",
//         "Writer": "James Cameron",
//         "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//         "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//         "Language": "English, Spanish",
//         "Country": "USA, UK",
//         "imdbRating": "7.9",
//         "imdbVotes": "876,575",
//         "imdbID": "tt0499549",
//         "Type": "movie",
//     }
// ];

// function calculateRating(arr) {
//     var movieName = arr.filter(function(name) {
//         return name.Director ==  'Christopher Nolan';
//     });

//     var totalPoint = movieName.reduce(function(total, movie) {
//         return total + parseFloat(movie.imdbRating);
//     }, 0) ;
//     return totalPoint/movieName.length
// }

// console.log(calculateRating(watchList)); // Output: 8.675

// Array.prototype.reduce2 = function(callback, result) {
//     let i = 0
//     if(arguments.length < 2) {
//         i = 1;
//         result = this[0];
//     }
//     for(; i < this.length; i++) {
//         result = callback(result, this[i], i, this)
//     }
//     return result;
// }

// const numbers = [1, 2, 3, 4, 5]

// const total = numbers.reduce2((total, number) => {
//     return total + number
// })

// console.log(total);


// function arrToObj(arr) {
//     return arr.reduce((obj, item) => {
//         obj[item[0]] = item[1];
//         return obj;
//     }, {})
// }
 
// // Expected results:
// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];
// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

// var title = 'River';
// console.log(title.includes('River'));







