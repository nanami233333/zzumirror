# Arch Linux 镜像源配置指南

使用郑州大学镜像源 (mirrors.zzu.edu.cn) 加速 Arch Linux 软件包下载。

---

## 1. 备份原有镜像列表文件

```bash
sudo cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
```

## 2. 编辑镜像列表文件

```bash
sudo nano /etc/pacman.d/mirrorlist
```

## 3. 替换为郑州大学镜像源

在文件最顶端添加以下内容：

```bash
Server = https://mirrors.zzu.edu.cn/archlinux/$repo/os/$arch
```

## 4. 刷新软件包数据

```bash
sudo pacman -Syy
```

## 5. 升级已安装的软件包（可选）

```bash
sudo pacman -Syu
```

## 常见问题

### 如何恢复默认源？

```bash
sudo cp /etc/pacman.d/mirrorlist.bak /etc/pacman.d/mirrorlist
sudo pacman -Syy
```
