<template lang="html">
  <div class="container">
    <!--  引入的header组件 -->
    <!--    <headerNav :navTitle="navTitle"></headerNav>-->
    <!--      引入的top组件 -->
    <top></top>
    <!--      引入的example组件 -->
    <example></example>
    <!--    <div class="content">-->
    <!--      <router-view v-on:setNav="setNav"></router-view>  &lt;!&ndash; 这里是展示来自路由页面数据的 &ndash;&gt;-->
    <!--    </div>-->
    <!-- 引入的menu-nav组件 -->
    <menu-nav></menu-nav>
    <!--      引入的table-nav组件 -->
    <table-nav></table-nav>
    <!--      引入的img-model组件 -->
    <!--        <div class="body_center">-->
    <!--    <div class="centext">-->
    <img-model></img-model>
    <example-model></example-model>
    <footer-table></footer-table>
    <!--    <data-dmo></data-dmo>-->

    <!--    <demo></demo>-->
    <div class="foot-father">

      <div class="footer">
        <div class="footer-center">
          <div class="footer-left">
            <p style="font-size: 18px; line-height: 40px;">客服电话</p>
            <p style="font-size: 23px; line-height: 27px; color: #389efb;">86800055</p>
            <p style="font-size: 11px; line-height: 40px; font-family: 'Microsoft YaHei'; color: #999">工作时间 周一至周六 8:00-17:30</p>
            <p style="font-size: 12px; vertical-align: middle; color: #717171;">
              客服QQ &nbsp;
              <img src="/static/image/site_qq.jpg" height="21" alt="点击咨询"/>
            </p>
          </div>

          <div class="footer-herf">
            <dt class="footer-dt">购物</dt>
            <dd class="footer-dd">阿拉商城</dd>
            <dd class="footer-dd">同城快店</dd>
            <dd class="footer-dd">商家入驻</dd>
            <dd class="footer-dd">商家管理</dd>
          </div>

          <div class="footer-herf">
            <dt class="footer-dt">供应</dt>
            <dd class="footer-dd">二手市场</dd>
            <dd class="footer-dd">本地服务</dd>
            <dd class="footer-dd">车辆租售</dd>
            <dd class="footer-dd">商业服务</dd>
          </div>

          <div class="footer-herf">
            <dt class="footer-dt">房产</dt>
            <dd class="footer-dd">新楼盘</dd>
            <dd class="footer-dd">二手房</dd>
            <dd class="footer-dd">出租房</dd>
            <dd class="footer-dd">找中介</dd>
          </div>

          <div class="footer-herf">
            <dt class="footer-dt">招聘</dt>
            <dd class="footer-dd">找工作</dd>
            <dd class="footer-dd">找人才</dd>
            <dd class="footer-dd">发招聘</dd>
            <dd class="footer-dd">填简历</dd>
          </div>

          <div class="footer-right">
            <table>
              <tr>
                <td>微信公众号</td>
                <td>APP客户端</td>
              </tr>
              <tr>
                <td><img src="/static/image/weixin.png" class="footer-img"/></td>
                <td><img src="/static/image/app.png" class="footer-img"/></td>
              </tr>
            </table>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-bottom-text">
            <span class="footer-bottom-span">宁波阿拉网</span>
            <span class="footer-bottom-span">广告服务</span>
            <span class="footer-bottom-span">排行榜</span>
            <span class="footer-bottom-span">Archiver</span>
            <span class="footer-bottom-span">手机版</span>
            <span class="footer-bottom-span">浙ICP备12020218号</span>
          </div>
        </div>

        <div class="footer-bottom-index">
          Powered by Discuz! X3.4 © 2001-2017 Comsenz Inc. GMT+8, 2019-8-17 17:02 , Processed in 0.067049 second(s), 1
          queries , MemCache On.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    /* 引用组件 */
    import headerNav from "@/components/headerNav";
    import example from "@/components/example";
    import tableNav from "@/components/tableNav";
    import footerNav from "@/components/footerNav";
    import MenuNav from "./components/menuNav";
    import ImgModel from "./components/imgModel";
    import Top from "./components/top";
    import ModelFirst from "./components/model-first";
    import Footer from "./components/footer";
    import DataDmo from "./components/dataDmo";
    import Demo from "./view/demo";
    import ExampleModel from "./components/exampleModel";
    import FooterTable from "./components/footerTable";

    export default {
        data() {
            /* 这里是数据，注意数据一定要放data中然后用return返回 */
            return {
                navTitle: '',
                nowTab: 1,
            };
        },
        //组件
        components: {
            FooterTable,
            ExampleModel,
            Demo,
            DataDmo,
            Footer,
            ModelFirst,
            Top,
            ImgModel,
            MenuNav,
            headerNav,
            example,
            tableNav,
            footerNav,
        },
        mounted() {
        },
        methods: {
            setNav(seterArr) {
                this.navTitle = seterArr[0];
                this.nowTab = seterArr[1];
            }
        }
    };
