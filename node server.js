/**
 * Created by zhangyatao on 2014/6/9.
 */
var http = require("http");
var fs = require("fs");
var urlpara = require("url");
http.createServer(function (req, res) {
    var urls = urlpara.parse(req.url);
    var url = urls.pathname;
    urls.query ? console.log(urls.query) : void 0;
    if (url == "/") {
//        readFile("junk/ajax.html", res);
//        readFile("test_1.html", res);
        readFile("SDK_Invoker.html", res);
    } else if (url == "/qwer") {
        readFile("SDK_Invoker.html", res);
//        res.writeHead(200,
//            {"Access-Control-Allow-Origin": "*",
//                "Set-Cookie": "phpauth=asdfasdhfgahsdgf",
//                "Access-Control-Request-Headers": "cookie",
//                "Access-Control-Allow-Headers": "cookie",
//                "Access-Control-Allow-Credentials": true});
//        res.writeHead(200);
//        res.end(JSON.stringify({name:'zhangyatao',age:23}));
    } else if (url == "/register") {
        console.log(req.headers);
        res.writeHead(200,
            {"Access-Control-Allow-Origin": "指定域名",
                "Access-Control-Request-Headers": "cookie",
                "Access-Control-Allow-Headers": "cookie",
                "Access-Control-Allow-Credentials": true});
        res.end();
    }else if(url=="/xhr"){
        res.writeHead(200);
        setInterval(function(){
            res.end("send")
        },5000);
    } else {
        readFile(url.slice(1), res);
    }
}).listen(1111);

function readFile(path, res) {
    console.log(path);
    fs.readFile(path, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end("server error!not found this page!");
        } else {
            res.end(data);
        }
    });
}