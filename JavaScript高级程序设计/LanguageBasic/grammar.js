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

/*
// Boolean类型
// Boolean只有两个字面值： true和 false。
// 这两个布尔值不同于数值，因此 true 不等于 1，false不等于 0。
let bt = true;
let bf = false;
// Boolean
// 虽然布尔值只有两个，但所有其他 ECMAScript 类型的值都有相应布尔值的等价形式。
// 使用Boolean()转型函数可以将其他类型的值转为布尔值
console.log(Boolean(true)); // true
console.log(Boolean(false)); // false
// String
// 转换为 true: 非空字符串（例如 "hello" 或 "0"）
// 转换为 false: 空字符串 ""
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true (空格也是非空字符串)
console.log(Boolean("0")); // true
console.log(Boolean("Hello")); // true
// Number
// 转换为 true: 非零数值（包括正数、负数、无穷值）
// 转换为 false: 0 和 NaN
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(1)); // true
console.log(Boolean(0.01)); // true
console.log(Boolean(-1)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity)); // true
// Object
// 转换为 true: 任意对象（包括数组、函数等）
// 转换为 false: null
console.log(Boolean({}));      // true (空对象)
console.log(Boolean([]));      // true (空数组)
console.log(Boolean(function(){})); // true (函数) 函数在ES中是对象的一种，但具有独特的属性和行为
console.log(Boolean(null));    // false
// Undefind
// 转换为 true:（没有这种情况，undefined 永远为 false）
// 转换为 false: undefined
console.log(Boolean(undefined)); // false   


// 理解上方的转换非常重要，因为像 if等流控制语句会自动执行其他类型值到布尔值的转换
if (NaN){
    console.log("NaN is true");
} else {
    console.log("NaN is false");
}
*/

// Number 类型
// Number 类型使用 IEEE 754 格式表示整数和浮点值（在某些语言中也叫双精度值）。不同的数值类型相应地也有不同的数值字面量格式。
// 最基本的数值字面量格式是十进制整数，直接写出来即可
let intNumber = 66;
// 整数也可以用八进制（以 8 为基数）或十六进制（以 16 为基数）字面量表示。
// 如果字面量中包含的数字超出了应有的范围，就会忽略前缀的零，后面的数字序列会被当成十进制数
// 注意：ECMAScript 2015 或 ES6 中的八进制值通过前缀 0o 来表示；严格模式下，前缀 0 会被视为语法错误，如果要表示八进制值，应该使用前缀 0o
let octalNum0 = 0o70; // 八进制的 56 八进制的正确写法
let octalNum1 = 070; // 八进制的 56 八进制的错误写法
let octalNum2 = 079; // 无效的八进制值，当成 79 处理
let octalNum3 = 08; // 无效的八进制值，当成 8 处理
console.log(octalNum1,octalNum2,octalNum3); // 56 79 8
// 八进制字面量在严格模式下是无效的，会导致JavaScript引擎抛出语法错误
// let fn = ()=>{
//     'use strict'
//     let octalNum1 = 070;
//     console.log(octalNum1);
// }
// fn() // 语法错误： Octal literals are not allowed in strict mode (严格模式下不允许使用八进制文字)

// 要创建十六进制字面量，必须让真正的数值前缀 0x（区分大小写），然后是十六进制数字（0~9 以及 A~F）。十六进制数字中的字母大小写均可
let hexNum1 = 0xA; // 十六进制 10
let hexNum2 = 0x1f; // 十六进制 31
console.log(hexNum1,hexNum2, hexNum1 + hexNum2); // 10 31 41
// 注意： 使用八进制和十六进制格式创建的数值在所有数学操作中都被视为十进制数值。
// 由于 JavaScript 保存数值的方式，实际中可能存在正零（+0）和负零（-0） 。正零和负零在所有情况下都被认为是等同的
console.log(0 == -0); //true
console.log(0 === -0); //true


