---
title: "Downloads"
layout: "downloads"
description:
  "Download Taskusanakirja for macOS, Linux, and Windows. Get the Pro version
  for advanced inflection search."
---

## Quick Installation Guide

After downloading Taskusanakirja, you can start using it immediately!

### Simple Installation (No Terminal Required)

**Windows:**

- Just double-click the downloaded `.exe` file to run Taskusanakirja
- That's it! The program will open and you can start looking up Finnish words

**macOS:**

- Double-click the downloaded file to run Taskusanakirja
- If you see a security warning, go to System Preferences → Security & Privacy and click "Open Anyway"
- The program will open and you're ready to go

**Linux:**

- Right-click the downloaded file and select "Properties"
- Check the box "Allow executing file as program" (or similar)
- Double-click the file to run Taskusanakirja

### Terminal Setup (For Advanced Users)

Want to run `taskusanakirja` directly from your terminal? Here's how:

**Windows:**

1. Place the `.exe` file in a folder like `C:\tools\`
2. [Add that folder to your PATH](https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/)
3. Now you can run `taskusanakirja` from any Command Prompt or PowerShell window

**macOS & Linux:**

1. Open Terminal and navigate to your Downloads folder: `cd ~/Downloads`
2. Make the file executable: `chmod +x taskusanakirja_*`
3. Move it to your PATH: `sudo mv taskusanakirja_* /usr/local/bin/taskusanakirja`
4. Now you can run `taskusanakirja` from anywhere in Terminal

---

### 2. Unlock Pro Features

To enable the powerful inflection search (`Etsi perusmuoto`), you need a
**Taskusanakirja Pro** license.

**[➡️ Purchase Taskusanakirja Pro license for €15 on Gumroad](https://quinnster43.gumroad.com/l/mfaqzr)**

We use Gumroad for secure payment processing. Gumroad is a trusted platform that has been helping creators sell digital products since 2011, processing millions of transactions for developers, artists, and educators worldwide.

After purchasing through Gumroad, you will receive an email with your license key and instructions
for downloading the `inflections.db` file.

#### Activate Your License Through the TUI (recommended)

{{< video-section webm="taskusanakirja-license-activation.webm" mp4="taskusanakirja-license-activation.mp4" >}}
The easiest way to activate your license is through the Taskusanakirja TUI. Simply navigate to the license activation menu and paste your license key when prompted.

**Note:** The download process will fetch the Pro database (inflections.db, approx. 2.6 GB). This large file contains the comprehensive lexical data that powers the instant inflection search.

**Tip:** In terminals, use **Ctrl+Shift+V** (or **Cmd+V** on macOS) to paste, not Ctrl+V.
{{< /video-section >}}

#### Activate Your License Through the Command Line

You can also activate your license via the command line. Both steps are required for Pro features to work:

1. Set your license key:

   ```bash
   taskusanakirja license set YOUR-LICENSE-KEY
   ```

2. Download the inflections database:

   ```bash
   taskusanakirja download-inflections
   ```

   **Note:** The `download-inflections` command will download the Pro database (inflections.db, approx. 2.6 GB). This large file contains the comprehensive lexical data that powers the instant inflection search. Both the license key and inflections database are required for Pro features to work. The command automatically places the database in the correct location.

3. Verify everything is working correctly:

   ```bash
   taskusanakirja license check
   ```

   What this should look like:

```bash

```

❯ taskusanakirja license check
=== License Check: Local + Remote Validation ===

1. Running local validation...
   ✅ License blob found
   Validating license blob...
   State transition: ✅ Active → Checking (local validation)
   Validation result: ✅ Active
   ✅ Active

- Signature verification: PASSED
- Machine hash check: PASSED

--- Inflections Database Check ---
Checking for inflections.db... ✅ Found
Testing database access... ✅ Working

- Database is accessible and queryable
- Sample query returned 50 results

2. Running remote verification...

--- Local Authentication ---
State transition: ✅ Active → Checking (local validation)
Local validation result: ✅ Active
✅ Active

🔍 Checking secure connection to license server... ✅ OK
🔍 Verifying license status...
State transition: ✅ Active → Checking (server verification)

--- Remote Verification ---
✅ License valid
Last verified: 2025-08-10T17:52:24+03:00

=== Final Status Summary ===
License Status: ✅ Active

```

