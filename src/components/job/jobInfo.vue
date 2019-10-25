<template>
  <div class="model">
    <p class="model-p">当前位置:
      <span class="model-row-p-span" @click="goTo('index')">阿拉招聘</span>&nbsp;>&nbsp;<span class="model-row-p-span"
                                                                                          @click="goTo('group')">计算机/互联网/通信</span>&nbsp;>&nbsp;<span>JAVA工程师</span>
    </p>
    <div class="model-row">
      <div class="model-left">
        <img src="/static/image/baidu.jpg" class="model-top-img">
      </div>
      <div class="model-center">
        <p class="model-center-title">
            <span class="model-center-title-name">
              JAVA软件工程师
            </span>
        </p>
        <p class="model-center-text">
          <span>行业：计算机软件</span>
          <span>规模：1 - 49人</span>
          <span>性质：国有企业</span>
          <span>主页：<a href="itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftw">itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftw</a></span>
        </p>
        <p class="model-center-text">
          地址：江苏 苏州 东宁路553号东溪德必易园A区325室
        </p>
        <p class="model-center-bottom">
          <a class="model-center-div-btn">企业首页</a>
          <a class="model-center-div-btn">企业相册(1)</a>
          <a class="model-center-div-btn btn" style="color: #f2f3f5;">招聘职位(10)</a>
          <a class="model-center-div-btn">工资(3)</a>
        </p>
      </div>
    </div>
    <div class="model-row">
      <p style="height: 20px;"/>
      <h2 class="body-title">
        JAVA软件工程师</h2>
      <p class="body-p">
        <span>高级硬件工程师</span>
        <span>3人</span>
        <span>工业园区</span>
        <span>娄葑镇</span>
        <span>2016-06-01更新</span>
      </p>

      <p class="text-p">
        <span class="text-p-span">
          <span class="text-p-span-a">职位性质</span>
          &nbsp;
          <span class="text-p-span-name">实习</span>
        </span>

        <span class="text-p-span">
          <span class="text-p-span-a">学历要求</span>
          &nbsp;
          <span class="text-p-span-name">硕士</span>
        </span>

        <span class="text-p-span">
          <span class="text-p-span-a">工作经验</span>
          &nbsp;
          <span class="text-p-span-name">3-5年</span>
        </span>

        <span class="text-p-span">
          <span class="text-p-span-a">性别要求</span>
          &nbsp;
          <span class="text-p-span-name">限女士</span>
        </span>

        <span class="text-p-span">
          <span class="text-p-span-a">薪资范围</span>
          &nbsp;
          <span class="text-p-span-name">面议</span>
        </span>
      </p>

      <p class="body-text" style="margin-top: 20px; padding-left: 0px;">
        职位描述：
      </p>
      <p class="body-text">1.三年不间断PHP网站或APP接口开发经验,熟练使用PHP, 熟悉主流PHP框架；</p>
      <p class="body-text">2.熟悉MySQL数据库及其优化；熟练使用Redis、MangoDB数据库；</p>
      <p class="body-text">3.有良好的编码习惯, 注重代码性能及安全性;&nbsp;</p>
      <p class="body-text">4.工作认真严谨, 善于与他人沟通、合作，具有团队精神和良好的自学能力题；</p>
      <p class="body-text">5.熟悉shell/python或对mysql读写分离有实际经验者优先录用；</p>
      <p class="body-text">6.h5开发(css的bootstrap)。</p>
      <p class="body-text">7.熟悉PHP扩展开发者优先；</p>
      <p class="body-text">8.有高并发、大负载下服务端开发经验者优先。</p>
      <p class="body-text">9.有较好的团队合作精神和沟通能力，有强烈的责任心;</p>
      <p style="line-height: 65px; border-bottom: 1px #d3d3d3 solid;  border-top: 1px #d3d3d3 solid;">
        登录后显示联系方式
      </p>

      <p style="padding-top: 20px; padding-bottom: 20px;">
        <button
          style="background-color: #0EA788; color: #f2f3f5; border: none; padding: 10px; width: 130px; font-size: 18px;">
          应聘
        </button>
        <button
          style="background-color: #f8ac59; color: #f2f3f5; border: none; padding: 10px; width: 130px; font-size: 18px;">
          收藏
        </button>
        <!--        <button style="background-color: #f8ac59; color: #f2f3f5;">收藏</button>-->
      </p>

      <!--      <h2 class="body-title">企业地图</h2>-->
      <!--      <div class="body-map">-->
      <!--        <map/>-->
      <!--      </div>-->
    </div>

  </div>
