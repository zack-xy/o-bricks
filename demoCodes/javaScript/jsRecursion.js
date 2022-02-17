// 递归函数的写法，阶乘为例


// 1. 普通的递归函数
function factorial (num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}


// 1.普通递归的问题：将函数赋值给其他变量调用会出问题
let anotherFactorial = factorial;
factorial = null;
console.log(anotherFactorial(4)); // 报错


// 2. 非严格模式下解决1.问题
function factorial (num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1);
  }
}


// 3.通用解决方案(命名函数表达式)
const factorial = function f (num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * f(num - 1);
  }
};


// 尾调用优化


// 1.原斐波那契数列递归
function fib (n) {
  if (n < 2) {
    return n;
  }


  return fib(n - 1) + fib(n - 2);
}


// 2.尾调用优化斐波那契递归
("use strict");


function fib (n) {
  return fibImpl(0, 1, n);
}


function fibImpl (a, b, n) {
  if (n === 0) {
    return a;
  }
  return fibImpl(b, a + b, n - 1);
}

