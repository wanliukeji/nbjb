<template>
  <div class="model">
    <div class="model-row">
      <p style="padding: 5px 0px 10px; color: #727272;">当前位置:
        <span class="model-row-p-span" @click="goTo('index')">阿拉招聘</span>&nbsp;>&nbsp;<span class="model-row-p-span"
                                                                                            @click="goTo('group')">计算机/互联网/通信</span>
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
              <a href="javascript:;" class="open-title">公司性质
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
              <span class="model-row-left-span">外商独资,外企办事处</span>
              <span class="model-row-left-span">中外合营(合资,合作)</span>
              <span class="model-row-left-span">股份制企业</span>
              <span class="model-row-left-span">国内上市公司</span>
              <span class="model-row-left-span">私营,民营企业</span>
              <span class="model-row-left-span">国有企业</span>
              <span class="model-row-left-span">政府机关/非营利机构</span>
              <span class="model-row-left-span">事业单位</span>
              <span class="model-row-left-span">其他</span>
            </dd>
          </dl>
          <dl class="open">
            <dt class="model-row-left-nav">
              <a href="javascript:;" class="open-title">公司规模
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
              <span class="model-row-left-span">1-49人</span>
              <span class="model-row-left-span">50-99人</span>
              <span class="model-row-left-span">100-499人</span>
              <span class="model-row-left-span">500-999人</span>
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
        <ul class="joblist">
          <li class="job-info" v-for="i in [1,2,3,4,5,6]" @click="goTo('info')">
            <div class="div-left-img">
              <img class="div-left-img-info" src="/static/image/aali.jpg" data-url="/static/image/aali.jpg">
            </div>
            <div class="div-left-div">
              <p class="div-left-div-name"> 北京网络科技有限公司</p>
              <p class="div-left-div-p">
                <svg t="1571968261179" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="5629" width="16" height="16">
                  <path
                    d="M156.672 495.616h337.92V157.184h-337.92v338.432z m52.224-286.208h233.472v234.496H208.896V209.408z m-52.224 656.896h337.92V528.896h-337.92v337.408z m52.224-285.184h233.472v232.96H208.896V581.12z m320.512-423.936v337.92h337.92v-337.92h-337.92zM815.104 442.88H581.632V209.408h233.472V442.88zM867.328 640V528.896h-168.96v56.32h112.64V640z m-55.808 55.808v-55.296h-56.832v56.32h56.32v113.152h-54.272V755.2h-58.368V641.024h-56.32v56.32H586.24v-55.808h-56.832v56.32h56.32v55.808h-56.32v112.64h56.32v-112.64h56.32v112.128h56.32V811.52h57.856v54.784h111.104V695.808z m-169.472-55.296V529.408l-112.64-0.512v56.32h56.32v55.296z"
                    fill="#2C2C2C" p-id="5630"></path>
                  <path
                    d="M267.776 268.288H384v116.224H267.776z m0 371.2H384v116.224H267.776z m375.808-371.2h116.224v116.224H643.584z"
                    fill="#2C2C2C" p-id="5631"></path>
                </svg>
                <svg t="1571968302104" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="6460" width="16" height="16">
                  <path
                    d="M959.786667 148.906667l-44.330667-0.725333c-1.024 0-100.437333-2.048-203.050667-41.728-105.301333-40.789333-173.141333-87.552-173.781333-88.021333L511.872 0 485.248 18.474667C484.608 18.901333 416.768 65.706667 311.466667 106.453333 208.938667 146.218667 109.482667 148.181333 108.544 148.181333L64 148.906667l0 430.464C64 795.477333 355.328 1024 511.957333 1024 668.714667 1024 960 795.477333 960 579.370667L959.786667 148.906667zM321.877333 772.48 321.877333 355.413333 282.112 355.413333 282.112 317.482667 441.173333 317.482667l0 189.610667 200.192-189.610667 157.696 0L321.877333 772.48z"
                    p-id="6461"></path>
                </svg>
              </p>
              <p style="line-height: 35px;">
                <span class="div-left-div-span">
                  <svg t="1571967896561" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="2014" width="18" height="18"><path
                    d="M518.3 298.9c-64.2 0-116.4 52.2-116.4 116.4s52.2 116.4 116.4 116.4 116.4-52.2 116.4-116.4-52.2-116.4-116.4-116.4z m72.9 116.3c0 40.2-32.7 72.9-72.9 72.9s-72.9-32.7-72.9-72.9 32.7-72.9 72.9-72.9 72.9 32.7 72.9 72.9z"
                    fill="#666666" p-id="2015"></path><path
                    d="M518.3 145.8c-138.6 0-251.4 112.8-251.4 251.4 0 55.6 38.3 147 113.8 271.8 57.8 95.6 117.6 177.1 120.1 180.5l17.5 23.8 17.5-23.8c2.5-3.4 62.3-85 120.1-180.6 75.5-124.8 113.8-216.2 113.8-271.8 0-138.6-112.8-251.3-251.4-251.3z m208 251.4c0 42.8-31 118.6-89.8 219.4-44.2 75.9-93.6 147.9-118.2 182.8-24.6-34.9-73.9-106.9-118.2-182.8-58.7-100.7-89.8-176.6-89.8-219.4 0-114.7 93.3-207.9 207.9-207.9s208.1 93.2 208.1 207.9z"
                    fill="#666666" p-id="2016"></path></svg>
                  江苏
                </span>
                <span class="div-left-div-span">苏州</span>
                <span class="div-left-div-span">C10-8-110</span>
                <span class="div-left-div-span">New World Com</span>
              </p>
              <p><span class="div-left-div-p-name">
                <svg t="1571968138193" class="icon" viewBox="0 0 1070 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="4263" width="16" height="16"><path
                  d="M1070.545455 791.272727V0H0v791.272727h465.454545v93.090909h-139.636363v139.636364h418.909091v-139.636364h-139.636364v-93.090909zM139.636364 651.636364V139.636364h791.272727v512H139.636364z"
                  fill="#cdcdcd" p-id="4264"></path><path
                  d="M465.454545 651.636364h139.636364v139.636363h-139.636364zM465.454545 884.363636h139.636364v139.636364h-139.636364z"
                  fill="#cdcdcd" p-id="4265"></path></svg>
                计算机软件
              </span></p>
            </div>
            <div class="div-right">
              <h1 class="div-right-h1">在找职位</h1>
              <h1 class="div-right-num">0个</h1>
              <p class="div-right-msg">0条信息</p>
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
        name: "companyGroup",
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
            goTo(name) {
                this.$router.push({name: name});
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
    padding: 15px;
  }

  .div-left-img {
    width: 30%;
    vertical-align: top;
    margin: 0;
    height: 150px;
    padding: 10px;
    display: inline-block;
  }

  .div-left-img-info {
    width: 100%;
    max-height: 130px;
  }

  .div-left-div {
    width: 50%;
    vertical-align: top;
    margin: 0;
    height: 150px;
    padding: 10px;
    display: inline-block;
  }

  .div-left-div-name {
    font-size: 24px;
    color: #333;
  }

  .div-left-div-p {
    line-height: 35px;
  }

  .div-left-div-span {
    font-size: 14px;
    color: #999;
  }

  .div-left-div-p-name {
    font-size: 16px;
    color: #999;
    line-height: 36px;
  }

  .div-right {
    width: 20%;
    vertical-align: top;
    margin: 0;
    height: 150px;
    padding: 10px;
    display: inline-block;
  }

  .div-right-h1 {
    font-size: 16px;
    color: #666666;
    text-align: center;
    line-height: 40px;
  }

  .div-right-num {
    font-size: 38px;
    color: #f26f20;
    text-align: center;
    line-height: 45px;
  }

  .div-right-msg {
    font-size: 12px;
    color: #999;
    text-align: center;
    line-height: 30px;
  }

  .hidden-qrc > img {
    margin: 5px 5px;
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
