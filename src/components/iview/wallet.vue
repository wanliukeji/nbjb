<template>
  <div class="model">
    <i class="close-left">
      <svg t="1567426263402" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="1729" width="15" height="15">
        <path
          d="M583.168 523.776L958.464 148.48c18.944-18.944 18.944-50.176 0-69.12l-2.048-2.048c-18.944-18.944-50.176-18.944-69.12 0L512 453.12 136.704 77.312c-18.944-18.944-50.176-18.944-69.12 0l-2.048 2.048c-19.456 18.944-19.456 50.176 0 69.12l375.296 375.296L65.536 899.072c-18.944 18.944-18.944 50.176 0 69.12l2.048 2.048c18.944 18.944 50.176 18.944 69.12 0L512 594.944 887.296 970.24c18.944 18.944 50.176 18.944 69.12 0l2.048-2.048c18.944-18.944 18.944-50.176 0-69.12L583.168 523.776z"
          p-id="1730" fill="#8a8a8a"></path>
      </svg>
    </i>
    <h1>我的钱包</h1>

    <div class="model-div-row">
      <h6 class="model-div-row-title">当前可用余额</h6>
      <span class="model-div-row-munch">0.00元</span>
      <button class="model-div-row-btn">
        提现
      </button>
    </div>
    <hr>

    <div class="model-div-row">
      <div class="model-div-row-center">
        <p><span class="model-div-row-center-left-span">手机</span>
          <span class="model-div-row-center-right-span">
          <svg t="1567476046283" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="1728" width="17" height="10">
            <path
              d="M719.969 493.984L298.307 72.323c-9.417-9.418-23.192-10.912-30.767-3.337-7.575 7.574-6.08 21.349 3.337 30.767l411.91 411.908-412.412 412.408c-9.418 9.418-10.912 23.194-3.337 30.769 7.574 7.575 21.35 6.08 30.767-3.337l421.663-421.663a29.523 29.523 0 0 0 4.589-5.937c6.68-7.718 4.994-20.835-4.088-29.917z"
              fill="#8a8a8a" p-id="1729"></path>
          </svg>
        </span></p>
      </div>
    </div>
    <br>
    <div class="model-div-row" style="margin-top: -40px;">
      <div class="model-div-row-center">
        <p><span class="model-div-row-center-left-span">微信</span>
          <span class="model-div-row-center-right-span">
          <svg t="1567476046283" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="1728" width="17" height="10">
            <path
              d="M719.969 493.984L298.307 72.323c-9.417-9.418-23.192-10.912-30.767-3.337-7.575 7.574-6.08 21.349 3.337 30.767l411.91 411.908-412.412 412.408c-9.418 9.418-10.912 23.194-3.337 30.769 7.574 7.575 21.35 6.08 30.767-3.337l421.663-421.663a29.523 29.523 0 0 0 4.589-5.937c6.68-7.718 4.994-20.835-4.088-29.917z"
              fill="#8a8a8a" p-id="1729"></path>
          </svg>
        </span></p>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "wallet"
    }
</script>

<style scoped>
  .model {
    height: 100%;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    position: relative;
    top: 0;
    padding-top: 20px;
    /*background: #151515;*/
  }

  .close-left {
    width: 10px;
    height: 10px;
    position: absolute;
    left: 10%;
  }

  h1 {
    font-size: 1em;
    font-family: 楷体;
    position: relative;
    margin-bottom: 50px;
  }

  p {
    margin-top: 30px;
  }

  input:hover {
    cursor: auto;
  }

  .model-div-row {
    position: relative;
    min-height: 60px;
    width: 100%;
    margin: 0 auto;
    height: auto;
    padding: 10px;
  }

  .model-div-row-center {
    width: 80%;
    position: relative;
    height: auto;
    margin: 0 auto;
  }

  p {
    font-size: 2.3em;
  }

  p > span {
    font-size: 12px;
  }

  p > a {
    font-size: 12px;
  }

  .model-div-row-center-left-span {
    display: inline-block;
    float: left;
    left: 0px;
  }

  .model-div-row-center-right-span {
    display: inline-block;
    float: right;
    margin-top: 5px;
  }

  .model-div-row-title {
    font-weight: 300;
    margin-bottom: 10px;
  }

  .model-div-row-munch {
    font-size: 2em;
    display: block;
  }

  .model-div-row-btn {
    padding: 5px;
    background: #FFFFFF;
    border: black 1px solid;
    border-radius: 20px;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    width: 80%;
    margin-top: 30px;
    margin-bottom: 20px;
  }

</style>
