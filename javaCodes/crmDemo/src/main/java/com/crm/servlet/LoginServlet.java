package com.crm.servlet;

import com.crm.bean.Customer;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 1. 设置请求数据的编码
        req.setCharacterEncoding("UTF-8");

        // 2. 获取请求参数
        String username = req.getParameter("username");
        String password = req.getParameter("password");

        // 3. 先设置响应的内容类型(MIMEType + 数据编码)
        resp.setContentType("text/html;charset=UTF-8");
        // 4. 拿到输出流
        PrintWriter out = resp.getWriter();

        // 5. 判断
        if("123".equals(username) && "123".equals(password)) {
            success(out);
        } else {
            failed(out);
        }
    }

    private List<Customer> getCustomers() {
        List<Customer> customers = new ArrayList<>();
        for(int i = 0; i < 10; i++) {
            customers.add(new Customer("张三" + i, "1351234123" + i, ((i & 1) == 1) ? "男": "女"));
        }
        return customers;
    }

    private void success(PrintWriter out) {
        out.write("<html>");
        out.write("<head>");
        out.write("<href src=\"http://localhost:8080/crm/index.css\">");
        out.write("</head>");
        out.write("<body>");
        out.write("<h1 style=\"color: blue; border: 1px solid black;\">登陆成功</h1>");
        out.write("<table>");
        out.write("<thead>");
        out.write("<tr>");
        out.write("<th>姓名</th>");
        out.write("<th>电话</th>");
        out.write("<th>性别</th>");
        out.write("</tr>");
        out.write("</thead>");
        out.write("<tbody>");
        List<Customer> customers = getCustomers();
        for(Customer customer : customers) {
            out.write("<tr>");
            out.write("<td>" + customer.getName() +"</td>");
            out.write(" <td>" + customer.getPhone() + "</td>");
            out.write("<td>" + customer.getSex() +"</td>");
            out.write("</tr>");
        }
        out.write("</tbody>");
        out.write("</table>");
        out.write("</body>");
        out.write("</html>");
    }

    private void failed(PrintWriter out) {
        out.write("登陆失败");
    }
}
