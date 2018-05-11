var globalUrl = require('../components/tool/Global.js');

var DEBUG = false;

var API = {
'get_data':{
     url: '/adsys/api/video_detail/3?_format=json'
}

};

for (var api in API) {
    if (DEBUG == true) {
        // API[api].url = API[api].test_data;
    }else{
      API[api].url = globalUrl.adsystemcmsurl + API[api].url;
    }
  }


// if (DEBUG == true) {
//     for (var api in API) {
//         API[api].url = API[api].test_data;
//     }
// }
module.exports = API;
