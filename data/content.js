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
  /* Your story, told in chapters. Each chapter has a small label and a paragraph.
     Add, remove, or reorder chapters freely. A plain "text in quotes" also works (no label). */
  about: [
    {
      label: "Where it started",
      text: "I've always been drawn to the gap between a messy real-world problem and a clean system that actually solves it. That curiosity took shape while I studied Computer Engineering at L. D. College of Engineering in Ahmedabad, and it has been the thread through everything I've built since."
    },
    {
      label: "Learning to build · Fxis.ai",
      text: "My first role put me right in that gap. I built backend services in a microservices architecture and worked directly with clients to understand what they really needed, then delivered machine-learning and computer-vision solutions that turned scanned documents and images into usable data. It taught me that good engineering starts with listening, and it gave me my first taste of what ML can do in the real world."
    },
    {
      label: "Raising the stakes · Angel One",
      text: "At Angel One, the problems got bigger and the stakes got real. For more than three years I worked alongside financial analysts on quantitative investing. I re-architected high-volume time-series pipelines to run about 40% faster, and I built the systems behind strategy backtesting, portfolio evaluation, and live execution. I learned to write software where both speed and correctness matter, and to turn analysis into tools people rely on to make decisions."
    },
    {
      label: "From data to decisions · IBM",
      text: "At IBM I moved from analyzing data to making decisions with it. I owned the CPLEX-based optimization engine behind enterprise asset investment planning. That meant MILP and constraint models, where a plan either holds together or it doesn't. By tracking down constraint conflicts and production edge cases, I raised average solution feasibility from about 60% to 90%, and I learned to reason about systems rigorously, not just empirically."
    },
    {
      label: "The next step · Texas A&M",
      text: "Across seven years, one pattern kept repeating: the most valuable systems pair solid engineering with models that learn from data. That's what brought me to Texas A&M for a Master's in Computer Science, focused on Artificial Intelligence and Information Retrieval. I'm already building in that direction, for example with a retrieval-augmented research assistant that answers financial questions from earnings reports and cites its sources."
    },
    {
      label: "Where I'm headed",
      text: "I want to build AI systems people can trust in high-stakes settings, combining LLMs and retrieval, machine learning, and the rigor of optimization. I'm most excited by applied AI and ML engineering work, where ideas from research become reliable products that real people depend on."
    }
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
     repo / demo: leave "" if there's no link.
     status:     optional badge, e.g. "In progress". Remove it once the project is done.
     highlights: optional bullet points shown under the description.
                 Only add numbers you have actually measured.            */
  projects: [
    {
      title: "ToolScout: Tool Retrieval & Recommendation for AI Agents",
      subtitle: "Texas A&M · CSCE 670 · Fall 2026",
      status: "In progress",
      description:
        "A search engine that hands an LLM agent the top-k tools it needs from a catalog of 2,000+ MCP and API tools, instead of stuffing every tool into the prompt.",
      highlights: [
        "Hybrid retrieval: BM25 + dense embedding search over LLM-enriched tool descriptions, reranked with a cross-encoder.",
        "Tool co-usage graph mined from agent runs, powering PageRank scores, item-based collaborative filtering, and SASRec next-tool prediction.",
        "LambdaMART learning-to-rank model trained on labels from successful and failed agent runs, with ablations per signal.",
        "Served as an MCP server (find_tools) behind open-weight Qwen3 agents on vLLM (TAMU HPC), evaluated on LiveMCPBench."
      ],
      tags: ["Python", "PyTorch", "LightGBM", "Qdrant", "vLLM", "MCP"],
      repo: "",
      demo: ""
    },
    {
      title: "AI-Generated Receipt Fraud Detector",
      subtitle: "Course project · Fall 2026",
      status: "In progress",
      description:
        "A two-branch detector that flags AI-generated and AI-edited receipts by fusing image forensics with OCR-based consistency checks.",
      highlights: [
        "Fine-tuned vision transformer (ConvNeXt / ViT) with frequency features, fused with OCR arithmetic and tax-consistency checks.",
        "Robustness test set built by printing, photographing, and compressing receipts, plus recapture augmentation for real phone uploads.",
        "Benchmarked against TruFor, DocTamper, and a GPT-4o judge, including generalization to unseen image generators.",
        "Fairness checks across US, Indian GST, and handwritten receipt styles, with a plain-language reason for every flag."
      ],
      tags: ["Python", "PyTorch", "ConvNeXt/ViT", "PaddleOCR", "scikit-learn"],
      repo: "",
      demo: ""
    },
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
