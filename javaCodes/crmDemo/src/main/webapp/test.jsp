<%--
  Created by IntelliJ IDEA.
  User: zhengxiyun
  Date: 2025/1/17
  Time: 16:54
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
  测试JSP文件
    <%!
        private int age = 10;

        public void test() {
            System.out.println(123);
        }
    %>
    <%
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        if("123".equals(username) && "123".equals(password)) {
    %>
         <h1 style="color:blue">登陆成功</h1>
    <%
        } else {
    %>
            <h1 style="color:red">登陆失败</h1>
    <%
        }
    %>

</body>
</html>
