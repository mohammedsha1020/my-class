# 🎓 Nmap Complete Guide - From Basics to Advanced
## *Seminar Presentation for 1st Year Students*

---

# 📚 PART 1: NETWORKING FUNDAMENTALS

---

## 🌐 What is a Network?

A **network** is a collection of computers and devices connected together to share resources and communicate.

### Types of Networks:
| Type | Full Form | Range | Example |
|------|-----------|-------|---------|
| **LAN** | Local Area Network | Small area (building) | Home WiFi, Office |
| **WAN** | Wide Area Network | Large area (cities/countries) | Internet |
| **MAN** | Metropolitan Area Network | City-wide | Cable TV network |

### Real-Life Analogy:
> 🏠 Think of a network like a **postal system** - every house (computer) has an address (IP), and letters (data packets) are delivered through roads (cables/WiFi).

---

## 🔢 What is an IP Address?

An **IP Address** (Internet Protocol Address) is a unique numerical label assigned to every device on a network.

### IPv4 vs IPv6:
| Version | Format | Example | Total Addresses |
|---------|--------|---------|-----------------|
| **IPv4** | 4 numbers (0-255) | `192.168.1.1` | ~4.3 billion |
| **IPv6** | 8 groups of hex | `2001:0db8:85a3::8a2e:0370:7334` | 340 undecillion |

### Types of IP:
- **Public IP** → Visible on internet (like your home address)
- **Private IP** → Used inside network (like room number)
- **Static IP** → Never changes
- **Dynamic IP** → Changes periodically (DHCP assigned)

### Private IP Ranges:
```
Class A: 10.0.0.0 – 10.255.255.255
Class B: 172.16.0.0 – 172.31.255.255
Class C: 192.168.0.0 – 192.168.255.255
```

---

## 🚪 What is a PORT?

A **port** is a virtual door/endpoint for network communication. It helps identify which application should receive the data.

### Real-Life Analogy:
> 🏢 If IP address is a **building address**, then port is the **apartment number**. 
> Data knows which building (IP) to go to, and which apartment (port) to deliver.

### Port Ranges:
| Range | Name | Usage |
|-------|------|-------|
| **0-1023** | Well-Known Ports | System services (HTTP, FTP, SSH) |
| **1024-49151** | Registered Ports | User applications |
| **49152-65535** | Dynamic/Private | Temporary connections |

### 🔥 Important Ports to Remember:

| Port | Service | Protocol | What it does |
|------|---------|----------|--------------|
| **20, 21** | FTP | TCP | File Transfer |
| **22** | SSH | TCP | Secure Shell (Remote Login) |
| **23** | Telnet | TCP | Unsecure Remote Login |
| **25** | SMTP | TCP | Send Emails |
| **53** | DNS | TCP/UDP | Domain Name Resolution |
| **67, 68** | DHCP | UDP | Auto IP Assignment |
| **80** | HTTP | TCP | Web Browsing |
| **110** | POP3 | TCP | Receive Emails |
| **143** | IMAP | TCP | Email Access |
| **443** | HTTPS | TCP | Secure Web Browsing |
| **3306** | MySQL | TCP | Database |
| **3389** | RDP | TCP | Remote Desktop (Windows) |

### Port States:
- **Open** → Service is listening, accepting connections ✅
- **Closed** → No service listening, but accessible ❌
- **Filtered** → Firewall blocking, can't determine state 🔒

---

## 📡 What is a PROTOCOL?

A **protocol** is a set of rules that define how data is transmitted and received over a network.

### Real-Life Analogy:
> 📞 When you make a phone call, there's a protocol: dial → ring → hello → conversation → bye → hang up. 
> Network protocols work the same way!

### OSI Model (7 Layers):

