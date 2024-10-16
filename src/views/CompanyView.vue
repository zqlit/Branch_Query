<template>
    <div class="company-view">
        <div id="Content">
            <div id="Content1">
                <div>
                    <div class="fgj">企业文化</div>
                    <div class="about_nav">
                        <ul>
                            <li @click="shouMe(1)" :class="{clickmeBlack:active1}"><span class="tu"><span><a href='#' target='_self' title=""><img
                                                src='../assets/2012680033.png' alt='企业文化纲要' /></a></span></span><span
                                    class="tit"><span>企业文化纲要</span></span></li>

                            <li @click="shouMe(2)" :class="{clickmeBlack:active2}"><span class="tu"><span><a href='#' target='_self' title=""><img
                                                src='../assets/2012680032.png' alt='企业文化建设' /></a></span></span><span
                                    class="tit"><span id="NodeTitle"><a href='#' target='_self'
                                            title="企业文化建设">企业文化建设</a></span></span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="Content3" v-show="nowNum == 1">
                <div class="new_list">
                    <ul>
                        <li>
                            <span id='ReportIDname'>
                                <a href='/html1/report/2402/1167-1.htm' target='_blank'
                                    title="中邮证券企业文化体系发布">中邮证券企业文化体系发布</a>
                            </span>
                            <span id='ReportIDIssueTime'>2024-02-02</span>
                        </li>
                        <li><span id='ReportIDname'><a href='/html1/report/2205/6885-1.htm' target='_blank'
                                    title="“连接美好 无处不在”：中国邮政发布全新品牌定位体系">“连接美好 无处不在”：中国邮政发布全新品牌定位体系</a></span><span
                                id='ReportIDIssueTime'>2022-05-10</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/181312/8778-1.htm' target='_blank'
                                    title="企业文化手册">企业文化手册</a></span><span id='ReportIDIssueTime'>2018-10-20</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/181312/9166-1.htm' target='_blank'
                                    title="中国邮政企业文化 “一三五”企业文化体系概貌">中国邮政企业文化 “一三五”企业文化体系概貌</a></span><span
                                id='ReportIDIssueTime'>2018-10-20</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/181312/9164-1.htm' target='_blank'
                                    title="中国邮政企业文化理念识别系统内涵解读">中国邮政企业文化理念识别系统内涵解读</a></span><span
                                id='ReportIDIssueTime'>2018-10-20</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/181312/9162-1.htm' target='_blank'
                                    title="中国邮政企业文化行为识别系统内涵解读">中国邮政企业文化行为识别系统内涵解读</a></span><span
                                id='ReportIDIssueTime'>2018-10-20</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/181312/9160-1.htm' target='_blank'
                                    title="中国邮政企业文化企业使命的内涵诠释">中国邮政企业文化企业使命的内涵诠释</a></span><span
                                id='ReportIDIssueTime'>2018-10-20</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/181312/9158-1.htm' target='_blank'
                                    title="中国邮政企业文化邮政徽标的百年演变">中国邮政企业文化邮政徽标的百年演变</a></span><span
                                id='ReportIDIssueTime'>2018-10-20</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/181312/9189-1.htm' target='_blank'
                                    title="中国邮政企业文化理念识别系统应用规范">中国邮政企业文化理念识别系统应用规范</a></span><span
                                id='ReportIDIssueTime'>2018-10-19</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/181312/8730-1.htm' target='_blank'
                                    title="中国邮政企业文化宣贯工作实施意见">中国邮政企业文化宣贯工作实施意见</a></span><span
                                id='ReportIDIssueTime'>2018-10-19</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/181312/9156-1.htm' target='_blank'
                                    title="中国邮政集团公司党组关于开展企业文化示范点建设工作的实施意见">中国邮政集团公司党组关于开展企业文化示范点建设工作的实施意见</a></span><span
                                id='ReportIDIssueTime'>2018-10-19</span></li>
                    </ul>
                </div>
            </div>
            <div id="Content3" v-show="nowNum == 2">
                <div class="new_list">
                    <ul>
                        <li><span id='ReportIDname'><a href='/html1/report/2410/3786-1.htm' target='_blank'
                                    title="以特色企业文化建设为高质量发展提供不竭动力">以特色企业文化建设为高质量发展提供不竭动力</a></span><span
                                id='ReportIDIssueTime'>2024-10-12</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/24091/847-1.htm' target='_blank'
                                    title="深入践行核心价值导向 助力企业高质量发展取得新突破">深入践行核心价值导向 助力企业高质量发展取得新突破</a></span><span
                                id='ReportIDIssueTime'>2024-09-23</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/2409/5262-1.htm' target='_blank'
                                    title="夯实基础 增强合力 助力培育高质量发展新质生产力">夯实基础 增强合力 助力培育高质量发展新质生产力</a></span><span
                                id='ReportIDIssueTime'>2024-09-10</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/2409/1296-1.htm' target='_blank'
                                    title="高点对标 敢做善成 奋力实现高质量发展">高点对标 敢做善成 奋力实现高质量发展</a></span><span
                                id='ReportIDIssueTime'>2024-09-03</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/24081/6047-1.htm' target='_blank'
                                    title="强化党建引领 弘扬企业文化 推动高质量发展">强化党建引领 弘扬企业文化 推动高质量发展</a></span><span
                                id='ReportIDIssueTime'>2024-08-27</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/24081/2112-1.htm' target='_blank'
                                    title="以企业文化自信助推高质量转型发展">以企业文化自信助推高质量转型发展</a></span><span
                                id='ReportIDIssueTime'>2024-08-20</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/2408/8992-1.htm' target='_blank'
                                    title="求是求实修炼文化“内功” 自强不息谱写发展新篇">求是求实修炼文化“内功” 自强不息谱写发展新篇</a></span><span
                                id='ReportIDIssueTime'>2024-08-14</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/2407/6347-1.htm' target='_blank'
                                    title="聚焦“两个一切” 增强“文化五力”">聚焦“两个一切” 增强“文化五力”</a></span><span
                                id='ReportIDIssueTime'>2024-07-09</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/24061/4218-1.htm' target='_blank'
                                    title="企业文化提振精气神 聚力推动高质量发展">企业文化提振精气神 聚力推动高质量发展</a></span><span
                                id='ReportIDIssueTime'>2024-06-24</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/24061/679-1.htm' target='_blank'
                                    title="坚持文化引领　以“三个激发”增强企业高质量发展新动能">坚持文化引领　以“三个激发”增强企业高质量发展新动能</a></span><span
                                id='ReportIDIssueTime'>2024-06-18</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/2406/1521-1.htm' target='_blank'
                                    title="推动党建与企业文化建设深度融合">推动党建与企业文化建设深度融合</a></span><span
                                id='ReportIDIssueTime'>2024-06-04</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/24051/7542-1.htm' target='_blank'
                                    title="为精细化管理注入深沉持久的文化力量">为精细化管理注入深沉持久的文化力量</a></span><span
                                id='ReportIDIssueTime'>2024-05-28</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/24051/2743-1.htm' target='_blank'
                                    title="打造高效执行文化 助力企业高质量发展">打造高效执行文化 助力企业高质量发展</a></span><span
                                id='ReportIDIssueTime'>2024-05-21</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/24041/8367-1.htm' target='_blank'
                                    title="以客户为中心求是求实谋发展　以创新为驱动自强不息谱新篇">以客户为中心求是求实谋发展　以创新为驱动自强不息谱新篇</a></span><span
                                id='ReportIDIssueTime'>2024-04-30</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/24041/3509-1.htm' target='_blank'
                                    title="深入学习贯彻习近平文化思想 以高质量企业文化建设推动中邮证券高质量发展">深入学习贯彻习近平文化思想
                                    以高质量企业文化建设推动中邮证券高质量发展</a></span><span id='ReportIDIssueTime'>2024-04-23</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/24041/3508-1.htm' target='_blank'
                                    title="集团公司直属机关健步走比赛成功举办">集团公司直属机关健步走比赛成功举办</a></span><span
                                id='ReportIDIssueTime'>2024-04-23</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/24032/7540-1.htm' target='_blank'
                                    title="职工心中的温暖小家">职工心中的温暖小家</a></span><span id='ReportIDIssueTime'>2024-03-29</span>
                        </li>
                        <li><span id='ReportIDname'><a href='/html1/report/24016/144-1.htm' target='_blank'
                                    title="凝聚“十力”践行十大价值观">凝聚“十力”践行十大价值观</a></span><span
                                id='ReportIDIssueTime'>2024-01-29</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/24015/5177-1.htm' target='_blank'
                                    title="坚持问题导向育文化促发展">坚持问题导向育文化促发展</a></span><span
                                id='ReportIDIssueTime'>2024-01-22</span></li>
                        <li><span id='ReportIDname'><a href='/html1/report/2401/7020-1.htm' target='_blank'
                                    title="以企业文化筑牢寄递高质量发展根基">以企业文化筑牢寄递高质量发展根基</a></span><span
                                id='ReportIDIssueTime'>2024-01-09</span></li>
                        <!-- <li id='PageNum'>
                        </li> -->
                    </ul>
                </div>
                <div id='ali' style="text-align: center;">
                    <a href="#">1 </a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">7</a>
                    <a href="#">8</a>
                    <a href="#">9</a>
                    <a href="#">10</a>
                    <a href="#">下一页</a>
                    <a href="#" id="CBLast">最后</a>
                    <span id='go'>
                        <input size='4' maxlength='4' />
                        <input type='button' value='GO'>
                    </span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'CompanyView',
    data() {
        return {
            nowNum: 1,
            addBlack: false,
            active1: true,
            active2: false,
        };
    },
    methods: {
        shouMe(value) {
            switch (value) {
                case 1:
                    this.nowNum = 1;
                    this.active1 = true;
                    this.active2 = false;
                    break;
                case 2:
                    this.nowNum = 2;
                    this.active1 = false;
                    this.active2 = true;
                    break;
            }
        }
    },
    computed: {

    },
    created() {

    }
};
</script>