</script>

<style lang="css">

  /*@import "/static/css/index.css"; 引入样式*/

  * {
    word-break: break-word;
    margin: 0 auto;
    font-size: 16px;
    font-family: Tahoma, "Microsoft YaHei", SimSun;
  }


  blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0
  }

  html {
    /*overflow-y: scroll*/
  }

  body {
    /*font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;*/
    /*font-size: 14px;*/
    -webkit-font-smoothing: antialiased;
    position: relative;
    text-align: center;
    min-height: 100%;
    background-color: #f3f3f3;
    width: 100%;
    min-width: 1200px;
  }

  ul, ol {
    list-style: none
  }

  a {
    text-decoration: none;
  }

  *, :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0 none
  }

  a {
    color: inherit
  }

  .container {
    width: 100%;
    /*padding: 2rem 0;*/
    position: relative;
    background: #f2f2f2;
    /*top: 0px;*/
    /*min-height: 1800px;*/
    height: 100%;
  }

  .footer {
    margin: 0 auto;
    /*position: relative;*/
    /*height: 280px;*/
    height: auto;
    min-height: 230px;
    background: #ffffff;
    width: 100%;
    /*left: 0;*/
    /*top: 1200px;*/
    /*min-height: 100%;*/
    min-width: 1200px;
    max-width: 100%;
    bottom: 0;
    padding-top: 10px;
    padding-left: 0px;
    padding-bottom: 0px;
  }

  .foot-father {
    bottom: 0;
    position: relative;
    height: auto;
    width: 100%;
    background: #FFFFFF;
    padding-top: 5px;
    padding-left: 0px;
    padding-bottom: 0px;
    /*border: black 1px solid;*/
  }

  .footer-center {
    margin: 0 auto;
    width: 87%;
    /*padding-top: 40px;*/
    /*position: relative;*/
    /*padding-bottom: 100px;*/
    /*margin-bottom: 40px;*/
    /*border: black 1px solid;*/
    padding-left: 0px;
    height: auto;
    min-height: 130px;
    min-width: 1200px;
  }

  .footer-left {
    width: 250px;
    height: 150px;
    display: inline-block;
    float: left;
    position: relative;
    padding: 0px;
    /*border: #88ff19 1px solid;*/
    /*margin-left: 40px;*/
  }

  .footer-herf {
    display: inline-block;
    float: left;
    width: 130px;
    height: 150px;
    border-right: #ececec 1px solid;
    /*padding-left: 40px;*/
  }

  .footer-dt {
    text-align: center;
    line-height: 35px;
    font-size: 17px;
  }

  .footer-dd {
    text-align: center;
    line-height: 25px;
    font-size: 11px;
    color: #7a7a7a;
  }

  .footer-dd:hover, .footer-dt:hover {
    cursor: pointer;
    color: #0a0a0a;
  }

  .footer-right {
    display: inline-block;
    float: right;
    width: 250px;
    height: auto;
    position: relative;
    /*border: #88ff19 1px solid;*/
  }

  .footer-right > table {
    text-align: center;
  }

  .footer-img {
    height: 96px;
    width: 96px;
  }

  .footer-bottom {
    display: block;
    width: 100%;
    background-color: #1382de;
    /*position: absolute;*/
    /*top: 180px;*/
    min-width: 1200px;
    margin: 0 auto;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
    height: 38px;
    margin-top: 30px;
  }

  .footer-bottom-text {
    margin-left: 33%;
  }

  .footer-bottom-span {
    display: inline-block;
    float: left;
    width: auto;
    border-right: #bcbcbc solid 1px;
    font-size: 12px;
    padding: 5px;
    color: #d0e0f1;
    vertical-align: center;
  }

  .footer-bottom-index {
    display: block;
    width: 100%;
    background-color: #ffffff;
    position: relative;
    /*top: 250px;*/
    min-width: 1024px;
    margin: 0 auto;
    padding-bottom: 5px;
    vertical-align: center;
    height: 20px;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 10px;
  }

</style>
