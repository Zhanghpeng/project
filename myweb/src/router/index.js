import Vue from 'vue'
import Router from 'vue-router'
import Addbook from '@/components/Addbook'
import Login from '@/components/Login'
import Signup from '@/components/SignUp' 
import Forget from '@/components/Forget'
import Books from '@/components/Books'
import Book from '@/components/Book'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:"/signup",
      name:'signup',
      component:Signup
    },
    {
      path:"/book",
      name:'book',
      component:Book
    },{
      path:'/forget',
      name:"forget",
      component:Forget
    },{
      path:'/addbook',
      name:"Addbook",
      component:Addbook
    },{
      path:'Books/showall',
      name:'showallbooks'
    }
  ]
})