<style scoped>
#Content {
    width: 1200px;
    margin: auto;
    overflow: hidden;
}

a {
    text-decoration: none;
    color: #040404;
}

body {
    font-family: 'Microsoft YaHei', 'Helvetica', 'Arial';
}

#Content1 {
    width: 282px;
    float: left;
}

.clickmeBlack {
    font-weight: 600;
    font-size: 18px;
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

li {
    list-style: none;
}

.about_nav ul li {
    border-bottom: 1px solid #EAEAEE;
    height: 70px;
    overflow: hidden;
    line-height: 70px;
}

ol,
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.about_nav {
    width: 280px;
    margin-left: 2px;
    background: #FFFFFF;
    box-shadow: 0 2px 8px 0 rgba(2, 18, 40, 0.06);
    border-radius: 4px;
    margin-bottom: 100px;
}

.about_nav ul li .tu {
    width: 40px;
    padding: 0px 18px 0px 60px;
    /* float: left; */
    display: inline-block;
}

a {
    text-decoration: none;
    color: #040404;
}

img {
    vertical-align: middle;
}

.about_nav ul li .tu img {
    max-width: 100%;
    margin: 0;
}

#Content3 {
    width: 896px;
    float: right;
}

.new_list {
    margin-top: 106px;
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

.new_list li #ReportIDIssueTime {
    float: right;
    color: #8E8E92;
    font-size: 12px;
}

li#PageNum,
#ali {
    width: 100%;
    text-align: center;
    background: none;
    padding-top: 30px;
    height: 40px;
    /* margin-top: 30px; */
}

li#PageNum::before {
    display: none;
}

li#PageNum span,
li#PageNum a,
#ali a {
    padding: 4px 9px;
    border: 1px solid #EAEAEE;
    border-radius: 4px;
    text-decoration: none;
    /* 取消下划线 */
    color: #333;
    /* 设置默认颜色 */
}

li#PageNum span,
#ali span {
    background: #18AE66;
    color: #FFFFFF;
    border-radius: 4px;
    border: 0;
}

li#PageNum #go,
#ali #go {
    padding: 0;
    background: none;
    border: 0px;
    margin: 0;
    border-radius: 0;
    position: relative;
    top: -3px;
}

li#PageNum #go input,
#ali #go input {
    height: 29px;
    border: 1px solid #EAEAEE;
    border-radius: 4px;
}

li#PageNum #go input[type="button"],
#ali #go input[type="button"] {
    height: 29px;
    margin-left: 4px;
    font-size: 14px;
    color: #8E8E92;
    padding: 0px 8px;
}
</style>