// 浮点数
// 要定义浮点值，数值中必须包含小数点，而且小数点后面必须至少有一个数字。
let floatNum1 = 1.1;
let floatNum2 = 0.1;
// 虽然小数点前面不是必须有整数，但推荐加上
let floatNum3 = .1; // 有效不推荐
// 因为存储浮点数使用的内存空间是整数的2倍，所以以ES总是想方设法把值转换为整数。
// 在小数点后面没有数字的情况下，数值就会变成整数。
let floatNum4 = 1.; // 小数点后面没有数字，当成1处理
// 如果数值本身就是整数，只是小数点后面跟着 0（如 1.0），那它也会被转换为整数
let floatNum5 = 10.00; //小数点后面是0 当成10处理


// ！！！！！！！！！！！！！！！！！ 知识前提 系数 倒数 次幂
// 对于非常大或非常小的数值，浮点值可以用科学记数法来表示。
// ES 中科学记数法的格式要求是一个数值（整数或浮点数）后跟一个大写或小写的字母 e,再加上一个要乘的 10 的多少次幂
// 非常大的数值
let bigFloatNumber = 3.125e7; // = 3.125 * (10 ** 7) = 31250000 
let bigNumber1 = 3E7; // = 3 * (10 ** 7) = 30000000

// 非常小的数值
// ES 会将小数点后至少包含 6 个零的浮点值转换为科学记数法
// 10 ** -4 十的负四次冥 = 十的四次幂分之一
let smallNumber = 3E-4; // = 3 * (10 ** -4) = 0.0004
let smallNumber1 = 3E-8; // = 3 * (10 ** -8) 

// 浮点值的精确度最高可达 17 位小数，但在算术计算中远不如整数精确。例如，0.1 加 0.2 得到的不是 0.3，而是 0.300 000 000 000 000 04。
console.log(0.1 + 0.2); // 0.300 000 000 000 000 04
// 之所以存在这种舍入错误，是因为使用了 IEEE 754 数值导致的


// 值的范围
// 由于内存的限制，ES并不能表示世界上所有的数值。
// 使用Number.Min_Value获取可以表示的最小数值，在多数浏览器中是5e-324
console.log(Number.MIN_VALUE); // chrome 5e-324
// 使用Number.Max_Value获取可以表示的最大数值，在多数浏览器中是1.797 693 134 862 315 7e+308
console.log(Number.MAX_VALUE); // chrome 1.7976931348623157e+308

// 如果某个计算得到了超出JavaScript可以表示的范围，那么这个会被自动转换成一个特殊的无穷值（Infinity）
// 任何无法表示的正数以 Infinity（正无穷大）表示
console.log(1 / 0); // Infinity
// 任何无法表示的负数以-Infinity（负无穷大）表示
console.log(-1 / 0); // -Infinity
// 使用 Number.NEGATIVE_INFINITY 和 Number.POSITIVE_INFINITY 也可以获取正、负 Infinity。这两个属性包含的值分别就是-Infinity和 Infinity。
console.log(Number.POSITIVE_INFINITY); //Infinity
console.log(Number.NEGATIVE_INFINITY); //-Infinity

// 因为Infinity 没有可用于计算的数值表示形式
// 要确定一个值是不是有限大（即介于 JavaScript 能表示的最小值和最大值之间），可以使用 isFinite()函数
let result = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(isFinite(result)); // false


// NaN
// 在ES中有一个特殊的数值NaN（意思是不是数值 Not a Number）
// NaN用于表示用于本来要返回的数值的操作失败
// 比如，用 0 除任意数值在其他语言中通常都会导致错误，从而中止代码执行
// 但在 ECMAScript 中，0、+0 或-0 相除会返回 NaN
// 例如
console.log(0/0); //NaN
console.log(-0/0); //NaN
// 如果分子是非0值，分母是有符号0或者无符号0，则会返回Infinity -Infinity
console.log(5/0); // Infinity
console.log(5/-0); // -Infinity
// NaN的独特属性
// 1.任何涉及NaN的操作始终返回NaN
console.log(10 / NaN);
// 2.NaN不等于包括NaN在内的任何值
console.log(NaN == NaN); //false
// 为此ES中提供了isNaN()，这个函数接收一个参数，可以是任何类型
// 这个参数会判断参数是否“不是数值”
// 把一个参数传给isNaN()之后，该函数会尝试把参数转换为数值
// 某些非数值的值可以直接转换为数值，例如：字符串“10”，布尔值
// 任何不能转换为数值的值都会导致这个函数返回true
console.log("isNaN(NaN)",isNaN(NaN)); // true
console.log(isNaN("10")); // false 字符串串10 转换为数值10
console.log(isNaN(true)); // false 转换为数值1
console.log(isNaN(false)); // false 转换为 数值 0
console.log(isNaN("Hello")); // true 无法被转换成数值


