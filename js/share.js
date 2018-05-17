$(function(){
    var cmsurl = "http://cms.adsys.goldrock.cn";
    var id = getRequest().id;
    var safeurl = getRequest().safeurl+'?id='+id;
    var ldurl= getRequest().ldurl;

    var reg = /(http(s)?:\/\/.+?)\/(.+)/gi;
    var res = reg.exec(safeurl);
    var safehost = res&&res[1]?res[1]:safeurl;

    var title = decodeURI(getRequest().title);
    var pic_url=decodeURI(cmsurl + getRequest().pic_url);
  
    var share_desc = decodeURI(getRequest().share_desc);
   
    $.ajax({
        type: 'GET',
        url: '/adsys/moduleapi/wxconfig/get_wxconfig',
        data: { url: location.href },
        success:function(data){
            data = data[0];
            wx.config({
                debug:true,
                appId:data.appId,
                timestamp:parseInt(data.timestamp),
                nonceStr:data.nonceStr,
                signature:data.signature,
                jsApiList:['onMenuShareTimeline','onMenuShareAppMessage', 'hideAllNonBaseMenuItem', 'showMenuItems']
            });
           
            wx.ready(function(){
                wx.onMenuShareTimeline({
                    title:title,
                    link:safeurl,
                    imgUrl:pic_url,
                    success:function(){
                        window.location.href= ldurl+'/main.html?status=contitue&id='+id;
                    },
                    cancel:function(){}
                });
                wx.onMenuShareAppMessage({
                    title: title, 
                    desc: share_desc, 
                    link: safeurl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: pic_url, // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                    // 用户确认分享后执行的回调函数
                       window.location.href=ldurl+'/main.html?status=contitue&id='+id;
                    },
                    cancel: function () {
                    // 用户取消分享后执行的回调函数
                    }
                });
				
            });
        },
        error:function(xhr,type){
            console.log('ajax err');
        }
    });
    
});