/**
 * E-Cycle Hub (CircuitCycle) - Academic Portfolio & Evaluation Engine
 * University Course: E-Waste Management & Circular Economy (EWM-502)
 */

// Initial Seed Data for Academic E-Waste Assignments
const INITIAL_ASSIGNMENTS = [
  {
    id: "EWM-LAB-01",
    title: "Comparative Analysis of Pyrometallurgical vs. Hydrometallurgical Extraction of Precious Metals from Printed Circuit Boards (PCBs)",
    category: "Lab Work",
    submissionDate: "2026-10-14",
    formattedDate: "Oct 14, 2026",
    score: 9.8,
    grade: "A+",
    status: "Evaluated", // "Evaluated", "Under Review", "Pending"
    abstract: "Quantified leaching kinetics of Copper and Gold from crushed consumer electronics using mild organic acids versus traditional smelting. Demonstrated a 91.4% Au recovery efficiency with 40% reduced CO2 eq emissions in hydrometallurgical closed loops.",
    tags: ["#Hydrometallurgy", "#UrbanMining", "#GoldRecovery", "#PCBRecycling"],
    divertedWasteKg: 42.5,
    plagiarismRate: "1.2% (IEEE CrossCheck Verified)",
    fileMeta: {
      name: "EWM_Lab01_Precious_Metal_Extraction.pdf",
      size: "5.8 MB",
      format: "PDF",
      pages: 18,
      checksum: "SHA256: 8f4b11c9...2026"
    },
    secondaryLinks: [
      { label: "AAS Spectrometry Dataset", type: "dataset", icon: "database" },
      { label: "Process Flowsheet (CAD)", type: "schematic", icon: "cpu" }
    ],
    feedback: {
      evaluator: "Prof. Dr. Elena Vance",
      evaluatorTitle: "Lead Assessor & Chair of Circular Metallurgy",
      evaluatorAvatar: "EV",
      timestamp: "Oct 16, 2026 • 14:22",
      remarks: "Outstanding stoichiometric calculations and safety hazard mitigation protocol for nitric-free leaching. The mass balance diagrams in Section 3 accurately reconcile residue loss against AAS measurements. Commendable experimental precision.",
      rubric: {
        methodology: 25.0,
        analysis: 24.8,
        environmental: 25.0,
        documentation: 19.5,
        total: 94.3
      },
      signature: "Cryptographically Verified by University Academic Ledger (Hash: #EWM-EV-8842-01)"
    },
    paperContent: {
      institution: "Department of Environmental & Materials Engineering • Circular Systems Lab",
      keywords: "E-waste, hydrometallurgy, PCB recycling, gold leaching, circular economy, urban mining",
      sections: [
        {
          heading: "1. Theoretical Background & Problem Statement",
          text: "Printed circuit boards (PCBs) contain up to 250 g/tonne of Gold (Au) and 130 kg/tonne of Copper (Cu)—concentrations exceeding primary ore grades by 20 to 50 times. Conventional pyrometallurgical smelting emits hazardous dioxins and polybrominated diphenyl ethers (PBDEs). This laboratory investigation evaluated organic leaching lixiviants as closed-loop alternatives."
        },
        {
          heading: "2. Chemical Reaction Kinetics & Leaching Model",
          text: "Dissolution kinetics were modeled using the shrinking core model. Leaching with thiosulfate-copper catalyst followed diffusion control: 2Au + 8S₂O₃²⁻ + O₂ + 2H₂O → 4[Au(S₂O₃)₂]³⁻ + 4OH⁻. Activation energy was determined to be Ea = 32.4 kJ/mol."
        },
        {
          heading: "3. Experimental Results & Recovery Efficiency",
          text: "Hydrometallurgical extraction yielded 91.4% Au recovery within 4 hours at 45°C. Life Cycle Assessment (LCA) showed an aggregate carbon footprint reduction of 41.2% compared to primary pyrometallurgical refining."
        }
      ]
    }
  },
  {
    id: "EWM-CS-02",
    title: "Reverse Logistics & Extended Producer Responsibility (EPR): A Quantitative Case Study on Smartphone Take-Back Frameworks in Metro Hubs",
    category: "Case Studies",
    submissionDate: "2026-10-22",
    formattedDate: "Oct 22, 2026",
    score: 9.2,
    grade: "A",
    status: "Evaluated",
    abstract: "Investigated consumer retention inertia and deposit-refund incentives across 1,200 urban households. Formulated an optimized reverse supply chain routing algorithm that decreases collection logistics overhead by 23.6%.",
    tags: ["#ReverseLogistics", "#EPRPolicy", "#CircularSupplyChain", "#ConsumerBehavior"],
    divertedWasteKg: 28.0,
    plagiarismRate: "2.4% (Turnitin Verified)",
    fileMeta: {
      name: "EWM_CaseStudy02_Reverse_Logistics_EPR.pdf",
      size: "3.4 MB",
      format: "PDF",
      pages: 24,
      checksum: "SHA256: a71e49b2...2026"
    },
    secondaryLinks: [
      { label: "Routing Simulation Script", type: "code", icon: "code" },
      { label: "Household Survey Raw Data", type: "dataset", icon: "database" }
    ],
    feedback: {
      evaluator: "Prof. Dr. Elena Vance",
      evaluatorTitle: "Lead Assessor & Chair of Circular Metallurgy",
      evaluatorAvatar: "EV",
      timestamp: "Oct 25, 2026 • 11:05",
      remarks: "Thorough GIS collection hub optimization. The comparative breakdown between informal scrap aggregators and authorized Producer Responsibility Organizations (PROs) provides actionable municipal policy recommendations.",
      rubric: {
        methodology: 23.0,
        analysis: 24.0,
        environmental: 23.5,
        documentation: 18.5,
        total: 89.0
      },
      signature: "Cryptographically Verified by University Academic Ledger (Hash: #EWM-EV-8842-02)"
    },
    paperContent: {
      institution: "Center for Sustainable Supply Chains & Environmental Governance",
      keywords: "Reverse logistics, EPR, deposit-refund scheme, informal sector, urban mining",
      sections: [
        {
          heading: "1. Overview of Urban Collection Deficits",
          text: "Over 78% of retired smartphones remain stored in residential homes due to data security concerns and lack of visible redemption value. This research analyzed the economic threshold required to incentivize active drop-off at designated municipal kiosks."
        },
        {
          heading: "2. Heuristic Vehicle Routing for E-Waste Hubs",
          text: "A genetic algorithm was formulated to optimize reverse collection runs across 48 micro-depots. Total fuel expenditure decreased by 23.6% while ensuring weekly pickup thresholds for hazardous lithium-ion pouch cells."
        }
      ]
    }
  },
  {
    id: "EWM-RES-03",
    title: "Lithium-Ion Battery Cathode Black Mass Beneficiation: Closed-Loop Hydrometallurgical Recovery of Cobalt, Nickel, and Lithium",
    category: "Research Papers",
    submissionDate: "2026-10-28",
    formattedDate: "Oct 28, 2026",
    score: 9.6,
    grade: "A+",
    status: "Evaluated",
    abstract: "Formulated a selective precipitation and solvent extraction process for spent LiCoO2 and NMC622 cells. Achieved 94.8% cobalt purity suitable for precursor cathode active material (pCAM) resynthesis.",
    tags: ["#BatteryRecycling", "#BlackMass", "#CobaltRecovery", "#CriticalMinerals"],
    divertedWasteKg: 34.2,
    plagiarismRate: "1.8% (IEEE CrossCheck Verified)",
    fileMeta: {
      name: "EWM_Research03_Cathode_BlackMass_Recovery.pdf",
      size: "7.1 MB",
      format: "PDF",
      pages: 32,
      checksum: "SHA256: c3b910fa...2026"
    },
    secondaryLinks: [
      { label: "Solvent Extraction XRD Plots", type: "dataset", icon: "line-chart" },
      { label: "Flowsheet Schematic", type: "schematic", icon: "file-text" }
    ],
    feedback: {
      evaluator: "Prof. Dr. Elena Vance",
      evaluatorTitle: "Lead Assessor & Chair of Circular Metallurgy",
      evaluatorAvatar: "EV",
      timestamp: "Oct 30, 2026 • 16:40",
      remarks: "Remarkable experimental depth on thermal pre-treatment vs acid leaching yields. The recycling efficiency curves are exemplary. Ready for submission to the Undergraduate Circular Materials Symposium.",
      rubric: {
        methodology: 24.5,
        analysis: 24.5,
        environmental: 24.0,
        documentation: 19.0,
        total: 92.0
      },
      signature: "Cryptographically Verified by University Academic Ledger (Hash: #EWM-EV-8842-03)"
    },
    paperContent: {
      institution: "Advanced Battery Recycling Laboratory & Clean Tech Consortium",
      keywords: "Lithium-ion, black mass, pCAM resynthesis, hydrometallurgy, cobalt recovery",
      sections: [
        {
          heading: "1. The Critical Materials Crisis in Electrification",
          text: "With EV battery demand surging, recycling spent cathode materials represents an urgent strategic imperative. Black mass recovered from shredded cells contains critical concentrations of Co, Ni, Mn, and Li."
        },
        {
          heading: "2. Selective Acid Leaching & Solvometallurgy",
          text: "Using 2.0 M sulfuric acid with 1.5 vol% H₂O₂ as a reducing agent at 70°C achieved >98% leaching efficiency for Co and Li within 90 minutes. Cyanex 272 solvent extraction yielded separation factors exceeding 1500 between Co and Ni."
        }
      ]
    }
  },
  {
    id: "EWM-TH-04",
    title: "Comparative Regulatory Analysis: European WEEE 2.0 / RoHS Directives vs. Basel Convention Amendments on Transboundary E-Waste Traffic",
    category: "Research Papers",
    submissionDate: "2026-11-01",
    formattedDate: "Nov 01, 2026",
    score: 9.0,
    grade: "A",
    status: "Evaluated",
    abstract: "Examined enforcement loopholes, illegal transboundary shipment interception rates, and hazardous chemical restrictions across OECD and non-OECD jurisdictions under the new Basel e-waste amendments.",
    tags: ["#WEEEDirective", "#RoHS", "#BaselConvention", "#EnvironmentalLaw"],
    divertedWasteKg: 0, // Regulatory thesis
    plagiarismRate: "0.9% (Turnitin Verified)",
    fileMeta: {
      name: "EWM_Thesis04_WEEE_Basel_Comparative_Law.pdf",
      size: "4.1 MB",
      format: "PDF",
      pages: 20,
      checksum: "SHA256: 41d8e1d7...2026"
    },
    secondaryLinks: [
      { label: "Comparative Legal Matrix (XLSX)", type: "matrix", icon: "table" }
    ],
    feedback: {
      evaluator: "Prof. Dr. Elena Vance",
      evaluatorTitle: "Lead Assessor & Chair of Circular Metallurgy",
      evaluatorAvatar: "EV",
      timestamp: "Nov 03, 2026 • 09:15",
      remarks: "Sharp statutory synthesis. The tabular comparison of threshold concentrations for lead, mercury, and PBDE flame retardants demonstrates deep regulatory comprehension.",
      rubric: {
        methodology: 22.5,
        analysis: 23.0,
        environmental: 24.5,
        documentation: 18.5,
        total: 88.5
      },
      signature: "Cryptographically Verified by University Academic Ledger (Hash: #EWM-EV-8842-04)"
    },
    paperContent: {
      institution: "Institute for International Environmental Policy & Law",
      keywords: "WEEE 2.0, RoHS, Basel Convention, hazardous waste shipments, regulatory compliance",
      sections: [
        {
          heading: "1. International Regulatory Landscape",
          text: "Despite international treaties, millions of tonnes of e-waste are misclassified as 'second-hand working electronics' to bypass hazardous waste export bans. This analysis traces the evolution of Annex II and VIII under the Basel Convention."
        },
        {
          heading: "2. RoHS Restrictions & Material Substitution",
          text: "Evaluated industrial adoption curves for lead-free solder alloys (SAC305) and non-halogenated flame retardants following tightened RoHS concentration thresholds of <0.1% by weight."
        }
      ]
    }
  },
  {
    id: "EWM-PRES-05",
    title: "Circular Design for Disassembly: Modular Architecture and Fastener Standardization in Consumer Laptops",
    category: "Presentations",
    submissionDate: "2026-11-04",
    formattedDate: "Nov 04, 2026",
    score: 9.7,
    grade: "A+",
    status: "Evaluated",
    abstract: "30-slide capstone seminar analyzing iFixit repairability scores against manual disassembly times. Proposed a magnetic-latch modular battery and uniform screw architecture cutting teardown times from 18 minutes to 90 seconds.",
    tags: ["#DesignForDisassembly", "#ModularDesign", "#Repairability", "#EcoDesign"],
    divertedWasteKg: 18.5,
    plagiarismRate: "Original CAD & Teardowns",
    fileMeta: {
      name: "EWM_Pres05_Design_For_Disassembly_Modular.pptx",
      size: "18.2 MB",
      format: "PPTX",
      pages: 30,
      checksum: "SHA256: 7e221fbc...2026"
    },
    secondaryLinks: [
      { label: "Seminar Video Stream", type: "media", icon: "video" },
      { label: "Teardown Protocol Sheet", type: "document", icon: "file-text" }
    ],
    feedback: {
      evaluator: "Prof. Dr. Elena Vance",
      evaluatorTitle: "Lead Assessor & Chair of Circular Metallurgy",
      evaluatorAvatar: "EV",
      timestamp: "Nov 05, 2026 • 15:30",
      remarks: "Exceptional presentation delivery and physical teardown documentation. The engineering tolerances for modular sub-assemblies were well defended during the oral examination.",
      rubric: {
        methodology: 24.5,
        analysis: 24.0,
        environmental: 24.5,
        documentation: 20.0,
        total: 93.0
      },
      signature: "Cryptographically Verified by University Academic Ledger (Hash: #EWM-EV-8842-05)"
    },
    paperContent: {
      institution: "Eco-Industrial Design & Sustainable Prototyping Workshop",
      keywords: "Design for Disassembly, modular electronics, repairability, circular product design",
      sections: [
        {
          heading: "1. The Barrier of Adhesive Encapsulation",
          text: "Modern consumer portables heavily favor structural adhesive glues over mechanical fasteners, increasing battery teardown hazards and preventing automated component shredding."
        },
        {
          heading: "2. The Modular Snap-Latching Solution",
          text: "By implementing neodymium quick-release magnets and universal Phillips #0 screws, battery replacement cycle time drops from 18 minutes to 90 seconds, dramatically improving second-life refurbishment yields."
        }
      ]
    }
  },
  {
    id: "EWM-LAB-06",
    title: "Life Cycle Assessment (LCA) and Toxic Leachate Potential of CRT Glass and Flame-Retardant (BFR) Plastics in Landfills",
    category: "Lab Work",
    submissionDate: "2026-11-08",
    formattedDate: "Nov 08, 2026",
    score: 9.3,
    grade: "A",
    status: "Under Review",
    abstract: "Conducted TCLP (Toxicity Characteristic Leaching Procedure) on legacy leaded CRT funnel glass and brominated ABS computer casings. Modelled heavy metal soil migration and bioaccumulation risks using openLCA software.",
    tags: ["#TCLPToxicity", "#LifeCycleAssessment", "#FlameRetardants", "#LandfillImpact"],
    divertedWasteKg: 19.6,
    plagiarismRate: "1.5% (Turnitin Verified)",
    fileMeta: {
      name: "EWM_Lab06_TCLP_LCA_Leachate_Report.pdf",
      size: "4.9 MB",
      format: "PDF",
      pages: 22,
      checksum: "SHA256: 310892ff...2026"
    },
    secondaryLinks: [
      { label: "openLCA Characterization Factors", type: "dataset", icon: "database" },
      { label: "ICP-OES Heavy Metal Readings", type: "table", icon: "table" }
    ],
    feedback: {
      evaluator: "Prof. Dr. Elena Vance",
      evaluatorTitle: "Lead Assessor & Chair of Circular Metallurgy",
      evaluatorAvatar: "EV",
      timestamp: "Nov 08, 2026 • 18:45",
      remarks: "Preliminary data look very rigorous. Awaiting co-examiner sign-off on the ICP-OES calibration curve before final score verification. Overall findings are methodologically sound.",
      rubric: {
        methodology: 23.5,
        analysis: 23.5,
        environmental: 24.0,
        documentation: 18.5,
        total: 89.5
      },
      signature: "Status: In Verification Queue (Awaiting Co-Assessor Sign-off)"
    },
    paperContent: {
      institution: "Hazardous Materials Testing Facility & LCA Center",
      keywords: "TCLP, CRT lead glass, brominated flame retardants, leachate modeling, landfill migration",
      sections: [
        {
          heading: "1. Legacy E-Waste Hazards",
          text: "Cathode Ray Tubes (CRTs) contain up to 1.5 kg of elemental lead per monitor. When co-disposed in non-hazardous municipal landfills, acid rain accelerates heavy metal elution into municipal groundwater tables."
        },
        {
          heading: "2. Toxicity Characteristic Leaching Protocol (EPA 1311)",
          text: "Leached concentrations of Pb exceeded 18.4 mg/L under acetic acid extraction (pH 4.93), surpassing regulatory thresholds of 5.0 mg/L by more than 3.6x. Demonstrated imperative for glass vitrification recycling."
        }
      ]
    }
  }
];

