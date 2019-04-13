'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 添加用户
  async add() {
    const ctx = this.ctx;
    var user = ctx.request.body || {}
    const res = await ctx.service.user.add(user);
    ctx.body = res; 
  }
 
  // 查询用户
  async show(){
    const ctx = this.ctx;
    const res = await ctx.service.user.show();
    ctx.body = res;
  }
// 用户查找
  async find(){
    const ctx = this.ctx;
    var account = ctx.request.body || {}
    const res = await ctx.service.user.find(account);
    ctx.body = res;
  }
  // 更改密码
  async change(){
    const ctx = this.ctx;
    var account = ctx.request.body || {}
    const res = await ctx.service.user.change(account);
    ctx.body=res;
  }
}

module.exports = UserController;
