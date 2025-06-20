-- Active: 1739250781633@@127.0.0.1@3090@my_shop

# 执行存储过程
EXECUTE AddNewProduct('JTS01',
                      'Stuffed Eiffel Tower',
                      6.49,
                      'Plush stuffed toy with the text la Tour Eiffel in red white and blue'
);


# 创建存储过程（Oracle）
CREATE PROCEDURE MailingListCount (
  ListCount OUT INTEGER
)
IS
v_rows INTEGER;
BEGIN
  SELECT COUNT(*) INTO v_rows
  FROM Customers
  WHERE NOT cust_email IS NULL;
  ListCount := v_rows;
END;


# 创建存储过程（MySQL）
DELIMITER //
CREATE PROCEDURE MailingListCount(OUT ListCount INT)
BEGIN
  SELECT COUNT(*) INTO ListCount
  FROM Customers
  WHERE cust_email IS NOT NULL;
END //
DELIMITER ;


/* 存储过程的使用 */
-- 声明变量接收结果（变量名以@开头）
SET @email_count = 0;

-- 调用存储过程
CALL MailingListCount(@email_count);

-- 查看结果
SELECT @email_count AS '有效邮箱数量'; 
