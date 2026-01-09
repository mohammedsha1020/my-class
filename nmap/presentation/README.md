# 🎓 Nmap Presentation - Instructions

## 📁 Files Included
- `nmap-presentation.html` - Main presentation file
- `styles.css` - Professional styling
- `script.js` - Navigation and interactivity

---

## 🖥️ How to View the Presentation

### Method 1: Open in Browser
1. Double-click `nmap-presentation.html`
2. It will open in your default browser
3. Use navigation controls at bottom

### Keyboard Shortcuts:
| Key | Action |
|-----|--------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `F` | Fullscreen |

---

## 📄 How to Convert to PowerPoint (PPT)

### Option 1: Print to PDF → Convert to PPT (Recommended)

1. **Open in Browser** (Chrome recommended)
2. **Press** `Ctrl + P` (Print)
3. **Settings:**
   - Destination: `Save as PDF`
   - Layout: `Landscape`
   - Margins: `None`
   - Background graphics: ✅ Enabled
4. **Save** as `nmap-presentation.pdf`
5. **Convert PDF to PPT:**
   - Use [ilovepdf.com/pdf_to_powerpoint](https://www.ilovepdf.com/pdf_to_powerpoint)
   - Or use Adobe Acrobat
   - Or open PDF in PowerPoint (File → Open → Select PDF)

---

### Option 2: Screenshot Method (Best Quality)

1. **Open presentation** in fullscreen (Press `F`)
2. **Take screenshot** of each slide (`Windows + Shift + S`)
3. **Save each** as PNG image
4. **In PowerPoint:**
   - Create new presentation
   - Insert → Pictures → Select all screenshots
   - One image per slide

---

### Option 3: Using Browser Extension

1. Install **"GoFullPage"** Chrome extension
2. Open presentation
3. Click extension to capture full page
4. Download as PNG
5. Import to PowerPoint

---

## 🎨 Customization

### To change colors:
Edit `styles.css` - look for `:root` section:
```css
:root {
    --primary: #0a192f;      /* Background */
    --accent: #64ffda;       /* Highlight color */
    --text: #ccd6f6;         /* Text color */
}
```

### To edit content:
Edit `nmap-presentation.html` - each slide is in a `<div class="slide">` block

### To add more slides:
1. Copy an existing slide section
2. Update the `id="slideX"` number
3. Update content
4. Update `totalSlides` in `script.js`

---

## 📊 Slide Overview (25 Slides)

| # | Topic |
|---|-------|
| 1 | Title - Nmap |
| 2 | Agenda |
| 3 | What is a Network |
| 4 | IP Address |
| 5 | What is a Port |
| 6 | Important Ports |
| 7 | What is a Protocol |
| 8 | OSI Model |
| 9 | TCP Explained |
| 10 | UDP Explained |
| 11 | TCP vs UDP Comparison |
| 12 | Introduction to Nmap |
| 13 | Nmap Analogy |
| 14 | Installation |
| 15 | Basic Scanning |
| 16 | Scan Types |
| 17 | Port Options |
| 18 | Service & OS Detection |
| 19 | NSE Scripts |
| 20 | Firewall Evasion |
| 21 | Output Options |
| 22 | Quick Reference Cheat Sheet |
| 23 | Legal Warning |
| 24 | Practice Commands |
| 25 | Thank You |

---

## 💡 Presentation Tips

1. **Practice with keyboard** - Use arrow keys for smooth navigation
2. **Use fullscreen** - Press `F` for immersive presentation
3. **Start simple** - Begin with networking basics before Nmap
4. **Live demo** - Show actual Nmap scans on `scanme.nmap.org`
5. **Engage students** - Ask questions about ports/protocols

---

## ⚠️ Requirements

- Modern web browser (Chrome, Firefox, Edge)
- Internet connection (for Google Fonts)
- For offline use: Download fonts locally

---

*Good luck with your seminar!* 🎓🔍