// 数值转换
// 有三个函数可以将非数值转换为数值
// Number()函数属于转型函数，可以用于任何数值
// parseInt(),parseFloat()函数用于将字符串转为数值
// 对于同样的参数，这三个函数执行的操作也是不同的
// Number函数基于以下规则进行转换
// 布尔值
console.log(Number(true)); // 1 
console.log(Number(false)); // 0
// 数值
console.log(Number(11)); // 11
// null
console.log(Number(null)); // 0
// undefined
console.log(Number(undefined)); // NaN
// 字符串,字符串应用以下规则进行转换
// 1.字符串包含数值字符，包括数值字符前面带加、减号的情况，则转换为一个十进制数值
console.log(Number("-10")); // -10
console.log(Number("0100")); // 100 (会忽略掉前面的0)
console.log(Number("10")); // 10
// 2.如果字符串包含有效的浮点值格式如"1.1"，则会转换为相应的浮点值（同样，忽略前面的零）。
console.log(Number("-0.10")); // -0.1
console.log(Number("00000.1000")); // 0.1 (会忽略掉前面的0)
console.log(Number("0.123")); // 0.123
// 3. 如果是空字符串（不包含字符），则返回 0
console.log(Number("")); // 0
console.log(Number(" ")); // 0  
// 4.如果字符串包含有效的十六进制格式如"0xf"，则会转换为与该十六进制值对应的十进制整数值(八进制同理)
console.log(Number("0xf")); // 15
console.log(Number("0o70")); // 56
// 5.如果字符串包含除上述情况之外的其他字符，则返回 NaN。
console.log(Number("00xf")); // NaN
console.log(Number("oo07000")); // NaN
console.log(Number("BLUE123")); // NaN
console.log(Number("123BLUE")); // NaN
console.log(Number("BLUE")); // NaN
// 对象
// 转换规则:
// 调用对象 valueOf()方法，并按照上述规则转换返回的值。如果转换结果是 NaN，则调用对象的toString()方法，再按照转换字符串的规则转换。
// 如果对象中有自定义的valueOf()或者toString()方法会先调用
let obj = {
    valueOf: function (){
        return 66
    }
}
// 如果对象中有自定义的valueOf()或者toString()方法会先调用
let obj1 = {
    toString: function (){
        return 77
    }
}
console.log(Number(obj),"自定义对象"); // 66
console.log(Number(obj1),"自定义对象1"); // 77
// 普通对象
console.log(Number({})); // NaN
console.log(Number({0:1})); // NaN
// 数组对象
console.log(Number([42]));        // 42 (单个数字)
console.log(Number(["42"]));      // 42 (字符串 "42" 转换为数字)
console.log(Number([1, 2, 3]));   // NaN (字符串 "1,2,3" 无法转换为数字)
console.log(Number([]));          // 0 (空数组的字符串表示是 "")
// 日期对象
let date = new Date("2023-01-01");
let date2 = new Date()
console.log(Number(date)); // 1672444800000 (日期对象转换为时间戳)
console.log(Number(date2)); // 1736687020058 (日期对象转换为时间戳)

