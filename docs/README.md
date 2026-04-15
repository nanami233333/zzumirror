# 📖 ZZU Mirror 文档中心

欢迎来到郑州大学开源镜像站的文档目录！

## 这里有什么？

如果你想把系统的软件下载地址切换到郑州大学镜像站，从而获得更快的下载速度，这里的每一篇文档都会手把手教你如何操作。每篇文档都包含：

- **通俗说明**：用简洁的语言解释这个软件是什么、为什么要配置镜像源
- **操作步骤**：从备份到修改配置的完整步骤
- **技术细节**：为有经验的用户提供更深入的技术说明
- **常见问题**：遇到问题时可以参考的排障指南

## 🐧 Linux 发行版

| 文档 | 说明 | 适用人群 |
|-----|------|---------|
| [Ubuntu 通用配置](./Ubuntu.md) | Ubuntu 系统 APT 软件源配置 | Ubuntu 桌面/服务器用户 |
| [Ubuntu Releases 镜像](./ubuntu-releases.md) | Ubuntu 系统 ISO 安装镜像下载 | 需要安装或重装 Ubuntu 的用户 |
| [Ubuntu Ports 镜像](./ubuntu-ports.md) | ARM/RISC-V 等非 x86 架构的 Ubuntu 软件源 | 树莓派、ARM 服务器用户 |
| [Arch Linux 镜像](./archlinux.md) | Arch Linux 官方仓库配置 | Arch Linux 用户 |
| [Arch Linux CN 镜像](./archlinuxcn.md) | Arch Linux 中文社区仓库配置 | 需要中文社区软件包的 Arch 用户 |

## 🛠️ 常用软件

| 文档 | 说明 | 适用人群 |
|-----|------|---------|
| [Docker CE](./docker-ce.md) | Docker 社区版安装源配置 | 需要使用容器技术的开发者和运维人员 |
| [MySQL](./mysql.md) | MySQL 数据库安装源配置 | 数据库管理员、后端开发者 |
| [PostgreSQL](./postgresql.md) | PostgreSQL 数据库安装源配置 | 数据库管理员、后端开发者 |
| [Qt](./qt.md) | Qt 开发框架下载与安装 | C++/Qt 桌面应用开发者 |
| [CTAN](./CTAN.md) | TeX Live 宏包仓库源配置 | 使用 LaTeX 写论文或排版的用户 |

## 💡 使用建议

1. **先备份**：修改任何配置文件之前，请先备份原文件。每篇文档都提供了备份命令。
2. **更新索引**：修改源之后，务必运行 `sudo apt update`（APT 系）或 `sudo pacman -Syy`（Pacman 系）刷新软件包索引。
3. **检查版本代号**：如果遇到 404 错误，请确认你使用了正确的系统版本代号（如 `jammy`、`noble` 等）。
4. **优先 HTTPS**：建议使用 `https://` 开头的镜像地址，尤其在校园网或公共网络环境下，以确保传输安全。

## 🤝 如何贡献

想为文档做贡献？请在 `dev` 分支提交 Pull Request，仅需创建一个 Markdown 文件并写下内容即可。
