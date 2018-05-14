var globalUrl = require('../components/tool/Global.js');

var DEBUG = false;

var API = {
  'get_data':{
     url: 'http://ad.goldrock.cn/adsys/api/video_detail/3?_format=json'
  },
  'test_domain':{
    url: 'http://kit.kindling.top/wechat/check'
  }
};

// for (var api in API) {
//     if (DEBUG == true) {
//         // API[api].url = API[api].test_data;
//     }else{
//       API[api].url = globalUrl.adsystemcmsurl + API[api].url;
//     }
//   }


// if (DEBUG == true) {
//     for (var api in API) {
//         API[api].url = API[api].test_data;
//     }
// }
module.exports = API;
