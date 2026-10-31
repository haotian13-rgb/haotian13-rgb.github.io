# 个人介绍网站（手机适配版）

## 文件说明
- `index.html`：网页内容
- `style.css`：样式、动态背景、响应式布局
- `script.js`：菜单、主题切换、滚动动画

## 手机预览
将三个文件放在同一个文件夹中。最简单的方式是把文件上传到 GitHub 仓库并启用 GitHub Pages。

## 发布到 GitHub Pages（免费）
1. 在 GitHub 注册/登录账号：https://github.com/
2. 创建一个新仓库，建议命名为 `你的用户名.github.io`。
3. 将 `index.html`、`style.css`、`script.js` 上传到仓库根目录。
4. 打开仓库的 Settings → Pages。
5. 在 Build and deployment 中选择 `Deploy from a branch`，分支选择 `main`，目录选择 `/ (root)`，点击 Save。
6. 等待部署完成，访问 `https://你的用户名.github.io/`。

## 发布前需要修改的内容
打开 `index.html`：
- 将 `浩天` 替换成你想展示的昵称。
- 修改个人介绍、兴趣、作品名称与描述。
- 将 `mailto:2729234476@qq.com` / `script.js` 中的 `2729234476@qq.com` 替换成你愿意公开的邮箱。
- 不要把私人手机号、家庭住址、证件号等敏感信息公开。

## 自定义作品
在 `index.html` 中找到 `works-grid` 区域，可以修改三张作品卡片的标题和说明。当前卡片是视觉占位，不会自动播放视频。
