/**
 * MY WORK — Academic Portfolio & Project Repository
 * Student: Shubham Patel | Roll Number: 24102A0051 | Computer Engineering, CMPN-A
 * Vidyalankar Institute of Technology, Mumbai
 */

// Four Live Applications
const LIVE_APPLICATIONS = [
  {
    id: "APP-01",
    title: "Himachal Pradesh SDG Tracker & E-Waste Dashboard",
    category: "Geospatial & Regulatory Dashboard",
    badge: "Live Web App",
    url: "https://himachalpradesh-sdg-tracker.lovable.app/",
    description: "Interactive spatial and regulatory monitoring dashboard tracking e-waste metrics, authorized collection centers, and UN Sustainable Development Goal (SDG) alignment across Himachal Pradesh districts.",
    tags: ["#HimachalPradesh", "#SDGTracker", "#EWM", "#GISMapping"],
    associatedAssignment: "Assignment 01 & 04",
    icon: "globe"
  },
  {
    id: "APP-02",
    title: "E-Waste EPR Compliance & Target Calculator",
    category: "Regulatory Tool & CPCB Compliance",
    badge: "Live Calculator",
    url: "https://rj42-coder.github.io/e-waste-epr-calculator/",
    description: "Web application implementing the Central Pollution Control Board (CPCB) formula for calculating electronics manufacturers' Extended Producer Responsibility (EPR) targets, recycling quotas, and compliance credits under E-Waste Rules 2022.",
    tags: ["#EPRCalculator", "#CPCB", "#ComplianceRules2022", "#WebTool"],
    associatedAssignment: "Assignment 05",
    icon: "calculator"
  },
  {
    id: "APP-03",
    title: "ChainGuard — DeFi Anomaly & Threat Detection",
    category: "AI/ML & Blockchain Security",
    badge: "Hackathon Prototype",
    url: "https://github.com/Shubhiii92/ChainGuard",
    description: "AI/ML-driven decentralized finance transaction anomaly detection engine built during SPIT 24-Hour Hackathon. Employs Random Forest and Isolation Forest to evaluate on-chain behavior and assign real-time risk scores on Sepolia testnet.",
    tags: ["#DeFiSecurity", "#AnomalyDetection", "#Python", "#FastAPI", "#Web3"],
    associatedAssignment: "Project Repository",
    icon: "shield"
  },
  {
    id: "APP-04",
    title: "Kids Car Game — Interactive 2D Driving Simulator",
    category: "Interactive Canvas & Game Dev",
    badge: "Live Game App",
    url: "https://shubhiii92.github.io/kids-car-game/",
    description: "Responsive 2D browser-based canvas obstacle driving game featuring real-time collision detection, dynamic continuous animation loops via requestAnimationFrame, and cross-device keyboard/touch controls.",
    tags: ["#HTML5Canvas", "#JavaScript", "#PhysicsLoops", "#InteractiveGame"],
    associatedAssignment: "Interactive Application",
    icon: "gamepad"
  }
];

