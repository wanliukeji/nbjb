<template>
  <div class="model">
    <i class="close-left" @click="goTo">
      <svg t="1567585969191" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1713" width="16" height="16"><path d="M209.92 988.16c-15.36 0-30.72-15.36-30.72-30.72s15.36-30.72 30.72-30.72h471.04c153.6 0 281.6-128 281.6-281.6s-128-281.6-281.6-281.6H102.4l220.16 220.16c5.12 5.12 10.24 10.24 10.24 20.48 0 5.12-5.12 15.36-10.24 20.48-5.12 5.12-10.24 10.24-20.48 10.24-5.12 0-15.36-5.12-20.48-10.24L10.24 353.28c-5.12-5.12-10.24-10.24-10.24-20.48 0-5.12 5.12-15.36 10.24-20.48L281.6 40.96c5.12-5.12 10.24-10.24 20.48-10.24 5.12 0 15.36 5.12 20.48 10.24 0 10.24 5.12 15.36 5.12 25.6 0 5.12-5.12 15.36-10.24 20.48L97.28 307.2h583.68a343.04 343.04 0 0 1 0 686.08H209.92z" fill="#d81e06" p-id="1714"></path></svg>
    </i>

    <div class="model-div-row">
      <img src="/static/image/timg.jpg" alt="" class="model-div-row-img">
    </div>

    <div class="model-div-row-hr" style="text-align: left;">
      <span>
      <svg t="1567478430914" style="margin-top: -3px" class="icon" viewBox="0 0 1024 1024" version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="2760"
           width="16" height="16"><path
        d="M228.677632 136.922112 250.308608 123.259904 504.19712 490.998784 520.136704 490.998784 774.024192 123.259904 795.656192 137.491456 551.44448 490.998784 823.703552 490.998784 823.703552 517.184512 533.228544 517.184512 526.190592 528.572416 526.190592 657.219584 823.703552 657.219584 823.703552 682.267648 526.190592 682.267648 526.190592 901.434368 499.073024 901.434368 499.073024 683.410432 200.948736 683.410432 200.948736 656.084992 499.073024 656.084992 499.073024 529.711104 490.677248 516.614144 200.948736 516.614144 200.948736 490.99776 472.887296 490.99776Z"
        p-id="2761" fill="#444444"></path></svg>
        368
      </span>

      <div class="model-div-row-text">
        说明：购买此商品即可成为会员
      </div>
    </div>

    <span style="height: 2px; background: #bcbcbc;"></span>
    <button class="login-btn">去付款</button>
  </div>
</template>

<script>
    export default {
        name: "good",
        methods: {
            goTo: function () {
                window.history.back();
            }
        }
    }
</script>

<style scoped>
  * {
    color: red;
  }
  .model {
    height: 100%;
    width: 100%;
    /*padding-left: 10%;*/
    /*padding-right: 10%;*/
    position: relative;
    top: 0;
    padding-top: 20px;
  }

  .close-left {
    width: 10px;
    height: 10px;
    position: absolute;
    left: 10%;
  }

  h1 {
    font-size: 1.5em;
    font-family: 楷体;
    position: relative;
    margin-top: 20%;
  }


  .login-btn {
    height: auto;
    width: 80%;
    font-size: 0.8em;
    background: #FFFFFF;
    border: 1px black solid;
    padding-top: 8px;
    padding-bottom: 8px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    margin-bottom: 20px;
  }

  p {
    margin-top: 30px;
  }

  .model-div-row, .model-div-row-hr {
    position: relative;
    margin-top: 20px;
    min-height: 200px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10px;
    margin-top: 50px;
  }

  .model-div-row-hr {
    border-top: 1px red solid;
    width: 100%;
    margin-top: 20px;
    padding-top: 20px;
  }

  .model-div-row-img {
    display: inline-block;
    width: 100%;
  }

  .model-div-row-text {
    height: auto;
    width: 100%;
    min-height: 100px;
    padding: 10px;
    /*white-space: nowrap;*/
    font-size: 12px;
    /*text-indent: 2em;*/
    line-height: 20px;
    text-align: left;
    left: 0;
    color: red;
  }

</style>
