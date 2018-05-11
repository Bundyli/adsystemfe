import {
    Indicator,
    Toast
  } from 'mint-ui';
  import axios from 'axios';
  import _ from 'lodash';
  import querystring from 'querystring';
  
  const axios_instance = axios.create({
    // timeout:20000,
    headers: {
      // "Content-Type": "application/json;charset=utf-8"
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
  });
  
  window.debug = true;
  
  var utils = window.utils = {
    API: {},
    ua: navigator.userAgent.toLowerCase(),
    debug: window.debug || false,
    // CryptoJS:UT.CryptoJS,
    _interval: null,
    _generateApiFun: function (api_list) {
      var me = this;
      _.forEach(api_list, function (val, key) {
      
        me.API[key] = (function (val) {
          // alert('val---'+val);
          return function (option) {
            // option = option || {};
            option = _.merge({
              "show_loading": true,
              querystring: true
            }, (option || {}));
            return new Promise(function (resolve, reject) {
  
              // 获取最终的url地址，因为手机端需要进行地址的拼接
              // alert('val.url-->'+val.url);
              // Indicator.open('加载中...');
              option.show_loading && Indicator.open('加载中...');
              var method = "post",
                //querystring.stringify是用来对理只有一级key value时数据结构的处理(访问accountweb接口只有一级),JSON.stringify处理多级key value这样的数据结构(访问tradeweb接口时有多级)
                data = option.querystring ? (querystring.stringify(option && option.data || {})) : (JSON.stringify(option && option.data || {}));
              if (val.url.indexOf(".json") != -1) {
                method = "get";
              }
  
              option.data = data;
              // 传递过去的数据
              // alert('option.data-->'+option.data);
            
              axios_instance(_.assign({
                method: method,
                url: val.url,
              }, option))
                .then(response => {
                  option.show_loading && Indicator.close();
                  if (response.data && !_.isEmpty(response.data)) {
                    if(response.data instanceof Array){
                      // console.log(response.data);
                      resolve(response.data);

                    }else if(response.data.message){
                      alert(response.data.message);
                    }
                  } 
                })
                .catch(function (error) {
                  option.show_loading && Indicator.close();
                  error.__servererror__ = true;
                  reject(error);
                });
            })
          }
        })(val);
      });
    },
    extendApi: function (api_list) {
      this._generateApiFun(api_list);
    },
    // changeToBase64: function(target) {
    // 	return new Promise(function(resolve, reject) {
    // 		//安卓手机直接返回base64
    // 		if (typeof target === "string") {
    // 			resolve(target.split(",")[1]);
    // 			return;
    // 		}
  
    // 		var file = target.files[0];
    // 		if (!file) {
    // 			return;
    // 		}
  
    // 		new html5ImgCompress(file, {
    // 			// maxWidth:1000,//{number} 最大宽度(如果最大高宽同时存在则根据原图的高宽比例来计算以哪个为准)，默认值1000
    // 			// maxHeight:1000, //{number} 最大高度，默认值1000
    // 			// quality:0.2, //{number} 质量等级(类似PS保存事的质量等级，并不是压缩比例)，取值范围 0-1，默认值0.6
    // 			before: function(file) {
    // 				// console.log('压缩前...');
    // 				// 这里一般是对file进行filter，例如用file.type.indexOf('image') > -1来检验是否是图片
    // 				// 如果为非图片，则return false放弃压缩（不执行后续done、fail、complete），并相应提示
    // 				if (!/image\/\w+/.test(file.type)) {
    // 					Toast('请确保文件为图像类型');
    // 					return false;
    // 				}
    // 			},
    // 			done: function(base64, file) {
    // 				// console.log('压缩成功...');
    // 				resolve(file.split(",")[1]);
    // 				// ajax和服务器通信上传base64图片等操作
    // 			},
    // 			fail: function(file) {
    // 				// console.log('压缩失败...');
    // 				Toast('压缩图片失败...');
    // 				return false;
    // 			},
    // 			complete: function(file) {
    // 				// console.log('压缩完成...');
    // 			},
    // 			notSupport: function(file) {
    // 				console.log('浏览器不支持！')
    // 					// 不支持操作，例如PC在这里可以采用swfupload上传
    // 			}
    // 		});
    // 	})
    // },
  
    countDown: function (option) { //倒计时
      var me = this,
        counter = option.seconds || 59,
        stamp = new Date().getTime();
  
      // text = counter+'秒后重发';
      option.beforeInterval && option.beforeInterval(counter);
      counter--;
      this._interval = window.setInterval(function () {
        var new_stamp = new Date().getTime(),
          delta_time = Math.round((new Date().getTime() - stamp) / 1000);
        if (new_stamp - stamp >= 900) { //校正时间戳
          stamp = new_stamp;
          if (counter <= 0) {
            counter = 59;
            window.clearInterval(me._interval);
            option.end && option.end();
          } else {
            counter -= delta_time;
            option.readingSeconds && option.readingSeconds(counter);
          }
        }
      }, 500);
    },
    getLocationQueryString: function (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    setLocationQueryString: function (name, val) {
      var reg = new RegExp(name + "=[^&]*", "i"),
        arr, res;
      arr = location.search.split(reg);
      if (arr.length > 1) {
        res = arr[0] + name + "=" + val + arr[1];
        location.search = res;
      }
    },
    checkUserAgent: function () {
      var ua = {};
      if (/android/.test(this.ua)) {
        ua.is_android = true;
      } else {
        ua.is_android = false;
      }
      if (/iphone|ipad|ipod/.test(this.ua)) {
        ua.is_ios = true;
      } else {
        ua.is_ios = false;
      }
      return ua;
    },
    formatDate: function (timestamp, format, default_value) {
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
    },
    identityCodeValid: function (code) {
      var city = {
          11: "北京",
          12: "天津",
          13: "河北",
          14: "山西",
          15: "内蒙古",
          21: "辽宁",
          22: "吉林",
          23: "黑龙江 ",
          31: "上海",
          32: "江苏",
          33: "浙江",
          34: "安徽",
          35: "福建",
          36: "江西",
          37: "山东",
          41: "河南",
          42: "湖北 ",
          43: "湖南",
          44: "广东",
          45: "广西",
          46: "海南",
          50: "重庆",
          51: "四川",
          52: "贵州",
          53: "云南",
          54: "西藏 ",
          61: "陕西",
          62: "甘肃",
          63: "青海",
          64: "宁夏",
          65: "新疆",
          71: "台湾",
          81: "香港",
          82: "澳门",
          91: "国外 "
        },
        ret = {
          tip: "",
          success: true,
        }
  
      if (!city[code.toString().substr(0, 2)]) { //验证区位码真实性
        ret = _.assign(ret, {
          tip: "身份证地址编码错误",
          success: false,
        });
      } else {
        //18位身份证需要验证最后一位校验位
        if (code.length == 18) {
          code = code.split('');
          //∑(ai×Wi)(mod 11)
          //加权因子
          var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
            //校验位
            parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2],
            sum = 0,
            ai = 0,
            wi = 0,
            last;
  
          for (var i = 0; i < 17; i++) {
            ai = code[i];
            wi = factor[i];
            sum += ai * wi;
          }
  
          last = parity[sum % 11];
          //最后一位可以是大写X，也可以是小写x
          if (last == "X" ? (last != code[17] && last.toLowerCase() != code[17]) : (last != code[17])) {
            ret = _.assign(ret, {
              tip: "身份证最后一位校验错误!",
              success: false,
            });
          }
        }
      }
  
      return ret;
    },
    // encryptPE: function(str, empoent, publicKey) {
    // 	// console.log(str,empoent,publicKey)
    // 	RSA.setMaxDigits(130);
    // 	var key = new RSA.RSAKeyPair(empoent, "", publicKey);
    // 	//返回加密后的字符串
    // 	return RSA.encryptedString(key, str);
    // },
  
    // //data为json字符串
    // aesEncrypt: function(data, keyStr) {
    // 	return UT.aesEncrypt(data, keyStr);
    // },
  
    // //data为json字符串
    // aesDecrypt: function(data, keyStr) {
    // 	return UT.aesDecrypt(data, keyStr);
    // },
  
    // md5Triple: function(account, pwd) {
    // 	return UT.md5Triple(account, pwd);
    // },
  
  
    storageGet: function (name) {
      return JSON.parse(localStorage.getItem(name))
    },
  
    storageSet: function (name, val) {
      localStorage.setItem(name, JSON.stringify(val))
    },
  
    storageAdd: function (name, addVal) {
      let oldVal = Storage.get(name)
      let newVal = oldVal.concat(addVal)
      Storage.set(name, newVal)
    }
  
  }
  
  export default utils;
  // module.exports = utils;
  