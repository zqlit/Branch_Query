<template>
    <div class="login-view">
        <!-- 身体 -->
        <div class="">
            <section>
                <div class="content">
                    <div class="head logo-and-title">
                        <img src="https://passport.11185.cn/cas/images/chinapost_logo2.png" />
                        <h2>欢迎登录</h2>
                    </div>
                </div>
                <div class="bgimg">
                    <div class="login" style="height:400px;width: 288px">
                        <div id="upwd_login" style="text-align:center;">
                            <div class="login-top">
                                <div style="margin: 10px 0 55px;">
                                    <a href="javascript:swithAccountLoginWay();" class="login-way"
                                        style="border-bottom: #1E9FFF">密码登录</a>
                                    <div id="pwd-line"
                                        style="width: 48px; height: 4px; background: #18AE66; margin: 8px 18px;">
                                    </div>
                                </div>
                                <div style="margin: 10px 30px 55px 5px;">
                                    <a href="javascript:swithAccountLoginWay('code');" class="login-way">短信登录</a>
                                    <div id="code-line"
                                        style="width: 48px; height: 4px; background: #18AE66; margin: 8px 18px; display: none;">
                                    </div>
                                </div>
                                <div>
                                    <a style="color:#fff;" href="javascript:pane_switch('code_login');"><img
                                            src="https://passport.11185.cn/cas/images/ewm.png" height="74" width="74"></a>
                                </div>
                            </div>
                            <div id="upwVerify" class="register-wrap">
                                <form method="post" id="fm1" action="https://passport.11185.cn/cas/login">
                                    <input type="hidden" name="lt"
                                        value="LT-157-95jmPd7QtE7DAplfwSbxLfgWTy6nCy-cas.zxpt.11185.cn">
                                    <input type="hidden" name="execution"
                                        value="a71c8d2b-3d12-4450-9900-7ced8520cd45_ZXlKaGJHY2lPaUpJVXpVeE1pSjkuZEN0UFFWVkdSVE5xWlRoRlZrbzJjekI2ZFdadFpUUnZUVTUzTm5OVmVIcGpNakpWVlc1Qk4zVldia2syU3pSSFJHWmpPVW8wVFVOVFRsVkZSV0pIUVhablIxTm1TREpvZFhVM1J6bHpXa3cxUjFGTUt6QTNhMFkzUTFwMGRHbzBkMGhVZEV4SFEwNXFTWE4zYVVRMlYwNWlNbk5YTmtGc1pYRm9kMjFtWjJWR1oyWmpVMmRJVUUxQmVFSXJVemwyVTFJM09EUmxaRUpVVnpkWlRIVjVZMk53Wm5kTWJrTlJVWGhpTlVkWVRuSXpNVkUyWnpKNk1uY3plbTh4TDFWaWRqSjZVMFpoVERNM2VqaERUbGd2ZFdNeE5YaHpabkJzYnpFeVZWcDRVSFpEUkVRelVuRnFaR0ZFTTJzcmVXTTBkelJFYWpSMGNXdDFLM04yUjFseFRrSkJNVUZsWXpKNGRqRnNka0kzU1VsRVUzQjRObEpWUTNWTlZGcG9TR1pwWXpoT2JVeFRUREp5VEZwcFpIVTVRbEZFUlRBd2JIQlpWMDQ0TUcxSlpXTllha1V5UkdobVVEWlJURFZVTldsRGJFbE9jVUoyZDNVMFoxSnhlVkEyYUdwQmRrWm1iRTFSVjJVd1kxRklVRWd4TW5CNFNtVk9WMVJZV0M5VWJ6RnhPRmMyZDA1Vk9VSjNjakpsU1RCTWFVdFRkM05aVFN0YU4yWXljR1YzVjJ4aWFGQmlTVWczTWs4clJtNXZWVzF2VG5weEwwWXpRelZuVkhWSWFIRm5lWFExTTNaMWVXSjZNRzlOYTA5MWRWSlJablJwVEM5V2MxaHVNRmxtVWtkaFptbFVaUzlSVEVRNUwxUk5ZM0p5TldKQlVEaFRWelJTTWtaWlEyTldZVFJTUWtGVVIyOURibTVrU0c1YVRETTFablEyZGtGMldXbFNOaXR0WnpCRWMwVmxPVzFCZFZkUFYxRkdSWFF2ZUZwQk9EaDNMMlI2Y1ZGYWNrUkVhSFJKWjBZMGFHUlNia2RhYTFOa1NtOVBTMU5oY1dFek9USklSMjR6Tm1oNlFXcEVXbXRpTUhaMVFVZFlWa1V3WVRRM1lUSk5OV0UwYkdwMFZEaG1kR2hwWjIxMlpuUjNjRE5hVEVkTWFXaDFLM2xPZERoUWEwbHVaSGxPY21Vd2VFYzBOMVU0VUd4SmMwTkRXR1kxUjJSVWFFaG1URWswWkdaQlEwTlhTRzAyWlRKb2NWVkRaSGhtVmxCMFZrSm5Xbkp6YVdaM1pYcFBPRGgwY0RNNFkydGlaM0pHYVVscWFWVTVRVWwzVEhadWFVd3dVMnQ2WkVneUszVmtTRE01Ulc1WlluUTFXRWxZU1VGU2EwTndTVE54VjA5blZTOUJZekJ3WVZwNWNIQk5aMGRzY21sS1RIcDNSRWxXTmxoT1drRnVPSEU1VTBWamVIWlNkWEpKUmtacVR6a3ZRV2w0TTNKR1lYaHplSGdyUTFVd2NFMTBNQzlFTVRZeWQySk5hWEZFUjBselEzTnRSa0ZLZG5JNVJDdEJPRFJETjNGRlpHaHFWRk16YzNSbVJHbE9UMWx2Wm1VNVltWTBRM1YxTkVWNmFuZE9UR3gyZERWck16VlBjU3RhYnpGa2MybHlhMlZaTDJkVU1VdE1NVUpLVUhKa1NsRXJhSGxaT1ZsUVowbGpZM2hDVTNoTk16Um5UV0pMT1VsNVRVSmFObllyZFM5U2EyRXhUSFJZWjFwR2NYWXJSamdyYW5seU1HWXJOSGxYVHpoU1NHUnFhVm81V2xVeGVHOXJVVXByYm5Wd2N6Y3diM2t6TmpjM2RsTnNPWEpRTlhaaWRXOWlSbFJuUzBzNVJsbHJSazU2YmtsQ2VEQk9aM2R6UjFwNlpWZG9kSEZuY1hkbmIwVTVlVU5ZVmtSc1lWQnVOV2RLWmsxT1ZGSjFlRTF1ZERVMlUxTXlWQzlXWjNGdmJETmhSbWx3ZDFKT2JERlBTVkJ1T1ZnelVHZzBXSGQxYkRaR1UzTmxVMDVFLlc4dzl6MkNMSHpsaldmOXRNWk13dE9lSDZEMURFSGo0ZHh5QmtfUFJPMFNlWUVFZlJxbzdHSzY4czhSMlU1TVNKODRMX0x4V1F6em1sLVd0dm1VSEFR">
                                    <input type="hidden" name="_eventId" value="submit">
                                </form>
                                <div class="login-input">
                                    <img src="https://passport.11185.cn/cas/images/yhm@2x2.png"
                                        style="vertical-align: middle;float: left;">
                                    <input type="text" tabindex="1" id="username" placeholder="用户名/手机号/邮箱">
                                </div>
                                <div class="login-input">
                                    <img src="https://passport.11185.cn/cas/images/mm@2x2.png"
                                        style="vertical-align: middle;float: left;">
                                    <input type="password" tabindex="2" id="password" placeholder="密码">
                                </div>
                                <div id="slide_block" style="width:240px;margin:0px auto 15px;display:none;"></div>

                                <button id="upwLoginButton" tabindex="4" onclick="upwLoginKks();">立即登录</button>
                                <p class="zhuce" style="margin: 20px 16px 10px 0px">


                                    <a href="javascript:gotoOnway('https://passport.11185.cn/cas/forgetPwd');"
                                        style="border:0">忘记密码</a>
                                    <a href="javascript:gotoOnway('https://passport.11185.cn/cas/register');"
                                        style="border:0; padding:0">快速注册</a>
                                </p>
                            </div>
                            <div id="smsVerify" class="register-wrap" style="display:none">
                                <div style="font-size:0px;" class="login-input">
                                    <img src="https://passport.11185.cn/cas/images/phone32x32.png"
                                        style="vertical-align: middle;float: left;height: 32px;width: 32px;"><input
                                        type="text" maxlength="11" tabindex="1" id="sms_mobile" placeholder="手机号码">
                                </div>
                                <div id="slide_block_1" style="width:240px;margin:0px auto 15px;display:none"></div>
                                <div style="font-size:0px;" class="login-input">
                                    <img src="https://passport.11185.cn/cas/images/mm@2x2.png"
                                        style="vertical-align: middle;float: left;"><input type="text" maxlength="6"
                                        tabindex="3" readonly="readonly" id="input_smscode"
                                        style="width:100px;vertical-align:top;border-right:0px;" placeholder="短信验证码"><button
                                        id="link_get_code_sms"
                                        style="height: 32px; width: 90px; line-height: 32px; float:none; margin-top: 0px;"
                                        onclick="sendSmsCodeKks()">获取手机短信</button>

                                </div>
                                <div class="zhuce" style="margin: 0 22px;;text-align:left;">
                                    手机首次登录即完成注册，代表同意
                                    <span style="color:#299A7A; cursor:pointer"
                                        onclick="openAgreements('中国邮政会员注册与服务协议','agreements')">《中国邮政会员注册与服务协议》</span>
                                </div>
                                <div>
                                    <button id="smsLoginButton" tabindex="4" onclick="smsVerifyLogin();">立即登录</button>
                                </div>
                                <p class="zhuce" style="margin: 20px 16px 10px 0px">


                                    <a href="javascript:gotoOnway('https://passport.11185.cn/cas/forgetPwd');"
                                        style="border:0">忘记密码</a>
                                    <a href="javascript:gotoOnway('https://passport.11185.cn/cas/register');"
                                        style="border:0; padding:0">快速注册</a>
                                </p>
                            </div>
                        </div>
                        <div id="code_login" style="text-align:center;display:none;">
                            <a style="color:#fff;" href="javascript:pane_switch('upwd_login');"><img
                                    src="https://passport.11185.cn/cas/images/v2/pc@2x.png" height="74" width="74"
                                    style="position: absolute; right: 0;"></a>
                            <p class="title">扫码安全登录</p>
                            <div class="register-wrap2">
                                <img id="__qrcode" style="height: 200px; width: 200px; border: 1px solid #eee;">
                                <p class="saomatxt">打开中国邮政APP,扫一扫登录</p>
                                <p class="zhuce">
                                    <a href="javascript:gotoOnway('https://passport.11185.cn/cas/register');"
                                        class="greencolor">快速注册</a>
                                </p>
                            </div>
                        </div>
                        <div id="check_auth" style="text-align:center;display:none;">
                            <a href="javascript:pane_switch('upwd_login');"><img
                                    src="https://passport.11185.cn/cas/images/v2/pc@2x.png" height="74" width="74"
                                    style="position: absolute; right: 0;"></a>
                            <p class="title">扫码登录</p>
                            <div class="register-wrap2">
                                <img src="https://passport.11185.cn/cas/images/sjrz@2x.png" height="92" width="79">
                                <p class="saomasecctxt">已扫描成功，请勿刷新页面</p>
                                <p class="queren" style="margin-bottom: 15px">请在手机上确认登录</p>

                            </div>
                        </div>
                        <div id="auth_timeout" style="text-align:center;display:none;">
                            <a href="javascript:pane_switch('upwd_login');"><img
                                    src="https://passport.11185.cn/cas/images/v2/pc@2x.png" height="74" width="74"
                                    style="position: absolute; right: 0;"></a>
                            <p class="title">扫码登录</p>
                            <div class="register-wrap2">
                                <div class="erweima">
                                    <div class="translucent">
                                        <div class="shibai">
                                            <p class="shixiao">二维码已失效</p>
                                            <button onclick="pane_switch('code_login');">请刷新</button>
                                        </div>
                                    </div>
                                </div>
                                <p class="saomatxt">打开中国邮政APP,登录后扫码</p>
                                <p class="zhuce">
                                    <a href="javascript:gotoOnway('https://passport.11185.cn/cas/register');"
                                        class="greencolor">快速注册</a>
                                </p>
                            </div>
                        </div>
                        <div class="tpauth">
                            <p class="zhuce">


                                <a href="javascript:goThirdAuthorize('qq',1)" class="thirdparty">
                                    <img src="https://passport.11185.cn/cas/images/qq20x20.png"
                                        style="vertical-align:bottom; width:17px; margin-right:8px;" />QQ
                                </a>

                                <a href="javascript:goThirdAuthorize('ule',1)" class="thirdparty">
                                    <img src="https://passport.11185.cn/cas/images/ule20x20.png"
                                        style="vertical-align:bottom; width:17px; margin-right:8px;" />邮乐网
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div id="captcha_sms_code" style="display:none;"></div>
                <div id="kks_display" style="display:none;"></div>
            </section>

            <!-- 尾部 -->
            <footer>
                <table width="100%" height="71px">
                    <tr>
                        <td rowspan="2" class="tbimg"><img src="https://passport.11185.cn/cas/images/v2/footer3.png" /></td>
                        <td class="tbtxt">品质保障</td>
                        <td rowspan="2" class="tbimg"><img src="https://passport.11185.cn/cas/images/v2/footer4.png" /></td>
                        <td class="tbtxt">特色服务</td>
                        <td rowspan="2" class="tbimg"><img src="https://passport.11185.cn/cas/images/v2/footer2.png" /></td>
                        <td class="tbtxt">集团文化</td>
                        <td rowspan="2" class="tbimg"><img src="https://passport.11185.cn/cas/images/v2/footer1.png" /></td>
                        <td class="tbtxt">覆盖全乡</td>
                    </tr>
                    <tr height="" class="tr_2">
                        <td height="10px;">邮政优选</td>
                        <td>不一样的感受</td>
                        <td>正品权威</td>
                        <td>安全送达</td>
                    </tr>
                </table>
                <div class="footer-line"></div>
                <div class="footerbottom">
                    <div>
                        <a href="#">客服电话:11185-9</a>
                        <span>|</span>
                        <a href="https://mall.11185.cn/portal/#/productIntroduce?naviId=360">配送方式</a>
                        <span>|</span>
                        <a href="https://mall.11185.cn/portal/#/productIntroduce?naviId=356">注意事项</a>
                        <span>|</span>
                        <a href="https://mall.11185.cn/portal/#/productIntroduce?naviId=351">支付方式</a>
                        <span>|</span>
                        <a href="https://mall.11185.cn/portal/#/productIntroduce?naviId=350">新手入门</a>
                    </div>
                    <p>
                        友情链接： <a target="_blank" href="http://www.chinapost.com.cn/">中国邮政集团公司</a>
                        <span>|</span>
                        <a target="_blank" href="http://www.psbc.com/cn/index.html">中国邮政储蓄银行</a>
                        <span>|</span>
                        <a target="_blank" href="http://www.ems.com.cn/">EMS</a>
                        <span>|</span>
                        <a target="_blank" href="http://make.chinapost.com.cn/html1/folder/18044/1316-1.htm">中国邮政广告网</a>
                    </p>
                    <p style="font-size: 12px; opacity: 0.8;">
                        Copyright 2003-2016 中国邮政版权所有 备案/许可证编号为:京ICP备11025334号 经营许可证编号:京ICP证110573号
                    </p>
                    <img class="approve" src="https://passport.11185.cn/cas/images/footer5.png" />

                </div>
            </footer>

        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return {

        };
    },
    methods: {

    }
};
</script>

