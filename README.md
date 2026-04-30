<div align="center">

# ZZU Mirror

**郑州大学开源镜像站 · 一键加速你的 Linux 软件下载**

[![License](https://img.shields.io/badge/license-See%20LICENSE-blue.svg)](LICENSE)
[![Mirror](https://img.shields.io/badge/mirror-mirrors.zzu.edu.cn-orange.svg)](https://mirrors.zzu.edu.cn)
[![Docs](https://img.shields.io/badge/docs-online-brightgreen.svg)](docs/README.md)

[快速开始](#-快速开始) · [支持的镜像源](#-支持的镜像源) · [文档中心](docs/README.md) · [致谢](#-致谢)

</div>

---

## 🌟 这是什么？

**简单来说**:当你需要安装或更新 Linux 系统上的软件时,系统会从网上的「软件仓库」下载文件。默认的仓库服务器通常在国外,下载速度可能很慢。**镜像站**就像一面「镜子」,把国外仓库的内容完整复制了一份放在国内的服务器上,让你可以高速下载这些软件。

**ZZU Mirror(郑州大学开源镜像站)** 提供了一键配置工具,帮助你快速将系统的下载源切换到郑州大学的镜像服务器,从而显著提升下载速度。

> [!NOTE]
> **技术概述**
> 本项目通过 Shell 脚本实现自动化的软件源(APT / Pacman 等包管理器仓库)镜像地址替换,将上游仓库 URL 重定向至 `mirrors.zzu.edu.cn`。脚本会自动检测当前发行版类型及版本,并生成对应的源配置文件,支持传统 `sources.list` 格式及 DEB822 格式。

---

## ✨ 功能特性

| 特性 | 说明 |
| :--- | :--- |
| 🚀 **一键配置** | 运行一条命令,自动检测系统类型与版本并完成配置,无需手动编辑文件 |
| 📦 **丰富资源** | 覆盖 Ubuntu、Arch Linux、MySQL、PostgreSQL、Docker CE、Qt、CTAN 等常用软件源 |
| ⚡ **高速下载** | 位于教育网骨干节点,提供稳定高速的下载体验,尤其适合校园网用户 |
| 🛠️ **易于使用** | 简洁的命令行界面,Linux 新手也能轻松上手 |

---

## 🚀 快速开始

### 一键安装

只需在终端中粘贴并运行以下命令:

```bash
bash <(curl -sSL https://mirrors.zzu.edu.cn/main.sh)
```

> [!TIP]
> **不了解终端?**
> - **Ubuntu 桌面版**:按 `Ctrl + Alt + T` 即可打开终端
> - **其他 Linux 发行版**:在应用菜单中搜索「终端」或「Terminal」

> [!NOTE]
> **技术说明**
> 该命令通过 `curl` 从镜像站拉取配置脚本并交由 Bash 执行。`-sSL` 参数分别表示静默模式(`-s`)、显示错误信息(`-S`)和跟随 HTTP 重定向(`-L`)。脚本运行时会请求 `sudo` 权限以修改系统级包管理器配置文件。

---

## 📚 支持的镜像源

### Linux 发行版

| 镜像名称        | 说明                                  | 文档                                  |
| :-------------- | :------------------------------------ | :------------------------------------ |
| Ubuntu          | Ubuntu 系统软件包源(x86_64 架构)    | [配置指南](docs/Ubuntu.md)            |
| Ubuntu Releases | Ubuntu 系统 ISO 安装镜像下载          | [下载指南](docs/ubuntu-releases.md)   |
| Ubuntu Ports    | Ubuntu 非 x86 架构(ARM 等)软件包源 | [配置指南](docs/ubuntu-ports.md)      |
| Arch Linux      | Arch Linux 官方软件包源               | [配置指南](docs/archlinux.md)         |
| Arch Linux CN   | Arch Linux 中文社区仓库               | [配置指南](docs/archlinuxcn.md)       |

### 常用软件

| 镜像名称   | 说明                          | 文档                              |
| :--------- | :---------------------------- | :-------------------------------- |
| Docker CE  | Docker 社区版安装源           | [配置指南](docs/docker-ce.md)     |
| MySQL      | MySQL 数据库安装源            | [配置指南](docs/mysql.md)         |
| PostgreSQL | PostgreSQL 数据库安装源       | [配置指南](docs/postgresql.md)    |
| Qt         | Qt 开发框架安装包及在线仓库   | [使用指南](docs/qt.md)            |
| CTAN       | TeX Live 宏包仓库(用于 LaTeX) | [配置指南](docs/CTAN.md)          |

> 更多详细信息请查看 [`docs/`](docs/) 目录。

---

## 📖 文档

完整文档请参考 [文档中心](docs/README.md),其中包含各镜像源的配置步骤、使用建议与常见问题解答。

---

## 🙏 致谢

感谢以下项目的支持:

- [SuperManito/LinuxMirrors](https://github.com/SuperManito/LinuxMirrors) — Linux 镜像源一键更换脚本
- [Caddy Server](https://caddyserver.com/) — 现代化的 Web 服务器
- [VitePress](https://vitepress.dev/) — 基于 Vue 的静态站点生成器

---

## 📄 许可证

详见 [LICENSE](LICENSE) 文件。
