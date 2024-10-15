<template>
    <div id="Content">
        <div id="Content1">
            <div>
                <div class="fgj">社会责任</div>
                <div class="about_nav">
                    <ul>
                        <li><span class="tu"><span><a href='/html1/category/24051/127-1.htm' target='_self'
                                        title=""><img src='../assets/img/1.png' alt='普遍服务' /></a></span></span><span
                                class="tit"><span id="CurrentlyNode">普遍服务</span></span></li>
                        <li><span class="tu"><span><a href='/html1/category/181312/8238-1.htm' target='_self'
                                        title=""><img src='../assets/img/2.png' alt='精准扶贫' /></a></span></span><span
                                class="tit"><span id="NodeTitle"><a href='/html1/category/181312/8238-1.htm'
                                        target='_self' title="精准扶贫">精准扶贫</a></span></span></li>
                        <li><span class="tu"><span><a href='/html1/category/181312/8239-1.htm' target='_self'
                                        title=""><img src='../assets/img/3.png' alt='绿色发展' /></a></span></span><span
                                class="tit"><span id="NodeTitle"><a href='/html1/category/181312/8239-1.htm'
                                        target='_self' title="绿色发展">绿色发展</a></span></span></li>
                        <li><span class="tu"><span><a href='/html1/category/181312/8240-1.htm' target='_self'
                                        title=""><img src='../assets/img/4.png' alt='风险防控' /></a></span></span><span
                                class="tit"><span id="NodeTitle"><a href='/html1/category/181312/8240-1.htm'
                                        target='_self' title="风险防控">风险防控</a></span></span></li>
                        <li><span class="tu"><span><a href='/html1/category/181312/8241-1.htm' target='_self'
                                        title=""><img src='../assets/img/5.png' alt='公益事业' /></a></span></span><span
                                class="tit"><span id="NodeTitle"><a href='/html1/category/181312/8241-1.htm'
                                        target='_self' title="公益事业">公益事业</a></span></span></li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="Content3">
            <div class="san_nav">
                <ul>
                    <li @click="shouMe(1)"><span id="CurrentlyNode">服务风采</span></li>
                    <li @click="shouMe(2)"><span id="NodeTitle"><a href='#' target='_self' title="法律法规">法律法规</a></span>
                    </li>
                </ul>
            </div>
            <div class="new_list" style="margin-top:47px;">
                <ul v-show="nowNum == 1">
                <li><span id='ReportIDname'><a href='/html1/report/2410/3785-1.htm' target='_self'
                            title="江苏邮政政企联合推进普服提质达标">江苏邮政政企联合推进普服提质达标</a></span><span
                        id='ReportIDIssueTime'>2024-10-12</span></li>
                <li><span id='ReportIDname'><a href='/html1/report/2409/4544-1.htm' target='_self'
                            title="高质量履行好主责主业 确保完成全年目标任务">高质量履行好主责主业 确保完成全年目标任务</a></span><span
                        id='ReportIDIssueTime'>2024-09-07</span></li>
                <li><span id='ReportIDname'><a href='/html1/report/24071/6686-1.htm' target='_self'
                            title="四川邮政开发普服学习微课件">四川邮政开发普服学习微课件</a></span><span id='ReportIDIssueTime'>2024-07-23</span>
                </li>
                <li><span id='ReportIDname'><a href='/html1/report/2407/7942-1.htm' target='_self'
                            title="北京邮政推进普服高质量发展">北京邮政推进普服高质量发展</a></span><span id='ReportIDIssueTime'>2024-07-11</span>
                </li>
                <li><span id='ReportIDname'><a href='/html1/report/2407/6342-1.htm' target='_self'
                            title="落实中央巡视整改部署要求 以学促行推动普遍服务入脑入心">落实中央巡视整改部署要求 以学促行推动普遍服务入脑入心</a></span><span
                        id='ReportIDIssueTime'>2024-07-09</span></li>
                <li><span id='ReportIDname'><a href='/html1/report/2407/5344-1.htm' target='_self'
                            title="内蒙古“警邮合作”推动边远地区普服功能覆盖">内蒙古“警邮合作”推动边远地区普服功能覆盖</a></span><span
                        id='ReportIDIssueTime'>2024-07-08</span></li>
                <li><span id='ReportIDname'><a href='/html1/report/24061/4216-1.htm' target='_self'
                            title="伊春市39处林场所全部通邮">伊春市39处林场所全部通邮</a></span><span id='ReportIDIssueTime'>2024-06-24</span>
                </li>
                <li><span id='ReportIDname'><a href='/html1/report/24051/6244-1.htm' target='_self'
                            title="普遍服务不留白">普遍服务不留白</a></span><span id='ReportIDIssueTime'>2024-05-27</span></li>
                <li><span id='ReportIDname'><a href='/html1/report/24051/5179-1.htm' target='_self' title="体验爱 留下爱">体验爱
                            留下爱</a></span><span id='ReportIDIssueTime'>2024-05-24</span></li>
                <li><span id='ReportIDname'><a href='/html1/report/24051/5178-1.htm' target='_self'
                            title="带走情歌故里的浪漫">带走情歌故里的浪漫</a></span><span id='ReportIDIssueTime'>2024-05-24</span></li>
                <li><span id='ReportIDname'><a href='/html1/report/24051/5177-1.htm' target='_self'
                            title="古装婚庆沉浸式体验">古装婚庆沉浸式体验</a></span><span id='ReportIDIssueTime'>2024-05-24</span></li>
                <li><span id='ReportIDname'><a href='/html1/report/24051/5176-1.htm' target='_self'
                            title="助力爱情成长 见证爱情永恒">助力爱情成长 见证爱情永恒</a></span><span id='ReportIDIssueTime'>2024-05-24</span>
                </li>
                <li><span id='ReportIDname'><a href='/html1/report/2405/2998-1.htm' target='_self'
                            title="甘肃邮政普服指标居前列">甘肃邮政普服指标居前列</a></span><span id='ReportIDIssueTime'>2024-05-08</span>
                </li>
                <li><span id='ReportIDname'><a href='/html1/report/24041/4659-1.htm' target='_self'
                            title="鲜花邮局云南鲜花邮全国">鲜花邮局云南鲜花邮全国</a></span><span id='ReportIDIssueTime'>2024-04-24</span>
                </li>
                <li><span id='ReportIDname'><a href='/html1/report/24041/4658-1.htm' target='_self'
                            title="千垛花海邮局实时直播引客来">千垛花海邮局实时直播引客来</a></span><span id='ReportIDIssueTime'>2024-04-24</span>
                </li>
                <li><span id='ReportIDname'><a href='/html1/report/24041/4657-1.htm' target='_self'
                            title="牡丹邮局打造牡丹文化体验空间">牡丹邮局打造牡丹文化体验空间</a></span><span
                        id='ReportIDIssueTime'>2024-04-24</span></li>
                <li><span id='ReportIDname'><a href='/html1/report/24041/4656-1.htm' target='_self'
                            title="樱花邮局定制樱花季专属记忆">樱花邮局定制樱花季专属记忆</a></span><span id='ReportIDIssueTime'>2024-04-24</span>
                </li>
                <li><span id='ReportIDname'><a href='/html1/report/24041/1807-1.htm' target='_self'
                            title="强化主责主业 担当政治责任 奋力谱写普遍服务高质量发展新篇章">强化主责主业 担当政治责任 奋力谱写普遍服务高质量发展新篇章</a></span><span
                        id='ReportIDIssueTime'>2024-04-19</span></li>
                <li><span id='ReportIDname'><a href='/html1/report/2404/8351-1.htm' target='_self'
                            title="新疆邮政强化普遍服务特殊服务质量管理">新疆邮政强化普遍服务特殊服务质量管理</a></span><span
                        id='ReportIDIssueTime'>2024-04-15</span></li>
                <li><span id='ReportIDname'><a href='/html1/report/24032/5893-1.htm' target='_self'
                            title="“集戳盖章式旅行”激发主题邮局新动能">“集戳盖章式旅行”激发主题邮局新动能</a></span><span
                        id='ReportIDIssueTime'>2024-03-27</span></li>
                <li id='PageNum'><!--{total:22}--><span>1</span> <a href='/html1/category/181312/8352-2.htm'>2</a> <a
                        href='/html1/category/181312/8352-3.htm'>3</a> <a href='/html1/category/181312/8352-4.htm'>4</a>
                    <a href='/html1/category/181312/8352-5.htm'>5</a> <a href='/html1/category/181312/8352-6.htm'>6</a>
                    <a href='/html1/category/181312/8352-7.htm'>7</a> <a href='/html1/category/181312/8352-8.htm'>8</a>
                    <a href='/html1/category/181312/8352-9.htm'>9</a> <a
                        href='/html1/category/181312/8352-10.htm'>10</a> <a href='/html1/category/181312/8352-2.htm'
                        id='CBNext'>下一页</a> <a href='/html1/category/181312/8352-22.htm' id='CBLast'>最后</a> <span
                        id='go'><input size='4' maxlength='4' mask='int' /><input type='button' value='GO'
                            onclick="disabled=true;window.open('/html1/category/181312/8352-1.htm'.replace('-1','-'+Math.min(parseInt(previousSibling.value)||1,22)),'_self')" /></span>
                </li>
                </ul>
                <ul v-show="nowNum == 2">
                    <li><span id='ReportIDname'><a href='/html1/report/2409/402-1.htm' target='_self'
                                title="普遍服务">普遍服务</a></span><span id='ReportIDIssueTime'>2024-09-02</span></li>
                    <li><span id='ReportIDname'><a href='/html1/report/23091/5032-1.htm' target='_self'
                                title="邮政服务如何适用用人单位责任">邮政服务如何适用用人单位责任</a></span><span
                            id='ReportIDIssueTime'>2023-09-22</span></li>
                    <li><span id='ReportIDname'><a href='/html1/report/2309/5137-1.htm' target='_self'
                                title="邮政企业侵权赔偿责任范围的确定">邮政企业侵权赔偿责任范围的确定</a></span><span
                            id='ReportIDIssueTime'>2023-09-08</span></li>
                    <li><span id='ReportIDname'><a href='/html1/report/23081/3685-1.htm' target='_self'
                                title="侵权责任纠纷中与有过错规则的适用">侵权责任纠纷中与有过错规则的适用</a></span><span
                            id='ReportIDIssueTime'>2023-08-25</span></li>
                    <li><span id='ReportIDname'><a href='/html1/report/2308/8306-1.htm' target='_self'
                                title="邮政企业涉及的精神损害赔偿责任">邮政企业涉及的精神损害赔偿责任</a></span><span
                            id='ReportIDIssueTime'>2023-08-15</span></li>
                    <li><span id='ReportIDname'><a href='/html1/report/2307/8373-1.htm' target='_self'
                                title="邮政企业承担侵权责任的构成要件">邮政企业承担侵权责任的构成要件</a></span><span
                            id='ReportIDIssueTime'>2023-07-14</span></li>
                    <li><span id='ReportIDname'><a href='/html1/report/23061/8781-1.htm' target='_self'
                                title="邮政服务与不当得利制度">邮政服务与不当得利制度</a></span><span id='ReportIDIssueTime'>2023-06-30</span>
                    </li>
                    <li><span id='ReportIDname'><a href='/html1/report/23061/122-1.htm' target='_self'
                                title="邮政企业对信用评价享有的法定权利">邮政企业对信用评价享有的法定权利</a></span><span
                            id='ReportIDIssueTime'>2023-06-16</span></li>
                    <li><span id='ReportIDname'><a href='/html1/report/2306/979-1.htm' target='_self'
                                title="肖像权法律制度适用">肖像权法律制度适用</a></span><span id='ReportIDIssueTime'>2023-06-02</span>
                    </li>
                    <li><span id='ReportIDname'><a href='/html1/report/2305/1784-1.htm' target='_self'
                                title="邮件投交至家庭成员之法律适用">邮件投交至家庭成员之法律适用</a></span><span
                            id='ReportIDIssueTime'>2023-05-05</span></li>
                    <li><span id='ReportIDname'><a href='/html1/report/23041/866-1.htm' target='_self'
                                title="邮政企业名誉权法律保护">邮政企业名誉权法律保护</a></span><span id='ReportIDIssueTime'>2023-04-21</span>
                    </li>
                    <li><span id='ReportIDname'><a href='/html1/report/2304/2866-1.htm' target='_self'
                                title="邮政企业是否需要承担产品质量责任">邮政企业是否需要承担产品质量责任</a></span><span
                            id='ReportIDIssueTime'>2023-04-07</span></li>
                    <li><span id='ReportIDname'><a href='/html1/report/23031/3703-1.htm' target='_self'
                                title="邮政服务合同订立的形式">邮政服务合同订立的形式</a></span><span id='ReportIDIssueTime'>2023-03-24</span>
                    </li>
                    <li><span id='ReportIDname'><a href='/html1/report/2303/5624-1.htm' target='_self'
                                title="寄件人应履行的包装义务">寄件人应履行的包装义务</a></span><span id='ReportIDIssueTime'>2023-03-10</span>
                    </li>
                    <li><span id='ReportIDname'><a href='/html1/report/23021/9996-1.htm' target='_self'
                                title="寄件人交寄邮件时应如何履行告知义务">寄件人交寄邮件时应如何履行告知义务</a></span><span
                            id='ReportIDIssueTime'>2023-02-24</span></li>
                    <li><span id='ReportIDname'><a href='/html1/report/23021/1026-1.htm' target='_self'
                                title="如何正确认识收件人验收邮件">如何正确认识收件人验收邮件</a></span><span
                            id='ReportIDIssueTime'>2023-02-10</span></li>
                    <li><span id='ReportIDname'><a href='/html1/report/23014/448-1.htm' target='_self'
                                title="邮政服务欠费合规管理">邮政服务欠费合规管理</a></span><span id='ReportIDIssueTime'>2023-01-06</span>
                    </li>
                    <li><span id='ReportIDname'><a href='/html1/report/22121/6124-1.htm' target='_self'
                                title="邮件损失与精神损害赔偿">邮件损失与精神损害赔偿</a></span><span id='ReportIDIssueTime'>2022-12-26</span>
                    </li>
                    <li><span id='ReportIDname'><a href='/html1/report/22113/3100-1.htm' target='_self'
                                title="邮件延误如何承担违约责任">邮件延误如何承担违约责任</a></span><span
                            id='ReportIDIssueTime'>2022-11-28</span></li>
                    <li><span id='ReportIDname'><a href='/html1/report/22103/6353-1.htm' target='_self'
                                title="保价邮件损失赔偿如何适用违约责任">保价邮件损失赔偿如何适用违约责任</a></span><span
                            id='ReportIDIssueTime'>2022-10-28</span></li>
                    <li id='PageNum'><!--{total:4}--><span>1</span> <a href='/html1/category/181312/8351-2.htm'>2</a> <a
                            href='/html1/category/181312/8351-3.htm'>3</a> <a
                            href='/html1/category/181312/8351-4.htm'>4</a> <a href='/html1/category/181312/8351-2.htm'
                            id='CBNext'>下一页</a> <a href='/html1/category/181312/8351-4.htm' id='CBLast'>最后</a> <span
                            id='go'><input size='4' maxlength='4' mask='int' /><input type='button' value='GO'
                                onclick="disabled=true;window.open('/html1/category/181312/8351-1.htm'.replace('-1','-'+Math.min(parseInt(previousSibling.value)||1,4)),'_self')" /></span>
                    </li>
                </ul>
            </div>



    </div>
    <div id="Content2"></div>
    </div>
