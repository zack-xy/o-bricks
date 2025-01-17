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
        // 0、设置请求数据的编码
        req.setCharacterEncoding("utf-8");
        // 1、取出客户端发送的数据
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        // 设置响应的内容类型
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

    /**
     * HTTP请求
     * > GET请求
     *      1> 请求参数拼接在请求路径后面
     *      2> 请求头
     * > POST请求
     *      1> 请求参数放在请求体中
     *      2> 请求头
     */
}
