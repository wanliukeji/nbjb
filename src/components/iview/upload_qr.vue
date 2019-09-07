<template>
  <div class="model">
    <Layout>
      <Header class="model-head-span">
        二维码上传
        <i class="close-left" @click="goTo">
          <svg t="1567775293857" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="1726" width="25" height="25">
            <path
              d="M683.2 958.4c-6.4 0-12.8-1.6-17.6-6.4l-414.4-416c-6.4-6.4-9.6-16-9.6-24s3.2-17.6 9.6-24l414.4-416c9.6-9.6 24-9.6 33.6 0 9.6 9.6 9.6 24 0 33.6L294.4 512l406.4 406.4c9.6 9.6 9.6 24 0 33.6-6.4 3.2-12.8 6.4-17.6 6.4z"
              fill="#ffffff" p-id="1727"></path>
          </svg>
        </i>
      </Header>

      <div class="model-center">
        <el-upload
          action="http://www.gzysxc.cn:8888/api/user/update_avatar"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
    </layout>
  </div>
</template>

<script>
    export default {
        name: "upload_qr",
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false
            };
        },
        methods: {
            route: function () {
                this.$router.push({name: 'login', query: {component_name: 'login'}});
            },
            goTo: function () {
                window.history.back();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>

<style scoped>
  .model,.ivu-layout {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #FFFFFF;
  }

  .model-head-span {
    background-color: #1C8CE9;
    height: auto;
    vertical-align: middle;
    text-align: center;
    max-width: 100%;
    margin: 0 auto;
    min-width: 100%;
    font-size: 24px;
    font-family: 楷体;
    color: #FFFFFF;
    min-height: 45px;
  }

  .close-left {
    width: 10px;
    height: 10px;
    position: absolute;
    float: left;
    left: 10px;
    vertical-align: middle;
    margin-top: 19px;
  }
  .model-center {
    margin: 0 auto;
    margin-top: 50px;
  }
  .el-icon-plus {
    margin-top: 37%;
  }
</style>
