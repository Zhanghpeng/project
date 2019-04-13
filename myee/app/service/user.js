'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  // 添加用户
  async add(user) {
    const ctx = this.ctx;
    var res = await ctx.model.User.create(user);
    return {data:res};
  }
  //查询用户
  async show(){
    const ctx = this.ctx;
    var res = await ctx.model.User.find();
    return {data:res};
  }
  //查找用户
  async find(account){
    const ctx = this.ctx;
    console.log(account)
    var res = await ctx.model.User.findOne({"username":account.username,"password":account.password});
    return {data:res};
  }
  //更改密码
  async change(account){
    const ctx = this.ctx;
    const res = await ctx.model.User.update({'name':account.name,'username':account.username},{'password':account.password})
  }
}

module.exports = UserService;
