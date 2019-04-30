<div style="padding: 10px 0; margin: 20px auto; width: 90%; text-align: center;">
  <div>{{ theme.reward_comment }}</div>
  <button id="rewardButton" disable="enable" style="width: 35px;line-height: 35px;text-align: center;font-weight: bold;color: #34495e;border-radius: 5px;
margin:0 20px 20px 0;position: relative;overflow: hidden;color: #8c96a0;text-shadow:1px 1px 1px #fff;border:1px solid #dce1e6;box-shadow: 0 1px 2px #fff inset,0 -1px 0 #a8abae inset;background: -webkit-linear-gradient(top,#f2f3f7,#e4e8ec);background: -moz-linear-gradient(top,#f2f3f7,#e4e8ec);background: linear-gradient(top,#f2f3f7,#e4e8ec);" onclick="var qr = document.getElementById('QR'); if (qr.style.display === 'none') {qr.style.display='block';} else {qr.style.display='none'}">
    <i class="fa fa-qrcode fa-2x" style="line-height:35px;"></i>
  </button>
  <div id="QR" style="display: none;">
    {% if theme.wechatpay %}
      <div id="wechat" style="display: inline-block;width:150px;height:150px">
        <img id="wechat_qr" src="{{ theme.wechatpay }}" alt="{{ theme.author }} WeChat Pay"/>
        <p>WeChat Pay</p>
      </div>
    {% endif %}
    {% if theme.alipay %}
      <div id="alipay" style="display: inline-block;width:300px;height:300px">
        <img id="alipay_qr" src="{{ theme.alipay }}" alt="{{ theme.author }} Alipay"/>
        <p>151TvYb3oqo5FZAYuWLcjymiWWFDzxpJak</p>
      </div>
    {% endif %}
    {% if theme.BCH %}
      <div id="BCH" style="display: inline-block">
        <img id="BCH_qr" src="{{ theme.BCH }}" alt="{{ theme.author }} BCH"/>
        <p>BCH</p>
      </div>
    {% endif %}
  </div>
</div>