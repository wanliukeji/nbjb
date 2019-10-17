<template>
  <div class="model">
    <div class="model-row">
      <div class="model-row-left">
        <div class="model-row-left-top">
          <p class="body-title">筛选条件</p>
          <p style="border-bottom: 3px solid #e5e5e5; margin-top: 10px;"></p>
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
            <dd style="display: block;">
              <a href="#" class="dd-frist">不限</a>
              <a href="#">全职</a>
              <a href="#">兼职</a>
              <a href="#">临时</a>
              <a href="#">实习</a>
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
              <a href="#" class="dd-frist">不限</a>
              <a href="#">一年以内</a>
              <a href="#">1-2年</a>
              <a href="#">3-5年</a>
              <a href="#">6-7年</a>
              <a href="#">8-10年</a>
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
              <a href="#" class="dd-frist">不限</a>
              <a href="#">高中以下</a>
              <a href="#">中专/职高</a>
              <a href="#">大专</a>
              <a href="#">本科</a>
              <a href="#">硕士</a>
              <a href="#">研究生</a>
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
              <a href="#" class="dd-frist">不限</a>
              <a href="#">面议</a>
              <a href="#">1000以下</a>
              <a href="#">1000~3999</a>
              <a href="#">4000~6999</a>
              <a href="#">6000~8999</a>
              <a href="#">8000以上</a>
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
              <div class="model-row-right-top-span-hidden display-none">
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
              <div class="model-row-right-top-span-hidden display-none">
                <span class="model-row-right-top-span-hidden-a" @click="getFied('不限')">不限</span>
                <span class="model-row-right-top-span-hidden-a" @click="getFied('计算机软件/互联网/通信')">计算机软件/互联网/通信</span>
                <span class="model-row-right-top-span-hidden-a" @click="getFied('会计/金融/银行/保险')">会计/金融/银行/保险</span>
                <span class="model-row-right-top-span-hidden-a" @click="getFied('贸易/消费/制造/营运')">贸易/消费/制造/营运</span>
                <span class="model-row-right-top-span-hidden-a" @click="getFied('制药/医疗')">制药/医疗</span>
                <span class="model-row-right-top-span-hidden-a" @click="getFied('广告/传媒')">广告/传媒</span>
              </div>
            </a>
            <a class="model-row-right-top-span-a">
              {{jobType}}
              <span class="open-title-right">
                <svg t="1571111429872" style="margin-top: 6px;" class="icon open-title-up" viewBox="0 0 1024 1024"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1813" width="15" height="15">
                  <path d="M876.8 377.6l-96-89.6L512 556.8 243.2 288 147.2 377.6 512 736z" fill="#999999"
                        p-id="1814"></path>
                </svg>
              </span>
              <div class="model-row-right-top-span-hidden display-none">
                <span class="model-row-right-top-span-hidden-a" @click="getFied('不限')">不限</span>
                <span class="model-row-right-top-span-hidden-a" @click="getFied('计算机软件/互联网/通信')">计算机软件/互联网/通信</span>
                <span class="model-row-right-top-span-hidden-a" @click="getFied('会计/金融/银行/保险')">会计/金融/银行/保险</span>
                <span class="model-row-right-top-span-hidden-a" @click="getFied('贸易/消费/制造/营运')">贸易/消费/制造/营运</span>
                <span class="model-row-right-top-span-hidden-a" @click="getFied('制药/医疗')">制药/医疗</span>
                <span class="model-row-right-top-span-hidden-a" @click="getFied('广告/传媒')">广告/传媒</span>
              </div>
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
              <div class="model-row-right-top-span-hidden display-none">
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
              <div class="model-row-right-top-span-hidden display-none">
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
          <a href="" class="selectAll">
            <button class="selectAll-btn-1">应聘</button>
          </a>
          <a href="" class="selectAll">
            <button class="selectAll-btn-2">收藏</button>
          </a>
          <a href="" class="selectAll">
              <span class="selectAll-a">
                目前有 <span style="color: red;">3000</span> 个岗位任你挑选</span>
          </a>
          <div class="seach-div">
            <input type="text" style=" float: left;" class="seach-text" placeholder="请输入关键字进行搜索"/>
            <button class="seach-btn-div" style="float: left; margin-top: 1px;">搜索</button>
          </div>
        </div>
        <ul class="joblist">
          <li class="job-info">
            <div class="job-info-top">
              <p>
                <span class="job-info-btn">
                <input type="checkbox" id="1" class="gcs-checkbox checkbox-item">
                <label for="1" class="checkbox-label"></label>
              </span>
                <a href="" class="job-info-top-name">智能家居云平台高级/资深</a>
                <i class="job-info-top-name-right" style="float: left; padding: 2px;">兼职</i>
              </p>
            </div>
            <div class="job-info-body">
              <div class="job-info-title">
                <a href="#" class="job-info-title-span">太极云软</a>
                <a href="#" class="job-info-title-span qrc">
                  <svg t="1571127706955" style="margin-bottom: 4px;" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="2352" width="20" height="20">
                    <path
                      d="M540.9 866h59v59h-59v-59zM422.8 423.1V98.4H98.1v324.8h59v59h59v-59h206.7z m-265.7-59V157.4h206.7v206.7H157.1z m0 0"
                      p-id="2353" fill="#555555"></path>
                    <path
                      d="M216.2 216.4h88.6V305h-88.6v-88.6zM600 98.4v324.8h324.8V98.4H600z m265.7 265.7H659V157.4h206.7v206.7z m0 0"
                      p-id="2354" fill="#555555"></path>
                    <path
                      d="M718.1 216.4h88.6V305h-88.6v-88.6zM216.2 718.3h88.6v88.6h-88.6v-88.6zM98.1 482.2h59v59h-59v-59z m118.1 0h59.1v59h-59.1v-59z m0 0"
                      p-id="2355" fill="#555555"></path>
                    <path
                      d="M275.2 600.2H98.1V925h324.8V600.2h-88.6v-59h-59v59z m88.6 59.1V866H157.1V659.3h206.7z m118.1-531.4h59v88.6h-59v-88.6z m0 147.6h59v59h-59v-59zM659 482.2H540.9v-88.6h-59v88.6H334.3v59H600v59h59v-118z m0 118h59.1v59H659v-59z m-177.1 0h59v88.6h-59v-88.6z m0 147.7h59V866h-59V747.9zM600 688.8h59V866h-59V688.8z m177.1-88.6h147.6v59H777.1v-59z m88.6-118h59v59h-59v-59z m-147.6 0h118.1v59H718.1v-59z m0 206.6h59v59h-59v-59z m147.6 59.1h-29.5v59h59v-59h29.5v-59h-59v59z m-147.6 59h59V866h-59v-59.1z m59 59.1h147.6v59H777.1v-59z m0 0"
                      p-id="2356" fill="#555555"></path>
                  </svg>
                  <div style="display: none;" class="hidden-qrc">
                    <img src="/static/image/qrcode.jpg" width="80" height="80">
                  </div>
                </a>
                <a href="#" class="job-info-title-span">北仑</a>
                <a href="#" class="job-info-title-span">大碶</a>
                <a href="#" class="job-info-title-span">本科</a>
                <a href="#" class="job-info-title-span">6-7年</a>
                <a href="#" class="job-info-title-span price">8000~9000</a>
                <a href="#" class="job-info-title-span">2019-10-10发布</a>
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
                <a href="" class="job-info-bottom-a">投递</a>
                <a href="" class="job-info-bottom-a">收藏</a>
              </p>
            </div>
          </li>
          <li class="job-info">
            <div class="job-info-top">
              <p>
                <span class="job-info-btn">
                <input type="checkbox" id="2" class="gcs-checkbox checkbox-item">
                <label for="2" class="checkbox-label"></label>
              </span>
                <a href="" class="job-info-top-name">智能家居云平台高级/资深</a>
                <i class="job-info-top-name-right" style="float: left; padding: 2px;">兼职</i>
              </p>
            </div>
            <div class="job-info-body">
              <div class="job-info-title">
                <a href="#" class="job-info-title-span">太极云软</a>
                <a href="#" class="job-info-title-span qrc">
                  <svg t="1571127706955" style="margin-bottom: 4px;" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="2352" width="20" height="20">
                    <path
                      d="M540.9 866h59v59h-59v-59zM422.8 423.1V98.4H98.1v324.8h59v59h59v-59h206.7z m-265.7-59V157.4h206.7v206.7H157.1z m0 0"
                      p-id="2353" fill="#555555"></path>
                    <path
                      d="M216.2 216.4h88.6V305h-88.6v-88.6zM600 98.4v324.8h324.8V98.4H600z m265.7 265.7H659V157.4h206.7v206.7z m0 0"
                      p-id="2354" fill="#555555"></path>
                    <path
                      d="M718.1 216.4h88.6V305h-88.6v-88.6zM216.2 718.3h88.6v88.6h-88.6v-88.6zM98.1 482.2h59v59h-59v-59z m118.1 0h59.1v59h-59.1v-59z m0 0"
                      p-id="2355" fill="#555555"></path>
                    <path
                      d="M275.2 600.2H98.1V925h324.8V600.2h-88.6v-59h-59v59z m88.6 59.1V866H157.1V659.3h206.7z m118.1-531.4h59v88.6h-59v-88.6z m0 147.6h59v59h-59v-59zM659 482.2H540.9v-88.6h-59v88.6H334.3v59H600v59h59v-118z m0 118h59.1v59H659v-59z m-177.1 0h59v88.6h-59v-88.6z m0 147.7h59V866h-59V747.9zM600 688.8h59V866h-59V688.8z m177.1-88.6h147.6v59H777.1v-59z m88.6-118h59v59h-59v-59z m-147.6 0h118.1v59H718.1v-59z m0 206.6h59v59h-59v-59z m147.6 59.1h-29.5v59h59v-59h29.5v-59h-59v59z m-147.6 59h59V866h-59v-59.1z m59 59.1h147.6v59H777.1v-59z m0 0"
                      p-id="2356" fill="#555555"></path>
                  </svg>
                  <div style="display: none;" class="hidden-qrc">
                    <img src="/static/image/qrcode.jpg" width="80" height="80">
                  </div>
                </a>
                <a href="#" class="job-info-title-span">北仑</a>
                <a href="#" class="job-info-title-span">大碶</a>
                <a href="#" class="job-info-title-span">本科</a>
                <a href="#" class="job-info-title-span">6-7年</a>
                <a href="#" class="job-info-title-span price">8000~9000</a>
                <a href="#" class="job-info-title-span">2019-10-10发布</a>
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
                <a href="" class="job-info-bottom-a">投递</a>
                <a href="" class="job-info-bottom-a">收藏</a>
              </p>
            </div>
          </li>
          <li class="job-info">
            <div class="job-info-top">
              <p>
                <span class="job-info-btn">
                <input type="checkbox" id="3" class="gcs-checkbox checkbox-item">
                <label for="3" class="checkbox-label"></label>
              </span>
                <a href="" class="job-info-top-name">智能家居云平台高级/资深</a>
                <i class="job-info-top-name-right" style="float: left; padding: 2px;">兼职</i>
              </p>
            </div>
            <div class="job-info-body">
              <div class="job-info-title">
                <a href="#" class="job-info-title-span">太极云软</a>
                <a href="#" class="job-info-title-span qrc">
                  <svg t="1571127706955" style="margin-bottom: 4px;" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="2352" width="20" height="20">
                    <path
                      d="M540.9 866h59v59h-59v-59zM422.8 423.1V98.4H98.1v324.8h59v59h59v-59h206.7z m-265.7-59V157.4h206.7v206.7H157.1z m0 0"
                      p-id="2353" fill="#555555"></path>
                    <path
                      d="M216.2 216.4h88.6V305h-88.6v-88.6zM600 98.4v324.8h324.8V98.4H600z m265.7 265.7H659V157.4h206.7v206.7z m0 0"
                      p-id="2354" fill="#555555"></path>
                    <path
                      d="M718.1 216.4h88.6V305h-88.6v-88.6zM216.2 718.3h88.6v88.6h-88.6v-88.6zM98.1 482.2h59v59h-59v-59z m118.1 0h59.1v59h-59.1v-59z m0 0"
                      p-id="2355" fill="#555555"></path>
                    <path
                      d="M275.2 600.2H98.1V925h324.8V600.2h-88.6v-59h-59v59z m88.6 59.1V866H157.1V659.3h206.7z m118.1-531.4h59v88.6h-59v-88.6z m0 147.6h59v59h-59v-59zM659 482.2H540.9v-88.6h-59v88.6H334.3v59H600v59h59v-118z m0 118h59.1v59H659v-59z m-177.1 0h59v88.6h-59v-88.6z m0 147.7h59V866h-59V747.9zM600 688.8h59V866h-59V688.8z m177.1-88.6h147.6v59H777.1v-59z m88.6-118h59v59h-59v-59z m-147.6 0h118.1v59H718.1v-59z m0 206.6h59v59h-59v-59z m147.6 59.1h-29.5v59h59v-59h29.5v-59h-59v59z m-147.6 59h59V866h-59v-59.1z m59 59.1h147.6v59H777.1v-59z m0 0"
                      p-id="2356" fill="#555555"></path>
                  </svg>
                  <div style="display: none;" class="hidden-qrc">
                    <img src="/static/image/qrcode.jpg" width="80" height="80">
                  </div>
                </a>
                <a href="#" class="job-info-title-span">北仑</a>
                <a href="#" class="job-info-title-span">大碶</a>
                <a href="#" class="job-info-title-span">本科</a>
                <a href="#" class="job-info-title-span">6-7年</a>
                <a href="#" class="job-info-title-span price">8000~9000</a>
                <a href="#" class="job-info-title-span">2019-10-10发布</a>
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
                <a href="" class="job-info-bottom-a">投递</a>
                <a href="" class="job-info-bottom-a">收藏</a>
              </p>
            </div>
          </li>
          <li class="job-info">
            <div class="job-info-top">
              <p>
                <span class="job-info-btn">
                <input type="checkbox" id="4" class="gcs-checkbox checkbox-item">
                <label for="4" class="checkbox-label"></label>
              </span>
                <a href="" class="job-info-top-name">智能家居云平台高级/资深</a>
                <i class="job-info-top-name-right" style="float: left; padding: 2px;">兼职</i>
              </p>
            </div>
            <div class="job-info-body">
              <div class="job-info-title">
                <a href="#" class="job-info-title-span">太极云软</a>
                <a href="#" class="job-info-title-span qrc">
                  <svg t="1571127706955" style="margin-bottom: 4px;" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="2352" width="20" height="20">
                    <path
                      d="M540.9 866h59v59h-59v-59zM422.8 423.1V98.4H98.1v324.8h59v59h59v-59h206.7z m-265.7-59V157.4h206.7v206.7H157.1z m0 0"
                      p-id="2353" fill="#555555"></path>
                    <path
                      d="M216.2 216.4h88.6V305h-88.6v-88.6zM600 98.4v324.8h324.8V98.4H600z m265.7 265.7H659V157.4h206.7v206.7z m0 0"
                      p-id="2354" fill="#555555"></path>
                    <path
                      d="M718.1 216.4h88.6V305h-88.6v-88.6zM216.2 718.3h88.6v88.6h-88.6v-88.6zM98.1 482.2h59v59h-59v-59z m118.1 0h59.1v59h-59.1v-59z m0 0"
                      p-id="2355" fill="#555555"></path>
                    <path
                      d="M275.2 600.2H98.1V925h324.8V600.2h-88.6v-59h-59v59z m88.6 59.1V866H157.1V659.3h206.7z m118.1-531.4h59v88.6h-59v-88.6z m0 147.6h59v59h-59v-59zM659 482.2H540.9v-88.6h-59v88.6H334.3v59H600v59h59v-118z m0 118h59.1v59H659v-59z m-177.1 0h59v88.6h-59v-88.6z m0 147.7h59V866h-59V747.9zM600 688.8h59V866h-59V688.8z m177.1-88.6h147.6v59H777.1v-59z m88.6-118h59v59h-59v-59z m-147.6 0h118.1v59H718.1v-59z m0 206.6h59v59h-59v-59z m147.6 59.1h-29.5v59h59v-59h29.5v-59h-59v59z m-147.6 59h59V866h-59v-59.1z m59 59.1h147.6v59H777.1v-59z m0 0"
                      p-id="2356" fill="#555555"></path>
                  </svg>
                  <div style="display: none;" class="hidden-qrc">
                    <img src="/static/image/qrcode.jpg" width="80" height="80">
                  </div>
                </a>
                <a href="#" class="job-info-title-span">北仑</a>
                <a href="#" class="job-info-title-span">大碶</a>
                <a href="#" class="job-info-title-span">本科</a>
                <a href="#" class="job-info-title-span">6-7年</a>
                <a href="#" class="job-info-title-span price">8000~9000</a>
                <a href="#" class="job-info-title-span">2019-10-10发布</a>
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
                <a href="" class="job-info-bottom-a">投递</a>
                <a href="" class="job-info-bottom-a">收藏</a>
              </p>
            </div>
          </li>
          <li class="job-info">
            <div class="job-info-top">
              <p>
                <span class="job-info-btn">
                <input type="checkbox" id="5" class="gcs-checkbox checkbox-item">
                <label for="5" class="checkbox-label"></label>
              </span>
                <a href="" class="job-info-top-name">智能家居云平台高级/资深</a>
                <i class="job-info-top-name-right" style="float: left; padding: 2px;">兼职</i>
              </p>
            </div>
            <div class="job-info-body">
              <div class="job-info-title">
                <a href="#" class="job-info-title-span">太极云软</a>
                <a href="#" class="job-info-title-span qrc">
                  <svg t="1571127706955" style="margin-bottom: 4px;" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="2352" width="20" height="20">
                    <path
                      d="M540.9 866h59v59h-59v-59zM422.8 423.1V98.4H98.1v324.8h59v59h59v-59h206.7z m-265.7-59V157.4h206.7v206.7H157.1z m0 0"
                      p-id="2353" fill="#555555"></path>
                    <path
                      d="M216.2 216.4h88.6V305h-88.6v-88.6zM600 98.4v324.8h324.8V98.4H600z m265.7 265.7H659V157.4h206.7v206.7z m0 0"
                      p-id="2354" fill="#555555"></path>
                    <path
                      d="M718.1 216.4h88.6V305h-88.6v-88.6zM216.2 718.3h88.6v88.6h-88.6v-88.6zM98.1 482.2h59v59h-59v-59z m118.1 0h59.1v59h-59.1v-59z m0 0"
                      p-id="2355" fill="#555555"></path>
                    <path
                      d="M275.2 600.2H98.1V925h324.8V600.2h-88.6v-59h-59v59z m88.6 59.1V866H157.1V659.3h206.7z m118.1-531.4h59v88.6h-59v-88.6z m0 147.6h59v59h-59v-59zM659 482.2H540.9v-88.6h-59v88.6H334.3v59H600v59h59v-118z m0 118h59.1v59H659v-59z m-177.1 0h59v88.6h-59v-88.6z m0 147.7h59V866h-59V747.9zM600 688.8h59V866h-59V688.8z m177.1-88.6h147.6v59H777.1v-59z m88.6-118h59v59h-59v-59z m-147.6 0h118.1v59H718.1v-59z m0 206.6h59v59h-59v-59z m147.6 59.1h-29.5v59h59v-59h29.5v-59h-59v59z m-147.6 59h59V866h-59v-59.1z m59 59.1h147.6v59H777.1v-59z m0 0"
                      p-id="2356" fill="#555555"></path>
                  </svg>
                  <div style="display: none;" class="hidden-qrc">
                    <img src="/static/image/qrcode.jpg" width="80" height="80">
                  </div>
                </a>
                <a href="#" class="job-info-title-span">北仑</a>
                <a href="#" class="job-info-title-span">大碶</a>
                <a href="#" class="job-info-title-span">本科</a>
                <a href="#" class="job-info-title-span">6-7年</a>
                <a href="#" class="job-info-title-span price">8000~9000</a>
                <a href="#" class="job-info-title-span">2019-10-10发布</a>
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
                <a href="" class="job-info-bottom-a">投递</a>
                <a href="" class="job-info-bottom-a">收藏</a>
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
  </div>