</template>


<script>
export default {
    name: 'CompanyView',
    data() {
        return {
            nowNum: 1,
            addBlack: false
        };
    },
    methods: {
        shouMe(value) {
            this.nowNum = value;
            this.addBlack = !this.addBlack;
        }
    },
    computed: {

    },
    created() {

    }
};
</script>

</script>

<style scoped>
#Content {
    width: 1200px;
    margin: auto;
    overflow: hidden;
}

#Content1 {
    width: 282px;
    float: left;
}

div {
    display: block;
    unicode-bidi: isolate;
}

.fgj {
    display: block;
    font-size: 22px;
    color: #2E2E30;
    height: 62px;
    line-height: 1;
    padding-top: 25px;
    position: relative;
    padding-left: 15px;
    margin-right: 179px;
}

.about_nav {
    width: 280px;
    margin-left: 2px;
    background: #FFFFFF;
    box-shadow: 0 2px 8px 0 rgba(2, 18, 40, 0.06);
    border-radius: 4px;
    margin-bottom: 100px;
}

ol,
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    unicode-bidi: isolate;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
}

.about_nav ul li {
    border-bottom: 1px solid #EAEAEE;
    height: 70px;
    overflow: hidden;
    line-height: 70px;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
    color: #040404;
    float: left;

}

