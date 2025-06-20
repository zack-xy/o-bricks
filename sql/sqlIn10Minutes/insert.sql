-- Active: 1739250781633@@127.0.0.1@3090@my_shop

# 插入完整的行
# 过于草率不安全
INSERT INTO Customers
VALUES(1000000006,
      'Tony Land',
      '123 Any Street',
      'New York',
      'NY',
      '11111',
      'USA',
      NULL,
      NULL);

# 安全一些的写法
INSERT INTO Customers(cust_id,
                      cust_name,
                      cust_address,
                      cust_city,
                      cust_state,
                      cust_zip,
                      cust_country,
                      cust_contact,
                      cust_email)
VALUES(1000000006,
      'Tony Land',
      '123 Any Street',
      'New York',
      'NY',
      '11111',
      'USA',
      NULL,
      NULL);
                 

# 查询插入
# 从一个表中查出来的数据，插入到另一张表中
INSERT INTO Customers(
  cust_id,
  cust_contact,
  cust_email,
  cust_name,
  cust_address,
  cust_city,
  cust_state,
  cust_zip,
  cust_country
)
SELECT cust_id2, -- 列名不一定匹配
      cust_contact2,
      cust_email2,
      cust_name2,
      cust_address2,
      cust_city2,
      cust_state2,
      cust_zip2,
      cust_country2
FROM CustNew; -- 假想的表，里面有上述这些字段

# 从一个表复制到另一个表

CREATE TABLE CustCopy AS SELECT * FROM Customers;
