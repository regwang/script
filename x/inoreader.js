var body=JSON.parse($response.body);
var reg=/\n*[\s\S]*?<center>[\s\S]+?<\/center>/mg;
for(var i=0;i<body.items.length;i++){
    var content=body.items[i].summary.content;
    // console.log('初始rss内容:-------------');
    // console.log(content);
    content=content.replace(reg,'');
    // console.log('转换后内容:-------------');
    // console.log(content);
    body.items[i].summary.content=content;
}
body=JSON.stringify(body);
$done({body});