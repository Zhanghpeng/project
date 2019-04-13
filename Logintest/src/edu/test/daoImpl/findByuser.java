package edu.test.daoImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import edu.test.entry.User;
import edu.test.util.Getcon;

//	获取链接

 public class findByuser implements edu.test.dao.UserInterface{
	 Connection con = new Getcon().getcon();
	// 车
	 PreparedStatement pm;
	 
	 ResultSet rs;
	@Override
	public User finduser(String name,String password) {
		// TODO Auto-generated method stub
		User user = null;
		String sql="select * from user where name = ? and password =?";
		try {
			pm = con.prepareStatement(sql);
			pm.setString(1, name);
			pm.setString(2, password);
			rs = pm.executeQuery();
			if(rs.next()) {
				String hobby =rs.getString("hobby") ;
				int age=rs.getInt("age");
				user =new User(name,hobby,age);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return user;
	}
	 
 }
 

