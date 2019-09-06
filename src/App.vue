<template lang="html">
  <div class="container-body">

    <!--    -->

    <router-view></router-view>

    <!--    <model-firt></model-firt>-->
    <!--    <cy-home></cy-home>-->
    <!--    <mine></mine>-->
    <!--    <class></class>-->
    <!--    <me></me>-->
    <!--    <good></good>-->
    <!--    <Address></Address>-->
    <!--    <order></order>-->
    <!--    <img></img>-->
    <!--    <wallet></wallet>-->
    <!--    <team></team>-->
    <!--    <shop></shop>-->

    <!-- -------------------------------------------------------- -->

    <!--    <a href="" @click.prevent="comName='login'" v-if="comName == 'ModelFirt'">登录</a>-->
    <!--    <a href="" @click.prevent="comName='ModelFirt'" v-if="comName == 'login'">注册</a>-->

    <!--    通过 mode 属性,设置组件切换时候的 模式   -->
    <!--    <transition mode="out-in">-->
    <!--      <component :is="comName"></component>-->
    <!--    </transition>-->
    <!-- 测试 -->
    <!--    <cnnb-model></cnnb-model>-->
    <!--    <hello></hello>-->
    <!-- -------------------------------------------------------- -->

    <!--    -->
    <!--    <top></top>-->
    <!--    <example></example>-->
    <!--    <menu-nav></menu-nav>-->
    <!--    <table-nav></table-nav>-->
    <!--    <img-model></img-model>-->
    <!--    <example-model></example-model>-->
    <!--    <footer-table></footer-table>-->
    <!--    <footer-nav></footer-nav>-->
  </div>
</template>
<script>
    import example from "@/components/example";
    import tableNav from "@/components/tableNav";
    import footerNav from "@/components/footerNav";
    import MenuNav from "./components/menuNav";
    import ImgModel from "./components/imgModel";
    import Top from "./components/top";
    import FooterTable from "./components/footerTable";
    import ExampleModel from "./components/exampleModel";
    ////////////////////////////////////////////////////////////
    import Login from "./components/iview/login";
    import Regedit from "./components/iview/regedit";
    import Home from "./components/iview/home";
    import Mine from "./components/iview/mine";
    import Class from "./components/iview/class";
    import Personal from "./components/iview/personal";
    import Good from "./components/iview/good";
    import Address from "./components/iview/Address";
    import Order from "./components/iview/order";
    import Img from "./components/iview/img";
    import Wallet from "./components/iview/wallet";
    import Team from "./components/iview/team";
    import shop from "./components/iview/shop";
    import CnnbModel from "./components/cnnb/cnnb-model";
    import hello from "./components/hello";

    export default {
        data() {
            return {
                navTitle: '',
                nowTab: 1
            };
        },
        components: {
            hello,
            CnnbModel,
            shop,
            Team,
            Wallet,
            Img,
            Order,
            Address,
            Good,
            Personal,
            Class,
            Mine,
            Home,
            Login,
            ExampleModel,
            Top,
            example,
            MenuNav,
            ImgModel,
            tableNav,
            FooterTable,
            footerNav
        },
        created() {
            this.activeDate = (new Date()).toString();
            this.$router.push({name: 'login'})
        },
        mounted() {

        },
        methods: {}
    };
</script>

<style lang="css">
  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateX(150px);
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }

  * {
    word-break: break-word;
    margin: 0 auto;
    font-size: 16px;
    font-family: Tahoma, "Microsoft YaHei", SimSun;
  }

  html {
    max-width: 100%;
  }

  blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0
  }

  body {
    -webkit-font-smoothing: antialiased;
    position: relative;
    text-align: center;
    min-height: 100%;
    /*background-color: #f6f6f6;*/
    width: 100%;
    /*min-width: 1200px;*/
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
    /*background: #FFFFFF;*/
    /*top: 0px;*/
    /*min-height: 1800px;*/
    height: 100%;
  }

</style>
