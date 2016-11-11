/**
 * Created by My on 2016/11/7.
 */
requirejs.config({
    // 设置根路径
    baseUrl:"js/lib",
    paths:{
        "app":"../app",
        "jquery":"jquery-3.1.1"
    }
});
define(["jquery","app/nav","app/menu","app/lunbo","app/freeWalk","app/keyWord"],function($,nav,menu,banner,fWalk,sug){
    nav(); // 首页导航
    menu(); // 首页菜单
    banner(); // 轮播图
    fWalk(); // 机酒自由行
    sug(); // 关键字搜索
});
