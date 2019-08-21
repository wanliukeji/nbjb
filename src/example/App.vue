<template lang="html">
  <div>

    <top-model></top-model>
    <head></head>
    <nav></nav>
    <menu></menu>
    <foot></foot>

  </div>
</template>
<script>
    import TopModel from "./example/topModel";
    import Head from "./example/headModel";
    import Nav from "./example/navModel";
    import Menu from "./example/menuModel";
    import Foot from "./example/footModel";

    export default {
        components: {Foot, Menu, Nav, Head, TopModel}
    }
</script>

