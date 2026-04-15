# CTAN 镜像源配置指南

使用郑州大学镜像源 (mirrors.zzu.edu.cn) 加速 TeX Live 宏包更新和分发下载。

## 一键配置

使用以下命令可以一键配置镜像源，无需手动修改配置文件：

```bash
bash <(curl -sSL https://mirrors.zzu.edu.cn/main.sh)
```

---

## 1. 使用 tlmgr 命令切换源

```bash
sudo tlmgr option repository https://mirrors.zzu.edu.cn/CTAN/systems/texlive/tlnet
```

## 2. 更新 tlmgr 自身和所有宏包

```bash
sudo tlmgr update --self --all
```

## 3. 如果需要单独安装特定的宏包

```bash
sudo tlmgr install <package_name>
```

## 常见问题

### 如何验证源是否已切换成功？

运行以下命令，输出结果应包含郑州大学 CTAN 镜像地址：

```bash
tlmgr option repository
```
