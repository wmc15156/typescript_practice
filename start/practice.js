"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const v1 = 123;
const v2 = () => console.log(123);
const size = 123;
const isBig = size >= 100;
const msg = isBig ? '크다' : '작다';
// 배열 타입설정
const values = [1, 2, 3, 4];
const values2 = [1, 2, 3, 4, 5];
// values.push('a')// 문자열 푸쉬하면 에러발생
values.push(5);
// 튜플선언 타입을 정해놓음 (배열에)
const data = [msg, size];
data[0].substr(1);
let test;
test = '1';
test = 1;
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 5] = "Banana";
    Fruit[Fruit["Orange"] = 6] = "Orange";
})(Fruit || (Fruit = {}));
console.log(Fruit.Apple, Fruit.Banana, Fruit.Orange);
