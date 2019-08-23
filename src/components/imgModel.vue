<template lang="html">
  <div class="model">
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
  .model {
    position: relative;
    width: 80%;
    min-width: 1200px;
    height: auto;
    margin: 0 auto;
    vertical-align: center;
    display: block;
    /*border: black 1px solid;*/
    padding-left: auto;
    top: 5px;
    margin: 0 auto;
  }
  .img-div {
    margin-top: 1px;
  }
</style>
