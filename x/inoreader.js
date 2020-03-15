var str_original=$response.body;
var reg=/\n*[\s\S]*?\u003Ccenter\u003E[\s\S]+?\u003C\/center\u003E/mg;
str_original=str_original.replace(reg,'');
$done({str_original});