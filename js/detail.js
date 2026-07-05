
/* ════════════════════════════════
   PDF DATA
════════════════════════════════ */
const PDFS={
  java:'certificates/Programming_In_Java.pdf',
  mongo:'certificates/MongoDB_Certificate.pdf',
  mern:'certificates/MERN_FullStack_Certificate.pdf',
  egc:'certificates/Java_Internship_Certificate.pdf',
  app:'certificates/Mobile_App_Internship_Certificate.pdf',
  exp:'certificates/Experience_Certificate_DiacriTech.pdf'
};

/* ════════════════════════════════
   ALL CARD DATA
════════════════════════════════ */
const CARDS={
  proj_wms:{
    nmark:'▶',series:'PROJECT',typemark:'FEATURED',typeColor:'#E50914',
    bgColor:'linear-gradient(135deg,rgba(90,8,8,.65),rgba(45,4,4,.35))',
    line1:'Brunt Reversal',line2:'WMS',
    company:'Warehouse Management System · Full Stack · 2024',
    meta:[{cls:'nf-meta-match',t:'98% Match'},{cls:'nf-meta-year',t:'2024'},{cls:'nf-meta-dur',t:'Full Stack'},{cls:'nf-meta-hd',t:'FEATURED'}],
    desc:'A real-time warehouse management system with QR code-based product retrieval, automated inventory management, and the custom-built Glitch-Prophecy Engine for anomaly detection and predictive analytics.',
    btns:[{cls:'nf-btn-play',t:'▶  View on GitHub',href:'https://github.com/Prasanthsekar3794'},{cls:'nf-btn-more',t:'ℹ  More Info',action:'scroll'}],
    about:'Brunt Reversal is a full-stack warehouse management system built for operational efficiency. The centrepiece is the custom <strong>Glitch-Prophecy Engine</strong> — an anomaly detection module that predicts inventory discrepancies before they become problems. Built with React.js, Node.js + Java microservices, and MongoDB for analytics.',
    details:[{l:'Director',v:'Prasanth Sekar'},{l:'Tech Stack',v:'React.js · Node.js · Java · MongoDB'},{l:'Year',v:'2024'},{l:'Category',v:'Full Stack Web Application'},{l:'GitHub',v:'<a href="https://github.com/Prasanthsekar3794" target="_blank">Prasanthsekar3794</a>'}],
    kpTitle:'Technical Highlights',
    kps:[
      {i:'📦',t:'<strong>QR Code retrieval</strong> — every product tagged for instant scannable warehouse lookup'},
      {i:'⚡',t:'<strong>Glitch-Prophecy Engine</strong> — custom anomaly detection and predictive analytics'},
      {i:'📊',t:'<strong>Real-time inventory</strong> — live stock levels, auto reorder triggers, storage optimization'},
      {i:'🔗',t:'<strong>Microservices backend</strong> — Java + Node.js services with MongoDB analytics storage'},
      {i:'📱',t:'<strong>React.js UI</strong> — role-based operator and manager dashboards'},
    ],
    tags:['React.js','Node.js','Java','MongoDB','REST API','QR Code','Spring Boot','Express.js','Full Stack'],
    info:[{k:'Type',v:'Full Stack Web App'},{k:'Year',v:'2024'},{k:'Frontend',v:'React.js'},{k:'Backend',v:'Node.js · Java'},{k:'Database',v:'MongoDB'},{k:'GitHub',v:'<a href="https://github.com/Prasanthsekar3794" target="_blank">Prasanthsekar3794</a>'}],
    infoAccent:'#E50914',hasPdf:false,
    similar:['proj_fish','proj_country','proj_uni'],
  },
  proj_fish:{
    nmark:'▶',series:'PROJECT',typemark:'AI / ML',typeColor:'#7b2fff',
    bgColor:'linear-gradient(135deg,rgba(20,8,80,.65),rgba(10,4,40,.35))',
    line1:'Fish Detection',line2:'& Tracking',
    company:'Real-Time Computer Vision · YOLOv11 · Marine Research',
    meta:[{cls:'nf-meta-match',t:'96% Match'},{cls:'nf-meta-year',t:'2024'},{cls:'nf-meta-dur',t:'AI/ML'},{cls:'nf-meta-hd',t:'COMPUTER VISION'}],
    desc:'Intelligent non-intrusive real-time fish detection and multi-object tracking pipeline using YOLOv11 and Norfair — built for marine research, behaviour analysis, and aquaculture automation.',
    btns:[{cls:'nf-btn-play',t:'▶  View on GitHub',href:'https://github.com/Prasanthsekar3794'},{cls:'nf-btn-more',t:'ℹ  More Info',action:'scroll'}],
    about:'This computer vision project enables <strong>non-intrusive underwater observation</strong> of fish using <strong>YOLOv11</strong> for detection and <strong>Norfair</strong> for persistent multi-object tracking. Designed for marine research and aquaculture, the pipeline processes live camera feeds in real time without any physical contact with the marine environment.',
    details:[{l:'Developer',v:'Prasanth Sekar'},{l:'Tech',v:'Python · OpenCV · YOLOv11 · Norfair'},{l:'Year',v:'2024'},{l:'Domain',v:'Computer Vision / Marine Research'},{l:'GitHub',v:'<a href="https://github.com/Prasanthsekar3794" target="_blank">Prasanthsekar3794</a>'}],
    kpTitle:'Technical Highlights',
    kps:[
      {i:'🎯',t:'<strong>YOLOv11</strong> — state-of-the-art object detection for high-speed, accurate fish identification'},
      {i:'📡',t:'<strong>Norfair tracking</strong> — maintains fish identities across video frames in real time'},
      {i:'🐟',t:'<strong>Non-intrusive</strong> — zero physical contact with marine environments required'},
      {i:'⚡',t:'<strong>Real-time processing</strong> — handles live underwater camera feeds at full speed'},
      {i:'🔬',t:'<strong>Research-grade</strong> — suitable for behaviour analysis and population studies'},
    ],
    tags:['Python','OpenCV','YOLOv11','Norfair','Computer Vision','Deep Learning','Object Detection','Marine AI'],
    info:[{k:'Type',v:'Computer Vision'},{k:'Language',v:'Python'},{k:'Detection',v:'YOLOv11'},{k:'Tracking',v:'Norfair'},{k:'Domain',v:'Marine Research'},{k:'GitHub',v:'<a href="https://github.com/Prasanthsekar3794" target="_blank">Prasanthsekar3794</a>'}],
    infoAccent:'#7b2fff',hasPdf:false,
    similar:['proj_wms','proj_country','proj_uni'],
  },
  proj_country:{
    nmark:'▶',series:'PROJECT',typemark:'GITHUB ⭐',typeColor:'#46d369',
    bgColor:'linear-gradient(135deg,rgba(8,40,16,.65),rgba(4,20,8,.35))',
    line1:'Country',line2:'Details App',
    company:'Frontend · REST API · Vanilla JavaScript · Open Source',
    meta:[{cls:'nf-meta-match',t:'94% Match'},{cls:'nf-meta-year',t:'2024'},{cls:'nf-meta-dur',t:'Frontend'},{cls:'nf-meta-hd',t:'OPEN SOURCE'}],
    desc:'Interactive web app that fetches and dynamically renders detailed country information using a live REST API — with search, filtering, flags, and a fully responsive CSS3 layout. No frameworks, pure JS.',
    btns:[{cls:'nf-btn-play',t:'▶  View on GitHub',href:'https://github.com/Prasanthsekar3794/country_detalis'}],
    about:'The Country Details App demonstrates clean <strong>REST API consumption</strong> and dynamic <strong>DOM manipulation</strong> using pure Vanilla JavaScript — no libraries, no frameworks. It fetches live data from a countries REST API and renders searchable cards showing flag, capital, population, currencies, and regional info across a fully responsive CSS3 grid layout.',
    details:[{l:'Developer',v:'Prasanth Sekar'},{l:'Tech',v:'JavaScript · HTML5 · CSS3 · REST API'},{l:'Year',v:'2024'},{l:'Type',v:'Frontend Web Application'},{l:'GitHub',v:'<a href="https://github.com/Prasanthsekar3794/country_detalis" target="_blank">country_detalis ↗</a>'}],
    kpTitle:'Technical Highlights',
    kps:[
      {i:'🌐',t:'<strong>Live REST API</strong> — fetches real country data dynamically on every page load'},
      {i:'🔍',t:'<strong>Search & filter</strong> — instant country lookup with keyboard support'},
      {i:'🏳️',t:'<strong>Rich cards</strong> — flags, capital, population, currencies, languages, and region'},
      {i:'📱',t:'<strong>Fully responsive</strong> — clean CSS3 grid adapts to any screen size'},
      {i:'⚡',t:'<strong>Zero dependencies</strong> — pure HTML5, CSS3 and Vanilla JS only'},
    ],
    tags:['JavaScript','HTML5','CSS3','REST API','DOM Manipulation','Fetch API','Responsive Design'],
    info:[{k:'Type',v:'Frontend Web App'},{k:'Language',v:'JavaScript (Vanilla)'},{k:'Styling',v:'CSS3'},{k:'Data',v:'REST Countries API'},{k:'GitHub',v:'<a href="https://github.com/Prasanthsekar3794/country_detalis" target="_blank">country_detalis</a>'}],
    infoAccent:'#46d369',hasPdf:false,
    similar:['proj_wms','proj_obesity','proj_fish'],
  },
  proj_obesity:{
    nmark:'▶',series:'PROJECT',typemark:'GITHUB ⭐',typeColor:'#ff9800',
    bgColor:'linear-gradient(135deg,rgba(60,28,8,.65),rgba(30,14,4,.35))',
    line1:'Obesity',line2:'Awareness Page',
    company:'Frontend · Health Awareness · CSS3 · Open Source',
    meta:[{cls:'nf-meta-match',t:'91% Match'},{cls:'nf-meta-year',t:'2024'},{cls:'nf-meta-dur',t:'Frontend'},{cls:'nf-meta-hd',t:'OPEN SOURCE'}],
    desc:'A visually rich health awareness website covering obesity — its causes, risks, and prevention — with custom Dancing Script typography, multiple illustration assets, and a detailed multi-section CSS3 layout.',
    btns:[{cls:'nf-btn-play',t:'▶  View on GitHub',href:'https://github.com/Prasanthsekar3794/Obesity'}],
    about:'This health awareness project showcases strong <strong>HTML5 and CSS3</strong> skills through a detailed multi-section layout. The design uses the <strong>Dancing Script</strong> custom font for visual character, integrates multiple illustration and icon assets, and organises comprehensive health content across clearly structured, visually engaging sections — all without any JavaScript framework.',
    details:[{l:'Developer',v:'Prasanth Sekar'},{l:'Tech',v:'HTML5 · CSS3 · Dancing Script'},{l:'Year',v:'2024'},{l:'Topic',v:'Health Awareness'},{l:'GitHub',v:'<a href="https://github.com/Prasanthsekar3794/Obesity" target="_blank">Obesity ↗</a>'}],
    kpTitle:'Technical Highlights',
    kps:[
      {i:'🎨',t:'<strong>Dancing Script font</strong> — custom typography for a distinctive visual identity'},
      {i:'📐',t:'<strong>Multi-section layout</strong> — health risks, diet, lifestyle and prevention sections'},
      {i:'🖼️',t:'<strong>Rich assets</strong> — icons and illustrations integrated throughout the page'},
      {i:'📱',t:'<strong>Fully responsive</strong> — readable and clean on mobile and desktop'},
      {i:'🌐',t:'<strong>Pure HTML/CSS</strong> — no JavaScript, fast-loading and accessible'},
    ],
    tags:['HTML5','CSS3','Dancing Script','Custom Fonts','Responsive Design','Health','UI Design'],
    info:[{k:'Type',v:'Frontend Website'},{k:'Language',v:'HTML5 · CSS3'},{k:'Font',v:'Dancing Script'},{k:'Topic',v:'Health Awareness'},{k:'GitHub',v:'<a href="https://github.com/Prasanthsekar3794/Obesity" target="_blank">Obesity</a>'}],
    infoAccent:'#ff9800',hasPdf:false,
    similar:['proj_country','proj_wms','proj_uni'],
  },
  proj_uni:{
    nmark:'▶',series:'PROJECT',typemark:'DESKTOP APP',typeColor:'#4da6ff',
    bgColor:'linear-gradient(135deg,rgba(8,16,60,.65),rgba(4,8,30,.35))',
    line1:'University',line2:'Management System',
    company:'Desktop Application · Java + MySQL + JDBC',
    meta:[{cls:'nf-meta-match',t:'93% Match'},{cls:'nf-meta-dur',t:'Desktop App'},{cls:'nf-meta-hd',t:'JAVA · MYSQL'}],
    desc:'Feature-rich desktop application for university administration — student enrollment, attendance tracking, and academic performance — backed by MySQL via JDBC with automated grade calculation.',
    btns:[{cls:'nf-btn-play',t:'▶  View on GitHub',href:'https://github.com/Prasanthsekar3794'}],
    about:'The University Management System is a <strong>Java desktop application</strong> covering core university administrative needs. It connects to a <strong>MySQL</strong> relational database via <strong>JDBC</strong> for persistent storage. The system handles student enrollment with full CRUD, multi-department attendance tracking, automated grade calculation with configurable rules, and academic performance monitoring across semesters.',
    details:[{l:'Developer',v:'Prasanth Sekar'},{l:'Language',v:'Java'},{l:'Database',v:'MySQL via JDBC'},{l:'Type',v:'Desktop Application'},{l:'GitHub',v:'<a href="https://github.com/Prasanthsekar3794" target="_blank">Prasanthsekar3794</a>'}],
    kpTitle:'Technical Highlights',
    kps:[
      {i:'🎓',t:'<strong>Enrollment management</strong> — full CRUD operations for student records and profiles'},
      {i:'📋',t:'<strong>Attendance tracking</strong> — multi-course and multi-department attendance management'},
      {i:'📊',t:'<strong>Grade calculation</strong> — automated performance monitoring with configurable rules'},
      {i:'🗄️',t:'<strong>MySQL + JDBC</strong> — persistent relational database with full data integrity'},
      {i:'☕',t:'<strong>Clean Java OOP</strong> — layered object-oriented architecture throughout'},
    ],
    tags:['Java','MySQL','JDBC','OOP','Desktop App','Database Design','SQL','Data Structures'],
    info:[{k:'Type',v:'Desktop Application'},{k:'Language',v:'Java'},{k:'Database',v:'MySQL'},{k:'Connector',v:'JDBC'},{k:'Pattern',v:'OOP · Layered Architecture'}],
    infoAccent:'#4da6ff',hasPdf:false,
    similar:['proj_wms','proj_fish','proj_country'],
  },
  exp_diacri:{
    nmark:'W',series:'EXPERIENCE',typemark:'FULL TIME · 5+ YRS',typeColor:'#4da6ff',
    bgColor:'linear-gradient(135deg,rgba(8,28,50,.65),rgba(4,14,25,.35))',
    line1:'Senior E-Pub',line2:'Developer',
    company:'DiacriTech Technologies Pvt. Ltd · Jul 2017 – Sep 2022',
    meta:[{cls:'nf-meta-match',t:'Full-Time'},{cls:'nf-meta-year',t:'2017–2022'},{cls:'nf-meta-dur',t:'5 Years 2 Months'},{cls:'nf-meta-hd',t:'E-PUBLISHING'}],
    desc:'Senior Epub Developer at DiacriTech Technologies — responsible for XML-based digital publishing pipelines, typesetting, quality assurance, and workflow optimisation across large-scale academic publishing projects.',
    btns:[{cls:'nf-btn-cert',t:'📄 View Experience Certificate',action:'pdf'},{cls:'nf-btn-dl',t:'⬇ Download',action:'dl'}],
    about:'Worked at <strong>DiacriTech Technologies Pvt. Ltd</strong> for over 5 years as a Senior Epub Developer in the Typesetting Department. Responsible for converting structured content into standards-compliant digital publications, maintaining XML pipelines, and rigorous quality assurance. Signed off by <strong>D. Simon Paul Rajesh</strong>, Deputy General Manager — the document includes both experience letter and relieving letter.',
    details:[{l:'Company',v:'DiacriTech Technologies Pvt. Ltd'},{l:'CIN',v:'U72200TN2003PTC052104'},{l:'Role',v:'Senior Epub Developer'},{l:'Department',v:'Typesetting'},{l:'Period',v:'03 Jul 2017 – 12 Sep 2022'},{l:'Signed By',v:'D. Simon Paul Rajesh, DGM'}],
    kpTitle:'Role Highlights',
    kps:[
      {i:'📝',t:'<strong>XML validation</strong> — structured, standards-compliant content across all publications'},
      {i:'📚',t:'<strong>Digital publishing</strong> — Epub formatting and layout for multi-platform delivery'},
      {i:'✅',t:'<strong>Quality assurance</strong> — thorough QA review before every release'},
      {i:'⚡',t:'<strong>Workflow optimisation</strong> — streamlined pipelines to reduce errors and turnaround'},
      {i:'🤝',t:'<strong>Cross-functional</strong> — collaborated with editors, developers and QA teams'},
    ],
    tags:['E-Publishing','XML','Epub','Typesetting','QA','Content Formatting','Workflow Optimisation','Digital Publishing'],
    info:[{k:'Company',v:'DiacriTech Technologies'},{k:'Role',v:'Senior Epub Developer'},{k:'Dept',v:'Typesetting'},{k:'Period',v:'Jul 2017 – Sep 2022'},{k:'Tenure',v:'5 Years 2 Months'},{k:'Location',v:'Arumbakkam, Chennai'}],
    infoAccent:'#4da6ff',
    hasPdf:true,pdfKey:'exp',
    pdfTitle:'Experience Certificate — DiacriTech Technologies',
    pdfSub:'Epub Developer · Jul 2017 – Sep 2022 · 2-page document',
    certIcon:'🏢',certBg:'linear-gradient(135deg,#0a1a2a,#1a3050)',
    certName:'DiacriTech Technologies — Experience & Relieving Letter',
    similar:['exp_kbp','exp_empower','exp_lumina'],
  },
  exp_kbp:{
    nmark:'W',series:'EXPERIENCE',typemark:'INTERNSHIP',typeColor:'#b464ff',
    bgColor:'linear-gradient(135deg,rgba(36,12,70,.65),rgba(18,6,35,.35))',
    line1:'Mobile App',line2:'Developer Intern',
    company:'KBP Smarther Solutions Pvt. Ltd · Feb 2023 · Chennai',
    meta:[{cls:'nf-meta-match',t:'Internship'},{cls:'nf-meta-year',t:'Feb 2023'},{cls:'nf-meta-dur',t:'15 Days'},{cls:'nf-meta-hd',t:'ANDROID'}],
    desc:'Fifteen-day mobile app development internship at KBP Smarther Solutions, building native Android applications with Java and Android Studio. Rated punctual, hardworking and inquisitive by the organisation.',
    btns:[{cls:'nf-btn-cert',t:'📄 View Internship Certificate',action:'pdf'},{cls:'nf-btn-dl',t:'⬇ Download',action:'dl'}],
    about:'A hands-on <strong>15-day mobile app development internship</strong> at KBP Smarther Solutions Private Limited, Perumbakkam, Chennai. Worked on native Android application development using <strong>Java</strong> and <strong>Android Studio</strong>, covering the full development lifecycle from design through deployment. Officially rated <strong>punctual, hardworking, and inquisitive</strong> by the organisation.',
    details:[{l:'Company',v:'KBP Smarther Solutions Pvt. Ltd'},{l:'Role',v:'Mobile App Developer Intern'},{l:'Period',v:'01 Feb 2023 – 15 Feb 2023'},{l:'Duration',v:'15 Days'},{l:'Location',v:'Perumbakkam, Chennai – 600100'},{l:'Website',v:'<a href="https://www.smarther.co" target="_blank">www.smarther.co</a>'}],
    kpTitle:'Role Highlights',
    kps:[
      {i:'📱',t:'<strong>Android development</strong> — native app dev with Java and Android Studio'},
      {i:'🔐',t:'<strong>Authentication</strong> — secure user auth with backend API connectivity'},
      {i:'⚡',t:'<strong>Performance</strong> — UI responsiveness and app optimisation across devices'},
      {i:'🤝',t:'<strong>Team collaboration</strong> — worked alongside senior developers'},
      {i:'⭐',t:'Rated: <strong>Punctual · Hardworking · Inquisitive</strong>'},
    ],
    tags:['Java','Android Studio','Mobile UI','Authentication','Backend APIs','Android SDK','Mobile Dev'],
    info:[{k:'Company',v:'KBP Smarther Solutions'},{k:'Role',v:'Mobile App Dev Intern'},{k:'Duration',v:'15 Days (Feb 2023)'},{k:'Location',v:'Chennai'},{k:'Rating',v:'Punctual · Hardworking'},{k:'Website',v:'<a href="https://www.smarther.co" target="_blank">smarther.co</a>'}],
    infoAccent:'#b464ff',
    hasPdf:true,pdfKey:'app',
    pdfTitle:'Mobile App Internship Certificate — KBP Smarther',
    pdfSub:'Mobile App Developer · Feb 2023 · Chennai',
    certIcon:'📱',certBg:'linear-gradient(135deg,#1a0a2a,#2a1040)',
    certName:'KBP Smarther Solutions — Internship Certificate',
    similar:['exp_diacri','exp_empower','exp_lumina'],
  },
  exp_empower:{
    nmark:'W',series:'EXPERIENCE',typemark:'INTERNSHIP',typeColor:'#46d369',
    bgColor:'linear-gradient(135deg,rgba(8,30,16,.65),rgba(4,15,8,.35))',
    line1:'Software Developer',line2:'Intern',
    company:'Empower Software Hub · Jul – Aug 2024',
    meta:[{cls:'nf-meta-match',t:'Internship'},{cls:'nf-meta-year',t:'2024'},{cls:'nf-meta-dur',t:'1 Month'},{cls:'nf-meta-hd',t:'WEB DEV'}],
    desc:'Software developer internship building full-stack web applications using Java, JavaScript, HTML, CSS, SQL and REST APIs within an agile team — performance rated Commendable.',
    btns:[{cls:'nf-btn-cert',t:'📄 View Internship Certificate',action:'pdf'},{cls:'nf-btn-dl',t:'⬇ Download',action:'dl'}],
    about:'Worked as a <strong>Software Developer Intern</strong> at Empower Software Hub, contributing across both frontend and backend to web application development. Delivered features in an agile environment using <strong>Java, JavaScript, HTML, CSS, SQL</strong> and REST APIs. Performance was evaluated by mentors and rated <strong>Commendable</strong>.',
    details:[{l:'Company',v:'Empower Software Hub'},{l:'Role',v:'Software Developer Intern'},{l:'Period',v:'Jul 2024 – Aug 2024'},{l:'Duration',v:'1 Month'},{l:'Rating',v:'Commendable'},{l:'Certificate',v:'Java Internship · Empower Software Hub'}],
    kpTitle:'Role Highlights',
    kps:[
      {i:'💻',t:'<strong>Full-stack</strong> — Java + JavaScript + HTML/CSS + SQL across the entire stack'},
      {i:'🔗',t:'<strong>REST APIs</strong> — connected frontend components with backend services'},
      {i:'📱',t:'<strong>Responsive UIs</strong> — cross-browser compatible web applications'},
      {i:'📝',t:'<strong>Clean code</strong> — well-documented, maintainable codebase'},
      {i:'⭐',t:'Performance: <strong>Commendable</strong>'},
    ],
    tags:['Java','JavaScript','HTML5','CSS3','SQL','REST APIs','Agile','Web Development'],
    info:[{k:'Company',v:'Empower Software Hub'},{k:'Role',v:'Software Dev Intern'},{k:'Duration',v:'Jul–Aug 2024'},{k:'Rating',v:'Commendable'},{k:'Tech',v:'Java · JS · HTML · CSS · SQL'}],
    infoAccent:'#46d369',
    hasPdf:true,pdfKey:'egc',
    pdfTitle:'Java Internship Certificate — Empower Software Hub',
    pdfSub:'Jul–Aug 2024 · Performance: Commendable',
    certIcon:'💼',certBg:'linear-gradient(135deg,#0a1a10,#1a3020)',
    certName:'Empower Software Hub — Java Internship Certificate',
    similar:['exp_diacri','exp_kbp','exp_lumina'],
  },
  exp_lumina:{
    nmark:'F',series:'EXPERIENCE',typemark:'FREELANCE · 2025',typeColor:'#b464ff',
    bgColor:'linear-gradient(135deg,rgba(36,12,70,.55),rgba(18,6,35,.35))',
    line1:'Freelance PDF',line2:'Developer',
    company:'Lumina Datamatics · John Wiley & Sons · Apr – Jul 2025',
    meta:[{cls:'nf-meta-match',t:'Freelance'},{cls:'nf-meta-year',t:'2025'},{cls:'nf-meta-dur',t:'Apr–Jul 2025'},{cls:'nf-meta-hd',t:'E-PUBLISHING'}],
    desc:'Freelance PDF developer for Lumina Datamatics on the prestigious John Wiley & Sons academic publishing project — creating high-quality structured PDFs to professional publishing standards, fully independently.',
    btns:[{cls:'nf-btn-play',t:'▶  LinkedIn Profile',href:'https://linkedin.com/in/prasanth-sekar-826890283'}],
    about:'Worked as a <strong>Freelance PDF Developer</strong> for <strong>Lumina Datamatics</strong>, contributing to the <strong>John Wiley & Sons</strong> academic publishing project — one of the world\'s most recognised academic publishers. Independently created and formatted structured PDF documents to rigorous professional publishing standards, delivering all work within agreed deadlines.',
    details:[{l:'Client',v:'Lumina Datamatics'},{l:'End Client',v:'John Wiley & Sons'},{l:'Role',v:'Freelance PDF Developer'},{l:'Period',v:'April – July 2025'},{l:'Type',v:'Freelance / Contract'},{l:'LinkedIn',v:'<a href="https://linkedin.com/in/prasanth-sekar-826890283" target="_blank">prasanth-sekar ↗</a>'}],
    kpTitle:'Role Highlights',
    kps:[
      {i:'📄',t:'<strong>PDF creation</strong> — high-quality structured PDFs for John Wiley academic publications'},
      {i:'📐',t:'<strong>Professional formatting</strong> — typesetting, layout design and content structure'},
      {i:'✅',t:'<strong>Accuracy</strong> — content accuracy and compliance with strict publishing guidelines'},
      {i:'⏰',t:'<strong>Self-managed</strong> — fully independent delivery within agreed deadlines'},
      {i:'🌍',t:'<strong>Global client</strong> — John Wiley & Sons, world-leading academic publisher'},
    ],
    tags:['PDF Creation','E-Publishing','Typesetting','Content Formatting','John Wiley','Lumina Datamatics','Freelance'],
    info:[{k:'Company',v:'Lumina Datamatics'},{k:'Client',v:'John Wiley & Sons'},{k:'Role',v:'Freelance PDF Developer'},{k:'Period',v:'Apr – Jul 2025'},{k:'Type',v:'Freelance / Contract'}],
    infoAccent:'#b464ff',hasPdf:false,
    similar:['exp_diacri','exp_kbp','exp_empower'],
  },
  cert_java:{
    nmark:'N',series:'CERTIFICATION',typemark:'NPTEL · IIT KGP',typeColor:'#c0392b',
    bgColor:'linear-gradient(135deg,rgba(80,8,8,.65),rgba(40,4,4,.35))',
    line1:'Programming',line2:'in Java',
    company:'NPTEL Online Certification · IIT Kharagpur · Jan–Apr 2024',
    meta:[{cls:'nf-meta-match',t:'Score: 52%'},{cls:'nf-meta-year',t:'2024'},{cls:'nf-meta-dur',t:'12 Weeks'},{cls:'nf-meta-hd',t:'CERTIFIED'}],
    desc:'NPTEL Online Certification from IIT Kharagpur funded by MoE, Govt. of India. A 12-week course in Programming in Java. Roll No: NPTEL24CS43S753400260. 14,693 total candidates certified.',
    btns:[{cls:'nf-btn-play',t:'📄 View Certificate',action:'pdf'},{cls:'nf-btn-dl',t:'⬇ Download',action:'dl'}],
    about:'A rigorous <strong>12-week NPTEL course</strong> from <strong>Indian Institute of Technology Kharagpur</strong> — one of India\'s most prestigious engineering institutions — funded by the Ministry of Education, Govt. of India under the Swayam programme. Coordinated by <strong>Prof. Haimanti Banerji</strong>. Comprehensive Java coverage from OOP fundamentals through multithreading and JDBC.',
    details:[{l:'Institution',v:'IIT Kharagpur'},{l:'Platform',v:'NPTEL · Swayam'},{l:'Duration',v:'Jan–Apr 2024 · 12 weeks'},{l:'Score',v:'52% (Assignments 15.25/25 · Exam 36.38/75)'},{l:'Roll No',v:'NPTEL24CS43S753400260'},{l:'Coordinator',v:'Prof. Haimanti Banerji'}],
    kpTitle:'Certificate Details',
    kps:[
      {i:'🏛️',t:'Issued by <strong>Indian Institute of Technology Kharagpur (IIT KGP)</strong>'},
      {i:'📊',t:'Score: <strong>52%</strong> — Assignments: 15.25/25 · Proctored Exam: 36.38/75'},
      {i:'🔢',t:'Roll No: <strong>NPTEL24CS43S753400260</strong>'},
      {i:'👩‍🏫',t:'Coordinated by <strong>Prof. Haimanti Banerji</strong>, IIT Kharagpur'},
      {i:'🏅',t:'<strong>14,693</strong> candidates certified · Recommended credits: 3 or 4'},
    ],
    tags:['Java','OOP','Multithreading','JDBC','Exception Handling','Data Structures','IIT Kharagpur','NPTEL'],
    info:[{k:'Institution',v:'IIT Kharagpur'},{k:'Platform',v:'NPTEL · Swayam'},{k:'Duration',v:'12 weeks (2024)'},{k:'Score',v:'52%'},{k:'Roll No',v:'NPTEL24CS43S753400260'},{k:'Credits',v:'3 or 4 recommended'}],
    infoAccent:'#c0392b',
    hasPdf:true,pdfKey:'java',
    pdfTitle:'Programming in Java — NPTEL Certificate',
    pdfSub:'IIT Kharagpur · Jan–Apr 2024 · Score: 52%',
    certIcon:'N',certBg:'linear-gradient(135deg,#2d0808,#1a0505)',
    certName:'NPTEL Java Certification — IIT Kharagpur',
    similar:['cert_mongo','cert_mern','cert_egc'],
  },
  cert_mongo:{
    nmark:'M',series:'CERTIFICATION',typemark:'MONGODB INC',typeColor:'#00ed64',
    bgColor:'linear-gradient(135deg,rgba(0,40,24,.65),rgba(0,20,12,.35))',
    line1:'MongoDB',line2:'Node.js Developer',
    company:'MongoDB, Inc · SmartBridge · 27 Sep 2024',
    meta:[{cls:'nf-meta-match',t:'Verified'},{cls:'nf-meta-year',t:'Sep 2024'},{cls:'nf-meta-hd',t:'PROOF OF COMPLETION'}],
    desc:'Official MongoDB, Inc certification for completing the Node.js Developer Learning Path via SmartBridge. Credential ID: MDB94q7vo6yj8. Signed by Sahir Azam, CPO of MongoDB, Inc.',
    btns:[{cls:'nf-btn-play',t:'📄 View Certificate',action:'pdf'},{cls:'nf-btn-dl',t:'⬇ Download',action:'dl'}],
    about:'An official <strong>MongoDB, Inc</strong> certification for the Node.js Developer Path completed via <strong>SmartBridge</strong>. Signed by <strong>Sahir Azam, CPO of MongoDB, Inc</strong>. This credential validates end-to-end proficiency in building scalable backend applications with MongoDB and Node.js — covering CRUD, aggregation pipelines, indexing, and transactions.',
    details:[{l:'Issuer',v:'MongoDB, Inc'},{l:'Signed By',v:'Sahir Azam, CPO'},{l:'Partner',v:'SmartBridge'},{l:'Date',v:'27 September 2024'},{l:'Credential ID',v:'MDB94q7vo6yj8'},{l:'Topics',v:'CRUD · Aggregation · Indexes · Transactions'}],
    kpTitle:'Certificate Details',
    kps:[
      {i:'🍃',t:'Issued by <strong>MongoDB, Inc</strong> — signed by <strong>Sahir Azam (CPO)</strong>'},
      {i:'🔑',t:'Credential ID: <strong>MDB94q7vo6yj8</strong>'},
      {i:'📅',t:'Completed: <strong>27 September 2024</strong>'},
      {i:'🎓',t:'Delivered via <strong>SmartBridge</strong> learning partnership'},
      {i:'✅',t:'Covers CRUD, Aggregation Pipelines, Indexes, Transactions, Node.js integration'},
    ],
    tags:['MongoDB','Node.js','NoSQL','CRUD','Aggregation','Indexes','Transactions','Backend','JavaScript'],
    info:[{k:'Issuer',v:'MongoDB, Inc'},{k:'CPO Sign',v:'Sahir Azam'},{k:'Partner',v:'SmartBridge'},{k:'Date',v:'27 Sep 2024'},{k:'Cred ID',v:'MDB94q7vo6yj8'}],
    infoAccent:'#00ed64',
    hasPdf:true,pdfKey:'mongo',
    pdfTitle:'MongoDB Node.js Developer Path Certificate',
    pdfSub:'MongoDB, Inc · SmartBridge · 27 Sep 2024 · ID: MDB94q7vo6yj8',
    certIcon:'🍃',certBg:'linear-gradient(135deg,#002a18,#003d25)',
    certName:'MongoDB Node.js Developer Path — MongoDB, Inc',
    similar:['cert_java','cert_mern','cert_egc'],
  },
  cert_mern:{
    nmark:'E',series:'CERTIFICATION',typemark:'EXEMPLARY ⭐⭐⭐⭐⭐',typeColor:'#d4af37',
    bgColor:'linear-gradient(135deg,rgba(50,32,8,.65),rgba(25,16,4,.35))',
    line1:'MERN Full',line2:'Stack Course',
    company:'Empower Guiding Centre · Oct 2024 – Feb 2025',
    meta:[{cls:'nf-meta-match',t:'Exemplary ⭐⭐⭐⭐⭐'},{cls:'nf-meta-year',t:'2024–2025'},{cls:'nf-meta-dur',t:'4 Months'},{cls:'nf-meta-hd',t:'FULL STACK'}],
    desc:'Certificate of Completion for a four-month MERN Full Stack Course including a capstone project at Empower Guiding Centre. Performance rated Exemplary — the highest grade awarded.',
    btns:[{cls:'nf-btn-play',t:'📄 View Certificate',action:'pdf'},{cls:'nf-btn-dl',t:'⬇ Download',action:'dl'}],
    about:'A comprehensive <strong>four-month MERN Full Stack Course</strong> at Empower Guiding Centre covering MongoDB, Express.js, React.js, and Node.js — including a full <strong>capstone project</strong>. Performance was evaluated by mentors <strong>Rajaishankar</strong> and <strong>Arunsibi</strong> and rated <strong>Exemplary</strong> — the highest possible grade.',
    details:[{l:'Institution',v:'Empower Guiding Centre'},{l:'Course',v:'MERN Full Stack + Capstone'},{l:'Period',v:'14 Oct 2024 – 14 Feb 2025'},{l:'Duration',v:'4 Months'},{l:'Performance',v:'Exemplary ⭐⭐⭐⭐⭐'},{l:'Signed By',v:'Rajaishankar · Arunsibi'}],
    kpTitle:'Certificate Details',
    kps:[
      {i:'⭐',t:'Performance rated: <strong>Exemplary</strong> — the highest grade awarded'},
      {i:'📅',t:'Duration: <strong>14th Oct 2024 to 14th Feb 2025</strong> (4 months)'},
      {i:'🏗️',t:'Includes full <strong>capstone project</strong> with mentor assistance'},
      {i:'✍️',t:'Signed by <strong>Rajaishankar</strong> (Founder) & <strong>Arunsibi</strong> (Mentor)'},
      {i:'📚',t:'Covers: MongoDB · Express.js · React.js · Node.js · REST APIs · Full Stack'},
    ],
    tags:['MongoDB','Express.js','React.js','Node.js','Full Stack','REST APIs','MERN','JavaScript','Capstone'],
    info:[{k:'Institution',v:'Empower Guiding Centre'},{k:'Course',v:'MERN Full Stack'},{k:'Duration',v:'Oct 2024 – Feb 2025'},{k:'Performance',v:'Exemplary ⭐⭐⭐⭐⭐'},{k:'Mentors',v:'Rajaishankar · Arunsibi'}],
    infoAccent:'#d4af37',
    hasPdf:true,pdfKey:'mern',
    pdfTitle:'MERN Full Stack Course — Empower Guiding Centre',
    pdfSub:'Oct 2024 – Feb 2025 · Performance: Exemplary',
    certIcon:'⭐',certBg:'linear-gradient(135deg,#1a1020,#2c1a40)',
    certName:'MERN Full Stack Certificate — Empower Guiding Centre',
    similar:['cert_java','cert_mongo','cert_egc'],
  },
  cert_egc:{
    nmark:'E',series:'CERTIFICATION',typemark:'COMMENDABLE',typeColor:'#4da6ff',
    bgColor:'linear-gradient(135deg,rgba(8,24,50,.65),rgba(4,12,25,.35))',
    line1:'Java Internship',line2:'Certificate',
    company:'Empower Software Hub · Jul – Aug 2024',
    meta:[{cls:'nf-meta-match',t:'Commendable'},{cls:'nf-meta-year',t:'2024'},{cls:'nf-meta-dur',t:'1 Month'},{cls:'nf-meta-hd',t:'JAVA'}],
    desc:'Certificate of Completion for a one-month Java internship at Empower Software Hub including a project with mentor guidance. Performance rated Commendable.',
    btns:[{cls:'nf-btn-play',t:'📄 View Certificate',action:'pdf'},{cls:'nf-btn-dl',t:'⬇ Download',action:'dl'}],
    about:'Certificate of completion for a <strong>Java internship</strong> at Empower Software Hub from <strong>14th July to 14th August 2024</strong>, including a project developed with mentor guidance. Performance was evaluated and rated <strong>Commendable</strong> by founder Rajaishankar and mentor Dhivvapriya R.',
    details:[{l:'Company',v:'Empower Software Hub'},{l:'Duration',v:'14 Jul – 14 Aug 2024'},{l:'Type',v:'Java Internship + Project'},{l:'Rating',v:'Commendable'},{l:'Signed By',v:'Rajaishankar · Dhivvapriya R'}],
    kpTitle:'Certificate Details',
    kps:[
      {i:'⭐',t:'Performance: <strong>Commendable</strong>'},
      {i:'📅',t:'Duration: <strong>14th July – 14th August 2024</strong>'},
      {i:'🏗️',t:'Includes internship <strong>project with mentor guidance</strong>'},
      {i:'✍️',t:'Signed by <strong>Rajaishankar</strong> (Founder) & <strong>Dhivvapriya R</strong> (Mentor)'},
    ],
    tags:['Java','OOP','Project Development','Internship','Empower Software Hub'],
    info:[{k:'Company',v:'Empower Software Hub'},{k:'Duration',v:'Jul–Aug 2024'},{k:'Rating',v:'Commendable'},{k:'Mentors',v:'Rajaishankar · Dhivvapriya R'}],
    infoAccent:'#4da6ff',
    hasPdf:true,pdfKey:'egc',
    pdfTitle:'Java Internship Certificate — Empower Software Hub',
    pdfSub:'Jul–Aug 2024 · Performance: Commendable',
    certIcon:'💼',certBg:'linear-gradient(135deg,#0a1a3a,#1a3060)',
    certName:'Empower Software Hub — Java Internship Certificate',
    similar:['cert_java','cert_mongo','cert_mern'],
  },
};

