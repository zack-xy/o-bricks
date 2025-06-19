-- Active: 1739250781633@@127.0.0.1@3090@my_shop

# 返回prod_price为3.49的行
SELECT prod_name, prod_price FROM Products WHERE prod_price = 3.49;

/* ♥️ 同时有WHERE和ORDER BY，ORDER BY在WHERE后面 */

/* ♥️ WHERE操作符

  =  等于
  <> 不等于
  != 不等于
  <  小于
  <= 小于等于
  !< 不小于
  >  大于
  >= 大于等于
  !> 不大于
  BETWEEN 在指定两个值之间 (搭配AND使用)
  IS NULL 为NULL值

 */

# 过滤价格小于10美元的产品
SELECT prod_name, prod_price FROM Products WHERE prod_price < 10;

# 过滤不是供应商DLL01制造的产品
SELECT vend_id, prod_name FROM Products WHERE vend_id <> 'DLL01';
SELECT vend_id, prod_name FROM Products WHERE vend_id != 'DLL01';


# 过滤价格在5美元～10美元之间的产品
SELECT prod_name, prod_price FROM Products WHERE prod_price BETWEEN 5 AND 10;

# 空值检查
SELECT cust_name FROM Customers WHERE cust_email IS NULL;


/* ❤️上面是单个 WHERE， 下面是多个WHERE子句，通过AND和OR */

# AND
SELECT prod_id, prod_price, prod_name FROM Products WHERE vend_id = 'DLL01' AND prod_price <= 4;

# OR 第一个条件满足，无论第二个条件是否满足，都会被检索出来
SELECT prod_id, prod_name, prod_price FROM Products WHERE vend_id = 'DLL01' OR vend_id = 'BRS01' ORDER BY prod_price;

# 求值顺序
# 希望的是找供应商为DLL01或BRS01且价格大于10的产品
# AND的优先级高于OR
# 所以在DBMS看来，这句话的意思是：供应商为DLL01或供应商为BRS01并且价格大于10的产品
SELECT prod_name, prod_price FROM Products WHERE vend_id = 'DLL01' OR vend_id = 'BRS01' AND prod_price >= 10;

SELECT prod_name, prod_price FROM Products WHERE (vend_id = 'DLL01' OR vend_id = 'BRS01') AND prod_price >= 10;


# IN操作符指定范围
SELECT prod_name, prod_price FROM Products WHERE vend_id IN ('DLL01', 'BRS01') ORDER BY prod_name;

# NOT操作符，否定后面的条件
# 供应商不是DLL01的产品
SELECT prod_name FROM Products WHERE NOT vend_id = 'DLL01' ORDER BY prod_name;
SELECT prod_name FROM Products WHERE vend_id <> 'DLL01' ORDER BY prod_name;