<style scoped>
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
input {
    margin: 0;
    padding: 0;
    outline: none;
    font-family: MicrosoftYaHei;
}

button {
    height: 32px;
    width: 240px;
    display: inline-block;
    padding: 1px 6px;
    margin: 10px 0 0;
    font-size: 12px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #18AE66;
    border: none;
}

button:hover {
    background-color: #1e945b;
}

button:active {
    background-color: #1795bb;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

img {
    overflow-clip-margin: content-box;
    overflow: clip;
}

div {
    text-align: center;
    display: block;
    unicode-bidi: isolate;
}

a {
    text-decoration: none;
    color: #333;
}

.content {
    overflow: hidden;
    width: 100%;
    background: #fff;
    /* border-bottom: 1px solid #E5E5E5; */
}

/*H2里放的二级首页名称*/
.content h2 {
    display: inline-block;
    margin-left: 20px;
    font-family: MicrosoftYaHei;
    font-size: 20px;
    color: #2E2E30;
    line-height: 22px;
}

.logo-and-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.logo-and-title img {
    margin-right: 10px;
    /* 可选：添加一些间距 */
}

section {
    display: block;
    unicode-bidi: isolate;
}

.login {
    /* height: 370px; */
    width: 336px;
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.10);
    position: absolute;
    top: 28px;
    right: 100px;
}

