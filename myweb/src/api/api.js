import { request } from "https";
// 等入
export function login(account){
    return request({
        method:'post',
        url:'',
        data:account
    });
}

// 注册
export function signup(account){
    return request({
        method:'post',
        url:'',
        data:account
    });
}

// 改密
export function changepwd(account){
    return request({
        method:'post',
        url:'',
        data:account
    });
}
// 图书全部
export function showbook(){
    return request({
        method:'get',
        url:'http://127.0.0.1:7001/bookshow',
    });
}

// 图书查找
export function findbook(name){
    return request({
        method:'post',
        url:'',
        data:name
    });
}
// 图书修改
export function updatebook(book){
    return request({
    method:'post',
    url:'',
    data:book
    });
}

//图书删除
export function deletebook(book){
    return request({
        method:'post',
        url:'',
        data:book
    });
}
//图书添加
export function addbook(book){
    return request({
        method:'post',
        url:'',
        data:book
    });
}

