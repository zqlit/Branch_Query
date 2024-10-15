<template>
  <div id="app">
    <div class="container">
      <div class="top-bar" v-show="showHeader">
        <div class="top-bar-left">

        </div>
        <div class="top-bar-right">
          <template>
            <div class="dropdown_a" id="menu_dropdown1">
              <span class="tit">控股公司及寄递事业部</span>
              <div class="dropdown-content">
                <a href="http://www.psbc.com/cn/index.html" target="_blank">中国邮政储蓄银行</a>
                <a href="https://www.chinapost-life.com" target="_blank">中邮人寿保险股份有限公司</a>
                <a href="http://www.cnpsec.com.cn/main/index.html" target="_blank">中邮证券有限责任公司</a>
                <a href="http://cpcm.chinapost.com.cn/" target="_blank">中邮资本管理有限公司</a>
                <a href="http://www.ems.com.cn/" target="_blank">集团公司寄递事业部</a>
              </div>
            </div>
          </template>
          <template>
            <div class="dropdown_a" id="menu_dropdown2" style="height: 32px;">
              <span class="tit" style="width:110px;">集团工会及直属单位</span>
              <div class="dropdown-content">

              </div>
            </div>
          </template>
          <template>
            <div class="dropdown_a" id="menu_dropdown3" style="width: 81px; height: 32px;">
              <span class="tit" style="width:50px;">各地邮政</span>
              <div class="dropdown-content">

              </div>
            </div>
          </template>
          <template>
            <span class="en"><a href="http://english.chinapost.com.cn/" target="_blank">English</a></span>
          </template>
        </div>
      </div>
      <div class="head" v-show="showHeader">
        <div class="main-nav">
          <div class="logo">
            <div class="logo_20"><a href="/html1/folder/181312/8171-1.htm"><img
                  src="https://www.chinapost.com.cn/res/ChinaPostJT/structure/200568120.png"></a></div>
          </div>
          <div class="nav">
            <nav>
              <ul>
                <li class="active"><router-link to="/">首页页面</router-link></li>
                <li><router-link to="/network">网点查询</router-link></li>
                <li><router-link to="/login">登录页面</router-link></li>
                <li><router-link to="/news">新闻中心</router-link></li>
                <li><router-link to="/social">社会责任</router-link></li>
                <li><router-link to="/company">企业文化</router-link></li>
              </ul>
            </nav>
          </div>
          <div class="search">
            <input type="text" placeholder="输入搜索关键词" />
            <button>搜索</button>
          </div>
        </div>
        <hr class="foot" v-show="showFoot">
      </div>
      <div class="content" :class="contentClass">
        <router-view />
      </div>
    </div>
    <div class="footer-father">
      <div class="footer-main">
        <FooterView />
      </div>
    </div>
  </div>
</template>

<script>
import FooterView from './views/FooterView.vue';
export default {
  name: 'App',
  data() {
    return {
      showHeader: true,
      showFoot: true
    };
  },
  methods: {

  },
  watch: {
    $route(to) {
      this.showHeader = to.path !== '/login';
      this.showFoot = to.path !== '/';
    }
  },
  computed: {
    contentClass() {
      return this.$route.path === '/login' ? 'content-full-width' : 'content';
    }
  },
  components: {
    FooterView
  }
};

</script>

<style lang="less">
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
}

/* 导航样式 */
nav {
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline;
    margin: 0 10px;
  }

  a {
    text-decoration: none;
    color: #42b983;
  }

  a.router-link-exact-active {
    font-weight: bold;
  }
}

/* 容器样式 */
.container {
  width: 100%;
}

/* 顶部栏样式 */
.top-bar {
  display: flex;
  background-color: #F6F6FA;
  line-height: 32px;
  height: 32px;
  font-size: 12px;
}

.top-bar-left {
  width: 50%;
}

.top-bar-right {
  display: flex;
  width: 50%;
}

/* 分割线样式 */
.foot {
  border-top: 1px solid #EAEAEE;
  text-align: center;
}

/* 下拉菜单样式 */
.dropdown_a {
  width: 195px;
  margin-left: 25px;
  overflow: hidden;
  z-index: 1000;
  height: 32px;
  position: relative;

  .tit {
    cursor: pointer;
  }

  .dropdown-content {
    display: none;
    width: 220px;
    position: absolute;
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    top: 32px;
    left: 0px;
    z-index: 999;
  }

  &:hover .dropdown-content {
    display: block;
    overflow: visible;
  }
}

.dropdown_a:before {
  content: "";
  height: 16px;
  width: 1px;
  background: #D8D8DC;
  position: absolute;
  top: 9px;
  right: 0px;
}

.dropdown_a#menu_dropdown1,
.dropdown_a#menu_dropdown2 {
  width: 179px;
}

.dropdown_a span.tit:before {
  content: "";
  position: absolute;
  top: 11px;
  right: 51px;
  border-left: 1px solid #8E8E92;
  border-bottom: 1px solid #8E8E92;
  height: 3px;
  width: 3px;
  transform: translate(1px, -1px) rotate(-45deg);
  -webkit-transform: translate(1px, -1px) rotate(-45deg);
  border-right: 1px solid transparent;
  border-top: 1px solid transparent;
  display: inline-block;
  -moz-transform: translate(1px, -1px) rotate(-45deg);
  -ms-transform: translate(1px, -1px) rotate(-45deg);
  -o-transform: translate(1px, -1px) rotate(-45deg);
}

.dropdown_a#menu_dropdown2 span.tit::before {
  top: 11px;
  right: 63px;
}

.dropdown_a#menu_dropdown3 span.tit::before {
  top: 11px;
  right: 27px;
}

/* 英文链接样式 */
.en {
  text-align: right;
  float: right;
  padding-left: 23px;
}

.en a {
  text-decoration: none;
  color: #000;
}

.head {
  width: 1200px;
  margin: 0 auto;
}

.main-nav {
  display: flex;
}

.logo_20 {
  width: 200px;
  padding-top: 11px;
  float: left;
}

.logo {
  width: 200px;
}

.logo_20 img {
  width: 129px;
}

.nav li {
  font-size: 16px;
  padding: 0 12px;
}

.nav li a:hover {
  color: #18AE66;
}

.nav li a {
  color: #2E2E30;
}

.nav {
  width: 710px;
  padding-top: 20px;
}

.search {
  display: inline-block;
  width: 278px;
  height: 28px;
  border: 1px solid #EAEAEE;
  border-radius: 4px;
  overflow: hidden;
  padding: 2px;
  margin-top: 15px;
}

.search input {
  width: 210px;
  line-height: 28px;
  text-indent: 10px;
  border: none;
  outline: none;
  float: left;
  height: 28px;
  font-size: 12px;
  color: #000;
}

.search button {
  width: 64px;
  height: 28px;
  float: right;
  border: none;
  background: #18AE66;
  line-height: 28px;
  border-radius: 2px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  color: #fff;
}

.nav ul li>a::before {
  content: "";
  width: 16px;
  height: 4px;
  background: #18AE66;
  border-radius: 2px;
  position: absolute;
  bottom: -12px;
  left: 38%;
}

.nav ul li:hover a {
  color: #18AE66;
  position: relative;
}

.active {
  color: #18AE66;
  position: relative;
}

.content {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}

.footer {
  width: 100%;
  margin: 0 auto;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.footer-main {
  width: 1200px;
  margin: 0 auto;
}

.content-full-width {
  width: 100%;
}

.footer-father {
  // position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f8f8f8;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.footer-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
}
</style>