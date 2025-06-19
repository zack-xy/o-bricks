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
