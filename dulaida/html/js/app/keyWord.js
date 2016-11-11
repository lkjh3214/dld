/**
 * Created by My on 2016/11/8.
 */
define(["jquery"],function($){
    showInp();

    //&keyword=w&tim                                                                   er=1478613758877&_=1478613754856
    function suggestion(){
        var kw = null;
        var date = new Date();
        var time = Date.parse(date);
        $(".user_login input").on("keyup",function(){
            kw = $(this).val();
            $.ajax({
                type:"get",
                url:baseUrl+"&keyword="+kw+"&timer="+time,
                success:showData
            })
        })
        var baseUrl = "http://z.qyer.com/qcross/home/ajax?action=sitesearch";
    };
    return suggestion;
});
function getStyle(node,attr){
    if(node.currentStyle){
        return parseInt(node.currentStyle[attr]);
    }else{
        return parseInt(getComputedStyle(node,false)[attr]);
    }
};
// 鼠标滑过input事件
function showInp(){
    $(".user_login form").on("mouseenter",function(){
        $(this).css("background","none");
        $(".user_login input").animate({"margin-right":"0"},1000);
    }).
    on("mouseleave",function(){
        $(".user_login input").animate({"margin-right":"-165px"},1000);
        console.log($(".user_login input").css('margin-right'));
        if(getStyle($(".user_login input")[0],"marg in-right") >= -165 && getStyle($(".user_login input")[0],"margin-right") <= -160){
            $(this).css({
                'background':'url("images/bg_03.png") no-repeat center',
                'background-position': '0 6px',
                'background-size': '60%'
            });
        }

    })
}

//回执函数
function showData(data){
    console.log(data);
}
