<template>
  <div class="model">
    <van-nav-bar title="公司详情" left-text="返回" left-arrow @click-left="onClickLeft">
      <svg t="1572229825059" @click="onClickRight" slot="right" class="icon" viewBox="0 0 1024 1024" version="1.1"
           xmlns="http://www.w3.org/2000/svg" p-id="5058" width="20" height="20">
        <path
          d="M38.5536 858.8288v-66.0992h946.944v66.0992H38.5536z m0-330.2912V462.4384H856.064v66.0992H38.5536z m0-330.3424v-66.048h946.944v66.0992H38.5536z"
          p-id="5059" fill="#ffffff"></path>
      </svg>
    </van-nav-bar>
    <van-row>
      <van-col span="24">
        <img src="/static/image/aali.jpg" width="100%" height="220"/>
      </van-col>
    </van-row>
    <div class="model-img">
      <img src="/static/image/wechat.jpg" width="90" height="90"/>
    </div>
    <van-row>
      <van-col span="24" style="background-color: white;">
        <div class="col-div">
          <p class="col-title">
            WULIAN智能家居
            <svg t="1571883912820"
                 class="icon col-icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="4778" width="14" height="14">
              <path
                d="M512 1020.736a103.68 103.68 0 0 1-81.344-39.168L145.344 625.024h8.832C118.144 560.64 95.36 497.152 95.36 416.704c0-233.6 192.384-423.68 428.224-416.448 220.416 6.016 402.112 190.528 404.928 411.2 0.96 72.96-16.896 138.752-58.624 213.568h8.128l-33.28 42.304-251.456 314.24c-19.84 24.896-49.408 39.168-81.28 39.168zM223.232 638.976l248.064 310.144c19.904 24.832 61.504 24.832 81.408 0l249.344-312.192c53.824-84.032 75.392-149.248 74.432-224.896C873.984 219.008 715.072 57.536 522.176 52.288a365.12 365.12 0 0 0-374.72 364.416c0 84.608 29.888 149.248 74.624 220.48l1.152 1.792z"
                fill="#808080" p-id="4779"></path>
              <path
                d="M512 598.912A182.528 182.528 0 0 1 329.728 416.64 182.528 182.528 0 0 1 512 234.368a182.464 182.464 0 0 1 182.272 182.272A182.464 182.464 0 0 1 512 598.912z m0-312.384a130.368 130.368 0 0 0-130.176 130.176c0 71.808 58.432 130.176 130.176 130.176a130.304 130.304 0 0 0 130.176-130.176A130.432 130.432 0 0 0 512 286.528z"
                fill="#dbdbdb" p-id="4780"></path>
            </svg>
            <span class="col-span">苏州</span>
          </p>

          <p class="col-p">
            <span>500-999人</span>
            <span>国有企业</span>
            <span>互联网/电子商务</span>
          </p>

        </div>
      </van-col>
    </van-row>
    <van-row style="margin-top: 10px;">
      <van-col span="24" class="row-col-link">
        <p class="row-col-phone">联系电话</p>
        <p class="row-col-name">
          0791-8181 &nbsp; <a style="color: #444444;">刘经理</a>
        </p>
      </van-col>
    </van-row>
    <van-row style="margin-top: 10px;">
      <van-col span="24" class="van-col-map">
        <p class="addr">公司地址</p>
        <div id="container">
        </div>
      </van-col>
    </van-row>
    <van-row class="joblist">
      <van-col span="24" class="job-col">
        <div>
          <van-tabs type="card">
            <van-tab title="在招职位">
              <ul>
                <li class="card-li" v-for="i in [0,1,2,3]">
                  <div>
                    <p>
                      <span class="job-name">JAVA</span>
                      <span class="job-type">面议</span>
                    </p>
                  </div>
                  <div class="job-bottom">
                    <p style="line-height: 38px;">
                      <span style="color: #9b9b9b;">
                                        <svg t="1572054956259" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg" p-id="2100" width="16" height="16"><path
                                          d="M512.103132 320.120979a106.221743 106.221743 0 1 1-75.507022 31.354611A106.221743 106.221743 0 0 1 512.103132 320.120979m0-63.989002a170.850635 170.850635 0 1 0 120.939214 49.911422A169.570855 169.570855 0 0 0 512.103132 256.131977z"
                                          p-id="2101" fill="#8a8a8a"></path><path
                                          d="M805.172761 124.314633a407.609942 407.609942 0 0 0-586.139257 0 431.285873 431.285873 0 0 0 0 599.576948L512.103132 1024l293.069629-300.108419a431.285873 431.285873 0 0 0 0-599.576948z m-44.152411 557.344207l-248.917218 255.956007-248.917217-255.956007a365.377201 365.377201 0 0 1 0-508.712565 346.82039 346.82039 0 0 1 497.834435 0 365.377201 365.377201 0 0 1 0 508.712565z"
                                          p-id="2102" fill="#8a8a8a"></path></svg>

                        江苏
                      </span>
                      <span style="color: #9b9b9b;">
                                        <svg t="1572055078613" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg" p-id="2910" width="16" height="16"><path
                                          d="M819.4 273.8h-96.2v-80.1c0-46.1-37.5-83.5-83.5-83.5H383.1c-46.1 0-83.5 37.5-83.5 83.5v80.1h-95c-52.5 0-95.1 42.7-95.1 95.1v449.8c0 52.4 42.7 95.1 95.1 95.1h614.9c52.5 0 95.1-42.7 95.1-95.1V368.9c0-52.4-42.7-95.1-95.2-95.1z m-483.8-80.1c0-26.2 21.3-47.5 47.5-47.5h256.6c26.2 0 47.5 21.3 47.5 47.5v80.1H335.6v-80.1z m543 625c0 32.6-26.5 59.1-59.1 59.1H204.6c-32.6 0-59.1-26.5-59.1-59.1V486.4h733.1v332.3z m0-368.3H145.4v-81.5c0-32.6 26.5-59.1 59.1-59.1h614.9c32.6 0 59.1 26.5 59.1 59.1v81.5z"
                                          p-id="2911" fill="#707070"></path></svg>
                        3-5年
                      </span>
                      <span style="color: #9b9b9b;">
                      <svg t="1572055143191" class="icon" viewBox="0 0 1024 1024" version="1.1"
                           xmlns="http://www.w3.org/2000/svg" p-id="3799" width="18" height="18"><path
                        d="M895.1808 395.3664L521.728 194.8672c-6.0416-3.2768-13.312-3.2768-19.3536 0L128.8192 395.3664c-14.2336 7.68-14.4384 27.9552-0.3072 35.9424L264.192 507.5968v194.4576c0 7.8848 4.608 15.1552 11.6736 18.5344l230.1952 109.056c5.632 2.6624 12.0832 2.6624 17.7152-0.1024l224.4608-108.8512c7.0656-3.3792 11.5712-10.5472 11.5712-18.432V507.5968l73.9328-41.5744v310.6816c0 11.264 9.216 20.48 20.48 20.48s20.48-9.216 20.48-20.48V442.9824l20.7872-11.6736c14.1312-7.9872 13.9264-28.2624-0.3072-35.9424zM718.848 686.1824L514.8672 790.3232 305.152 685.9776V530.6368l196.8128 110.592c6.2464 3.4816 13.824 3.4816 20.0704 0l196.8128-110.592v155.5456z m-206.848-86.3232L181.0432 413.7984 512 236.1344l330.9568 177.664L512 599.8592z"
                        p-id="3800" fill="#707070"></path></svg>
                        硕士
                      </span>
                      <span style="color: #9b9b9b;">
                      <svg t="1572055213869" class="icon" viewBox="0 0 1024 1024" version="1.1"
                           xmlns="http://www.w3.org/2000/svg" p-id="4942" width="16" height="16"><path
                        d="M512.007 266.087c-19.29 0-34.929 15.638-34.929 34.929v236.642c0 19.29 15.638 34.929 34.929 34.929h195.898c19.29 0 34.929-15.638 34.929-34.929s-15.638-34.929-34.929-34.929h-160.97v-201.713c0-19.29-15.638-34.929-34.929-34.929z"
                        p-id="4943" fill="#707070"></path><path
                        d="M564.428 892.537c-3.526 0-6.927 0.527-10.137 1.495-15.639 2.086-31.586 3.193-47.788 3.193-198.266 0-359.566-161.3-359.566-359.566 0-198.265 161.3-359.565 359.566-359.565 198.266 0 359.566 161.3 359.566 359.565 0 3.603-0.064 7.193-0.176 10.77 0.059 0.038 0.123 0.067 0.183 0.105-0.131 1.229-0.201 2.476-0.201 3.739 0 19.344 15.682 35.025 35.025 35.025s35.025-15.682 35.025-35.025c0-1.219-0.063-2.426-0.186-3.613 0.107-3.659 0.186-7.324 0.186-11.001 0-57.956-11.359-114.197-33.761-167.162-21.629-51.139-52.588-97.060-92.014-136.485-39.425-39.426-85.347-70.384-136.486-92.014-42.256-17.873-86.597-28.708-132.233-32.362v-21.633c0-19.29-15.638-34.929-34.929-34.929s-34.929 15.638-34.929 34.929v21.633c-45.634 3.653-89.977 14.49-132.233 32.362-51.139 21.63-97.060 52.588-136.486 92.014-39.426 39.425-70.384 85.346-92.014 136.485-22.402 52.963-33.761 109.205-33.761 167.162 0 57.956 11.359 114.197 33.761 167.162 21.63 51.139 52.588 97.060 92.014 136.486 39.426 39.426 85.346 70.385 136.486 92.014 52.963 22.402 109.205 33.761 167.162 33.761 20.549 0 43.65-1.393 63.807-4.987-0.001-0.002-0.002-0.004-0.004-0.007 16.543-2.798 29.147-17.185 29.147-34.525 0-19.343-15.681-35.025-35.025-35.025z"
                        p-id="4944" fill="#707070"></path><path
                        d="M913.75 841.301h-75.929v-22.431h75.93c19.29 0 34.929-15.638 34.929-34.929s-15.638-34.929-34.929-34.929h-30.002l46.599-44.703c13.922-13.354 14.382-35.466 1.027-49.387-13.354-13.923-35.467-14.382-49.387-1.027l-79.098 75.877-79.098-75.877c-13.921-13.356-36.030-12.895-49.387 1.027-13.354 13.921-12.895 36.031 1.027 49.387l46.599 44.703h-30.002c-19.29 0-34.929 15.638-34.929 34.929s15.638 34.929 34.929 34.929h75.93v22.431h-75.93c-19.29 0-34.929 15.638-34.929 34.929s15.638 34.929 34.929 34.929h75.93v23.285c0 19.29 15.638 34.929 34.929 34.929s34.929-15.638 34.929-34.929v-23.285h75.93c19.29 0 34.929-15.638 34.929-34.929s-15.638-34.929-34.93-34.929z"
                        p-id="4945" fill="#707070"></path></svg>
                        全职
                      </span>
                      <span class="job-time">2016-06-01</span>
                    </p>
                  </div>
                </li>
              </ul>
            </van-tab>
            <van-tab title="公司简介">
              <p class="job-text">
                北京云天时空科技有限公司（以下简称云天时空公司）创建于2011年，公司依托于信息产业通信经济研究所（原邮电部管理干部学院通信经济研究所）形成的产学研一体化的高科技公司。是一家集科研、销售、运营为一体的企业，注册资本2000万元，注册地北京。公司是中关村高新技术认证企业，并获得国家级双软企业认证、国家级系统集成资质及国际ISO9001质量管理体系认证等，同时拥有数十项著作权和专利技术。

                云天时空公司总部位于北京中关村高科技电子工业园区（原邮电部738工业园），具有覆盖全国十余个重点省份的分支机构和技术服务网络。公司拥有一支高素质的科技开发团队，专注于无线网络功能平台与移动互联网应用、无线终端智能技术三者的无缝融合技术的研究和开发，为客户提供安全、可靠和先进的移动互联网解决方案。并于2012年参与建设工业和信息化部消费品工业司组织的“中国食品质量安全追溯体系项目”的平台。与工业和信息化部、电子部一所、CSIP（工业和信息化部软件与集成电路促进中心）、诺基亚西门子公司等具有战略合作关系。

                云天时空公司管理团队由来自于信息产业通信经济研究所、诺基亚西门子、微软等国内外著名软件公司。公司坚持以诚信向用户提供优质的产品和精益求精的服务理念，遵循高效、创新、务实、进取的企业精神，凭借专业的技术优势、务实创新的开拓精神、扎扎实实的员工团队，不断努力为广大客户创造更高的价值。

                欢迎了解学生圈平台：<a href="http://www.studentcircle.cn/index.html">http://www.studentcircle.cn/index.html</a>
              </p>
            </van-tab>
          </van-tabs>
        </div>
      </van-col>
    </van-row>
    <h1 class="company-title">推荐企业</h1>
    <van-row style="margin-top: 10px;">
      <van-col span="24" style="padding: 0px;">
        <ul style="margin: 0 auto;">
          <li v-for="i in [1,1,1,1,1]" class="li-div">
            <div class="li-img">
              <img src="/static/image/aali.jpg" width="100" height="90">
            </div>
            <div class="li-name">
              <p class="li-company-name">
                百度网络科技
                <span class="li-addr">苏州</span>
              </p>
              <p class="li-work">该企业有2个在招职位</p>
              <p class="li-bottom">
                <span>100-500人</span>
                <span>国有企业</span>
                <span>服装/仿制/皮革</span>
              </p>
            </div>
          </li>
        </ul>
      </van-col>
    </van-row>
  </div>
