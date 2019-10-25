<template>
  <div class="model">
    <van-nav-bar fixed title="公司详情" left-text="返回" right-text="设置" left-arrow @click-left="onClickLeft"
                 @click-right="onClickRight"/>
    <van-row>
      <van-col span="24">
        <img src="/static/image/aali.jpg" width="100%" height="220"/>
      </van-col>
    </van-row>
    <div style="position: absolute; z-index: 100; top:170px;
            margin-left: 40px;">
      <img src="/static/image/wechat.jpg" width="90" height="90"/>
    </div>

    <van-row>
      <van-col span="24" style="background-color: white;">
        <div style="padding-top: 70px; padding-left: 40px;">
          <p
            style=" background-color: white; font-size:24px; font-weight: bolder; color: #000; vertical-align: bottom;">
            WULIAN智能家居
            <svg style="margin-bottom: 0px; line-height: 16px; margin-left: 20px; margin-top: 3px;" t="1571883912820"
                 class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="4778" width="14" height="14">
              <path
                d="M512 1020.736a103.68 103.68 0 0 1-81.344-39.168L145.344 625.024h8.832C118.144 560.64 95.36 497.152 95.36 416.704c0-233.6 192.384-423.68 428.224-416.448 220.416 6.016 402.112 190.528 404.928 411.2 0.96 72.96-16.896 138.752-58.624 213.568h8.128l-33.28 42.304-251.456 314.24c-19.84 24.896-49.408 39.168-81.28 39.168zM223.232 638.976l248.064 310.144c19.904 24.832 61.504 24.832 81.408 0l249.344-312.192c53.824-84.032 75.392-149.248 74.432-224.896C873.984 219.008 715.072 57.536 522.176 52.288a365.12 365.12 0 0 0-374.72 364.416c0 84.608 29.888 149.248 74.624 220.48l1.152 1.792z"
                fill="#808080" p-id="4779"></path>
              <path
                d="M512 598.912A182.528 182.528 0 0 1 329.728 416.64 182.528 182.528 0 0 1 512 234.368a182.464 182.464 0 0 1 182.272 182.272A182.464 182.464 0 0 1 512 598.912z m0-312.384a130.368 130.368 0 0 0-130.176 130.176c0 71.808 58.432 130.176 130.176 130.176a130.304 130.304 0 0 0 130.176-130.176A130.432 130.432 0 0 0 512 286.528z"
                fill="#dbdbdb" p-id="4780"></path>
            </svg>
            <span style="color: #a2a2a2; font-size: 15px;">苏州</span>
          </p>

          <p style="color: #404040; font-size: 16px; line-height: 44px;">
            <span>500-999人</span>
            <span>国有企业</span>
            <span>互联网/电子商务</span>
          </p>

        </div>
      </van-col>
    </van-row>

    <van-row style="margin-top: 10px;">
      <van-col span="24" style="background-color: white; padding:7px 0px 7px 0px;">
        <p style="color: #444444; font-weight: bolder; font-size: 18px; margin-left: 40px;">联系电话</p>
        <p style="margin-left: 40px; font-size: 18px; color: #00c192; line-height: 34px;">
          0791-8181 &nbsp; <a style="color: #444444;">刘经理</a>
        </p>
      </van-col>
    </van-row>

    <van-row style="margin-top: 10px;">
      <van-col span="24" style="background-color: white; padding:10px 0px 10px 0px;">
        <p style="color: #444444; font-weight: bolder; font-size: 20px; margin-left: 40px;">公司地址</p>
        <div id="container" style="width: 100%;height: 260px; margin-top: 10px;">
        </div>
      </van-col>
    </van-row>

    <van-row style="margin-top: 10px;">
      <van-col span="24" style="background-color: white; padding:10px 0px 10px 0px;">
        <div>
          <van-tabs type="card">
            <van-tab title="在招职位">
              <ul>
                <li style="padding: 15px;">
                  <div style="line-height: 35px;">
                    <p>
                     <span style="color: #151515; font-weight: bolder; font-size: 18px; float: left;">JAVA</span>
                     <span style="float: right; color: #ff2d5e; font-weight: bolder;">面议</span>
                    </p>
                    <p style="border: #d3d4d6 1px solid; width: 100%; display: block;"></p>
                  </div>
                  <div style="height: 100px; width: 100%; border: #b2b3b4 1px solid;">

                  </div>
                </li>
              </ul>
            </van-tab>
            <van-tab title="公司简介">
              <p>
                北京云天时空科技有限公司（以下简称云天时空公司）创建于2011年，公司依托于信息产业通信经济研究所（原邮电部管理干部学院通信经济研究所）形成的产学研一体化的高科技公司。是一家集科研、销售、运营为一体的企业，注册资本2000万元，注册地北京。公司是中关村高新技术认证企业，并获得国家级双软企业认证、国家级系统集成资质及国际ISO9001质量管理体系认证等，同时拥有数十项著作权和专利技术。

                云天时空公司总部位于北京中关村高科技电子工业园区（原邮电部738工业园），具有覆盖全国十余个重点省份的分支机构和技术服务网络。公司拥有一支高素质的科技开发团队，专注于无线网络功能平台与移动互联网应用、无线终端智能技术三者的无缝融合技术的研究和开发，为客户提供安全、可靠和先进的移动互联网解决方案。并于2012年参与建设工业和信息化部消费品工业司组织的“中国食品质量安全追溯体系项目”的平台。与工业和信息化部、电子部一所、CSIP（工业和信息化部软件与集成电路促进中心）、诺基亚西门子公司等具有战略合作关系。

                云天时空公司管理团队由来自于信息产业通信经济研究所、诺基亚西门子、微软等国内外著名软件公司。公司坚持以诚信向用户提供优质的产品和精益求精的服务理念，遵循高效、创新、务实、进取的企业精神，凭借专业的技术优势、务实创新的开拓精神、扎扎实实的员工团队，不断努力为广大客户创造更高的价值。

                欢迎了解学生圈平台：http://www.studentcircle.cn/index.html
              </p>
            </van-tab>
          </van-tabs>
        </div>
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

  .van-nav-bar {
    background-color: #1382de;
  }

  .van-nav-bar__title, .van-nav-bar__text, .van-nav-bar .van-icon {
    color: #ffffff;
  }

  .grid-span {
    font-size: 12px;
    margin-top: 3px;
    color: #404040;
  }

  .tab-div {
    position: relative;
    margin-top: 50px;
    height: auto;
    position: relative;
    padding-bottom: 50px;
  }

  .tab-ul {
    width: 100%;
    padding-bottom: 10px;
  }

  .tab-ul-li {
    padding: 10px;
    background-color: #FFFFFF;
    white-space: nowrap;
    margin-bottom: 10px;
  }

  .li-top {
    border-bottom: #F2F2F2 1px solid;
    padding: 0px 0px 10px 0px;
  }

  .li-bottom-div {
    width: 100%;
    position: relative;
    padding: 10px 0px 0px 0px;
  }

  .li-bottom-div-img {
    display: inline-block;
    width: 15%;
    vertical-align: top;
  }

  .li-bottom-div-title {
    display: inline-block;
    width: 60%;
    vertical-align: top;
  }

  .li-bottom-div-name {
    color: #212121;
    font-size: 15px;
  }

  .li-bottom-div-p {
    padding: 0;
    white-space: nowrap;
    margin-top: 0px;
  }

  .li-bottom-div-span {
    color: #8D8E91;
    font-size: 12px;
    vertical-align: bottom;
    margin-bottom: 0;
  }

  .li-bottom-right {
    display: inline-block;
    width: auto;
    vertical-align: bottom;
  }

  .li-bottom-div-btn {
    padding: 2px;
    background-color: #0a6beb;
    border: none;
    color: #FFFFEE;
    width: 85px;
  }

  .p-title {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    display: inline-block;
    left: 0;
  }

  .p-right-a {
    color: #FF0B00;
    font-size: 14px;
    font-weight: bolder;
    right: 0;
    float: right;
  }

  .tab-ul-li-p-span {
    color: #8D8E91;
    font-size: 14px;
    line-height: 35px;
    margin-right: 10px;
  }

  .tab-ul-li-p-time {
    float: right;
    color: #C4C4C4;
    font-size: 8px;
    bottom: 0;
    margin-bottom: 0px;
    margin-top: 8px;
  }

  .tab-ul-li-div {
    padding: 5px;
    background-color: #f4f4f6;
    color: #636363;
  }

  .tab-ul-li-p-i {
    border: #F2F2F2 1px solid;
    margin-right: 12px;
    height: 5px;
  }

  .van-dropdown-item {
    color: #444444;
  }

  .menu {
    z-index: 10;
    margin-top: -55px;
    position: fixed;
    width: 100%;
  }

  .search {
    margin: 100px 0px 10px 0px;
    position: relative;
  }

</style>
