# PostgreSQL 镜像源配置指南

> 使用郑州大学镜像源 (`mirrors.zzu.edu.cn`) 加速 PostgreSQL 安装。

## 📑 目录

- [💡 简介](#-简介)
- [🚀 一键配置](#-一键配置)
- [🔧 手动配置](#-手动配置)
- [❓ 常见问题](#-常见问题)

---

## 💡 简介

### 什么是 PostgreSQL?

PostgreSQL(常简称为 Postgres)是一款功能强大的开源关系型数据库系统,被广泛应用于网站后端、数据分析、企业级应用等场景。如果你正在开发一个需要存储和查询数据的应用程序,PostgreSQL 是一个非常优秀的选择。

### 为什么要用镜像源安装?

PostgreSQL 官方的 APT 仓库服务器在国外,直接安装下载速度可能很慢。使用郑州大学镜像源可以大幅提升安装速度。

> [!NOTE]
> **技术说明**
> PostgreSQL Global Development Group(PGDG)维护了官方 APT 仓库,提供最新版本的 PostgreSQL 及相关工具。本指南通过替换 PGDG 仓库 URL 为郑州大学镜像地址,实现加速。GPG 密钥用于验证包的来源和完整性。

---

## 🚀 一键配置

使用以下命令可以一键配置镜像源,无需手动修改配置文件:

```bash
bash <(curl -sSL https://mirrors.zzu.edu.cn/main.sh)
```

---

## 🔧 手动配置

### 1. 导入 GPG 密钥

首先需要导入 PostgreSQL 官方的 GPG 签名密钥,以确保下载的软件包是安全可信的:

```bash
curl -fsSL https://mirrors.zzu.edu.cn/postgresql/repos/apt/ACCC4CF8.asc | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/postgresql.gpg
```

> [!TIP]
> **新手提示**
> GPG 密钥就像是一个「数字签名」,用来证明你下载的软件确实来自 PostgreSQL 官方,没有被篡改。这一步是安全措施,**建议不要跳过**。

> [!NOTE]
> **技术说明**
> `curl -fsSL` 下载 ASCII 格式的 GPG 公钥,通过 `gpg --dearmor` 转换为二进制格式后存放到 APT 的信任密钥目录。`ACCC4CF8` 是 PGDG 的密钥 ID。存放到 `/etc/apt/trusted.gpg.d/` 目录的密钥会被 APT 自动识别并用于签名验证。

### 2. 写入郑州大学镜像源

创建 APT 源配置文件,使用以下命令自动填入你的系统发行版代号:

```bash
sudo sh -c 'echo "deb https://mirrors.zzu.edu.cn/postgresql/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
```

> [!TIP]
> **新手提示**
> 这条命令会创建一个新的配置文件,告诉你的系统去郑州大学的服务器下载 PostgreSQL。`$(lsb_release -cs)` 会自动获取你的系统版本代号(如 `jammy`、`noble`),无需手动填写。

> [!NOTE]
> **技术说明**
> `-pgdg` 后缀是 PGDG 仓库的命名约定(如 `jammy-pgdg`)。`main` 组件包含 PostgreSQL 服务器、客户端及常用扩展。源文件写入 `/etc/apt/sources.list.d/` 目录下,与系统默认源文件隔离,便于管理。

### 3. 更新软件包索引

```bash
sudo apt update
```

### 4. 安装 PostgreSQL

```bash
sudo apt install postgresql postgresql-client
```

> [!TIP]
> **新手提示**
> - `postgresql` — 数据库服务器本体
> - `postgresql-client` — 用于连接和操作数据库的命令行工具(`psql`)
>
> 安装完成后,PostgreSQL 服务会自动启动。

> [!NOTE]
> **技术说明**
> 如果需要安装特定版本,可以指定版本号(如 `sudo apt install postgresql-16`)。PGDG 仓库同时提供多个大版本,不同版本可以共存。安装后服务默认监听 `localhost:5432`,可通过 `pg_lsclusters` 查看集群状态。

---

## ❓ 常见问题

### 支持哪些系统发行版?

本配置适用于大多数基于 Debian/Ubuntu 的发行版,包括:

- Ubuntu 20.04+
- Debian 11+

`$(lsb_release -cs)` 会自动获取你的发行版代号。

### 如何安装指定版本的 PostgreSQL?

```bash
# 查看可用版本
apt list -a postgresql*

# 安装指定版本(例如 PostgreSQL 15)
sudo apt install postgresql-15
```

> [!NOTE]
> **技术说明**
> PGDG 仓库支持同时安装多个 PostgreSQL 大版本(如 14、15、16),每个版本运行在不同的端口(默认 5432 起递增)。使用 `pg_lsclusters` 可以查看所有已安装的 PostgreSQL 集群及其端口和状态。

---

<div align="center">

[← 返回文档中心](./README.md) · [返回项目主页](../README.md)

</div>
