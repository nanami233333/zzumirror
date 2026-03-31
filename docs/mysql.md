# MySQL 镜像源配置指南

使用郑州大学镜像源 (mirrors.zzu.edu.cn) 加速 MySQL 安装和更新。

---

## 1. 备份原有源文件（如果已安装官方源）

```bash
sudo cp /etc/apt/sources.list.d/mysql.list /etc/apt/sources.list.d/mysql.list.bak
```

## 2. 写入郑州大学镜像源配置

对于 Ubuntu 系统，使用以下内容覆盖 `/etc/apt/sources.list.d/mysql.list` 文件：

```bash
deb [trusted=yes] https://mirrors.zzu.edu.cn/mysql/apt/ubuntu/ <对应系统代码> mysql-8.0
deb [trusted=yes] https://mirrors.zzu.edu.cn/mysql/apt/ubuntu/ <对应系统代码> mysql-tools
```

> **提示:** 可以通过 `lsb_release -cs` 获取系统代码，例如 `focal`, `jammy`。

## 3. 更新软件包索引

```bash
sudo apt update
```

## 4. 安装 MySQL Server

```bash
sudo apt install mysql-server
```

## 常见问题

### 如何选择不同版本的 MySQL？

将 `mysql-8.0` 修改为您需要的版本号分支即可。
