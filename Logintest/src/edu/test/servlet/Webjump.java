package edu.test.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.test.entry.User;

import edu.test.daoImpl.findByuser;

/**
 * Servlet implementation class Webjump
 */
@WebServlet("/Webjump")
public class Webjump extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Webjump() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("utf-8");
//		response.getWriter().append("Served at: ").append(request.getContextPath());
		request.setCharacterEncoding("UTF-8");
//		1 ���ղ���	��������������
	
		String username=request.getParameter("username");
		String  pwd = request.getParameter("pwd");
		System.out.println(username  + pwd); 
//		2 �ж�
		boolean falg =false;
		User user = null;
		findByuser find =  new findByuser();
		user = find.finduser(username, pwd);
		
		
		if(user !=null&&!user.getHobby().equals("")) {
			System.out.println("����");
			falg = true;
		}
//		3 ��ת
		if(falg) {
			request.setAttribute("uname", username);
			request.setAttribute("hobby", user.getHobby());
			request.setAttribute("age", user.getAge());
			request.getRequestDispatcher("admin/success.jsp").forward(request, response);
//			response.sendRedirect("admin/success.jsp");
		}
		else{
			response.sendRedirect("admin/home.jsp");
		}
	}

		
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
