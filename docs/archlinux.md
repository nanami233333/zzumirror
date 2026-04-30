# Arch Linux 镜像源配置指南

> 使用郑州大学镜像源 (`mirrors.zzu.edu.cn`) 加速 Arch Linux 官方软件包下载。

## 📑 目录

- [💡 简介](#-简介)
- [🚀 一键配置](#-一键配置)
- [🔧 手动配置](#-手动配置)
- [❓ 常见问题](#-常见问题)

---

## 💡 简介

### 什么是 Arch Linux?

Arch Linux 是一款轻量级、滚动更新的 Linux 发行版,面向追求简洁和自主控制的用户。它采用 **Pacman** 包管理器来安装和更新软件。

### 为什么要换源?

Arch Linux 默认从国外服务器下载软件包,速度可能很慢。将下载地址切换为郑州大学镜像源后,软件的下载和更新速度会大幅提升。

> [!NOTE]
> **技术说明**
> Arch Linux 的 Pacman 包管理器通过 `/etc/pacman.d/mirrorlist` 文件中定义的镜像服务器列表获取软件包。镜像列表按优先级从上到下依次尝试,将 ZZU Mirror 置于列表顶部可确保优先从该镜像站下载。

---

## 🚀 一键配置

使用以下命令可以一键配置镜像源,无需手动修改配置文件:

```bash
bash <(curl -sSL https://mirrors.zzu.edu.cn/main.sh)
```

---

## 🔧 手动配置

### 1. 备份原有镜像列表

在修改之前,先备份原始的镜像列表文件,以便需要时恢复:

```bash
sudo cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
```

### 2. 编辑镜像列表文件

使用文本编辑器打开镜像列表:

```bash
sudo nano /etc/pacman.d/mirrorlist
```

### 3. 添加郑州大学镜像源

在文件**最顶部**添加以下行(确保它在其他所有 `Server` 行之前):

```ini
Server = https://mirrors.zzu.edu.cn/archlinux/$repo/os/$arch
```

> [!NOTE]
> **技术说明**
> `$repo` 和 `$arch` 是 Pacman 的内置变量,分别会被替换为仓库名称(如 `core`、`extra`、`multilib`)和系统架构(如 `x86_64`)。无需手动替换这些变量。

### 4. 刷新软件包数据库并更新系统

```bash
sudo pacman -Syyu
```

> [!TIP]
> **新手提示**
> `-Syyu` 的含义是:
> - `S` — 同步操作
> - `yy` — 强制刷新所有包数据库(即使本地认为已是最新)
> - `u` — 升级所有可更新的软件包

> [!NOTE]
> **技术说明**
> 使用双 `y`(即 `-yy`)会强制重新下载包数据库,这在切换镜像源后是推荐做法,因为不同镜像的同步时间可能不同,强制刷新可避免部分同步导致的依赖问题。

---

## ❓ 常见问题

### 如何恢复默认镜像列表?

```bash
sudo cp /etc/pacman.d/mirrorlist.bak /etc/pacman.d/mirrorlist
sudo pacman -Syyu
```

### 遇到 GPG 签名错误怎么办?

首先尝试更新密钥环:

```bash
sudo pacman -S archlinux-keyring
sudo pacman -Syyu
```

如果仍然报错,可以重新初始化密钥环:

```bash
sudo pacman-key --init
sudo pacman-key --populate archlinux
```

> [!NOTE]
> **技术说明**
> GPG 签名错误通常是由于本地密钥过期或密钥环未及时更新所致。`archlinux-keyring` 包含 Arch Linux 官方维护者的 GPG 公钥,更新该包即可解决大部分签名验证问题。

---

<div align="center">

[← 返回文档中心](./README.md) · [返回项目主页](../README.md)

</div>
