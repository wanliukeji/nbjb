<template>
  <div class="model">
<!--    <form method="post" id="cy_form" action="#">-->
<!--      <p class="tbmu bw0">-->
<!--      <span class="pipe a">总计充值 <font color='red' id='total_amount'>17</font> 元，-->
<!--        已开票金额<font color='blue' id='invoice_amount'>2</font> 元， 开票最低金额为<font-->
<!--          id='min_amount' color='blue'>10</font>元，请仔细填写公司抬头和税号。</span>-->
<!--      </p>-->
<!--      <br>-->
<!--      <div class="exfm" style="margin-top: 0;">-->
<!--        <table cellspacing="0" cellpadding="0" class="cy-table-div">-->
<!--          <tr>-->
<!--            <td align="right"><b>公司名称:</b></td>-->
<!--            <td>-->
<!--              <input type="text" placeholder="请填写公司名称..." name="company_name" id="company_name" required-->
<!--                     class="input-text"/>-->
<!--              <ul class="hide-select" id="hide-select"></ul>-->
<!--            </td>-->
<!--            <td align="left" class="ta-right">-->
<!--              <span id="company_name_font" class="td-left-span"><i class="td-left-span-i">*</i> 此行为必填项</span>-->
<!--            </td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td align="right"><b>税号:</b></td>-->
<!--            <td>-->
<!--              <input type="text" placeholder="请填写税号..." name="invoice_code" id="invoice_code" required-->
<!--                     class="input-text"/>-->
<!--            </td>-->
<!--            <td align="left" class="ta-right">-->
<!--              <span id="invoice_code_font" class="td-left-span"><i class="td-left-span-i">*</i> 此行为必填项</span>-->
<!--            </td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td align="right"><b>开户号:</b></td>-->
<!--            <td>-->
<!--              <input type="text" placeholder="请填写开户号码..." name="bank_code" id="bank_code" class="input-text"/>-->
<!--            </td>-->
<!--            <td align="left" class="ta-right">-->
<!--              <span id="bank_code_font"></span>-->
<!--            </td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td align="right"><b>开户行:</b></td>-->
<!--            <td>-->
<!--              <input type="text" placeholder="请填写开户银行..." name="bank" id="bank" class="input-text"/>-->
<!--            </td>-->
<!--            <td align="left" class="ta-right">-->
<!--              <span id="bank_font"></span>-->
<!--            </td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td align="right"><b>金额:</b></td>-->
<!--            <td>-->
<!--              <input placeholder="请填写开票金额..." name="amount" id="amount" class="input-text"-->
<!--                     onkeyup="value=value.replace(/[^\d.]/g,'')"-->
<!--                     value="0.0"/>-->
<!--            </td>-->
<!--            <td align="left" class="ta-right">-->
<!--              <span id="amount_font"></span>-->
<!--            </td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td align="right"><b>联系人:</b></td>-->
<!--            <td>-->
<!--              <input type="text" placeholder="请填写联系人..." name="contact_name" id="contact_name" class="input-text"/>-->
<!--            </td>-->
<!--            <td align="left" class="ta-right">-->
<!--              <span id="contact_name_font"></span>-->
<!--            </td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--          <tr>-->
<!--            <td align="right"><b>公司地址:</b></td>-->
<!--            <td>-->
<!--              <input type="text" placeholder="请填写公司地址..." name="company_address" id="company_address"-->
<!--                     class="input-text"/>-->
<!--            </td>-->
<!--            <td align="left" class="ta-right">-->
<!--              <span id="company_address_font"></span>-->
<!--            </td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td></td>-->
<!--            <td align="left">-->
<!--              <button type="submit" id="cy_success" class="pn" name="submit" value="true"><strong>开票</strong></button>-->
<!--              <button type="submit" id="cy_edit" class="pn" name="search" value="true"><strong>编辑</strong></button>-->
<!--            </td>-->
<!--          </tr>-->
<!--        </table>-->
<!--      </div>-->
<!--    </form>-->
  </div>
</template>

