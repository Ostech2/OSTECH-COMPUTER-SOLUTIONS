import attendance from "@/assets/project-attendance.jpg";
import attendanceShot1 from "@/assets/attendance-shot-1.jpg";
import attendanceShot2 from "@/assets/attendance-shot-2.jpg";
import crop from "@/assets/project-crop.jpg";
import cropShot1 from "@/assets/crop-shot-1.jpg";
import cropShot2 from "@/assets/crop-shot-2.jpg";
import finance from "@/assets/project-finance.jpg";
import financeShot1 from "@/assets/finance-shot-1.jpg";
import financeShot2 from "@/assets/finance-shot-2.jpg";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tech: readonly string[];
  tags: readonly string[];
  github: string;
  demo: string;
  year: string;
  role: string;
  duration: string;
  client: string;
  overview: string;
  problem: string;
  solution: string;
  features: readonly { title: string; text: string }[];
  outcomes: readonly string[];
  gallery: readonly { src: string; caption: string }[];
};

export const projects: readonly Project[] = [
  {
    slug: "digital-attendance-management-system",
    title: "Digital Attendance Management System",
    tagline: "QR + facial recognition attendance, in real time.",
    description:
      "A secure attendance platform combining QR code scanning with facial recognition for real-time, fraud-resistant tracking across institutions.",
    image: attendance,
    tech: ["React Native", "Node.js", "MySQL", "OpenCV"],
    tags: ["Mobile", "AI"],
    github: "https://github.com",
    demo: "#",
    year: "2024",
    role: "Lead Developer",
    duration: "3 months",
    client: "Academic Institution",
    overview:
      "A cross-platform attendance system that replaces paper sign-in sheets with a fast, fraud-resistant flow combining QR codes and on-device facial recognition.",
    problem:
      "Manual attendance was slow, easy to fake (proxy sign-ins), and produced no reliable analytics for administrators trying to track engagement and patterns over time.",
    solution:
      "I designed a mobile-first system where each session generates a rotating QR code. Students scan, then verify their identity via facial recognition. The Node.js backend validates session windows and writes signed attendance records to MySQL, with an admin dashboard for real-time tracking.",
    features: [
      { title: "Rotating QR codes", text: "Session-bound, time-limited codes prevent screenshot reuse." },
      { title: "Facial verification", text: "OpenCV pipeline matches against registered faces on-device." },
      { title: "Secure auth", text: "JWT-based login with role separation for students, lecturers and admins." },
      { title: "Real-time dashboard", text: "Live check-in feed and per-class attendance analytics." },
      { title: "Offline buffering", text: "Queues check-ins locally and syncs when connectivity returns." },
      { title: "Exportable reports", text: "CSV and PDF reports for attendance audits and grading." },
    ],
    outcomes: [
      "Reduced check-in time per session from ~8 minutes to under 60 seconds.",
      "Eliminated proxy attendance through facial verification.",
      "Provided lecturers with real-time visibility and exportable records.",
    ],
    gallery: [
      { src: attendanceShot1, caption: "Class roster with live check-in status." },
      { src: attendanceShot2, caption: "QR + facial recognition capture flow." },
    ],
  },
  {
    slug: "ai-crop-disease-detection-system",
    title: "AI Crop Disease Detection System",
    tagline: "Diagnose crop diseases from a single leaf photo.",
    description:
      "An AI-powered mobile tool that identifies crop diseases from leaf images and recommends targeted treatments — empowering farmers with instant diagnostics.",
    image: crop,
    tech: ["Python", "TensorFlow", "Flutter", "OpenCV"],
    tags: ["AI", "Mobile"],
    github: "https://github.com",
    demo: "#",
    year: "2024",
    role: "Full-Stack & ML Developer",
    duration: "4 months",
    client: "Personal & Research",
    overview:
      "A mobile app that lets farmers photograph a crop leaf and receive an instant disease classification along with practical, locally-relevant treatment guidance.",
    problem:
      "Smallholder farmers often misidentify crop diseases or wait too long for expert advice, leading to preventable yield losses and overuse of generic pesticides.",
    solution:
      "I trained a convolutional neural network on a curated leaf image dataset, exported it to a mobile-optimized TFLite model, and built a Flutter app that runs inference on-device. Results are paired with a treatment knowledge base curated for the target region.",
    features: [
      { title: "On-device inference", text: "Runs offline — critical for rural connectivity gaps." },
      { title: "Confidence scoring", text: "Shows top-3 predictions with confidence to avoid blind trust." },
      { title: "Treatment recommendations", text: "Actionable steps tailored to each detected disease." },
      { title: "Image preprocessing", text: "OpenCV pipeline normalizes lighting and crops to leaf region." },
      { title: "History log", text: "Tracks past scans so farmers can monitor field progression." },
      { title: "Multi-crop support", text: "Extensible model registry for adding new crops over time." },
    ],
    outcomes: [
      "Achieved >92% top-1 accuracy on the validation set across supported crops.",
      "Sub-second inference on mid-range Android devices.",
      "Validated by trial users who confirmed faster, more confident treatment decisions.",
    ],
    gallery: [
      { src: cropShot1, caption: "Diagnosis result screen with treatment guidance." },
      { src: cropShot2, caption: "In-field leaf capture with focus guides." },
    ],
  },
  {
    slug: "personal-finance-management-system",
    title: "Personal Finance Management System",
    tagline: "Track every shilling, see the bigger picture.",
    description:
      "A clean web platform for tracking income, expenses, and budgets with auto-generated visual reports and insights for smarter financial decisions.",
    image: finance,
    tech: ["React", "TypeScript", "Node.js", "MySQL"],
    tags: ["Web"],
    github: "https://github.com",
    demo: "#",
    year: "2023",
    role: "Full-Stack Developer",
    duration: "2 months",
    client: "Personal Project",
    overview:
      "A focused personal finance web app that gives users a clear, visual picture of their money — what's coming in, where it's going, and how it tracks against budgets.",
    problem:
      "Most finance apps are either overwhelming spreadsheets or oversimplified trackers. Users wanted something visual, fast, and private, without the bloat or subscription paywalls.",
    solution:
      "I built a single-purpose web platform: lightweight transaction entry, category-based budgeting, and auto-generated charts that surface monthly trends. The backend uses a normalized MySQL schema with secure JWT auth, and the React UI emphasizes clarity over feature count.",
    features: [
      { title: "Transaction logging", text: "Quick income and expense entry with categories and notes." },
      { title: "Budget envelopes", text: "Per-category monthly budgets with visual progress bars." },
      { title: "Auto reports", text: "Monthly summaries with charts and category breakdowns." },
      { title: "Trend insights", text: "Spot rising categories and unusual months at a glance." },
      { title: "Secure auth", text: "JWT-based login with hashed passwords and per-user data isolation." },
      { title: "Responsive UI", text: "Works equally well on desktop and mobile browsers." },
    ],
    outcomes: [
      "Reduced monthly budgeting time from ~45 minutes to under 10.",
      "Made overspending categories obvious through visual cues.",
      "Shipped as a clean, minimal alternative to bloated commercial apps.",
    ],
    gallery: [
      { src: financeShot1, caption: "Dashboard with budget breakdown and trends." },
      { src: financeShot2, caption: "Transaction log with category filtering." },
    ],
  },
  {
    slug: "hostel-inventory-management-system",
    title: "Hostel Inventory Management System",
    tagline: "Track and manage hostel supplies and assets with precision.",
    description:
      "A specialized inventory system for hostels to track equipment, monitor supply levels, and automate procurement alerts for better resource management.",
    image: finance,
    tech: ["React", "Node.js", "MySQL", "TypeScript"],
    tags: ["Web"],
    github: "https://github.com/Ostech2",
    demo: "#",
    year: "2024",
    role: "Lead Developer",
    duration: "3 months",
    client: "Hostel Administration",
    overview:
      "A digital transformation of hostel asset management, moving from manual ledgers to a centralized, real-time web platform for tracking every item.",
    problem:
      "Manual stock tracking was inefficient, leading to frequent supply shortages and untracked asset movement across multiple hostel blocks.",
    solution:
      "I built a centralized dashboard with automated stock level monitoring, low-stock notifications, and a digital audit trail that tracks item issuance and returns.",
    features: [
      { title: "Real-time tracking", text: "Instant visibility of current stock levels across all categories." },
      { title: "Low-stock alerts", text: "Automated notifications when essential items drop below threshold." },
      { title: "Asset audit logs", text: "Chronological history of item movements and assignments." },
      { title: "Categorized inventory", text: "Group items by type (furniture, electronics, supplies) for easy browsing." },
      { title: "Report generation", text: "One-click CSV/PDF reports for inventory audits and procurement planning." },
      { title: "Multi-user access", text: "Role-based permissions for administrators and store managers." },
    ],
    outcomes: [
      "Eliminated stockouts of essential supplies through automated alerts.",
      "Reduced inventory audit time by over 70%.",
      "Provided administrators with 100% transparency on asset locations and status.",
    ],
    gallery: [
      { src: financeShot1, caption: "Inventory dashboard with stock level overview." },
      { src: financeShot2, caption: "Stock adjustment and audit log view." },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const competencies = [
  {
    category: "Software Development",
    items: ["React Native", "Flutter", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "IT Support & Networking",
    items: ["System Diagnostics", "Network Setup", "CCTV Installation", "User Support"],
  },
  {
    category: "Backend & Databases",
    items: ["Node.js", "API Development", "MySQL", "Database Design"],
  },
  {
    category: "Tools & Professional",
    items: ["Git/GitHub", "VS Code", "Problem Solving", "Collaboration"],
  },
] as const;
