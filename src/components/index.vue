<template lang="html">
  <div class="model">
    <job-nav/>
  </div>
</template>

<script>
    import Top from "./top";
    import JobNav from "./jobNav";
    import Search from "./search";
    import TableNav from "./tableNav";
    import MenuNav from "./menuNav";
    import FooterTable from "./footerTable";
    import footerNav from "./footerNav";
    import Info from "./job/info";
    import Group from "./job/group";

    export default {
        name: "index",
        components: {
            Group,
            Info,
            TableNav,
            FooterTable,
            Top,
            MenuNav,
            JobNav,
            footerNav,
            Search
        }
    }
</script>

<style scoped>
  /*.model {*/
  /*  width: 100%;*/
  /*  height: auto;*/
  /*  border: black 1px solid;*/
  /*}*/
</style>