<script TYPE="text/javascript" CHARSET="UTF-8">
    // //识别浏览器版本
    // var browser = function myBrowser() {
    //     var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    //     var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    //     var isIE = userAgent.indexOf("compatible") > -1
    //         && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    //     var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
    //     var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    //     var isSafari = userAgent.indexOf("Safari") > -1
    //         && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
    //     var isChrome = userAgent.indexOf("Chrome") > -1
    //         && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
    //
    //     if (isIE) {
    //         var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    //         reIE.test(userAgent);
    //         var fIEVersion = parseFloat(RegExp["$1"]);
    //         if (fIEVersion == 7) {
    //             return "IE7";
    //         } else if (fIEVersion == 8) {
    //             return "IE8";
    //         } else if (fIEVersion == 9) {
    //             return "IE9";
    //         } else if (fIEVersion == 10) {
    //             return "IE10";
    //         } else if (fIEVersion == 11) {
    //             return "IE11";
    //         } else {
    //             return "0";
    //         }//IE版本过低
    //         return "IE";
    //     }
    //     if (isOpera) {
    //         return "Opera";
    //     }
    //     if (isEdge) {
    //         return "Edge";
    //     }
    //     if (isFF) {
    //         return "FF";
    //     }
    //     if (isSafari) {
    //         return "Safari";
    //     }
    //     if (isChrome) {
    //         return "Chrome";
    //     }
    //
    // }
    // console.log('当前使用的浏览器: ' + browser());
    // /* 兼容高版本jquery */
    // var jQuery = $;
    // jQuery(function () {
    //     var html = '<i style="color: red;">*</i> 此行为必填项';
    //     var style = 'style="font: 12px/1.5 Tahoma, \'Microsoft Yahei\', \'Simsun\';\n' +
    //         '    color: #999;\n' +
    //         '    clear: both;\n' +
    //         '    margin-left: 18px ;\n' +
    //         '    color: #999;"\n' +
    //         '    left: 10px;';
    //     var success = '<svg style="margin-top: 10px;" t="1567221340551" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2070" width="14" height="14"><path d="M511 69C267.4 69 69.9 266.5 69.9 510.1c0 243.6 197.5 441.1 441.1 441.1 243.6 0 441.1-197.5 441.1-441.1C952.2 266.5 754.7 69 511 69z m282 292.7L463.4 691.3l-18.6 18.6c-19.6 19.6-51.4 19.6-71 0l-18.6-18.6-126.8-126.8c-16.3-16.3-14.8-43.9 4.6-58.1 15.4-11.2 36.9-8.7 50.3 4.8l125.9 125.9 330.3-330.3c16.3-16.3 43.9-14.8 58.1 4.6 11.4 15.4 8.8 36.9-4.6 50.3z" p-id="2071" fill="#1afa29"></path></svg>';
    //     var error = '<svg t="1567221892863" style=" margin-right: 3px; position: absolute; margin-top: 2px;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2845" width="14" height="14"><path d="M664.96 630.4a32 32 0 0 1-22.4 54.72 32 32 0 0 1-22.72-9.28L506.56 562.56 393.6 675.84a32 32 0 0 1-22.72 9.28 32 32 0 0 1-22.72-9.28 32 32 0 0 1 0-45.44l113.28-112.96-113.28-113.28a32 32 0 0 1 0-45.12 32 32 0 0 1 45.44 0L506.56 472l113.28-112.96a32 32 0 1 1 45.12 45.12L552 517.44zM512 64a448 448 0 1 0 448 448A448 448 0 0 0 512 64z" p-id="2846" fill="#d81e06"></path></svg>';
    //     var flag = false;
    //     var flag_g = false;
    //     var flag_a = false;
    //     var flag_b = false;
    //     var flag_c = false;
    //     var flag_d = false;
    //     var flag_e = false;
    //     var flag_f = false;
    //     var company_name_reg = /^[^\u0000-\u00FF]+[\.]?$/;
    //     var invoice_code_reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,23}$/;
    //     var regNumber = /\d+/;
    //     var regStringAbc = /^[a-zA-Z\u4e00-\u9fa5]+$/;
    //     var regNumStrAbc = /^[/\\x{4e00}/-\/\\x{9fa5}A-Za-z0-9]+$u/;
    //
    //     var myMap = new Map();
    //     var items = getList(); //测试数据 可删除
    //
    //     jQuery('#company_name').focus(function () {
    //         ajax_http();
    //     });
    //
    //     jQuery('#company_name').blur(function () {
    //         //SUCCESS
    //         if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
    //             CY_SUCCESS_CSS();
    //         } else {
    //             CY_ERROR_CSS;
    //         }
    //     });
    //
    //     jQuery('#company_name').change(function () {
    //         //SUCCESS
    //         if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
    //             CY_SUCCESS_CSS();
    //         } else {
    //             CY_ERROR_CSS;
    //         }
    //     });
    //
    //     jQuery('#invoice_code').blur(function () {
    //         //SUCCESS
    //         if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
    //             CY_SUCCESS_CSS();
    //         } else {
    //             CY_ERROR_CSS;
    //         }
    //     });
    //
    //     jQuery('#bank_code').blur(function () {
    //         //SUCCESS
    //         if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
    //             CY_SUCCESS_CSS();
    //         } else {
    //             CY_ERROR_CSS;
    //         }
    //     });
    //
    //     jQuery('#bank').blur(function () {
    //         //SUCCESS
    //         if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
    //             CY_SUCCESS_CSS();
    //         } else {
    //             CY_ERROR_CSS;
    //         }
    //     });
    //
    //     jQuery('#company_address').blur(function () {
    //         //SUCCESS
    //         if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
    //             CY_SUCCESS_CSS();
    //         } else {
    //             CY_ERROR_CSS;
    //         }
    //     });
    //
    //     jQuery('#contact_name').blur(function () {
    //         //SUCCESS
    //         if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
    //             CY_SUCCESS_CSS();
    //         } else {
    //             CY_ERROR_CSS;
    //         }
    //     });
    //
    //     jQuery('#amount').blur(function () {
    //         //SUCCESS
    //         if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
    //             CY_SUCCESS_CSS();
    //         } else {
    //             CY_ERROR_CSS;
    //         }
    //     });
    //
    //     function appendToHtml(res, $dom) {
    //         // items = res;
    //         for (let i = 0; i < items.length; i++) {
    //             var obj = items[i];
    //             var html = '<li value="' + obj.company_name + '" ' + '' +
    //                 ' class="hide-li-selected"' +
    //                 '" style="cursor: pointer;\n' +
    //                 '    padding-left: 10px;"' +
    //                 '   height: 20px;>' + obj.company_name + '</li>'
    //             $dom.append(html);
    //             myMap.set(obj.company_name, items[i]);
    //         }
    //     }
    //
    //     function showChilden($parent) {
    //         var $dom = $parent.next().show();
    //         jQuery('.hide-li-selected').click(function () {
    //             var $son = jQuery(this);
    //             var f = $son.text();
    //             $parent.val(f);
    //             //SUCCESS
    //             if (!reg_test(company_name_reg, f)) {
    //                 jQuery('#company_name_font').html(error + '<em ' + style + ' >公司名只能由汉字组成和中文符号组成</em>');
    //             } else {
    //                 jQuery('#company_name_font').html(success);
    //                 flag_a = true;
    //                 if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
    //                     CY_SUCCESS_CSS();
    //                 }
    //             }
    //             ;
    //             $dom.hide();
    //         });
    //     }
    //
    //     function selectHover() {
    //         jQuery(".hide-li-selected").hover(
    //             function () {
    //                 jQuery(this).css({'background': '#f6f6f6'});
    //             },
    //             function () {
    //                 jQuery(this).css({'background': '#FFFFFF'});
    //             }
    //         );
    //     }
    //
    //     function selected($parent, myMap) {
    //         jQuery('.hide-li-selected').click(function () {
    //             var $son = jQuery(this);
    //             var f = $son.text();
    //             $parent.val(f);
    //             var obj = myMap.get(f);
    //             jQuery('[name="invoice_code"]').val(obj.invoice_code);
    //             jQuery('[name="bank"]').val(obj.bank);
    //             jQuery('[name="bank_code"]').val(obj.bank_code);
    //             jQuery('[name="contact_name"]').val(obj.contact_name);
    //             jQuery('[name="company_address"]').val(obj.company_address);
    //             jQuery('[name="amount"]').val(obj.amount);
    //             jQuery('.hide-select').hide();
    //
    //             //正则判断
    //             if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
    //                 CY_SUCCESS_CSS();
    //             }
    //
    //         });
    //     }
    //
    //     jQuery(document).bind('click', function (event) {
    //         event.stopPropagation();
    //         var tar = event.target;
    //         if (jQuery(tar).closest('#company_name').length == 0) {
    //             jQuery('#hide-select').hide();
    //         } else {
    //             jQuery('#hide-select').show();
    //         }
    //     });
    //
    //     //提交
    //     jQuery('#cy_form').submit(function () {
    //         if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
    //             return true;
    //         }
    //         return false;
    //     });
    //
    //
    //     function exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc) {
    //         var bool_b, bool_d, bool_e, bool_f, bool_g = false;
    //         var bool_a = false;
    //         var bool_c = false;
    //         var company_name = jQuery('#company_name').val();
    //         var invoice_code = jQuery('#invoice_code').val();
    //         var bank_code = jQuery('#bank_code').val();
    //         var bank = jQuery('#bank').val();
    //         var contact_name = jQuery('#contact_name').val();
    //         var company_address = jQuery('#company_address').val();
    //         var amount = jQuery('#amount').val();
    //
    //         //SUCCESS
    //         if (!is_Empty(company_name)) {
    //             if (!reg_test(company_name_reg, company_name)) {
    //                 jQuery('#company_name_font').html(error + '<em ' + style + ' >公司名只能由汉字组成和中文符号组成</em>');
    //                 CY_ERROR_CSS();
    //             } else {
    //                 jQuery('#company_name_font').html(success);
    //                 bool_a = true;
    //             }
    //             ;
    //         }
    //         ;
    //
    //         //SUCCESS
    //         if (!is_Empty(invoice_code)) {
    //             if (!reg_test(invoice_code_reg, invoice_code)) {
    //                 jQuery('#invoice_code_font').html(error + '<em ' + style + ' >税号只能由字母和数字组成</em>');
    //                 CY_ERROR_CSS();
    //             } else {
    //                 jQuery('#invoice_code_font').html(success);
    //                 bool_b = true;
    //             }
    //             ;
    //         }
    //         ;
    //
    //         //SUCCESS
    //         if (!is_Empty(bank_code)) {
    //             if (!reg_test(invoice_code_reg, bank_code)) {
    //                 jQuery('#bank_code_font').html(error + '<em ' + style + ' >开户行账号只能由字母和数字组成</em>');
    //                 CY_ERROR_CSS();
    //             } else {
    //                 jQuery('#bank_code_font').html(success);
    //                 bool_c = true;
    //             }
    //             ;
    //         } else {
    //             jQuery('#bank_code_font').html('');
    //         }
    //         ;
    //
    //         // SUCCESS
    //         if (!is_Empty(bank)) {
    //             if (reg_test(regNumStrAbc, bank)) {
    //                 jQuery('#bank_font').html(error + '<em ' + style + ' >开户行由汉字、字母、数字组成</em>');
    //                 CY_ERROR_CSS();
    //             } else {
    //                 jQuery('#bank_font').html(success);
    //                 bool_d = true;
    //             }
    //             ;
    //         } else {
    //             jQuery('#bank_font').html('');
    //         }
    //         ;
    //
    //         //SUCCESS
    //         if (!is_Empty(contact_name)) {
    //             if (!reg_test(regStringAbc, contact_name)) {
    //                 jQuery('#contact_name_font').html(error + '<em ' + style + ' >联系人姓名由汉字、字母组成</em>');
    //                 CY_ERROR_CSS();
    //             } else {
    //                 jQuery('#contact_name_font').html(success);
    //                 bool_e = true;
    //             }
    //             ;
    //         } else {
    //             jQuery('#contact_name_font').html('');
    //         }
    //         ;
    //
    //         //SUCCESS
    //         if (!is_Empty(company_address)) {
    //             if (reg_test(regNumStrAbc, company_address)) {
    //                 jQuery('#company_address_font').html(error + '<em ' + style + ' >公司地址由汉字、字母、数字组成</em>');
    //                 CY_ERROR_CSS();
    //             } else {
    //                 jQuery('#company_address_font').html(success);
    //                 bool_f = true;
    //             }
    //             ;
    //         } else {
    //             jQuery('#contact_name_font').html('');
    //         }
    //         ;
    //
    //         //SUCCESS
    //         recharge();
    //
    //
    //         // console.log('bool_a:' + bool_a + '\nbool_b:' + bool_b + '\nbool_c:' + bool_c
    //         //     + '\nbool_d:' + bool_d + '\nbool_e:' + bool_e + '\nbool_f:' + bool_f + '\nbool_g:' + bool_g);
    //
    //         if (bool_a && bool_b && bool_c && bool_d && bool_e && bool_f && bool_g) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     }
    //
    //     function reg_test(reg, text) {
    //         if (reg.test(text)) {
    //             return true;
    //         }
    //         return false;
    //     }
    //
    //     function is_Empty(val) {
    //         if (val == '' || val == null) {
    //             return true;
    //         }
    //         return false;
    //     }
    //
    //     function getList() {
    //         return [
    //             {
    //                 "company_name": "科技",
    //                 "invoice_code": "XD2019001122",
    //                 "bank": "宁波银行",
    //                 "bank_code": "NBBK",
    //                 "contact_name": "陈育",
    //                 "company_address": "宁波市北仑区博地影视",
    //                 "amount": "100.1"
    //             },
    //             {
    //                 "company_name": "科技",
    //                 "invoice_code": "XD2019001123",
    //                 "bank": "温州银行",
    //                 "bank_code": "WZBK001",
    //                 "contact_name": "陈忆",
    //                 "company_address": "宁波市北仑区银泰",
    //                 "amount": "0"
    //             }
    //         ];
    //     }
    //
    //     function CY_SUCCESS_CSS() {
    //         jQuery('#cy_success').css({'background': '#f2f2f2'});
    //         jQuery('#cy_success').attr('disabled', false);
    //         jQuery('#cy_success').attr('title', '可以提交啦!');
    //     }
    //
    //     function CY_ERROR_CSS() {
    //         jQuery('#cy_success').css({'background': '#666666'});
    //         jQuery('#cy_success').attr('disabled', true);
    //         jQuery('#cy_success').attr('title', '输入不合法，请检查！');
    //     }
    //
    //     //实时监听用户输入值
    //     //输入框值实时更改后停顿0.5秒触发
    //     // jQuery("#company_name").bind('input porpertychange', function (e) {
    //     //     var lastTime = e.timeStamp;
    //     //     console.log('已过: 0.5秒');
    //     //     if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
    //     //         CY_SUCCESS_CSS();
    //     //         setTimeout(function () {
    //     //             if (lastTime - e.timeStamp == 0) {
    //     //                 // alert("0.5秒内没有修改了，可以发送请求了");
    //     //                 ajax_http();
    //     //             }
    //     //         }, 500);
    //     //     } else {
    //     //         CY_ERROR_CSS();
    //     //     }
    //     // });
    //
    //     //键盘敲击停顿0.5秒触发
    //     // jQuery('#company_name').keyup(function (e) {
    //     //     var lastTime = e.timeStamp;
    //     //     console.log('已过: 0.5秒');
    //     //     if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
    //     //         CY_SUCCESS_CSS();
    //     //         setTimeout(function () {
    //     //             if (lastTime - e.timeStamp == 0) {
    //     //                 // alert("0.5秒内没再输入，可以发送请求了");
    //     //                 ajax_http();
    //     //             }
    //     //         }, 500);
    //     //     } else {
    //     //         CY_ERROR_CSS();
    //     //     }
    //     // });
    //
    //     //设置全局变量保存输入数组
    //     var kabiaoThesReadNumber = [];
    //     //锁
    //     var local = false;
    //     var number = 0;
    //     var index = 0;
    //     jQuery('#company_name').on('keyup', function (event) {
    //         kabiaoThesReadNumber = jQuery(this).val();
    //         console.log(++index + '次:' + kabiaoThesReadNumber);
    //         if (!local) {
    //             time();
    //         }
    //         number = 0;
    //
    //         function time() {
    //             local = true;
    //             //定时器
    //             setTimeout(function () {
    //                 if (number == 500) {
    //                     console.log('距离最后发生事件已过1秒正在执行....................................................');
    //                     ajax_http();
    //                     local = false;
    //                     return;
    //                 }
    //                 number = number + 500;
    //                 time();
    //             }, 500)
    //         }
    //     });
    //
    //     function ajax_http() {
    //         var company_name = jQuery('#company_name').val();
    //         var $parent = jQuery('#company_name');
    //         var $dom = $parent.next();
    //         $dom.html('');
    //         jQuery.ajax({
    //             url: "http://localhost:8080/static/data/demo.json",  //请求路径
    //             dataType: "json",
    //             async: true,
    //             // data: {"company_name": company_name },
    //             type: "get", //请求方式
    //             contentType: "application/json;charset=UTF-8",
    //             success: function (res) {
    //                 appendToHtml(res, $dom);
    //                 showChilden($parent);
    //                 selectHover();
    //                 selected($parent, myMap);
    //             },
    //             error: function (err) {
    //                 //异常函数内调用函数 测试使用 可删除
    //                 appendToHtml(res, $dom);
    //                 showChilden($parent);
    //                 selectHover();
    //                 selected($parent, myMap);
    //                 console.log(err);
    //             }
    //         });
    //     }
    //
    //     function recharge() {
    //         var $total_amount = jQuery('#total_amount').text();
    //         var $invoice_amount = jQuery('#invoice_amount').text();
    //         var $min_amount = jQuery('#min_amount').text();
    //
    //         var total_amount = Number($total_amount);
    //         var invoice_amount = Number($invoice_amount);
    //         var min_amount = Number($min_amount);
    //         var price_difference = total_amount- invoice_amount;
    //         var amount = Number(amount);//输入金额
    //
    //         if (!(amount < price_difference && amount > min_amount)) {
    //             jQuery('#amount_font').html(error + '<em ' + style + ' >开票金额必须小于等于可充值金额且不能小于最低充值金额 ' + '</em>');
    //             CY_ERROR_CSS();
    //         } else {
    //             jQuery('#amount_font').html(success);
    //             bool_g = true;
    //         }
    //         ;
    //     }
    //
    // })
    // ;


