// Everything the site says lives in this file.
// Edit text, links and lists here; you should not need to touch App.jsx for content changes.

export const person = {
  name: "H M Muntakim Rahman",
  shortName: "Muntakim Rahman",
  statement: "I build LLM systems and check whether their results hold up.",
  intro:
    "Computer Science and Engineering graduate from CUET (2026). My thesis, BanglaLex, is a bilingual English and Bangla legal assistant for Bangladesh, and its paper is under review at ICCIT 2026. I'm interested in AI engineering and applied LLM research.",
  location: "Chittagong, Bangladesh",
  email: "hmmuntakim.rahman2001@gmail.com",
  // Export your CV from Overleaf as a PDF, name it exactly like this and put it in the public/ folder.
  cvFile: "H_M_Muntakim_Rahman_CV.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/muntakim-404" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/h-m-muntakim-rahman/" },
  ],
};

export const research = {
  title: "BanglaLex: a multi-agent AI framework for legal assistance in Bangladesh",
  context: "Undergraduate thesis, CUET, 2025 to 2026",
  supervisor: "Supervised by Md. Al-Mamun Provath, Assistant Professor",
  status: "Paper under review at ICCIT 2026",
  summary:
    "Someone describes a land, contract or service dispute in plain English or Bangla. BanglaLex predicts how the court is likely to rule and explains why in the same language, grounded in the statutes and similar past cases it retrieved. It runs on GPT-OSS-120B through Groq or on Gemini 3.1 Flash-Lite without code changes.",
  pipelineInput: { en: "A complaint in English", bn: "বাংলা" },
  pipeline: [
    {
      name: "Consultation agent",
      does: "Reads the complaint and works out the type of dispute, its language and any missing facts.",
    },
    {
      name: "Knowledge integration",
      does: "Retrieves the statute sections that apply from a FAISS index of 43,015 passages.",
    },
    {
      name: "Judgment agent",
      does: "Predicts the outcome from those statutes and similar past cases, with supporting and risk factors.",
    },
    {
      name: "Output agent",
      does: "Writes the explanation for the person in the language they used.",
    },
  ],
  pipelineOutput: "Predicted outcome and explanation",
  facts: [
    {
      figure: "164",
      label: "Supreme Court cases",
      detail:
        "Land, contract and service disputes labelled with outcomes. Three law students relabelled them blind (Fleiss' κ = 0.807).",
    },
    {
      figure: "43,015",
      label: "statute passages",
      detail: "From 1,281 active statutes, searchable in 15 to 17 ms per query.",
    },
    {
      figure: "70.0% and 75.0%",
      label: "accuracy on 60 held-out cases",
      detail:
        "Against a 61.7% majority-class floor. BanglaLex answered every case, while the bare LLMs declined 17 to 22% of them.",
    },
  ],
  leak: {
    title: "The leak I found in my own evaluation",
    body:
      "LLM-paraphrased copies of test cases had slipped into their own precedent pool, with the true outcome attached, which inflated accuracy by 23 points. I changed the precedent exclusion to drop every paraphrased copy, re-ran the evaluation and reported the leak as a finding in the paper.",
  },
  demoNote:
    "The live app shows progress through the four stages, switches between Groq and Gemini, and has one-click examples in both languages.",
  links: [
    { label: "Try the live demo", href: "https://banglalex-g7pi5ez9nfsfvydrc4y7ao.streamlit.app/", primary: true },
    { label: "Code on GitHub", href: "https://github.com/muntakim-404/banglalex" },
  ],
};

export const projects = [
  {
    title: "GafferBot",
    subtitle: "Fantasy Premier League planning agent",
    summary:
      "Predicts expected points for every Premier League player from minutes, xG and xA, opponent strength and injury news, then chooses transfers, starting XI and captain as a mixed-integer program over the next five gameweeks under all FPL rules. It runs on a GitHub Actions schedule and sends the plan to Telegram before each deadline.",
    stack: ["Python", "pandas", "SciPy", "PuLP / HiGHS", "GitHub Actions", "Telegram Bot API"],
    result: {
      caption: "Points per gameweek, walk-forward backtest over 34 gameweeks of 2025/26",
      unit: "pts",
      bars: [
        { label: "Model's top-11 picks", value: 54.6, highlight: true },
        { label: "Season-average baseline", value: 47.6 },
      ],
      note: "Rank correlation with actual points: 0.750 for the model, 0.691 for the baseline (Spearman).",
    },
    links: [{ label: "Code on GitHub", href: "https://github.com/muntakim-404/GafferBot" }],
  },
  {
    title: "WayFinder",
    subtitle: "Public transport route and fare finder",
    summary:
      "A web app where commuters search a trip, see the route on Google Maps with place autocomplete and get a fare estimate from an Express and MongoDB backend. In a team of three, I co-built the frontend: trip search, bus routes, the admin panel and the team page.",
    stack: ["HTML", "CSS", "JavaScript", "Google Maps API", "Node.js", "Express.js", "MongoDB"],
    links: [],
  },
];

export const experience = [
  {
    when: "Nov 2025",
    role: "Industrial trainee",
    org: "RedDot Digital Limited",
    detail:
      "Worked in a nine-person cross-functional team, following the company's workflow from requirements to delivery. Helped shape an AI-integrated product concept through ideation, UI/UX design and user flows, and presented it to senior technical and executive stakeholders.",
  },
  {
    when: "Aug 2025 to Aug 2026",
    role: "Publicity Secretary",
    org: "Joyoddhoney, CUET",
  },
  {
    when: "Jul 2025 to Aug 2026",
    role: "Public Relations Secretary",
    org: "IEEE Computer Society CUET Student Branch Chapter",
  },
];

export const education = [
  {
    when: "Mar 2022 to Jul 2026",
    what: "B.Sc. in Computer Science and Engineering",
    where: "Chittagong University of Engineering & Technology (CUET)",
    detail: "CGPA 3.56 / 4.00",
  },
];

export const courses = [
  {
    when: "Apr 2026",
    what: "Fundamentals of Agents (Unit 1, Agents Course)",
    where: "Hugging Face",
  },
  {
    when: "Apr 2025",
    what: "Front-End Development Training, 80 hours",
    where: "CSE, CUET (EDGE Project)",
    href: "https://training.edge.gov.bd/storage/certificate/student-training/certificate_67f21a58d06bb7.76855240.pdf",
  },
];

export const skills = [
  { group: "LLM and AI engineering", items: "LLM APIs (Groq, Gemini), retrieval-augmented generation, multi-agent pipelines, prompt engineering, structured JSON outputs" },
  { group: "Machine learning and data", items: "PyTorch, Hugging Face Transformers, Sentence-Transformers, FAISS, scikit-learn, pandas, NumPy, SciPy" },
  { group: "Research methods", items: "Leakage-safe evaluation, significance testing (McNemar's test), inter-annotator agreement (Fleiss' κ), walk-forward backtesting" },
  { group: "Optimisation", items: "Mixed-integer programming (PuLP, HiGHS), Poisson modelling" },
  { group: "Programming", items: "Python, C, C++, Java, SQL, JavaScript, HTML, CSS" },
  { group: "Deployment and tools", items: "Streamlit, GitHub Actions, Telegram Bot API, Google Maps JavaScript API, Git, Jupyter, Google Colab" },
];