```
┌─────────────────────────────────────┐
│  Layer 7: APPLICATION    (HTTP, FTP, DNS)     │
├─────────────────────────────────────┤
│  Layer 6: PRESENTATION   (SSL, Encryption)    │
├─────────────────────────────────────┤
│  Layer 5: SESSION        (Authentication)     │
├─────────────────────────────────────┤
│  Layer 4: TRANSPORT      (TCP, UDP)           │
├─────────────────────────────────────┤
│  Layer 3: NETWORK        (IP, ICMP, Routing)  │
├─────────────────────────────────────┤
│  Layer 2: DATA LINK      (MAC, Ethernet)      │
├─────────────────────────────────────┤
│  Layer 1: PHYSICAL       (Cables, WiFi)       │
└─────────────────────────────────────┘
```

**Memory Trick:** "**A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing"

---

## 🔄 TCP vs UDP - The Two Transport Protocols

### 📦 TCP (Transmission Control Protocol)

**Connection-Oriented** - Establishes connection before sending data.

#### TCP 3-Way Handshake:
```
Client                    Server
   |                         |
   |-------- SYN ----------->|   (Hey, can we talk?)
   |                         |
   |<------ SYN-ACK ---------|   (Sure, I'm ready!)
   |                         |
   |-------- ACK ----------->|   (Great, let's start!)
   |                         |
   |===== DATA TRANSFER =====|
```

#### TCP Features:
- ✅ **Reliable** - Guarantees delivery
- ✅ **Ordered** - Data arrives in sequence
- ✅ **Error Checking** - Detects corrupted data
- ❌ **Slower** - Due to overhead

#### Used For:
- Web browsing (HTTP/HTTPS)
- Email (SMTP, POP3, IMAP)
- File transfer (FTP)
- Remote access (SSH)

---

### ⚡ UDP (User Datagram Protocol)

**Connectionless** - Sends data without establishing connection.

#### UDP Flow:
```
Client                    Server
   |                         |
   |-------- DATA ---------->|   (Here's data, catch it!)
   |-------- DATA ---------->|   (More data!)
   |-------- DATA ---------->|   (Even more!)
   |                         |
   (No acknowledgment needed)
```

#### UDP Features:
- ✅ **Fast** - No handshake overhead
- ✅ **Low Latency** - Real-time data
- ❌ **Unreliable** - No delivery guarantee
- ❌ **Unordered** - Packets may arrive out of order

#### Used For:
- Video streaming (YouTube, Netflix)
- Online gaming
- Voice calls (VoIP)
- DNS queries
- Live broadcasts

---

### 🆚 TCP vs UDP Comparison:

| Feature | TCP | UDP |
|---------|-----|-----|
| **Connection** | Connection-oriented | Connectionless |
| **Reliability** | Guaranteed delivery | Best effort |
| **Speed** | Slower | Faster |
| **Order** | Ordered | Unordered |
| **Error Checking** | Yes + Retransmission | Basic only |
| **Header Size** | 20-60 bytes | 8 bytes |
| **Use Case** | Accuracy needed | Speed needed |

### Analogy:
> 📬 **TCP** = Registered Post (confirmation required)
> 📨 **UDP** = Regular Post (just send and hope it arrives)

---

## 🛡️ What is a FIREWALL?

A **firewall** is a security system that monitors and controls incoming/outgoing network traffic based on rules.

### Types:
- **Packet Filtering** → Checks IP, port, protocol
- **Stateful Inspection** → Tracks connection state
- **Application Layer** → Deep packet inspection
- **Next-Gen (NGFW)** → AI-based threat detection

### Firewall Actions:
- **ACCEPT** → Allow the packet ✅
- **DROP** → Silently discard ❌
- **REJECT** → Discard + send error message 🚫

---

# 📚 PART 2: INTRODUCTION TO NMAP

---

## 🧭 What is Nmap?

**Nmap (Network Mapper)** is a free, open-source tool for:

- 🔍 **Network Discovery** - Find live hosts
- 🚪 **Port Scanning** - Find open ports
- 🔧 **Service Detection** - Identify running services
- 💻 **OS Detection** - Identify operating system
- 🛡️ **Security Auditing** - Find vulnerabilities

