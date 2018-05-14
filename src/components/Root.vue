<template>

</template>
<script>
export default {
    data:{
        arr:['www.baidu.com','www.baidu.com']
    },
  mounted(){
      this.testDomain();
      this.$router.push("/index");
  },
  methods:{
      testDomain:function(arr){
        //    var me = this;
        for(var i=0,len = arr.length;i<len;i++){
           utils.API.test_domain({
                method:'get',
                data: {
                    url:arr[i]
                }
            })
            .then(function(res){
                console.log(res);
                return res.status;
            })
            .catch(function(ret){

            }); 
        }
            
      }
  }
}
</script>

