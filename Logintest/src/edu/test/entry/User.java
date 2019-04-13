package edu.test.entry;

public class User {
 private String name;
 private String password;
 private String hobby;
 private Integer age;
 public User() {
	 
 }
 public User(String name ,String hobby,Integer age) {
	 this.name = name;
//	 this.password = password;
	 this.hobby = hobby;
	 this.age = age;
 }
 
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getHobby() {
		return hobby;
	}
	public void setHobby(String hobby) {
		this.hobby = hobby;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
}
