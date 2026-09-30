/* =========================================================================
   SITE CONTENT: this is the only file you need to edit.
   -------------------------------------------------------------------------
   • Change any text between quotes "like this".
   • To add an item (job, project, skill…), copy an existing { ... } block,
     paste it after a comma, and edit it. To remove one, delete its block.
   • Leave a field as "" (empty) to hide it.
   • Save, then refresh the page (or push to GitHub) to see changes.
   ========================================================================= */

window.SITE = {

  /* ---------- Basics ---------- */
  name: "Dharanee Patel",
  headline: "Software Engineer · AI/ML · Optimization",
  location: "College Station, TX",
  intro:
    "MS Computer Science student at Texas A&M with 7+ years of industry experience building optimization engines, high-volume data pipelines, and applied machine-learning systems.",

  // Profile photo. Put your own photo at assets/img/profile.jpg and change this to "assets/img/profile.jpg".
  photo: "https://avatars.githubusercontent.com/u/30954207?v=4",

  /* ---------- Links & contact ---------- */
  links: {
    github:   "https://github.com/dharaneepatel15",
    linkedin: "https://www.linkedin.com/in/dharanee-patel",
    resume:   "assets/Dharanee_Patel_Resume.pdf",   // replace the PDF file to update your résumé
    emails: [
      { label: "Personal", address: "dharanee1505@gmail.com" },
      { label: "TAMU",     address: "dharanee05@tamu.edu" }
    ]
  },

  /* ---------- About ---------- */
  about: [
    "I'm a software engineer who likes turning messy real-world problems into robust, well-engineered systems. Most recently, at IBM, I owned the CPLEX-based optimization engine behind enterprise asset investment planning, where I raised average solution feasibility from roughly 60% to 90%.",
    "Before that I spent over three years at Angel One building financial time-series pipelines, backtesting systems, and live-execution tools for quantitative investing. I started my career at Fxis.ai, delivering machine-learning and computer-vision solutions for document digitization.",
    "Today I'm pursuing my Master's in Computer Science at Texas A&M University, focusing on Artificial Intelligence and Information Retrieval, with a growing interest in LLMs and retrieval-augmented generation."
  ],

  // Headline numbers shown under the About text. Delete this list (or leave it empty []) to hide them.
  stats: [
    { value: "7+",   label: "years in industry" },
    { value: "60→90%", label: "optimization feasibility at IBM" },
    { value: "~40%", label: "faster data pipelines at Angel One" },
    { value: "85%+", label: "OCR character accuracy" }
  ],

  /* ---------- Experience (newest first) ---------- */
  experience: [
    {
      role: "Senior Software Developer",
      company: "IBM",
      location: "Gandhinagar, India",
      period: "Jun 2025 – Aug 2026",
      points: [
        "Owned development and enhancement of the IBM CPLEX-based optimization engine for enterprise asset investment planning, working with MILP and constraint-based optimization.",
        "Improved average solution feasibility from ~60% to ~90% by diagnosing constraint conflicts, production edge cases, and scenario-planning inconsistencies.",
        "Drove design and implementation of scalable optimization capabilities through continuous planning and strategy constraint management, translating business requirements into production features."
      ],
      tags: ["CPLEX", "MILP", "Constraint Optimization"]
    },
    {
      role: "Software Developer",
      company: "Angel One",
      location: "Mumbai, India",
      period: "Dec 2021 – May 2025",
      points: [
        "Architected and streamlined high-volume financial time-series data pipelines, reducing execution time by ~40% and enabling high-performance quantitative analytics.",
        "Collaborated with financial analysts to translate complex investment requirements into portfolio management systems and algorithmic trading strategies.",
        "Built end-to-end systems for strategy backtesting, portfolio evaluation, and live execution of investments.",
        "Designed custom dashboards and interactive data tools that helped stakeholders evaluate strategy performance and make faster, data-driven decisions."
      ],
      tags: ["Python", "Time-Series", "Backtesting", "Dashboards"]
    },
    {
      role: "Software Developer",
      company: "Fxis.ai",
      location: "Ahmedabad, India",
      period: "Jul 2019 – Nov 2021",
      points: [
        "Led development of distributed backend services and client-facing features in a microservices architecture using Python and REST APIs.",
        "Worked directly with clients to deliver machine-learning and computer-vision solutions for document digitization, text processing, and image analysis.",
        "Prototyped and benchmarked an H+Tree indexing structure, comparing its performance against traditional B+Tree approaches."
      ],
      tags: ["Python", "Microservices", "REST", "Computer Vision"]
    }
  ],

  /* ---------- Projects ----------
     repo / demo: leave "" if there's no link.                         */
  projects: [
    {
      title: "LLM-Powered Financial Research Assistant",
      description:
        "A retrieval-augmented generation (RAG) pipeline that answers financial research questions from earnings reports, 10-Ks, and transcripts, with cited sources. Covers document chunking, embeddings, vector search, and grounded answer generation behind a Streamlit UI.",
      tags: ["RAG", "LLMs", "ChromaDB", "Embeddings", "Streamlit"],
      repo: "https://github.com/dharaneepatel15/financial-research-assistant",
      demo: ""
    },
    {
      title: "Maize Prediction & Breeding Analytics",
      subtitle: "AggieTech Hackathon · Texas A&M",
      description:
        "Worked in a team to analyze genomic, phenotype, and environmental data to predict outcomes for maize breeding programs.",
      tags: ["Machine Learning", "Genomics", "Data Analysis"],
      repo: "",
      demo: ""
    },
    {
      title: "OCR for Historical Manuscript Digitization",
      subtitle: "Industry team project",
      description:
        "Evaluated CNN-LSTM, attention-based, and ensemble deep-learning approaches for handwritten text recognition, using data augmentation to reach over 85% character recognition accuracy.",
      tags: ["Deep Learning", "OCR", "CNN-LSTM", "PyTorch"],
      repo: "",
      demo: ""
    }
  ],

  // Also list your other public (non-fork) GitHub repos automatically under "More on GitHub".
  showGithubRepos: true,
  githubUser: "dharaneepatel15",
  maxGithubRepos: 6,

  /* ---------- Skills ---------- */
  skills: [
    { group: "AI & Machine Learning", items: ["Scikit-learn", "PyTorch", "TensorFlow", "Keras", "Computer Vision", "OCR"] },
    { group: "LLMs & Gen AI",         items: ["RAG", "Prompt Engineering", "Hugging Face Transformers", "LangChain", "FAISS", "OpenAI API"] },
    { group: "Languages & Tools",     items: ["Python", "SQL", "Flask", "Django REST Framework", "Streamlit", "AWS", "Docker", "Linux"] },
    { group: "Data Science",          items: ["NumPy", "Pandas", "OpenCV", "Matplotlib", "Time-Series Analysis", "Statistical Modeling"] },
    { group: "Optimization",          items: ["IBM CPLEX", "MILP", "Constraint Programming"] }
  ],

  /* ---------- Education ---------- */
  education: [
    {
      degree: "Master of Computer Science",
      school: "Texas A&M University",
      location: "College Station, TX",
      period: "Expected May 2028",
      details: "Coursework: Artificial Intelligence, Information Storage & Retrieval"
    },
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "L. D. College of Engineering",
      location: "Ahmedabad, India",
      period: "Jun 2019",
      details: "GPA: 8.93 / 10"
    }
  ],

  /* ---------- Contact section ---------- */
  contactText:
    "I'm always happy to connect about software engineering, machine learning, optimization, or interesting problems in general. Feel free to reach out."
};
