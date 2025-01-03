// arguments 是一个类似数组的对象，它包含了传递给函数的所有参数
// arguments 对象是所有（非箭头）函数中都可用的局部变量

// 错误示范
const argumentsLength = ()=> {
// 箭头函数不创建 arguments 对象。它们继承封闭作用域（外层函数或全局）的 arguments
    console.log(arguments);
};

// 正确示范
const argumentsLength1 = (...args)=>{
    console.log(args); // 这里的args因为参数解构与扩展运算符的关系得到的是一个真正的数组
}

const argumentsLength2 = function (){
// 普通函数会自动创建并初始化 arguments 对象，无需显式声明
    console.log(arguments);   
}

argumentsLength(1, 2, 3, 4, 5, 6)
argumentsLength1(1, 2, 3, 4, 5, 6)
argumentsLength2(1, 2, 3, 4, 5, 6)