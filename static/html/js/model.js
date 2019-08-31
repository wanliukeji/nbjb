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
        // data: {"id": "value"},
        type: "GET", //请求方式
        complete:function() {
          alert(this.headers);
        },
        success: function (res) {
          items = res;
          for (let i = 0; i < items.length; i++) {
            var obj = items[i];
            var html = '<li value="' + obj.company_name + '" ' + '' +
              ' class="hide-li-selected"' +
              '" style="cursor: pointer;\n' +
              '    font-size: 14px;\n' +
              '    padding-left: 10px;"' +
              '   height: 20px;>' + obj.company_name + '</li>'
            $dom.append(html);
            myMap.set(obj.company_name, items[i]);
          }
          showChilden($parent);
          selectHover();
          selected($parent, myMap);
        },
        error: function (res) {
          showMessage('获取数据失败!');
        }
      });

    });

    function showChilden($parent) {
      var $dom = $parent.next().show();
      $('.hide-li-selected').click(function () {
        var $son = $(this);
        var f = $son.text();
        $parent.val(f);
        $dom.hide();
      });
    }

    function selectHover() {
      $(".hide-li-selected").hover(
        function () {
          $(this).css({'background': '#f6f6f6'});
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

    $(document).bind('click', function (event) {
      event.stopPropagation();
      var tar = event.target;
      if ($(tar).closest('#company_name').length == 0) {
        $('#hide-select').hide();
      } else {
        $('#hide-select').show();
      }
    });

    //提交
    $('#cy_form').submit(function () {
      var flag = new Boolean(false);
      var company_name_reg = /^[^\u0000-\u00FF]+[\.]?$/;
      var invoice_code_reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,23}$/;
      var regNumber = /\d+/;
      var regString = /[a-zA-Z]+/;
      var regNumStrAbc = /^[\\/x{4e00}\-\/x{9fa5}/A-Za-z0-9]+$/u;
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
      flag = exec(company_name_reg, invoice_code_reg, company_address_reg, contact_name_reg, company_name, invoice_code
        , bank_code, bank, company_address, amount, contact_name, regNumber, regString, regNumStrAbc);
      return flag;
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

    var html = '<i style="color: red;">*</i> 此行为必填项';
    var style = 'style="color: red; font-size: 14px; margin-left: 0px;"';
    var success = '<svg style="margin-top: 10px;" t="1567221340551" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2070" width="14" height="14"><path d="M511 69C267.4 69 69.9 266.5 69.9 510.1c0 243.6 197.5 441.1 441.1 441.1 243.6 0 441.1-197.5 441.1-441.1C952.2 266.5 754.7 69 511 69z m282 292.7L463.4 691.3l-18.6 18.6c-19.6 19.6-51.4 19.6-71 0l-18.6-18.6-126.8-126.8c-16.3-16.3-14.8-43.9 4.6-58.1 15.4-11.2 36.9-8.7 50.3 4.8l125.9 125.9 330.3-330.3c16.3-16.3 43.9-14.8 58.1 4.6 11.4 15.4 8.8 36.9-4.6 50.3z" p-id="2071" fill="#1afa29"></path></svg>';
    var error = '<svg style=" margin-bottom: 1px;" t="1567221892863" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2845" width="14" height="14"><path d="M664.96 630.4a32 32 0 0 1-22.4 54.72 32 32 0 0 1-22.72-9.28L506.56 562.56 393.6 675.84a32 32 0 0 1-22.72 9.28 32 32 0 0 1-22.72-9.28 32 32 0 0 1 0-45.44l113.28-112.96-113.28-113.28a32 32 0 0 1 0-45.12 32 32 0 0 1 45.44 0L506.56 472l113.28-112.96a32 32 0 1 1 45.12 45.12L552 517.44zM512 64a448 448 0 1 0 448 448A448 448 0 0 0 512 64z" p-id="2846" fill="#d81e06"></path></svg>';

    function exec(company_name_reg, invoice_code_reg, company_address_reg, contact_name_reg, company_name, invoice_code
      , bank_code, bank, company_address, amount, contact_name, regNumber, regString, regNumStrAbc) {

      //SUCCESS
      if (!reg_test(company_name_reg, company_name)) {
        $('#company_name_font').html(error + '<em ' + style + ' >公司名只能由汉字组成和中文符号组成</em>');
        return false;
      } else {
        $('#company_name_font').html(success);
      }
      ;

      //SUCCESS
      if (!is_Empty(invoice_code)) {
        if (!reg_test(invoice_code_reg, invoice_code)) {
          $('#invoice_code_font').html(error + '<em ' + style + ' >税号只能由字母和数字组成</em>');
          return false;
        } else {
          $('#invoice_code_font').html(success);
        }
        ;
      }
      ;

      //SUCCESS
      if (!is_Empty(bank_code)) {
        if (!reg_test(invoice_code_reg, bank_code)) {
          $('#bank_code_font').html(error + '<em ' + style + ' >开户行账号只能由字母和数字组成</em>');
          return false;
        } else {
          $('#bank_code_font').html(success);
        }
        ;
      }


      //SUCCESS
      console.log(regNumStrAbc.test(bank) + '\n' + bank);
      if (!is_Empty(bank)) {
        if (reg_test(/^[/\\x{4e00}/-\/\\x{9fa5}A-Za-z0-9]+$/u, bank)) {
          $('#bank_font').html(error + '<em ' + style + ' >开户行只能由汉字、字母、数字组成</em>');
          return false;
        } else {
          $('#bank_font').html(success);
        }
        ;
      }

      //SUCCESS
      if (!is_Empty(contact_name)) {
        if (!reg_test(/^[a-zA-Z\u4e00-\u9fa5]+$/, contact_name)) {
          $('#contact_name_font').html(error + '<em ' + style + ' >联系人姓名只能由汉字、字母组成</em>');
          return false;
        } else {
          $('#contact_name_font').html(success);
        }
        ;
      }

      //SUCCESS
      if (!is_Empty(company_address)) {
        if (reg_test(regNumStrAbc, company_address)) {
          $('#company_address_font').html(error + '<em ' + style + ' >公司地址只能由汉字、字母、数字组成</em>');
          return false;
        } else {
          $('#company_address_font').html(success);
        }
        ;
      }

      var count = Number(amount);//输入金额
      var duceapp_all_amount = 0;//充值总金额
      if (count > duceapp_all_amount) {
        $('#amount_font').html(error + '<em ' + style + ' >开票金额必须小于等于充值总金额</em>');
        return false;
      } else {
        $('#amount_font').html(success);
      }
      ;
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

  }
);

