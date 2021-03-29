// 42c384fce60660afde9ea70b9f0216ed

// api.openweathermap.org/data/2.5/weather?q=Pune&appid=42c384fce60660afde9ea70b9f0216ed

const http = require("http");
const fs = require("fs");
const requests = require("requests"); 

const homeFile = fs.readFileSync("index.html", "utf-8");
console.log("amit");

const replaceVal = (tempVal, orgVal) =>{
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
    return temperature;
}

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        requests(
            "http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=42c384fce60660afde9ea70b9f0216ed"
        )
        .on("data", (chunk)=>{
            const objdata = JSON.parse(chunk);
            const arrdata = [objdata];
            //console.log(arrdata[0].main.temp);
            const realTimeData = arrdata
                .map((val) => replaceVal(homeFile, val))
                .join("");
            res.write(realTimeData);
            //console.log(realTimeData);
        })
        .on("end", (err)=>{
            if(err) return console.log("connection closed due to error", err);
            console.log("end")
            res.end();
        } )
    }
});

server.listen(8000, "127.0.0.1");