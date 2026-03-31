# Docker CE 镜像源配置指南

使用郑州大学镜像源 (mirrors.zzu.edu.cn) 加速 Docker CE 安装。

---

## 1. 添加 GPG 密钥

```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://mirrors.zzu.edu.cn/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```

## 2. 备份并替换原有源文件

```bash
sudo cp /etc/apt/sources.list.d/docker.list /etc/apt/sources.list.d/docker.list.bak 2>/dev/null || true
```

## 3. 写入为郑州大学镜像源

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://mirrors.zzu.edu.cn/docker-ce/linux/ubuntu \
  $(. /etc/os-release && echo $VERSION_CODENAME) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

## 4. 更新软件包索引

```bash
sudo apt update
```

## 5. 安装 Docker CE

```bash
sudo apt install docker-ce docker-ce-cli containerd.io
```

## 常见问题

### 如何拉取容器镜像加速？

请参考 Docker Registry 镜像加速相关文档配置 `/etc/docker/daemon.json` 中的 `registry-mirrors` 字段。
