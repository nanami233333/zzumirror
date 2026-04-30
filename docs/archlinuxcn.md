# Arch Linux CN 镜像源配置指南

> 使用郑州大学镜像源 (`mirrors.zzu.edu.cn`) 加速 archlinuxcn 软件包下载。

## 📑 目录

- [💡 简介](#-简介)
- [🚀 一键配置](#-一键配置)
- [🔧 手动配置](#-手动配置)
- [❓ 常见问题](#-常见问题)

---

## 💡 简介

### 什么是 Arch Linux CN?

Arch Linux CN(Arch Linux 中文社区仓库)是由 Arch Linux 中文社区维护的一个**非官方**软件仓库。它包含了很多在官方仓库中没有的软件包,比如:

- 中文输入法
- 国内常用软件
- 从 AUR 预编译好的热门软件包

使用起来比 AUR 手动编译更加方便。

### 为什么要配置 Arch Linux CN 源?

将 Arch Linux CN 仓库的下载地址指向郑州大学镜像源,可以大幅提升这些软件包的下载速度。

> [!NOTE]
> **技术说明**
> archlinuxcn 是一个由社区驱动的第三方 Pacman 仓库,需要在 `/etc/pacman.conf` 中显式添加仓库配置段,并安装对应的 `archlinuxcn-keyring` 包以通过 GPG 签名验证。该仓库独立于 Arch Linux 官方仓库(`core` / `extra` / `multilib`),两者互不冲突。

---

## 🚀 一键配置

使用以下命令可以一键配置镜像源,无需手动修改配置文件:

```bash
bash <(curl -sSL https://mirrors.zzu.edu.cn/main.sh)
```

---

## 🔧 手动配置

### 1. 备份原有配置文件

在修改之前,先备份配置文件:

```bash
sudo cp /etc/pacman.conf /etc/pacman.conf.bak
```

### 2. 编辑配置文件

```bash
sudo nano /etc/pacman.conf
```

> [!TIP]
> **新手提示**
> `nano` 是终端中的文本编辑器。用方向键移动光标,滚动到文件末尾,添加下面的内容。
> - 保存:`Ctrl + O`,然后按 `Enter` 确认
> - 退出:`Ctrl + X`

### 3. 追加郑州大学镜像源

在文件末尾添加以下内容:

```ini
[archlinuxcn]
Server = https://mirrors.zzu.edu.cn/archlinuxcn/$arch
```

> [!NOTE]
> **技术说明**
> `[archlinuxcn]` 定义了一个新的 Pacman 仓库段。`$arch` 是 Pacman 内置变量,会被自动替换为当前系统架构(通常为 `x86_64`)。如果已有其他 archlinuxcn 镜像配置,请将其注释或删除,仅保留一个 `Server` 行。

### 4. 刷新软件包数据并安装密钥环

```bash
sudo pacman -Syy
sudo pacman -S archlinuxcn-keyring
```

> [!TIP]
> **新手提示**
> - 第一条命令刷新软件包列表
> - 第二条命令安装 archlinuxcn 的密钥环 — 用来验证你下载的软件包是否安全、未被篡改
>
> 安装密钥环之后,你就可以正常安装 archlinuxcn 仓库里的软件了。

> [!IMPORTANT]
> **必须先装密钥环**
> `archlinuxcn-keyring` 包含社区仓库维护者的 GPG 公钥。如果跳过此步骤,Pacman 会因无法验证包签名而拒绝安装来自 archlinuxcn 的软件包。**密钥环需要在安装其他 archlinuxcn 包之前先安装。**

---

## ❓ 常见问题

### 遇到密钥报错如何处理?

这通常是因为系统的密钥环版本过旧。请依次执行以下步骤:

```bash
# 1. 先更新官方密钥环
sudo pacman -S archlinux-keyring

# 2. 再重新安装 archlinuxcn 密钥环
sudo pacman -S archlinuxcn-keyring
```

如果仍然报错,可以尝试重新初始化本地密钥环:

```bash
sudo pacman-key --init
sudo pacman-key --populate archlinux archlinuxcn
```

> [!NOTE]
> **技术说明**
> 密钥错误常见于长时间未更新的系统,原因是本地 GnuPG 密钥环中的密钥已过期或被吊销。`--populate` 操作会从已安装的 keyring 包中导入所有受信任的密钥至本地 GPG 信任数据库。

### 如何从 archlinuxcn 安装软件?

配置好之后,直接使用 Pacman 安装即可,例如:

```bash
sudo pacman -S yay     # 安装 AUR 助手
sudo pacman -S fcitx5  # 安装中文输入法框架
```

---

<div align="center">

[← 返回文档中心](./README.md) · [返回项目主页](/)

</div>