/* ════════════════════════════════
   SIMILAR CARD PREVIEWS
════════════════════════════════ */
const PREVIEWS={
  proj_wms:    {e:'📦',bg:'linear-gradient(135deg,#2d0808,#1a0404)',t:'Brunt Reversal WMS',s:'Full Stack · 2024',tags:['React','Node','Java']},
  proj_fish:   {e:'🎯',bg:'linear-gradient(135deg,#08082d,#0a0a3d)',t:'Fish Detection & Tracking',s:'AI/ML · YOLOv11',tags:['Python','OpenCV','AI']},
  proj_country:{e:'🗺️',bg:'linear-gradient(135deg,#0a2210,#082a12)',t:'Country Details App',s:'Frontend · REST API',tags:['JS','HTML5','CSS3']},
  proj_obesity:{e:'💊',bg:'linear-gradient(135deg,#1a0e08,#2a180e)',t:'Obesity Awareness Page',s:'Frontend · Health',tags:['HTML5','CSS3']},
  proj_uni:    {e:'🏛️',bg:'linear-gradient(135deg,#08082a,#101030)',t:'University Mgmt System',s:'Java · MySQL · Desktop',tags:['Java','MySQL']},
  exp_diacri:  {e:'🏢',bg:'linear-gradient(135deg,#08182a,#103050)',t:'DiacriTech Technologies',s:'Full Time · 2017–2022',tags:['E-Publishing','XML']},
  exp_kbp:     {e:'📱',bg:'linear-gradient(135deg,#1a082a,#2a1040)',t:'KBP Smarther Solutions',s:'Internship · Feb 2023',tags:['Android','Java']},
  exp_empower: {e:'💻',bg:'linear-gradient(135deg,#081808,#102a10)',t:'Empower Software Hub',s:'Internship · 2024',tags:['Java','JS','REST']},
  exp_lumina:  {e:'📄',bg:'linear-gradient(135deg,#1a0828,#2a1040)',t:'Lumina Datamatics',s:'Freelance · 2025',tags:['PDF','E-Pub']},
  cert_java:   {e:'📜',bg:'linear-gradient(135deg,#2d0808,#1a0404)',t:'Programming in Java',s:'NPTEL · IIT KGP',tags:['Java','OOP']},
  cert_mongo:  {e:'🍃',bg:'linear-gradient(135deg,#002a18,#003d25)',t:'MongoDB Node.js Path',s:'MongoDB, Inc',tags:['MongoDB','Node.js']},
  cert_mern:   {e:'🏅',bg:'linear-gradient(135deg,#1a1020,#2c1a40)',t:'MERN Full Stack',s:'Empower Guiding Centre',tags:['MERN','Full Stack']},
  cert_egc:    {e:'💼',bg:'linear-gradient(135deg,#0a1a3a,#1a3060)',t:'Java Internship Cert',s:'Empower Software Hub',tags:['Java','OOP']},
};

