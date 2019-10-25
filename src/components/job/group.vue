<template>
  <div class="model">
    <div class="model-row">
      <p style="padding: 5px 0px 10px; color: #727272;">当前位置:
        <span class="model-row-p-span" @click="goTo('index')">阿拉招聘</span>&nbsp;>&nbsp;<span class="model-row-p-span" @click="goTo('group')">计算机/互联网/通信</span>
      </p>
    </div>
    <div class="model-row">
      <div class="model-row-left">
        <div class="model-row-left-top">
          <p class="body-title">筛选条件</p>
        </div>
        <div class="model-row-left-body">
          <dl class="open">
            <dt class="model-row-left-nav">
              <a href="javascript:;" class="open-title">职位性质
                <i class="open-title-right">
                  <svg t="1571111429872" class="icon open-title-up" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="1813" width="17" height="17">
                    <path d="M876.8 377.6l-96-89.6L512 556.8 243.2 288 147.2 377.6 512 736z" fill="#999999"
                          p-id="1814"></path>
                  </svg>
                </i>
              </a>
            </dt>
            <dd class="display-block">
              <span class="model-row-left-span left-selected">不限</span>
              <span class="model-row-left-span">全职</span>
              <span class="model-row-left-span">兼职</span>
              <span class="model-row-left-span">临时</span>
              <span class="model-row-left-span">实习</span>
            </dd>
          </dl>
          <dl class="open">
            <dt class="model-row-left-nav">
              <a href="javascript:;" class="open-title">工作经验
                <i class="open-title-right">
                  <svg t="1571111429872" class="icon open-title-up" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="1813" width="17" height="17">
                    <path d="M876.8 377.6l-96-89.6L512 556.8 243.2 288 147.2 377.6 512 736z" fill="#999999"
                          p-id="1814"></path>
                  </svg>
                </i>
              </a>
            </dt>
            <dd style="display: block;">
              <span class="model-row-left-span left-selected">不限</span>
              <span class="model-row-left-span">一年以内</span>
              <span class="model-row-left-span">1-2年</span>
              <span class="model-row-left-span">3-5年</span>
              <span class="model-row-left-span">6-7年</span>
              <span class="model-row-left-span">8-10年</span>
            </dd>
          </dl>
          <dl class="open">
            <dt class="model-row-left-nav">
              <a href="javascript:;" class="open-title">学历要求
                <i class="open-title-right">
                  <svg t="1571111429872" class="icon open-title-up" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="1813" width="17" height="17">
                    <path d="M876.8 377.6l-96-89.6L512 556.8 243.2 288 147.2 377.6 512 736z" fill="#999999"
                          p-id="1814"></path>
                  </svg>
                </i>
              </a>
            </dt>
            <dd style="display: block;">
              <span class="model-row-left-span left-selected">不限</span>
              <span class="model-row-left-span">高中以下</span>
              <span class="model-row-left-span">中专/职高</span>
              <span class="model-row-left-span">大专</span>
              <span class="model-row-left-span"  >本科</span>
              <span class="model-row-left-span">硕士</span>
              <span class="model-row-left-span">研究生</span>
            </dd>
          </dl>
          <dl class="open">
            <dt class="model-row-left-nav">
              <a href="javascript:;" class="open-title">薪资范围
                <i class="open-title-right">
                  <svg t="1571111429872" class="icon open-title-up" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="1813" width="17" height="17">
                    <path d="M876.8 377.6l-96-89.6L512 556.8 243.2 288 147.2 377.6 512 736z" fill="#999999"
                          p-id="1814"></path>
                  </svg>
                </i>
              </a>
            </dt>
            <dd style="display: block;">
              <span class="model-row-left-span left-selected">不限</span>
              <span class="model-row-left-span">面议</span>
              <span class="model-row-left-span">1000以下</span>
              <span class="model-row-left-span">1000~3999</span>
              <span class="model-row-left-span">4000~6999</span>
              <span class="model-row-left-span">6000~8999</span>
              <span class="model-row-left-span">8000以上</span>
            </dd>
          </dl>
        </div>
      </div>
      <div class="model-row-right">
        <div class="model-row-right-top">
          <div class="model-row-right-top-span">
            <a class="model-row-right-top-span-a">
              {{addr}}
              <span class="open-title-right">
                <svg t="1571111429872" style="margin-top: 6px;" class="icon open-title-up" viewBox="0 0 1024 1024"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1813" width="15" height="15">
                  <path d="M876.8 377.6l-96-89.6L512 556.8 243.2 288 147.2 377.6 512 736z" fill="#999999"
                        p-id="1814"></path>
                </svg>
              </span>
              <div class="model-row-right-top-span-hidden">
                <span class="model-row-right-top-span-hidden-a" @click="getAddr('不限')">不限</span>
                <span class="model-row-right-top-span-hidden-a" @click="getAddr('北仑区')">北仑区</span>
                <span class="model-row-right-top-span-hidden-a" @click="getAddr('镇海区')">镇海区</span>
                <span class="model-row-right-top-span-hidden-a" @click="getAddr('江北区')">江北区</span>
                <span class="model-row-right-top-span-hidden-a" @click="getAddr('江东区')">江东区</span>
                <span class="model-row-right-top-span-hidden-a" @click="getAddr('高新区')">高新区</span>
                <span class="model-row-right-top-span-hidden-a" @click="getAddr('海曙区')">海曙区</span>
                <span class="model-row-right-top-span-hidden-a" @click="getAddr('鄞州区')">鄞州区</span>
                <span class="model-row-right-top-span-hidden-a" @click="getAddr('象山区')">象山区</span>
                <span class="model-row-right-top-span-hidden-a" @click="getAddr('宁海区')">宁海区</span>
                <span class="model-row-right-top-span-hidden-a" @click="getAddr('余姚区')">余姚区</span>
              </div>
            </a>
            <a class="model-row-right-top-span-a">
              {{field}}
              <span class="open-title-right">
                <svg t="1571111429872" style="margin-top: 6px;" class="icon open-title-up" viewBox="0 0 1024 1024"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1813" width="15" height="15">
                  <path d="M876.8 377.6l-96-89.6L512 556.8 243.2 288 147.2 377.6 512 736z" fill="#999999"
                        p-id="1814"></path>
                </svg>
              </span>
              <div class="model-row-right-top-span-hidden">
                <span class="model-row-right-top-span-hidden-a" @click="getFied('不限')">不限</span>
                <span class="model-row-right-top-span-hidden-a">
                  计算机软件/互联网/通信
                  <svg t="1571298197868" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="536" width="21" height="21"><path
                    d="M213.333333 341.333333h597.333334l-298.666667 384z" p-id="537" fill="#dbdbdb"></path></svg>
                  <div class="model-row-right-top-span-hidden-ul">
                      <a class="model-row-right-top-span-hidden-ul-a" @click="getFied('计算机软件')">计算机软件</a>
                      <a class="model-row-right-top-span-hidden-ul-a" @click="getFied('计算机硬件')">计算机硬件</a>
                      <a class="model-row-right-top-span-hidden-ul-a" @click="getFied('计算机服务')">计算机服务</a>
                      <a class="model-row-right-top-span-hidden-ul-a" @click="getFied('网络通信')">网络通信</a>
                      <a class="model-row-right-top-span-hidden-ul-a" @click="getFied('宽带安装')">宽带安装</a>
                      <a class="model-row-right-top-span-hidden-ul-a" @click="getFied('路由安装')">路由安装</a>
                      <a class="model-row-right-top-span-hidden-ul-a" @click="getFied('服务器部署')">服务器部署</a>
                      <a class="model-row-right-top-span-hidden-ul-a" @click="getFied('软件测试')">软件测试</a>
                      <a class="model-row-right-top-span-hidden-ul-a" @click="getFied('计算机软件')">计算机软件</a>
                      <a class="model-row-right-top-span-hidden-ul-a" @click="getFied('计算机硬件')">计算机硬件</a>
                      <a class="model-row-right-top-span-hidden-ul-a" @click="getFied('计算机服务')">计算机服务</a>
                      <a class="model-row-right-top-span-hidden-ul-a" @click="getFied('网络通信')">网络通信</a>
                      <a class="model-row-right-top-span-hidden-ul-a" @click="getFied('宽带安装')">宽带安装</a>
                      <a class="model-row-right-top-span-hidden-ul-a" @click="getFied('路由安装')">路由安装</a>
                      <a class="model-row-right-top-span-hidden-ul-a" @click="getFied('服务器部署')">服务器部署</a>
                      <a class="model-row-right-top-span-hidden-ul-a" @click="getFied('软件测试')">软件测试</a>
                  </div>
                </span>
                <span class="model-row-right-top-span-hidden-a" @click="getFied('会计/金融/银行/保险')">会计/金融/银行/保险</span>
                <span class="model-row-right-top-span-hidden-a" @click="getFied('贸易/消费/制造/营运')">贸易/消费/制造/营运</span>
                <span class="model-row-right-top-span-hidden-a" @click="getFied('制药/医疗')">制药/医疗</span>
                <span class="model-row-right-top-span-hidden-a" @click="getFied('广告/传媒')">广告/传媒</span>
              </div>
            </a>
            <a class="model-row-right-top-span-a" id="job-type" @click="centerDialogVisible = true">
              {{jobType}}
              <span class="open-title-right">
                <svg t="1571111429872" style="margin-top: 6px;" class="icon open-title-up" viewBox="0 0 1024 1024"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1813" width="15" height="15">
                  <path d="M876.8 377.6l-96-89.6L512 556.8 243.2 288 147.2 377.6 512 736z" fill="#999999"
                        p-id="1814"></path>
                </svg>
              </span>
            </a>
            <a class="model-row-right-top-span-a">
              {{nature}}
              <span class="open-title-right">
                <svg t="1571111429872" style="margin-top: 6px;" class="icon open-title-up" viewBox="0 0 1024 1024"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1813" width="15" height="15">
                  <path d="M876.8 377.6l-96-89.6L512 556.8 243.2 288 147.2 377.6 512 736z" fill="#999999"
                        p-id="1814"></path>
                </svg>
              </span>
              <div class="model-row-right-top-span-hidden">
                <span class="model-row-right-top-span-hidden-a" @click="getNature('不限')">不限</span>
                <span class="model-row-right-top-span-hidden-a" @click="getNature('外商独资')">外商独资</span>
                <span class="model-row-right-top-span-hidden-a" @click="getNature('中外合营')">中外合营</span>
                <span class="model-row-right-top-span-hidden-a" @click="getNature('股份制企业')">股份制企业</span>
                <span class="model-row-right-top-span-hidden-a" @click="getNature('上市公司')">上市公司</span>
                <span class="model-row-right-top-span-hidden-a" @click="getNature('国有企业')">国有企业</span>
                <span class="model-row-right-top-span-hidden-a" @click="getNature('私营企业')">私营企业</span>
              </div>
            </a>
            <a class="model-row-right-top-span-a">
              {{scale}}
              <span class="open-title-right">
                <svg t="1571111429872" style="margin-top: 6px;" class="icon open-title-up" viewBox="0 0 1024 1024"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1813" width="15" height="15">
                  <path d="M876.8 377.6l-96-89.6L512 556.8 243.2 288 147.2 377.6 512 736z" fill="#999999"
                        p-id="1814"></path>
                </svg>
              </span>
              <div class="model-row-right-top-span-hidden">
                <span class="model-row-right-top-span-hidden-a" @click="getScale('不限')">不限</span>
                <span class="model-row-right-top-span-hidden-a" @click="getScale('1~49')">1~49人</span>
                <span class="model-row-right-top-span-hidden-a" @click="getScale('50~99')">50~99人</span>
                <span class="model-row-right-top-span-hidden-a" @click="getScale('100~499')">100~499人</span>
                <span class="model-row-right-top-span-hidden-a" @click="getScale('500')">500人以上</span>
              </div>
            </a>
          </div>
          <div class="model-row-right-top-right">
            <a class="model-row-right-top-right-span">默认</a>
            <svg t="1571188338878" class="icon model-row-right-top-right-span-svg" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1258" width="17" height="17">
              <path
                d="M531.185456 943.532317c0 8.899694-6.493901 16.114003-14.503319 16.114003l-9.364275 0c-8.010441 0-14.504342-7.214309-14.504342-16.114003L492.81352 80.46666c0-8.898671 6.493901-16.114003 14.504342-16.114003l9.364275 0c8.009418 0 14.503319 7.215332 14.503319 16.114003L531.185456 943.532317z"
                p-id="1259" fill="#9297a0"></path>
            </svg>
            <a class="model-row-right-top-right-span">时间</a>
            <svg t="1571188566789" class="icon model-row-right-top-right-span-svg" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="2049" width="16" height="16">
              <path
                d="M64 482.6h277.7V93.4h340.6v389.3H960l-448 448L64 482.6zM390.4 142v389.3H181.5L512 861.8l330.5-330.5H633.6V142H390.4z"
                fill="#f8ac59" p-id="2050"></path>
            </svg>
          </div>
        </div>
        <div class="model-row-right-head">
          <a class="selectAll" id="checkAll" style="margin-left: 23px;">
            <input type="checkbox" id="全选" class="gcs-checkbox selectedAll">
            <label for="全选"></label>
            <span style="display: inline-block; margin-bottom: 5px;">全选</span>
          </a>
          <a class="selectAll">
            <button class="selectAll-btn-1">应聘</button>
          </a>
          <a class="selectAll">
            <button class="selectAll-btn-2">收藏</button>
          </a>
          <a class="selectAll">
              <span class="selectAll-a">
                目前有 <span style="color: red;">3000</span> 个岗位任你挑选</span>
          </a>
          <div class="seach-div">
            <input type="text" style=" float: left;" class="seach-text" placeholder="请输入关键字进行搜索"/>
            <button class="seach-btn-div" style="float: left; margin-top: 1px;">搜索</button>
          </div>
        </div>
        <ul class="joblist">
          <li class="job-info" v-for="i in [1,2,3,4,5]">
            <div class="job-info-top">
              <p>
                <span class="job-info-btn">
                <input type="checkbox" id="1" class="gcs-checkbox checkbox-item">
                <label for="1" class="checkbox-label"></label>
              </span>
                <a class="job-info-top-name" @click="goTo('info')">智能家居云平台高级/资深</a>
                <i class="job-info-top-name-right" style="float: left; padding: 2px;">兼职</i>
              </p>
            </div>
            <div class="job-info-body">
              <div class="job-info-title">
                <a class="job-info-title-span">太极云软</a>
                <a class="job-info-title-span">北仑</a>
                <a class="job-info-title-span">大碶</a>
                <a class="job-info-title-span">本科</a>
                <a class="job-info-title-span">6-7年</a>
                <a class="job-info-title-span price">8000~9000</a>
                <a class="job-info-title-span">2019-10-10发布</a>
              </div>
              <div class="text">
                <p class="text-p height-fs">
                  岗位职责：
                  1. 按照产品经理的需求，能完成新功能的相关文档的设计;
                  2. 高质量的完成软件系统代码的实现，编写代码注释和开发文档;
                  3. 完成软件代码的单元测试、功能测试和自动化测试;
                  4. 分析并解决软件开发过程中的问题，能够进行快速的软件bug定位并且及时修复;
                  1. 按照产品经理的需求，能完成新功能的相关文档的设计;
                  2. 高质量的完成软件系统代码的实现，编写代码注释和开发文档;
                  3. 完成软件代码的单元测试、功能测试和自动化测试;
                  4. 分析并解决软件开发过程中的问题，能够进行快速的软件bug定位并且及时修复;
                  1. 按照产品经理的需求，能完成新功能的相关文档的设计;
                  2. 高质量的完成软件系统代码的实现，编写代码注释和开发文档;
                  3. 完成软件代码的单元测试、功能测试和自动化测试;
                  4. 分析并解决软件开发过程中的问题，能够进行快速的软件bug定位并且及时修复;
                </p>
              </div>
              <p class="job-info-bottom">
                <a    class="job-info-bottom-a">投递</a>
                <a    class="job-info-bottom-a">收藏</a>
              </p>
            </div>
          </li>
        </ul>
        <div class="my-page">
          <span class="page-btn">上一页</span>
          <span class="page-num">1</span>
          <span class="page-num">2</span>
          <span class="page-num">3</span>
          <span class="page-num">4</span>
          <span class="page-btn">下一页</span>
        </div>
      </div>
    </div>
    <el-dialog style="min-width: 790px;"
               title="请选择职业"
               :visible.sync="centerDialogVisible"
               width="50%"
               center>
      <div class="model-alert-body" style="min-width: 790px;">
        <dl class="model-alert-body-dl">
          <dt style="text-align: left;">
            计算机/互联网/通信/电子
          </dt>
          <dd class="model-alert-body-dl-dd">
            <div class="model-alert-body-dl-dd-div" @click="getModelJobType">
              计算机软件
              <svg t="1571298197868" class="icon model-alert-body-dl-dd-div-svg" viewBox="0 0 1024 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="536" width="21" height="21">
                <path
                  d="M213.333333 341.333333h597.333334l-298.666667 384z" p-id="537" fill="#dbdbdb"></path>
              </svg>
            </div>
            <div class="model-alert-body-dl-dd-div" @click="getModelJobType">
              计算机硬件
              <svg t="1571298197868" class="icon model-alert-body-dl-dd-div-svg" viewBox="0 0 1024 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="536" width="21" height="21">
                <path
                  d="M213.333333 341.333333h597.333334l-298.666667 384z" p-id="537" fill="#dbdbdb"></path>
              </svg>
            </div>
            <div class="model-alert-body-dl-dd-div" @click="getModelJobType">
              IT维护
              <svg t="1571298197868" class="icon model-alert-body-dl-dd-div-svg" viewBox="0 0 1024 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="536" width="21" height="21">
                <path
                  d="M213.333333 341.333333h597.333334l-298.666667 384z" p-id="537" fill="#dbdbdb"></path>
              </svg>
            </div>
            <ul class="model-alert-body-dl-ul display-none" style="line-height: 17px;">
              <li class="model-alert-body-dl-ul-li" @click="getJobType('初级工程师')">初级工程师</li>
              <li class="model-alert-body-dl-ul-li" @click="getJobType('中级工程师')">中级工程师</li>
              <li class="model-alert-body-dl-ul-li" @click="getJobType('高级工程师')">高级工程师</li>
            </ul>
          </dd>
        </dl>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="getJobType('不限')"
               style="right: 0; margin-right: 0px; width: 130px; position: relative;">不限</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "group",
        watch: {},
        data() {
            return {
                addr: '工作地点',
                field: '行业领域',
                jobType: '职业类型',
                nature: '公司性质',
                scale: '公司规模',
                centerDialogVisible: false
            };
        },
        methods: {
            getAddr: function (val) {
                if (val == '不限') {
                    this.addr = '工作地点';
                } else {
                    this.addr = this.subVal(val);
                    ;
                }
            },
            getFied(val) {
                if (val == '不限') {
                    this.field = '行业领域';
                } else {
                    this.field = this.subVal(val);
                }
            },
            getNature(val) {
                if (val == '不限') {
                    this.nature = '公司性质';
                } else {
                    this.nature = this.subVal(val);
                }
            },
            getScale(val) {
                if (val == '不限') {
                    this.scale = '公司规模';
                } else {
                    this.scale = this.subVal(val);
                    ;
                }
            }
            ,
            subVal(val) {
                return val.substring(0, 4) + '..';
            },
            getJobType(val) {
                if (val == '不限') {
                    this.jobType = '职业类型';
                    this.centerDialogVisible = false;
                } else {
                    this.jobType = this.subVal(val);
                    this.centerDialogVisible = false;
                }
            },
            getModelJobType(event) {
                var $this = event.target;
                var svg = $($this).children();
                let ul = $($this).siblings('.model-alert-body-dl-ul');
                $(ul).toggle(200);
                if ($(svg).hasClass("icon-up")) {
                    $(svg).removeClass("icon-up").addClass("icon-down");
                } else {
                    $(svg).removeClass("icon-down").addClass("icon-up");
                }
            },
            goTo(name){
                this.$router.push({name:name});
            }
        }
    }

    $(function () {
        $('.model-row-left-nav').bind('click', function () {
            let dom = $(this).next().toggle(1000);
            let child = $(this).children().children();
            if ($(child).hasClass("open-title-up")) {
                $(child).removeClass("open-title-up").addClass("open-title-down");
            } else {
                $(child).removeClass("open-title-down").addClass("open-title-up");
            }

        });

        $('.text').click(function () {
            var childen = $(this).children('.text-p');
            if ($(childen).hasClass("height-fs")) {
                $(childen).removeClass("height-fs").addClass('height-auto');
            } else {
                $(childen).addClass("height-fs").removeClass('height-auto');
            }
        });

        $('.selectedAll').click(function (e) {
            $('.checkbox-label').click();
            document.getElementsByClassName('checkbox-label').onclick;
        });

        $('.qrc').click(function () {
            let childen = $(this).children();
            $(childen).show(500);
        })


        $('.model-row-right-top-span-a').click(function () {
            var childen = $(this).children('.model-row-right-top-span-hidden');
            $(childen).show(200);
            var subs = $(this).siblings();
            $(subs).children('.model-row-right-top-span-hidden').hide(200);
        });

        document.onclick = function (e) {
            if (e.target._prevClass != 'model-row-right-top-span-a' && e.target._prevClass != 'model-row-right-top-span-hidden-a') {
                $('.model-row-right-top-span-hidden').hide(200);
            }
        };

        document.onclick = function (e) {
            if (e.target._prevClass != 'qrc' && e.target._prevClass != 'hidden-qrc') {
                $('.hidden-qrc').hide(200);
            }
        };

        $('.model-row-right-top-span-hidden-a').click(function () {
            var childen = $(this).children('.model-row-right-top-span-hidden-ul');
            var svg = $(this).children('.icon');
            $(childen).toggle(200);
            if ($(svg).hasClass("icon-up")) {
                $(svg).removeClass("icon-up").addClass("icon-down");
            } else {
                $(svg).removeClass("icon-down").addClass("icon-up");
            }
        });

        $('.model-alert-body-dl-dd-div').click(function () {
            var childen = $(this).first('model-alert-body-dl-ul');
        });

        $('.model-row-right-top-right-span').click(function () {
            var svg = $(this).siblings('.model-row-right-top-right-span-svg');
            if ($(svg[1]).hasClass("icon-up")) {
                $(svg[1]).removeClass("icon-up").addClass("icon-down");
            } else {
                $(svg[1]).removeClass("icon-down").addClass("icon-up");
            }
        });

        $('.model-row-left-span').click(function () {
            $(this).addClass('left-selected');
            $(this).siblings().removeClass('left-selected');
        });
    })
