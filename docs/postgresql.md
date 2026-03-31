# PostgreSQL 镜像源配置指南

使用郑州大学镜像源 (mirrors.zzu.edu.cn) 加速 PostgreSQL 安装。

---

## 1. 导入 GPG 密钥

```bash
curl -fsSL https://mirrors.zzu.edu.cn/postgresql/repos/apt/ACCC4CF8.asc | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/postgresql.gpg
```

## 2. 写入为郑州大学镜像源

创建 `/etc/apt/sources.list.d/pgdg.list` 文件，使用以下内容提取对应发行版代号：

```bash
sudo sh -c 'echo "deb https://mirrors.zzu.edu.cn/postgresql/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
```

## 3. 更新软件包索引

```bash
sudo apt update
```

## 4. 安装 PostgreSQL

```bash
sudo apt install postgresql postgresql-client
```

## 常见问题

### 支持哪些系统发行版？

本配置同样适用于大多数兼容 `.deb` 包的主流系统，将 `$(lsb_release -cs)` 自动对应的发行版代号替换为对应支持的发行版即可。