.about_nav ul li .tu {
    width: 40px;
    padding: 0px 18px 0px 60px;
    float: left;
    display: inline-block;
}

img {
    vertical-align: middle;
}

.about_nav ul li .tu img {
    max-width: 100%;
    margin: 0;
}

.fgj::before {
    content: "";
    width: 8px;
    height: 20px;
    position: absolute;
    left: 0px;
    top: 26px;
    background: #18AE66;
    border-radius: 4px;
}

.fgj {
    display: block;
    font-size: 22px;
    color: #2E2E30;
    height: 62px;
    line-height: 1;
    padding-top: 25px;
    position: relative;
    padding-left: 15px;
}

.fgj::before {
    content: "";
    width: 8px;
    height: 20px;
    position: absolute;
    left: 0px;
    top: 26px;
    background: #18AE66;
    border-radius: 4px;
}

.about_nav ul li .tit #CurrentlyNode,
.about_nav ul li .tit #CurrentlyPathNode {
    font-weight: 600;
}

#CurrentlyNode {
    margin-right: 5px;
}

about_nav ul li .tit {
    float: left;
    width: 120px;
}

#Content3 {
    width: 896px;
    float: right;
}

.new_list li {
    background: none;
    position: relative;
    padding-left: 20px;
    margin-bottom: 21px;
    font-size: 18px;
    overflow: hidden;
    zoom: 1;
    height: 20px;
    line-height: 20px;
}

