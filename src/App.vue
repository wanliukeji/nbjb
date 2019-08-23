<template lang="html">
  <div class="container-body">
    <top></top>
    <example></example>
    <menu-nav></menu-nav>
    <table-nav></table-nav>
    <img-model></img-model>
    <model-first></model-first>
    <footer-table></footer-table>
    <footer-nav></footer-nav>
    <!--    -->
    <!--  引入的header组件 -->
    <!--        <headerNav :navTitle="navTitle"></headerNav>-->

    <!--      引入的top组件 -->

    <!--      引入的example组件 -->

    <!--    <div class="content">-->
    <!--      <router-view v-on:setNav="setNav"></router-view>  &lt;!&ndash; 这里是展示来自路由页面数据的 &ndash;&gt;-->
    <!--    </div>-->

    <!-- 引入的menu-nav组件 -->

    <!--      引入的table-nav组件 -->
    <!--      引入的img-model组件 -->
    <!--        <div class="body_center">-->
    <!--    <div class="centext">-->


    <!--    <example-model></example-model>-->

    <!--        <model-1></model-1>-->


    <!--    <model-first></model-first>-->
    <!--    <model-first></model-first>-->
    <!--    <data-dmo></data-dmo>-->

    <!--    <demo></demo>-->
    <!-- <example-model></example-model>-->
    <!--    弹出框 测试 模型 -->
    <!--    <popup></popup>-->


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
    import Popup from "./view/popup";
    import Model1 from "./model/model-1";

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
            Model1,
            Popup,
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
            footerNav
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

  .container-body {
    width: 100%;
    /*padding: 2rem 0;*/
    position: relative;
    background: #f2f2f2;
    /*top: 0px;*/
    /*min-height: 1800px;*/
    height: 100%;
  }

</style>
