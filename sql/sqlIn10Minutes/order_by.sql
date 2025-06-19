-- Active: 1739250781633@@127.0.0.1@3090@my_shop

# ORDER BY指定prod_name列排序
# ⚠️ ORDER BY是SELECT语句中最后一条子句（可以是展示的列，用于排序的列也可以不展示）
SELECT prod_name FROM Products ORDER BY prod_name;

# 按多个列排序：先按prod_price排序，再按prod_name排序
SELECT prod_id, prod_price, prod_name FROM Products ORDER BY prod_price, prod_name;

# 简写法：列的相对位置(按SELECT展示列的第2，3列排序)
SELECT prod_id, prod_price, prod_name FROM Products ORDER BY 2, 3;

# 默认升序ASC，DESC指定降序
SELECT prod_id, prod_price, prod_name FROM Products ORDER BY prod_price DESC;

# 多列情况
# ⚠️DESC只作用于前面那一列
# 按照prod_price降序排序，再按prod_name生序排序
SELECT prod_id, prod_price, prod_name FROM Products ORDER BY prod_price DESC, prod_name;

/*
  ❤️
  排序的时候，A该排在a前面还是后面，取决于数据库设置
 */
