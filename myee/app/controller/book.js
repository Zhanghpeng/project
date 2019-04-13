'use strict';

const Controller = require('egg').Controller;

class BookController extends Controller {
  //查询图书信息
  async show() {
    const ctx = this.ctx;
    const res = await ctx.service.book.show();
    ctx.body = res;
  }
// 添加图书信息
  async add(){
    const ctx = this.ctx;
    var book = ctx.request.body || {}
    const res = await ctx.service.book.add(book);
  }
  //查找图书
  
  async find(){
    const ctx = this.ctx;
    var book = ctx.request.body || {}
    const res = await ctx.service.book.find(book);
    ctx.body = res;
  }
  //删除图书
  async delete(){
    const ctx = this.ctx;
    var book = ctx.request.body ||{}
    const res = await ctx.service.book.delete(book);
    if(book._id==res.data._id){
      ctx.body = 500;
    }
    else{
      ctx.body=404;
    }
    
  }
  //图书更新
  async update(){
    const ctx = this.ctx;
    var book = ctx.request.body ||{}
    const res = await ctx.service.book.update(book);
    ctx.body = res;
  }

}

module.exports = BookController;