/* ════════════════════════════════
   STATE
════════════════════════════════ */
let _cur=null;

/* ════════════════════════════════
   BOOT
════════════════════════════════ */
window.addEventListener('DOMContentLoaded',()=>{
  const id=new URLSearchParams(location.search).get('id')||'proj_wms';
  render(id);
});

/* ════════════════════════════════
   RENDER
════════════════════════════════ */
function render(id){
  const d=CARDS[id]; if(!d)return;
  _cur=d;
  document.title=d.line1+' '+d.line2+' — Prasanth Sekar';
  document.documentElement.style.setProperty('--accent',d.infoAccent||'#E50914');

  /* hero */
  document.getElementById('hero-color').style.background=d.bgColor;
  document.getElementById('h-nmark').textContent=d.nmark;
  document.getElementById('h-series').textContent=d.series;
  const tm=document.getElementById('h-typemark');
  tm.textContent=d.typemark;
  tm.style.background='rgba(0,0,0,.4)';
  tm.style.color=d.typeColor;
  tm.style.border='1px solid '+d.typeColor+'55';

  document.getElementById('h-line1').textContent=d.line1;
  document.getElementById('h-line2').textContent=d.line2;
  document.getElementById('h-company').textContent=d.company;
  document.getElementById('h-desc').textContent=d.desc;

  /* meta */
  const me=document.getElementById('h-meta');
  me.innerHTML=d.meta.map(m=>`<span class="${m.cls}">${m.t}</span>`).join('');

  /* buttons */
  const be=document.getElementById('h-btns');
  be.innerHTML='';
  d.btns.forEach(b=>{
    let el;
    if(b.href){
      el=document.createElement('a');
      el.href=b.href; el.target='_blank'; el.style.textDecoration='none';
    } else {
      el=document.createElement('button');
      if(b.action==='pdf') el.onclick=openPdf;
      else if(b.action==='dl') el.onclick=dlPdf;
      else if(b.action==='scroll') el.onclick=()=>document.getElementById('nf-about').scrollIntoView({behavior:'smooth'});
    }
    el.className='nf-btn '+b.cls; el.innerHTML=b.t;
    be.appendChild(el);
  });

  /* about */
  document.getElementById('about-p').innerHTML=d.about;

  /* details row */
  const dr=document.getElementById('details-row');
  dr.innerHTML=d.details.map(x=>`<div class="nf-dr-item"><span class="nf-dr-label">${x.l}:</span><span class="nf-dr-val">${x.v}</span></div>`).join('');

  /* key points */
  document.getElementById('kp-title').textContent=d.kpTitle||'Key Highlights';
  document.getElementById('kp-list').innerHTML=d.kps.map(k=>
    `<div class="nf-kp-item"><div class="nf-kp-icon">${k.i}</div><div class="nf-kp-text">${k.t}</div></div>`
  ).join('');

  /* tags */
  document.getElementById('tags-row').innerHTML=d.tags.map(t=>`<span class="nf-tag">${t}</span>`).join('');

  /* similar shelf */
  document.getElementById('shelf').innerHTML=(d.similar||[]).map(sid=>{
    const p=PREVIEWS[sid]; if(!p)return'';
    return `<div class="nf-sc" onclick="nav('${sid}')">
      <div class="nf-sc-thumb" style="background:${p.bg}">
        <div class="nf-sc-thumb-bg">${p.e}</div>
        <div class="nf-sc-icon">${p.e}</div>
        <div class="nf-sc-hover">
          <div class="nf-sc-hover-row">
            <div class="nf-sc-btn play">▶</div>
            <div class="nf-sc-btn">+</div>
          </div>
          <div class="nf-sc-hover-title">${p.t}</div>
          <div class="nf-sc-hover-tags">${p.tags.map(t=>`<span class="nf-sc-hover-tag">${t}</span>`).join('')}</div>
        </div>
      </div>
      <div class="nf-sc-body">
        <div class="nf-sc-title">${p.t}</div>
        <div class="nf-sc-sub">${p.s}</div>
      </div>
    </div>`;
  }).join('');

  /* sidebar info */
  document.getElementById('info-top').style.background=d.infoAccent||'#E50914';
  document.getElementById('info-rows').innerHTML=d.info.map(r=>
    `<div class="nf-info-row"><div class="nf-info-key">${r.k}</div><div class="nf-info-val">${r.v}</div></div>`
  ).join('');

  /* cert card */
  const cc=document.getElementById('cert-card');
  if(d.hasPdf){
    cc.style.display='';
    document.getElementById('cert-thumb').style.background=d.certBg;
    document.getElementById('cert-thumb-bg').textContent=d.certIcon;
    document.getElementById('cert-icon').textContent=d.certIcon;
    document.getElementById('cert-name').textContent=d.certName;
  } else {
    cc.style.display='none';
  }

  /* update url */
  history.replaceState(null,'','detail.html?id='+id);

  /* re-run scroll anims */
  window.scrollTo({top:0,behavior:'smooth'});
  setTimeout(initAnims,200);
}

