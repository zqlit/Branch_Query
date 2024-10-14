<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">登录页面</router-link></li>
        <li><router-link to="/network">网点查询</router-link></li>
        <li><router-link to="/home">首页页面</router-link></li>
        <li><router-link to="/news">新闻中心</router-link></li>
        <li><router-link to="/social">社会责任</router-link></li>
        <li><router-link to="/company">企业文化</router-link></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
</style>