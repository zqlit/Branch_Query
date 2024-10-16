# 仿邮政PC端官网

这是一个基于 Vue.js 的中国邮政集团有限公司网站项目，包含登录、网点查询、新闻中心、社会责任、企业文化等功能。

## 目录

- [项目简介](#项目简介)
- [技术栈](#技术栈)
- [安装步骤](#安装步骤)
- [使用方法](#使用方法)
- [目录结构](#目录结构)
- [贡献指南](#贡献指南)
- [许可证](#许可证)

## 项目简介

该项目是一个模拟的中国邮政集团有限公司网站，旨在展示 Vue.js 的基本使用和一些常见的前端功能实现。

## 技术栈

- Vue.js
- Vue Router
- Axios
- LESS
- Normalize.css

## 安装步骤

1. 克隆项目到本地：

    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    ```

2. 进入项目目录：

    ```bash
    cd your-repo-name
    ```

3. 安装依赖：

    ```bash
    npm install
    ```

    或者使用 Yarn：

    ```bash
    yarn install
    ```

## 使用方法

1. 启动开发服务器：

    ```bash
    npm run serve
    ```

    或者使用 Yarn：

    ```bash
    yarn serve
    ```

2. 打开浏览器并访问 `http://localhost:8080`。

## 目录结构

```plaintext
your-repo-name/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── common.css
│   │   │   └── index.css
│   │   ├── fonts/
│   │   │   └── iconfont.css
│   │   └── js/
│   │       ├── flexible_css.debug.js
│   │       └── flexible.debug.js
│   ├── components/
│   │   └── FooterView.vue
│   ├── router/
│   │   └── index.js
│   ├── views/
│   │   ├── HomeView.vue
│   │   ├── NetworkView.vue
│   │   ├── LoginView.vue
│   │   ├── NewsView.vue
│   │   ├── CompanyView.vue
│   │   └── SocialView.vue
│   ├── App.vue
│   └── main.js
├── .gitignore
├── babel.config.js
├── package.json
├── README.md
└── vue.config.js
