package edu.test.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Getcon {
	Connection con = null;
	public Connection getcon() {
		String Driver = "com.mysql.cj.jdbc.Driver";
		String url="jdbc:mysql://localhost:3306/test?serverTimezone=GMT&useSSL=false";
		String user ="root";
		String password="root";
		try {
			Class.forName(Driver);
			con = DriverManager.getConnection(url, user, password);
		} catch (Exception e) {
			System.out.println("�����쳣");
		}
		if(con!=null) {
			System.out.println("���ӳɹ���");
		}
		else {
			System.out.println("����ʧ��");
		}
		return con;
		
	}
	public void colse(Connection con) {
		try {
			con.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
