<template>
  <div class="model">
    <form method="post" action="#" autocomplete="new-password">
      <div class="exfm" style="margin-top: 0;">
        <table cellspacing="0" cellpadding="0" class="cy-table-div">
          <tr>
            <td align="right"><b>公司名称:</b></td>
            <td>
              <input type="text" placeholder="请填写公司名称..." name="company_name" id="company_name" required
                     class="input-text"/>
              <ul class="hide-select"></ul>
              <span id="company_name_font"><i style="color: red;">*</i> 此行为必填项</span>
            </td>
          </tr>
          <tr>
            <td align="right"><b>税号:</b></td>
            <td>
              <input type="text" placeholder="请填写税号..." name="invoice_code" id="invoice_code" required
                     class="input-text"/>
              <span id="invoice_code_font"><i style="color: red;">*</i> 此行为必填项</span>
            </td>
          </tr>
          <tr>
            <td align="right"><b>开户号:</b></td>
            <td>
              <input type="text" placeholder="请填写开户号码..." name="bank_code" id="bank_code" class="input-text"/>
              <span id="bank_code_font"></span>
            </td>
          </tr>
          <tr>
            <td align="right"><b>开户行:</b></td>
            <td>
              <input type="text" placeholder="请填写开户银行..." name="bank" id="bank" class="input-text"/>
              <span id="bank_span"></span>
            </td>
          </tr>
          <tr>
            <td align="right"><b>金额:</b></td>
            <td>
              <input type="number" placeholder="请填写开票金额..." name="amount" id="amount" class="input-text"
                     οnkeyup="this.value=this.value.replace(/[^\d.]/g,'')"
                     onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')"
                     value="0.0"/>
              <span id="amount_font"></span>
            </td>
          </tr>
          <tr>
            <td align="right"><b>联系人:</b></td>
            <td>
              <input type="text" placeholder="请填写联系人..." name="contact_name" id="contact_name" class="input-text"/>
              <span id="contact_name_font"></span>
            </td>
          </tr>
          <tr>
          <tr>
            <td align="right"><b>公司地址:</b></td>
            <td>
              <input type="text" placeholder="请填写公司地址..." name="company_address" id="company_address"
                     class="input-text"/>
              <span id="company_address_font"></span>
            </td>
          </tr>
          <tr>
            <td></td>
            <td align="left">
              <button type="button" id="cy_success" class="pn" name="submit" value="true"><strong>开票</strong></button>
              <button type="submit" id="cy_edit" class="pn" name="search" value="true"><strong>编辑</strong></button>
            </td>
          </tr>
        </table>

      </div>
    </form>

  </div>
</template>

