<template>
  <div class="model">
    <div class="dial-header" style="margin: 0 auto;">
             
      <el-dialog title="请选择适配器" :visible.sync="showFlag"
                 style="width:100%; min-width: 1200px;">
                 
        <div style="text-align: center; width: 100%; height: auto;">

          <table>
            <tr>
              <td class="td-name">姓名：</td>
              <td class="td-input"><input type="text" class="input" v-model="info.name"></td>
            </tr>
            <tr>
              <td class="td-name">职业：</td>
              <td class="td-input"><input type="text" class="input" v-model="info.job"></td>
            </tr>
            <tr>
              <td class="td-name">住址：</td>
              <td class="td-input"><input type="text" class="input" v-model="info.address"></td>
            </tr>
          </table>
                     
          <div style="padding-top:20px;text-align: right;">
                         
            <el-button type="text" size="small" @click="showFlag = false">取消</el-button>
                         
            <el-button type="primary" size="small" @click="radioEvent()">确定</el-button>
                       
          </div>
                 
        </div>
               
      </el-dialog>
      <el-button type="primary" @click="showFlag = true">选择</el-button>
           
    </div>
  </div>
</template>

<script>
    export default {
        props: {
            isShow: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                showFlag: false,
                radio: "",
                info : {
                    name : 'chenny',
                    job : '程序猿',
                    address : '宁波北仑区大榭'
                }
            }
        },
        methods: {
            show() {

            },
            radioEvent() {
                alert(this.info.name);
                this.showFlag = false;
                this.adapterSelected = this.radio;
            }
        }
    }
</script>
<style scoped>

  .model {
    width: 100%;
    height: 300px;
    background: #FFFFFF;
    margin-bottom: 20px;
  }

  .dial-header, el-dialog {
  }

  .input {
    width: 90%;
    height: 35px;
    text-align: left;
    font-size: 24px;
  }

  table {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .td-name {
    text-align: right;
  }

  tr {
    margin-top: 20px;
    padding-top: 10px;
  }

  .td-input {
    text-align: left;
  }

</style>

