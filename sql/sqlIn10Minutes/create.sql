-- Active: 1739250781633@@127.0.0.1@3090@my_shop

# 创建表
CREATE TABLE Products 
(
  prod_id CHAR(10) NOT NULL,
  vend_id CHAR(10) NOT NULL,
  prod_name CHAR(254) NOT NULL,
  prod_price DECIMAL(8, 2) NOT NULL,
  prod_desc VARCHAR(1000) NULL
);


# 默认值
CREATE TABLE OrderItems 
(
  order_num      INTEGER       NOT NULL,
  order_item     INTEGER       NOT NULL,
  prod_id        CHAR(10)      NOT NULL,
  quantity       INTEGER       NOT NULL   DEFAULT 1,
  item_price     DECIMAL(8,2)  NOT NULL 

);


# 更新表（结构）

# 增加列
ALTER TABLE Vendors
ADD vend_phone CHAR(20);

# 删除列
ALTER TABLE Vendors
DROP COLUMN vend_phone;


# 删除表
DROP TABLE CustCopy;
