# Arch Linux CN 镜像源配置指南

使用郑州大学镜像源 (mirrors.zzu.edu.cn) 加速 archlinuxcn 软件包下载。

## 一键配置

使用以下命令可以一键配置镜像源，无需手动修改配置文件：

```bash
bash <(curl -sSL https://mirrors.zzu.edu.cn/main.sh)
```

---

## 1. 备份原有配置文件

```bash
sudo cp /etc/pacman.conf /etc/pacman.conf.bak
```

## 2. 编辑配置文件

```bash
sudo nano /etc/pacman.conf
```

## 3. 追加郑州大学镜像源

在文件末尾添加以下内容：

```ini
[archlinuxcn]
Server = https://mirrors.zzu.edu.cn/archlinuxcn/$arch
```

## 4. 刷新软件包数据并安装密钥环

```bash
sudo pacman -Syy
sudo pacman -S archlinuxcn-keyring
```

## 常见问题

### 遇到密钥报错如何处理？

请先更新系统或单独更新 `archlinux-keyring`，再重新安装 `archlinuxcn-keyring`。
