/**
 * Created by My on 2016/11/7.
 */
var express = require("express");
var fs = require("fs"); //读取文件
var app = express();
var http = require("http");

var gData = null; // 导航数据
var mData = null; // 菜单数据
var bData = null; // 导航数据
var fData = null; // 机酒自由行数据

// 读取json文件
fs.readFile("data/menu.json",function(err,data){
    if(err){
        throw new Error("数据读取失败");
    }
    gData = data;
    fs.readFile("data/index/menu.json",function(err1,data1){
        if(err1){
            throw new Error("数据读取失败");
        }
        mData = data1;
        fs.readFile("data/index/banner.json",function(err2,data2){
            if(err2){
                throw new Error("数据读取失败");
            }
            bData = data2;
            fs.readFile("data/index/freeWalk.json",function(err3,data3){
                if(err3){
                    throw new Error("数据读取失败");
                }
                fData = data3;
            })
        })
    });
    console.log("数据读取完毕");
    app.listen(3333);
});
app.use(express.static("html"));




//请求数据
//设置跟目录的跨域
app.all("/*",function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*"); // 解决跨域
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
})
// 导航菜单数据
app.get("/nav",function(req,res){
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    res.send(gData);
});
//首页主菜单数据
app.get("/menu",function(req,res){
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    res.send(mData);
});
//轮播图数据
app.get("/banner",function(req,res){
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    res.send(bData);
});
// 机酒自由行数据
app.get("/freeWalk",function(req,res){
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    res.send(fData);
});