```

---

## Download or Verify a Specific Version

### How to Verify Checksums

To ensure your download is authentic and uncorrupted, you can verify the MD5 checksum:

#### Command Line (Works Everywhere)

**On macOS/Linux:**

```bash
md5sum taskusanakirja_*
# or
md5 taskusanakirja_*  # on macOS
```

**On Windows (PowerShell):**

```powershell
Get-FileHash taskusanakirja_*.exe -Algorithm MD5
```

Compare the output with the checksums listed below for your specific version.

#### GUI Methods (Alternative Options)

**On Windows:**

- If you have [7-Zip](https://www.7-zip.org/) installed:
  - Right-click the downloaded `.exe` file → 7-Zip → CRC SHA → MD5
- If you have WinRAR installed:
  - Right-click the file → Open with WinRAR → Tools → Show Information → CRC32, CRC64, SHA-256 (includes MD5 in newer versions)
- Windows 11 has a built-in option (limited availability):
  - Right-click file → Show more options → Hash

**On macOS:**

- Unfortunately, macOS doesn't have a built-in GUI method for checksums
- The Terminal command above is the quickest option
- If you prefer a GUI, you can search "MD5" in the App Store for various free options

**On Linux:**

- **Ubuntu/Pop!\_OS/Mint (with GNOME Files/Nautilus):**
  - Some versions: Right-click file → Properties → Digests tab
  - Or install GtkHash: `sudo apt install gtkhash`
  - After installing: Right-click file → Open With → GtkHash
- **KDE (Kubuntu/KDE Neon/openSUSE):**
  - Dolphin file manager has built-in checksums
  - Right-click file → Properties → Checksums tab
  - Select MD5 from the dropdown
- **Fedora/RHEL:**
  - Install GtkHash: `sudo dnf install gtkhash`
  - Or use Nautilus extension: `sudo dnf install gtkhash-nautilus`
  - Right-click file → Properties → Digests tab (after installing extension)
- **Elementary OS:**
  - No built-in option; use the Terminal command above

---

<!-- When adding new versions, list them in reverse chronological order (newest first) -->

### Version 1.0.0 (Released Aug 10, 2025)

<div class="table-wrapper" style="overflow-x: auto; margin: 1rem 0;">

| Platform                  | Filename                                                                                                            | Size    | MD5 Checksum                       |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------ | :------ | :--------------------------------- |
| **macOS (Apple Silicon)** | [taskusanakirja_darwin_arm64_v1-0-0](https://files.taskusanakirja.com/taskusanakirja_darwin_arm64_v1-0-0)           | 58.4 MB | `2f4a0da254f600b188dbdf6d05cb9fb0` |
| **macOS (Intel)**         | [taskusanakirja_darwin_amd64_v1-0-0](https://files.taskusanakirja.com/taskusanakirja_darwin_amd64_v1-0-0)           | 63.0 MB | `47fdd9c3b650a076262c1ef00d599f60` |
| **Linux (64-bit)**        | [taskusanakirja_linux_amd64_v1-0-0](https://files.taskusanakirja.com/taskusanakirja_linux_amd64_v1-0-0)             | 61.8 MB | `36eaab40b8e1dffd133283fe979ccec3` |
| **Linux (ARM64)**         | [taskusanakirja_linux_arm64_v1-0-0](https://files.taskusanakirja.com/taskusanakirja_linux_arm64_v1-0-0)             | 57.6 MB | `40e4fb37ebc6ef5c9a1b4a43044fbe82` |
| **Windows (64-bit)**      | [taskusanakirja_windows_amd64_v1-0-0.exe](https://files.taskusanakirja.com/taskusanakirja_windows_amd64_v1-0-0.exe) | 63.0 MB | `9c19d67479ba6bee10be42121518c9b7` |
| **Windows (32-bit)**      | [taskusanakirja_windows_386_v1-0-0.exe](https://files.taskusanakirja.com/taskusanakirja_windows_386_v1-0-0.exe)     | 58.9 MB | `aee343eb8b4b5dce9c6fad9de538ddc3` |

</div>

#### Pro Database File

| File           | Size    | MD5 Checksum                       |
| :------------- | :------ | :--------------------------------- |
| inflections.db | 2.59 GB | `d1bcd344dae5d9b8a540edcadb789411` |
