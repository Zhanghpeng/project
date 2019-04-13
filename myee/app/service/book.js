'use strict';

const Service = require('egg').Service;

class BookService extends Service {
  //查询全部图书
  async show() {
    const ctx = this.ctx;
    const res = await ctx.model.Book.find();
    return  {date:res}
  }
  //添加图书
  async add(book){
    const ctx = this.ctx;
    const res = await ctx.model.Book.create(book);
  }
  // 查找图书
  async find(book){
    const ctx = this.ctx ;
    console.log(book)
    const res = await ctx.model.Book.find({"name":book.name});
    console.log(res)
    return {data:res}
  }
  //删除
  async delete(book){
    const ctx = this.ctx;
    const res = await ctx.model.Book.findOneAndRemove({"_id":book._id});
    return {data:res}
  }
  //更改
  async update(book){
    const ctx = this.ctx;
    var upbook = {'name':book.name,'author':book.author,'type':book.type,'img':book.img,"info":book.info,'publish':book.publish};
    const res = await ctx.model.Book.findOneAndUpdate({'_id':book._id},upbook);
    return {data:res};
  }
}

module.exports = BookService;