.new_list li a {
    color: #2E2E30;
}

.new_list li #ReportIDIssueTime {
    float: right;
    color: #8E8E92;
    font-size: 12px;
}

ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    unicode-bidi: isolate;
}

ol,
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.new_list {
    margin-top: 106px;
}

script {
    display: none;
}

.new_list li a {
    color: #2E2E30;
}

a.webkit-any-link {
    color: webkit link;
    cursor: pointer;
    text-decoration: underline;
}


body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
p,
blockquote,
th,
td {
    padding: 0;
    margin: 0;
}

#Content2 {
    overflow: hidden;
}

#Footer {
    overflow: hidden;
    background: #F6F6FA;
}

li#PageNum,
#ali {
    width: 100%;
    text-align: center;
    background: none;
    padding-top: 30px;
    height: 40px;
}

.new_list li {
    background: none;
    position: relative;
    padding-left: 20px;
    margin-bottom: 21px;
    font-size: 18px;
    overflow: hidden;
    zoom: 1;
    height: 20px;
    line-height: 20px;
}

li#PageNum::before {
    display: none;
}

.new_list li::before {
    content: "";
    background: #D8D8DC;
    width: 4px;
    height: 4px;
    position: absolute;
    top: 9px;
    left: 5px;
    border-radius: 4px;
}

