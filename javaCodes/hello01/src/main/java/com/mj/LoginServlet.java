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
        doPost(req, resp);
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
        outHtml(req, resp);
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

    private void outHtml(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
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
            out.write("<h1 style=\"color: blue; border: 1px solid black;\">登陆成功</h1>");
            out.write("<ul>");
            out.write("<li>个人信息</li>");
            out.write("<li>修改密码</li>");
            out.write("<li>退出登陆</li>");
            out.write("</ul>");
        } else {
            out.write("<h1 style=\"color: red; border: 1px solid black;\">登陆失败</h1>");
            out.write("<ul>");
            out.write("<li>重新登陆</li>");
            out.write("</ul>");
        }
    }

    private void outPlain(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
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
}
