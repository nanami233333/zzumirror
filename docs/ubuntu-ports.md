# Ubuntu Ports 镜像源配置指南

> 使用郑州大学镜像源 (`mirrors.zzu.edu.cn`) 加速 ARM/RISC-V 等非 x86 架构设备的 Ubuntu 软件包下载。

## 📑 目录

- [💡 简介](#-简介)
- [🚀 一键配置](#-一键配置)
- [🔧 手动配置](#-手动配置)
- [🔄 更新与升级](#-更新与升级)
- [❓ 常见问题](#-常见问题)

---

## 💡 简介

### 什么是 Ubuntu Ports?

大多数电脑使用的是 x86(AMD64)架构的处理器,但有些设备(如树莓派、ARM 服务器、某些嵌入式设备)使用的是 **ARM** 或 **RISC-V** 等不同架构的处理器。**Ubuntu Ports** 就是专门为这些非 x86 架构设备提供的 Ubuntu 软件仓库。

### 为什么要换源?

与普通 Ubuntu 源类似,Ports 源的默认服务器在国外,下载速度较慢。切换到郑州大学镜像源可以显著提升下载速度。

> [!NOTE]
> **技术说明**
> Ubuntu Ports 仓库(`ports.ubuntu.com`)托管以下架构的软件包:
> - `arm64`
> - `armhf`
> - `ppc64el`
> - `riscv64`
> - `s390x`
>
> 这些架构与标准 `archive.ubuntu.com` 仓库分开维护,使用独立的镜像路径 `/ubuntu-ports/`。

> [!IMPORTANT]
> **适用范围**
> 适用于 `arm64`、`armhf`、`ppc64el` 等架构,常见于树莓派或 ARM 云服务器。如果你不确定自己的设备是否属于这类架构,请看下方的[常见问题](#我的设备是否需要使用-ubuntu-ports)。

---

## 🚀 一键配置

使用以下命令可以一键配置镜像源,无需手动修改配置文件:

```bash
bash <(curl -sSL https://mirrors.zzu.edu.cn/main.sh)
```

> [!TIP]
> **新手提示**
> 在树莓派或 ARM 设备上打开终端,粘贴上面的命令并按回车即可。脚本会自动检测你的设备架构并配置正确的镜像源。

---

## 🔧 手动配置

### 1. 备份原有源文件

```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

### 2. 替换镜像源地址

#### Ubuntu 22.04 及更早版本

将 `ports.ubuntu.com` 替换为郑州大学镜像源:

```bash
sudo sed -i 's|http://ports.ubuntu.com|https://mirrors.zzu.edu.cn|g' /etc/apt/sources.list
sudo sed -i 's|http://ports.ubuntu.com/ubuntu-ports|https://mirrors.zzu.edu.cn/ubuntu-ports|g' /etc/apt/sources.list
```

> [!NOTE]
> **技术说明**
> 由于部分系统配置中 URL 可能带有或不带有 `/ubuntu-ports` 路径后缀,因此需要执行两条 `sed` 命令以覆盖两种格式。建议先运行 `cat /etc/apt/sources.list` 检查当前 URL 格式。

#### Ubuntu 24.04 及更高版本(DEB822 格式)

需要替换 `/etc/apt/sources.list.d/ubuntu.sources` 中的 URL:

```bash
sudo sed -i 's|http://ports.ubuntu.com|https://mirrors.zzu.edu.cn|g' /etc/apt/sources.list.d/ubuntu.sources
```

---

## 🔄 更新与升级

### 1. 更新软件包索引

```bash
sudo apt update
```

### 2. 升级已安装的软件包(可选)

```bash
sudo apt upgrade -y
```

> [!TIP]
> **新手提示**
> 这一步会把设备上已安装的软件更新到最新版本。如果你的树莓派上运行着重要服务,建议先了解更新内容后再决定是否升级。

---

## ❓ 常见问题

### 我的设备是否需要使用 Ubuntu Ports?

运行以下命令查看你的设备架构:

```bash
dpkg --print-architecture
```

| 输出结果                                              | 应使用的源                          |
| :---------------------------------------------------- | :---------------------------------- |
| `amd64` / `i386`                                      | [标准 Ubuntu 源](./ubuntu.md)       |
| `arm64` / `armhf` / `ppc64el` / `riscv64` / `s390x`  | **本文档**(Ubuntu Ports 源)       |

> [!NOTE]
> **技术说明**
> Ubuntu 将 `amd64` 和 `i386` 归入主仓库(`archive.ubuntu.com`),其余所有架构归入 Ports 仓库(`ports.ubuntu.com`)。两者的软件包内容相同,仅架构不同。
>
> ⚠️ 错误地将 ARM 设备配置为使用 `archive.ubuntu.com` 会导致 APT 报告架构不匹配的错误。

### 替换后 `apt update` 报错?

请检查以下几点:

1. URL 是否拼写正确(注意 `ubuntu-ports` 的路径)
2. 你的 Ubuntu 版本是否仍在支持期内
3. 可以运行 `cat /etc/apt/sources.list` 检查替换结果是否正确

---

<div align="center">

[← 返回文档中心](./README.md) · [返回项目主页](/)

</div>
