# Ubuntu 镜像源配置指南

使用郑州大学镜像源 (mirrors.zzu.edu.cn) 加速软件包下载。

> **注意**: Ubuntu 24.04 及更新版本的源配置已迁移到 `/etc/apt/sources.list.d/ubuntu.sources`，使用新的 DEB822 格式。

---

## Ubuntu 24.04+ (新版 DEB822 格式)

### 1. 备份原有源文件

```bash
sudo cp /etc/apt/sources.list.d/ubuntu.sources /etc/apt/sources.list.d/ubuntu.sources.bak
```

### 2. 编辑源文件

```bash
sudo nano /etc/apt/sources.list.d/ubuntu.sources
```

### 3. 替换为以下内容

```yaml
Types: deb
URIs: http://mirrors.zzu.edu.cn/ubuntu/
Suites: noble noble-updates noble-backports
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg

Types: deb
URIs: http://mirrors.zzu.edu.cn/ubuntu/
Suites: noble-security
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg
```

### 4. 一键替换命令

```bash
sudo sed -i 's|http://archive.ubuntu.com|http://mirrors.zzu.edu.cn|g' /etc/apt/sources.list.d/ubuntu.sources
sudo sed -i 's|http://security.ubuntu.com|http://mirrors.zzu.edu.cn|g' /etc/apt/sources.list.d/ubuntu.sources
```

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

#### Ubuntu 22.04 (Jammy)

```bash
deb http://mirrors.zzu.edu.cn/ubuntu/ jammy main restricted universe multiverse
deb http://mirrors.zzu.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
deb http://mirrors.zzu.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
deb http://mirrors.zzu.edu.cn/ubuntu/ jammy-security main restricted universe multiverse
```

#### Ubuntu 20.04 (Focal)

```bash
deb http://mirrors.zzu.edu.cn/ubuntu/ focal main restricted universe multiverse
deb http://mirrors.zzu.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb http://mirrors.zzu.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb http://mirrors.zzu.edu.cn/ubuntu/ focal-security main restricted universe multiverse
```

### 4. 一键替换命令

```bash
sudo sed -i 's|http://archive.ubuntu.com|http://mirrors.zzu.edu.cn|g' /etc/apt/sources.list
sudo sed -i 's|http://security.ubuntu.com|http://mirrors.zzu.edu.cn|g' /etc/apt/sources.list
```

## 5. 更新软件包索引

```bash 
sudo apt update
```

## 6. 升级已安装的软件包（可选）

```bash
sudo apt upgrade -y
```

## 常见问题

### 如何恢复默认源？

```bash
sudo cp /etc/apt/sources.list.bak /etc/apt/sources.list
sudo apt update
```

### 如何查看当前 Ubuntu 版本代号？

```bash
lsb_release -cs
```
