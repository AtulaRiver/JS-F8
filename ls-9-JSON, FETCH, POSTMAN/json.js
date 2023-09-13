//* JSON
//* - Là một định dạng dữ liệu (chuỗi)
//* - JavaScript Object Notation
//* - JSON: Number, Boolean, Null, Array, Object, String
//* - Mã hoá - Giải mã / Encode - Decode / 
//* Stringify: Từ JS types -> JSON
//* Parse: từ JSON -> JS types

var json = '["javascript", "PHP", "Ruby"]';

var jsonObject = '{"name":"River", "age":18}';

var a = '1';

var object = JSON.parse(jsonObject);
console.log(object);

console.log(JSON.stringify(["1", "2", "3"]));

