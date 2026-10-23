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
  headline: "Software Engineer | Applied AI, Agents & Computer Vision",
  location: "College Station, TX",
  intro:
    "I'm a Master of Computer Science student at Texas A&M with software engineering experience at IBM, Angel One, and Fxis.ai. I build on a background in backend services, optimization, and financial data systems to explore reliable AI agents and computer vision applications. My goal is to become an AI Solution Architect who can connect business needs with practical decisions across models, data, infrastructure, and deployment.",

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
      text: "I began in backend engineering and applied machine learning, building Python services and working with clients on document digitization, text processing, and image analysis. That experience taught me to clarify the problem and user requirements before choosing a technical approach."
    },
    {
      label: "Angel One",
      text: "In fintech, I worked with financial analysts to turn investment requirements into data pipelines, backtesting systems, portfolio evaluation tools, and live execution software. This strengthened my understanding of data-intensive applications and the importance of performance, maintainability, and clear analytical outputs."
    },
    {
      label: "IBM",
      text: "At IBM, I developed CPLEX-based optimization capabilities for enterprise asset investment planning. Investigating infeasible solutions required tracing interactions between constraints, production data, and planning scenarios. I also led customer technical discovery sessions, connecting business requirements with engineering decisions."
    },
    {
      label: "Texas A&M",
      text: "I'm now deepening my AI knowledge through graduate study and hands-on projects involving tool retrieval for LLM agents and detection of AI-generated or edited receipts. These projects let me explore how model behavior, retrieval, evaluation, and software design affect the reliability of a complete system."
    },
    {
      label: "Direction",
      text: "I'm building toward AI solution architecture, with particular interests in reliable agents, computer vision, and vision-language systems. I want to develop AI solutions that address clear user needs, can be evaluated meaningfully, and fit the data and infrastructure around them."
    }
  ],

  // Headline numbers shown under the About text. Leave this list empty [] to hide them.
  stats: [],

  /* ---------- Areas of interest ----------
     Topics I'm exploring. These are interests, not completed work.      */
  interestsNote: "Topics I'm exploring through coursework, reading, and projects. These describe what I want to learn more about, not completed work.",
  interests: [
    {
      title: "Reliable agents and retrieval",
      text: "How agents find relevant information and tools, use context effectively, and recover when retrieval or execution fails."
    },
    {
      title: "Computer vision and vision-language systems",
      text: "How visual and textual information can work together in document understanding, content verification, and explainable applications."
    },
    {
      title: "Visual-content authenticity",
      text: "Methods for distinguishing AI-generated or manipulated content from authentic content, including robustness to compression, printing, and recapture."
    },
    {
      title: "AI systems and solution architecture",
      text: "Connecting models, APIs, data pipelines, evaluation, and deployment into maintainable systems, with attention to latency, cost, and scalability."
    }
  ],

  /* ---------- Experience (newest first) ----------
     summary: optional short paragraph about the role, shown above the bullets. */
  experience: [
    {
      role: "Senior Software Developer",
      company: "IBM",
      location: "Gandhinagar, India",
      period: "Jun 2025 – Aug 2026",
      summary:
        "I developed optimization capabilities for IBM's enterprise asset investment planning, working on a CPLEX-based engine built on mixed-integer linear programming (MILP) and constraint models.",
      points: [
        "Improved average solution feasibility from approximately 60% to 90% by diagnosing constraint conflicts, production edge cases, and inconsistencies between planning scenarios.",
        "Owned the design and implementation of continuous-planning and strategy-constraint features for enterprise asset investment planning.",
        "Led customer technical discovery sessions to clarify requirements and connect them with engineering decisions."
      ],
      tags: ["IBM CPLEX", "MILP", "Constraint Optimization"]
    },
    {
      role: "Software Developer",
      company: "Angel One",
      location: "Mumbai, India",
      period: "Dec 2021 – May 2025",
      summary:
        "I worked with financial analysts on quantitative investing, building the software that supported strategy research, evaluation, and live execution.",
      points: [
        "Reduced financial data-pipeline execution time by approximately 40% by streamlining time-series processing for quantitative investment analytics.",
        "Built end-to-end systems for strategy backtesting, portfolio evaluation, and live investment execution.",
        "Translated investment requirements into portfolio management systems and algorithmic trading strategies in collaboration with financial analysts.",
        "Built interactive dashboards and data tools that helped stakeholders evaluate strategy performance."
      ],
      tags: ["Python", "Time-Series", "Data Pipelines", "Backtesting", "Dashboards"]
    },
    {
      role: "Software Developer",
      company: "Fxis.ai",
      location: "Ahmedabad, India",
      period: "Jul 2019 – Nov 2021",
      summary:
        "I worked on client projects that combined backend engineering with applied machine learning and computer vision.",
      points: [
        "Built distributed backend services and client-facing features, leading Python microservice and REST API development.",
        "Delivered document digitization, text processing, and image analysis solutions by translating client requirements into machine-learning and computer-vision implementations.",
        "Led a four-member website development team and contributed React and HTML/CSS implementation.",
        "Prototyped an H+Tree index structure and ran comparative performance experiments against B+Tree indexing."
      ],
      tags: ["Python", "Microservices", "REST APIs", "Computer Vision", "React"]
    }
  ],

  /* ---------- Projects ----------
     description: the opening paragraph (or a list of paragraphs).
     details:     labeled blocks, each with text and/or a list of items.
     status:      optional label, e.g. "In progress". Remove it once the project is done.
     repo / demo: leave "" if there's no link.
     Only describe work that is actually done as done; put the rest under "Planned".   */
  projects: [
    {
      title: "Financial Research Assistant",
      description:
        "A financial-document question-answering application exploring how retrieval and source references can make LLM responses easier to verify.",
      details: [
        {
          label: "Problem",
          text: "Answers drawn from earnings reports and filings are only useful if a reader can check where they came from. A general-purpose LLM can answer fluently without pointing to any source."
        },
        {
          label: "Approach",
          items: [
            "Extracts text from uploaded PDF or TXT documents, such as 10-Ks, 10-Qs, earnings call transcripts, and investor decks, and splits it into overlapping chunks.",
            "Embeds the chunks with Voyage AI's finance-tuned embedding model and stores them in a local ChromaDB vector store.",
            "Retrieves the most relevant chunks for a question and asks Claude to answer only from those excerpts, cite the source document after each claim, and say so when the excerpts don't contain the answer.",
            "A Streamlit interface shows the answer next to the retrieved excerpts, and a command-line tool ingests a folder of documents."
          ]
        },
        {
          label: "Evaluation and evidence",
          text: "Unit tests cover the chunking step. There is no formal evaluation of answer quality yet. This is a demo project, not a production research tool, and it is not intended as financial advice."
        }
      ],
      tags: ["Python", "RAG", "Claude API", "Voyage AI", "ChromaDB", "Streamlit"],
      repo: "https://github.com/dharaneepatel15/financial-research-assistant",
      demo: ""
    },
    {
      title: "ToolScout",
      subtitle: "Team course project · Texas A&M, CSCE 670 · Fall 2026",
      status: "In progress",
      description:
        "How can an LLM agent find the tools it needs without loading an entire tool catalog into its prompt? ToolScout is a course project exploring retrieval and ranking for agent tool selection.",
      details: [
        {
          label: "Problem",
          text: "Agents connected to many MCP servers can face thousands of tool definitions. Loading all of them uses up context, adds cost and latency, and makes it harder for the model to choose the right tool. A missing tool usually means a failed task."
        },
        {
          label: "Approach and current status",
          text: "Proposal completed; implementation underway. The team is implementing:",
          items: [
            "BM25 and dense embedding retrieval over tool descriptions.",
            "Cross-encoder reranking of the top candidates."
          ]
        },
        {
          label: "Planned extensions",
          items: [
            "LLM-enriched tool descriptions that describe the tasks each tool is useful for.",
            "A tool co-usage graph mined from agent runs, used for PageRank scores and item-based collaborative filtering.",
            "Next-tool prediction with a sequential recommendation model (SASRec).",
            "A LambdaMART learning-to-rank model that combines these signals.",
            "Serving the system as an MCP server (find_tools) that agents can call."
          ]
        },
        {
          label: "Planned evaluation",
          text: "Recall@5 and nDCG@10 compared with embedding-only retrieval, downstream agent task success on LiveMCPBench, and prompt-token usage compared with loading every tool."
        }
      ],
      tags: ["Python", "BM25", "Dense Retrieval", "Cross-Encoder Reranking"],
      repo: "",
      demo: ""
    },
    {
      title: "AI-Generated Receipt Fraud Detector",
      subtitle: "Course project · Fall 2026",
      status: "In progress",
      description:
        "A course project exploring whether visual forensics and OCR-based consistency checks can help identify AI-generated or edited receipts.",
      details: [
        {
          label: "Problem",
          text: "Image models can now produce convincing receipts, and editing a real one is easy. A receipt can look clean and still have numbers that don't add up, or have correct numbers in an image that was generated."
        },
        {
          label: "Approach and current status",
          text: "In development. The design has two branches:",
          items: [
            "Visual analysis of possible generation or editing artifacts in the image.",
            "OCR checks for arithmetic and tax consistency across line items and totals."
          ]
        },
        {
          label: "Planned",
          items: [
            "Fine-tuning a vision model (ConvNeXt or ViT) with frequency-domain features for the visual branch.",
            "A robustness test set of printed, photographed, and compressed receipts, with recapture augmentation during training.",
            "Baseline comparisons with TruFor, DocTamper, and a GPT-4o judge.",
            "Evaluation on image generators not seen during training, using AUC and accuracy.",
            "A plain-language explanation for each flagged receipt.",
            "Vision-language models are a possible future direction and are not part of the current design."
          ]
        },
        {
          label: "Scope",
          text: "The aim is to flag receipts that deserve a closer look, not to prove whether an image is authentic."
        }
      ],
      tags: ["Python", "Computer Vision", "OCR"],
      repo: "",
      demo: ""
    },
    {
      title: "OCR for Historical Manuscripts",
      subtitle: "Industry team project",
      description:
        "A team project on recognizing handwritten text in historical manuscripts.",
      details: [
        {
          label: "Problem",
          text: "Handwritten historical documents vary widely in writing style and condition, which makes them hard to digitize with OCR designed for printed text."
        },
        {
          label: "Approach",
          text: "Compared CNN-LSTM, attention-based, and ensemble models for handwritten text recognition, using data augmentation to help the models generalize across handwriting."
        },
        {
          label: "Result",
          text: "Reached over 85% character-recognition accuracy."
        }
      ],
      tags: ["Deep Learning", "OCR", "CNN-LSTM", "Data Augmentation"],
      repo: "",
      demo: ""
    }
  ],

  // Shown under "Additional project", below the featured projects.
  otherProjects: [
    {
      title: "Maize Yield Prediction",
      subtitle: "AggieTech Hackathon · Texas A&M",
      description:
        "Team project. We analyzed genomic, phenotype, and environmental data to predict outcomes for maize breeding programs.",
      tags: ["Machine Learning", "Genomics", "Data Analysis"],
      repo: "",
      demo: ""
    }
  ],


  /* ---------- Skills ----------
     Only list tools you have actually used. Leave tools that are only planned
     for course projects out until you've used them.                        */
  skills: [
    { group: "Software Engineering",          items: ["Python", "SQL", "Object-Oriented Design", "Data Structures & Algorithms", "REST APIs", "Microservices", "Unit Testing", "Git", "Flask", "Django REST Framework"] },
    { group: "Applied ML & Computer Vision",  items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "OpenCV", "OCR", "CNN-LSTM", "Attention-Based Models", "Model Evaluation", "Data Augmentation"] },
    { group: "Generative AI & Retrieval",     items: ["RAG", "Embeddings", "Vector Search", "LangChain", "Hugging Face Transformers", "FAISS", "ChromaDB", "Claude API"] },
    { group: "Data, Cloud & Systems",         items: ["NumPy", "pandas", "Matplotlib", "MySQL", "MongoDB", "Data Pipelines", "Time-Series Analysis", "AWS", "Docker", "Linux", "Streamlit"] },
    { group: "Optimization",                  items: ["IBM CPLEX", "Mixed-Integer Linear Programming", "Constraint Optimization"] }
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
    "I'm interested in Summer 2027 opportunities in applied AI engineering, AI solutions, computer vision, and software engineering for data-intensive systems. I'd welcome conversations about building useful AI applications and the engineering needed to make them reliable."
};
