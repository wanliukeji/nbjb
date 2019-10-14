<template>
  <div class="model">
    <div class="model-row">
      <div class="model-row-left"></div>
      <div class="model-row-right"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "group"
    }
</script>

<style scoped>
  .model {
    width: 100%;
    height: 100%;
  }

  .model-row {
    width: 80%;
    height: auto;
    position: relative;
    top: 20px;
    min-width: 1200px;
    margin: 0 auto;
    position: relative;
    padding: 0 auto;
    min-height: 230px;
    background-color: #FFFFFF;
    min-width: 1200px;
    margin: 0px auto;
    padding-bottom: 10px;
    border: #c12446 1px solid;
  }

  .model-row-left {
    width: 20%;
    min-width: 198px;
    margin-top: 25px;
    background: #fff;
    border: 1px solid #484848;
    box-shadow: 0 0 10px rgba(0,0,0,.05);
    position: relative;
    height: 800px;
    display: inline-block;
    margin: 0 auto;
    float: left;
    border: #151515 1px solid;
    margin-top: 10px;
  }

  .model-row-right {
    margin: 0 auto;
    width: 78%;
    min-width: 950px;
    padding: 20px;
    display: inline-block;
    height: 800px;
    /*float: left;*/
    border: #34eb33 1px solid;
    margin-top: 10px;
    position: relative;
  }
</style>