// Eleven Actual Coursework Assignments (Numbered 00 to 10)
const ASSIGNMENTS_DATA = [
  {
    id: "Assignment 00",
    code: "EWM-ASSGN-00",
    title: "Course Insights & VIT Autonomous Curriculum Architecture",
    category: "Academic Framework",
    date: "July 2026",
    deliverables: [
      { name: "EWM_Assignment_0.pdf", type: "PDF Document", size: "349 KB", path: "assignments/EWM_Assignment_0.pdf", primary: true }
    ],
    summary: "Comprehensive breakdown of the Vidyalankar Institute of Technology (VIT) autonomous curriculum architecture across all 7 course buckets (BSC/ESC, PC, MDC, Skill Courses, HSSM, ELC). Formulates the pedagogical scope and learning outcomes for the Electronic Waste Management & Circular Economy course.",
    keyTakeaways: [
      "Analysis of 7 autonomous curriculum buckets and academic credit structure at VIT Mumbai.",
      "Scope of E-Waste Management & Circular Economy as an essential interdisciplinary engineering course.",
      "Exploration of environmental legislation and material lifecycle engineering within computer engineering."
    ],
    tags: ["#CourseInsights", "#VITCurriculum", "#AutonomousFramework", "#EWMIntro"],
    author: "Shubham Patel (24102A0051)"
  },
  {
    id: "Assignment 01",
    code: "EWM-ASSGN-01",
    title: "Himachal Pradesh E-Waste Performance & Policy Assessment (UN SDG Alignment)",
    category: "State Policy Assessment",
    date: "July 2026",
    liveAppUrl: "https://himachalpradesh-sdg-tracker.lovable.app/",
    deliverables: [
      { name: "EWM_Assignment_1_partB.pdf", type: "PDF Report", size: "26 KB", path: "assignments/EWM_Assignment_1_partB.pdf", primary: true },
      { name: "EWM_Assignment_1_partB.docx", type: "DOCX Report", size: "48 KB", path: "assignments/EWM_Assignment_1_partB.docx" },
      { name: "EWM_Assignment_1_partC.xlsx", type: "Excel Scorecard Matrix", size: "40 KB", path: "assignments/EWM_Assignment_1_partC.xlsx" }
    ],
    summary: "Statewide performance evaluation of Himachal Pradesh's e-waste governance under E-Waste (Management) Rules, 2022 (MoEFCC/CPCB) and HPSPCB. Uses a 100-Point Scorecard benchmarking Himachal Pradesh at 67.3/100 ('GOOD' Band) with direct mapping to UN Sustainable Development Goals (SDG 11, 12, 13).",
    keyTakeaways: [
      "Quantified state e-waste score of 67.3 / 100 benchmarked across legal compliance, collection, and recycling.",
      "UN Sustainable Development Goals (SDG) alignment focusing on responsible consumption and climate resilience.",
      "Companion interactive live monitoring web dashboard deployed on Lovable platform."
    ],
    tags: ["#HimachalPradesh", "#StateAssessment", "#UNSDG", "#Scorecard", "#HPSPCB"],
    author: "Shubham Patel (24102A0051) & Collaborative Academic Cohort"
  },
  {
    id: "Assignment 02",
    code: "EWM-ASSGN-02",
    title: "E-Waste Lifecycle, Material Flows & Disassembly Flowchart",
    category: "Lifecycle Engineering",
    date: "August 2026",
    deliverables: [
      { name: "EWM_Assignment_2.pdf", type: "Infographic & Poster PDF", size: "417 KB", path: "assignments/EWM_Assignment_2.pdf", primary: true }
    ],
    summary: "Comprehensive technical diagram and material lifecycle flowchart mapping consumer electronics from manufacturing and consumption through reverse logistics, formal dismantling, hydrometallurgical refining, and hazard containment.",
    keyTakeaways: [
      "Detailed flowchart tracing components through mechanical sorting, shredding, and chemical leaching.",
      "Identification of toxic hazard vectors (Lead, Mercury, Cadmium, Brominated Flame Retardants).",
      "Comparative pathways between formal registered recyclers vs informal urban scrap aggregators."
    ],
    tags: ["#LifecycleAnalysis", "#Flowchart", "#MaterialStreams", "#HazardMitigation"],
    author: "Shubham Patel (24102A0051)"
  },
  {
    id: "Assignment 03",
    code: "EWM-ASSGN-03",
    title: "Himachal Pradesh E-Waste Generation, Infrastructure & Flow Deck",
    category: "Infrastructure Analysis",
    date: "August 2026",
    deliverables: [
      { name: "EWM_Assignment_3.pdf", type: "Presentation Deck (13 Slides)", size: "19.0 MB", path: "assignments/EWM_Assignment_3.pdf", primary: true }
    ],
    summary: "13-slide academic presentation deck examining Himachal Pradesh's e-waste volumes, geographic distribution across urban centers (Shimla, Solan, Dharamshala), collection logistical constraints in mountainous terrains, and state authorized recycling capacity.",
    keyTakeaways: [
      "Geographic mapping of e-waste collection bottlenecks across high-altitude and rural Himalayan terrains.",
      "Evaluation of registered dismantling hubs in industrial corridors like Baddi-Barotiwala-Nalagarh.",
      "Strategic policy roadmap for decentralized community collection kiosks and incentive take-backs."
    ],
    tags: ["#HimachalInfrastructure", "#SlideDeck", "#ReverseLogistics", "#TerrainLogistics"],
    author: "Shubham Patel (24102A0051)"
  },
  {
    id: "Assignment 04",
    code: "EWM-ASSGN-04",
    title: "Himachal Pradesh State Profile, Economic Engines & Recycler Directory",
    category: "State Profile & Directory",
    date: "August 2026",
    deliverables: [
      { name: "EWM_Assignment_4.pdf", type: "Comprehensive State Profile Report", size: "309 KB", path: "assignments/EWM_Assignment_4.pdf", primary: true }
    ],
    summary: "Detailed economic and industrial profile of Himachal Pradesh analyzing key economic engines (Baddi-Barotiwala-Nalagarh Pharma Hub, Apple Horticulture, Kath-Kuni architectural heritage, hydropower) and auditing authorized e-waste dismantling facilities.",
    keyTakeaways: [
      "In-depth analysis of the Baddi-Barotiwala-Nalagarh (BBN) industrial manufacturing belt and its electrical waste footprint.",
      "Comprehensive directory of state-authorized e-waste collection centers, PROs, and registered dismantlers.",
      "Intersection of industrial expansion with ecological preservation in sensitive Himalayan ecosystems."
    ],
    tags: ["#BBNIndustrialHub", "#RecyclerDirectory", "#PharmaBelt", "#StateEconomy"],
    author: "Shubham Patel (24102A0051)"
  },
  {
    id: "Assignment 05",
    code: "EWM-ASSGN-05",
    title: "Extended Producer Responsibility (EPR) Compliance Practices of Indian Manufacturers",
    category: "Regulatory Compliance",
    date: "September 2026",
    liveAppUrl: "https://rj42-coder.github.io/e-waste-epr-calculator/",
    deliverables: [
      { name: "EWM_Assignment_5.pdf", type: "PDF Compliance Report", size: "12 KB", path: "assignments/EWM_Assignment_5.pdf", primary: true },
      { name: "EWM_Assignment_5.docx", type: "DOCX Document", size: "33 KB", path: "assignments/EWM_Assignment_5.docx" }
    ],
    summary: "Critical review of Extended Producer Responsibility (EPR) compliance practices among major Indian electronics manufacturers under E-Waste (Management) Rules, 2022 (with Jan 2024 CPCB amendments). Supported by a live web calculator implementing official EPR formula quotas.",
    keyTakeaways: [
      "Investigation into manufacturer compliance on the centralized CPCB online EPR registration portal.",
      "Analysis of recycling credit trade systems, end-of-life collection mandates, and verification audits.",
      "Engineered an interactive live web calculator for computing EPR targets based on sales and lifespan."
    ],
    tags: ["#EPRCompliance", "#CPCBPortal", "#IndianManufacturers", "#EPRRules2022"],
    author: "Shubham Patel (24102A0051) & Collaborative Academic Cohort"
  },
  {
    id: "Assignment 06",
    code: "EWM-ASSGN-06",
    title: "Comparative Study of Global E-Waste Regulations: India, US, Australia, Russia & Japan",
    category: "Global Regulatory Analysis",
    date: "August 2026",
    deliverables: [
      { name: "EWM_Assignment_6_partA.pdf", type: "Part A: Regulatory Study PDF", size: "10 KB", path: "assignments/EWM_Assignment_6_partA.pdf", primary: true },
      { name: "EWM_Assignment_6_partA.docx", type: "Part A: Word Report", size: "25 KB", path: "assignments/EWM_Assignment_6_partA.docx" },
      { name: "EWM_Assignment_6_partB.pdf", type: "Part B: Visual Synthesis Deck", size: "14.3 MB", path: "assignments/EWM_Assignment_6_partB.pdf" }
    ],
    summary: "Cross-jurisdictional statutory analysis comparing India's centralized portal-driven EPR model against the state-by-state patchwork in the United States, Australia's National Television & Computer Recycling Scheme (NTCRS), Russia's environmental fee framework, and Japan's Home Appliance Recycling Law.",
    keyTakeaways: [
      "Comparative analysis of EPR enforcement mechanisms, financial liability, and collection targets across 5 nations.",
      "Critique of US lack of federal EPR mandate vs. Japan's strict consumer-funded dual-law system.",
      "Identification of global best practices adaptable to developing nations facing high informal sector presence."
    ],
    tags: ["#GlobalRegulations", "#ComparativeStudy", "#EPRPolicy", "#WEEE", "#JapanDualLaw"],
    author: "Shubham Patel (24102A0051) & Collaborative Academic Cohort"
  },
  {
    id: "Assignment 07",
    code: "EWM-ASSGN-07",
    title: "Public Awareness Campaign: Video PSA & Educational Infographic",
    category: "Public Outreach & Media",
    date: "September 2026",
    deliverables: [
      { name: "EWM_Assignment_7_partA.mp4", type: "Video Campaign MP4", size: "32.2 MB", path: "assignments/EWM_Assignment_7_partA.mp4", primary: true },
      { name: "EWM_Assignment_7_partB.jpeg", type: "Infographic Poster Image", size: "415 KB", path: "assignments/EWM_Assignment_7_partB.jpeg" }
    ],
    summary: "Creative public awareness outreach campaign designed to address consumer retention inertia and improper household disposal of end-of-life electronics. Consists of a produced video PSA and high-impact educational visual infographic explaining urban mining and toxic leaching.",
    keyTakeaways: [
      "Production of video PSA highlighting urban mining benefits and dangers of informal burning.",
      "High-contrast visual poster detailing hazardous household electronic components and local drop-off centers.",
      "Behavioral nudge strategies to motivate consumer participation in formal take-back programs."
    ],
    tags: ["#PublicAwareness", "#VideoCampaign", "#Infographic", "#ConsumerEducation"],
    author: "Shubham Patel (24102A0051)"
  },
  {
    id: "Assignment 08",
    code: "EWM-ASSGN-08",
    title: "Finding Risky Capabilities in Open-Source AI Agents: A Lightweight Static Scanner & Empirical Review",
    category: "Published Research Paper",
    date: "October 2026",
    deliverables: [
      { name: "IEEE_Agent_Capability_Scanner_Paper_FINAL.pdf", type: "IEEE Format Research Paper", size: "148 KB", path: "assignments/IEEE_Agent_Capability_Scanner_Paper_FINAL.pdf", primary: true }
    ],
    summary: "Original IEEE-formatted peer research paper authored by Shubham Patel, Riya Jamsutkar, and Atharv Londhe (Vidyalankar Institute of Technology). Investigates risky tool execution, command execution, and network exfiltration capabilities across 10 open-source AI agent repositories using an automated static code scanner validated against manual auditing.",
    keyTakeaways: [
      "Published research addressing tool invocation risks, shell commands, and file exfiltration in autonomous AI agents.",
      "Developed a Python AST static analyzer benchmarking precision, recall, and F1 scores against 60 manual ground-truth pairs.",
      "Demonstrated that static analysis successfully flags 78% of unvetted capabilities before deployment."
    ],
    tags: ["#IEEEResearch", "#AIAgents", "#StaticAnalysis", "#SecurityScanner", "#VITResearch"],
    author: "Shubham Patel (24102A0051), Riya Jamsutkar, Atharv Londhe"
  },
  {
    id: "Assignment 09",
    code: "EWM-ASSGN-09",
    title: "International E-Waste Case Studies: 10 Comprehensive Country Analyses",
    category: "International Case Studies",
    date: "October 2026",
    deliverables: [
      { name: "EWM_Assignment_9_partB.pdf", type: "Full 80-Page Case Study Compendium", size: "1.4 MB", path: "assignments/EWM_Assignment_9_partB.pdf", primary: true },
      { name: "EWM_Assignment_9_partA.pptx", type: "Case Studies Presentation Deck", size: "234 KB", path: "assignments/EWM_Assignment_9_partA.pptx" },
      { name: "EWM_Assignment_9_partA.pdf", type: "Case Studies Slide Deck PDF", size: "13 KB", path: "assignments/EWM_Assignment_9_partA.pdf" }
    ],
    summary: "Extensive 80-page analytical compendium documenting 10 international e-waste management models worldwide. Features in-depth scrutiny of Japan's Home Appliance Recycling Law (achieving 84% AC recovery), Switzerland's SWICO/SENS pioneer prepaid fee model, Germany's ElektroG, South Korea's EPR quota systems, and emerging African urban mining hubs.",
    keyTakeaways: [
      "10 complete international case studies spanning Asia, Europe, North America, and developing regions.",
      "Empirical metrics on collection rates, producer recycling fees, informal integration, and high-purity metal refining.",
      "Actionable recommendations for municipal policy reforms in rapid urbanization centers."
    ],
    tags: ["#CaseStudies", "#80PageReport", "#JapanRecycling", "#SwicoEPR", "#GlobalPolicy"],
    author: "Shubham Patel (24102A0051)"
  },
  {
    id: "Assignment 10",
    code: "EWM-ASSGN-10",
    title: "Software Configuration, Risk Analysis & Network Security Architecture",
    category: "Technical Report & Lab",
    date: "October 2026",
    deliverables: [
      { name: "EWM_Assignment_10.pdf", type: "Comprehensive Technical Deliverable", size: "2.7 MB", path: "assignments/EWM_Assignment_10.pdf", primary: true }
    ],
    summary: "Advanced technical report evaluating software engineering configuration management, change control, Risk Mitigation, Monitoring and Management (RMMM) plans, and digital network security frameworks supporting mission-critical environmental and academic infrastructure.",
    keyTakeaways: [
      "Formulation of RMMM risk exposure metrics and software change control baselining procedures.",
      "Integration of digital signatures, secure data integrity verification, and network security protocols.",
      "Systematic architectural evaluation combining software engineering rigors with domain telemetry."
    ],
    tags: ["#SoftwareEngineering", "#RMMMPlan", "#RiskManagement", "#NetworkSecurity", "#CMPNA"],
    author: "Shubham Patel (24102A0051)"
  }
];