### Why Learn Nmap?
- #1 tool for penetration testers
- Used in reconnaissance phase
- Essential for cybersecurity professionals
- Helps identify network weaknesses

### Legal Warning ⚠️
> Only scan networks you own or have **explicit permission** to scan. 
> Unauthorized scanning is **ILLEGAL** and can result in criminal charges!

---

## 📦 Installation

### Linux:
```bash
sudo apt update && sudo apt install nmap -y     # Ubuntu/Debian
sudo yum install nmap -y                        # CentOS/RHEL
sudo pacman -S nmap                             # Arch Linux
```

### Windows:
Download from: https://nmap.org/download.html

### macOS:
```bash
brew install nmap
```

### Verify Installation:
```bash
nmap --version
```

---

# 📚 PART 3: NMAP SCANNING TECHNIQUES

---

## 🎯 Basic Scans

### Scan a Domain:
```bash
nmap example.com
```
🔍 Resolves domain → scans top 1000 common ports

### Scan an IP:
```bash
nmap 192.168.1.1
```

### Verbose Mode (See Progress):
```bash
nmap -v example.com
nmap -vv example.com    # Extra verbose
```

---

## 🎯 Scanning Multiple Targets

### Multiple IPs:
```bash
nmap 192.168.1.1 192.168.1.2 192.168.1.3
```

### IP Range:
```bash
nmap 192.168.1.1-50          # Scan IPs 1 to 50
```

### Subnet (CIDR):
```bash
nmap 192.168.1.0/24          # Scan entire subnet (256 IPs)
```

### Wildcard:
```bash
nmap 192.168.1.*             # Same as /24
```

### From File:
```bash
nmap -iL targets.txt         # Read targets from file
```

### Exclude Targets:
```bash
nmap 192.168.1.0/24 --exclude 192.168.1.1
nmap 192.168.1.0/24 --excludefile exclude.txt
```

---

## 🧪 Scan Types Explained

### 1️⃣ TCP SYN Scan (Stealth Scan) - DEFAULT
```bash
sudo nmap -sS target
```
- **How:** Sends SYN → receives SYN-ACK → sends RST (never completes handshake)
- **Why Stealth:** Connection never fully established, less likely to be logged
- **Requires:** Root/Admin privileges

### 2️⃣ TCP Connect Scan
```bash
nmap -sT target
```
- **How:** Completes full TCP handshake
- **Use When:** Don't have root privileges
- **Downside:** Easily detected, gets logged

### 3️⃣ UDP Scan
```bash
sudo nmap -sU target
```
- **How:** Sends UDP packets, waits for response
- **Challenge:** Slower (no acknowledgment in UDP)
- **Use For:** DNS (53), DHCP (67), SNMP (161)

### 4️⃣ ACK Scan (Firewall Detection)
```bash
sudo nmap -sA target
```
- **How:** Sends ACK packets
- **Purpose:** Determine firewall rules (filtered vs unfiltered)
- **Note:** Cannot determine if port is open/closed

### 5️⃣ Ping Scan (Host Discovery)
```bash
nmap -sn target
nmap -sn 192.168.1.0/24     # Find all live hosts
```
- **How:** ICMP echo + TCP SYN/ACK
- **Purpose:** Check if host is online (no port scan)

### 6️⃣ List Scan
```bash
nmap -sL target
```
- **Purpose:** List targets without scanning (DNS resolution only)

---

### 📊 Scan Types Summary Table:

| Scan | Flag | Privileges | Speed | Stealth | Use Case |
|------|------|------------|-------|---------|----------|
| **SYN** | `-sS` | Root | Fast | High | Default choice |
| **Connect** | `-sT` | User | Medium | Low | No root access |
| **UDP** | `-sU` | Root | Slow | Medium | UDP services |
| **ACK** | `-sA` | Root | Fast | Medium | Firewall rules |
| **Ping** | `-sn` | User | Fast | N/A | Host discovery |

---

## 🔢 Port Scanning Options