li#PageNum span,
li#PageNum a,
#ali a {
    padding: 4px 9px;
    border: 1px solid #EAEAEE;
    border-radius: 4px;
}

li#PageNum #go input,
#ali #go input {
    height: 29px;
    border: 1px solid #EAEAEE;
    border-radius: 4px;
}

input:not([type="image" i], [type="range" i], [type="checkbox" i], [type="radio" i]) {
    overflow-clip-margin: 0px !important;
    overflow: clip !important;
}


li#PageNum span,
li#PageNum a,
#ali a {
    padding: 4px 9px;
    border: 1px solid #EAEAEE;
    border-radius: 4px;
}

li#PageNum,
#ali {
    width: 100%;
    text-align: center;
    background: none;
    padding-top: 30px;
    height: 40px;
    margin: auto;
    width: 63%;
    /* 或者具体的宽度值 */
}


.san_nav {
    overflow: hidden;
    height: 35px;
    margin-bottom: 20px;
    border-bottom: 1px solid #EAEAEE;
    margin-left: 2px;
    padding-top: 25px;
}

.san_nav #CurrentlyNode,
.san_nav #CurrentlyNode {
    font-size: 20px;
    color: #2E2E30;
    border-bottom: 4px solid #009966;
    font-weight: bold;
    line-height: 24px;
    padding-bottom: 7px;
}

.san_nav li span {
    float: left;
    padding: 0px 12px;
    color: #2E2E30;
    margin-right: 10px;
}

.san_nav li span {
    float: left;
    padding: 0px 12px;
    color: #2E2E30;
    margin-right: 10px;
}
.san_nav #CurrentlyNode, .san_nav #CurrentlyNode {
    font-size: 20px;
    color: #2E2E30;
    border-bottom: 4px solid #009966;
    font-weight: bold;
    line-height: 24px;
    padding-bottom: 7px;
}
.san_nav li span {
    float: left;
    padding: 0px 12px;
    color: #2E2E30;
    margin-right: 10px;
}

.san_nav #CurrentlyNode, .san_nav #CurrentlyNode {
    font-size: 20px;
    color: #2E2E30;
    border-bottom: 4px solid #009966;
    font-weight: bold;
    line-height: 24px;
    padding-bottom: 7px;
}
.san_nav li span {
    float: left;
    padding: 0px 12px;
    color: #2E2E30;
    margin-right: 10px;
}
body {
    font-family: 'Microsoft YaHei', 'Pingfang CS', 'Helvetica', 'Arial';
}
</style>