</template>
<script>
    export default {
        name: "compayInfo",
        data() {
            return {
                addr: '松花江',
                x: '',
                y: ''
            }
        },
        mounted() {
            /**================================================= 地图初始化定位 start ============================================*/
            var geolocation = new BMap.Geolocation();
            this.x = '';
            this.y = '';
            geolocation.getCurrentPosition(function (r) {
                if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                    var mk = new BMap.Marker(r.point);
                    map.addOverlay(mk);
                    map.panTo(r.point);
                    this.x = r.point.lng;
                    this.y = r.point.lat;
                } else {
                    console.log('failed' + this.getStatus());
                }
            }, {enableHighAccuracy: true});

            /**================================================= 地图初始化 start ============================================*/
            var map = new BMap.Map("container");    // 创建Map实例
            map.centerAndZoom(new BMap.Point(this.x, this.y), 11);  // 初始化地图,设置中心点坐标和地图级别
            //添加地图类型控件
            map.addControl(new BMap.MapTypeControl({
                mapTypes: [
                    BMAP_NORMAL_MAP,
                    BMAP_HYBRID_MAP
                ]
            }));
            map.addControl(new BMap.NavigationControl());
            map.addControl(new BMap.ScaleControl());
            map.addControl(new BMap.OverviewMapControl());
            map.addControl(new BMap.MapTypeControl());
            map.setCurrentCity("宁波");          // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            var styleOptions = {
                strokeColor: "red",    //边线颜色。
                fillColor: "red",      //填充颜色。当参数为空时，圆形将没有填充效果。
                strokeWeight: 3,       //边线的宽度，以像素为单位。
                strokeOpacity: 0.8,    //边线透明度，取值范围0 - 1。
                fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
                strokeStyle: 'solid' //边线的样式，solid或dashed。
            }
            var local = new BMap.LocalSearch(map, {
                renderOptions: {map: map}
            });
            // 关键词搜索
            local.search('松花江');
        },
        methods: {
            onClickLeft() {
                history.go(-1);
            },
            onClickRight() {
                Toast('按钮');
            },
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                }, 500);
            }
        }
    }