</template>

<script>
    import map from "./map";

    export default {
        name: "jobInfo",
        components: {map},
        created() {
        },
        methods: {
            goTo(name) {
                this.$router.push({name: name});
            }
        }
    }

    $(function () {
        // var map = new BMap.Map("container");
        // map.centerAndZoom(new BMap.Point(121.528599, 31.217681), 18);
        // map.addControl(new BMap.ScaleControl());
        // map.addControl(new BMap.OverviewMapControl());
        // var ctrl_nav = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE });
        // map.addControl(ctrl_nav);

        // map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
        // map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
        // map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
        // map.enableKeyboard(); //启用键盘上下左右键移动地图
    })
</script>

<style scoped>
  .model {
    width: 100%;
    height: 100%;
  }

  .model-p {
    padding: 5px 0px 0px;
    color: #727272;
    position: relative;
    display: block;
    width: 80%;
    margin: 0 auto;
  }

  .model-row-p-span:hover {
    cursor: pointer;
    color: #0a6beb;
  }

  .model-row {
    width: 80%;
    height: auto;
    position: relative;
    top: 10px;
    margin: 0 auto;
    position: relative;
    padding: 0 auto;
    min-height: 230px;
    background-color: #FFFFFF;
    margin-bottom: 10px;
    z-index: 10;
    min-width: 1200px;
    padding: 10px 20px;
    padding-bottom: 10px;
  }

  .model-left {
    position: relative;
    display: inline-block;
    float: left;
    width: 190px;
    height: 190px;
  }

  .model-top-img {
    width: 190px;
    height: 190px;
  }

  .model-center {
    width: 600px;
    height: 100%;
    min-height: 205px;
    display: inline-block;
    float: left;
    padding: 0px 25px;
  }

  .model-center-title {
    width: 100%;
    position: relative;
    height: 45px;
  }

  .model-center-title-name {
    font-size: 30px;
    color: #000000;
  }

  .model-center-text {
    font-size: 14px;
    color: #777;
    line-height: 30px;
  }

  .model-center-bottom {
    float: bottom;
    height: auto;
    margin-top: 30px;
  }

  .model-center-div-btn {
    display: block;
    float: left;
    /*padding: 0 15px;*/
    margin-right: 5px;
    font-size: 18px;
    color: #333;
    -webkit-transition: all 0.1s;
    padding: 5px 15px;
    position: relative;
  }

  .model-center-div-btn:hover, .btn {
    background-color: #cb2027;
    color: #f2f3f5;
  }

  .body-title {
    line-height: 1;
    font-size: 18px;
    color: #333;
    text-align: left;
    padding: 10px 0px 10px 10px;
    padding-left: 0px;
    margin: 0 auto;
  }

  .body-p {
    line-height: 35px;
    width: 100%;
    border-bottom: 1px #d3d3d3 solid;
  }

  .text-p {
    line-height: 65px;
    width: 100%;
    white-space: nowrap;
    border-bottom: 1px #d3d3d3 solid;
  }

  .text-p-span {
    width: 20%;
    padding-top: 10px;
    padding-bottom: 10px;
    display: inline-block;
  }

  .text-p-span-a {
    color: #999999;
    font-size: 14px;
  }

  .text-p-span-name {
    color: #000000;
    font-size: 14px;
  }

  .body-text {
    line-height: 66px;
    font-size: 16px;
  }

</style>
