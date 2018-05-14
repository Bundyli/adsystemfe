<template>
	<div id="content">
        <div class="top">
            <!-- <h2 class="top-title">{{toptitle}}</h2> -->
            <h2 class="top-title">我们的第一个测试视频</h2>
            <div class="top-list">
                <a href="#" class="top-user" @click="share">流量分享</a>
                <!-- <span class="top-date">{{topdate}}</span> -->
                <span class="top-date">2018-05-12</span>
            </div>
            <div class="top-yd">
                <span class="top-ck">作者</span>
                <i class="shuxian">|</i>
                <a href="#" class="top-xyd">点击关注</a>
            </div>
        </div>
        <div class="ad">
            <a :href="ad1_link" onclick="">
                <img src="../assets/images/ad2.png" />
                <!-- <img :src="ad1_pic" alt=""> -->
            </a>
        </div>
        <div class="video-title">让生活每天都精彩</div>
        <div class="video-tx" :id="elId">
            <video id="video-tx" src="../assets/videos/blog.mp4" controls></video>
            <!-- <iframe frameborder="0" width="640" height="498" :src="field_video_vid" allowfullscreen></iframe> -->
            <!-- <iframe frameborder="0" width="640" height="498" src="https://v.qq.com/iframe/player.html?vid=z0026zph9is&tiny=0&auto=0" allowfullscreen></iframe> -->
            <!-- <embed src="https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=o0649wn53hj&auto=0" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed> -->
        </div>
        <div class="toobar">
            <ul>
                <li class="toobar-reador"><a href="#">阅读原文</a></li>
                <li class="toobar-like"><i class="icon-favorite"></i><span>5976</span></li>
                <li class="toobar-read">阅读<span>100000+</span></li>
                <li class="toobar-tousu"><a href="#" @click="jump()">投诉</a></li>
            </ul>
        </div>
        <div class="ad-title">
            <div class="with-line">
                 <span class="tips">广告</span>
            </div>    
        </div>
        <div class="ad">
            <a :href="ad2_link">
                <img src="../assets/images/ad1.jpg" />
                <!-- <img :src="ad2_pic" alt=""> -->
            </a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Index',
    data(){
        return {
            toptitle: '',
            topdate: '',
            field_readlink:'',
            ad1_link:'',
            ad1_pic:'',
            ad2_link:'',
            ad2_pic:'',
            field_video_vid:'',
            elId:'elId'
        }
    },
    mounted(){
        this.getData();
    },
    methods: {
        playVideo:function(vid,elId,elWidth){
             //定义视频对象
            video = new tvp.VideoInfo();
            //向视频对象传入视频vid
            video.setVid(vid);

            //定义播放器对象
            player = new tvp.Player(elWidth, 200);
            //设置播放器初始化时加载的视频
            player.setCurVideo(video);

            //输出播放器,参数就是上面div的id，希望输出到哪个HTML元素里，就写哪个元素的id
            player.addParam("wmode","transparent");
            player.addParam("pic",tvp.common.getVideoSnapMobile(vid));
            player.write(elId);
        },
        share:function(){
           this.$router.push("/share"); 
        },
        rgex:function(str){
           var patt = /\"(.+?)\"/; 
           str = str.match(patt)[0].replace("\"","").replace("\"","");
        //    console.log(str);
           return str;
        },
        jump:function(){
            this.$router.push("/tousu");
        },
        getData:function(){
            var me = this;
            utils.API.get_data({
                method:'get'
            })
            .then(function(res){
                res = res[0];
                me.toptitle = res["title"];
                console.log(res);
                me.topdate = res["created"];
                me.field_readlink = res["field_readlink"];
                me.ad1_link = me.rgex(res["field_top_ad_export"]["ad_link"]);
                // console.log(me.ad1_link);
                me.ad1_pic = "http://ad.goldrock.cn"+me.rgex(res["field_top_ad_export"]["ad_pic"]);
                // console.log(me.ad1_pic);
                me.ad2_link = me.rgex(res["field_bottom_ad_export"]["ad_link"]);
                // console.log(me.ad2_link);
                me.ad2_pic = "http://ad.goldrock.cn"+me.rgex(res["field_bottom_ad_export"]["ad_pic"]);
                // console.log(me.ad2_pic);
                me.field_video_vid = "https://v.qq.com/iframe/player.html?vid="+res["field_video_vid"]+"is&tiny=0&auto=0";
                // console.log(me.field_video_vid);
            })
            .catch(function (ret) {
              if (ret.__servererror__) {
                // Toast("服务器错误，请重试！");
                console.log('服务器错误，请重试');
              } else {
                // Toast(ret.errorMsg || "未知错误！");
                console.log('未知错误');
              }
            });  
        }

    }
}
</script>

<style lang="less" scoped>
@top:20px;
@right:30px;
@width:92%;
#content {
    width: 100%;
    .top {
        width: @width;
        // background-color: red;
        margin: 0 auto;
        // margin-top: -36px;
        .top-title {
           font-size: 22px; 
        }
        .top-list {
            text-align: left;
            margin-top: @top;
            .top-user {
                font-size: 14px;
            }
            .top-date {
                margin-left: 10px;
                font-size: 14px;
            }
        }
        .top-yd {
            text-align: left;
            margin-top: @top;
            .top-ck {
                font-size: 14px;
            }
            .shuxian {
                font-size: 14px;
                margin: 0 10px;
            }
            .top-xyd {
                font-size: 14px;
            }
        }
    }
    .ad-title {
        width: @width;
        margin: 0 auto;
        .with-line {
            border-top: 1px dotted #e1e1e1;
            .tips {
                margin-top: -14px;
                display: inline-block;
                vertical-align: middle;
                background-color: #fff;
            }
        }
    }
    .ad {
        margin: @top auto;
        width: 92%;
        height: 100px;
        // background-color: aqua;
        border-radius: 4px;
        overflow: hidden;
        &:last-child {
            margin-top: 12px;
        }
        a {
            display: inline-block;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .video-title {
        width: @width;
        margin: 0 auto;
        text-align: left;
        font-size: 16px;
    }
    .video-tx {
        margin: @top auto;
        width: @width;
        height: 225px;
        background-color:black;
        border: 1px solid #ccc;
        border-radius: 3px;
        overflow: hidden;
        iframe {
            width: 100%;
            height: 100%;
        }
        video {
            width: 100%;
            height: 100%;
        }
    }
    .toobar {
        margin: @top auto;
        width: @width;
        // background-color: bisque;
        ul {
            width: 100%;
            display: flex;
            li {
                font-size: 14px;
            }
            .toobar-reador {
                margin-right: 40px;
            }
            .toobar-like {
                .icon-favorite {
                    color:tomato;
                    margin-right: 3px;
                }
                margin-right: 30px;
            }
            .toobar-tousu {
                margin-left: 40px;
            }
        }
    }
}
</style>