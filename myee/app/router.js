'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
// 信息显示
  router.get('/bookshow',controller.book.show);
  router.get('/usershow',controller.user.show);
// 信息添加
  router.post('/bookadd',controller.book.add);
  router.post('/useradd',controller.user.add);
  // 信息查找
  router.post('/userfind',controller.user.find);
  router.post('/bookfind',controller.book.find);
  //信息更改 
  router.post('/bookupdate',controller.book.update);
  router.post('/userupdate',controller.user.change);
  // 信息删除
  router.post('/bookdelete',controller.book.delete);
};
