-- Active: 1739250781633@@127.0.0.1@3090@my_shop

# 更新特定行
UPDATE Customers
SET cust_email = 'kim@thetoystore.com'
WHERE cust_id = 1000000005;


# 更新多个列
UPDATE Customers
SET cust_contact = 'Sam Roberts',
    cust_email = 'sam@toyland.com'
WHERE cust_id = 1000000006;


# 删除某个列的值（设为NULL）
UPDATE Customers
SET cust_email = NULL
WHERE cust_id = 1000000005;

# 删除指定行
DELETE FROM Customers
WHERE cust_id = 1000000006;
