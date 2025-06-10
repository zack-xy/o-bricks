// 考虑以下代码的输出结果

// 1. 
// 输出：200
var n = 100
function foo () {
  n = 200
}
foo()
console.log(n);

// 2. 
// 输出：undefined、200
function foo () {
  console.log(n);
  var n = 200
  console.log(n);
}
var n = 100
foo()



// 3.
// 输出：200、100、100
// https://github.com/ZackZheng-xy/knownNet/tree/main/known/drawio/jsExecuteDemo3.drawio
var n = 100

function foo1 () {
  console.log(n);
}

function foo2 () {
  var n = 200
  console.log(n);
  foo1()
}

foo2()
console.log(n);


// 4.
// 输出结果：undefined
var a = 100

function foo () {
  console.log(a);
  return
  var a = 200
}

foo()

// 5. 
// 输出结果：a is not defined

function foo () {
  var a, b = 100
}

foo()
console.log(a);
console.log(b);

