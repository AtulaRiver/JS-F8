// function check() {
//     return Number.isFinite(2);
// }

// console.log(check());

function isNumber(value) {
    return typeof value == 'number' && !isNaN(value)
}




// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false

// Number
// Phương thức	Vai trò
// Number.isFinite()	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
// Number.isInteger()	Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
// Number.parseFloat()	Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
// Number.parseInt()	Chuyển đổi chuỗi đã cho thành một số nguyên
// Number.prototype.toFixed()	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
// Number.prototype.toString()	Chuyển đổi và trả về số đã cho dưới dạng chuỗi