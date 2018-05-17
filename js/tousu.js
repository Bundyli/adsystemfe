$(function(){
	var id = getRequest().id;
    var safeurl = getRequest().safeurl;
    var safehost = getHost(safeurl);
    var domain = getRequest().domain;

	$('.ts_li').on('click',function(){
		window.location.href= safehost+'/tssubmit.html?safeurl='+safeurl+'&id='+id+'&domain='+domain;
	});
});