// parseInt()
// 在需要得到整数时可以优先使用 parseInt()函数
// parseInt会从位置0开始的非空字符串开始检查直到检查到字符串末尾或者非数值字符
// 注意:
// 1.如果第一个字符不是数值字符、加号或减号，parseInt()立即返回NaN。(Number())
// 2.如果字符串以"0"开头，且紧跟着数值字符，在非严格模式下会被某些实现解释为八进制整数(ES3,ES3之前)
// 3.parseInt()函数在ES5+ 中明确规定了 parseInt() 默认按十进制解析（除非明确指定进制值）,所谓指定进制值也就是parseInt的第二个参数
let num1 = parseInt("1234blue"); // 1234
let num2 = parseInt(""); // NaN
let num3 = parseInt("0xA"); // 10，解释为十六进制整数
let num4 = parseInt(22.5); // 22
let num5 = parseInt("70"); // 70，解释为十进制值
let num6 = parseInt("0xf"); // 15，解释为十六进制整数
let num7 = parseInt("0o70"); // 0 解释为十进制
let num8 = parseInt("0xAF",16); //  175
// 进制前缀是你可以省略的
let num9 = parseInt("AF",16); // 175
let num10 = parseInt("AF",10); // NaN
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(num8);
console.log(num9);
console.log(num10);
// 为什么这里没有提到八进制的parseInt转换呢?
// 是因为在ES5规范中不在允许parseInt函数对八进制数值进行解析了

// 4.如果传递的进制数无效,不在(2-36)的进制范围内
// 为什么最多是36进制呢?10个数字和26个字母
console.log(parseInt("abcd",36)); // 481261
// 无效进制的情况会返回NaN
console.log(parseInt("1",1)); //NaN
// 当然指定进制解析不了的数值也会返回NaN
console.log(parseInt("3",2)); //NaN

// parseFloat()
// 在需要得到浮点数时可以优先使用 parseFloat()函数
// parseFloat()函数的工作方式跟 parseInt()函数类似,都是从位置 0 开始检测每个字符。
// 同样，它也是解析到字符串末尾或者解析到一个无效的浮点数值字符为止。
// 这意味着第一次出现的小数点是有效的，但第二次出现的小数点就无效了，此时字符串的剩余字符都会被忽略。
console.log('parseFloat');
console.log(parseFloat('22.34.5')); // 22.34 第二个小数点后的5被忽略了
// 注意:
// 1.parseFlot只解析十进制值,因此这个函数也无法指定底数(进制值)
// 2.parseFlot它始终忽略字符串开头的零
// 3.如果字符串表示整数（没有小数点或者小数点后面只有一个零），则 parseFloat()返回整数
console.log(parseFloat('1234blue')); // 1234
console.log(parseFloat('blue1234')); // NaN
console.log(parseFloat('0xAF')); // 0
console.log(parseFloat('22.4')); // 22.4
console.log(parseFloat('1234')); //1234
console.log(parseFloat('999.00')); //999
console.log(parseFloat('000123')); //123



// String
// String(字符串)类型表示零或多个十六位unicode字符序列
// 字符串可以使用'或者"或者`标示
let str1 = "hello world"
let str2 = 'hello world'
let str3 = `hello world`
// 在es中表示字符串的引号没有区别,不过要注意以什么引号开头就以什么引号结束
// let str4 = 'hello world" // 错误示范 这将会导致语法错误

// 字符字面量
// 字符串数据类型包含一些字符字面量，用于表示非打印字符或有其他用途的字符
console.log("hello\nworld"); //换行
// 输出结果
// hello
// world
console.log("hello\tworld"); //制表
console.log("hello\bworld"); //退格
console.log("hello\rworld"); //回车
console.log("hello\nworld"); //换行
console.log("hello\fworld"); //换页
console.log("hello\\world"); //反斜杠 
console.log("hello\'world\'"); //单引号（'），在字符串以单引号标示时使用,双引号,反引号同理
console.log("hello\"world\""); 
console.log("hello\`world\`");
console.log("\x41"); // 以十六进制编码 nn表示的字符（其中 n是十六进制数字 0~F） ，例如\x41等于"A"
console.log("\u03a3"); // 以十六进制编码 nnnn表示的 Unicode 字符（其中 n是十六进制数字 0~F） ，例如\u03a3等于希腊字符"Σ"

