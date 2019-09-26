const fs = require('fs');
const path = require('path');
const btoa = require('btoa');
const BitlyAPI = require("node-bitlyapi");
const request = require("request");

const Bitly = new BitlyAPI({
	client_id: "b9d07845eb9360fca6391c054e89f7a99a568e2d",
	client_secret: "a28c42edb02004efda5df2545ddc243efcccce73"	
});

const shortUrl = async (url) => {
    // console.log(access_token);
    Bitly.setAccessToken("ffdca0fa23aee554aa192c225c0eb6d64225a396");
    Bitly.shorten({longUrl:url}, function(err, results) {
        console.log(results);
        if(results){
            return JSON.parse(results);
        }else {
            return JSON.parse(err);
        }
    });
}

const generateShortUrl = async (req, res, next) => {
    // console.log(access_token);
    Bitly.setAccessToken("ffdca0fa23aee554aa192c225c0eb6d64225a396");
    Bitly.shorten({longUrl:"https://github.com/nkirby/node-bitlyapi"}, function(err, results) {
        console.log(results);
        if(results){
            return res.status(200).json(JSON.parse(results));
        }else {
            return res.status(500).json(JSON.parse(err));
        }
    });
}

const bufferToBase64 = (buf) => {
    var binstr = Array.prototype.map.call(buf, function (ch) {
        return String.fromCharCode(ch);
    }).join('');
    return btoa(binstr);
};

const sendSms = async(req, res, next) => {
    var options = { 
        method: 'POST',
        url: 'http://10.170.53.177/cxf/util/smsdb',
        headers: 
        { 
            'postman-token': '1aa0ea5a-ea51-615c-56d2-7f767cff54e0',
            'cache-control': 'no-cache',
            'content-type': 'application/x-www-form-urlencoded' 
        },
        form: { phoneNo: '+6281286159467', message: 'test' } 
    };

    request(options, function (error, response, body) {
        if (error) return res.status(500).json(JSON.parse(error)); // throw new Error(error);
        return res.status(200).json(JSON.parse(body));
    });
}

module.exports = {
    generateShortUrl : generateShortUrl,
    bufferToBase64: bufferToBase64,
    shortUrl: shortUrl,
    sendSms: sendSms
    
}