</script>

<style scoped>
  .model {
    width: 100%;
    height: auto;
  }

  .model-row {
    width: 80%;
    height: auto;
    position: relative;
    top: 10px;
    min-width: 1200px;
    margin: 0 auto;
    position: relative;
    padding: 0 auto;
    margin: 0px auto;
    vertical-align: top;
    white-space: nowrap;
  }

  .model-row-left {
    min-width: 198px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    width: 18%;
    min-height: 500px;
    height: auto;
    display: inline-block;
    margin-right: 5px;
  }

  .model-row-left-top {
    margin: 0px 0px -10px;
    position: relative;
    line-height: 25px;
    margin-top: 20px;
    font-size: 16px;
    color: #333;
  }

  .model-row-left-body {
    margin: 0 auto;
    font: 12px/1.5 "Microsoft Yahei", "Hiragino Sans GB", "STHeiti", "\5B8B\4F53", sans-serif, tahoma, arial;
    display: block;
    font-size: 14px;
    color: #333;
    background: #fff;
    -webkit-font-smoothing: antialiased;
    padding: 15px;
    font-size: 14px;
    height: auto;
    width: 100%;
    margin-bottom: 10px;
  }

  .dd-frist {
    color: #f60;
    position: relative;
    display: block;
  }

  .model-row-left-span {
    font-size: 16px;
    font-family: microsoft yahei;
    color: #9297a0;
    position: relative;
    display: block;
    line-height: 26px;
    padding: 5px;
    display: block;;
  }

  .left-selected {
    color: #f60;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    font-family: microsoft yahei;
    color: #9297a0;
    position: relative;
    display: block;
    line-height: 26px;
    padding: 5px;
    display: block;
  }

  a:hover {
    cursor: pointer;
    color: #333333;
  }

  .model-row-left-span:hover {
    cursor: pointer;
    color: #f60;
  }

  .open {
    margin-bottom: 10px;
  }

  .open-title {
    position: relative;
    display: block;
    line-height: 26px;
    text-align: left;
    color: #4d4d4d;
    font-size: 16px;
    font-family: microsoft yahei;
  }

  .open-title-up {
    float: right;
    vertical-align: middle;
    position: relative;
    margin-top: 2px;
  }

  .open-title-down {
    float: right;
    vertical-align: middle;
    position: relative;
    margin-top: 5px;
    transform: rotate(180deg);
    -ms-transform: rotate(180deg); /* IE 9 */
    -moz-transform: rotate(180deg); /* Firefox */
    -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
    -o-transform: rotate(180deg);
  }

  .icon-up {
    transform: rotate(0deg);
    -ms-transform: rotate(0deg); /* IE 9 */
    -moz-transform: rotate(0deg); /* Firefox */
    -webkit-transform: rotate(0deg); /* Safari 和 Chrome */
    -o-transform: rotate(0deg);
  }

  .icon-down {
    transform: rotate(180deg);
    -ms-transform: rotate(180deg); /* IE 9 */
    -moz-transform: rotate(180deg); /* Firefox */
    -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
    -o-transform: rotate(180deg);
  }

  dl {
    /*display: block;*/
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .body-title {
    padding-left: 15px;
    line-height: 1;
    border-left: 5px solid #e76320;
    font-size: 18px;
    color: #333;
  }

  .model-row-right {
    width: 80.7%;
    margin-left: 5px;
    min-width: 980px;
    min-height: 600px;
    display: inline-block;
    vertical-align: top;
  }

  .model-row-right-top {
    width: 100%;
    min-height: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    background-color: #FFFFFF;
    border: 1px solid #ddd;
    z-index: 100;
  }

  .model-row-right-top-right {
    position: relative;
    float: right;
    display: block;
    min-width: 20%;
    height: 100%;
    min-height: 50px;
  }

  .model-row-right-top-right-span {
    padding: 10px;
    width: auto;
    display: inline-block;
    margin: 0 auto;
    float: right;
    color: #9297a0;
  }

  .model-row-right-top-right-span-svg {
    position: relative;
    display: inline-block;
    float: right;
    vertical-align: middle;
    top: 16px;
  }

  .model-row-right-top-span {
    min-width: 50%;
    height: 50px;
    position: relative;
    float: left;
    margin: 0 auto;
  }

  .model-row-right-top-span-a {
    height: 100%;
    position: relative;
    display: inline-block;
    min-width: 130px;
    text-align: center;
    vertical-align: middle;
    padding-top: 10px;
    color: #666666;
    margin: 0 auto;
    padding-left: 0px;
    word-break: break-all;
    word-wrap: break-word;
  }

  .open-title-right {
    position: relative;
    display: inline-block;
    float: right;
  }

  .model-row-right-top-span-hidden {
    position: absolute;
    min-width: 130px;
    height: auto;
    padding: 8px;
    background-color: #FFFFFF;
    margin-top: 11px;
    margin-left: 0px;
    z-index: 10;
    cursor: default;
    border: 1px solid #ddd;
    box-shadow: 0 10px 25px rgba(0, 0, 0, .3);
    display: none;
    word-break: break-all;
    word-wrap: break-word;
  }

  .model-row-right-top-span-hidden-a {
    display: block;
    font-size: 16px;
    color: #6f6f6f;
    margin: 0px;
    padding: 5px;
    text-align: left;
    word-break: break-all;
    word-wrap: break-word;
  }

  .model-row-right-top-span-hidden-a:hover {
    cursor: pointer;
    color: black;
  }

  .model-row-right-top-span-hidden-ul {
    height: auto;
    padding-left: 0;
    display: none;
    word-break: break-all;
    word-wrap: break-word;
  }

  .model-row-right-top-span-hidden-ul-a {
    margin: 0 auto;
    display: block;
    padding: 5px;
    font-size: 14px;
    width: auto;
    word-break: break-all;
    word-wrap: break-word;
  }


  .model-row-right-top-span-hidden-ul-a:hover {
    cursor: pointer;
    color: #eb6324;
    background: #F2F2F2;
  }

  .model-row-right-head {
    width: 100%;
    min-width: 980px;
    background-color: #f2f2f2;
    height: 56px;
    margin: 0 auto;
    padding: 0 auto;
    font-size: 14px;
    clear: both;
    position: relative;
  }

  .selectAll {
    position: relative;
    width: auto;
    height: 100%;
    min-height: 56px;
    vertical-align: middle;
    margin: 0 auto;
    padding: 0px auto;
    display: inline-block;
    padding-top: 13px;
  }

  .seach-div {
    width: auto;
    height: 56px;
    position: relative;
    float: right;
    margin: 0 auto;
    padding: 12px 12px;
  }

  .seach-text {
    width: 265px;
    padding: 5px 10px;
    color: #666;
    border: 1px solid #ededed;
    display: inline-block;
  }

  .selectAll-btn-1, .selectAll-btn-2, .seach-btn-div {
    display: block;
    background-color: #1C8CE9;
    color: #FFFFFF;
    padding: 3px;
    border: none;
    font-size: 13px;
    width: 4em;
    position: relative;
    margin: 0 auto;
    vertical-align: middle;
    border-radius: 3px;
  }

  .selectAll-btn-1:hover {
    background-color: #1481dc;
  }

  .selectAll-btn-2 {
    background-color: #f8ac59;
  }

  .selectAll-btn-2:hover {
    background-color: #ec9d47;
  }

  .model-row-p-span:hover {
    cursor: pointer;
    color: #0a6beb;
  }
  .seach-btn-div {
    display: inline-block;
    height: 28px;
    padding: 3px;
    border-radius: 2px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    width: 60px;
    border: none;
    margin-top: -3.5px;
  }

  .seach-btn-div:hover {
    background-color: #1481dc;
  }

  .selectAll-a {
    line-height: 30px;
    margin: 0 10px 10px;
    font-size: 16px;
    color: #b2b2b2;
    text-align: center;
  }

  .selectAll-all {
    padding: 0 auto;
    margin: 0 auto;
  }

  .selectAll-span {
    color: #555555;
    font-size: 17px;
  }

  .selectAll-span:hover {
    cursor: pointer;
  }

  #selectAll {
    color: #6f42c1;
  }

  .joblist {
    width: 100%;
    min-height: 120px;
    position: relative;
    margin: 0 auto;
    padding: 0 auto;
  }

  .job-info {
    min-height: 175px;
    height: auto;
    min-width: 950px;
    width: 100%;
    position: relative;
    background-color: #FFFFFF;
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    margin-top: 15px;
    border: 1px solid #e8e8e8;
    cursor: pointer;
  }

  .job-info-top {
    margin: 20px 20px -10px;
    overflow: hidden;
    width: 100%;
  }

  .job-info-btn {
    position: relative;
    display: inline-block;
    margin-left: 7px;
    float: left;
    padding-top: 3px;
  }

  .job-info-top-name {
    font-size: 15px;
    color: #1C8CE9;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: auto;
    display: inline-block;
  }

  .job-info-top-name-right {
    cursor: default;
    margin: 8px 0px 0px 3px;
    background-color: #f8ac59;;
    padding: 2px;
    border: none;
    color: #fff;
    font-size: 8px;
    display: inline-block;
    position: absolute;
  }

  .job-info-body {
    width: 100%;
    height: 60%;
    margin-top: 0px;
    padding-bottom: 20px;
    padding-left: 21px;
  }

  .job-info-title {
    margin-bottom: -15px;
    position: relative;
  }

  .job-info-title-span {
    color: #333333;
    display: inline-block;
  }

  .job-info-bottom {
    position: relative;
    margin-bottom: 0px;
    bottom: 0px;
    padding-left: 3px;
  }

  .job-info-bottom-a {
    font-size: 15px;
    padding: 3px;
    display: inline-block;
    color: #1C8CE9;
  }

  .text {
    /*white-space: normal;*/
    color: #999;
    cursor: pointer;
    margin-left: 8px;
    margin-right: 20px;
    overflow: hidden;
    padding-bottom: 5px;
    padding: 0 auto;
  }

  .webkit-line {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .text-p {
    line-height: 25px;
    margin-top: 10px;
  }

  .text-p {
    font-size: 14px;
    overflow: hidden;
    /*line-height: 28px;*/
    position: relative;
    white-space: normal;
    cursor: pointer;
    margin-left: 0px;
    margin-right: 20px;
    overflow: hidden;
    padding-bottom: 5px;
  }

  .text-p:after {
    content: '...';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10%;
    height: 1.8em;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
  }

  .price {
    color: red;
  }

  .hidden-qrc {
    width: 90px;
    height: 90px;
    border: #d9d9d9 0.5px solid;
    position: absolute;
    margin-top: -110px;
    border: 0.5px #d9d9d9 solid;
  }

  .hidden-qrc > img {
    margin: 5px 5px;
  }

  .page {
    margin-top: 20px;
    text-align: center;
  }

  .gcs-checkbox + label {
    background-color: white;
    border-radius: 0px;
    border: 1px solid #d3d3d3;
    width: 20px;
    height: 20px;
    display: inline-block;
    text-align: center;
    vertical-align: bottom;
    line-height: 20px;
    margin-top: 5px;
  }

  .gcs-checkbox {
    display: none;
  }

  .gcs-checkbox + label:hover {
    cursor: pointer;
    border: 1px solid #2783FB;
  }

  .gcs-checkbox:checked + label {
    background-color: #eee;
    background: #2783FB;
  }

  .gcs-checkbox:checked + label:after {
    content: "\2714";
    color: white;
  }

  .checkbox-label {
    margin-left: 0px;
    margin-bottom: 13px;
  }

  .height-fs {
    height: 54px;
  }

  .height-auto {
    height: auto;
  }

  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }

  .my-page {
    width: 100%;
    height: auto;
    margin-top: 15px;
    text-align: center;
    vertical-align: middle;
    padding: 0 auto;
  }

  .page-btn {
    background-color: #1C8CE9;
    border: none;
    color: #FFFFFF;
    padding: 5px 7px;
  }

  .page-btn:hover {
    cursor: pointer;
    background-color: #297ef0;
  }

  .page-num {
    padding: 8px;
    color: #686868;
  }

  .page-num:hover {
    cursor: pointer;
    color: #1a1a1a;
  }

  .border {
    border: black 1px solid;
  }

  .model-alert-body {
    border-top: 0.5px #e2e2e2 solid;
    width: 100%;
    min-height: 100px;
    margin-top: -20px;
    height: auto;
  }

  .model-alert-body-dl {
    line-height: 30px;
    margin: 0 auto;
    position: relative;
    padding: 0 auto;
    padding: 10px;
    border-bottom: 0.5px #F2F2F2 solid;
  }

  .model-alert-body-dl-dd-div {
    display: inline-block;
    width: 32.5%;
    min-width: 233px;
    text-align: left;
    padding-left: 10px;
    height: auto;
    margin: 0 auto;
  }

  .model-alert-body-dl-dd-div:hover {
    cursor: pointer;
    color: black;
  }

  .model-alert-body-dl-dd-div-svg {
    float: right;
    margin-top: 10px;
    margin-right: 30px;
  }

  .model-alert-body-dl-ul {
    margin: 0 auto;
    padding-left: 12px;
  }

  .model-alert-body-dl-ul-li {
    width: 33%;
    display: inline-block;
    margin: 0 auto;
    padding: 0 auto;
    font-size: 12px;
    color: #9d9d9d;
    text-align: left;
    line-height: 30px;
  }


  .model-alert-body-dl-ul-li:hover {
    cursor: pointer;
    color: #0a6beb;
  }

</style>
