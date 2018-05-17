$(function(){
	var num =parseInt(Math.random()*10000000);
	$('.ts_dh').html(num);
	var id = getRequest().id;
    var safeurl = getRequest().safeurl;
    var safehost = getHost(safeurl);
    var domain = getRequest().domain;

    $('.tssc-btn').on('click',function(){
        window.location.href= domain+'/main.html?url='+safeurl+'&id='+id;
    });
});