</template>

<script>
    export default {
        name: "group",
        watch: {
            filterText(val) {
                this.$refs.tree2.filter(val);
            }
        },
        methods: {
            getAddr: function (val, e) {
                if (val == '不限') {
                    this.addr = '工作地点';
                } else {
                    this.addr = val;
                }
            },
            getFied(val) {
                if (val == '不限') {
                    this.field = '行业领域';
                } else {
                    this.field = val;
                }
            },
            getNature(val) {
                if (val == '不限') {
                    this.nature = '公司性质';
                } else {
                    this.nature = val;
                }
            },
            getScale(val) {
                if (val == '不限') {
                    this.scale = '公司规模';
                } else {
                    this.scale = val;
                }
            }
        },
        data() {
            return {
                addr: '工作地点',
                field: '行业领域',
                jobType: '职业类型',
                nature: '公司性质',
                scale: '公司规模'
            };
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

        $('.qrc').mouseover(function () {
            let childen = $(this).children();
            $(childen).show(500);
        });

        $('.model-row-right-top-span-a').hover(function () {
            var childen = $(this).children('.model-row-right-top-span-hidden');
            $(childen).show(800);
            var subs = $(this).siblings();
            $(subs).children('.model-row-right-top-span-hidden').hide(800);
        });

        $('.model-row-right-top-span-hidden').click(function () {
            // $(this).hide();
        }).mouseout(function () {
            // $(this).hide();
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
    min-height: 230px;
    min-width: 1200px;
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
    color: #333333;
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

  dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .body-title {
    /*margin: 10px -10px 10px;*/
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
    min-height: 100px;
    margin-top: 11px;
    margin-left: 0px;
    z-index: 10;
    cursor: default;
    border: 1px solid #ddd;
    box-shadow: 0 10px 25px rgba(0, 0, 0, .3);
    text-align: center;
  }

  .model-row-right-top-span-hidden-a {
    display: block;
    font-size: 16px;
    color: #333333;
    margin: 0px;
    padding: 10px;
    word-break: normal;
    word-break: normal;
    text-align: left;
  }

  .model-row-right-top-span-hidden-a:hover {
    cursor: pointer;
    background-color: #F2F2F2;
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
    font-style: normal;
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
    white-space: normal;
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
</style>
