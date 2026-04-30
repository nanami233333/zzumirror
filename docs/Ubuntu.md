# Ubuntu 镜像源配置指南

> 使用郑州大学镜像源 (`mirrors.zzu.edu.cn`) 加速 Ubuntu 软件包下载。

## 📑 目录

- [💡 简介](#-简介)
- [🚀 一键配置](#-一键配置)
- [🔧 手动配置](#-手动配置)
  - [Ubuntu 24.04+(DEB822 格式)](#ubuntu-2404-deb822-格式)
  - [Ubuntu 22.04 及更早版本(传统格式)](#ubuntu-2204-及更早版本传统格式)
- [🔄 更新与升级](#-更新与升级)
- [❓ 常见问题](#-常见问题)

---

## 💡 简介

### 什么是镜像源?

当你在 Ubuntu 系统上使用 `apt install` 安装软件时,系统会从网上的「软件仓库」下载文件。这些仓库的默认服务器在国外,下载速度可能很慢。**镜像源**就是把官方仓库的内容复制到国内服务器上,让你可以高速下载。

### 为什么要换源?

切换到郑州大学镜像源后,你在安装和更新软件时的下载速度将会大幅提升,特别是在校园网环境下效果尤其显著。

> [!NOTE]
> **技术说明**
> Ubuntu 使用 APT(Advanced Package Tool)包管理系统。APT 的软件源配置文件位于 `/etc/apt/sources.list`(Ubuntu 22.04 及更早版本)或 `/etc/apt/sources.list.d/ubuntu.sources`(Ubuntu 24.04+ 使用的 DEB822 格式)。本指南将引导你将源地址从 `archive.ubuntu.com` 替换为 `mirrors.zzu.edu.cn`。

> [!IMPORTANT]
> **版本兼容性**
> Ubuntu 24.04 及更新版本的源配置已迁移到 `/etc/apt/sources.list.d/ubuntu.sources`,使用新的 DEB822 格式。如果你不确定自己的版本,请在终端运行 `lsb_release -rs` 查看。

---

## 🚀 一键配置

使用以下命令可以一键配置镜像源,无需手动修改配置文件:

```bash
bash <(curl -sSL https://mirrors.zzu.edu.cn/main.sh)
```

> [!TIP]
> **新手提示**
> 打开终端(按 `Ctrl + Alt + T`),复制上面的命令并粘贴到终端中,按回车运行即可。脚本会自动完成所有配置。

---

## 🔧 手动配置

### Ubuntu 24.04+(DEB822 格式)

> [!NOTE]
> **背景知识**
> 从 Ubuntu 24.04 开始,APT 引入了 DEB822 格式(一种更加结构化的配置格式),取代了传统的 `sources.list` 单行格式。

#### 1. 备份原有源文件

在修改配置之前,先备份原文件。万一操作出错,可以用备份文件恢复:

```bash
sudo cp /etc/apt/sources.list.d/ubuntu.sources /etc/apt/sources.list.d/ubuntu.sources.bak
```

#### 2. 编辑源文件

```bash
sudo nano /etc/apt/sources.list.d/ubuntu.sources
```

> [!TIP]
> **新手提示**
> `nano` 是一个终端中的文本编辑器。打开文件后,使用方向键移动光标,直接输入或删除文字来编辑。
> - 保存:`Ctrl + O`,然后按 `Enter` 确认
> - 退出:`Ctrl + X`

#### 3. 替换为以下内容

将文件中的所有内容替换为:

```yaml
Types: deb
URIs: https://mirrors.zzu.edu.cn/ubuntu/
Suites: noble noble-updates noble-backports
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg

Types: deb
URIs: https://mirrors.zzu.edu.cn/ubuntu/
Suites: noble-security
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg
```

> [!NOTE]
> **DEB822 字段说明**
> | 字段          | 说明                                                                              |
> | :------------ | :-------------------------------------------------------------------------------- |
> | `Types`       | 包类型(`deb` 二进制包 / `deb-src` 源码包)                                       |
> | `Suites`      | 发行版代号及其分支(`noble`/`noble-updates`/`noble-backports`/`noble-security`) |
> | `Components`  | 启用的组件(`main` 官方 / `restricted` 受限 / `universe` 社区 / `multiverse` 非自由) |
> | `Signed-By`   | GPG 密钥路径,用于验证包的完整性                                                  |

#### 4. 一键替换命令

如果你不想手动编辑文件,可以使用以下命令自动替换:

```bash
sudo sed -i 's|http://archive.ubuntu.com|https://mirrors.zzu.edu.cn|g' /etc/apt/sources.list.d/ubuntu.sources
sudo sed -i 's|http://security.ubuntu.com|https://mirrors.zzu.edu.cn|g' /etc/apt/sources.list.d/ubuntu.sources
```

> [!NOTE]
> **技术说明**
> `sed -i` 会直接修改文件内容(`-i` 表示 in-place 替换)。`s|旧内容|新内容|g` 是替换语法,`g` 表示全局替换(替换每一行中所有匹配项)。

---

### Ubuntu 22.04 及更早版本(传统格式)

#### 1. 备份原有源文件

```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

#### 2. 编辑源文件

```bash
sudo nano /etc/apt/sources.list
```

#### 3. 替换为郑州大学镜像源

选择与你的 Ubuntu 版本匹配的配置内容,将文件中的所有内容替换为对应内容。

**Ubuntu 22.04 (Jammy)**

```bash
deb https://mirrors.zzu.edu.cn/ubuntu/ jammy main restricted universe multiverse
deb https://mirrors.zzu.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
deb https://mirrors.zzu.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
deb https://mirrors.zzu.edu.cn/ubuntu/ jammy-security main restricted universe multiverse
```

**Ubuntu 20.04 (Focal)**

```bash
deb https://mirrors.zzu.edu.cn/ubuntu/ focal main restricted universe multiverse
deb https://mirrors.zzu.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb https://mirrors.zzu.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb https://mirrors.zzu.edu.cn/ubuntu/ focal-security main restricted universe multiverse
```

> [!TIP]
> **新手提示**
> 不确定你的版本代号?在终端运行 `lsb_release -cs` 即可查看。例如输出 `jammy` 就使用 22.04 的配置,输出 `focal` 就使用 20.04 的配置。

#### 4. 一键替换命令

```bash
sudo sed -i 's|http://archive.ubuntu.com|https://mirrors.zzu.edu.cn|g' /etc/apt/sources.list
sudo sed -i 's|http://security.ubuntu.com|https://mirrors.zzu.edu.cn|g' /etc/apt/sources.list
```

---

## 🔄 更新与升级

### 1. 更新软件包索引

修改源之后,**必须**运行以下命令刷新软件包列表,否则系统仍会使用旧的缓存信息:

```bash
sudo apt update
```

> [!NOTE]
> **技术说明**
> `apt update` 从配置的源地址重新下载软件包的索引文件(即 `Packages.gz`、`InRelease` 等元数据),并不会安装或升级任何软件包。

### 2. 升级已安装的软件包(可选)

```bash
sudo apt upgrade -y
```

> [!TIP]
> **新手提示**
> 这条命令会将你已安装的所有软件更新到最新版本。`-y` 表示自动确认,省去逐个确认的麻烦。如果你暂时不想升级,可以跳过这一步。

---

## ❓ 常见问题

### 如何恢复默认源?

如果换源后出现问题,可以用之前备份的文件恢复:

```bash
# Ubuntu 22.04 及更早版本
sudo cp /etc/apt/sources.list.bak /etc/apt/sources.list
sudo apt update

# Ubuntu 24.04+
sudo cp /etc/apt/sources.list.d/ubuntu.sources.bak /etc/apt/sources.list.d/ubuntu.sources
sudo apt update
```

### 如何查看当前 Ubuntu 版本代号?

```bash
lsb_release -cs
```

### `apt update` 报错 404 Not Found?

这通常意味着你使用的版本代号与镜像源中实际可用的版本不匹配。请确认你在配置文件中填写的代号(如 `noble`、`jammy`、`focal`)与 `lsb_release -cs` 的输出一致。

> [!NOTE]
> **技术说明**
> 404 错误表示请求的 URL 路径在镜像站上不存在。可能的原因包括:
> - 版本代号拼写错误
> - 该版本已 EOL(End of Life)并从镜像中移除
> - 镜像站尚未同步该版本

---

<div align="center">

[← 返回文档中心](./README.md) · [返回项目主页](../README.md)

</div>
