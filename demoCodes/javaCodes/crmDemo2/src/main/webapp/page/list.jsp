<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>用户列表</title>
    <style>
      th, td {
        border: 1px solid black;
      }
    </style>
</head>
<body>

<a href="add.html">添加</a>

<table>
  <thead>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
      <th>身高</th>
    </tr>
  </thead>
  <tbody>
    <c:forEach begin="1" end="3">
        <tr>
            <td>姓名</td>
            <td>年龄</td>
            <td>身高</td>
        </tr>
    </c:forEach>
  </tbody>
</table>
</body>
</html>