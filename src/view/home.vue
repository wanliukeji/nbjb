<template>
  <div class="home">
    {{msg}}
    <br>
    <button @click="go">点我返回</button>
    <br>
    <el-button :plain="true" @click="open2">成功</el-button>
    <br>
    <el-button :plain="true" @click="open3">成功</el-button>

    <Carousel autoplay v-model="value2" loop>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="/static/image/timg.jpg" alt="" height="300" width="700">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="/static/image/timg.jpg" alt="" height="300" width="700">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="/static/image/timg.jpg" alt="" height="300" width="700">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="/static/image/timg.jpg" alt="" height="300" width="700">
        </div>
      </CarouselItem>
    </Carousel>

    <!-- Form -->
    <el-button type="success" @click="dialogFormVisible = true">打开弹窗</el-button>

    <el-dialog title="请填写信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <table>
          <tr>
            <td>
              账号：
            </td>
            <td>
              <input type="text">
            </td>
          </tr>
          <tr>
            <td>
              密码：
            </td>
            <td>
              <input type="text">
            </td>
          </tr>
        </table>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <br>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
    <!--    <router-view></router-view>-->
  </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                //获取参数
                num: this.$route.query.num,
                msg: 'HOME.VUE',
                value2: 0,
                gridData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                dialogTableVisible: false,
                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px'
            }
        },
        created() {

        },
        methods: {
            go() {
                // alert(this.num);
                this.num = 0;
                this.$router.go(-1);
            },
            open2() {
                this.$message({
                    message: '恭喜你，操作成功 !',
                    type: 'success'
                })
            },
            open3() {
                this.$notify({
                    title: '成功',
                    message: '这是一条成功的提示消息',
                    type: 'success'
                });
            }
        }
    }
</script>

<style scoped>

  .home {
    font-size: 40px;
    font-family: 楷体;
    text-align: center;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
