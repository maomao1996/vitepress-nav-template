# 自定义基础指引

面向对 Vitepress 了解不多、仅想套用模板做站点的定制化指引。  
（注：本文内容目标：达成基本的样式套用，深入修改请参照 Vue 文档等）  
（请在贵站中标注本项目仓库地址等信息）

## 一、首页配置

这里指前端导航页访问的初始页面。

![首页](https://raw.githubusercontent.com/maomao1996/picture/main/vitepress-nav-template/home.webp)

### 1.主体部分

修改位置：/docs/index.md

范例：

```ts
hero:
  name: 茂茂的 //左侧第一行
  text: 个人前端导航  //左侧第二行
  tagline: 使用 VitePress 打造个人前端导航  //第三行小注内容
  image:
    src: /logo.png //页面大图地址（图像最好切圆后使用）
    alt: 茂茂物语
  actions:  //跳转按钮，可按需增减
    - text: 茂茂物语
      link: https://notes.fe-mm.com
    - text: 前端导航
      link: /nav/
      theme: alt  //此行代表跳转至新标签页显示
    - text: mmPlayer
      link: https://netease-music.fe-mm.com
      theme: alt
features:
  - icon: 📖  //图标（输入法的表情icon即可）
    title: 前端物语  //小标题
    details: 整理前端常用知识点<br />如有异议按你的理解为主，不接受反驳  //注释
```

### 2.导航栏与页脚

**2.1 导航栏**：

修改位置：/docs/.vitepress/configs/nav.ts

范例（按需增减）：

```ts
export const nav: DefaultTheme.Config['nav'] = [
  { text: '个人主页', link: 'https://fe-mm.com' }, //切行无影响
  {
    text: '茂茂物语', //显示文本
    link: 'https://notes.fe-mm.com' //链接
  }
]
```

**2.2 社交链接&页脚**：

修改位置：/docs/nav/index.md

```ts
export default defineConfig({
    ---
    socialLinks: [{ icon: 'github', link: 'https://github.com/maomao1996/vitepress-nav-template' }], //社交链接

    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2019-present maomao'
    },  //页脚，可按Vue支持格式修改
})
```

## 二、站点列表页

一般对应 `https://域名(ip)/nav/`

![站点列表页](https://raw.githubusercontent.com/maomao1996/picture/main/vitepress-nav-template/nav.webp)

### 1.站点列表数据

修改文件: /docs/nav/data.js

此处的站点信息涉及四个属性：  
|属性值|作用|
|:--|--|
|icon|图标地址（可填绝对/相对路径）|
|title|站点标题|
|desc|站点描述|
|link|链接地址（必填）|

除 link 外，其余属性可按需填入。

基本结构如下:

```ts
export const NAV_ATA: NavData[] = [
  {
    title: '类别1' //分类标题
    items: [
      {
        icon: '',
        title: '',
        desc: '',
        link: ''
      }
    ]
  },
  {
    title: ''  //分类标题
    items: [
      {
        icon: '',
        title: '',
        desc: '',
        link: ''
      },
      {
        icon: '',
        title: '',
        desc: '',
        link: ''
      }
    ]
  }
]
```

### 2.页面自定义

**2.1 添加其他元素**：

修改位置：/docs/nav/index.md

Nav 页本身属于 MD 文件渲染，因此除引用的 data 文件用于数据列表显示，还可以添加其他内容。

例如以下范例：

```ts
# 前端导航  //标题

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>  //引用data.ts文件显示站点列表

<br />

::: tip
该导航由 [maomao](https://github.com/maomao1996) 开发，如有引用、借鉴的请保留版权声明：<https://github.com/maomao1996/vitepress-nav-template>
:::  //引用Notes提示块
```

**2.2 其他部分**：

修改位置：/docs/.vitepress/config.ts

## 三、站点属性配置

**3.1 站点图标（favicon）**：

修改位置：/docs/.vitepress/configs/head.ts  
在对应位置更改即可。

**3.2 站点标题与图标**：

修改位置：/docs/.vitepress/config.ts

站点标题：

```ts
export default defineConfig({
  ---
  lang: 'zh-CN',  //语言，建议中文（zh-CN）
  title: '',  //站点标题
  description: '',  //简介
  head,
})
```

站点图标：

```ts
export default defineConfig({
  ---
  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',  //更改此处
```

---

（本文档作者：[@轻虹空雨](https://github.com/MuFeng086)）
