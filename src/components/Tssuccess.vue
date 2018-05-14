<template>
  <div class="tssc-container">
    <div class="tssc-done"><img src="../assets/images/done.png" alt=""></div>
    <div class="tssc-sb"><span>已提交</span></div>
    <div class="tssc-p">
      <p>您的投诉已经调教审核，投诉单号1121214；</p>
      <p>我们将在7个工作日内处理，感谢您对本平台的支持</p>
    </div>
    <a class="tssc-btn" @click="back">确定</a>
  </div>
</template>

<script>
export default {
  methods:{
    back:function(){
       this.$router.push("/");
    }
  }
}
</script>

<style lang="less" scoped>
.tssc-container {
  width: 100%;
  margin: 0 auto;
  .tssc-done {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    img {
     width: 100%;
     height: 100%;
    }
  }
  .tssc-sb {
    width: 100%;
    margin: 20px auto;
    span {
      font-size: 16px;
    }
  }
  .tssc-p {
    width: 100%;
    margin: 0 auto;
    p {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }
  .tssc-btn {
    display: inline-block;
    width: 250px;
    height: 50px;
    background-color: #1fb922;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
  }
  
}
</style>


