<template>
    <div id="Books">
        <div class="nav">
            <div class="top">
                欢迎登入我的书屋后台管理系统
                <div class="logo">
                    <img src=".././assets/timg.jpg" alt="">
                </div>
                <div class="hello">
                您好 <span>{{username}}</span>
                </div>
             </div>
             <div class="footer">
                 <a href="#Books" @click="showall"> <span > 全部信息</span> </a>
                 <a href="#Books" @click="findbook"> <span > 图书查询</span> </a>
                 <a href="#addbook" @click="addbook">图书添加</a>
                 <a href="#Books"  @click="showall"> <span> 全部信息</span> </a>
                 <a href="" class="last">退出 </a>
             </div>
             <div class="find"  v-if="find ">
                <input type="text" value="请输入书名" v-model="name">
                <button @click="gofind"><img src=".././assets/sous.jpg" alt=""></button>
             </div>
        </div>
        <ul>
            <li class="b" v-for="book in books"  v-if="all">
                <div class="Book">
                    <div class="left">
                        <img :src="book.img" alt="书面">
                        <ul>
                            <li>书名:{{book.name}}</li>
                            <li>作者:{{book.author}}</li>
                            <li>类型:{{book.type}}</li>
                        </ul>
                    </div>
                    <div class="right">
                        <p class="info">简介:{{book.info}}</p>
                        <div class="bt">
                            <button>修改</button>
                            <button @click="delbook">删除</button>
                        </div>
                    </div>
                    
                </div>
            </li>
            
        </ul>
    </div>
</template>

<style scoped>
.nav .top{
    width: 100%;
    height: 60px;
    padding-top: 10px;
    font-size: 30px;
    line-height: 60px;
    background:rgba(123, 156,144, 0.2);
    text-align: center;
}
.nav .top .logo{
    float: left;
    width: 80px;
    height: 50px;
    margin-left: 10px;
}
.nav  .top .logo img{
    width: 50px;
    height: 50px;
    margin: auto auto;
}
.nav .top .hello{
    float: right;
    width: 200px;
    height: 50px;
    text-align: center;
    line-height: 50px;
}

.nav .footer{
    width: 100%;
    height: 50px;
    background: rgba(78,123,234, 0.2);
}
.nav .footer a{
    float: left;
    width: 24%;
    display: block;
    border-right: solid 2px rgba(29, 196, 134, 0.2);
    line-height: 50px;
    text-align: center;
    text-decoration: none;
}
.nav .footer a.last{
    font-size: 15px;
    width: 50px;
    border: none;
}
.find {
    width: 400px;
    margin: 20px auto;
    border: solid 2px yellow;

}
.find  input{
    width: 300px;
    height: 50px;
    font-size: 24px;
   
}
.find button img{
    width: 50px;
    height: 50px;
}

ul li.b{
    float: left;
    width: 600px;
    margin-bottom: 400px;
    margin-right: 50px;
    display: block;
    border: solid 1px white;
    
}
.Book{
    
    height:auto!important; 
    background:rgba(234,123,78, 0.2);
    position: absolute;
    }
.Book .left{
    width: 200px;
    float: left;
}
.Book img{
    width: 160px;
    position: relative;
    margin: 10px 10px;
    margin-left: 20px;
}
.Book .left li{
    float: none;
    height: 25px;
    margin-top: 5px;
    font-size:20px;
    text-align: left; 
}
.Book .right{
    width: 300px;
    float: right;
}
.Book .right .info{
    height: 240px;
    font-size: 20px;

}
.Book .right .bt{
    float: right;
    height: 60px;
    font-size: 34px;
}
</style>


<script>
export default {
   
    data(){
        return{
            name:'三体',
            username:'',
            find:false,
            all:false,
            books:[]
       
         }
    },
    methods:{
        addbook(){
            this.$router.replace('/Addbook')
        },
        delbook(){
            if(confirm("确定要删除!")){
                alert("图书信息删除成功");
            }
            else{
                alert("您取消了")
            }
            
        },
        findbook(){
            
            this.find = true;
            this.all = flase;
            this.books = null
        },
        showall(){
            this.all=true,
            this.find=false,
            this.axios.get("http://127.0.0.1:7001/bookshow").then(body =>{
                this.books = body.data.date;
            });
            
            //  this.books=[
            // {
            // url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552660172996&di=cae05aa85985ad6b4c51e09b69b19ef6&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F59191d900940cc84a9310e374e361e85f9eb176610c79-HtcFXV_fw658",
            // name:"张石页",
            // author:"张石页",
            // type:"玄幻",
            // info:"张石页修仙记追寻哲学，与基友找寻幻想乡",

            // },
            //  {
            // url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552660172996&di=cae05aa85985ad6b4c51e09b69b19ef6&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F59191d900940cc84a9310e374e361e85f9eb176610c79-HtcFXV_fw658",
            // name:"张页",
            // author:"张页",
            // type:"玄幻",
            // info:"张页修仙记追寻哲学，与基友找寻幻想乡",
            // },{
            //  url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=136924973,532872653&fm=27&gp=0.jpg",
            // name:"张页",
            // author:"张页",
            // type:"玄幻",
            // info:"张页修仙记追寻哲学，与基友找寻幻想乡",
            // },{
            //  url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=136924973,532872653&fm=27&gp=0.jpg",
            // name:"张页",
            // author:"张页",
            // type:"玄幻",
            // info:"张页修仙记追寻哲学，与基友找寻幻想乡",
            // }
            // ]
        },
        gofind(){
            this.all = true;
            
            this.books=null,
             this.axios.post("http://127.0.0.1:7001/bookfind",this.name).then(body =>{
                this.books = body.data.date;
                console.log(this.books)
            });
       
        }
    }

}
</script>



