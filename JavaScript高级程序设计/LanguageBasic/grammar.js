/*
    title: grammar (语法)
*/

// 严格模式 "use strict"
/*
// 严格模式是ES5新增的概念
// 严格模式是一种特殊的执行模式，它使得Javascript在更严格的条件下运行。
// 如何开启严格模式
// 1. 在全局作用域的开头写上"use strict"
// 2. 在函数的开头写上"use strict"
// 3. 在eval的代码段开头写上"use strict"
*/
// "use strict";

// 变量
/*
ES变量是松散类型的，可以用来保存任何类型的数据
有3个关键字用于声明变量：var, let, const
var可以在ES的任何版本中使用，let和const是ES6新增的 
*/

/* 
var（关键字）
var声明的变量是函数级作用域，而不是块级作用域
var message = "Hello World！";
// var声明的变量可以被重复声明，而不会报错，但是会覆盖之前的值
message = 100;
// var声明的变量还会变成window对象的属性
console.log(window.message); // 100
// var声明的变量可以被删除
delete message;
// var（作用域）
var 关键字定义的变量的作用域是在它被声明的整个函数内有效，当函数执行完毕后，变量就会被销毁
function test() {
    var message = "Hello World";
    var x = 10;
}
console.log(message); // Hello World
console.log(x); // 报错
// var（声明提升）
function test() {
    console.log(message); // undefined
    var message = "Hello World";
}
上方的代码并不会报错，因为在函数内部，变量声明会被提升到函数的顶部
相当于下方的代码
function test() {
    var message;
    console.log(message);
    message = "Hello World";
}
*/
/*
let（关键字）
let （作用域）
// let和var的作用域是不同的，let声明的变量只在块级作用域{}内有效
function test() {
    let message = "Hello World";
    let x = 10;
}
if (true) {
    let message = "Link";
}
console.log(message); // 报错
// 全局声明的let变量不会成为window对象的属性
let message = "Hello World";
console.log(window.message); // undefined
// let不允许在同一作用域中重复声明
let message = "Hello World";
let message = 100; // 报错

let （声明提升）
// let不会声明提升
function test() {
    console.log(message); // 报错
    let message = "Hello World";
}

// for循环中的let
// 在for循环中使用let声明的变量
for (let i = 0; i < 10; ++i) {
    setTimeout(() => console.log(i), 0)
}
// 这里会依次输出0-9
// 如果使用var声明
for (var i = 0; i < 10; ++i) {
    setTimeout(() => console.log(i), 0)
}
// 这里会输出10个10
// 为什么会这样？
// 当使用let声明时，i是块级作用域，每次循环都会创建一个新的i
// 当使用var声明时，i是全局变量，当循环结束时，i的值是10
// 因为setTimeout是异步的，当for循环结束时，才会去执行setTimeout
// 此时后续每一次执行的setTimeout在let的声明的变量的情况下每次访问的都是不同的i
// 而在var的情况下，每次访问的都是同一个i
*/
/*
// const（关键字）
// const的作用和let基本一样，但是const声明的变量是常量，一旦声明就不能被修改
const message = "Hello World";
message = "Link"; // 报错
// const声明的变量是块级作用域
if (true) {
    const message = "Link";
}
console.log(message); // 报错
// const声明的变量不会成为window对象的属性
const message = "Hello World";
console.log(window.message); // undefined
// const的常量限制的是变量的引用，而不是变量的值，所以const声明的对象可以修改对象的属性
const person = {
    name: "Link"
};
person.name = "Hello World"; // 不会报错
// const声明的变量必须初始化
const message; // 报错
*/

// 数据类型
// ES中有六种简单数据类型（也可以称作原始类型）：
// Undefined, Null, Boolean, Number, String, Symbol
// Symbol是ES6新增的数据类型
// 还有一种复杂数据类型：Object
/*
// typeof操作符
// typeof操作符的作用是返回一个值或者变量的数据类型
// typeof操作符返回的是一个字符串
// typeof是一个操作符，不是函数（但是也可以使用函数传参的方式）
// typeof操作符的返回值：
// "undefined" - 未定义的
// "object" - 对象或null
// "boolean" - 布尔值
// "number" - 数字
// "string" - 字符串
// "function" - 函数
// "symbol" - 符号（ES6新增）
let message = "Hello World";
console.log(typeof message); // string
console.log(typeof 100); // number
console.log(typeof(message)); // string
// typeof null返回的是object，这是一个历史遗留问题，实际上null是一个空指针对象
console.log(typeof null); // object
// 函数在ES中是对象的一种，但具有独特的属性和行为
// typeof 操作符是区分函数和其他对象的主要手段，返回 'function' 是其特性

*/

/*
// Undefined类型
// undefined类型只有一个值，即undefined
// 当使用let或者var声明一个变量但没有初始化时，它的值就是undefined，函数在没有返回值时也是undefined
let message;
console.log(message); // undefined
console.log(typeof message); // undefined
console.log(message === undefined); // true
let unFun = function () {
    // 函数没有返回值时，返回undefined
}
console.log(unFun()); // undefined
// typeof对于未声明的变量也会返回undefined
console.log(typeof notDeclared); // undefined
// undefind是一个全局只读属性
console.log(window.undefined); // undefined
window.undefined = 100; // 不会报错，但是不会改变undefined的值
*/

/*
// Null类型
// Null类型只有一个值，即null，null表示一个空对象指针，不存在的对象引用
// 这也是为什么给typeof 传一个 null 会返回"object"的原因
console.log(typeof null); // object
// undefined 值是由 null 值派生而来的，因此 ECMA-262 将它们定义为表面上相等，并不是完全相等
console.log(null == undefined); // true
*/

// 即使 null 和 undefined 有关系，它们的用途也是完全不一样的。
// 如前所述，永远不必显式地将变量值设置为 undefined。但 null 不是这样的。
// 任何时候，只要变量要保存对象，而当时又没有那个 对象可保存，就要用 null 来填充该变量。
// 这样就可以保持 null 是空对象指针的语义，并进一步将其 与 undefined 区分开来。
// 用 null 表示明确的空状态。
// 用 undefined 保持默认状态或表示缺失值。

