<template lang="html">
  <div class="container-body">
    <top/>
    <search/>
    <menu-nav/>
    <table-nav/>
    <job-nav/>
    <footer-table/>
    <footerNav/>
  </div>
</template>
<script>
    import JobNav from "./components/jobNav";
    import Top from "./components/top";
    import Search from "./components/search";
    import TableNav from "./components/tableNav";
    import MenuNav from "./components/menuNav";
    import FooterTable from "./components/footerTable";
    import footerNav from "./components/footerNav";
    export default {
        data() {
            return {
                nowTab: 1
            };
        },
        components: {
            FooterTable,
            MenuNav,
            TableNav,
            Top,
            Search,
            JobNav,
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

<style lang="css" scoped>
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
    /*-webkit-font-smoothing: antialiased;*/
    position: relative;
    text-align: center;
    min-height: 100%;
    /*background-color: #f2f2f2;*/
    width: 100%;
    /*min-width: 1200px;*/
  }

  .container-body {
    background-color: #F2F2F2;
    width: 100%;
    height: 100%;
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

</style>
