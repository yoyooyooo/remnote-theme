remnote 主题

# 安装

## 全部引入

```css
@import url("https://remnote-theme.vercel.app/index.css");
```

## 按需引入

```css
@import url("https://remnote-theme.vercel.app/multiple-window.css");
/* 或 */
@import url("https://cdn.jsdelivr.net/gh/yoyooyooo/remnote-theme/dist/multiple-window.css");
```

其中的 `multiple-window` 按需求改成对应的主题小分类的名称，参考[参考主题小分类](https://github.com/yoyooyooo/remnote-theme#按需引入的主题小分类)

## 手动引入

在[参考主题小分类](https://github.com/yoyooyooo/remnote-theme#按需引入的主题小分类)里找到想要的 css，手动引入粘贴到你的 remnote 里。

## 主题配置

请手动配置全局变量，下面是全部变量：

```css
:root {
  /* 主背景色 */
  --main-background-color: rgb(211 211 211 / 23%);
  /* 多窗口各窗口的间距 */
  --mosaic-tile-padding: 4px;
}
```

# 按需引入的主题小分类

- [多窗口](https://github.com/yoyooyooo/remnote-theme/blob/master/dist/multiple-window.css): multiple-window
