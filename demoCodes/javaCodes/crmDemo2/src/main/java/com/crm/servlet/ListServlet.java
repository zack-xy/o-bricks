package com.crm.servlet;

import com.crm.bean.Customer;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/list")
public class ListServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // Servlet从数据库拿到数据，然后转发给JSP
        // JSP拿到数据后拼接html返回给客户端

        // 获取客户数据
        List<Customer> customers = getCustomers();
        // 将客户数据存储到Request中
        req.setAttribute("customers", customers);
        // 转发到list.jsp页面进行数据展示

        RequestDispatcher dispatcher = req.getRequestDispatcher("/page/list.jsp");
        try {
            // 执行请求转发操作
            dispatcher.forward(req, resp);
        } catch (ServletException e) {
            // 处理 Servlet 异常，例如记录日志或返回错误页面
            e.printStackTrace();
            resp.getWriter().println("Servlet Exception occurred: " + e.getMessage());
        } catch (IOException e) {
            // 处理 I/O 异常，例如记录日志或返回错误页面
            e.printStackTrace();
            resp.getWriter().println("I/O Exception occurred: " + e.getMessage());
        }
    }

    private List<Customer> getCustomers() {
        List<Customer> customers = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            customers.add(new Customer("张三" + i, 10+i, 1.55+i));
        }
        return customers;
    }
}
