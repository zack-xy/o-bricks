package com.mj;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    /**
     * 当客户端发送的是GET请求，就会调用Servlet的doGet方法
     * @param req 用来接收客户端发送的数据
     * @param resp 用来给客户端发送响应
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 1、取出客户端发送的数据
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        System.out.println(username + "__" + password);

        resp.setContentType("text/plain;charset=utf-8");
        PrintWriter out = resp.getWriter();
        // 2、判断用户名密码是否正确
        if("123".equals(username) && "123".equals(password)) {
            // 3、给客户端发送响应
            out.write("登陆成功");
        } else {
            out.write("登陆失败");
        }
    }

    /***
     * 当客户端发送的是POST请求，就会调用Servlet的doPost方法
     * @param req
     * @param resp
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("LoginServlet zack doPost");
    }
}
