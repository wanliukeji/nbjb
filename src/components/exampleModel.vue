<template lang="html">
  <div class="model">
    <job-model>


    </job-model>
  </div>
</template>

<script>
    import JobModel from "./jobModel";

    export default {
        name: "exampleModel",
        components: {JobModel},
        data() {
            return {
                items: []
            };
        },
        created() {
            this.$http.get('/static/data/demo.json').then(res => {
                var obj = res.data;
                this.items = obj;
                this.movieList = res.data;
                console.log(this.movieList);
                console.log('obj :' + JSON.stringify(obj));
                //
                // console.log('res :' + JSON.stringify(res));
                if (res.status == 200) {
                    // alert('数据获取成功');
                } else {
                    // alert('获取数据失败');
                }
            })
        }
        // },
        // methods() {
        //
        // }
    }
</script>

<style scoped>
  .model {
    position: relative;
    width: 100%;
    min-width: 1200px;
    height: auto;
    margin: 0 auto;
    vertical-align: center;
    display: block;
    /*border: black 1px solid;*/
    top: 0px;
    /*bottom: 10px;*/
    /*margin-bottom: 10px;*/
  }

</style>
