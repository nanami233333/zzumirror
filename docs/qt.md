# Qt 镜像源使用指南

使用郑州大学镜像源 (mirrors.zzu.edu.cn) 高速下载 Qt 安装包或在线仓库文件。

## 一键配置

使用以下命令可以一键配置镜像源，无需手动修改配置文件：

```bash
bash <(curl -sSL https://mirrors.zzu.edu.cn/main.sh)
```

---

## 1. 使用浏览器下载

直接通过浏览器打开所需目录：
[https://mirrors.zzu.edu.cn/qt/](https://mirrors.zzu.edu.cn/qt/)

- **在线安装源**：位于 `online/`
- **离线安装包归档**：位于 `archive/`

## 2. 使用 Qt Online Installer 配置镜像

在终端中使用指定的镜像源参数启动安装器：

```bash
./qt-unified-linux-x64-online.run --mirror https://mirrors.zzu.edu.cn/qt/
```

> **注意：** 请将 `qt-unified-linux-x64-online.run` 替换为您实际下载到的安装程序名称。

## 常见问题

### 下载速度依然很慢？

检查您的网络环境，或者使用具有断点续传功能的工具（如 `wget -c`、`axel` 等）通过直链下载。
