// eval 函数
// eval 函数是全局对象的一个函数属性,可以用来动态执行字符串中的javaScript代码
console.log(window.eval); // eval() {}
eval("console.log('Hello Eval!')")


// eval的工作原理
// 1. 执行代码
// eval 会把传入的字符串当作 JavaScript 代码来执行，代码中的变量和函数会直接影响当前的作用域
eval("var fn = function (){ console.log('eval')};var evalInVb = 20;")
console.log(evalInVb); // 20
evalInVb = 30;
fn() // eval
console.log(evalInVb); // 30

// 2. 返回结果
// eval 会返回执行代码的结果。如果执行的是表达式，它返回表达式的结果；如果执行的是语句（如变量声明、赋值等），则返回 undefined
let eaReturn = eval(new String(1 + 1))
console.log(eaReturn); // 表达式的返回结果 String: {0: '2'}
let eaReturn1 = eval(1+1)
console.log(eaReturn1); // 表达式的返回结果 2
let eaReturn2 = eval('var num = 3')
console.log(eaReturn2); // 语句的返回结果 undefind

// 不建议使用eval
// 1.eval() 通常比其他替代方法更慢，因为它必须调用 JS 解释器，而许多其他结构则可被现代 JS 引擎进行优化
// 2.eval() 是一个危险的函数，它使用与调用者相同的权限执行代码，如果你的eval中的参数被人恶意修改，会导致你的程序在其他用户的电脑上运行恶意代码
var evalExecutionCode = "alert('你好！')"
// 在运行代码时我在执行eval处时修改evalExecutionCode的内容 例如改成 location.href = "pxxxxhub.com"
// 这会导致你的网站在加载时进行恶意跳转
eval(evalExecutionCode) 
// 3.如果你需要执行动态生成的代码，考虑使用 Function 构造函数，它比 eval 更安全



// 在eval 函数中使用 'use strict'
eval("'use strict';var x = 10;") // 这里的use strict 和放在函数中同理 并不会影响到上级区域（window，函数上一级）
