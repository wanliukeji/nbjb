<template lang="html">
  <div class="container-body">
    <top></top>
    <example></example>
    <menu-nav></menu-nav>
    <table-nav></table-nav>
<!--    <img-model></img-model>-->
<!--    <example-model></example-model>-->

    <footer-table></footer-table>
    <footer-nav></footer-nav>
  </div>
</template>
<script>
    /* 引用组件 */
    import example from "@/components/example";
    import tableNav from "@/components/tableNav";
    import footerNav from "@/components/footerNav";
    import MenuNav from "./components/menuNav";
    import ImgModel from "./components/imgModel";
    import Top from "./components/top";
    import FooterTable from "./components/footerTable";
    import ExampleModel from "./components/exampleModel";

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
            ExampleModel,
            Top,
            example,
            MenuNav,
            ImgModel,
            tableNav,
            FooterTable,
            footerNav
        },
        mounted() {
        },
        methods: {

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

  body {
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
