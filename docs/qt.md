# Qt 镜像源使用指南

使用郑州大学镜像源 (mirrors.zzu.edu.cn) 高速下载 Qt 安装包或在线仓库文件。

## 💡 简介

**什么是 Qt？**
Qt（发音类似 "cute"）是一个跨平台的应用程序开发框架，广泛用于开发桌面应用、嵌入式界面和移动应用。很多知名软件（如 KDE 桌面环境、VLC 播放器、WPS Office 等）都是用 Qt 开发的。

**为什么要用镜像源下载？**
Qt 的安装程序和软件包体积较大，官方服务器在国外，下载速度可能很慢。使用郑州大学镜像源可以显著加快下载速度。

> **技术说明**：Qt 官方提供在线安装器（Online Installer）和离线安装包（Offline Installer，已逐步弃用）两种安装方式。在线安装器支持通过 `--mirror` 参数指定自定义镜像源 URL，将下载流量重定向至指定的镜像服务器。

## 一键配置

使用以下命令可以一键配置镜像源，无需手动修改配置文件：

```bash
bash <(curl -sSL https://mirrors.zzu.edu.cn/main.sh)
```

---

## 1. 使用浏览器下载

直接通过浏览器打开以下地址，即可浏览和下载所需文件：

[https://mirrors.zzu.edu.cn/qt/](https://mirrors.zzu.edu.cn/qt/)

- **在线安装器**：位于 `online/` 目录 — 下载后运行即可选择需要的 Qt 版本和组件
- **离线安装包归档**：位于 `archive/` 目录 — 包含历史版本的完整安装包

> **给初学者**：建议下载 `online/` 目录中的在线安装器，它体积小、能按需选择组件，更加灵活。

## 2. 使用 Qt Online Installer 配置镜像

下载在线安装器后，在终端中使用指定的镜像源参数启动安装器：

```bash
./qt-unified-linux-x64-online.run --mirror https://mirrors.zzu.edu.cn/qt/
```

> **注意：** 请将 `qt-unified-linux-x64-online.run` 替换为你实际下载到的安装程序名称。如果提示权限不足，先运行 `chmod +x qt-unified-linux-x64-online.run` 赋予执行权限。

> **技术说明**：`--mirror` 参数会将安装器的所有 HTTP 请求重定向到指定的镜像 URL。该参数在 Qt 5.12+ 的在线安装器中受支持。如果使用 Windows 或 macOS 版安装器，同样可以在命令行中添加此参数。

## 常见问题

### 下载速度依然很慢？

1. 检查你的网络环境是否正常连接
2. 使用带断点续传功能的下载工具（如 `wget -c` 或 `axel`）通过直链下载
3. 如果在校园网环境下，确认是否需要登录网络认证页面

### 安装器提示无法连接到服务器？

确保使用了 `--mirror` 参数，且 URL 拼写正确（末尾需要包含 `/`）。

> **技术说明**：如果安装器在启动时仍然尝试连接官方服务器（如 `download.qt.io`），请检查是否有代理或防火墙拦截了请求。可以通过 `--proxy` 参数指定代理，或者临时设置 `http_proxy` / `https_proxy` 环境变量。
