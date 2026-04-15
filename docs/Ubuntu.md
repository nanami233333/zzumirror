# Ubuntu 镜像源配置指南

使用郑州大学镜像源 (mirrors.zzu.edu.cn) 加速软件包下载。

## 💡 简介

**什么是镜像源？**
当你在 Ubuntu 系统上使用 `apt install` 安装软件时，系统会从网上的「软件仓库」下载文件。这些仓库的默认服务器在国外，下载速度可能很慢。**镜像源**就是把官方仓库的内容复制到国内服务器上，让你可以高速下载。

**为什么要换源？**
切换到郑州大学镜像源后，你在安装和更新软件时的下载速度将会大幅提升，特别是在校园网环境下效果尤其显著。

> **技术说明**：Ubuntu 使用 APT（Advanced Package Tool）包管理系统。APT 的软件源配置文件位于 `/etc/apt/sources.list`（Ubuntu 22.04 及更早版本）或 `/etc/apt/sources.list.d/ubuntu.sources`（Ubuntu 24.04+ 使用的 DEB822 格式）。本指南将引导你将源地址从 `archive.ubuntu.com` 替换为 `mirrors.zzu.edu.cn`。

> **注意**: Ubuntu 24.04 及更新版本的源配置已迁移到 `/etc/apt/sources.list.d/ubuntu.sources`，使用新的 DEB822 格式。如果你不确定自己的版本，请在终端运行 `lsb_release -rs` 查看。

## 一键配置

使用以下命令可以一键配置镜像源，无需手动修改配置文件：

```bash
bash <(curl -sSL https://mirrors.zzu.edu.cn/main.sh)
```

> **给初学者**：打开终端（按 `Ctrl + Alt + T`），复制上面的命令并粘贴到终端中，按回车运行即可。脚本会自动完成所有配置。

---

## Ubuntu 24.04+ (新版 DEB822 格式)

> **背景知识**：从 Ubuntu 24.04 开始，APT 引入了 DEB822 格式（一种更加结构化的配置格式），取代了传统的 `sources.list` 单行格式。如果你使用 Ubuntu 24.04 或更新版本，请按照本节操作。

### 1. 备份原有源文件

在修改配置之前，先备份原文件。万一操作出错，可以用备份文件恢复：

```bash
sudo cp /etc/apt/sources.list.d/ubuntu.sources /etc/apt/sources.list.d/ubuntu.sources.bak
```

### 2. 编辑源文件

```bash
sudo nano /etc/apt/sources.list.d/ubuntu.sources
```

> **给初学者**：`nano` 是一个终端中的文本编辑器。打开文件后，使用方向键移动光标，直接输入或删除文字来编辑。编辑完成后，按 `Ctrl + O` 保存，按 `Ctrl + X` 退出。

### 3. 替换为以下内容

将文件中的所有内容替换为：

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

> **技术说明**：DEB822 格式中，`Types` 指定包类型（`deb` 为二进制包，`deb-src` 为源码包）；`Suites` 对应发行版代号及其分支（`noble` 是 24.04 的代号，`noble-updates` 为常规更新，`noble-backports` 为向后移植，`noble-security` 为安全更新）；`Components` 指定启用的仓库组件（`main` 为官方支持的自由软件，`restricted` 为受限驱动，`universe` 为社区维护，`multiverse` 为非自由软件）；`Signed-By` 指定 GPG 密钥路径用于验证包的完整性。

### 4. 一键替换命令

如果你不想手动编辑文件，可以使用以下命令自动替换：

```bash
sudo sed -i 's|http://archive.ubuntu.com|https://mirrors.zzu.edu.cn|g' /etc/apt/sources.list.d/ubuntu.sources
sudo sed -i 's|http://security.ubuntu.com|https://mirrors.zzu.edu.cn|g' /etc/apt/sources.list.d/ubuntu.sources
```

> **技术说明**：`sed -i` 会直接修改文件内容（`-i` 表示 in-place 替换）。`s|旧内容|新内容|g` 是替换语法，`g` 表示全局替换（替换每一行中所有匹配项，而不仅是第一个）。

---

## Ubuntu 22.04 及更早版本 (传统格式)

### 1. 备份原有源文件

```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

### 2. 编辑源文件

```bash
sudo nano /etc/apt/sources.list
```

### 3. 替换为郑州大学镜像源

选择与你的 Ubuntu 版本匹配的配置内容，将文件中的所有内容替换为以下对应内容：

#### Ubuntu 22.04 (Jammy)

```bash
deb https://mirrors.zzu.edu.cn/ubuntu/ jammy main restricted universe multiverse
deb https://mirrors.zzu.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
deb https://mirrors.zzu.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
deb https://mirrors.zzu.edu.cn/ubuntu/ jammy-security main restricted universe multiverse
```

#### Ubuntu 20.04 (Focal)

```bash
deb https://mirrors.zzu.edu.cn/ubuntu/ focal main restricted universe multiverse
deb https://mirrors.zzu.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb https://mirrors.zzu.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb https://mirrors.zzu.edu.cn/ubuntu/ focal-security main restricted universe multiverse
```

> **给初学者**：不确定你的版本代号？在终端运行 `lsb_release -cs` 即可查看。例如输出 `jammy` 就使用 22.04 的配置，输出 `focal` 就使用 20.04 的配置。

### 4. 一键替换命令

```bash
sudo sed -i 's|http://archive.ubuntu.com|https://mirrors.zzu.edu.cn|g' /etc/apt/sources.list
sudo sed -i 's|http://security.ubuntu.com|https://mirrors.zzu.edu.cn|g' /etc/apt/sources.list
```

## 5. 更新软件包索引

修改源之后，**必须**运行以下命令刷新软件包列表，否则系统仍会使用旧的缓存信息：

```bash 
sudo apt update
```

> **技术说明**：`apt update` 从配置的源地址重新下载软件包的索引文件（即 `Packages.gz`、`InRelease` 等元数据），并不会安装或升级任何软件包。

## 6. 升级已安装的软件包（可选）

```bash
sudo apt upgrade -y
```

> **给初学者**：这条命令会将你已安装的所有软件更新到最新版本。`-y` 表示自动确认，省去逐个确认的麻烦。如果你暂时不想升级，可以跳过这一步。

## 常见问题

### 如何恢复默认源？

如果换源后出现问题，可以用之前备份的文件恢复：

```bash
# Ubuntu 22.04 及更早版本
sudo cp /etc/apt/sources.list.bak /etc/apt/sources.list
sudo apt update

# Ubuntu 24.04+
sudo cp /etc/apt/sources.list.d/ubuntu.sources.bak /etc/apt/sources.list.d/ubuntu.sources
sudo apt update
```

### 如何查看当前 Ubuntu 版本代号？

```bash
lsb_release -cs
```

### `apt update` 报错 404 Not Found？

这通常意味着你使用的版本代号与镜像源中实际可用的版本不匹配。请确认你在配置文件中填写的代号（如 `noble`、`jammy`、`focal`）与 `lsb_release -cs` 的输出一致。

> **技术说明**：404 错误表示请求的 URL 路径在镜像站上不存在。可能的原因包括：版本代号拼写错误、该版本已 EOL（End of Life）并从镜像中移除、或者镜像站尚未同步该版本。
