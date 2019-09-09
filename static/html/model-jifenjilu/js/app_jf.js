var _jQuery = jQuery.noConflict();
_jQuery(function () {
  var j_flag = new Boolean(false);
  var m_flag = new Boolean(false);
  var flag_j = new Boolean(false);
  var flag_m = new Boolean(false);
  _jQuery('#exchange_num').blur(function () {
    var _exchange_num = _jQuery('#exchange_num').val();
    var _jewel_score = _jQuery('#jewel_score').val();
    _jewel_score = Number(_jewel_score);
    _exchange_num = Number(_exchange_num);
    j_flag = exec_change_num(_exchange_num, _jewel_score);
  });

  _jQuery('#need_num').blur(function () {
    var _need_num = _jQuery('#need_num').val();//prestige_score
    var _money_score = _jQuery('#_money_score').val();
    _money_score = Number(_money_score);
    _need_num = Number(_need_num);
    m_flag = exec_need_num(_need_num, _money_score);
  });


  _jQuery('#submit').click(function () {

    var _exchange_num = _jQuery('#exchange_num').val();
    var _jewel_score = _jQuery('#jewel_score').val();
    _jewel_score = Number(_jewel_score);
    _exchange_num = Number(_exchange_num);
    j_flag = exec_change_num(_exchange_num, _jewel_score);

    var _need_num = _jQuery('#need_num').val();//prestige_score
    var _money_score = _jQuery('#_money_score').val();
    _money_score = Number(_money_score);
    _need_num = Number(_need_num);
    m_flag = exec_need_num(_need_num, _money_score);

    var _jewel = _jQuery('#jewel option:selected').val();
    var _money = _jQuery('#money option:selected').val();
    if (is_NotEmpty(_jewel)) {
      flag_j = true;
    } else {
      alert('请选择兑换商品');
      return;
    }
    if (is_NotEmpty(_money)) {
      flag_j = true;
    } else {
      alert('请选择兑换商品');
      return;
    }

    if (j_flag && m_flag && flag_j && flag_j) {
      return true;
    }
  });

  var html1 = '<em style="color: red;font-size: 16px;">&nbsp;&nbsp;<b>兑换数量不能大于每次最多兑换数量</b></em>';
  var html2 = '<em style="color: red;font-size: 15px; font-family: Tahoma, "Microsoft YaHei", SimSun;">&nbsp;&nbsp;<b>兑换数量不能大于可兑换数量</b></em>';

  function exec_change_num(_exchange_num, _jewel_score) {
    //不得大于每次兑换的最大数量 且 不得大于 所拥有的甬钻数
    if (_exchange_num > 200) {
      _jQuery('#exchange_num_span').html(html1);
      return false;
    } else if (_exchange_num > _jewel_score) {
      _jQuery('#exchange_num_span').html(html2);
      return false;
    } else {
      _jQuery('#exchange_num_span').html('');
      return true;
    }
  }

  function exec_need_num(_need_num, _money_score) {
    //不得大于每次兑换的最大数量 且 不得大于 所拥有的甬钻数
    if (_need_num > 200) {
      _jQuery('#need_num_span').html(html1);
      return false;
    } else if (_need_num > _money_score) {
      _jQuery('#need_num_span').html(html2);
      return false;
    } else {
      _jQuery('#need_num_span').html('');
      return true;
    }
  }

  function is_NotEmpty(value) {
    if (value != '' && value != null) {
      return true;
    }
    return false;
  }

});
