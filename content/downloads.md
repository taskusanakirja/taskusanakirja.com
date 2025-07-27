---
title: "Downloads"
---

### 1. Download the Application

Download the latest version of Taskusanakirja for your operating system.

* **[Download for macOS (Apple Silicon)](https://github.com/hiAndrewQuinn/taskusanakirja/releases/latest/download/taskusanakirja-darwin-arm64)**
* **[Download for macOS (Intel)](https://github.com/hiAndrewQuinn/taskusanakirja/releases/latest/download/taskusanakirja-darwin-amd64)**
* **[Download for Linux](https://github.com/hiAndrewQuinn/taskusanakirja/releases/latest/download/taskusanakirja-linux-amd64)**
* **[Download for Windows](https://github.com/hiAndrewQuinn/taskusanakirja/releases/latest/download/taskusanakirja-windows-amd64.exe)**

After downloading, move the executable to a directory in your system's `PATH` (e.g., `/usr/local/bin` or `C:\Program Files\taskusanakirja`).

---

### 2. Unlock Pro Features

To enable the powerful inflection search (`Etsi perusmuoto`), you need a **Taskusanakirja Pro** license.

**[➡️ Purchase Taskusanakirja Pro for €15](https://quinnster43.gumroad.com/l/mfaqzr)**

After purchasing, you will receive an email with your license key and a download link for the `inflections.db` file.

#### Pro Database Download

If you've already purchased a license, you can download the required `inflections.db` file here.

* **[Download inflections.db (3.5 GB)](https://pub-your-r2-public-bucket-url.r2.dev/inflections.db)** 👈 **_You will need to update this URL._**

Place the `inflections.db` file in the application's configuration directory:

* **macOS/Linux**: `~/.config/taskusanakirja/`
* **Windows**: `%APPDATA%\taskusanakirja\`

Once the file is in place, activate your license with the command:

```bash
taskusanakirja license set YOUR-LICENSE-KEY
```

```
