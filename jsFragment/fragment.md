## 随机数公式

随机数公式
```
// total_number_of_choices: 总共的数字有几个
// first_possible_value：最小的数字
number = Math.floor(Math.random() * total_number_of_choices + first_possible_value)
// 例：[1-10],总共10个数字，最小1
let num = Math.floor(Math.random() * 10 + 1)  // [1-10]    
```

通过函数生成
```
function selectFrom(lowerValue, upperValue) {    
    let choices = upperValue - lowerValue + 1;   
    return Math.floor(Math.random() * choices + lowerValue); 
} 
let num = selectFrom(2,10); 
console.log(num);  // 2~10范围内的值，其中包含2和10 
```

-----

## 高位补零

要补几位就几个0


```
// 个位数补两位数(字符串)
例：'1'-'9' => '01'-'09'
let num = '1'
num = ('00' + num).substr(num.length)
```