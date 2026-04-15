# Ubuntu Releases 镜像下载指南

通过郑州大学镜像源 (mirrors.zzu.edu.cn) 高速下载 Ubuntu ISO 安装镜像文件。

## 💡 简介

**什么是 Ubuntu Releases？**
Ubuntu Releases 是 Ubuntu 各版本的系统安装镜像（ISO 文件）下载页面。当你需要**安装或重装 Ubuntu 系统**时，就需要下载这些 ISO 文件，然后制作成 U 盘启动盘进行安装。

**为什么要从镜像源下载？**
Ubuntu 的 ISO 文件通常有 3-5 GB 大小，从官方服务器下载速度可能很慢。使用郑州大学镜像源可以大幅缩短下载时间。

> **技术说明**：Ubuntu Releases 仓库包含各版本的 ISO 镜像、校验文件（SHA256SUMS）及 GPG 签名文件。ISO 镜像分为 Desktop（桌面版）、Server（服务器版）和 Live Server 等多个变体。每个大版本的 ISO 在 `/ubuntu-releases/<版本号>/` 目录下按架构和类型组织。

## 一键配置

使用以下命令可以一键配置镜像源，无需手动修改配置文件：

```bash
bash <(curl -sSL https://mirrors.zzu.edu.cn/main.sh)
```

---

## 1. 直接网页浏览

访问以下地址，可以直接在浏览器中浏览并下载各个版本的 ISO 文件：

[https://mirrors.zzu.edu.cn/ubuntu-releases/](https://mirrors.zzu.edu.cn/ubuntu-releases/)

> **给初学者**：点击上面的链接后，你会看到一个文件列表。选择你需要的 Ubuntu 版本号（如 `24.04`），然后点击以 `.iso` 结尾的文件即可开始下载。如果你是新手，建议下载 **Desktop**（桌面版）。

## 2. 命令行下载示例（以 Ubuntu 24.04 为例）

如果你更习惯使用命令行，可以使用 `wget` 下载：

```bash
wget -c https://mirrors.zzu.edu.cn/ubuntu-releases/24.04/ubuntu-24.04-desktop-amd64.iso
```

> **给初学者**：`wget` 是一个命令行下载工具，`-c` 参数表示支持断点续传——如果下载中断了，重新运行同一命令就能从中断的位置继续下载，不需要重新开始。

> **技术说明**：如果需要更高的下载速度或多线程下载，可以使用 `axel`（多线程下载工具）：`axel -n 8 https://mirrors.zzu.edu.cn/ubuntu-releases/24.04/ubuntu-24.04-desktop-amd64.iso`，其中 `-n 8` 指定使用 8 个线程并行下载。

## 3. 下载后进行完整性校验（推荐）

下载完成后，建议校验文件的完整性，确保文件没有损坏或被篡改。

首先下载对应的校验文件：

```bash
wget -c https://mirrors.zzu.edu.cn/ubuntu-releases/24.04/SHA256SUMS
```

然后校验镜像是否完整：

```bash
sha256sum -c SHA256SUMS --ignore-missing
```

> **给初学者**：如果输出中显示 `OK`，说明文件完好无损，可以放心使用。如果显示 `FAILED`，说明文件可能损坏了，请重新下载。

> **技术说明**：`SHA256SUMS` 文件包含目录中每个 ISO 文件的 SHA-256 哈希值。`sha256sum -c` 会计算本地文件的哈希值并与预期值比对。`--ignore-missing` 参数使其仅校验本地已存在的文件，忽略未下载的文件。如需进一步验证 SHA256SUMS 文件本身的真实性，可以使用 `SHA256SUMS.gpg` 进行 GPG 签名验证。

## 常见问题

### 为什么校验提示不匹配？

可能由于下载过程中的网络中断导致了文件不完整。建议：
1. 使用带断点续传的工具（如 `wget -c`）重新下载
2. 或者删除已下载的文件后从头开始下载
3. 确保下载的 SHA256SUMS 文件与 ISO 文件来自同一版本目录

### 下载的 ISO 文件怎么安装 Ubuntu？

1. 下载 ISO 文件后，使用工具（如 [Rufus](https://rufus.ie/)、[Etcher](https://etcher.balena.io/)）将 ISO 写入 U 盘
2. 将 U 盘插入要安装的电脑，从 U 盘启动
3. 按照屏幕上的安装向导操作即可

> **技术说明**：ISO 文件遵循 ISO 9660 标准，同时支持 BIOS（Legacy）和 UEFI 引导模式。使用 `dd` 命令也可以将 ISO 写入 U 盘：`sudo dd if=ubuntu-24.04-desktop-amd64.iso of=/dev/sdX bs=4M status=progress`，其中 `/dev/sdX` 为 U 盘设备路径（可通过 `lsblk` 确认）。
