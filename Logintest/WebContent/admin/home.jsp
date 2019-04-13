<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>login</title>
<link rel="stylesheet" href="css/index.css" />

</head>
<body>

	<script type="text/javascript">
   function checkName() {
	var username=document.getElementById("user").value;
	if(username==""){
		document.getElementById("nameerror").innerHTML="用户名不能为空空空！";
		return false;
	}
	return true;
}
   function checkPwd() {
		var username=document.getElementById("pwd1").value;
		if(username==""){
			document.getElementById("pwderror").innerHTML="密码不能为空！";
			return false;
		}
		return true;
	}
   
   
   function checkForm() {
	   var flag1=checkName();
	   var flag2=checkPwd();
	   if(flag1 && flag2){
		   return true;
		   
	   }
	   return false;
	   alert("登录失败！！")
}

</script>
</head>
<body>
<img src="css/bgImg.jpg" class="bgImg">

<div class = "content">
<div class="bidTitle">请输入用户名和密码</div>
<div class="logCon">
 <form action="../Webjump" method="post" onsubmit=" return checkForm()">
 
  <div class="line">
  用户：<input class="bt_input" type="text" name="username" id="user" onblur="checkName()"><br>
  <span id="nameerror"></span>
  </div> 
  <div class="line">
   密码：  <input class="bt_input" type="password" name="pwd" id="pwd1"  onblur="checkPwd()"><br>
   <div id="pwderror" style="display: inline"></div>
  </div>
  
   <input class="logingBut" type="submit" value="提交">
 </form>

</div>
  
</div>
<div style="text-align:center;">
</div>
</body>
</html>