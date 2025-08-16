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

You can also activate your license via the command line. This can be a good fallback if the TUI isn't working for you for some reason (please let us know!). All steps are required for Pro features to work.

1. Set your license key:

   ```bash
   taskusanakirja license set YOUR-LICENSE-KEY
   ```

   What you should see:
   ```bash
   ❯ taskusanakirja license set DEADBEEF-12341234-12341234-DEADBEEF
   Current license status: ❓ Not Checked
   🔍 Checking secure connection to license server... ✅ OK
   💾 Saving license key locally...
   🤝 Activating license with server...
   State transition: ❓ Not Checked → Checking
   🤝 Activating license with server (with retry)...  # This part might repeat, that's normal!

   ✅ License activated successfully! Pro features are now enabled.
   Final status: ✅ Active

   💡 To enable inflection search (lemmatizer), run:
      taskusanakirja download-inflections
         This will download the 2.6 GB inflections database.
   ```

2. Download the inflections database:

   ```bash
   taskusanakirja download-inflections
   ```

   **Note:** The `download-inflections` command will download the Pro database (approx. 2.6 GB). This large file contains the comprehensive lexical data that powers the instant inflection search. Both the license key and inflections database are required for Pro features to work. The command automatically places the database in the correct location.

3. Verify everything is working correctly:

   ```bash
   taskusanakirja license check   # run this 2-3 times, please.
   ```

   What this should look like:

   ```bash
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

   If the last line says `License Status: ⚠️ Error`, run 
   `taskusanakirja license check` one or two more times. 
   This is a known bug.

4. Moment of truth! Test it out with a Pro-only `lemma` command:

   ```bash
   taskusanakirja lemma koirassamme
   ```

   What you should see:

   ```bash
   ❯ taskusanakirja lemma koirassamme
   
   Found possible base form(s) for 'koirassamme':
   ---
   koirassamme ~> koira
   Koirassamme ~> Koira    # success!
   ---
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

| Platform                  | Filename                                                                                                            | Size (MB) | Size (MiB) | Size (bytes) | MD5 Checksum                       |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------ | :-------- | :--------- | :----------- | :--------------------------------- |
| **macOS (Apple Silicon)** | [taskusanakirja_darwin_arm64_v1-0-0](https://files.taskusanakirja.com/taskusanakirja_darwin_arm64_v1-0-0) | 61.2 MB | 58.3 MiB | 61,170,098 | `1689018644991642653d5b1096558db3` |
| **macOS (Intel)** | [taskusanakirja_darwin_amd64_v1-0-0](https://files.taskusanakirja.com/taskusanakirja_darwin_amd64_v1-0-0) | 65.5 MB | 62.5 MiB | 65,523,520 | `ac8f3fdc06c4cacf086e64f4fb74f29b` |
| **Linux (64-bit)** | [taskusanakirja_linux_amd64_v1-0-0](https://files.taskusanakirja.com/taskusanakirja_linux_amd64_v1-0-0) | 65.6 MB | 62.5 MiB | 65,564,820 | `10025c173d9af0f21e85897dfed0a0fc` |
| **Linux (ARM64)** | [taskusanakirja_linux_arm64_v1-0-0](https://files.taskusanakirja.com/taskusanakirja_linux_arm64_v1-0-0) | 60.5 MB | 57.7 MiB | 60,489,876 | `bf155b3f42cda41c8d473f4ed4267e53` |
| **Windows (64-bit)** | [taskusanakirja_windows_amd64_v1-0-0.exe](https://files.taskusanakirja.com/taskusanakirja_windows_amd64_v1-0-0.exe) | 66.5 MB | 63.4 MiB | 66,464,768 | `22058c5fef15d60cac862d77ef487367` |
| **Windows (32-bit)** | [taskusanakirja_windows_386_v1-0-0.exe](https://files.taskusanakirja.com/taskusanakirja_windows_386_v1-0-0.exe) | 61.2 MB | 58.4 MiB | 61,214,208 | `d8d243be79b8174d3080a47df6172f21` |

</div>

#### Pro Database File

| File           | Size    | MD5 Checksum                       |
| :------------- | :------ | :--------------------------------- |
| inflections.db | 2.59 GB | `d1bcd344dae5d9b8a540edcadb789411` |