// 这些字符字面量可以出现在字符串中的任意位置，且可以作为单个字符被解释
// 下面这个例子虽然包含6个字符长的转义序列,但是因为转义序列表示一个字符,所以这个字符串的长度也只有9个字符长
let str5 = "希腊字符Σ: \u03a3.";
// 用length属性可以获取字符串的长度
console.log(str5.length);
// 注意:如果字符串中包含双字节字符，那么 length属性返回的值可能不是准确的字符数(后续会讲解到)

// 字符串的特点
// ES中的字符串是不可变的，意思是一旦创建，它们的值就不能变了。
// 要修改某个变量中的字符串值，必须先销毁原始的字符串，然后将包含新值的另一个字符串保存到该变量
// 下方的代码是如何进行操作的呢?
// 首先会分配一个足够容纳10个字符的空间,然后再将'Java'和'Script'进行填充,最后再把原始的'Java'和'Script'进行销毁
// 所有的处理都是在后台中发生的,这也就是为什么在早期的浏览器(firefox1.0和ie6.0之前的版本)中拼接字符串会非常慢的原因
// 这些浏览器在后来的版本中都有针对性地解决了这个问题
let lang = 'Java'
lang = lang + 'Script'

// 转换字符串
// 有两种方式把一个值转换为字符串。首先是使用几乎所有值都有的 toString()方法
// 这个方法唯一的用途就是返回当前值的字符串等价物
let age = 11;
let ageAsString = age.toString(); // 字符串"11"
let found = true;
let foundAsString = found.toString(); // 字符串"true"
// toString()方法可见于数值、布尔值、对象和字符串值。（没错，字符串值也有 toString()方法，该方法只是简单地返回自身的一个副本。）
// null和 undefined值没有 toString()方法
// 大多数情况下,toString函数不接受任何参数
// 如果是数值在调用这个函数时,toString可以接收一个底数参数,即以什么底数(进制)来输出数值的字符串表示
let numToString = 10;
console.log(numToString.toString()); // "10"
console.log(numToString.toString(2)); // "1010" 二进制
console.log(numToString.toString(8)); // "12" 八进制
console.log(numToString.toString(10)); // "10"  十进制
console.log(numToString.toString(16)); // "a" 十六进制
console.log(numToString.toString(36)); // "a" 三十六进制
// 注意，默认情况下以十进制去解析数值
// 如果你不确定一个值是否是null或者undefind,可以用String转型函数
// String()函数遵循如下规则
// 1.如果值有 toString()方法，则调用该方法（不传参数）并返回结果
// 2.null返回 "null"
// 3.undefind "undefind"
console.log(String(null)); // "null" null和undefind因为没有toString方法所以就直接返回了这个值的字面量文本
console.log(String(undefined)); // "undefind"
console.log(String(true)); // "true"
console.log(String(10)); // "10"
console.log(String(10.10)); // "10.1"
// 还有一种方式比较特殊,用加号操作符给一个值加上一个空字符串""也可以将其转换为字符串
console.log(1 + ""); // "1"
console.log(undefined + ""); // "undefind"

// 模版字面量
// ES6中新增了使用模板字面量定义字符串的能力
// 与使用单,双引号不同模版字面量可以保留换行字符,可以跨行定义字符串
const fuckMessage = "Love\nYou"
console.log(fuckMessage);
const loveMessage = `Love
You`
console.log(loveMessage);
console.log(fuckMessage  === loveMessage); // true

// 模版字面量在定义模版的时候特别好用
let grammarTestTemplate = `
    <h1>
    你好
    </h1>
`
document.querySelector("#h1").innerHTML = grammarTestTemplate
// 注意:模版字面量会保持反应号内部的空格,可能所看到的字符串长度与实际不同
let notLengthString = `Hello
    World`
console.log(`notLengthString`,notLengthString.length); // 15 实际是只有10个字符 但是因为保留空格的原因其实是15个
// 下方这个模版字面量以一个换行符开头
let specialHeadString = `
    Hello
    World
`
console.log(specialHeadString[0] === '\n') // true