<script TYPE="text/javascript" CHARSET="UTF-8">
    $(function () {
        $('#company_name').focus(function () {
            var $parent = $(this);
            var items = [];
            var $dom = $parent.next();
            $dom.html('');
            var myMap = new Map();
            $.ajax({
                url: "/static/data/demo.json",
                dataType: "json",
                async: true,
                data: {"id": "value"},
                type: "GET", //请求方式
                success: function (res) {
                    items = res;
                    for (let i = 0; i < items.length; i++) {
                        var obj = items[i];
                        var html = '<li value="' + obj.company_name + '" ' + '' +
                            ' class="hide-li-selected"' +
                            '" style="cursor: pointer;\n' +
                            '    font-size: 13px;\n' +
                            '    padding-left: 10px;"' +
                            '>' + obj.company_name + '</li>'
                        $dom.append(html);
                        myMap.set(obj.company_name, items[i]);
                    }
                    showli($parent);
                    selectHover();
                    selected($parent, myMap);
                },
                error: function (res) {
                    showMessage('获取数据失败!');
                }
            });

        });

        function showli($parent) {
            var $dom = $parent.next().slideDown();
            $('.hide-li-selected').click(function () {
                var $son = $(this);
                var f = $son.text();
                $parent.val(f);
                $dom.slideUp(500);
            });
        }

        function selectHover() {
            $(".hide-li-selected").hover(
                function () {
                    $(this).css({'background': '#0a67fb'});
                },
                function () {
                    $(this).css({'background': '#FFFFFF'});
                }
            );
        }

        function selected($parent, myMap) {
            $('.hide-li-selected').click(function () {
                var $son = $(this);
                var f = $son.text();
                $parent.val(f);
                var obj = myMap.get(f);
                $('[name="invoice_code"]').val(obj.invoice_code);
                $('[name="bank"]').val(obj.bank);
                $('[name="bank_code"]').val(obj.bank_code);
                $('[name="contact_name"]').val(obj.contact_name);
                $('[name="company_address"]').val(obj.company_address);
                $('[name="amount"]').val(obj.amount);
                $('.hide-select').hide();
            });
        }

        //提交
        $('#cy_success').click(function () {
            var flag = new Boolean(false);
            var msg = '输入格式有误！';
            // var company_name_reg = /^[a-z0-9A-Z\u4e00-\u9fa5]+$/gi;
            var company_name_reg = /^[^\u0000-\u00FF]+[\.]?$/;
            var invoice_code_reg = /^[A-Za-z0-9]+$/u;
            var regNumber = /\d+/;
            var regString = /[a-zA-Z]+/;
            var regNumStrAbc = '';
            var company_address_reg = /^[x{4e00}x{9fa5}A-Za-z0-9]+$/u;
            var contact_name_reg = /^[x{4e00}x{9fa5}A-Za-z0-9]+$/u;

            var company_name = $('#company_name').val();
            var invoice_code = $('#invoice_code').val();
            var bank_code = $('#bank_code').val();
            var bank = $('#bank').val();
            var company_address = $('#company_address').val();
            var amount = $('#amount').val();
            var contact_name = $('#contact_name').val();
            //空值判断
            is_Null();

            //正则判断
            exec(company_name_reg, invoice_code_reg, company_address_reg, contact_name_reg, company_name, invoice_code
                , bank_code, bank, company_address, amount, contact_name, regNumber, regString, regNumStrAbc);

        });

        function is_Null() {
            if (is_Empty(company_name)) {
                alert('公司名称不能为空！');
                return false;
            }
            ;

            if (is_Empty(invoice_code)) {
                alert('开户号码不能为空！');
                return false;
            }
            ;

        }

        function exec(company_name_reg, invoice_code_reg, company_address_reg, contact_name_reg, company_name, invoice_code
            , bank_code, bank, company_address, amount, contact_name, regNumber, regString, regNumStrAbc) {

            //SUCCESS
            if (!reg_test(company_name_reg, company_name)) {
                $('#company_name_font').html('<i style="color: red;">*</i> 此行为必填项');
                alert('公司名只能由汉字组成和中文符号组成');
                return;
            }
            ;

            //SUCCESS
            // if (!regNumber.test(invoice_code_reg) && regString.test(invoice_code_reg)) {
            //     alert('开户行账号只能由字母和数字组成');
            //     return;
            // }
            // ;

            //SUCCESS
            // if (!regNumber.test(bank_code) && regString.test(bank_code)) {
            //     alert('开户行账号只能由字母和数字组成');
            //     return;
            // }
            // ;


            if (reg_test(regNumStrAbc, bank)) {
                alert('开户行只能由汉字、字母、数字组成');
                return;
            }
            ;

            //
            // if (reg_test(company_address_reg, company_address)) {
            //     alert('公司地址只能由汉字、字母、数字组成');
            //     return;
            // }
            // ;
            //
            // if (reg_test(contact_name_reg, contact_name)) {
            //     alert('联系人姓名只能由汉字、字母组成');
            //     return;
            // }
            // ;
            //
            // var count = parseFloat(amount);
            // var duceapp_all_amount = 0;//充值总金额
            // if (reg_test(count > duceapp_all_amount)) {
            //     alert('开票金额必须小于等于充值总金额');
            //     return;
            // }
            // ;
        }

        function reg_test(reg, text) {
            console.log('\n'
                + 'text = ' + text +
                '\n' + 'reg = ' + reg + '\n' + reg.test(text));
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

  form {
    padding-top: 20px;
  }

  .input-text {
    border: #e7e7e7 solid 1px;
    width: 300px;
    height: 24px;
    padding-left: 10px;
    float: left;
    margin-top: 10px;
  }

  tr {
    line-height: 40px;
  }

  .hide-select {
    display: none;
    width: 300px;
    position: absolute;
    margin-top: 34px;
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
    font-size: 12px;
    padding-left: 10px;
  }

  .pn {
    border: none;
    padding: 1px;
    width: 50px;
  }
</style>