</script>

<style scoped>
  .model {
    height: 800px;
    width: 80%;
    position: relative;
    min-width: 1200px;
    background: #FFFFFF;
    color: black;
    font-size: 40px;
    margin: 0 auto;
    text-align: center;
    font-family: 楷体;
    /*border: #0a0a0a 1px solid;*/
    margin-top: 10px;
    margin-bottom: 15px;
  }

  /*#cy_form {*/
  /*  padding-top: 150px;*/
  /*}*/

  /*.input-text {*/
  /*  border: #e7e7e7 solid 1px;*/
  /*  width: 300px;*/
  /*  height: 24px;*/
  /*  padding-left: 10px;*/
  /*  float: left;*/
  /*  margin-top: 0px;*/
  /*}*/

  /*.hide-select {*/
  /*  display: none;*/
  /*  width: 310px;*/
  /*  position: absolute;*/
  /*  margin-top: 24px;*/
  /*  border: none;*/
  /*  -webkit-appearance: none;*/
  /*  -moz-appearance: none;*/
  /*  appearance: none;*/
  /*  display: none;*/
  /*  text-align: left;*/
  /*  background: #FFFFFF;*/
  /*  !*overflow-y:scroll;*!*/
  /*}*/

  /*.hide-li-selected {*/
  /*  cursor: pointer;*/
  /*  padding-left: 10px;*/
  /*  font: 12px/1.5 Tahoma, 'Microsoft Yahei', 'Simsun';*/
  /*  clear: both;*/
  /*  margin: 5px 0;*/
  /*  color: #444444;*/
  /*}*/

  /*.pn {*/
  /*  border: none;*/
  /*  padding: 1px;*/
  /*  width: 50px;*/
  /*}*/

  /*.ta-right {*/
  /*  width: 360px;*/
  /*  white-space: nowrap;*/
  /*  vertical-align: middle;*/
  /*  padding-left: 10px;*/
  /*  text-align: left;*/
  /*}*/

  /*.td-center {*/
  /*  width: 310px;*/
  /*}*/

  /*.td-left-span {*/
  /*  font: 12px/1.5 Tahoma, 'Microsoft Yahei', 'Simsun';*/
  /*  color: #999;*/
  /*  clear: both;*/
  /*  margin: 5px 0;*/
  /*  color: #999;*/
  /*}*/

  /*.td-left-span-i {*/
  /*  color: red;*/
  /*  vertical-align: middle;*/
  /*}*/

  /*#cy_success {*/
  /*  background-color: #666666;*/
  /*}*/


</style>
