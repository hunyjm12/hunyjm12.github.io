# 姚佳明 (Jiaming Yao) - 个人学术主页 / Academic Homepage

这是一个为 **姚佳明 (Jiaming Yao)** 打造的高颜值、响应式学术主页，基于你的硕士论文 Repo (`hunyjm12/Master_Project_ALCS`)、硕士论文 PDF (`JiamingYao_Master_Thesis.pdf`) 以及个人简历 (`Resume_JiamingYao.pdf`) 深度定制。

---

## 🌟 页面亮点与功能

1. **整体设计**：
   - 现代学术风格（类似于 `aayusharya.gitlab.io` 和顶级天文学家个人主页）。
   - **深色/浅色模式切换 (Dark/Light Mode)**，自动记忆用户偏好。
   - **响应式布局**：完美适配 PC、平板和手机端。
2. **核心模块**：
   - **个人简介 (About & Bio)**：包含哥本哈根大学 (UCPH) / 宇宙黎明中心 (DAWN) 背景、主要研究方向标签。
   - **核心研究展示 (Featured Research)**：深度融合你的 `Master_Project_ALCS` 仓库，包含 ALCS 观测数据、Modified Blackbody 辐射模型公式 (MathJax 渲染)、$SFR_{\mathrm{UV+IR}}$ 计算、UVJ 色图检验等关键细节，并附上源码和 Notebook 链接。
   - **论文与简历 (Thesis & CV)**：可直接下载 `JiamingYao_Master_Thesis.pdf` 与 `Resume_JiamingYao.pdf`，支持**一键复制 BibTeX** 引用。
   - **教育与科研经历 (Education & Experience)**：时间轴展示 UCPH 硕士、东北大学学士、DAWN 研究所、NOT 望远镜观测夏令营、中科院高能所 HXMT GRB 项目、Penn State 天文统计夏令营。
   - **会议与报告 (Talks & Presentations)**：展示 Annual Danish Astronomy Meeting 与 DAWN Summit 报告。
   - **联系方式 (Contact)**：一键复制邮箱与 GitHub 链接。

---

## 📁 目录结构

```text
学术主页/
├── index.html                 # 主页面
├── css/
│   └── style.css              # 自定义 CSS 样式
├── js/
│   └── main.js                # 暗黑模式切换、一键复制、滚动高亮等交互逻辑
├── JiamingYao_Master_Thesis.pdf # 硕士论文 PDF
├── Resume_JiamingYao.pdf      # 个人简历 PDF
├── avatar.jpg                 # [可选] 放入个人照片后自动替代默认头像
└── README.md                  # 说明文档
```

---

## 🚀 如何在本地预览主页？

### 方法 1：直接双击打开
双击 `index.html`，即可在浏览器中预览。

### 方法 2：使用 Python 本地服务器 (推荐)
在当前目录下打开终端，运行：
```bash
python -m http.server 8000
```
然后在浏览器中访问 `http://localhost:8000`。

### 方法 3：使用 VS Code Live Server 插件
在 VS Code 中右键 `index.html`，选择 **Open with Live Server**。

---

## 📷 如何更换个人照片？

将你的个人照片命名为 **`avatar.jpg`** 并直接放置在 `学术主页` 根目录下，网页脚本（`js/main.js`）会自动检测并加载你的真实头像！

---

## 🌐 如何免费部署到 GitHub Pages？

1. **新建 GitHub 仓库**：
   在 GitHub 上新建一个公开仓库，例如命名为 `homepage` 或 `hunyjm12.github.io`。

2. **上传文件**：
   将本文件夹下的所有文件 (`index.html`, `css/`, `js/`, `JiamingYao_Master_Thesis.pdf`, `Resume_JiamingYao.pdf`, `avatar.jpg`) 推送到该 GitHub 仓库：
   ```bash
   git init
   git add .
   git commit -m "Initial academic website"
   git branch -M main
   git remote add origin https://github.com/hunyjm12/hunyjm12.github.io.git
   git push -u origin main
   ```

3. **开启 GitHub Pages**：
   - 进入 GitHub 仓库页面 -> 点击 **Settings** -> 左侧边栏选择 **Pages**。
   - 在 **Source** 下选择 `Deploy from a branch` -> **Branch** 选择 `main` / `/ (root)`，点击 **Save**。
   - 等待 1~2 分钟，你的学术主页即可通过 `https://hunyjm12.github.io/` 免费访问！
