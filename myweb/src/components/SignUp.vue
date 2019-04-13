<template>
 <div id="signup">
  	<img class="bgImg" src=".././assets/back.jpg" alt="背景" >
	<div class="content">
		<div class="bidTitle">我的“书屋”注册</div>
		<div class="logCon">
			<div class="line">
				<span >姓名:</span>
				<input class="bt_input" type="text" v-model="user.name"/>
			</div>
			<div class="line"><span>账号:</span>
				<input class="bt_input" type="text" v-model="user.username" />
			</div>
			<div class="line">
				<span>密码:</span>
				<input class="bt_input" type="password" v-model="user.password" />
			</div>
			<div class="line">
				<span>确认密码:</span>
                <input class="bt_input" type="password" v-model="pswd"/>
			</div>
			<button class="logingBut" @click="turn">取消</button>
			<button type="button" class="logingBut" @click="ok">注册</button>
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
.line span{
	float: left;
	margin-left: 10px;
	width: 100px;
}

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
	width: 100px;
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
	data(){
		return{
			user:{
				name:'',
				username:'',
				password:'',
			},
			
			pswd:''	
		}
	},methods:{
		turn(){
			this.$router.replace("/")
		},
		ok(){
			if(this.user.password===this.pswd ){
			this.axios.post(" http://127.0.0.1:7001/useradd",this.user).then(res=>{
				var sta=res.status;
				if(sta==200){
					alert("注册成功，返回登入");
					this.$router.replace("/")
				}
				else{
					alert("注册失败");
				}
			});	
			}
			else{
				alert('密码不一致')	
			}
			
		}
	}
}
</script>
