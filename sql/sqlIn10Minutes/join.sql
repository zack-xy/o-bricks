-- Active: 1739250781633@@127.0.0.1@3090@my_shop

# 等值联结（内联结）
# 将一个表中的行与另一个表中的行相关联
SELECT vend_name, prod_name, prod_price 
FROM Vendors, Products
WHERE Vendors.vend_id = Products.vend_id;


# JOIN写法(结果和上面一样)
SELECT vend_name, prod_name, prod_price
FROM Vendors
INNER JOIN Products ON Vendors.vend_id = Products.vend_id;

# 联结多个表（联结的表越多，性能越低）
SELECT prod_name, vend_name, prod_price, quantity
FROM OrderItems, Products, Vendors
WHERE Products.vend_id = Vendors.vend_id
  AND OrderItems.prod_id = Products.prod_id
  AND order_num = 20007;


# 自联结

SELECT cust_id, cust_name, cust_contact
FROM Customers
WHERE cust_name = (
  SELECT cust_name
  FROM Customers
  WHERE cust_contact = 'Jim Jones'
);

# 使用联结
SELECT c1.cust_id, c1.cust_name, c1.cust_contact
FROM Customers AS c1, Customers AS c2
WHERE c1.cust_name = c2.cust_name
  AND c2.cust_contact = 'Jim Jones';


# 自然联结
# 使用表通配符(SELECT *)

SELECT C.*, O.order_num, O.order_date,
      OI.prod_id, OI.quantity, OI.item_price
FROM Customers AS C, Orders AS O, OrderItems AS OI
WHERE C.cust_id = O.cust_id
  AND OI.order_num = O.order_num
  AND prod_id = 'RGAN01';

# 外联结
# 一个表中的行与另一个表中的行相关联，需要包括没有关联的那些行


# 左外联结
# 检索顾客的所有订单，包含没有订单的顾客
SELECT Customers.cust_id, Orders.order_num
FROM Customers
  LEFT OUTER JOIN Orders ON Customers.cust_id = Orders.cust_id;

# 右外联结
SELECT Customers.cust_id, Orders.order_num
FROM Customers
  RIGHT OUTER JOIN Orders ON Customers.cust_id = Orders.cust_id;


# 全外联结(MYSQL不支持)
SELECT Customers.cust_id, Orders.order_num
FROM Customers
  FULL OUTER JOIN Orders ON Customers.cust_id = Orders.cust_id;


# 联结和聚集函数合用

# 检索计算顾客的订单数(这里是内联结（不包含没订单的顾客）)
SELECT Customers.cust_id,
      COUNT(Orders.order_num) AS num_ord
FROM Customers
  INNER JOIN Orders ON Customers.cust_id = Orders.cust_id
GROUP BY Customers.cust_id;


# 检索计算顾客的订单数(这里是外联结（包含没订单的顾客）)
SELECT Customers.cust_id,
      COUNT(Orders.order_num) AS num_ord
FROM Customers
  LEFT OUTER JOIN Orders ON Customers.cust_id = Orders.cust_id
GROUP BY Customers.cust_id;


##########################分割线##############################


/* ❤️ 十二章挑战题 */

/* 题1 */
SELECT cust_name, order_num
FROM Customers, Orders
WHERE Customers.cust_id = Orders.cust_id
ORDER BY cust_name, order_num;

SELECT cust_name, order_num
FROM Customers
INNER JOIN Orders ON Customers.cust_id = Orders.cust_id
ORDER BY cust_name, order_num;

/* 题2 */
SELECT cust_name, order_num,
(
  SELECT SUM(quantity * item_price) FROM OrderItems
  WHERE OrderItems.order_num = Orders.order_num
) AS OrderTotal
FROM Customers
INNER JOIN Orders ON Customers.cust_id = Orders.cust_id
ORDER BY cust_name, order_num;


SELECT cust_name,
      Orders.order_num,
      SUM(quantity * item_price) AS OrderTotal
FROM Customers, Orders, OrderItems
WHERE Customers.cust_id = Orders.cust_id
  AND Orders.order_num = OrderItems.order_num
GROUP BY cust_name, Orders.order_num
ORDER BY cust_name, order_num;


/* 题3 */
SELECT cust_id, order_date
FROM Orders, OrderItems
WHERE Orders.order_num = OrderItems.order_num
  AND OrderItems.prod_id = 'BR01';


/* 题4 */
SELECT Customers.cust_id, cust_email, order_date
FROM Orders, OrderItems, Customers
WHERE Orders.order_num = OrderItems.order_num
  AND Customers.cust_id = Orders.cust_id
  AND OrderItems.prod_id = 'BR01';


/*题5*/
# 返回总价至少为1000的所有订单的订单号
SELECT cust_name, SUM(quantity*item_price) AS total_price
FROM Customers,Orders, OrderItems
WHERE Customers.cust_id = Orders.cust_id
  AND Orders.order_num = OrderItems.order_num
GROUP BY cust_name HAVING total_price >= 1000
ORDER BY cust_name;

/* ❤️ 十三章挑战题 */

# 1
SELECT cust_name, order_num
FROM Customers
  INNER JOIN Orders ON Customers.cust_id = Orders.cust_id
ORDER BY cust_name;


# 2
SELECT cust_name, order_num
FROM Customers
  LEFT OUTER JOIN Orders ON Customers.cust_id = Orders.cust_id
ORDER BY cust_name;

# 3
SELECT prod_name, order_num
FROM Products
  LEFT OUTER JOIN OrderItems ON Products.prod_id = OrderItems.prod_id
ORDER BY prod_name;

# 4
SELECT prod_name, COUNT(OrderItems.order_num) AS orders
FROM Products
  LEFT OUTER JOIN OrderItems ON Products.prod_id = OrderItems.prod_id
GROUP BY prod_name
ORDER BY prod_name;

# 5

SELECT Vendors.vend_id, COUNT(Products.prod_id)
FROM Vendors
  LEFT OUTER JOIN Products ON Vendors.vend_id = Products.vend_id
GROUP BY Vendors.vend_id;
