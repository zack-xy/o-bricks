-- Active: 1739250781633@@127.0.0.1@3090@my_shop

# 创建游标

DECLARE CustCursor CURSOR
FOR
SELECT * FROM Customers
WHERE cust_email IS NULL;


# 使用游标

OPEN CURSOR CustCursor


# 关闭游标

CLOSE CustCursor
