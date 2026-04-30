# CTAN 镜像源配置指南

> 使用郑州大学镜像源 (`mirrors.zzu.edu.cn`) 加速 TeX Live 宏包更新和分发下载。

## 📑 目录

- [💡 简介](#-简介)
- [🚀 一键配置](#-一键配置)
- [🔧 手动配置](#-手动配置)
- [❓ 常见问题](#-常见问题)

---

## 💡 简介

### 什么是 CTAN?

CTAN(Comprehensive TeX Archive Network,综合 TeX 档案网络)是 TeX/LaTeX 宏包的集中存储和分发网络。简单来说,如果你用 **LaTeX** 来写论文、做排版,那你使用的各种模板、字体包、功能扩展包,都是从 CTAN 下载的。

### 为什么要换源?

CTAN 的默认服务器在国外,下载宏包时速度可能很慢。切换到郑州大学镜像源后,下载和更新 LaTeX 宏包的速度会大幅提升。

> [!NOTE]
> **技术说明**
> TeX Live 使用 `tlmgr`(TeX Live Manager)作为包管理工具,通过 CTAN 的 `tlnet`(TeX Live Network)仓库分发宏包。`tlmgr` 支持通过 `option repository` 命令自定义仓库 URL,将流量重定向至指定镜像站。

---

## 🚀 一键配置

使用以下命令可以一键配置镜像源,无需手动修改配置文件:

```bash
bash <(curl -sSL https://mirrors.zzu.edu.cn/main.sh)
```

---

## 🔧 手动配置

### 1. 使用 tlmgr 命令切换源

在终端中运行以下命令,将宏包仓库地址切换为郑州大学镜像:

```bash
sudo tlmgr option repository https://mirrors.zzu.edu.cn/CTAN/systems/texlive/tlnet
```

> [!TIP]
> **新手提示**
> `tlmgr` 是 TeX Live 自带的包管理工具(类似于 Ubuntu 的 `apt`),这条命令告诉它以后从郑州大学的服务器下载宏包。

> [!NOTE]
> **技术说明**
> 此命令修改 TeX Live 的配置文件(通常位于 `<TEXLIVE_ROOT>/tlpkg/texlive.tlpdb`),将 `repository` 选项指向指定的 CTAN 镜像 URL。该配置对当前 TeX Live 安装全局生效。

### 2. 更新 tlmgr 自身和所有宏包

```bash
sudo tlmgr update --self --all
```

> [!TIP]
> **新手提示**
> - `--self` 表示先更新 `tlmgr` 工具自身
> - `--all` 表示更新所有已安装的宏包
>
> 建议定期运行这条命令来保持你的 LaTeX 环境是最新的。

### 3. 安装特定宏包

```bash
sudo tlmgr install <package_name>
```

将 `<package_name>` 替换为你需要的宏包名称。例如,安装中文支持包:

```bash
sudo tlmgr install ctex
```

---

## ❓ 常见问题

### 如何验证源是否已切换成功?

运行以下命令,输出结果应包含郑州大学 CTAN 镜像地址:

```bash
tlmgr option repository
```

如果输出中包含 `mirrors.zzu.edu.cn`,则说明配置成功。

### `tlmgr` 命令提示找不到?

这通常意味着 TeX Live 没有正确安装,或者 `tlmgr` 不在系统 PATH 中。

> [!NOTE]
> **技术说明**
> TeX Live 的默认安装路径为 `/usr/local/texlive/<年份>/bin/<架构>/`。如果 `tlmgr` 不在 PATH 中,你需要手动添加:
>
> ```bash
> export PATH="/usr/local/texlive/2024/bin/x86_64-linux:$PATH"
> ```
>
> 建议将此行添加到 `~/.bashrc` 或 `~/.zshrc` 中使其永久生效。

### 更新时提示版本不匹配?

如果你的 TeX Live 版本与镜像站中的版本不一致(例如你安装的是 2023 版但镜像站已更新到 2024 版),`tlmgr` 会拒绝更新。此时需要重新安装对应年份的 TeX Live,或者使用历史版本仓库地址。

---

<div align="center">

[← 返回文档中心](./README.md) · [返回项目主页](../README.md)

</div>
