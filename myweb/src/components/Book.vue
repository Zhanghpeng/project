<template>
  <div class="bookview">
    <div class="changebook"  v-if='ok'>
      <el-form :label-position="labelPosition" label-width="80px" v-model="book">
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
        <div class="btn">
          <button @click="btn1(book)">保存</button>
          <button @click="btn2">取消</button>
        </div>

      </el-form>
    </div>
    <el-container>
      <el-header>
        <el-row class="welcome" gutter="50">
          <el-col :span="4">
            <div class="grid">
              <img width="40px" src=".././assets/timg.jpg" alt="logo">
            </div>
          </el-col>
          <el-col :span="14">
            <div class="grid" font-size="30px">欢迎登入我的书屋后台管理界面</div>
          </el-col>
          <el-col :span="6">
            <div class="grid" font-size="24px">你好！{{account}}</div>
          </el-col>
        </el-row>
      </el-header>
      <el-footer>
        <el-row gutter="20">
          <el-col :span="4">
            <el-button width="200px" @click="showall">全部图书信息 </el-button>  
          </el-col>
          <el-col :span="4">
            <el-button width="200px" @click="addbook">添加图书 </el-button>  
          </el-col>
          <el-col :span="12">
            <div class="grid">
              <el-input v-model="name"></el-input>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid">
              <el-button icon="el-icon-search" circle  @click="findbook" ></el-button>
            </div>
          </el-col>
          
          <el-col :span="3">
            <div class="grid"><el-button @click="quit">退出</el-button></div>
          </el-col>
        </el-row>
      </el-footer>
      <el-maim>
        <ul>
          <li v-for="book in books" v-model="Book" :id="book._id">
            <el-card class="box-card">
              <div class="img">
                <img :src="book.img" alt="封面" width="220px" height="300px">
              </div>

              <div class="info">简介:{{book.info}}</div>

              <ul class="left">
                <li>书名:{{book.name}}</li>
                <li>作者:{{book.author}}</li>
                <li>类型:{{book.type}}</li>
              </ul>
              <div class="btn">
                <el-button type="primary" icon="el-icon-edit" circle @click="open1(book)"></el-button>
                <el-button type="danger" icon="el-icon-delete" circle @click="open2(book)"></el-button>
              </div>
            </el-card>
          </li>
        </ul>
      </el-maim>
    </el-container>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  padding-top: 1px;
}
.changebook{
  background:rgba(255, 255, 255, 0.8);
  margin:50px 300px;
  padding: 20px 20px;
  width:800px;
  height:500px ;
  position: fixed;/*这里一定要设置*/
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}
ul li {
  list-style: none;
  float: left;
  display: block;
  width: 650px;
  margin: 10px 10px;
}
.box-card {
  width: 650px;
  height: 500px;
  margin: 10px 10px;
  border-radius: 30px;
  background: rgba(120, 36, 231, 0.2);
  text-align: left;
}
.box-card .img {
  float: left;
  border: ridge 2px;
  width: 220px;
  height: 300px;
}
.box-card .left {
  list-style: none;
  float: left;
  width: 250px;
  height: 150px;
  margin-top: 20px;
  text-align: left;
  font-size: 24px;
}
.box-card .info {
  float: right;
  margin-right: 30px;
  width: 300px;
  height: 400px;
  font-size: 24px;
}
.btn {
  margin-top: 10px;
  float: right;
  width: 100px;
  height: 50px;
  font-size: 24px;
  text-align: center；;
}
.el-header,.el-footer {
  line-height: 50px;
  text-align: center;
  background:rgba(133, 122, 122, 0.8);
}

.el-aside {
}

.el-main {
  height: 500px;
  background: red;
  text-align: center;
  line-height: 100px;
}

body > .el-container {
  margin: 0;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-row {
  margin-bottom: 20px;
  height: 50px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.grid {
  border-radius: 4px;
  min-height: 50px;
}
</style>

<script>
export default {
  data() {
    return {
      ok:false,
      account:'',
      name:'',
      book:{},
      books: []
    };
  },methods: {
    addbook(){
      this.$router.replace('/addbook')
    },
    findbook(){
      
      var book={
        name:''
      };
      book.name= this.name;
      this.axios.post("http://127.0.0.1:7001/bookfind",book).then(body =>{
                this.books = body.data.data;
                
     });
    },
    showall(){
     this.axios.get("http://127.0.0.1:7001/bookshow").then(body =>{
                this.books = body.data.date;
                
     });
    },
    quit(){
      this.$router.replace('/');
    },
    // 删除图书
      open2(book) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          
          this.axios.post("http://127.0.0.1:7001/bookdelete",book).then(body =>{
                var sta = body.status;
                if(sta==200){
                  document.getElementById(book._id).style.display="none";
                  this.$message({
                  type: 'success',
                  message: '删除成功!'
                });}  
          else{
            this.$message({
            type: 'success',
            message: '操作失败！！!'
          });
          }
        });  
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      open1(book){
        this.book=book
        this.ok=!this.ok;
      },
      btn1(book){
        this.axios.post("http://127.0.0.1:7001/bookupdate",book).then(res=>{
          var sta=res.status;
          if(sta==200){
            this.$message({
                  type: 'success',
                  message: '修改成功!'
                });
          }else{
            this.$message({
            type: 'success',
            message: '修改失败！！!'
          });
          }

        });
         this.$alert('<strong color="red" > 操作成功</strong>',{
          dangerouslyUseHTMLString: true })
          this.ok = !this.ok
      },
      btn2(){
        this.$confirm('检测到未保存的内容，是否在离开页面前保存修改？', '确认信息', {
          distinguishCancelAndClose: true,
          confirmButtonText: '保存',
          cancelButtonText: '放弃修改'
        }).then(() => {
            this.$message({
              type: 'info',
              message: '保存修改'
            });
            this.ok = !this.ok
          })
          .catch(action => {
            this.$message({
              type: 'info',
              message: action === 'cancel'
                ? '放弃保存并离开页面'
                : '修改失败'
            })
            this.ok = !this.ok
          });
      }
    }
    
};
</script>
