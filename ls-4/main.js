// Object Contructor

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// var author = new User('Jang', 'Nguyen', 'Avatar');
// var user = new User('River', 'Nguyen', 'Avatar');

// User.prototype.className = 'F8';
// console.log(user);

// author.title = 'Chia se cho thay di!';
// user.comment = 'Ok mai yeu thay <3';

// var date = new Date();
// console.log(date.getFullYear());

//for

// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]

// var arrLength = orders.length;

// function getTotal(arr) {
//     var total = 0;
//     for(var i = 0; i < arrLength; i++) {
//         total += arr[i].price;
//     }
//     return total;
// }

// console.log(getTotal(orders)); 

//for in

// function run(object) {
//     var arr = [];
//     for(var key in object) {
//         arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
//     }
//     return arr;
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]



//for of

var object = {
    name: 'jang',
    age: 18
};

function log(obj) {
    for(var key of Object.values(obj)) {
        console.log(key);
    }
}

log(object);

function log1(obj) {
    for(var key of Object.keys(obj)) {
        console.log(key);
    }
}

log1(object);


