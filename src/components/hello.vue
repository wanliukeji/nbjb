<template>
  <div class="model">
    <form method="post" id="cy_form" action="#">
      <div class="exfm" style="margin-top: 0;">
        <table cellspacing="0" cellpadding="0" class="cy-table-div">
          <tr>
            <td align="right"><b>公司名称:</b></td>
            <td>
              <input type="text" placeholder="请填写公司名称..." name="company_name" id="company_name" required
                     class="input-text"/>
              <ul class="hide-select" id="hide-select"></ul>
            </td>
            <td align="left" class="ta-right">
              <span id="company_name_font" class="td-left-span"><i class="td-left-span-i">*</i> 此行为必填项</span>
            </td>
          </tr>
          <tr>
            <td align="right"><b>税号:</b></td>
            <td>
              <input type="text" placeholder="请填写税号..." name="invoice_code" id="invoice_code" required
                     class="input-text"/>
            </td>
            <td align="left" class="ta-right">
              <span id="invoice_code_font" class="td-left-span"><i class="td-left-span-i">*</i> 此行为必填项</span>
            </td>
          </tr>
          <tr>
            <td align="right"><b>开户号:</b></td>
            <td>
              <input type="text" placeholder="请填写开户号码..." name="bank_code" id="bank_code" class="input-text"/>
            </td>
            <td align="left" class="ta-right">
              <span id="bank_code_font"></span>
            </td>
          </tr>
          <tr>
            <td align="right"><b>开户行:</b></td>
            <td>
              <input type="text" placeholder="请填写开户银行..." name="bank" id="bank" class="input-text"/>
            </td>
            <td align="left" class="ta-right">
              <span id="bank_font"></span>
            </td>
          </tr>
          <tr>
            <td align="right"><b>金额:</b></td>
            <td>
              <input placeholder="请填写开票金额..." name="amount" id="amount" class="input-text"
                     onkeyup="value=value.replace(/[^\d.]/g,'')"
                     value="0.0"/>
            </td>
            <td align="left" class="ta-right">
              <span id="amount_font"></span>
            </td>
          </tr>
          <tr>
            <td align="right"><b>联系人:</b></td>
            <td>
              <input type="text" placeholder="请填写联系人..." name="contact_name" id="contact_name" class="input-text"/>
            </td>
            <td align="left" class="ta-right">
              <span id="contact_name_font"></span>
            </td>
          </tr>
          <tr>
          <tr>
            <td align="right"><b>公司地址:</b></td>
            <td>
              <input type="text" placeholder="请填写公司地址..." name="company_address" id="company_address"
                     class="input-text"/>
            </td>
            <td align="left" class="ta-right">
              <span id="company_address_font"></span>
            </td>
          </tr>
          <tr>
            <td></td>
            <td align="left">
              <button type="submit" id="cy_success" class="pn" name="submit" value="true"><strong>开票</strong></button>
              <button type="submit" id="cy_edit" class="pn" name="search" value="true"><strong>编辑</strong></button>
            </td>
          </tr>
        </table>
      </div>
    </form>
  </div>
</template>

