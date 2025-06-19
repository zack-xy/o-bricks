-- Active: 1739250781633@@127.0.0.1@3090@my_shop

# 分组可以将数据分为多个逻辑组，对每个组进行聚集计算

# 每一个供应商有多少个产品
# COUNT计算行数，GROUP BY以供应商分组，分别计算行数
SELECT vend_id, COUNT(*) AS num_prods FROM Products GROUP BY vend_id;

/* ❤️ GROUP BY 规则

  1、GROUP BY子句可以包含任意数目的列，可以对分组进行嵌套
  2、如果在GROUP BY子句中嵌套了分组，数组将在最后指定的分组上进行汇总
  3、GROUP BY子句中列出的每一列必须是检索列或有效表达式（不能是聚集函数）
  4、不允许GROUP BY带有长度可变的数据类型
  5、除聚集计算语句之外，SELECT语句中的每一列都必须在GROUP BY子句中给出
  6、如果分组列中包含NULL值的行，则NULL将作为一个分组返回。如果列中有多行NULL值，它们将分为一组
  7、GROUP BY子句必须出现在WHERE子句之后，ORDER BY子句之前
 */


# HAVING 用来过滤分组

SELECT cust_id, COUNT(*) AS orders FROM Orders GROUP BY cust_id HAVING COUNT(*) >= 2;
# ❌下面这个是错的，违背了上面第7条，报错
SELECT cust_id, COUNT(*) AS orders FROM Orders GROUP BY cust_id WHERE orders >= 2;

# 同时使用WHERE和HAVING的例子
# 列出有2个以上产品且价格大于等于4的供应商
SELECT vend_id, COUNT(*) AS num_prods FROM Products WHERE prod_price >= 4 GROUP BY vend_id HAVING COUNT(*) >= 2;


# 同时使用GROUP BY和ORDER BY的例子
SELECT order_num, COUNT(*) AS items FROM OrderItems GROUP BY order_num HAVING COUNT(*) >= 3 ORDER BY items, order_num;