// Application State Management
class DashboardApp {
  constructor() {
    this.storageKey = 'ecycle_hub_assignments_v1';
    this.assignments = this.loadAssignments();
    this.currentCategory = 'All';
    this.currentStatus = 'All';
    this.currentSort = 'latest';
    this.searchQuery = '';
    this.currentViewMode = 'grid'; // 'grid' | 'table'
    this.isEvaluatorMode = false;
    this.activeModalAssignment = null;

    this.init();
  }

  loadAssignments() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('LocalStorage error, using defaults', e);
    }
    return [...INITIAL_ASSIGNMENTS];
  }

  saveAssignments() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.assignments));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }

  init() {
    this.bindEvents();
    this.startClock();
    this.render();
  }

  startClock() {
    const updateTime = () => {
      const clockEl = document.getElementById('live-system-clock');
      if (clockEl) {
        const now = new Date();
        const dateStr = now.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        });
        const timeStr = now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
        clockEl.textContent = `${dateStr} • ${timeStr} UTC+5:30`;
      }
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  bindEvents() {
    // Search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.renderAssignments();
      });
    }

    // Keyboard shortcut for search (⌘K or /)
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInput?.focus();
      }
    });

    // Category filter pills
    document.querySelectorAll('[data-category-filter]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cat = e.currentTarget.getAttribute('data-category-filter');
        this.setCategory(cat);
      });
    });

    // Status filter dropdown
    const statusSelect = document.getElementById('filter-status-select');
    if (statusSelect) {
      statusSelect.addEventListener('change', (e) => {
        this.currentStatus = e.target.value;
        this.renderAssignments();
      });
    }

    // Sort dropdown
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.currentSort = e.target.value;
        this.renderAssignments();
      });
    }

    // View Mode Toggles (Grid vs Table)
    const btnGridView = document.getElementById('btn-view-grid');
    const btnTableView = document.getElementById('btn-view-table');
    if (btnGridView && btnTableView) {
      btnGridView.addEventListener('click', () => {
        this.setViewMode('grid');
      });
      btnTableView.addEventListener('click', () => {
        this.setViewMode('table');
      });
    }

    // Evaluator Mode Toggle
    const evalToggle = document.getElementById('evaluator-mode-toggle');
    if (evalToggle) {
      evalToggle.addEventListener('change', (e) => {
        this.isEvaluatorMode = e.target.checked;
        const banner = document.getElementById('evaluator-mode-banner');
        if (banner) {
          if (this.isEvaluatorMode) {
            banner.classList.remove('hidden');
          } else {
            banner.classList.add('hidden');
          }
        }
        this.renderAssignments();
      });
    }

    // Upload Modal triggers
    const openUploadBtn = document.getElementById('btn-open-upload');
    const uploadModal = document.getElementById('upload-modal');
    const closeUploadBtn = document.getElementById('btn-close-upload');
    const uploadForm = document.getElementById('upload-assignment-form');

    if (openUploadBtn && uploadModal) {
      openUploadBtn.addEventListener('click', () => {
        uploadModal.showModal();
      });
    }

    if (closeUploadBtn && uploadModal) {
      closeUploadBtn.addEventListener('click', () => {
        uploadModal.close();
      });
    }

    // Close on backdrop click for dialogs
    document.querySelectorAll('dialog').forEach(diag => {
      diag.addEventListener('click', (e) => {
        const rect = diag.getBoundingClientRect();
        const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height
          && rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
        if (!isInDialog) {
          diag.close();
        }
      });
    });

    // File Drag & Drop on Upload Modal
    const dropZone = document.getElementById('file-drop-zone');
    const fileInput = document.getElementById('file-input');
    const fileSelectedLabel = document.getElementById('file-selected-name');

    if (dropZone && fileInput) {
      dropZone.addEventListener('click', () => fileInput.click());

      ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
          e.preventDefault();
          dropZone.classList.add('drag-over');
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
          e.preventDefault();
          dropZone.classList.remove('drag-over');
        });
      });

      dropZone.addEventListener('drop', (e) => {
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          fileInput.files = e.dataTransfer.files;
          updateFileName(fileInput.files[0]);
        }
      });

      fileInput.addEventListener('change', () => {
        if (fileInput.files && fileInput.files[0]) {
          updateFileName(fileInput.files[0]);
        }
      });

      const updateFileName = (file) => {
        if (fileSelectedLabel) {
          const mb = (file.size / (1024 * 1024)).toFixed(1);
          fileSelectedLabel.innerHTML = `<span class="text-emerald-400 font-medium">Selected:</span> ${file.name} (${mb} MB)`;
          fileSelectedLabel.classList.remove('hidden');
        }
      };
    }

    // Form submission
    if (uploadForm) {
      uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleUploadSubmit(e);
      });
    }

    // Reset Data button
    const resetDataBtn = document.getElementById('btn-reset-data');
    if (resetDataBtn) {
      resetDataBtn.addEventListener('click', () => {
        if (confirm('Reset portfolio back to default course assignments? Any newly added submissions will be cleared.')) {
          this.assignments = JSON.parse(JSON.stringify(INITIAL_ASSIGNMENTS));
          this.saveAssignments();
          this.render();
        }
      });
    }

    // Document Preview Modal Close
    const docModal = document.getElementById('document-preview-modal');
    const closeDocBtn = document.getElementById('btn-close-doc-modal');
    if (closeDocBtn && docModal) {
      closeDocBtn.addEventListener('click', () => docModal.close());
    }

    // Print / Download Portfolio button
    const printBtn = document.getElementById('btn-print-portfolio');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Material Impact Calculator inputs
    const numLaptops = document.getElementById('calc-laptops');
    const numPhones = document.getElementById('calc-phones');
    const numServers = document.getElementById('calc-servers');
    if (numLaptops && numPhones && numServers) {
      const updateImpact = () => this.calculateMaterialImpact();
      numLaptops.addEventListener('input', updateImpact);
      numPhones.addEventListener('input', updateImpact);
      numServers.addEventListener('input', updateImpact);
      updateImpact();
    }
  }

  setCategory(cat) {
    this.currentCategory = cat;
    document.querySelectorAll('[data-category-filter]').forEach(btn => {
      const active = btn.getAttribute('data-category-filter') === cat;
      if (active) {
        btn.classList.add('bg-emerald-500/20', 'text-emerald-300', 'border-emerald-500/50');
        btn.classList.remove('text-gray-400', 'border-white/10', 'hover:border-white/20');
      } else {
        btn.classList.remove('bg-emerald-500/20', 'text-emerald-300', 'border-emerald-500/50');
        btn.classList.add('text-gray-400', 'border-white/10', 'hover:border-white/20');
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

  getFilteredAssignments() {
    return this.assignments.filter(item => {
      // Category filter
      if (this.currentCategory !== 'All' && item.category !== this.currentCategory) {
        return false;
      }
      // Status filter
      if (this.currentStatus !== 'All' && item.status !== this.currentStatus) {
        return false;
      }
      // Search filter
      if (this.searchQuery) {
        const q = this.searchQuery;
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesId = item.id.toLowerCase().includes(q);
        const matchesAbstract = item.abstract.toLowerCase().includes(q);
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(q));
        const matchesEvaluator = item.feedback.remarks.toLowerCase().includes(q);
        return matchesTitle || matchesId || matchesAbstract || matchesTags || matchesEvaluator;
      }
      return true;
    }).sort((a, b) => {
      if (this.currentSort === 'latest') {
        return new Date(b.submissionDate) - new Date(a.submissionDate);
      } else if (this.currentSort === 'oldest') {
        return new Date(a.submissionDate) - new Date(b.submissionDate);
      } else if (this.currentSort === 'score') {
        return (b.score || 0) - (a.score || 0);
      } else if (this.currentSort === 'code') {
        return a.id.localeCompare(b.id);
      }
      return 0;
    });
  }

  render() {
    this.renderKPIs();
    this.renderAssignments();
    this.updateCategoryCounts();
  }

  renderKPIs() {
    const total = this.assignments.length;
    const evaluated = this.assignments.filter(a => a.status === 'Evaluated').length;
    const underReview = this.assignments.filter(a => a.status === 'Under Review').length;
    const pending = this.assignments.filter(a => a.status === 'Pending').length;

    // Calculate total diverted waste
    const totalWasteKg = this.assignments.reduce((acc, curr) => acc + (curr.divertedWasteKg || 0), 0);

    // Calculate average score of evaluated assignments
    const evaluatedItems = this.assignments.filter(a => a.score && a.status === 'Evaluated');
    const avgScore = evaluatedItems.length > 0 
      ? (evaluatedItems.reduce((acc, c) => acc + c.score, 0) / evaluatedItems.length).toFixed(1)
      : '9.4';

    // Update KPI UI elements
    const kpiTotalEl = document.getElementById('kpi-total-submissions');
    if (kpiTotalEl) kpiTotalEl.textContent = `${total}`;

    const kpiAvgScoreEl = document.getElementById('kpi-avg-score');
    if (kpiAvgScoreEl) kpiAvgScoreEl.textContent = `${avgScore} / 10`;

    const kpiWasteEl = document.getElementById('kpi-waste-diverted');
    if (kpiWasteEl) kpiWasteEl.textContent = `${totalWasteKg.toFixed(1)} kg`;

    const kpiReviewStatusEl = document.getElementById('kpi-review-status');
    if (kpiReviewStatusEl) {
      kpiReviewStatusEl.textContent = `${evaluated} Verified • ${underReview + pending} In Queue`;
    }

    // Update Banner Meta Badges
    const badgeSubmitted = document.getElementById('banner-badge-submitted');
    if (badgeSubmitted) badgeSubmitted.textContent = `${total} / 6 Core Modules`;

    const badgeWaste = document.getElementById('banner-badge-waste');
    if (badgeWaste) badgeWaste.textContent = `${totalWasteKg.toFixed(1)} kg e-Waste Analyzed`;

    // Circular progress ring calculation (100% completion if >= 6)
    const progressPercent = Math.min(100, Math.round((total / 6) * 100));
    const circle = document.getElementById('kpi-progress-circle');
    const text = document.getElementById('kpi-progress-text');
    if (circle && text) {
      const radius = 32;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (progressPercent / 100) * circumference;
      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = offset;
      text.textContent = `${progressPercent}%`;
    }
  }

  updateCategoryCounts() {
    const counts = {
      All: this.assignments.length,
      "Research Papers": this.assignments.filter(a => a.category === 'Research Papers').length,
      "Case Studies": this.assignments.filter(a => a.category === 'Case Studies').length,
      "Lab Work": this.assignments.filter(a => a.category === 'Lab Work').length,
      "Presentations": this.assignments.filter(a => a.category === 'Presentations').length
    };

    document.querySelectorAll('[data-category-count]').forEach(el => {
      const cat = el.getAttribute('data-category-count');
      if (counts[cat] !== undefined) {
        el.textContent = counts[cat];
      }
    });
  }

  renderAssignments() {
    const items = this.getFilteredAssignments();
    const countBadge = document.getElementById('results-count-badge');
    if (countBadge) {
      countBadge.textContent = `Showing ${items.length} of ${this.assignments.length} assignments`;
    }

    this.renderGridView(items);
    this.renderTableView(items);
  }

  renderGridView(items) {
    const gridContainer = document.getElementById('assignment-grid-view');
    if (!gridContainer) return;

    if (items.length === 0) {
      gridContainer.innerHTML = `
        <div class="col-span-full glass-panel rounded-2xl p-12 text-center border border-white/10 my-6">
          <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-2 font-display">No matching assignments found</h3>
          <p class="text-gray-400 max-w-md mx-auto mb-6 text-sm">
            Try adjusting your search terms or clearing current filter categories to view other course submissions.
          </p>
          <button onclick="window.app.resetFilters()" class="px-5 py-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-sm font-medium hover:bg-emerald-500/30 transition-colors">
            Reset Filters
          </button>
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = items.map(item => this.buildCardHtml(item)).join('');

    // Attach event listeners to card triggers
    this.bindCardEventListeners(gridContainer);
  }

  buildCardHtml(item) {
    const statusConfig = {
      "Evaluated": {
        color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
        dot: "bg-emerald-400 live-pulse",
        text: "Evaluated"
      },
      "Under Review": {
        color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
        dot: "bg-amber-400 live-pulse-amber",
        text: "Under Review"
      },
      "Pending": {
        color: "text-sky-400 bg-sky-500/10 border-sky-500/30",
        dot: "bg-sky-400",
        text: "Pending Assessor"
      }
    };

    const statusObj = statusConfig[item.status] || statusConfig["Evaluated"];

    const categoryBadges = {
      "Lab Work": "text-emerald-300 bg-emerald-950/60 border-emerald-600/40",
      "Research Papers": "text-cyan-300 bg-cyan-950/60 border-cyan-600/40",
      "Case Studies": "text-purple-300 bg-purple-950/60 border-purple-600/40",
      "Presentations": "text-amber-300 bg-amber-950/60 border-amber-600/40"
    };

    const catBadgeClass = categoryBadges[item.category] || "text-gray-300 bg-gray-800/80 border-gray-600/40";

    return `
      <article class="glass-card rounded-2xl p-6 relative flex flex-col justify-between group overflow-hidden" data-assignment-id="${item.id}">
        <!-- Top Metadata Header -->
        <div>
          <div class="flex items-center justify-between gap-3 mb-4 flex-wrap">
            <div class="flex items-center gap-2">
              <span class="font-mono-code text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 font-semibold tracking-wider">
                ${item.id}
              </span>
              <span class="text-xs px-2.5 py-1 rounded-md border font-medium ${catBadgeClass}">
                ${item.category}
              </span>
            </div>
            
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border font-medium ${statusObj.color}">
                <span class="w-1.5 h-1.5 rounded-full ${statusObj.dot}"></span>
                ${statusObj.text}
              </span>
            </div>
          </div>

          <!-- Title -->
          <h3 class="text-lg font-bold text-white mb-2.5 leading-snug font-display group-hover:text-emerald-300 transition-colors">
            ${item.title}
          </h3>

          <!-- Executive Summary -->
          <p class="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
            ${item.abstract}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${item.tags.map(tag => `
              <button onclick="window.app.filterByTag('${tag}')" class="text-[11px] font-mono-code px-2 py-0.5 rounded bg-white/5 hover:bg-emerald-500/20 text-gray-400 hover:text-emerald-300 transition-colors border border-white/5">
                ${tag}
              </button>
            `).join('')}
          </div>

          <!-- Academic Metrics & Verification -->
          <div class="grid grid-cols-2 gap-2 mb-5 p-3 rounded-xl bg-black/30 border border-white/5 text-xs font-mono-code">
            <div>
              <span class="text-gray-500 block text-[10px] uppercase tracking-wider">Diverted / Analyzed</span>
              <span class="text-emerald-400 font-semibold">${item.divertedWasteKg > 0 ? item.divertedWasteKg + ' kg e-Waste' : 'Policy Framework'}</span>
            </div>
            <div>
              <span class="text-gray-500 block text-[10px] uppercase tracking-wider">Integrity Audit</span>
              <span class="text-gray-300 truncate block">${item.plagiarismRate.split(' ')[0]}</span>
            </div>
          </div>
        </div>

        <!-- Card Footer & Action Buttons -->
        <div>
          <!-- File Asset Row -->
          <div class="flex items-center justify-between pt-4 border-t border-white/10 mb-4 text-xs text-gray-400">
            <div class="flex items-center gap-2">
              <span class="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </span>
              <div>
                <span class="text-gray-200 font-medium block truncate max-w-[150px] sm:max-w-[180px]">${item.fileMeta.name}</span>
                <span class="text-[11px] text-gray-500 font-mono-code">${item.fileMeta.format} • ${item.fileMeta.size}</span>
              </div>
            </div>

            <span class="text-gray-500 font-mono-code text-[11px]">
              ${item.formattedDate}
            </span>
          </div>

          <!-- Primary Actions -->
          <div class="flex items-center gap-2 mb-3">
            <button data-action="preview" data-id="${item.id}" class="flex-1 py-2 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-medium text-xs flex items-center justify-center gap-1.5 transition-all">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
              Read / Preview
            </button>

            <button data-action="download" data-id="${item.id}" class="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-all" title="Download Document">
              <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              <span>Download</span>
            </button>
          </div>

          <!-- Evaluator Feedback Accordion Trigger -->
          <div class="rounded-xl border border-white/10 bg-black/25 overflow-hidden">
            <button data-action="toggle-feedback" data-id="${item.id}" class="w-full py-2.5 px-3 flex items-center justify-between text-xs font-medium text-gray-300 hover:text-emerald-300 transition-colors">
              <span class="flex items-center gap-1.5">
                <span class="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                  ✓
                </span>
                <span>Evaluator Feedback & Rubric</span>
                <span class="font-mono-code text-emerald-400 font-bold ml-1">${item.score}/10</span>
              </span>
              <svg class="w-4 h-4 text-gray-400 transition-transform feedback-chevron-${item.id}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            <!-- Collapsible Feedback Body -->
            <div id="feedback-panel-${item.id}" class="hidden p-3 border-t border-white/5 bg-black/40 text-xs">
              <div class="flex items-start gap-2.5 mb-2.5">
                <div class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-xs shrink-0 border border-emerald-500/30">
                  ${item.feedback.evaluatorAvatar}
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="text-white font-semibold">${item.feedback.evaluator}</span>
                    <span class="text-[10px] text-gray-400">${item.feedback.timestamp}</span>
                  </div>
                  <span class="text-[10px] text-emerald-400 block">${item.feedback.evaluatorTitle}</span>
                </div>
              </div>

              <p class="text-gray-300 italic mb-3 text-[11px] leading-relaxed bg-white/5 p-2.5 rounded-lg border border-white/5">
                "${item.feedback.remarks}"
              </p>

              <!-- Rubric scores breakdown -->
              <div class="grid grid-cols-2 gap-2 text-[10px] font-mono-code mb-2 text-gray-400">
                <div class="flex justify-between">
                  <span>Methodology:</span>
                  <span class="text-emerald-400 font-semibold">${item.feedback.rubric.methodology}/25</span>
                </div>
                <div class="flex justify-between">
                  <span>Data Analysis:</span>
                  <span class="text-emerald-400 font-semibold">${item.feedback.rubric.analysis}/25</span>
                </div>
                <div class="flex justify-between">
                  <span>Eco Relevance:</span>
                  <span class="text-emerald-400 font-semibold">${item.feedback.rubric.environmental}/25</span>
                </div>
                <div class="flex justify-between">
                  <span>Doc Quality:</span>
                  <span class="text-emerald-400 font-semibold">${item.feedback.rubric.documentation}/20</span>
                </div>
              </div>

              <!-- Cryptographic Signature Verification -->
              <div class="pt-2 border-t border-white/5 text-[9px] font-mono-code text-gray-500 truncate flex items-center gap-1">
                <svg class="w-3 h-3 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="truncate">${item.feedback.signature}</span>
              </div>

              ${this.isEvaluatorMode ? `
                <div class="mt-3 pt-2 border-t border-emerald-500/20 flex gap-2">
                  <button onclick="window.app.openEditGradeModal('${item.id}')" class="w-full py-1.5 px-2 rounded-lg bg-emerald-500 text-black font-semibold text-[11px] hover:bg-emerald-400 transition-colors">
                    Edit Assessor Grade / Feedback
                  </button>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  renderTableView(items) {
    const tableBody = document.getElementById('assignment-table-body');
    if (!tableBody) return;

    tableBody.innerHTML = items.map(item => `
      <tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors text-xs font-mono-code">
        <td class="p-4">
          <span class="px-2 py-1 rounded bg-white/5 text-gray-300 font-bold border border-white/10">
            ${item.id}
          </span>
        </td>
        <td class="p-4 font-sans font-medium text-white max-w-xs">
          <div class="font-bold text-sm text-white mb-1 hover:text-emerald-400 cursor-pointer" onclick="window.app.openDocumentPreview('${item.id}')">
            ${item.title}
          </div>
          <div class="text-gray-400 text-xs line-clamp-1">${item.abstract}</div>
        </td>
        <td class="p-4">
          <span class="px-2.5 py-1 rounded-md text-[11px] font-sans font-medium bg-white/5 border border-white/10 text-gray-300">
            ${item.category}
          </span>
        </td>
        <td class="p-4 text-gray-400">
          ${item.formattedDate}
        </td>
        <td class="p-4 text-center">
          <span class="text-emerald-400 font-bold text-sm">${item.score}/10</span>
          <span class="text-gray-500 text-[10px] block font-sans">${item.grade}</span>
        </td>
        <td class="p-4">
          <span class="inline-flex items-center gap-1 text-[11px] font-sans px-2.5 py-1 rounded-full border ${item.status === 'Evaluated' ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' : 'text-amber-400 bg-amber-500/10 border-amber-500/30'}">
            <span class="w-1.5 h-1.5 rounded-full ${item.status === 'Evaluated' ? 'bg-emerald-400' : 'bg-amber-400'}"></span>
            ${item.status}
          </span>
        </td>
        <td class="p-4 text-right">
          <div class="flex items-center justify-end gap-2">
            <button onclick="window.app.openDocumentPreview('${item.id}')" class="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20" title="Preview Paper">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </button>
            <button onclick="window.app.downloadAssignmentPdf('${item.id}')" class="p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10" title="Download Document">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  bindCardEventListeners(container) {
    container.querySelectorAll('[data-action="preview"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        this.openDocumentPreview(id);
      });
    });

    container.querySelectorAll('[data-action="download"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        this.downloadAssignmentPdf(id);
      });
    });

    container.querySelectorAll('[data-action="toggle-feedback"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const panel = document.getElementById(`feedback-panel-${id}`);
        const chevron = container.querySelector(`.feedback-chevron-${id}`);
        if (panel) {
          panel.classList.toggle('hidden');
          chevron?.classList.toggle('rotate-180');
        }
      });
    });
  }

  filterByTag(tag) {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.value = tag.replace('#', '');
      this.searchQuery = searchInput.value.toLowerCase();
      this.renderAssignments();
    }
  }

  resetFilters() {
    this.currentCategory = 'All';
    this.currentStatus = 'All';
    this.searchQuery = '';
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    const statusSelect = document.getElementById('filter-status-select');
    if (statusSelect) statusSelect.value = 'All';
    this.setCategory('All');
  }

  openDocumentPreview(id) {
    const item = this.assignments.find(a => a.id === id);
    if (!item) return;

    this.activeModalAssignment = item;
    const modal = document.getElementById('document-preview-modal');
    const content = document.getElementById('doc-preview-body');

    if (!modal || !content) return;

    content.innerHTML = `
      <!-- Paper Header Banner -->
      <div class="border-b border-white/10 pb-6 mb-6">
        <div class="flex items-center justify-between gap-4 mb-3 flex-wrap">
          <div class="flex items-center gap-2">
            <span class="font-mono-code text-xs px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold">
              ${item.id}
            </span>
            <span class="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
              ${item.category}
            </span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono-code text-gray-400">Published: ${item.formattedDate}</span>
            <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              Score: ${item.score}/10 (${item.grade})
            </span>
          </div>
        </div>

        <h1 class="text-2xl font-bold text-white mb-3 font-display leading-tight">
          ${item.title}
        </h1>

        <div class="text-xs text-gray-400 font-mono-code space-y-1">
          <p><span class="text-emerald-400">Author:</span> Aarav S. Mehta (Student ID: 2024-ENV-8842)</p>
          <p><span class="text-cyan-400">Institutional Affiliation:</span> ${item.paperContent?.institution || 'E-Waste Management & Circular Systems Consortium'}</p>
          <p><span class="text-amber-400">Integrity Verification:</span> ${item.plagiarismRate}</p>
        </div>
      </div>

      <!-- Executive Abstract Box -->
      <div class="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 mb-6">
        <h4 class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 font-display flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Executive Abstract
        </h4>
        <p class="text-gray-200 text-sm leading-relaxed">
          ${item.abstract}
        </p>
        <div class="mt-3 pt-2 border-t border-emerald-500/10 text-xs text-gray-400 font-mono-code">
          <span class="text-emerald-300 font-semibold">Keywords:</span> ${item.paperContent?.keywords || item.tags.join(', ')}
        </div>
      </div>

      <!-- Paper Sections -->
      <div class="space-y-6 text-gray-300 text-sm leading-relaxed">
        ${(item.paperContent?.sections || [
          { heading: "1. Introduction & Methodology", text: item.abstract },
          { heading: "2. Experimental Analysis & Findings", text: "Laboratory data and systematic life cycle metrics support significant environmental remediation advantages." }
        ]).map(sec => `
          <div>
            <h3 class="text-lg font-bold text-white mb-2 font-display text-emerald-200">${sec.heading}</h3>
            <p class="text-gray-300 leading-relaxed">${sec.text}</p>
          </div>
        `).join('')}

        <!-- Supplementary Data Table / Metric Preview -->
        <div class="p-4 rounded-xl bg-black/40 border border-white/10 my-6">
          <h4 class="text-xs font-bold text-gray-300 uppercase tracking-wider mb-3 font-mono-code">
            Laboratory Analytical Matrix • Summary Breakdown
          </h4>
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs font-mono-code">
              <thead>
                <tr class="border-b border-white/10 text-gray-400">
                  <th class="pb-2">Material / Fraction</th>
                  <th class="pb-2">Initial Concentration</th>
                  <th class="pb-2">Extraction Yield (%)</th>
                  <th class="pb-2">Environmental Factor</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/5 text-gray-300">
                <tr>
                  <td class="py-2 text-white font-semibold">Gold (Au)</td>
                  <td class="py-2">240 g/t</td>
                  <td class="py-2 text-emerald-400 font-bold">91.4%</td>
                  <td class="py-2 text-cyan-300">0.08 kg CO2 eq/g</td>
                </tr>
                <tr>
                  <td class="py-2 text-white font-semibold">Copper (Cu)</td>
                  <td class="py-2">132 kg/t</td>
                  <td class="py-2 text-emerald-400 font-bold">96.8%</td>
                  <td class="py-2 text-cyan-300">1.2 kg CO2 eq/kg</td>
                </tr>
                <tr>
                  <td class="py-2 text-white font-semibold">Palladium (Pd)</td>
                  <td class="py-2">48 g/t</td>
                  <td class="py-2 text-emerald-400 font-bold">88.2%</td>
                  <td class="py-2 text-cyan-300">0.14 kg CO2 eq/g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Official Assessor Signature & Rubric Footer -->
      <div class="mt-8 pt-6 border-t border-white/10 bg-white/[0.02] p-5 rounded-xl border border-white/5">
        <div class="flex items-center justify-between flex-wrap gap-4 mb-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center border border-emerald-500/30">
              ${item.feedback.evaluatorAvatar}
            </div>
            <div>
              <div class="text-sm font-bold text-white">${item.feedback.evaluator}</div>
              <div class="text-xs text-gray-400">${item.feedback.evaluatorTitle}</div>
            </div>
          </div>
          <div class="text-right">
            <span class="text-emerald-400 font-mono-code font-bold text-lg">${item.score} / 10</span>
            <span class="text-xs text-gray-400 block">${item.feedback.timestamp}</span>
          </div>
        </div>

        <p class="text-xs text-gray-300 italic mb-4 bg-black/30 p-3 rounded-lg border border-white/5">
          "${item.feedback.remarks}"
        </p>

        <div class="flex items-center justify-between text-[11px] font-mono-code text-gray-500">
          <span>Security Ledger: Verified Digital Audit</span>
          <span class="text-emerald-400">${item.feedback.signature}</span>
        </div>
      </div>
    `;

    modal.showModal();
  }

  downloadAssignmentPdf(id) {
    const item = this.assignments.find(a => a.id === id);
    if (!item) return;

    // Generate a downloadable text/markdown dossier that opens and downloads cleanly
    const content = `========================================================================
E-CYCLE HUB // ACADEMIC EVALUATION DOSSIER
Course: E-Waste Management & Circular Economy (EWM-502)
Student: Aarav S. Mehta (ID: 2024-ENV-8842)
Assessor: ${item.feedback.evaluator} (${item.feedback.evaluatorTitle})
========================================================================

ASSIGNMENT IDENTIFIER: ${item.id}
CATEGORY: ${item.category}
SUBMISSION DATE: ${item.formattedDate}
GRADE AWARDED: ${item.score}/10 (${item.grade})
STATUS: ${item.status}

TITLE:
${item.title}

EXECUTIVE ABSTRACT:
${item.abstract}

KEYWORDS & FOCUS AREAS:
${item.tags.join(', ')}

EQUIVALENT E-WASTE DIVERTED / ANALYZED:
${item.divertedWasteKg > 0 ? item.divertedWasteKg + ' kg' : 'Statutory & Policy Analysis Framework'}

PLAGIARISM & INTEGRITY CHECK:
${item.plagiarismRate}

FILE METADATA:
File Name: ${item.fileMeta.name}
File Size: ${item.fileMeta.size}
Checksum: ${item.fileMeta.checksum}

EVALUATOR REMARKS & RUBRIC ASSESSMENT:
"${item.feedback.remarks}"

RUBRIC BREAKDOWN:
- Technical Methodology: ${item.feedback.rubric.methodology}/25
- Literature & Data Analysis: ${item.feedback.rubric.analysis}/25
- Environmental & Policy Context: ${item.feedback.rubric.environmental}/25
- Academic Writing & Documentation: ${item.feedback.rubric.documentation}/20
TOTAL COMPOSITE SCORE: ${item.feedback.rubric.total}/100

OFFICIAL DIGITAL SIGNATURE:
${item.feedback.signature}
========================================================================
Generated on: ${new Date().toISOString()} via E-Cycle Hub Platform.
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${item.id}_${item.title.substring(0, 25).replace(/[^a-zA-Z0-9]/g, '_')}_Dossier.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  handleUploadSubmit(e) {
    const title = document.getElementById('upload-title')?.value.trim();
    const category = document.getElementById('upload-category')?.value;
    const abstract = document.getElementById('upload-abstract')?.value.trim();
    const tagsInput = document.getElementById('upload-tags')?.value.trim();
    const wasteInput = parseFloat(document.getElementById('upload-waste')?.value || "0");
    const fileInput = document.getElementById('file-input');

    if (!title || !abstract) {
      alert('Please fill out the Assignment Title and Abstract.');
      return;
    }

    const modal = document.getElementById('upload-modal');
    const submitBtn = document.getElementById('btn-submit-upload');
    const progressContainer = document.getElementById('upload-progress-container');
    const progressFill = document.getElementById('upload-progress-fill');
    const progressStatus = document.getElementById('upload-progress-status');

    if (progressContainer && progressFill && progressStatus) {
      progressContainer.classList.remove('hidden');
      if (submitBtn) submitBtn.disabled = true;

      // Simulated stages of academic submission pipeline
      progressFill.style.width = '25%';
      progressStatus.textContent = 'Encrypting document and computing SHA-256 hash...';

      setTimeout(() => {
        progressFill.style.width = '65%';
        progressStatus.textContent = 'Running automated academic plagiarism check...';

        setTimeout(() => {
          progressFill.style.width = '100%';
          progressStatus.textContent = 'Submitting to Professor Elena Vance review queue...';

          setTimeout(() => {
            // Generate unique assignment code
            const count = this.assignments.length + 1;
            const prefix = category === 'Lab Work' ? 'EWM-LAB' :
                           category === 'Research Papers' ? 'EWM-RES' :
                           category === 'Case Studies' ? 'EWM-CS' : 'EWM-PRES';
            const newId = `${prefix}-0${count}`;

            // Process tags
            const tags = tagsInput ? tagsInput.split(',').map(t => {
              const clean = t.trim();
              return clean.startsWith('#') ? clean : `#${clean}`;
            }) : ['#EWM502', '#CircularEconomy'];

            const fileName = fileInput?.files?.[0]?.name || `${newId}_Submission.pdf`;
            const fileSize = fileInput?.files?.[0] ? `${(fileInput.files[0].size / (1024 * 1024)).toFixed(1)} MB` : '3.8 MB';

            const newAssignment = {
              id: newId,
              title: title,
              category: category || "Lab Work",
              submissionDate: new Date().toISOString().split('T')[0],
              formattedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
              score: 9.1,
              grade: "Pending",
              status: "Under Review",
              abstract: abstract,
              tags: tags,
              divertedWasteKg: wasteInput || 15.0,
              plagiarismRate: "< 1.5% (Pre-Check Cleared)",
              fileMeta: {
                name: fileName,
                size: fileSize,
                format: fileName.endsWith('.pptx') ? 'PPTX' : 'PDF',
                pages: 14,
                checksum: `SHA256: ${Math.random().toString(36).substring(2, 10)}...2026`
              },
              secondaryLinks: [
                { label: "Submitted Artifact", type: "document", icon: "file-text" }
              ],
              feedback: {
                evaluator: "Prof. Dr. Elena Vance",
                evaluatorTitle: "Lead Assessor & Chair of Circular Metallurgy",
                evaluatorAvatar: "EV",
                timestamp: "Just now",
                remarks: "Assignment successfully queued for academic peer evaluation and grading. Rubric will be finalized following oral session.",
                rubric: {
                  methodology: 23.0,
                  analysis: 23.0,
                  environmental: 23.0,
                  documentation: 18.0,
                  total: 87.0
                },
                signature: "Status: Awaiting Evaluator Rubric Finalization"
              },
              paperContent: {
                institution: "Department of Environmental & Materials Engineering",
                keywords: tags.join(', '),
                sections: [
                  { heading: "1. Abstract & Scope", text: abstract }
                ]
              }
            };

            this.assignments.unshift(newAssignment);
            this.saveAssignments();
            this.render();

            // Reset modal form
            e.target.reset();
            progressContainer.classList.add('hidden');
            progressFill.style.width = '0%';
            if (submitBtn) submitBtn.disabled = false;
            modal.close();

            // Notify user
            this.showNotification(`Assignment ${newId} submitted successfully to Prof. Vance's portal!`);
          }, 600);
        }, 600);
      }, 600);
    }
  }

  openEditGradeModal(id) {
    const item = this.assignments.find(a => a.id === id);
    if (!item) return;

    const newScore = prompt(`Enter new score for ${item.id} (Current: ${item.score}/10):`, item.score);
    if (newScore !== null && !isNaN(parseFloat(newScore))) {
      item.score = parseFloat(newScore);
      item.status = "Evaluated";
      item.grade = item.score >= 9.5 ? "A+" : item.score >= 9.0 ? "A" : item.score >= 8.5 ? "B+" : "B";
      
      const newRemarks = prompt("Update Evaluator Remarks:", item.feedback.remarks);
      if (newRemarks) {
        item.feedback.remarks = newRemarks;
        item.feedback.timestamp = "Updated by Professor Vance • Just now";
      }

      this.saveAssignments();
      this.render();
      this.showNotification(`Assessor grade for ${item.id} updated to ${item.score}/10 (${item.grade})`);
    }
  }

  showNotification(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 z-50 glass-panel px-5 py-3.5 rounded-xl border border-emerald-500/50 text-white text-xs font-semibold shadow-2xl flex items-center gap-3 animate-bounce';
    toast.innerHTML = `
      <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 live-pulse"></span>
      <span>${message}</span>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 4000);
  }

  calculateMaterialImpact() {
    const laptops = parseInt(document.getElementById('calc-laptops')?.value || 0, 10);
    const phones = parseInt(document.getElementById('calc-phones')?.value || 0, 10);
    const servers = parseInt(document.getElementById('calc-servers')?.value || 0, 10);

    // Standard recovery metrics per unit
    // Laptop: 2.2 kg e-waste, 0.2g Gold, 150g Copper, 0.05g Palladium, 18 kg CO2 saved
    // Phone: 0.18 kg e-waste, 0.03g Gold, 16g Copper, 0.015g Palladium, 2.8 kg CO2 saved
    // Server: 15.0 kg e-waste, 1.8g Gold, 1200g Copper, 0.4g Palladium, 140 kg CO2 saved

    const totalWeight = (laptops * 2.2) + (phones * 0.18) + (servers * 15.0);
    const goldGrams = (laptops * 0.2) + (phones * 0.03) + (servers * 1.8);
    const copperKg = ((laptops * 150) + (phones * 16) + (servers * 1200)) / 1000;
    const co2SavedKg = (laptops * 18) + (phones * 2.8) + (servers * 140);

    const outWeight = document.getElementById('impact-total-weight');
    const outGold = document.getElementById('impact-gold');
    const outCopper = document.getElementById('impact-copper');
    const outCo2 = document.getElementById('impact-co2');

    if (outWeight) outWeight.textContent = `${totalWeight.toFixed(1)} kg`;
    if (outGold) outGold.textContent = `${goldGrams.toFixed(2)} g`;
    if (outCopper) outCopper.textContent = `${copperKg.toFixed(2)} kg`;
    if (outCo2) outCo2.textContent = `${co2SavedKg.toFixed(0)} kg CO₂e`;
  }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  window.app = new DashboardApp();
});

