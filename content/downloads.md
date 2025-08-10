---
title: "Downloads"
layout: "downloads"
description:
  "Download Taskusanakirja for macOS, Linux, and Windows. Get the Pro version
  for advanced inflection search."
---

You should be able to just download the `taskusanakirja.exe` or the like
from the links above, double click it, and have it run.
An average user should _not_ need to read the instructions below. They
are only here for us computer nerds!

---

## Detailed installation instructions

### 1. Download the Application

Download the latest version of Taskusanakirja for your operating system.

- **[Download for macOS (Apple Silicon)](https://files.taskusanakirja.com/taskusanakirja_darwin_arm64_v1-0-0)**
- **[Download for macOS (Intel)](https://files.taskusanakirja.com/taskusanakirja_darwin_amd64_v1-0-0)**
- **[Download for Linux](https://files.taskusanakirja.com/taskusanakirja_linux_amd64_v1-0-0)**
- **[Download for Windows](https://files.taskusanakirja.com/taskusanakirja_windows_amd64_v1-0-0.exe)**

You can double click the downloaded file to run it, as-is.

If you want to be able to run it just from the command prompt downloading, move the executable to a directory in your system's `PATH`
(e.g., `/usr/local/bin` or `C:\Program Files\taskusanakirja`).

---

### 2. Unlock Pro Features

To enable the powerful inflection search (`Etsi perusmuoto`), you need a
**Taskusanakirja Pro** license.

**[➡️ Purchase Taskusanakirja Pro for €15](https://quinnster43.gumroad.com/l/mfaqzr)**

After purchasing, you will receive an email with your license key and a download
link for the `inflections.db` file.

#### Pro Database Download

If you've already purchased a license, you can download the required
`inflections.db` file here.

- **[Download inflections.db (3.5 GB)](https://files.taskusanakirja.com/inflections.db)**

Place the `inflections.db` file in the application's configuration directory:

- **macOS/Linux**: `~/.config/taskusanakirja/`
- **Windows**: `%APPDATA%\taskusanakirja\`

Once the file is in place, activate your license with the command:

```bash
taskusanakirja license set YOUR-LICENSE-KEY
```

```

```