<script TYPE="text/javascript" CHARSET="UTF-8">
    /* 兼容高版本jquery */
    var $jq = jQuery.noConflict(true);
    $jq(function () {
        var html = '<i style="color: red;">*</i> 此行为必填项';
        var style = 'style="font: 12px/1.5 Tahoma, \'Microsoft Yahei\', \'Simsun\';\n' +
            '    color: #999;\n' +
            '    clear: both;\n' +
            '    margin-left: 18px ;\n' +
            '    color: #999;"\n' +
            '    left: 10px;';
        var success = '<svg style="margin-top: 10px;" t="1567221340551" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2070" width="14" height="14"><path d="M511 69C267.4 69 69.9 266.5 69.9 510.1c0 243.6 197.5 441.1 441.1 441.1 243.6 0 441.1-197.5 441.1-441.1C952.2 266.5 754.7 69 511 69z m282 292.7L463.4 691.3l-18.6 18.6c-19.6 19.6-51.4 19.6-71 0l-18.6-18.6-126.8-126.8c-16.3-16.3-14.8-43.9 4.6-58.1 15.4-11.2 36.9-8.7 50.3 4.8l125.9 125.9 330.3-330.3c16.3-16.3 43.9-14.8 58.1 4.6 11.4 15.4 8.8 36.9-4.6 50.3z" p-id="2071" fill="#1afa29"></path></svg>';
        var error = '<svg t="1567221892863" style=" margin-right: 3px; position: absolute; margin-top: 2px;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2845" width="14" height="14"><path d="M664.96 630.4a32 32 0 0 1-22.4 54.72 32 32 0 0 1-22.72-9.28L506.56 562.56 393.6 675.84a32 32 0 0 1-22.72 9.28 32 32 0 0 1-22.72-9.28 32 32 0 0 1 0-45.44l113.28-112.96-113.28-113.28a32 32 0 0 1 0-45.12 32 32 0 0 1 45.44 0L506.56 472l113.28-112.96a32 32 0 1 1 45.12 45.12L552 517.44zM512 64a448 448 0 1 0 448 448A448 448 0 0 0 512 64z" p-id="2846" fill="#d81e06"></path></svg>';
        var flag = false;
        var flag_g = false;
        var flag_a = false;
        var flag_b = false;
        var flag_c = false;
        var flag_d = false;
        var flag_e = false;
        var flag_f = false;
        var company_name_reg = /^[^\u0000-\u00FF]+[\.]?$/;
        var invoice_code_reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,23}$/;
        var regNumber = /\d+/;
        var regString = /[a-zA-Z]+/;
        var regNumStrAbc = /^[\\/x{4e00}\-\/x{9fa5}/A-Za-z0-9]+$/u;
        var company_address_reg = /^[x{4e00}x{9fa5}A-Za-z0-9]+$/u;
        var contact_name_reg = /^[x{4e00}x{9fa5}A-Za-z0-9]+$/u;

        var myMap = new Map();
        var items = getList(); //测试数据 可删除

        $jq('#company_name').focus(function () {
            var $parent = $jq(this);
            var $dom = $parent.next();
            $dom.html('');
            $jq.ajax({
                //url: "http://localhost:8080/static/data/demo.json",  //请求路径
                dataType: "json",
                async: true,
                // data: {"id": "value"},
                type: "GET", //请求方式
                contentType: "application/json;charset=UTF-8",
                success: function (res) {
                    appendToHtml(res, $dom);
                    showChilden($parent);
                    selectHover();
                    selected($parent, myMap);
                },
                error: function (err) {
                    //异常函数内调用函数 测试使用 可删除
                    appendToHtml(err, $dom);
                    showChilden($parent);
                    selectHover();
                    selected($parent, myMap);
                    console.log(err);
                }
            });

        });

        $jq('#company_name').blur(function () {
            //SUCCESS
            if (exec(company_name_reg, invoice_code_reg, company_address_reg, contact_name_reg, regNumber, regString, regNumStrAbc)) {
                CY_SUCCESS_CSS();
            } else {
                CY_ERROR_CSS;
            }
        });

        $jq('#company_name').change(function () {
            //SUCCESS
            if (exec(company_name_reg, invoice_code_reg, company_address_reg, contact_name_reg, regNumber, regString, regNumStrAbc)) {
                CY_SUCCESS_CSS();
            } else {
                CY_ERROR_CSS;
            }
        });

        $jq('#invoice_code').blur(function () {
            //SUCCESS
            if (exec(company_name_reg, invoice_code_reg, company_address_reg, contact_name_reg, regNumber, regString, regNumStrAbc)) {
                CY_SUCCESS_CSS();
            } else {
                CY_ERROR_CSS;
            }
        });

        $jq('#bank_code').blur(function () {
            //SUCCESS
            if (exec(company_name_reg, invoice_code_reg, company_address_reg, contact_name_reg, regNumber, regString, regNumStrAbc)) {
                CY_SUCCESS_CSS();
            } else {
                CY_ERROR_CSS;
            }
        });

        $jq('#bank').blur(function () {
            //SUCCESS
            if (exec(company_name_reg, invoice_code_reg, company_address_reg, contact_name_reg, regNumber, regString, regNumStrAbc)) {
                CY_SUCCESS_CSS();
            } else {
                CY_ERROR_CSS;
            }
        });

        $jq('#company_address').blur(function () {
            //SUCCESS
            if (exec(company_name_reg, invoice_code_reg, company_address_reg, contact_name_reg, regNumber, regString, regNumStrAbc)) {
                CY_SUCCESS_CSS();
            } else {
                CY_ERROR_CSS;
            }
        });

        $jq('#contact_name').blur(function () {
            //SUCCESS
            if (exec(company_name_reg, invoice_code_reg, company_address_reg, contact_name_reg, regNumber, regString, regNumStrAbc)) {
                CY_SUCCESS_CSS();
            } else {
                CY_ERROR_CSS;
            }
        });

        $jq('#amount').blur(function () {
            //SUCCESS
            if (exec(company_name_reg, invoice_code_reg, company_address_reg, contact_name_reg, regNumber, regString, regNumStrAbc)) {
                CY_SUCCESS_CSS();
            } else {
                CY_ERROR_CSS;
            }
        });

        function appendToHtml(res, $dom) {
            // items = res;
            for (let i = 0; i < items.length; i++) {
                var obj = items[i];
                var html = '<li value="' + obj.company_name + '" ' + '' +
                    ' class="hide-li-selected"' +
                    '" style="cursor: pointer;\n' +
                    '    padding-left: 10px;"' +
                    '   height: 20px;>' + obj.company_name + '</li>'
                $dom.append(html);
                myMap.set(obj.company_name, items[i]);
            }
        }

        function showChilden($parent) {
            var $dom = $parent.next().show();
            $jq('.hide-li-selected').click(function () {
                var $son = $jq(this);
                var f = $son.text();
                $parent.val(f);
                //SUCCESS
                if (!reg_test(company_name_reg, f)) {
                    $jq('#company_name_font').html(error + '<em ' + style + ' >公司名只能由汉字组成和中文符号组成</em>');
                } else {
                    $jq('#company_name_font').html(success);
                    flag_a = true;
                    if (exec(company_name_reg, invoice_code_reg, company_address_reg, contact_name_reg, regNumber, regString, regNumStrAbc)) {
                        CY_SUCCESS_CSS();
                    }
                }
                ;
                $dom.hide();
            });
        }

        function selectHover() {
            $jq(".hide-li-selected").hover(
                function () {
                    $jq(this).css({'background': '#f6f6f6'});
                },
                function () {
                    $jq(this).css({'background': '#FFFFFF'});
                }
            );
        }

        function selected($parent, myMap) {
            $jq('.hide-li-selected').click(function () {
                var $son = $jq(this);
                var f = $son.text();
                $parent.val(f);
                var obj = myMap.get(f);
                $jq('[name="invoice_code"]').val(obj.invoice_code);
                $jq('[name="bank"]').val(obj.bank);
                $jq('[name="bank_code"]').val(obj.bank_code);
                $jq('[name="contact_name"]').val(obj.contact_name);
                $jq('[name="company_address"]').val(obj.company_address);
                $jq('[name="amount"]').val(obj.amount);
                $jq('.hide-select').hide();

                //正则判断
                if (exec(company_name_reg, invoice_code_reg, company_address_reg, contact_name_reg, regNumber, regString, regNumStrAbc)) {
                    CY_SUCCESS_CSS();
                }

            });
        }

        $jq(document).bind('click', function (event) {
            event.stopPropagation();
            var tar = event.target;
            if ($jq(tar).closest('#company_name').length == 0) {
                $jq('#hide-select').hide();
            } else {
                $jq('#hide-select').show();
            }
        });

        //提交
        $jq('#cy_form').submit(function () {
            if (exec(company_name_reg, invoice_code_reg, company_address_reg, contact_name_reg, regNumber, regString, regNumStrAbc)) {
                return true;
            }
            return false;
        });


        function exec(company_name_reg, invoice_code_reg, company_address_reg, contact_name_reg, regNumber, regString, regNumStrAbc) {
            var bool_b, bool_d, bool_e, bool_f, bool_g = false;
            var bool_a = false;
            var bool_c = false;
            var company_name = $jq('#company_name').val();
            var invoice_code = $jq('#invoice_code').val();
            var bank_code = $jq('#bank_code').val();
            var bank = $jq('#bank').val();
            var contact_name = $jq('#contact_name').val();
            var company_address = $jq('#company_address').val();
            var amount = $jq('#amount').val();

            //SUCCESS
            if (!is_Empty(company_name)) {
                if (!reg_test(company_name_reg, company_name)) {
                    $jq('#company_name_font').html(error + '<em ' + style + ' >公司名只能由汉字组成和中文符号组成</em>');
                    CY_ERROR_CSS();
                } else {
                    $jq('#company_name_font').html(success);
                    bool_a = true;
                }
                ;
            }
            ;

            //SUCCESS
            if (!is_Empty(invoice_code)) {
                if (!reg_test(invoice_code_reg, invoice_code)) {
                    $jq('#invoice_code_font').html(error + '<em ' + style + ' >税号只能由字母和数字组成</em>');
                    CY_ERROR_CSS();
                } else {
                    $jq('#invoice_code_font').html(success);
                    bool_b = true;
                }
                ;
            }
            ;

            //SUCCESS
            if (!is_Empty(bank_code)) {
                if (!reg_test(invoice_code_reg, bank_code)) {
                    $jq('#bank_code_font').html(error + '<em ' + style + ' >开户行账号只能由字母和数字组成</em>');
                    CY_ERROR_CSS();
                } else {
                    $jq('#bank_code_font').html(success);
                    bool_c = true;
                }
                ;
            } else {
                $jq('#bank_code_font').html('');
            }
            ;

            //SUCCESS
            if (!is_Empty(bank)) {
                if (reg_test(/^[/\\x{4e00}/-\/\\x{9fa5}A-Za-z0-9]+$/u, bank)) {
                    $jq('#bank_font').html(error + '<&lt;>em ' + style + ' >开户行只能由汉字、字母、数字组成</em>');
                    CY_ERROR_CSS();
                } else {
                    $jq('#bank_font').html(success);
                    bool_d = true;
                }
                ;
            } else {
                $jq('#bank_font').html('');
            }
            ;

            //SUCCESS
            if (!is_Empty(contact_name)) {
                if (!reg_test(/^[a-zA-Z\u4e00-\u9fa5]+$/, contact_name)) {
                    $jq('#contact_name_font').html(error + '<em ' + style + ' >联系人姓名只能由汉字、字母组成</em>');
                    CY_ERROR_CSS();
                } else {
                    $jq('#contact_name_font').html(success);
                    bool_e = true;
                }
                ;
            } else {
                $jq('#contact_name_font').html('');
            }
            ;

            //SUCCESS
            if (!is_Empty(company_address)) {
                if (reg_test(regNumStrAbc, company_address)) {
                    $jq('#company_address_font').html(error + '<em ' + style + ' >公司地址只能由汉字、字母、数字组成</em>');
                    CY_ERROR_CSS();
                } else {
                    $jq('#company_address_font').html(success);
                    bool_f = true;
                }
                ;
            } else {
                $jq('#contact_name_font').html('');
            }
            ;

            var count = Number(amount);//输入金额
            var duceapp_all_amount = 0;//充值总金额
            if (count > duceapp_all_amount) {
                $jq('#amount_font').html(error + '<em ' + style + ' >开票金额必须小于等于充值总金额 &nbsp; 当前充值总金额 = ' + duceapp_all_amount + ' </em>');
                CY_ERROR_CSS();
            } else {
                $jq('#amount_font').html(success);
                bool_g = true;
            }
            ;
            console.log('bool_a:' + bool_a + '\nbool_b:' + bool_b + '\nbool_c:' + bool_c
                + '\nbool_d:' + bool_d + '\nbool_e:' + bool_e + '\nbool_f:' + bool_f + '\nbool_g:' + bool_g);

            if (bool_a && bool_b && bool_c && bool_d && bool_e && bool_f && bool_g) {
                return true;
            } else {
                return false;
            }
        }

        function reg_test(reg, text) {
            // console.log('\n'
            //     + 'text = ' + text +
            //     '\n' + 'reg = ' + reg + '\n' + reg.test(text));
            if (reg.test(text)) {
                return true;
            }
            return false;
        }

        function is_Empty(val) {
            if (val == '' || val == null) {
                return true;
            }
            return false;
        }

        function getList() {
            return [
                {
                    "company_name": "科技",
                    "invoice_code": "XD2019001122",
                    "bank": "宁波银行",
                    "bank_code": "NBBK",
                    "contact_name": "陈育",
                    "company_address": "宁波市北仑区博地影视",
                    "amount": "100.1"
                },
                {
                    "company_name": "科技",
                    "invoice_code": "XD2019001123",
                    "bank": "温州银行",
                    "bank_code": "WZBK001",
                    "contact_name": "陈忆",
                    "company_address": "宁波市北仑区银泰",
                    "amount": "0"
                }
            ];
        }

        function CY_SUCCESS_CSS() {
            $jq('#cy_success').css({'background': '#f2f2f2'});
            $jq('#cy_success').attr('disabled', false);
            $jq('#cy_success').attr('title', '可以提交啦!');
        }

        function CY_ERROR_CSS() {
            $jq('#cy_success').css({'background': '#666666'});
            $jq('#cy_success').attr('disabled', true);
            $jq('#cy_success').attr('title', '输入不合法，请检查！');
        }

    });

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

  #cy_form {
    padding-top: 20px;
  }

  .input-text {
    border: #e7e7e7 solid 1px;
    width: 300px;
    height: 24px;
    padding-left: 10px;
    float: left;
    margin-top: 0px;
  }

  .hide-select {
    display: none;
    width: 310px;
    position: absolute;
    margin-top: 24px;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: none;
    text-align: left;
    background: #FFFFFF;
    /*overflow-y:scroll;*/
  }

  .hide-li-selected {
    cursor: pointer;
    padding-left: 10px;
    font: 12px/1.5 Tahoma, 'Microsoft Yahei', 'Simsun';
    clear: both;
    margin: 5px 0;
    color: #444444;
  }

  .pn {
    border: none;
    padding: 1px;
    width: 50px;
  }

  .ta-right {
    width: 360px;
    white-space: nowrap;
    vertical-align: middle;
    padding-left: 10px;
    text-align: left;
  }

  .td-center {
    width: 310px;
  }

  .td-left-span {
    font: 12px/1.5 Tahoma, 'Microsoft Yahei', 'Simsun';
    color: #999;
    clear: both;
    margin: 5px 0;
    color: #999;
  }

  .td-left-span-i {
    color: red;
    /*margin: 0 auto;*/
    /*top: 3px;*/
    /*line-height: 10px;*/
    vertical-align: middle;
  }

  #cy_success {
    background-color: #666666;
  }


</style>
