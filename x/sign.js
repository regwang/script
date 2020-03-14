var url="https://prod.plat-service-zuul.regs.com/wechat-api/wechat/wxClock/getWxClockRecord";
var method="GET";
var headers={
    "openId":"oVy_7t4aau4QMQ1WEALovH8WJdPI",
    "User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.12(0x17000c11) NetType/WIFI Language/zh_CN",
    "Origin":"https://wechat.regs.com"
}
var request={
    url:url,
    method:method,
    headers:headers
}
$task.fetch(request).then(response =>{
    console.log(response.body);
    $notify("抓取成功","数据抓到了",response.body);
},reason=>{
    $notify("抓取失败","数据抓取失败",reason.error);
})