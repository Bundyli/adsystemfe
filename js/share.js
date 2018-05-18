$(function(){
    var cmsurl = "http://cms.adsys.goldrock.cn";
    var id = getRequest().id;
    var safeurl = getRequest().safeurl;
    var ldurl= getRequest().ldurl;
    var rnum = getRequest().rnum;
    var sharetime = getRequest().sharetime-0;
    var count =0;

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
                debug:false,
                appId:data.appId,
                timestamp:parseInt(data.timestamp),
                nonceStr:data.nonceStr,
                signature:data.signature,
                jsApiList:['onMenuShareTimeline','onMenuShareAppMessage', 'hideAllNonBaseMenuItem', 'showMenuItems']
            });
           
            wx.ready(function(){
                wx.onMenuShareTimeline({
                    title:title,
                    link:safeurl+'?id='+id,
                    imgUrl:pic_url,
                    success:function(){
                        count+=1;
                        alert('分享'+sharetime+'次才能继续观看哦');
                        if(count >= sharetime){
                              window.location.href= ldurl+'/main.html?status=contitue&id='+id+'&rrnum='+rnum+'&url='+safeurl;
                        }
                      
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
                        count+=1;
                        alert('分享'+sharetime+'次才能继续观看哦');
                        if(count >= sharetime){
                              window.location.href= ldurl+'/main.html?status=contitue&id='+id+'&rrnum='+rnum+'&url='+safeurl;
                        }
                    },
                    cancel: function () {
                    // 用户取消分享后执行的回调函数
                    }
                });
				
            });
        },
        error:function(xhr,type,err){
            alert(err);
        }
    });
    
});