-- Active: 1739250781633@@127.0.0.1@3090@my_shop

# 单条语句的情况

# 位于IL、IN、MI这3个州的顾客
SELECT cust_name, cust_contact, cust_email
FROM Customers
WHERE cust_state IN ('IL','IN','MI');

# 不管哪个州，所有叫Fun4ALL的顾客
SELECT cust_name, cust_contact, cust_email
FROM Customers
WHERE cust_name = 'Fun4All';


# 组合查询
SELECT cust_name, cust_contact, cust_email
FROM Customers
WHERE cust_state IN ('IL','IN','MI')
UNION
SELECT cust_name, cust_contact, cust_email
FROM Customers
WHERE cust_name = 'Fun4All';


##############挑战题###############


# 1
SELECT prod_id, quantity
FROM OrderItems
WHERE quantity = 100
UNION
SELECT prod_id, quantity
FROM OrderItems
WHERE prod_id LIKE 'BNBG%'
ORDER BY prod_id;

# 2
SELECT prod_id, quantity
FROM OrderItems
WHERE quantity = 100 OR prod_id LIKE 'BNBG%'
ORDER BY prod_id;

# 3

SELECT Customers.cust_name, Products.prod_name
FROM Customers, Products, Orders, OrderItems
WHERE Customers.cust_id = Orders.cust_id
AND Orders.order_num = OrderItems.order_num
AND Products.prod_id = OrderItems.prod_id
ORDER BY Products.prod_name;


SELECT DISTINCT Customers.cust_name, Products.prod_name
FROM Customers
INNER JOIN Orders ON Customers.cust_id = Orders.cust_id
INNER JOIN OrderItems ON Orders.order_num = OrderItems.order_num
INNER JOIN Products ON OrderItems.prod_id = Products.prod_id
ORDER BY Products.prod_name;


SELECT prod_name
FROM Products
UNION
SELECT cust_name 
FROM Customers
ORDER BY prod_name;
