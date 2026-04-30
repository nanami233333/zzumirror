---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ZZU Mirror"
  text: "为每一次下载，全力以赴。"
  tagline: 郑州大学开源镜像站 · 一条命令配置完成 · 教育网骨干节点
  actions:
    - theme: brand
      text: 立即开始
      link: '#quickstart'
    - theme: alt
      text: 在 GitHub 查看
      link: https://github.com/nanami233333/agents-a068b4f494

features:
  - icon: ⚡
    title: 一键配置
    details: 自动识别发行版与版本，生成软件源文件并自动备份。
  - icon: 📦
    title: 资源丰富
    details: 覆盖 Ubuntu、Arch、Docker、MySQL、PostgreSQL、Qt、CTAN。
  - icon: 🚀
    title: 高速稳定
    details: 教育网骨干节点，校园网用户内网直连。
  - icon: 🐧
    title: 多架构
    details: 同时支持 x86_64 与 ARM / RISC-V。
  - icon: 🔧
    title: 双格式
    details: 同时支持 sources.list 与 DEB822 格式。
  - icon: 📖
    title: 文档完善
    details: 每个镜像源都配有图文教程。
---

<style>
/* ——— Apple-flavored, minimal ——— */
.zm {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 22px;
}
.zm-pad { padding-top: 160px; }

.zm-eyebrow {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-align: center;
  margin: 0 0 14px;
  letter-spacing: 0;
}
.zm-h {
  font-size: clamp(36px, 5.6vw, 56px);
  line-height: 1.05;
  font-weight: 700;
  letter-spacing: -0.025em;
  text-align: center;
  margin: 0 auto 18px;
  padding: 0; border: 0;
  color: var(--vp-c-text-1);
  max-width: 800px;
}
.zm-h .dim { color: var(--vp-c-text-3); font-weight: 700; }
.zm-lede {
  text-align: center;
  font-size: clamp(16px, 1.4vw, 19px);
  line-height: 1.5;
  color: var(--vp-c-text-2);
  font-weight: 400;
  max-width: 580px;
  margin: 0 auto 48px;
}
.zm-link {
  display: block;
  text-align: center;
  font-size: 16px;
  margin-top: 36px;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.zm-link:hover { text-decoration: underline; }
.zm-link::after { content: ' ›'; }

/* ——— Command pill ——— */
.zm-cmd-wrap {
  display: flex;
  justify-content: center;
}
.zm-cmd {
  display: inline-flex; align-items: center; gap: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  padding: 14px 26px;
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  color: var(--vp-c-text-1);
  max-width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}
.zm-cmd b { color: var(--vp-c-brand-1); user-select: none; font-weight: 700; }

.zm-stats {
  display: flex; justify-content: center; gap: 64px;
  margin-top: 56px; flex-wrap: wrap;
}
.zm-stat {
  text-align: center;
  font-size: 13px; color: var(--vp-c-text-3);
}
.zm-stat b {
  display: block;
  font-size: 36px; font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--vp-c-text-1); margin-bottom: 2px;
  line-height: 1;
}

/* ——— Card grid ——— */
.zm-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 8px;
}
.zm-card {
  position: relative;
  display: block;
  padding: 28px 26px;
  border-radius: 18px;
  background: var(--vp-c-bg-soft);
  text-decoration: none !important;
  color: inherit !important;
  transition: background-color .25s ease, transform .25s ease;
}
.zm-card:hover {
  background: var(--vp-c-bg-elv);
  transform: translateY(-1px);
}
.zm-card-title {
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.005em;
  color: var(--vp-c-text-1);
  margin: 0 0 4px;
}
.zm-card-desc {
  font-size: 13px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin: 0;
}
.zm-card-arrow {
  position: absolute;
  top: 28px; right: 26px;
  color: var(--vp-c-brand-1);
  font-size: 18px; line-height: 1;
  opacity: 0;
  transition: opacity .25s ease;
}
.zm-card:hover .zm-card-arrow { opacity: 1; }

/* ——— Tips ——— */
.zm-tips {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 8px;
}
.zm-tip {
  padding: 28px 26px;
  border-radius: 18px;
  background: var(--vp-c-bg-soft);
}
.zm-tip-step {
  font-family: var(--vp-font-family-mono);
  font-size: 11px; font-weight: 600;
  color: var(--vp-c-brand-1);
  letter-spacing: 0.06em;
  margin-bottom: 14px; display: block;
}
.zm-tip strong {
  display: block;
  font-size: 17px; font-weight: 600;
  letter-spacing: -0.005em;
  margin-bottom: 6px;
  color: var(--vp-c-text-1);
}
.zm-tip span {
  font-size: 13px;
  color: var(--vp-c-text-2);
  line-height: 1.55;
}
.zm-tip code {
  font-size: 12px;
  padding: 1px 6px;
  background: var(--vp-c-bg);
  border-radius: 4px;
}

/* ——— Footer ——— */
.zm-footer {
  margin: 160px auto 0;
  padding: 24px 22px;
  text-align: center;
  font-size: 12px;
  color: var(--vp-c-text-3);
  max-width: 980px;
}
.zm-footer a {
  color: var(--vp-c-text-3);
  text-decoration: none;
}
.zm-footer a:hover { color: var(--vp-c-brand-1); }
.zm-footer span { margin: 0 10px; }

