$(function(){
    var status = 'pending';
    var safeurl = location.search;
    var backstatus = getRequest().status;
    if(backstatus){
        status = backstatus;
    } 
    var id = getRequest().id;
    var safeurl = getRequest().url;
    var reg = /(http(s)?:\/\/.+?)\/(.+)/gi;
    var res = reg.exec(safeurl);
    var safehost = res&&res[1]?res[1]:safeurl;
    var cmsurl = "http://cms.adsys.goldrock.cn";

    $.ajax({
        type: 'GET',
        url: "/adsys/restapi/video_detail/"+id+"?_format=json",
        success:function(data){
            if(data&&data.length!=0){
                var obj = data[0];
                var toptitle = obj.title;
                var topdate = obj.created;
                var field_readlink = obj["field_readlink"];
                field_readlink = testHttp(field_readlink);
                var ad1_link = rgex(obj["field_top_ad_export"]["ad_link"]);
                ad1_link = testHttp(ad1_link);
                var ad1_pic = cmsurl+rgex(obj["field_top_ad_export"]["ad_pic"]);
                var ad2_link = rgex(obj["field_bottom_ad_export"]["ad_link"]);
                var ad2_pic = cmsurl+rgex(obj["field_bottom_ad_export"]["ad_pic"]);
                var field_video_vid = obj["field_video_vid"];
                var field_share_pic = obj["field_share_pic"];
                var field_share_desc = obj["field_share_desc"];

                $('title').html(toptitle);
                $('.top-title').html(toptitle); 
                $('.top-date').html(topdate);
                $('.ad1_img').attr('src',ad1_pic);
                $('.ad1_link').attr('href',ad1_link);
                $('.ad2_img').attr('src',ad2_pic);
                $('.ad2_link').attr('href',ad2_link);
                $('.readori').attr('href',field_readlink);
                playVideo(field_video_vid,toptitle,field_share_pic,field_share_desc);
            }
        },
        error:function(xhr,type){
            console.log('ajax err');
        }
    });

    function playVideo(vid,title,picurl,share_desc){
        title=encodeURI(encodeURI(title));
        picurl=encodeURI(picurl);
        share_desc=encodeURI(encodeURI(share_desc));

        var video = new tvp.VideoInfo();
        video.setVid(vid);
        var player = new tvp.Player(355, 235);
        player.create({
        	width:355,
        	height:235,
        	video:video,
        	modId:"mod_player",
        	autoplay:false
        })
        //输出播放器    
        player.write("mod_player");
        var currentTime = 0;
        var timmer = setInterval(function(){
            currentTime = Math.floor(player.getPlaytime());
            if(currentTime >=8){
                if(status == 'pending'){
                    player.callCBEvent('pause'); 
                    window.location.href=safehost+'/share.html?safeurl='+safeurl+'&title='+title+'&pic_url='+picurl+'&share_desc='+share_desc+'&id='+id+'&ldurl='+location.origin; 
                }   
            }
        },1000);
    }

        
});