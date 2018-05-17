$(function(){
    var id = getRequest().id;
    var safeurl = location.href;
    var safehost = getHost(safeurl);
    $.ajax({
        type: 'GET',
        url: '/adsys/moduleapi/domain/get_domain',
        data: { id: id },
        success:function(data){
            data = data[0];
            var domain = testHttp(data.domain);
            console.log(domain);
            window.location.href= domain+'/main.html?url='+safehost+'&id='+id;
        },
        error:function(xhr,type){
            console.log('ajax err');
        }
    });

    function getHost(url){
        var reg = /(http(s)?:\/\/.+?)\/(.+)/gi;
        var res = reg.exec(url);
        var savehost = res&&res[1]?res[1]:url;
        return savehost;
      }  
          
});