// 字符串插值
// 模板字面量最常用的一个特性是支持字符串插值，也就是可以在一个连续定义中插入一个或多个值
// 技术上讲，模板字面量不是字符串，而是一种特殊的 JavaScript 句法表达式，只不过求值后得到的是字符串
// 模板字面量在定义时立即求值并转换为字符串实例，任何插入的变量也会从它们最接近的作用域中取值
// 字符串插值通过在${}中使用一个 JavaScript 表达式实现
let calcString = `1+2=${1+2}` // 1+2=3
console.log(calcString);
let myName1 = "ulk"
console.log(`Hello,My name is ${myName1}`); // Hello,My name is ulk
// 以前的字符串插值是这样实现的
console.log("Hello,My name is " + myName1);// Hello,My name is ulk

// 所有插入的值都会使用 toString()强制转型为字符串，而且任何 JavaScript 表达式都可以用于插值
//  将表达式转换为字符串时会调用
let fo = {toString: ()=> "Hello World!"}
console.log(`${fo}`);
// 此外，模板也可以插入自己之前的值：
let value1 = '';
function append() {
value1 = `${value1}abc`
console.log(value1);
}
append(); // abc
append(); // abcabc
append(); // abcabcabc


// 模板字面量标签函数
// 模板字面量也支持定义标签函数，而通过标签函数可以自定义插值行为。
// 标签函数会接收被插值记号(${})分隔后的模板和对每个表达式求值的结果
let a = 6;
let b = 9;
// 标签函数本身是一个常规函数，通过前缀到模板字面量来应用自定义行为
function simpleTag(strings, aValExpression, bValExpression, sumExpression) {
    // 标签函数接收到的参数依次是原始字符串数组和对每个表达式求值的结果。
    console.log(strings);
    console.log(aValExpression);
    console.log(bValExpression);
    console.log(sumExpression);
    return 'foobar';
}
let untaggedResult = `${ a } + ${ b } = ${ a + b }`;
let taggedResult = simpleTag`${ a } + ${ b } = ${ a + b }`;
// ["", " + ", " = ", ""] //  原始字符串
// 6
// 9
// 15
console.log(untaggedResult); // "6 + 9 = 15"
// 这个函数的返回值是对模板字面量求值得到的字符串。
console.log(taggedResult); // "foobar"
// 对于有 n 个插值的模板字面量，传给标签函数的表达式参数的个数始终是 n
// 而传给标签函数的第一个参数所包含的字符串个数则始终是 n+1。
// 因此，如果你想把这些字符串和对表达式求值的结果拼接起来作为默认返回的字符串，可以这样做
function simpleTag1(strings, ...pms) {
    console.log("strings[0]",strings[0]); // 第一个插值记号前的内容如果没有返回的就是一个没有任何值的字符串""
    console.log("strings.end",strings[strings.length - 1]); // 最后一个插值记号同理

    return `${strings[0]}${pms.map((item,index)=>{
        return item + strings[index + 1]
    }).join('')}`
}
let taggedResult1 = simpleTag1`${ a } + ${ b } = ${ a + b }`;
console.log(taggedResult1); // 6 + 9 = 15


// 原始字符串
// 使用模板字面量也可以直接获取原始的模板字面量内容（如换行符或 Unicode 字符），而不是被转换后的字符表示
// String.raw标签函数
console.log(`\u00A9`); // ©
console.log(String.raw`\u00A9`); // \u00A9
console.log(String.raw`Hello\nWorld`); // Hello\nWorld
// 对实际的换行符来说是不行的
// 它们不会被转换成转义序列的形式
console.log(String.raw`Hello
World`);
/*
    Hello
    World
*/ 
// 获取模版字面量中的每一个原始字符串
// 需要通过标签函数的第一个参数，即字符串数组的.raw属性取得每个字符串的原始内容
let simpleTag2 = (strings) =>{
    console.log('原始字符串转义后');    
    strings.forEach(item=>{
        console.log(item);
    })

    console.log('原始字符串转义前');
    strings.raw.forEach(item=>{
        console.log(item);
    })
}

let simpleTag2Value = simpleTag2`\u00A9${'-2008-'}\n`
console.log(simpleTag2Value); // undefind simpleTag2没有返回任何内容

