<template>
  <div class="model">
    <i class="close-left" @click="goTo">
      <svg t="1567585969191" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="1713" width="16" height="16">
        <path
          d="M209.92 988.16c-15.36 0-30.72-15.36-30.72-30.72s15.36-30.72 30.72-30.72h471.04c153.6 0 281.6-128 281.6-281.6s-128-281.6-281.6-281.6H102.4l220.16 220.16c5.12 5.12 10.24 10.24 10.24 20.48 0 5.12-5.12 15.36-10.24 20.48-5.12 5.12-10.24 10.24-20.48 10.24-5.12 0-15.36-5.12-20.48-10.24L10.24 353.28c-5.12-5.12-10.24-10.24-10.24-20.48 0-5.12 5.12-15.36 10.24-20.48L281.6 40.96c5.12-5.12 10.24-10.24 20.48-10.24 5.12 0 15.36 5.12 20.48 10.24 0 10.24 5.12 15.36 5.12 25.6 0 5.12-5.12 15.36-10.24 20.48L97.28 307.2h583.68a343.04 343.04 0 0 1 0 686.08H209.92z"
          fill="#d81e06" p-id="1714"></path>
      </svg>
    </i>
    <h1>地址管理</h1>
    <hr>
    <div class="model-div-row">
      <span class="model-text">江苏省
        &nbsp;南京市
        &nbsp;玄武区
        &nbsp;凌峰小区
        &nbsp;201单元303号</span>
    </div>

    <div class="model-div-row"  @click="dialogFormVisible = true">
      <span class="model-div-row-span">添加地址</span>
      <div class="model-div-row-btn">
        <svg t="1567483051512" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="1723" width="16" height="16" style="position: absolute; top: 20px; right: 34% ">
          <path
            d="M906.212134 565.732986 565.732986 565.732986 565.732986 906.212134C565.732986 926.013685 541.666486 959.972 511.97312 959.972 482.297674 959.972 458.213254 926.013685 458.213254 906.212134L458.213254 565.732986 117.734106 565.732986C97.950475 565.732986 63.97424 541.666486 63.97424 511.97312 63.97424 482.279754 97.950475 458.213254 117.734106 458.213254L458.213254 458.213254 458.213254 117.734106C458.213254 97.950475 482.297674 63.97424 511.97312 63.97424 541.666486 63.97424 565.732986 97.950475 565.732986 117.734106L565.732986 458.213254 906.212134 458.213254C925.995765 458.213254 959.972 482.279754 959.972 511.97312 959.972 541.666486 925.995765 565.732986 906.212134 565.732986Z"
            p-id="1724" fill="#515151"></path>
        </svg>
      </div>
    </div>

    <!-- Form -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="省份:" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="北京市" value="shanghai"></el-option>
            <el-option label="上海市" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="城市:" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="东城区" value="shanghai"></el-option>
            <el-option label="海淀区" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="乡镇:" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="东城区" value="shanghai"></el-option>
            <el-option label="海淀区" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="门牌号:" :label-width="formLabelWidth">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>

</template>

<script>
    export default {
        name: "Address",
        data () {
            return {
                value: '',
                ridData: [{
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
        methods: {
            goTo: function () {
                alert(11);
                window.history.back();
            }
        }
    }
</script>

<style scoped>

  .model {
    height: 100%;
    width: 100%;
    /*padding-left: 10%;*/
    /*padding-right: 10%;*/
    position: relative;
    top: 0;
    padding-top: 20px;
  }

  .close-left {
    width: 10px;
    height: 10px;
    position: absolute;
    left: 10%;
  }

  h1 {
    font-size: 1.2em;
    font-family: 楷体;
    position: relative;
    margin-bottom: 40px;
  }

  .model-div-row {
    position: relative;
    margin-top: 20px;
    min-height: 70px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 50px;
    padding-bottom: 20px;
    margin-top: 50px;
    border-bottom: 1px #c8c8c8 solid;
  }

  .model-text {
    font-size: 12px;
  }

  .model-div-row-span {
    left: 0;
    font-size: 14px;
    text-align: left;
    display: inline-block;
    float: left;
  }

  .model-div-row-btn {
    width: 60px;
    height: 60px;
    border: #444444 1px solid;
    border-radius: 50%;
    position: absolute;
    right: 10%;
    margin: 0 auto;
    bottom: 30px;
  }

</style>
