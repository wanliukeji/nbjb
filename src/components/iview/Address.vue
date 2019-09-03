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

    <h1>地址管理</h1>

    <hr>

    <div class="model-div-row">
      <span class="model-text">江苏省
        &nbsp;南京市
        &nbsp;玄武区
        &nbsp;凌峰小区
        &nbsp;201单元303号</span>
    </div>

    <div class="model-div-row">
      <span class="model-div-row-span">添加地址</span>
      <div class="model-div-row-btn">
        <svg t="1567483051512" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="1723" width="16" height="16" style="position: absolute; top: 20px; right: 34% ">
          <path
            d="M906.212134 565.732986 565.732986 565.732986 565.732986 906.212134C565.732986 926.013685 541.666486 959.972 511.97312 959.972 482.297674 959.972 458.213254 926.013685 458.213254 906.212134L458.213254 565.732986 117.734106 565.732986C97.950475 565.732986 63.97424 541.666486 63.97424 511.97312 63.97424 482.279754 97.950475 458.213254 117.734106 458.213254L458.213254 458.213254 458.213254 117.734106C458.213254 97.950475 482.297674 63.97424 511.97312 63.97424 541.666486 63.97424 565.732986 97.950475 565.732986 117.734106L565.732986 458.213254 906.212134 458.213254C925.995765 458.213254 959.972 482.279754 959.972 511.97312 959.972 541.666486 925.995765 565.732986 906.212134 565.732986Z"
            p-id="1724" fill="#515151"></path>
        </svg>
      </div>
    </div>


  </div>
</template>

<script>
    export default {
        name: "Address"
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
    font-size: 1.2em;
    font-family: 楷体;
    position: relative;
    margin-bottom: 40px;
  }

  .model-div-row {
    position: relative;
    margin-top: 20px;
    min-height: 70px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 50px;
    padding-bottom: 20px;
    margin-top: 50px;
    border-bottom: 1px #c8c8c8 solid;
  }

  .model-text {
    font-size: 12px;
  }

  .model-div-row-span {
    left: 0;
    font-size: 14px;
    text-align: left;
    display: inline-block;
    float: left;
  }

  .model-div-row-btn {
    width: 60px;
    height: 60px;
    border: #444444 1px solid;
    border-radius: 50%;
    position: absolute;
    right: 10%;
    margin: 0 auto;
    bottom: 30px;
  }

</style>
