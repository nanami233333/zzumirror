# Docker CE 镜像源配置指南

> 使用郑州大学镜像源 (`mirrors.zzu.edu.cn`) 加速 Docker CE 安装。

## 📑 目录

- [💡 简介](#-简介)
- [🚀 一键配置](#-一键配置)
- [🔧 手动配置](#-手动配置)
- [❓ 常见问题](#-常见问题)

---

## 💡 简介

### 什么是 Docker?

Docker 是一种「容器化」技术,可以把应用程序和它需要的所有依赖打包成一个独立的「容器」来运行。你可以把容器想象成一个轻量级的虚拟机 — 它让你能在任何电脑上以相同的方式运行同一个应用,不用担心环境差异。**Docker CE**(Community Edition)是 Docker 的免费社区版。

### 为什么要用镜像源安装?

Docker 的官方 APT 仓库在国外,安装速度可能很慢。使用郑州大学镜像源可以大幅提升安装速度。

> [!NOTE]
> **技术说明**
> Docker CE 通过独立的 APT 仓库分发(`download.docker.com`),包含三个核心组件:
> | 组件             | 作用                |
> | :--------------- | :------------------ |
> | `docker-ce`      | 守护进程(dockerd) |
> | `docker-ce-cli`  | CLI 客户端          |
> | `containerd.io`  | 底层容器运行时      |
>
> 安装过程需要导入 Docker 官方的 GPG 密钥并添加对应的 APT 源。本指南将该仓库地址替换为郑州大学镜像站的对应路径。

---

## 🚀 一键配置

使用以下命令可以一键配置镜像源,无需手动修改配置文件:

```bash
bash <(curl -sSL https://mirrors.zzu.edu.cn/main.sh)
```

---

## 🔧 手动配置

### 1. 添加 GPG 密钥

首先创建密钥存放目录,并下载 Docker 官方的 GPG 密钥:

```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://mirrors.zzu.edu.cn/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```

> [!TIP]
> **新手提示**
> 这几条命令是在下载 Docker 的「数字签名」文件,确保后续安装的 Docker 软件包是正版、未被篡改的。只需复制粘贴运行即可。

> [!NOTE]
> **技术说明**
> `install -m 0755 -d` 创建目录并设置权限为 `rwxr-xr-x`。GPG 密钥从镜像站下载(与官方密钥相同),经 `--dearmor` 转为二进制格式后存储到 `/etc/apt/keyrings/` 目录。APT 在验证包签名时会引用此密钥文件。

### 2. 备份原有源文件(如已存在)

```bash
sudo cp /etc/apt/sources.list.d/docker.list /etc/apt/sources.list.d/docker.list.bak 2>/dev/null || true
```

> [!NOTE]
> **技术说明**
> `2>/dev/null || true` 确保即使文件不存在(首次安装时),命令也不会报错退出。

### 3. 写入郑州大学镜像源

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://mirrors.zzu.edu.cn/docker-ce/linux/ubuntu \
  $(. /etc/os-release && echo $VERSION_CODENAME) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

> [!TIP]
> **新手提示**
> 这条命令会自动检测你的系统架构和版本,并创建一个配置文件告诉系统从郑州大学镜像下载 Docker。复制粘贴运行即可,无需修改。

> [!NOTE]
> **技术说明**
> | 字段                                           | 作用                                   |
> | :--------------------------------------------- | :------------------------------------- |
> | `arch=$(dpkg --print-architecture)`            | 自动获取系统架构(如 `amd64`)         |
> | `signed-by=...`                                | 指定用于签名验证的 GPG 密钥路径        |
> | `$(. /etc/os-release && echo $VERSION_CODENAME)` | 提取系统代号(如 `noble`、`jammy`)   |
> | `stable`                                       | Docker CE 的发布通道                   |

### 4. 更新软件包索引

```bash
sudo apt update
```

### 5. 安装 Docker CE

```bash
sudo apt install docker-ce docker-ce-cli containerd.io
```

> [!TIP]
> **新手提示**
> 安装完成后,运行下面的命令测试 Docker 是否安装成功:
>
> ```bash
> sudo docker run hello-world
> ```
>
> 如果看到欢迎信息,说明一切正常!

> [!NOTE]
> **技术说明**
> 安装后 Docker 服务会自动启动。如需免 `sudo` 使用 Docker,将当前用户加入 `docker` 组:
>
> ```bash
> sudo usermod -aG docker $USER
> ```
>
> 之后**重新登录**生效。

---

## ❓ 常见问题

### 如何加速容器镜像拉取?

Docker 安装完成后,拉取容器镜像(如 `docker pull nginx`)时仍然可能较慢,这需要单独配置 Docker 的镜像加速器(Registry Mirror)。

编辑或创建 `/etc/docker/daemon.json` 文件,添加以下内容:

```json
{
  "registry-mirrors": ["https://mirrors.zzu.edu.cn"]
}
```

然后重启 Docker 服务:

```bash
sudo systemctl restart docker
```

> [!NOTE]
> **技术说明**
> `registry-mirrors` 配置作为 Docker Hub 的拉取代理(pull-through cache),Docker 守护进程在拉取镜像时会优先从配置的 mirror 下载。
>
> ⚠️ **注意**:此配置仅对 Docker Hub 的公共镜像生效,对私有仓库或第三方 Registry 无效。

### 安装时提示 GPG 密钥错误?

重新导入密钥即可:

```bash
curl -fsSL https://mirrors.zzu.edu.cn/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

---

<div align="center">

[← 返回文档中心](./README.md) · [返回项目主页](/)

</div>
