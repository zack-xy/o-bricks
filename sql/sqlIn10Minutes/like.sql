-- Active: 1739250781633@@127.0.0.1@3090@my_shop

/* ❤️ 通配符只能用于文本字段（字符串），非文本数据类型不能使用通配符搜索 */

# % 通配符
# 表示任意字符出现任意次数
# 以Fish开头的产品
# ⚠️ 区不区分，是DBMS配置的
SELECT prod_id, prod_name FROM Products WHERE prod_name LIKE 'Fish%';


SELECT prod_id, prod_name FROM Products WHERE prod_name LIKE '%bean bag%';

SELECT prod_name FROM Products WHERE prod_name LIKE 'F%y';


# _ 通配符
# 只匹配单个字符
# 下面这个例子匹配了2个字符
SELECT prod_id, prod_name FROM Products WHERE prod_name LIKE '__ inch teddy bear';

# [] 统配符 ❌ MySQL不支持
# 指定一个字符集（指定位置）
SELECT cust_contact FROM Customers WHERE cust_contact LIKE '[JM]%' ORDER BY cust_contact;
