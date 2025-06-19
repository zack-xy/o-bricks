-- Active: 1739250781633@@127.0.0.1@3090@my_shop

# 从Products表中检索prod_name字段
SELECT prod_name FROM Products; 

# 从Products表中检索多个字段
SELECT prod_id, prod_name, prod_price FROM Products;

# 检索所有列
SELECT * FROM Products;

# DISTINCT去除重复列值重复项，用在列名前面
SELECT DISTINCT vend_id FROM Products;

# DISTINCT作用于所有列，不是作用于单个列
# 这里表示 vend_id x prod_price 不重复
SELECT DISTINCT vend_id, prod_price FROM Products;

# 限制行数 ⚠️：各个数据库实现不一样（这里是MySQL后续不再赘述）
# LIMIT 5 限制 5 行
SELECT prod_name FROM Products LIMIT 5;

# OFFSET指定从第几行起，这里从第5行起（不包括第5行）LIMIT 限制4条数据
SELECT prod_name FROM Products LIMIT 4 OFFSET 5;

# 简写(OFFSET的值要写在前面)
SELECT prod_name FROM Products LIMIT 5,4;


/* ❤️ 计算字段 */

# 拼接两个列
# ⚠️ SQL Server使用的是+，DB2、Oraclde、PostgreSQL和SQLite使用的||, MySQL需要使用Concat函数

SELECT vend_name + '(' + vend_country + ')' FROM Vendors ORDER BY vend_name;

SELECT vend_name || '(' || vend_country || ')' FROM Vendors ORDER BY vend_name;

# AS命名拼接列
SELECT CONCAT(vend_name, '(', vend_country, ')') AS vend_title FROM Vendors ORDER BY vend_name;


# 去空格
SELECT CONCAT(TRIM(vend_name), '(', TRIM(vend_country), ')') AS vend_title FROM Vendors ORDER BY vend_name;

# 计算列
SELECT prod_id, quantity, item_price, quantity * item_price AS expanded_price FROM OrderItems WHERE order_num = 20008;


/* ❤️ 函数 每个DBMS定义都不一样，需要具体看，（下面列出来的，是不同DBMS里的） */

# 文本处理函数: TRIM()、UPPER()、SUBSTR()、LENGTH()......
# 日期和时间处理函数：DATEPART()、EXTRACT() 、YEAR()......
# 数值处理函数：ABS()、PI()、EXP()、SIN()......

/* ❤️ 聚集函数：汇总数据 

  AVG()            返回某列的平均值
  COUNT()          返回某列的行数
  MAX()            返回某列的最大值
  MIN()            返回某列的最小值
  SUM()            返回某列值之和

 */

# AVG列平均值
SELECT AVG(prod_price) AS avg_price FROM Products;

SELECT AVG(prod_price) AS avg_price FROM Products WHERE vend_id = 'DLL01';

# COUNT计行数
# 方式一：COUNT(*), 对表中行的数目进行计数（包括NULL）
# 方式二：COUNT(column),对特定列计数，忽略NULL
 
SELECT COUNT(*) AS num_cust FROM Customers;  -- 5
SELECT COUNT(cust_email) AS num_cust FROM Customers; -- 3

# MAX指定列中最大值（一般用于数值或日期值）
# 忽略为NULL的行，也可以用于文本值（文本值是排序后的最后一行）
SELECT MAX(prod_price) AS max_price FROM Products;


# MIN功能与MAX相反
SELECT MIN(prod_price) AS min_price FROM Products;

# SUM指定列值的和
# 忽略值为Null的行
SELECT SUM(quantity) AS items_ordered FROM OrderItems WHERE order_num = 20005;

# 用于计算合计值
SELECT SUM(item_price*quantity) AS total_price FROM OrderItems WHERE order_num = 20005;

# ⚠️排除相同的值DISTINCT
# DISTINCT不能用于COUNT
SELECT AVG(DISTINCT prod_price) AS avg_price FROM Products WHERE vend_id = 'DLL01';

# 聚集函数组合使用
SELECT COUNT(*) AS num_items,
       MIN(prod_price) AS price_min
       MAX(prod_price) AS price_max
       AVG(prod_price) AS price_avg
FROM Products