.login-top {
    height: 60px;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-end;
}

.head img {
    height: 45px;
    vertical-align: middle;
}

.login-way {
    font-family: MicrosoftYaHei;
    font-size: 16px;
    color: #2E2E30;
    line-height: 20px;
    margin: 10px;
}

.login-input {
    width: 240px;
    height: 32px;
    margin: 20px auto;
}

.register-wrap {
    width: 300px;
    margin: 0px auto 13px;
}

.register-wrap input {
    padding-left: 15px;
    float: left;
    width: 190px;
    height: 30px;
    border: 1px solid #e6e6e6;
}

.register-wrap .zhuce {
    margin-top: 10px;
    text-align: right;
    font-size: 12px;
}

.tpauth .zhuce {
    text-align: left;
}

.zhuce a {
    position: static;
    margin-right: 7px;
    /* color: #666; */

}

.tpauth {
    margin-bottom: 15px;
    border-top: 1px solid #e6e6e6;
}

.tpauth .zhuce {
    margin: 12px;
    font-size: 11px;
}

.thirdparty {
    /* position: static; */
    color: #666;
    margin-right: 8px;
    padding-right: 8px;
}

.bgimg {
    background: url(../assets/login_bg.png) no-repeat;
    background-position: 152px 90px;
    background-size: 399px 318px;
    height: 480px;
    width: 1200px;
    margin: 0 auto;
    position: relative;
}

