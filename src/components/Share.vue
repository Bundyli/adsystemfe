<template>
  <div class="share-container">
      <img src="../assets/images/ad2.png" alt="">
      <div class="pop">
          <p>网络状况不好，分享后后可加速观看</p>
          <div>立即分享</div>
      </div>
  </div>
</template>

<script>
// import {Toast} from 'mint-ui';

export default {
  mounted(){
    //   Toast('网络状况不好，分享后后可加速观看');
  }
}
</script>
<style lang="less" scoped>
.share-container {
    width: 355px;
    height: 245px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    img {
        width: 100%;
        height: 100%;
    }
    .pop {
        position: absolute;
        top:50px;
        left:40px;
        width: 270px;
        height: 150px;
        border:1px solid #ccc;
        border-radius: 5px;
        background-color:rgba(255, 255, 255, 0.9);
        p {
            font-size: 16px;
            border-bottom: 1px solid #ccc;
            height: 50%;
            text-align: center;
            line-height: 75px;
        }
        div {
            font-size: 22px;
            line-height: 75px;
            height: 50%;
        }

    }
}
</style>


