# Ubuntu Releases 镜像下载指南

通过郑州大学镜像源 (mirrors.zzu.edu.cn) 高速下载 Ubuntu ISO 安装镜像文件。

## 一键配置

使用以下命令可以一键配置镜像源，无需手动修改配置文件：

```bash
bash <(curl -sSL https://mirrors.zzu.edu.cn/main.sh)
```

---

## 1. 直接网页浏览

访问以下地址浏览各个版本的 ISO 及发布文件：
[https://mirrors.zzu.edu.cn/ubuntu-releases/](https://mirrors.zzu.edu.cn/ubuntu-releases/)

## 2. 命令行下载示例 (以 Ubuntu 24.04 为例)

```bash
wget -c https://mirrors.zzu.edu.cn/ubuntu-releases/24.04/ubuntu-24.04-desktop-amd64.iso
```

## 3. 下载后进行完整性校验（推荐）

下载对应的检验文件：
```bash
wget -c https://mirrors.zzu.edu.cn/ubuntu-releases/24.04/SHA256SUMS
```

校验镜像是否一致无损坏：
```bash
sha256sum -c SHA256SUMS --ignore-missing
```

## 常见问题

### 为什么校验提示不匹配？

可能由于下载过程中的网络中断导致了文件不完整，建议使用带断点续传的工具或者重新下载。
