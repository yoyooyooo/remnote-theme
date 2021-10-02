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
  --main-background-color: #f6f5f0;
  /* 主字体色 */
  --main-font-color: #555;

  /* 高亮 */
  --highlight-text-color-red: #000;
  --highlight-background-color-red: rgba(255, 0, 0, 22%);

  --highlight-text-color-orange: #000;
  --highlight-background-color-orange: rgba(244, 167, 98, 0.45);

  --highlight-text-color-yellow: #000;
  --highlight-background-color-yellow: rgba(250, 233, 123, 0.45);

  --highlight-text-color-green: #000;
  --highlight-background-color-green: rgba(112, 230, 109, 0.45);

  --highlight-text-color-blue: #000;
  --highlight-background-color-blue: #ddd;

  --highlight-text-color-purple: #000;
  --highlight-background-color-purple: rgba(162, 102, 232, 0.45);
}
```

# 按需引入的主题小分类

为了能让人根据需求自己取想要的，尽可能把作用拆的细了。

- [背景](https://github.com/yoyooyooo/remnote-theme/blob/master/dist/main/background.css): `window` ，背景美化
- [字体](https://github.com/yoyooyooo/remnote-theme/blob/master/dist/main/font.css): ` font` ，字体美化
- [标题 h123](https://github.com/yoyooyooo/remnote-theme/blob/master/dist/main/background.css): `header` ，h123 美化
- [高亮](https://github.com/yoyooyooo/remnote-theme/blob/master/dist/main/background.css): `highlight` 自定义高亮
- [多窗口](https://github.com/yoyooyooo/remnote-theme/blob/master/dist/main/multiple-window.css): `multiple-window`，优化工具条样式。
- [普通标签美化](https://github.com/yoyooyooo/remnote-theme/blob/master/dist/main/tag.css): `tag`，标签美化
- [引用](https://github.com/yoyooyooo/remnote-theme/blob/master/dist/main/reference.css): `reference`，双链`[[...]]`美化
- [收缩时左侧菜单触发区域](https://github.com/yoyooyooo/remnote-theme/blob/master/dist/main/sidebar.css): `sidebar`，左侧菜单收缩时，触发区域扩大至整个左侧，但隐藏占位空间