### Specific Ports:
```bash
nmap -p 22 target                    # Single port
nmap -p 22,80,443 target             # Multiple ports
nmap -p 1-1000 target                # Port range
```

### All Ports:
```bash
nmap -p- target                      # All 65535 ports
```

### Top Ports:
```bash
nmap --top-ports 100 target          # Most common 100
```

### Fast Scan:
```bash
nmap -F target                       # Top 100 ports only
```

### Service-Specific:
```bash
nmap -p http,https,ssh target        # By service name
```

---

## 🚀 Service & OS Detection

### Service Version Detection:
```bash
nmap -sV target
```
Shows: Apache 2.4.41, OpenSSH 8.2, MySQL 5.7

### Aggressive Version Detection:
```bash
nmap -sV --version-intensity 5 target    # 0-9 scale
```

### OS Detection:
```bash
sudo nmap -O target
```
Detects: Windows 10, Ubuntu 20.04, etc.

### Aggressive Scan (All-in-One):
```bash
sudo nmap -A target
```
Includes:
- OS detection (`-O`)
- Version detection (`-sV`)
- Script scanning (`-sC`)
- Traceroute (`--traceroute`)

---

## 📜 Nmap Scripting Engine (NSE)

NSE allows running scripts for advanced scanning.

### Default Scripts:
```bash
nmap -sC target
# OR
nmap --script=default target
```

### Vulnerability Scan:
```bash
nmap --script=vuln target
```

### Specific Script:
```bash
nmap --script=http-title target
nmap --script=ssh-brute target
```

### Multiple Scripts:
```bash
nmap --script=http-title,http-headers target
```

### Script Categories:
| Category | Purpose |
|----------|---------|
| `auth` | Authentication bypass |
| `broadcast` | Network discovery |
| `brute` | Password cracking |
| `default` | Safe, useful scripts |
| `discovery` | Information gathering |
| `exploit` | Exploitation |
| `vuln` | Vulnerability detection |

---

## 📂 Output Options

### Normal Output:
```bash
nmap target -oN scan.txt
```

### XML Output:
```bash
nmap target -oX scan.xml
```

### Grepable Output:
```bash
nmap target -oG scan.gnmap
```

### All Formats:
```bash
nmap target -oA scan_results     # Creates .nmap, .xml, .gnmap
```

---

## ⏱️ Timing & Performance

### Timing Templates:
```bash
nmap -T0 target    # Paranoid   (IDS evasion, very slow)
nmap -T1 target    # Sneaky     (IDS evasion, slow)
nmap -T2 target    # Polite     (Less bandwidth)
nmap -T3 target    # Normal     (Default)
nmap -T4 target    # Aggressive (Fast, reliable network)
nmap -T5 target    # Insane     (Very fast, may miss ports)
```

### Custom Timing:
```bash
nmap --min-rate 1000 target       # Min 1000 packets/sec
nmap --max-retries 2 target       # Max retry attempts
```

---

## 🕵️ Firewall Evasion Techniques

### Fragment Packets:
```bash
nmap -f target                    # Fragment into 8-byte chunks
nmap -f -f target                 # 16-byte fragments
```

### Custom MTU:
```bash
nmap --mtu 24 target              # Must be multiple of 8
```

### Decoy Scan:
```bash
nmap -D RND:5 target              # 5 random decoy IPs
nmap -D decoy1,decoy2,ME target   # Specific decoys
```

### Spoof Source:
```bash
nmap -S 192.168.1.100 target      # Spoof source IP
nmap --spoof-mac 00:11:22:33:44:55 target   # Spoof MAC
```

### Idle/Zombie Scan:
```bash
nmap -sI zombie_host target       # Use zombie for scanning
```

---

# 📚 PART 4: PRACTICAL EXAMPLES

---

## 🔰 Beginner Commands:

```bash
# Check if host is alive
nmap -sn 192.168.1.1

# Quick scan of common ports
nmap -F 192.168.1.1

# Scan with service versions
nmap -sV 192.168.1.1
```

## 🔷 Intermediate Commands:

```bash
# Full TCP scan with versions
nmap -sT -sV -p- target

# Scan entire network for live hosts
nmap -sn 192.168.1.0/24

# Detect OS and services
sudo nmap -O -sV target
```

## 🔴 Advanced Commands:

```bash
# Aggressive scan with all scripts
sudo nmap -A -T4 target

# Stealth scan with evasion
sudo nmap -sS -T2 -f -D RND:3 target

# Vulnerability assessment
nmap --script=vuln -sV target

# Complete audit scan
sudo nmap -sS -sU -T4 -A -v -PE -PP -PS80,443 -PA3389 -PU40125 -PY -g 53 target
```

---

# 📚 PART 5: QUICK REFERENCE CHEAT SHEET

---

## 🎯 Target Specification:
| Command | Description |
|---------|-------------|
| `nmap target` | Single target |
| `nmap target1 target2` | Multiple targets |
| `nmap 192.168.1.1-254` | IP range |
| `nmap 192.168.1.0/24` | CIDR subnet |
| `nmap -iL list.txt` | From file |
| `nmap --exclude target` | Exclude target |

## 🔍 Scan Types:
| Command | Description |
|---------|-------------|
| `-sS` | SYN scan (stealth) |
| `-sT` | TCP connect scan |
| `-sU` | UDP scan |
| `-sA` | ACK scan |
| `-sn` | Ping scan |
| `-Pn` | Skip host discovery |

## 🔢 Port Options:
| Command | Description |
|---------|-------------|
| `-p 22` | Single port |
| `-p 22,80,443` | Multiple ports |
| `-p 1-1000` | Port range |
| `-p-` | All 65535 ports |
| `-F` | Fast (top 100) |
| `--top-ports 20` | Top N ports |

## 🔧 Detection:
| Command | Description |
|---------|-------------|
| `-sV` | Service version |
| `-O` | OS detection |
| `-A` | Aggressive (all) |
| `-sC` | Default scripts |

## 📂 Output:
| Command | Description |
|---------|-------------|
| `-oN file` | Normal output |
| `-oX file` | XML output |
| `-oG file` | Grepable |
| `-oA file` | All formats |

## ⏱️ Timing:
| Command | Description |
|---------|-------------|
| `-T0` to `-T5` | Timing templates |
| `-T4` | Fast & reliable |

---

# ⚠️ Important Reminders

### For Your Seminar:

1. **Always get permission** before scanning any network
2. **Nmap is a tool** - ethical use is your responsibility
3. **Start with basics** - `-sn` and `-F` before aggressive scans
4. **Understand the output** - know what open/closed/filtered means
5. **Practice on your own network** or use `scanme.nmap.org`

### Simple Explanation for Class:
> "Imagine Nmap as a security guard checking all doors (ports) in a building (server). 
> It knocks on each door to see if it's open, who's inside (service), and reports back. 
> SYN scan is like a quiet knock, aggressive scan is like checking everything thoroughly."

---

# 🎓 Seminar Presentation Tips

### Suggested Flow:
1. **Start with Networking Basics** (5 min) - IP, Ports, Protocols
2. **Explain TCP vs UDP** (5 min) - With handshake diagram
3. **Introduce Nmap** (3 min) - What and why
4. **Live Demo** (10 min) - Basic scans on local network
5. **Show Scan Types** (5 min) - SYN, UDP, Ping
6. **Q&A** (5 min)

### Demo Commands for Class:
```bash
# Safe to demo on scanme.nmap.org
nmap scanme.nmap.org
nmap -sV scanme.nmap.org
nmap -A scanme.nmap.org
```

---

## 📚 Additional Resources

- 📖 Official Nmap Book: https://nmap.org/book/
- 🌐 Nmap Reference Guide: https://nmap.org/book/man.html
- 🎯 Practice Target: scanme.nmap.org
- 🔬 TryHackMe Nmap Room: https://tryhackme.com/room/nmap

---

*Created for 1st Year Cybersecurity Seminar* 🎓
