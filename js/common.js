function formatDate(timestamp, format, default_value) {
    /* format : yyyy-MM-dd-HH-mm-ss */
    var timestamp = Number(timestamp) || 0,
      default_value = default_value || '',
      ret;

    var covertNumberToTwoDigit = function (number) {
      return number.toString().replace(/^(\d)$/, '0$1');
    }
    if (!timestamp || timestamp == '0') {
      ret = default_value;
    } else {
      if (timestamp.toString().length == 10) {
        timestamp = timestamp * 1000;
      }
      var date = new Date(timestamp),
        full_year = date.getFullYear() || '0000',
        month = covertNumberToTwoDigit(date.getMonth() + 1) || '00',
        day = covertNumberToTwoDigit(date.getDate()) || '00',
        hour = covertNumberToTwoDigit(date.getHours()) || '00',
        minute = covertNumberToTwoDigit(date.getMinutes()) || '00',
        second = covertNumberToTwoDigit(date.getSeconds()) || '00';
      ret = format.replace(/yyyy/, full_year).replace(/MM/, month).replace(
        /dd/, day).replace(/HH/, hour).replace(/mm/, minute).replace(
        /ss/,
        second);
    }
    return ret;
  }


  function rgex(str){
    var patt = /\"(.+?)\"/; 
    str = str.match(patt)[0].replace("\"","").replace("\"","");

    return str;
}

 function getRequest() {   
    var url = location.search; //获取url中"?"符后的字串   
    var theRequest = new Object();   
    if (url.indexOf("?") != -1) {   
       var str = url.substr(1); 
       strs = str.split("&");
       for(var i = 0; i < strs.length; i ++) {   
          theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
       }   
    }
    // console.log(theRequest);
    return theRequest;   
 } 

 function testHttp(url){
    var reg = /http(s)*:\/\//
    return reg.test(url)?url:'http://'+url;
 }

 function getHost(url){
    var reg = /(http(s)?:\/\/.+?)\/(.+)/gi;
    var res = reg.exec(url);
    var savehost = res&&res[1]?res[1]:url;
    return savehost;
}  