@media (max-width: 720px) {
  .zm-pad { padding-top: 96px; }
  .zm-stats { gap: 36px; margin-top: 40px; }
  .zm-stat b { font-size: 28px; }
  .zm-cmd { font-size: 12.5px; padding: 12px 20px; }
  .zm-footer { margin-top: 96px; }
}
</style>

<!-- ============ §1 Quick Start ============ -->
<section class="zm zm-pad" id="quickstart">

<p class="zm-eyebrow">立即开始</p>

<h2 class="zm-h">一行命令。<span class="dim">立即起飞。</span></h2>

<p class="zm-lede">复制下面的命令，粘贴到终端，按下回车。剩下的，交给我们。</p>

<div class="zm-cmd-wrap">
<div class="zm-cmd"><b>$</b><span>bash &lt;(curl -sSL https://mirrors.zzu.edu.cn/main.sh)</span></div>
</div>

<div class="zm-stats">
<div class="zm-stat"><b>10+</b>镜像源</div>
<div class="zm-stat"><b>1Gbps</b>骨干带宽</div>
<div class="zm-stat"><b>24/7</b>稳定运行</div>
</div>

</section>

<!-- ============ §2 Linux 发行版 ============ -->
<section class="zm zm-pad">

<p class="zm-eyebrow">Linux 发行版</p>

<h2 class="zm-h">应有尽有。<span class="dim">从桌面到服务器。</span></h2>

<p class="zm-lede">主流发行版的软件包仓库与 ISO 安装镜像。</p>

<div class="zm-grid">

<a class="zm-card" href="/Ubuntu">
<div class="zm-card-title">Ubuntu</div>
<p class="zm-card-desc">APT 软件包源，桌面与服务器通用。</p>
<span class="zm-card-arrow">›</span>
</a>

<a class="zm-card" href="/ubuntu-releases">
<div class="zm-card-title">Ubuntu Releases</div>
<p class="zm-card-desc">官方 ISO 安装镜像下载。</p>
<span class="zm-card-arrow">›</span>
</a>

<a class="zm-card" href="/ubuntu-ports">
<div class="zm-card-title">Ubuntu Ports</div>
<p class="zm-card-desc">ARM / RISC-V 非 x86 架构。</p>
<span class="zm-card-arrow">›</span>
</a>

<a class="zm-card" href="/archlinux">
<div class="zm-card-title">Arch Linux</div>
<p class="zm-card-desc">Arch 官方仓库镜像。</p>
<span class="zm-card-arrow">›</span>
</a>

<a class="zm-card" href="/archlinuxcn">
<div class="zm-card-title">Arch Linux CN</div>
<p class="zm-card-desc">Arch 中文社区仓库。</p>
<span class="zm-card-arrow">›</span>
</a>

</div>

</section>

<!-- ============ §3 开发与生产工具 ============ -->
<section class="zm zm-pad">

<p class="zm-eyebrow">开发与生产工具</p>

<h2 class="zm-h">为开发者。<span class="dim">备齐一切。</span></h2>

<p class="zm-lede">数据库、容器、框架、排版——日常开发需要的源都在这里。</p>

<div class="zm-grid">

<a class="zm-card" href="/docker-ce">
<div class="zm-card-title">Docker CE</div>
<p class="zm-card-desc">Docker 社区版安装源。</p>
<span class="zm-card-arrow">›</span>
</a>

<a class="zm-card" href="/mysql">
<div class="zm-card-title">MySQL</div>
<p class="zm-card-desc">MySQL 官方安装源。</p>
<span class="zm-card-arrow">›</span>
</a>

<a class="zm-card" href="/postgresql">
<div class="zm-card-title">PostgreSQL</div>
<p class="zm-card-desc">PostgreSQL 官方安装源。</p>
<span class="zm-card-arrow">›</span>
</a>

<a class="zm-card" href="/qt">
<div class="zm-card-title">Qt</div>
<p class="zm-card-desc">Qt 框架安装包与在线仓库。</p>
<span class="zm-card-arrow">›</span>
</a>

<a class="zm-card" href="/CTAN">
<div class="zm-card-title">CTAN</div>
<p class="zm-card-desc">TeX Live 宏包仓库。</p>
<span class="zm-card-arrow">›</span>
</a>

</div>

</section>

<!-- ============ §4 使用建议 ============ -->
<section class="zm zm-pad">

<p class="zm-eyebrow">使用建议</p>

<h2 class="zm-h">三件小事。<span class="dim">让你少踩坑。</span></h2>

<div class="zm-tips">

<div class="zm-tip">
<span class="zm-tip-step">01</span>
<strong>先备份</strong>
<span>修改前先把原文件备份一份，出错时一键回滚。</span>
</div>

<div class="zm-tip">
<span class="zm-tip-step">02</span>
<strong>刷新索引</strong>
<span>修改源后运行 <code>sudo apt update</code> 或 <code>sudo pacman -Syy</code>。</span>
</div>

<div class="zm-tip">
<span class="zm-tip-step">03</span>
<strong>检查代号</strong>
<span>遇到 404 时确认系统版本代号是否正确（如 <code>jammy</code>、<code>noble</code>）。</span>
</div>

</div>

</section>

<!-- ============ Footer ============ -->
<footer class="zm-footer">
Made with ❤ at Zhengzhou University<span>·</span>Powered by <a href="https://vitepress.dev/">VitePress</a><span>·</span><a href="https://github.com/nanami233333/agents-a068b4f494">GitHub</a>
</footer>
