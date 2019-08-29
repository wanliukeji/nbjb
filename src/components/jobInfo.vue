<template>
 <div class="model-center">

   <div class="model-right">

   </div>

   <div class="model-left">

   </div>

 </div>
</template>

<script>
    export default {
        name: "jobInfo"
    }
</script>

<style scoped>
 .model-center {
   width: 80%;
   height: 500px;
   border: #151515 solid 1px;
   margin: 0 auto;
   position: relative;
   top: 10px;
 }

  .model-right {
    height: 100%;
    float: left;
    width: 200px;
    background: #FFFFFF;
    border-radius: 5%;
    -webkit-border-radius: 5%;
    -moz-border-radius: 5%;
    -moz-border-radius: 8%;
  }

 .model-left {
   height: 100%;
   float: left;
   width: 800px;
   background: #FFFFFF;
   border-radius: 5%;
   -webkit-border-radius: 5%;
   -moz-border-radius: 5%;
   -moz-border-radius: 5%
 ;
   left: 10px;
   margin-left: 10px;
 }
</style>
