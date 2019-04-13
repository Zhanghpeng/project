<template>

<div id="login">
  	<img class="bgImg" src=".././assets/back.jpg" alt="背景" >
	<div class="content">
		<div class="bidTitle">我的“书屋”登录</div>
		<div class="logCon">
			<div class="line"><span>账号:</span>
				<input class="bt_input" type="text"  v-model="account.username"/>
			</div>
			<div class="line">
				<span>密码:</span>
				<input class="bt_input" type="password" v-model="account.password"/>
			</div>
			<a class='forget' href="./#/forget" onclick="return false;" >忘记密码？？</a>
			<a class='register' href="./#/signup"  >注册</a>
			<button type="button" class="logingBut" @click="login">登录</button>
			
			
		</div>
	</div>
</div>

</template>

<style scoped>
body {
	text-align: center;
	height: 100%;
}

.bgImg {
	position: absolute;
	top: 0px;
	left: 0px;
	bottom: 0px;
	right: 0px;
	width: 100%;
	height: 100%;
}

.logo {
	width: 800px;
}

.bidTitle {
	color: #e6e6e6;
	text-align: center;
	font-size: 34px;
	font-weight: 600;
}

.logCon {
	width: 500px;
	height:300px;
	background: rgba(44,44,44,0.2);
	text-align: center;
	color: #FFFFFF;
	margin: 0 auto;
	padding-top: 40px;
	margin-top: 40px;
}
.logCon .forget{
	float:left;
	color: #971fc7;
	text-decoration: none;
	font-size: 20px;
}
.logCon .register{
	float: right;
	color: #971fc7;
	align-self: link;
	text-decoration: none;
	font-size: 20px;
}

/* .line {} */

body .content {
	width: 42%;
	position: fixed;

	left: 29%;
	padding: 5% 1%;
	margin-top: 6%;
	border-radius: 5px;
}

body .logingBut {
	background: #c4ddd1a6;
	border: none;
	padding: 12px 0px;
	color: #971fc7;
	border-radius: 2px;
	width: 330px;
	margin-left: 30px;
	margin-top: 5px;
}

body .bt_input {
	border-radius: 2px;
	border: none;
	padding: 11px 5px;
	width: 330px;
	margin-right: 20px;
	color: #333;
	margin-left: 5px;
	margin-bottom: 18px;
	background: #ffffffd9;
}

body .logCon span {
	font-size: 18px;
	height: 40px;
	line-height: 40px;
}
</style>
<script>
export default {
	name:'login',
	data(){
		return{
			account:{
				username:'',
				password:''
			}
		}
		
		
	},
	methods:{

		login(){
			if(this.account.username==''&&this.account.password==''){
				alert("信息为空")
			}else{
			this.axios.post('http://127.0.0.1:7001/userfind',this.account).then(res =>{
				console.log(res.data.data)
				if(res.data.data){
					this.$router.push("/book" ).then(this.res.data.data.name ={account})
				}
				else{alert("用户错误")
					
				}
			},
			err=>{
				alert("密码或账号输入错误");
			});
			
		}
		}
	}
	
}
</script>









