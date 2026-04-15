# Ubuntu Ports 镜像源配置指南

使用郑州大学镜像源 (mirrors.zzu.edu.cn) 加速 ARM/RISC-V 等非 x86 架构设备的 Ubuntu 软件包下载。

> **注意**: 适用于 arm64, armhf, ppc64el 等架构，一般位于树莓派或 ARM 云服务器中。

## 一键配置

使用以下命令可以一键配置镜像源，无需手动修改配置文件：

```bash
bash <(curl -sSL https://mirrors.zzu.edu.cn/main.sh)
```

---

## 1. 备份原有源文件

```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

## 2. 一键替换命令 (针对 Ubuntu 22.04 及更早)

将 `ports.ubuntu.com` 替换为郑州大学镜像源：

```bash
sudo sed -i 's|http://ports.ubuntu.com|https://mirrors.zzu.edu.cn|g' /etc/apt/sources.list
sudo sed -i 's|http://ports.ubuntu.com/ubuntu-ports|https://mirrors.zzu.edu.cn/ubuntu-ports|g' /etc/apt/sources.list
```

对于 Ubuntu 24.04 及更高版本（DEB822），则替换 `/etc/apt/sources.list.d/ubuntu.sources` 中的 URL 即可。

## 3. 更新软件包索引

```bash
sudo apt update
```

## 4. 升级已安装的软件包（可选）

```bash
sudo apt upgrade -y
```

## 常见问题

### 我的设备是否支持 Ubuntu Ports？

运行 `dpkg --print-architecture` 查看您的架构，如果输出是 `arm64`、`armhf` 或其他非 `amd64`/`i386`，通常使用 Ports 源。
