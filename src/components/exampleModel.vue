<template lang="html">
  <div class="model">
    <!---->
    <!-- <job-nav></job-nav> -->
    <!--<job-info></job-info>-->
    <hello>
    </hello>
  </div>
</template>
<script>
    import JobNav from "./jobNav";
    import JobInfo from "./jobInfo";
    import Hello from "./hello";
    export default {
        name: "exampleModel",
        components: {Hello, JobInfo, JobNav},
        data() {
            return {
                items: []
            };
        },
        created() {
            // this.$http.get('/static/data/demo.json').then(res => {
            //     var obj = res.data;
            //     this.items = obj;
            //     this.movieList = res.data;
            //     console.log(this.movieList);
            //     console.log('obj :' + JSON.stringify(obj));
            //     //
            //     // console.log('res :' + JSON.stringify(res));
            //     if (res.status == 200) {
            //         // alert('数据获取成功');
            //     } else {
            //         // alert('获取数据失败');
            //     }
            // })
        },
        methods() {

        }
    }
</script>

<style lang="css" scoped>
  .model {
    position: relative;
    width: 100%;
    min-width: 1200px;
    height: auto;
    margin: 0 auto;
    vertical-align: center;
    display: block;
    font-size: 20px;
  }

</style>
