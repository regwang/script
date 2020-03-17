if (isHoliday()){
	checkSign();
}

function isHoliday(){
	var date=new Date();
	var week=date.getDay();
	if (1<=week<=5){
		return true;
	}
	console.log('weekend,ignore check');
	return false
}

function checkSign(){
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
        var date=new Date();
        var month=date.getMonth()+1
        month=(month<10) ? ("0"+month) : (""+month);
        var day=date.getDate();
        day=(day<10) ? ("0"+day) : (""+day);
        var today=date.getFullYear()+"-"+month+"-"+day;
		var signDetail=JSON.parse(response.body);
		if (signDetail.success){
			data_list=signDetail.data.sameDay
			if (data_list.length==0){
				$notify("没打上班卡?","今天的上班卡是不是没打?",'');
			}else if (data_list.length==1){
				createTime=data_list[0].createTime+"";
				createTime=createTime.replace(/\-/g,'/');
				now=Date.parse(date)/1000;	
			}
		}else{
			console.log('data error','data error',response.body);
		}
   		console.log(response.body);
   		$notify("抓取成功","数据抓到了",response.body);
	},reason=>{
   		$notify("Sign check error","error when check sign data",reason.error);
	})
}

