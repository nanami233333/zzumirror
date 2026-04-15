# MySQL 镜像源配置指南

使用郑州大学镜像源 (mirrors.zzu.edu.cn) 加速 MySQL 安装和更新。

## 💡 简介

**什么是 MySQL？**
MySQL 是全球最流行的开源关系型数据库之一，被广泛用于网站、应用程序和企业系统的数据存储。无论是个人博客还是大型网站，背后很可能都在使用 MySQL 来管理数据。

**为什么要用镜像源安装？**
MySQL 官方的 APT 仓库在国外，直接安装下载速度可能很慢。使用郑州大学镜像源可以大幅提升安装速度。

> **技术说明**：MySQL 官方通过独立的 APT 仓库（`repo.mysql.com`）分发最新版本的 MySQL Server 及相关工具。本指南通过替换仓库地址为 `mirrors.zzu.edu.cn/mysql/apt/ubuntu/`，将下载流量重定向至郑州大学镜像站。使用 `[trusted=yes]` 选项跳过 GPG 验证（如需更安全的配置，可自行导入 MySQL 官方 GPG 密钥）。

## 一键配置

使用以下命令可以一键配置镜像源，无需手动修改配置文件：

```bash
bash <(curl -sSL https://mirrors.zzu.edu.cn/main.sh)
```

---

## 手动配置

### 1. 备份原有源文件（如果已安装官方源）

如果你之前已经配置过 MySQL 的官方源，先备份：

```bash
sudo cp /etc/apt/sources.list.d/mysql.list /etc/apt/sources.list.d/mysql.list.bak
```

> **给初学者**：如果你是第一次安装 MySQL，这一步可以跳过，因为还没有这个文件。

### 2. 写入郑州大学镜像源配置

对于 Ubuntu 系统，创建或覆盖 `/etc/apt/sources.list.d/mysql.list` 文件：

```bash
deb [trusted=yes] https://mirrors.zzu.edu.cn/mysql/apt/ubuntu/ <对应系统代号> mysql-8.0
deb [trusted=yes] https://mirrors.zzu.edu.cn/mysql/apt/ubuntu/ <对应系统代号> mysql-tools
```

> **给初学者**：你需要将 `<对应系统代号>` 替换为你的系统版本代号。不知道自己的代号？在终端运行 `lsb_release -cs`，输出的结果（如 `focal`、`jammy`、`noble`）就是你的系统代号。

例如，Ubuntu 22.04 用户应填写：

```bash
deb [trusted=yes] https://mirrors.zzu.edu.cn/mysql/apt/ubuntu/ jammy mysql-8.0
deb [trusted=yes] https://mirrors.zzu.edu.cn/mysql/apt/ubuntu/ jammy mysql-tools
```

> **技术说明**：`[trusted=yes]` 选项告诉 APT 信任该仓库而不要求 GPG 签名验证。`mysql-8.0` 是包含 MySQL Server 8.0 系列的组件名，`mysql-tools` 包含 MySQL Workbench、MySQL Shell 等辅助工具。如果你需要更严格的安全性，可以从 MySQL 官方下载 GPG 密钥并替换为 `[signed-by=...]` 配置。

### 3. 更新软件包索引

```bash
sudo apt update
```

### 4. 安装 MySQL Server

```bash
sudo apt install mysql-server
```

> **给初学者**：安装过程中可能会提示你设置 MySQL 的 root（管理员）密码，请记住你设置的密码。安装完成后，MySQL 服务会自动启动。你可以通过 `sudo mysql` 命令进入 MySQL 命令行界面。

> **技术说明**：MySQL 8.0 默认使用 `caching_sha2_password` 认证插件。安装后服务默认监听 `localhost:3306`。可通过 `sudo systemctl status mysql` 检查服务状态，通过 `mysqladmin -u root -p version` 验证版本信息。

## 常见问题

### 如何选择不同版本的 MySQL？

将配置文件中的 `mysql-8.0` 修改为你需要的版本分支即可，例如：

- `mysql-8.0` — MySQL 8.0 系列（当前 LTS 版本，推荐大多数用户使用）
- `mysql-innovation` — MySQL 创新版本（包含最新功能，适合想要尝鲜的用户）

> **技术说明**：MySQL 从 8.0 开始采用 LTS（长期支持）+ Innovation（创新发布）的版本策略。LTS 版本提供长期安全更新，Innovation 版本每季度发布新功能。生产环境建议使用 LTS 版本。

### `apt update` 提示签名验证失败？

由于配置中使用了 `[trusted=yes]`，通常不会出现签名问题。如果仍然报错，请检查 URL 是否拼写正确，以及你的系统代号是否被镜像仓库支持。
