<template lang="html">
  <div class="img-model">
    <img src="../../static/image/bujubeilun.png" class="img-div" height="70" width="1200"/>
    <img src="../../static/image/wanke.gif" class="img-div" height="70" width="1200"/>
    <img src="../../static/image/lanhai.gif" class="img-div" height="70" width="1200"/>
    <img src="../../static/image/jiuyue.png" class="img-div" height="70" width="1200"/>
  </div>
</template>

<script>
    export default {
        name: "imgModel"
    }
</script>

<style scoped>
  .img-model {
    position: relative;
    width: 100%;
    min-width: 1200px;
    height: auto;
    /*padding-left: 7.5%;*/
    margin: 0 auto;
    /*min-height: 800px;*/
    vertical-align: center;
    /*margin-top: 10px;*/
    display: block;
    /*border: black 1px solid;*/
    /*top: 380px;*/
    padding-left: auto;
    top: 5px;
    margin-bottom: 0px;
  }
  .img-div {
    margin-top: 1px;
  }
</style>