</script>
<style scoped>
  .model {
    position: relative;
    width: 100%;
    padding: 0 auto;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #f2f3f5;
  }

  .model-img {
    position: absolute;
    z-index: 1;
    top: 220px;
    margin-left: 40px;
  }

  .van-nav-bar {
    background-color: #1382de;
    z-index: 20;
  }

  .van-nav-bar__title, .van-nav-bar__text, .van-nav-bar .van-icon {
    color: #ffffff;
  }

  .card-li {
    padding: 17px;
    height: 90px;
    bottom: 10px;
    border-bottom: #d6d6d6 0.2px solid;
  }

  .col-div {
    position: relative;
    padding-top: 70px;
    padding-left: 40px;
  }

  .col-title {
    background-color: white;
    font-size: 24px;
    font-weight: bolder;
    color: #000;
    vertical-align: bottom;
  }

  .col-icon {
    margin-bottom: 0px;
    line-height: 16px;
    margin-left: 20px;
    margin-top: 3px;
  }

  .col-span {
    color: #a2a2a2;
    font-size: 15px;
  }

  .col-p {
    color: #404040;
    font-size: 16px;
    line-height: 44px;
  }

  .row-col-link {
    background-color: white;
    padding: 7px 0px 7px 0px;
  }

  .row-col-phone {
    color: #444444;
    font-weight: bolder;
    font-size: 18px;
    margin-left: 40px;
  }

  .row-col-name {
    margin-left: 40px;
    font-size: 18px;
    color: #00c192;
    line-height: 34px;
  }

  .van-col-map {
    background-color: white;
    padding: 10px 0px 10px 0px;
  }

  .addr {
    color: #444444;
    font-weight: bolder;
    font-size: 20px;
    margin-left: 40px;
  }

  #container {
    width: 100%;
    height: 260px;
    margin-top: 10px;
  }

  .joblist {
    margin-top: 10px;
  }

  .job-col {
    background-color: white;
    padding: 10px 0px 10px 0px;
  }

  .job-name {
    color: #151515;
    font-weight: bolder;
    font-size: 18px;
    float: left;
  }

  .job-type {
    float: right;
    color: #ff2d5e;
    font-weight: bolder;
    position: relative;
  }

  .job-bottom {
    width: 100%;
    margin-top: 30px;
  }

  .job-time {
    color: #9b9b9b;
    font-size: 12px;
    float: right;
  }

  .job-text {
    padding: 10px 18px 10px 18px;
    text-indent: 2em;
    line-height: 26px;
  }

  .company-title {
    font-size: 16px;
    text-align: center;
    color: #999999;
    margin-top: 10px;
  }

  .li-div {
    width: 100%;
    height: 110px;
    padding: 10px 10px 20px 20px;
    white-space: nowrap;
    margin-bottom: 10px;
    background-color: white;
  }

  .li-img {
    display: inline-block;
    margin: 0 auto;
    width: auto;
    float: left;
  }

  .li-name {
    display: inline-block;
    margin: 0 auto;
    width: 70%;
    padding-left: 10px;
    height: 92px;
  }

  .li-company-name {
    font-weight: bolder;
    vertical-align: top;
  }

  .li-addr {
    font-size: 14px;
    vertical-align: top;
    color: #999999;
    float: right;
  }

  .li-work {
    font-weight: bolder;
    vertical-align: top;
    color: #999999;
    margin-top: 10px;
  }

  .li-bottom {
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    bottom: 0px;
    margin-top: 13px;
  }

</style>
