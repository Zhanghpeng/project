<script>
export default {
    data(){
        return{
            account:{
                name:'',
                username:'',
                password:''
            },
            book:{
                name:'',
                author:'',
                type:'',
                info:'',
                date:'',
                publish:'',
                img:''
            }
        }
    },
    methods:{
        // 等入api
        login(){
            this.axios.post('url',this.account).then( )
        },
        // 注册api
        sigup(){

        },
        // 改密api
        changpwd(){

        },
        // 图书信息api
        showbook(){

        },
        // 查找图书api
        findbook(){

        },
        // 修改图书api
        changebook(){

        },
        // 删除图书api
        deletebook(){

        }
    }
}
</script>