/* 尾部样式 */
tr {
    display: table-row;
    /* vertical-align: inherit; */
    unicode-bidi: isolate;
    border-color: inherit;
}

td {
    /* display: table-cell;
    vertical-align: inherit;
    unicode-bidi: isolate;
    max-height: 100px;
    overflow: hidden; */
}

tbody {
    display: table-row-group;
    vertical-align: middle;
    unicode-bidi: isolate;
    border-color: inherit;
}

table {
    display: table;
    /* border-collapse: separate; */
    /* box-sizing: border-box; */
    /* text-indent: initial; */
    /* unicode-bidi: isolate; */
    /* border-spacing: 2px; */
    /* border-color: gray; */
    /* border-collapse: separate; */
    /* text-indent: initial; */
    /* border-spacing: 2px; */
    /* table-layout: fixed; */
    /* word-break: break-all; */
}

footer {
    width: 100%;
    line-height: 20px;
    background-color: #fff;
    clear: both;
    margin-top: 30px;
    display: block;
    unicode-bidi: isolate;
}

footer table {
    width: 980px;
    margin: 20px auto;
    text-align: left;
}

footer td {
    width: 200px;
}

.tr_2 {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #8E8E92;
    line-height: 14px;
    position: relative;
    /* 启用相对定位 */
    top: -7px;
}


.tbimg {
    width: 40px;
}

.tbtxt {
    font-family: MicrosoftYaHei;
    color: #2E2E30;
    width: 300px;
    font-size: 18px;
    line-height: 18px;
}

.footer-line {
    background: #EAEAEE;
    height: 1px;
    width: 1200px;
    margin: 45px auto;
}

.footerbottom {
    /* background-image: linear-gradient(90deg, #006649 0%, #037760 23%, #0DA9A1 56%, #1BC595 85%, #2BD15D 100%); */
    background: #ffffff;
    height: 180px;
    font-family: MicrosoftYaHei;
    font-size: 12px;
    color: #8E8E92;
    text-align: center;
    /* padding-top: 70px; */
    position: relative;
}

.footerbottom a {
    color: #8E8E92;
    padding: 5px;
}

.footerbottom p {
    padding-top: 10px;
}

.footerbottom .approve {
    width: 80px;
    height: 30px;
    position: relative;
    top: 40px;
    left: 10px;
}
</style>