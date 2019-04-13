<template>
<div id="addbook">
    
    <div class="big">
    <el-form :label-position="labelPosition" label-width="80px" v-model="book" >
        <el-form-item label="书名">
            <el-input v-model="book.name" ></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="book.author"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-input v-model="book.type"></el-input>
        </el-form-item>
        <el-form-item label="封面">
          <el-input v-model="book.img"></el-input>
        </el-form-item>
        <el-form-item label="出版社">
          <el-input v-model="book.publish"></el-input>
        </el-form-item>
        <el-form-item label="出版日期">
          <el-input v-model="book.data"></el-input>
        </el-form-item>
        <el-form-item label="简介">
          <el-input v-model="book.info"></el-input>
        </el-form-item>
    </el-form>
    <div class="btn">
        <button @click="ok">保存</button>
        <button @click="revoke">取消</button>
    </div>
    
    </div>
</div>
</template>




<style scoped>
#addbook{
    background: url(".././assets/bgImg.jpg");
    position: absolute;
	top: 0px;
	left: 0px;
	bottom: 0px;
	right: 0px;
	width: 100%;
	height: 100%;
}
.big{
    width: 600px;
    height: 500px;
    margin: auto auto;
    margin-top: 40px;
    font-size: 24px;
    padding: 40px 80px;
    background:rgba(123,145,167, 0.2);
}
.left{
    width: 120px;
    height: 400px;
    float: left;
}
.right{
    width: 200px;
    height: 350px;
    float: left; 
}
.right input{
    width: 250px;
    height: 24px;
    margin-top: 26px;;
}
.btn{
    width: 600px;
    height: 50px;
    text-align: center;
}
</style>
<script>
export default {
    data(){
        return  {
             book:{
                    name:"",
                    author:"",
                    type:"",
                    img:"",
                    publish:'',
                    date:"",
                    info:"",
                },
        }
        
    },
    methods:{

        revoke(){
            this.$router.replace('/book');
        },
        ok(){ 
            if(this.book.name==''||this.book.type==''||this.book.author==''){
               this.$confirm('信息输入有误, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                })  
            }
            else{
            if(confirm("确定要添加该图书信息!")){
                
                this.axios.post(" http://127.0.0.1:7001/bookadd",this.book);
                alert("图书信息添加成功");
            }
            else{
                alert("您取消了")
            }
        }
        }

    }
}
</script>

