/*
    Làm việc với array
    1. To String
    2. Join: array -> string
    3. Pop: Xóa element cuối mảng và trả về phần tử bị xóa(string)
    4. Push: Thêm phần tử vào cuối array và trả về length của array
    5. Shift: Xóa element đầu mảng và return element bị xóa
    6. Unshift: Thêm phần tử vào đầu array và trả về length của array
    7. Spilicing: Xóa, chèn, cắt
    8. Concat: Hợp 2 array
    9. Slicing: Cắt array
*/
var languages = ['PHP', 'JS', 'Java'];
var languages2 = ['Ruby', 'CSS'];
// 1
// console.log(languages.toString());

// 2
// console.log(languages.join(', '));

//3
// languages.pop();
// console.log(languages);

//4
// console.log(languages.push('Giang', 'SQL'));
// console.log(languages);

//5
// console.log(languages.shift());
// console.log(languages);

//6
// console.log(languages.unshift('Jang', 'River'));
// console.log(languages);

//7
//Xóa:
// languages.splice(1, 2);
//Chèn: 
// languages.splice(1, 1, 'Jang');
//Cắt:
// console.log(languages.splice(1, 2));
// console.log(languages);

//8
// console.log(languages.concat(languages2));

//9
// console.log(languages.slice(0, 1));

// var fname = ['jang', 'river', 'giang'];
// for (ten of fname) {
//     console.log(ten);
// }
