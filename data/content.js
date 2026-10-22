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
  headline: "Software engineer, machine learning and optimization",
  location: "College Station, TX",
  intro:
    "I'm a Master's student in Computer Science at Texas A&M. Before this I worked as a software developer on optimization, financial data systems and applied machine learning.",

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
      label: "Fxis.ai",
      text: "After my Computer Engineering degree at L. D. College of Engineering, I started out building backend services and working with clients on machine-learning and computer-vision projects, mostly turning scanned documents into structured data. Working with clients early on taught me to pin down the actual problem before writing code."
    },
    {
      label: "Angel One",
      text: "I then moved into fintech, working with analysts on quantitative investing. I rebuilt our financial time-series pipelines to run faster and worked on the tools we used for backtesting, portfolio evaluation and live execution."
    },
    {
      label: "IBM",
      text: "At IBM I worked on a CPLEX-based optimization engine for asset investment planning. A lot of the work was figuring out why a model had no feasible solution and fixing the cause, which taught me to reason carefully about how a system behaves rather than just trying things."
    },
    {
      label: "Texas A&M",
      text: "I'm now doing a Master's in Computer Science with a focus on AI and information retrieval. This semester I'm working on tool retrieval for LLM agents and on detecting AI-generated receipts."
    },
    {
      label: "Next",
      text: "I'm looking for applied machine learning and software engineering roles where I can keep working on retrieval, ML and optimization problems."
    }
  ],

  // Headline numbers shown under the About text. Leave this list empty [] to hide them.
  stats: [],

  /* ---------- Experience (newest first) ----------
     summary: optional short paragraph about the role, shown above the bullets. */
  experience: [
    {
      role: "Senior Software Developer",
      company: "IBM",
      location: "Gandhinagar, India",
      period: "Jun 2025 – Aug 2026",
      summary:
        "I worked on IBM's enterprise asset investment planning product, which helps organizations plan where to spend on their physical assets over time while staying within budgets and other limits. My part was the optimization engine underneath it, built on IBM CPLEX.",
      points: [
        "Worked on the engine's MILP and constraint models, which turn a customer's assets, budgets and planning rules into an investment plan.",
        "Spent much of my time on plans that came back infeasible. I traced them to conflicting constraints, edge cases in production data, or inconsistencies between planning scenarios, and fixed the underlying cause, so the engine produced usable plans far more often.",
        "Designed and built continuous-planning and strategy-constraint features, taking them from requirements through to implementation.",
        "Led technical discovery sessions with customers to understand what they needed before we designed features."
      ],
      tags: ["IBM CPLEX", "MILP", "Constraint Optimization"]
    },
    {
      role: "Software Developer",
      company: "Angel One",
      location: "Mumbai, India",
      period: "Dec 2021 – May 2025",
      summary:
        "Angel One is a retail brokerage in India. I worked alongside financial analysts on quantitative investing, building the software that took their strategies from research to live trading.",
      points: [
        "Reworked the time-series pipelines that prepared market data for analysis, so they ran considerably faster on large volumes of data.",
        "Built the systems we used to backtest strategies, evaluate portfolios and execute investments live.",
        "Worked with analysts to turn investment requirements into portfolio management tools and algorithmic trading strategies.",
        "Built dashboards and data tools so the team could see how strategies were performing and compare them."
      ],
      tags: ["Python", "Time-Series", "Backtesting", "Data Pipelines", "Dashboards"]
    },
    {
      role: "Software Developer",
      company: "Fxis.ai",
      location: "Ahmedabad, India",
      period: "Jul 2019 – Nov 2021",
      summary:
        "My first job out of university. I worked on client projects that mixed backend engineering with applied machine learning, and spent a lot of time with clients working out what they needed.",
      points: [
        "Built backend services and client-facing features as Python microservices with REST APIs.",
        "Worked on document digitization, text processing and image analysis projects, turning client requirements into machine-learning and computer-vision solutions.",
        "Led a small website development team and worked on the React and HTML/CSS front end myself.",
        "Prototyped an H+Tree index and ran experiments comparing it with a standard B+Tree."
      ],
      tags: ["Python", "Microservices", "REST", "Computer Vision", "React"]
    }
  ],

  /* ---------- Projects ----------
     description: one paragraph in quotes, or several as a list [ "...", "..." ].
     repo / demo: leave "" if there's no link.
     status:     optional label, e.g. "In progress". Remove it once the project is done.
     highlights: optional bullet points shown under the description.        */
  projects: [
    {
      title: "ToolScout: tool retrieval for AI agents",
      subtitle: "Team project · Texas A&M, CSCE 670 (Information Storage & Retrieval) · Fall 2026",
      status: "In progress",
      description: [
        "LLM agents can now reach a very large number of tools through MCP servers and APIs. Putting every tool description into the prompt is expensive, and it makes it harder for the model to pick the right one.",
        "ToolScout is a search engine for this. Given the task an agent is working on, it returns the handful of tools it is most likely to need."
      ],
      highlights: [
        "Retrieval combines BM25 and dense embedding search over tool descriptions that an LLM has rewritten to be clearer, followed by a cross-encoder reranker.",
        "A graph of which tools get used together in agent runs feeds PageRank scores, collaborative filtering and next-tool prediction, so it can suggest the tool an agent will need next.",
        "A LambdaMART learning-to-rank model, trained on successful and failed agent runs, combines these signals into one ranking.",
        "The plan is to serve it as an MCP server (find_tools) for open-weight Qwen3 agents running on vLLM on TAMU's HPC cluster.",
        "We'll compare it with embedding-only retrieval, and measure agent task success and prompt size on LiveMCPBench."
      ],
      tags: ["Python", "PyTorch", "LightGBM", "Qdrant", "vLLM", "MCP"],
      repo: "",
      demo: ""
    },
    {
      title: "Detecting AI-generated receipts",
      subtitle: "Course project · Fall 2026",
      status: "In progress",
      description: [
        "Image models can now produce convincing fake receipts, and editing a real one is easy. This project tries to catch both.",
        "The detector has two parts. One looks for traces that generation or editing leaves in the image. The other reads the receipt with OCR and checks whether the items, totals and tax actually add up. A receipt can look perfect and still have numbers that don't work, or have correct numbers in an image that was clearly made by a model."
      ],
      highlights: [
        "Image side: a fine-tuned ConvNeXt / ViT model with frequency-domain features.",
        "Text side: PaddleOCR, followed by arithmetic and tax-consistency checks.",
        "A test set of receipts that were printed, photographed and compressed, plus recapture augmentation in training, so it holds up on real phone photos and not just clean files.",
        "Comparisons with TruFor, DocTamper and a GPT-4o judge, including on image generators the model never saw in training.",
        "Checks across US, Indian GST and handwritten receipt styles, and a plain-language reason for every receipt it flags."
      ],
      tags: ["Python", "PyTorch", "ConvNeXt/ViT", "PaddleOCR", "scikit-learn"],
      repo: "",
      demo: ""
    },
    {
      title: "Financial research assistant",
      description: [
        "A tool for asking questions about company filings. You upload 10-Ks, 10-Qs, earnings call transcripts or investor decks, ask a question in plain English, and get an answer along with the passages it came from."
      ],
      highlights: [
        "Text is extracted from PDFs, split into overlapping chunks, and embedded with Voyage AI's finance-tuned model.",
        "Chunks are stored in a local ChromaDB vector store, and the most relevant ones are passed to Claude to write the answer.",
        "Each answer names the document and passage it drew from, so it can be checked against the source.",
        "Streamlit front end, a command-line tool for loading a folder of documents, and unit tests for the chunking step."
      ],
      tags: ["RAG", "Claude API", "Voyage AI", "ChromaDB", "Streamlit"],
      repo: "https://github.com/dharaneepatel15/financial-research-assistant",
      demo: ""
    },
    {
      title: "Maize yield prediction",
      subtitle: "AggieTech Hackathon · Texas A&M",
      description:
        "Team project. We worked with genomic, phenotype and environmental data to predict outcomes for maize breeding programs.",
      tags: ["Machine Learning", "Genomics", "Data Analysis"],
      repo: "",
      demo: ""
    },
    {
      title: "OCR for historical manuscripts",
      subtitle: "Industry team project",
      description:
        "A project on reading handwritten historical manuscripts. We compared CNN-LSTM, attention-based and ensemble models for handwritten text recognition, and used data augmentation to make the models more accurate on varied handwriting.",
      tags: ["Deep Learning", "OCR", "CNN-LSTM", "PyTorch"],
      repo: "",
      demo: ""
    }
  ],


  /* ---------- Skills ---------- */
  skills: [
    { group: "Machine learning",  items: ["PyTorch", "Scikit-learn", "TensorFlow", "Keras", "Computer Vision", "OCR", "NLP"] },
    { group: "LLMs & retrieval",  items: ["RAG", "Embeddings", "Vector Search", "LangChain", "LangGraph", "MCP", "Hugging Face Transformers", "FAISS"] },
    { group: "Languages & tools", items: ["Python", "SQL", "Flask", "Django REST Framework", "React", "Streamlit", "Git", "Docker", "AWS", "Linux"] },
    { group: "Data",              items: ["NumPy", "Pandas", "OpenCV", "MySQL", "MongoDB", "Time-Series Analysis", "Statistical Modeling"] },
    { group: "Optimization",      items: ["IBM CPLEX", "MILP", "Constraint Programming"] }
  ],

  /* ---------- Education ---------- */
  education: [
    {
      degree: "Master of Computer Science",
      school: "Texas A&M University",
      location: "College Station, TX",
      period: "Expected May 2028",
      details: "Coursework: Artificial Intelligence, Information Storage & Retrieval, Analysis of Algorithms"
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
    "Email is the best way to reach me. I'm happy to talk about software engineering, machine learning or optimization work."
};
