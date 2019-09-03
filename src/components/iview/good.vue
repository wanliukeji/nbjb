<template>
  <div class="model">
    <i class="close-left">
      <svg t="1567426263402" class="icon" style="position: absolute;" viewBox="0 0 1024 1024" version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="1729" width="13" height="13">
        <path
          d="M583.168 523.776L958.464 148.48c18.944-18.944 18.944-50.176 0-69.12l-2.048-2.048c-18.944-18.944-50.176-18.944-69.12 0L512 453.12 136.704 77.312c-18.944-18.944-50.176-18.944-69.12 0l-2.048 2.048c-19.456 18.944-19.456 50.176 0 69.12l375.296 375.296L65.536 899.072c-18.944 18.944-18.944 50.176 0 69.12l2.048 2.048c18.944 18.944 50.176 18.944 69.12 0L512 594.944 887.296 970.24c18.944 18.944 50.176 18.944 69.12 0l2.048-2.048c18.944-18.944 18.944-50.176 0-69.12L583.168 523.776z"
          p-id="1730" fill="#8a8a8a"></path>
      </svg>
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
        超喜欢 超级赞 物流很快 电脑很棒 是正品
        很很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞很赞
      </div>
    </div>

    <span style="height: 2px; background: #bcbcbc;"></span>
    <button class="login-btn">去付款</button>
  </div>
</template>

<script>
    export default {
        name: "good"
    }
</script>

<style scoped>
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
    margin-top: 5%;
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
    margin-bottom: 30px;
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10px;
    margin-top: 50px;
  }

  .model-div-row-hr {
    border-top: 2px #dedede solid;
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
    min-height: 300px;
    padding: 10px;
    /*white-space: nowrap;*/
    font-size: 12px;
    text-indent: 2em;
    line-height: 20px;
  }

</style>