/* ════════════════════════════════
   NAVIGATION WITH RED WIPE
════════════════════════════════ */
function nav(id){
  wipe(()=>render(id));
}
function goBack(){
  wipe(()=>{ window.location.href='index.html?home=1'; });
}
function wipe(cb){
  const w=document.getElementById('wipe');
  w.style.display='block';
  w.style.transformOrigin='left';
  w.style.transition='transform .38s cubic-bezier(.77,0,.18,1)';
  w.style.transform='scaleX(0)';
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    w.style.transform='scaleX(1)';
    setTimeout(()=>{
      cb();
      w.style.transformOrigin='right';
      w.style.transform='scaleX(0)';
      setTimeout(()=>{ w.style.display='none'; },420);
    },400);
  }));
}

/* ════════════════════════════════
   PDF
════════════════════════════════ */
function openPdf(){
  if(!_cur||!_cur.hasPdf)return;
  document.getElementById('pv-title').textContent=_cur.pdfTitle;
  document.getElementById('pv-sub').textContent=_cur.pdfSub;
  document.getElementById('pv-frame').src=PDFS[_cur.pdfKey];
  document.getElementById('pdfV').classList.add('open');
  document.body.style.overflow='hidden';
}
function closePdf(){
  document.getElementById('pdfV').classList.remove('open');
  document.getElementById('pv-frame').src='';
  document.body.style.overflow='';
}
function dlPdf(){
  if(!_cur||!_cur.hasPdf)return;
  const a=document.createElement('a');
  a.href=PDFS[_cur.pdfKey];
  a.download=_cur.certName.replace(/[^a-z0-9]/gi,'_')+'.pdf';
  a.target='_blank';
  a.click();
  toast('⬇ Downloading PDF…');
}

document.addEventListener('keydown',e=>{ if(e.key==='Escape') closePdf(); });

/* ════════════════════════════════
   NAV SCROLL
════════════════════════════════ */
window.addEventListener('scroll',()=>{
  document.getElementById('topnav').classList.toggle('solid',window.scrollY>60);
});

/* ════════════════════════════════
   SCROLL ANIMATIONS
════════════════════════════════ */
function initAnims(){
  const io=new IntersectionObserver(entries=>{
    entries.forEach((e,i)=>{
      if(e.isIntersecting) setTimeout(()=>{ e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; },i*55);
    });
  },{threshold:.07});
  document.querySelectorAll('.nf-kp-item,.nf-sc,.nf-info-row,.nf-tag').forEach(el=>{
    el.style.opacity='0'; el.style.transform='translateY(14px)';
    el.style.transition='opacity .5s ease,transform .5s ease';
    io.observe(el);
  });
}

/* ════════════════════════════════
   TOAST
════════════════════════════════ */
function toast(m){
  const t=document.getElementById('toast');
  t.textContent=m; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}
