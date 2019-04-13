<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>成功</h1>
<span>你好！！</span><%=request.getAttribute("uname") %><br>
<span>年龄！！</span><%=request.getAttribute("age") %><br>
<span>爱好！！</span><%=request.getAttribute("hobby") %><br>
</body>
</html>