<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import utils from "./lib/utils.js";
import API from "./api/api.js";

utils.extendApi(API);//把API扩充到utils方法里边

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
