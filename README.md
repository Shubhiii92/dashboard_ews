# E-Cycle Hub (CircuitCycle) ⚡♻️
> **Academic Portfolio & Evaluator Dashboard for E-Waste Management & Circular Economy (EWM-502)**

**E-Cycle Hub** is a responsive single-page web dashboard application designed for university courses on Electronic Waste (E-Waste) Management and Sustainable Metallurgy. It serves as an academic portfolio where a student showcases and organizes course assignments, laboratory reports, case studies, and presentations for a professor/evaluator (e.g. Prof. Dr. Elena Vance) to review and grade.

---

## 🌟 Key Features & Visual Design

### 1. High-Tech Ecological / Cyber-Sustainability Theme
- **Color Palette**: Deep slate charcoal (`#0d1117`) and matte obsidian (`#0b0f15`) backgrounds, dark glassmorphism surfaces (`rgba(22, 27, 34, 0.75)` with `backdrop-filter: blur(14px)`), neon circuit green (`#10b981`, `#00ff9d`), electric cobalt (`#38bdf8`), and warm copper/gold traces (`#f59e0b`).
- **Typography**: 
  - Headings: **Space Grotesk** for display titles.
  - Body & UI: **Plus Jakarta Sans** for crisp, geometric readability.
  - Metadata / Code / IDs: **JetBrains Mono** for assignment codes, dates, and file sizes.
- **Visual Flourishes**: Motherboard dot-grid pattern overlay, live pulsating status pills, circuit accent borders, and sleek card hover lift animations.

### 2. Header & Profile Banner
- **Sticky Navigation Bar**:
  - Live system date & time clock (`UTC+5:30`) updating every second.
  - Instant search bar with keyboard shortcut (`⌘K`).
  - Evaluator Mode switch and "+ Submit Work" button.
- **Student & Course Meta Card**:
  - **Student Name**: Aarav S. Mehta | **ID**: `2024-ENV-8842` | **Roll**: `EWM-24-039`.
  - **Degree**: B.Tech Environmental & Electronic Engineering • Semester V.
  - **Course**: E-Waste Management & Circular Economy (EWM-502).
  - **Assessor Tag**: Dedicated review portal for Lead Assessor **Prof. Dr. Elena Vance**.
  - **Quick Stat Badges**: Modules Submitted (`6/6`), Course GPA (`9.4/10 • Grade A+`), Equivalent E-Waste Diverted/Analyzed (`142.8 kg`), and Integrity Audit (`Cleared < 2.5%`).

### 3. Metric Overview Cards (KPIs)
1. **Course Curriculum Progress Ring**: SVG circular progress gauge illustrating 100% completion (6/6 Core Modules).
2. **Total Artifacts Logged**: Count breakdown across Reports, Slide Decks, and LCA Models.
3. **Core Focus Pillars**: Coverage indicator across Hydrometallurgy, EPR, WEEE 2.0, and Li-Ion recycling.
4. **Evaluation Status**: GPA metric and verification status (5 Verified • 1 In Verification Queue).

### 4. Interactive Urban Mining & Precious Metal Recovery Calculator
- Dynamic simulator estimating yields of **Gold (Au)**, **Copper (Cu)**, **E-waste diverted**, and **CO₂e emissions averted** based on user-adjusted sliders for retired laptops, smartphones, and server blades.

### 5. Filter & Search Toolbar
- **Category Tabs**: Filter by `All Submissions`, `Research Papers`, `Case Studies`, `Lab Work`, and `Presentations`.
- **Status Filter**: `All Statuses`, `Evaluated Only`, `Under Review`, and `Pending`.
- **Sort Dropdown**: `Latest First`, `Oldest First`, `Score: High to Low`, and `Assignment Code`.
- **View Mode Switcher**: Seamless toggle between **Card Grid View** and **Compact Academic Table View**.

### 6. Assignment Grid & Showcase Cards
Includes 6 realistic university assignments:
- `EWM-LAB-01`: *Comparative Analysis of Pyrometallurgical vs. Hydrometallurgical Extraction of Precious Metals from PCBs*
- `EWM-CS-02`: *Reverse Logistics & Extended Producer Responsibility (EPR): A Quantitative Case Study on Smartphone Take-Back Frameworks in Metro Hubs*
- `EWM-RES-03`: *Lithium-Ion Battery Cathode Black Mass Beneficiation: Closed-Loop Hydrometallurgical Recovery of Cobalt, Nickel, and Lithium*
- `EWM-TH-04`: *Comparative Regulatory Analysis: European WEEE 2.0 / RoHS Directives vs. Basel Convention Amendments on Transboundary E-Waste Traffic*
- `EWM-PRES-05`: *Circular Design for Disassembly: Modular Architecture and Fastener Standardization in Consumer Laptops*
- `EWM-LAB-06`: *Life Cycle Assessment (LCA) and Toxic Leachate Potential of CRT Glass and Flame-Retardant (BFR) Plastics in Landfills*

Each card features:
- Assignment code badge, category tag, and submission date.
- Concise 2-sentence executive summary.
- Interactive topic tags (clickable to filter).
- Plagiarism rate & e-waste diverted metrics.
- File asset metadata (`.pdf`, `.pptx`, file sizes, checksums).
- **"Read / Preview"** button opening an authentic academic paper modal.
- **"Download"** button generating an academic dossier text file.
- **Collapsible Professor Feedback Panel** with rubric breakdown (Methodology, Analysis, Eco Relevance, Documentation) and cryptographic signature verification.

### 7. Interactive Submission Modal
- Accessible `<dialog>` modal with backdrop blur.
- Form fields for Title, Pillar Category, Abstract, Tags, and Equivalent Waste Diverted.
- Drag-and-drop file upload zone with file size feedback.
- Multi-step animated progress bar (Encryption, Plagiarism Scan, Assessor Queueing).
- **Persistent Storage**: Saved to `localStorage` so custom submissions persist across reloads.
- "Reset Course Data" button to restore initial defaults at any time.

### 8. Evaluator / Professor Grading Mode
- Toggle switch in the header: when activated, Professor Elena Vance can adjust scores, edit feedback remarks, and verify pending submissions directly on the cards.

---

## 🚀 How to Run

Since the application uses standard modern HTML5, Tailwind CSS, and vanilla JavaScript without complex build tools, you can open and run it immediately:

### Option 1: Open Directly in Browser
Double-click `index.html` or open it with your favorite browser (Chrome, Edge, Firefox, Safari).

### Option 2: Run with Python's Built-in Local Server
From this directory:
```bash
python3 -m http.server 8000
```
Then visit: [http://localhost:8000](http://localhost:8000)

---

## 📁 File Structure
- `index.html`: Main single-page application structure, semantic layout, and accessible dialog modals.
- `styles.css`: Custom animations, motherboard circuit trace background, dark glassmorphism, glowing accents, and print styles.
- `app.js`: State management, search/filter algorithms, modal triggers, upload simulation, calculator logic, and localStorage persistence.
- `README.md`: Documentation and overview.

