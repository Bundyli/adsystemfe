$(function(){
	var num =parseInt(Math.random()*100000);
	$('.ts_dh').html(num);
	var id = getRequest().id;
    var safeurl = getRequest().safeurl;
    var safehost = getHost(safeurl);
    var domain = getRequest().domain;

    $('.tssc-btn').on('click',function(){
        // window.location.href= domain+'/main.html?url='+safeurl+'&id='+id;
      
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
                jsApiList:['onMenuShareTimeline','onMenuShareAppMessage','onCloseWindow']
            });
           
            wx.ready(function(){
                  wx.closeWindow();	
            });
        },
        error:function(xhr,type,err){
            alert(err);
        }
    });
    });
});