// Application Controller
class PortfolioApp {
  constructor() {
    this.assignments = ASSIGNMENTS_DATA;
    this.apps = LIVE_APPLICATIONS;
    this.currentCategory = 'All';
    this.searchQuery = '';
    this.currentViewMode = 'grid'; // 'grid' | 'table'

    this.init();
  }

  init() {
    this.bindEvents();
    this.renderLiveApps();
    this.renderAssignments();
    this.renderCounts();
  }

  bindEvents() {
    // Search input listener
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.renderAssignments();
      });
    }

    // Keyboard shortcut for search
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInput?.focus();
      }
    });

    // Category filter buttons
    document.querySelectorAll('[data-category-filter]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cat = e.currentTarget.getAttribute('data-category-filter');
        this.setCategory(cat);
      });
    });

    // View toggle: Grid vs Table
    const btnGrid = document.getElementById('btn-view-grid');
    const btnTable = document.getElementById('btn-view-table');
    if (btnGrid && btnTable) {
      btnGrid.addEventListener('click', () => this.setViewMode('grid'));
      btnTable.addEventListener('click', () => this.setViewMode('table'));
    }

    // Modal close listener
    const previewModal = document.getElementById('preview-modal');
    const closeBtn = document.getElementById('btn-close-modal');
    if (closeBtn && previewModal) {
      closeBtn.addEventListener('click', () => previewModal.close());
    }

    // Close dialog on backdrop click
    if (previewModal) {
      previewModal.addEventListener('click', (e) => {
        const rect = previewModal.getBoundingClientRect();
        const inDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
                          rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
        if (!inDialog) previewModal.close();
      });
    }

    // Print button
    const printBtn = document.getElementById('btn-print-portfolio');
    if (printBtn) {
      printBtn.addEventListener('click', () => window.print());
    }
  }

  setCategory(cat) {
    this.currentCategory = cat;
    document.querySelectorAll('[data-category-filter]').forEach(btn => {
      const match = btn.getAttribute('data-category-filter') === cat;
      if (match) {
        btn.classList.add('bg-emerald-500/20', 'text-emerald-300', 'border-emerald-500/50');
        btn.classList.remove('text-gray-400', 'border-white/10');
      } else {
        btn.classList.remove('bg-emerald-500/20', 'text-emerald-300', 'border-emerald-500/50');
        btn.classList.add('text-gray-400', 'border-white/10');
      }
    });
    this.renderAssignments();
  }

  setViewMode(mode) {
    this.currentViewMode = mode;
    const btnGrid = document.getElementById('btn-view-grid');
    const btnTable = document.getElementById('btn-view-table');
    const containerGrid = document.getElementById('assignment-grid-view');
    const containerTable = document.getElementById('assignment-table-view');

    if (mode === 'grid') {
      btnGrid.classList.add('text-emerald-400', 'bg-white/10');
      btnGrid.classList.remove('text-gray-400');
      btnTable.classList.remove('text-emerald-400', 'bg-white/10');
      btnTable.classList.add('text-gray-400');
      containerGrid?.classList.remove('hidden');
      containerTable?.classList.add('hidden');
    } else {
      btnTable.classList.add('text-emerald-400', 'bg-white/10');
      btnTable.classList.remove('text-gray-400');
      btnGrid.classList.remove('text-emerald-400', 'bg-white/10');
      btnGrid.classList.add('text-gray-400');
      containerGrid?.classList.add('hidden');
      containerTable?.classList.remove('hidden');
    }
  }

  renderCounts() {
    const totalEl = document.getElementById('count-total-assignments');
    if (totalEl) totalEl.textContent = this.assignments.length;

    const totalAppsEl = document.getElementById('count-total-apps');
    if (totalAppsEl) totalAppsEl.textContent = this.apps.length;

    const counts = {
      All: this.assignments.length,
      "Policy & Regulatory": this.assignments.filter(a => a.category.includes('Policy') || a.category.includes('Regulatory')).length,
      "Research & Reports": this.assignments.filter(a => a.category.includes('Research') || a.category.includes('Framework') || a.category.includes('Technical')).length,
      "Presentations & Case Studies": this.assignments.filter(a => a.category.includes('Presentation') || a.category.includes('Case Studies') || a.category.includes('Infrastructure')).length,
      "Outreach & Media": this.assignments.filter(a => a.category.includes('Outreach') || a.category.includes('Media') || a.category.includes('Lifecycle')).length
    };

    document.querySelectorAll('[data-category-count]').forEach(el => {
      const cat = el.getAttribute('data-category-count');
      if (counts[cat] !== undefined) {
        el.textContent = counts[cat];
      }
    });
  }

  getFilteredAssignments() {
    return this.assignments.filter(item => {
      if (this.currentCategory !== 'All') {
        if (this.currentCategory === 'Policy & Regulatory') {
          if (!item.category.includes('Policy') && !item.category.includes('Regulatory')) return false;
        } else if (this.currentCategory === 'Research & Reports') {
          if (!item.category.includes('Research') && !item.category.includes('Framework') && !item.category.includes('Technical') && !item.category.includes('State Profile')) return false;
        } else if (this.currentCategory === 'Presentations & Case Studies') {
          if (!item.category.includes('Presentation') && !item.category.includes('Case Studies') && !item.category.includes('Infrastructure')) return false;
        } else if (this.currentCategory === 'Outreach & Media') {
          if (!item.category.includes('Outreach') && !item.category.includes('Media') && !item.category.includes('Lifecycle')) return false;
        }
      }

      if (this.searchQuery) {
        const q = this.searchQuery;
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesId = item.id.toLowerCase().includes(q) || item.code.toLowerCase().includes(q);
        const matchesSummary = item.summary.toLowerCase().includes(q);
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(q));
        return matchesTitle || matchesId || matchesSummary || matchesTags;
      }

      return true;
    });
  }

  renderLiveApps() {
    const container = document.getElementById('live-apps-container');
    if (!container) return;

    container.innerHTML = this.apps.map(app => `
      <div class="glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-sky-500/40">
        <div>
          <div class="flex items-center justify-between gap-3 mb-3">
            <span class="font-mono text-xs px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-300 font-semibold">
              ${app.id}
            </span>
            <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 live-pulse"></span>
              ${app.badge}
            </span>
          </div>

          <h3 class="text-lg font-bold text-white mb-2 font-display group-hover:text-sky-300 transition-colors">
            ${app.title}
          </h3>

          <p class="text-gray-300 text-xs leading-relaxed mb-4">
            ${app.description}
          </p>

          <div class="flex flex-wrap gap-1.5 mb-4">
            ${app.tags.map(t => `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">${t}</span>`).join('')}
          </div>
        </div>

        <div class="pt-4 border-t border-white/10 flex items-center justify-between">
          <span class="text-[11px] font-mono text-gray-500">${app.associatedAssignment}</span>
          <a 
            href="${app.url}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 text-sky-300 text-xs font-semibold transition-all"
          >
            <span>Launch Live App</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
      </div>
    `).join('');
  }

  renderAssignments() {
    const items = this.getFilteredAssignments();
    const badge = document.getElementById('results-count-badge');
    if (badge) {
      badge.textContent = `Displaying ${items.length} of ${this.assignments.length} Coursework Assignments`;
    }

    this.renderGridView(items);
    this.renderTableView(items);
  }

  renderGridView(items) {
    const container = document.getElementById('assignment-grid-view');
    if (!container) return;

    if (items.length === 0) {
      container.innerHTML = `
        <div class="col-span-full glass-panel rounded-2xl p-12 text-center border border-white/10 my-4">
          <h3 class="text-lg font-bold text-white mb-2 font-display">No matching assignments found</h3>
          <p class="text-gray-400 text-xs mb-4">Try searching for other terms or reset the category filter.</p>
          <button onclick="window.app.setCategory('All')" class="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-medium">
            Reset Filters
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = items.map(item => `
      <article class="glass-card rounded-2xl p-6 relative flex flex-col justify-between group overflow-hidden border border-white/10">
        <div>
          <!-- Header Code & Category -->
          <div class="flex items-center justify-between gap-3 mb-3 flex-wrap">
            <div class="flex items-center gap-2">
              <span class="font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-emerald-400 font-bold">
                ${item.id}
              </span>
              <span class="font-mono text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-400">
                ${item.code}
              </span>
            </div>
            <span class="text-xs px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-600/30 text-emerald-300 font-medium">
              ${item.category}
            </span>
          </div>

          <!-- Assignment Title -->
          <h3 class="text-lg font-bold text-white mb-3 font-display leading-snug group-hover:text-emerald-300 transition-colors">
            ${item.title}
          </h3>

          <!-- Summary -->
          <p class="text-gray-300 text-xs leading-relaxed mb-4">
            ${item.summary}
          </p>

          <!-- Key Takeaways Bullet List -->
          <div class="mb-4 bg-black/30 p-3 rounded-xl border border-white/5 text-xs text-gray-300 space-y-1.5">
            <span class="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-1">Deliverable Highlights</span>
            ${item.keyTakeaways.map(k => `
              <div class="flex items-start gap-1.5 text-[11px]">
                <span class="text-emerald-400 font-bold mt-0.5">•</span>
                <span>${k}</span>
              </div>
            `).join('')}
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${item.tags.map(t => `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">${t}</span>`).join('')}
          </div>
        </div>

        <div>
          <!-- Deliverable Asset List -->
          <div class="pt-4 border-t border-white/10 mb-4 space-y-2">
            <span class="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Actual Course Deliverables:</span>
            ${item.deliverables.map(d => `
              <div class="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/5 text-xs">
                <div class="flex items-center gap-2 truncate pr-2">
                  <svg class="w-3.5 h-3.5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <span class="text-white font-medium truncate">${d.name}</span>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                  <span class="text-[10px] font-mono text-gray-500">${d.size}</span>
                  <a 
                    href="${d.path}" 
                    target="_blank" 
                    download
                    class="p-1 rounded bg-white/5 hover:bg-emerald-500/20 text-gray-400 hover:text-emerald-300 transition-colors"
                    title="Download file directly"
                  >
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                  </a>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-2">
            <button 
              onclick="window.app.openPreview('${item.id}')"
              class="flex-1 py-2 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
              <span>Inspect Details</span>
            </button>

            ${item.liveAppUrl ? `
              <a 
                href="${item.liveAppUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="py-2 px-3 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 text-sky-300 font-semibold text-xs flex items-center gap-1.5 transition-all"
                title="Launch Associated Live Application"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                <span>Live App</span>
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `).join('');
  }

  renderTableView(items) {
    const tbody = document.getElementById('assignment-table-body');
    if (!tbody) return;

    tbody.innerHTML = items.map(item => `
      <tr class="border-b border-white/5 hover:bg-white/[0.02] text-xs font-mono transition-colors">
        <td class="p-4 text-emerald-400 font-bold">${item.id}</td>
        <td class="p-4 font-sans font-medium text-white max-w-sm">
          <div class="font-bold text-sm text-white hover:text-emerald-300 cursor-pointer mb-1" onclick="window.app.openPreview('${item.id}')">
            ${item.title}
          </div>
          <div class="text-gray-400 text-xs line-clamp-1">${item.summary}</div>
        </td>
        <td class="p-4">
          <span class="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300 text-[11px] font-sans">
            ${item.category}
          </span>
        </td>
        <td class="p-4">
          <div class="flex flex-col gap-1">
            ${item.deliverables.map(d => `
              <a href="${d.path}" target="_blank" download class="text-[11px] text-gray-300 hover:text-emerald-400 flex items-center gap-1">
                <span>📄</span>
                <span class="truncate max-w-[160px]">${d.name}</span>
              </a>
            `).join('')}
          </div>
        </td>
        <td class="p-4 text-right">
          <button onclick="window.app.openPreview('${item.id}')" class="px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-sans font-semibold text-xs">
            View
          </button>
        </td>
      </tr>
    `).join('');
  }

  openPreview(id) {
    const item = this.assignments.find(a => a.id === id);
    if (!item) return;

    const modal = document.getElementById('preview-modal');
    const content = document.getElementById('preview-modal-body');
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="border-b border-white/10 pb-5 mb-5">
        <div class="flex items-center justify-between gap-3 mb-2 flex-wrap">
          <div class="flex items-center gap-2">
            <span class="font-mono text-xs px-2.5 py-1 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold">
              ${item.id}
            </span>
            <span class="font-mono text-xs px-2 py-0.5 rounded bg-white/5 text-gray-400">
              ${item.code}
            </span>
          </div>
          <span class="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-emerald-300 font-medium">
            ${item.category}
          </span>
        </div>
        
        <h2 class="text-xl sm:text-2xl font-bold text-white font-display mb-2">
          ${item.title}
        </h2>

        <div class="text-xs font-mono text-gray-400 flex items-center gap-3">
          <span>Author: <strong class="text-emerald-400 font-semibold">${item.author}</strong></span>
          <span>•</span>
          <span>Class: <strong class="text-white">Computer Engineering, CMPN-A</strong></span>
        </div>
      </div>

      <div class="space-y-5 text-xs text-gray-300 leading-relaxed mb-6">
        <div class="bg-black/30 p-4 rounded-xl border border-white/5">
          <h4 class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 font-mono">Executive Abstract & Scope</h4>
          <p class="text-sm text-gray-200">${item.summary}</p>
        </div>

        <div>
          <h4 class="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Key Deliverable Takeaways</h4>
          <ul class="space-y-1.5 list-disc list-inside">
            ${item.keyTakeaways.map(t => `<li class="text-gray-300 text-xs">${t}</li>`).join('')}
          </ul>
        </div>

        <div>
          <h4 class="text-xs font-bold text-white uppercase tracking-wider mb-3 font-mono">Actual Files & Deliverables in Repository</h4>
          <div class="space-y-2">
            ${item.deliverables.map(d => `
              <div class="p-3 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between gap-3 flex-wrap">
                <div class="flex items-center gap-2.5">
                  <div class="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <span class="text-sm font-semibold text-white block">${d.name}</span>
                    <span class="text-[11px] font-mono text-gray-500">${d.type} • ${d.size}</span>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <a 
                    href="${d.path}" 
                    target="_blank" 
                    class="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span>Open in Browser</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                  <a 
                    href="${d.path}" 
                    download 
                    class="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span>Download</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        ${item.liveAppUrl ? `
          <div class="p-4 rounded-xl bg-sky-950/20 border border-sky-500/30 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <span class="text-xs font-bold text-sky-400 block font-mono">Linked Live Application:</span>
              <span class="text-xs text-gray-300">${item.liveAppUrl}</span>
            </div>
            <a 
              href="${item.liveAppUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-black text-xs font-bold transition-all shadow-md"
            >
              Launch Live App →
            </a>
          </div>
        ` : ''}
      </div>
    `;

    modal.showModal();
  }
}

// Global bootstrap
document.addEventListener('DOMContentLoaded', () => {
  window.app = new PortfolioApp();
});
