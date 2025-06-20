-- Active: 1739250781633@@127.0.0.1@3090@my_shop

# 创建视图
CREATE VIEW ProductCustomers AS
SELECT cust_name, cust_contact, prod_id
FROM Customers, Orders, OrderItems
WHERE Customers.cust_id = Orders.cust_id
  AND OrderItems.order_num = Orders.order_num;


/* 测试视图 ProductCustomers */
SELECT * FROM ProductCustomers;

SELECT cust_name, cust_contact
FROM ProductCustomers
WHERE prod_id = 'RGAN01'

# 删除视图
DROP VIEW viewname;


# 视图格式化检索的数据
CREATE VIEW VendorLocations AS
SELECT CONCAT(vend_name, '(', vend_country, ')') AS vend_title
FROM Vendors;

# 视图过滤数据
# 过滤没有电子邮件地址的顾客
CREATE VIEW CustomerEMailList AS
SELECT cust_id, cust_name, cust_email
FROM Customers
WHERE cust_email IS NOT NULL;

# 结合计算字段
CREATE VIEW OrderItemsExpanded AS
SELECT order_num,
        prod_id,
        quantity,
        item_price,
        quantity*item_price AS expanded_price
FROM OrderItems;



##################挑战题######################

SELECT * FROM Orders;

# 1
CREATE VIEW CustomersWithOrders AS
SELECT Customers.*
FROM Customers, Orders
WHERE Customers.cust_id = Orders.cust_id;


# 2


