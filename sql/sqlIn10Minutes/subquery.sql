-- Active: 1739250781633@@127.0.0.1@3090@my_shop

# 子查询
# 子查询只能查出单列

# 从内到外执行
# 订购了'RGAN01'产品的客户的姓名和联系方式
# 从订单明细查出订单号 -> 从订单表查出客户号 -> 从客户表查出客户信息 
SELECT cust_name, cust_contact FROM Customers WHERE cust_id IN (
  SELECT cust_id FROM Orders WHERE order_num IN (
    SELECT order_num FROM OrderItems WHERE prod_id = 'RGAN01'
  )
)


# 计算字段使子查询

SELECT cust_name,
      cust_state,
      (
        SELECT COUNT(*) 
        FROM Orders
        WHERE Orders.cust_id = Customers.cust_id
      ) AS orders
FROM Customers
ORDER BY cust_name;




## 章节题解

SELECT cust_id, cust_name FROM Customers WHERE cust_id IN (
  SELECT cust_id FROM Orders WHERE order_num IN (
    SELECT order_num FROM OrderItems WHERE item_price >= 10
  )
);

SELECT order_num, cust_id, order_date FROM Orders WHERE order_num IN (
  SELECT order_num FROM OrderItems WHERE prod_id = 'BR01'
) ORDER BY order_date;


SELECT cust_email FROM Customers WHERE cust_id in (
  SELECT cust_id FROM Orders WHERE order_num IN (
    SELECT order_num FROM OrderItems WHERE prod_id = 'BR01'
  )
);



SELECT cust_id,
  SUM((
    SELECT SUM(quantity * item_price) FROM OrderItems 
    WHERE Orders.order_num = OrderItems.order_num
  )) AS total_ordered
 FROM Orders GROUP BY cust_id;


 SELECT cust_id,
    (
      SELECT SUM(quantity * item_price) FROM OrderItems
      WHERE order_num IN (
        SELECT order_num FROM Orders
        WHERE Orders.cust_id = Customers.cust_id
      )
    ) AS total_ordered
 FROM Customers;


SELECT prod_name, (
  SELECT SUM(quantity) FROM OrderItems
  WHERE OrderItems.prod_id = Products.prod_id
) AS quant_sold FROM Products;
