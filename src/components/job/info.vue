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
                百度科技
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
          <a class="model-center-div-btn btn">企业首页</a>
          <a class="model-center-div-btn">企业相册(1)</a>
          <a class="model-center-div-btn">招聘职位(10)</a>
          <a class="model-center-div-btn">工资(3)</a>
        </p>
      </div>
    </div>
    <div class="model-row">
      <p style="height: 20px;"/>
      <h2 class="body-title">企业简介</h2>
      <p class="body-text">
        【我们在做什么】<br>2016年7月前，我们会说买卖角是行业首个集订单管理、物流配送、仓储管理、B2B交易等服务于一体的国际电子商务综合管理平台（电子商务+企业SaaS服务+共享经济）。面向美国电商卖家与中国跨境电商卖家，以低价物流和智能仓储为切入点，用O2O和LBS模式整合卖家闲置的商品和仓储资源，降低卖家的运营成本并提高其利润率。对接中国的跨境电商市场，解决跨境电商货源和物流的两大痛点。&nbsp;<br>买卖角的商业模式也已经得到验证，目前做到了：&nbsp;<br>1.零广告投入；&nbsp;<br>2.仅靠用户口碑推荐，积累了3000多名注册用户；&nbsp;<br>3.用户一年的物流费用超过千万美金，背后的商品交易额超过5亿美金（市场体量巨大）；&nbsp;<br>4.90%左右的用户留存率，粘性很高。<br>2016年7月起，我们有了新域名：Circle.us。从maimaijiao.com到Circle.us，我们正式开始国际化的道路，也离我们打造跨境电商共享经济生态圈的最终目标近了一步。Circle代表我们正在建设的卖家生态圈，Us既可以做美国讲，标明我们扎根于美国的；也可以解释为“我们”，即围绕着我们形成的一个圈子。新的系统将串连电商供应链的多个环节，根据每个卖家的情况，定制专属每个卖家的服务圈子。圈子里会有卖家、供货商、物流商、仓储提供者等多种角色，每个角色都是受益方。而圈子里以卖家为中心进行的互动，就是我们所说的共享物流、人力、仓储、商品的四大共享模式。&nbsp;<br>我们，是这个圈子的建设者。<br>截止2016年11月，Circle月增新用户达1000名，现已积累5000名左右的用户。
      </p>
      <p style="height: 30px;"/>
      <p class="body-text">【我们是谁】</p>
      <p class="body-text">有名校出身——浙江大学、美国加州大学伯克利分校、约翰.霍普金斯大学；&nbsp;</p>
      <p class="body-text">有放弃美国博士学位毅然创业的天生革新者。&nbsp;</p>
      <p class="body-text">2016年2月，阿里巴巴旗下的湖畔山南资本以千万级人民币的Pre-A轮投资方式加入我们。</p>
      <p class="body-text">【福利待遇杠杠的】</p>
      <p class="body-text">薪水：有竞争力的薪酬；&nbsp;</p>
      <p class="body-text">五险一金：那是必须的； &nbsp;</p>
      <p class="body-text">股权期权：大梦想家的你，绝不辜负！&nbsp;</p>
      <p class="body-text">节日福利： 妇女节，六一儿童节，端午节，中秋节，春节都有惊喜等着你~&nbsp;</p>
      <p class="body-text">办公环境：单纯的人际关系，自由平等，无障碍的沟通方式；&nbsp;</p>
      <p class="body-text">年底双薪：世界上最快乐的事，莫过于数钱数到手软吧！&nbsp;</p>
      <p class="body-text">下午茶：免费供应新鲜水果，还有美国零食吃到腻；&nbsp;</p>
      <p class="body-text">美淘包邮：买买买无压力；&nbsp;</p>
      <p class="body-text">公司活动：Team Building、周年庆、圣诞节，让你嗨到家！</p>
      <p style="height: 30px;"/>
      <h2 class="body-title">企业相册</h2>
      <div>
        <ul class="body-jpgs">
          <li class="body-li">
            <a href="/static/image/google.jpg" target="_blank">
              <img src="/static/image/google.jpg" class="body-img"
                   data-url="/static/image/google.jpg" alt=""></a></li>
          <li class="body-li">
            <a href="/static/image/aali.jpg" target="_blank"
               title=""><img src="/static/image/aali.jpg"
                             class="body-img"
                             data-url="/static/image/aali.jpg"
                             alt=""></a></li>
          <li class="body-li">
            <a href="/static/image/microsoft.jpg" target="_blank"
               title=""><img src="/static/image/microsoft.jpg"
                             class="body-img"
                             data-url="/static/image/microsoft.jpg"
                             alt=""></a></li>
        </ul>
      </div>
      <div class="body-more"><a href="https://ihuoniao.cn/sz/job/company-album-50.html">查看所有照片(4)>></a></div>
      <p style="height: 30px;"/>
      <!--      <h2 class="body-title">企业地图</h2>-->
      <!--      <div class="body-map">-->
      <!--        <map/>-->
      <!--      </div>-->
    </div>
    <div class="model-row">
      <h2 class="body-title">企业地图</h2>
      <div style="width: 100%; height: 500px; border: #151515 1px solid;" id="container">

      </div>
    </div>
  </div>
</template>

<script>
    import map from "./map";

    export default {
        name: "info",
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
    color: #ffffff;
  }

  .body-title {
    margin: 10px 0 20px;
    padding-left: 15px;
    line-height: 1;
    border-left: 5px solid #e76320;
    font-size: 18px;
    color: #333;
  }

  .body-text {
    line-height: 36px;
    font-size: 16px;
  }

  .body-jpgs {
    width: 100%;
    position: relative;
    height: auto;
    zoom: 1;
    display: block;
    /*min-height: 300px;*/
  }

  .body-li {
    display: inline-block;
    /*float: left;*/
    position: relative;
    height: auto;
    padding: 2px;
    width: 33%;
  }

  .body-img {
    width: 100%;
    min-width: 300px;
    height: 300px;
  }

  .body-more {
    display: block;
    text-align: right;
  }

  .body-map {
    height: 500px;
    width: 100%;
    border: #151515 1px solid;
  }
</style>
