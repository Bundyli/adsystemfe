$(function(){
	var id = getRequest().id;
    var safeurl = getRequest().safeurl;
    var safehost = getHost(safeurl);
    var domain = getRequest().domain;

    $('#sub_sh').on('click',function(){
        window.location.href = safehost+'/tssuccess.html?safeurl='+safeurl+'&id='+id+'&domain='+domain;
    });
});