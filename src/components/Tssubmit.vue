<template>
  <div class="tssb-container">
      <ul>
        <li><span>您可以：</span></li>
        <li @click="jumptosc">提交给我们审核 <img src="../assets/images/right.png" alt=""></li>
      </ul>
      <!-- <p>感谢您的意见，我们会努力改善</p>
      <p>投诉内容：</p>
      <p class="tssb-content">我们的测试</p>
      <a href="#" @click="jumptosc" class="tssb-sb">提交</a> -->
  </div>
</template>
<script>
export default {
  methods:{
    jumptosc:function(){
      this.$router.push("/tssc");
    }
  }
}
</script>
<style lang="less" scoped>
  .tssb-container {
    width: 100%;
    margin: 0 auto;
    // margin-top: -38px;
    ul {
      width: 100%;
      li {
        width: 100%;
        text-align: left;
        border-bottom: 1px solid #ccc;
        padding: 10px;
        &:first-child {
          font-size: 14px;
          color: #666;
        }
        &:last-child {
          font-size: 16px;
        }
        img {
          float: right;
          height: 4vw;
          margin: 1vw 20px 0 0;
        }
      }
    }
    p {
      width: 100%;
      height: 30px;
      font-size: 16px;
      text-align: left;
      margin-bottom: 10px;
      padding-left: 20px;
      line-height: 30px;
      &:first-child {
        border: 1px solid #ccc;
      }
    }
    .tssb-content {
      border: 1px solid #ccc;
    }
    .tssb-sb {
      display: inline-block;
      width: 335px;
      height: 30px;
      font-size: 16px;
      line-height: 30px;
      text-align: center;
      background-color: #1fb922;
      border-radius: 5px;
      margin-top: 20px;
    }
  }
</style>


