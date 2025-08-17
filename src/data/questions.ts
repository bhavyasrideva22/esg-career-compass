import { Question } from "@/types/assessment";

export const assessmentQuestions: Question[] = [
  // Psychometric Section - Interest Scale
  {
    id: "psych-1",
    section: "psychometric",
    category: "interest",
    question: "I enjoy interpreting reports on company sustainability practices.",
    type: "likert",
    scale: 5
  },
  {
    id: "psych-2",
    section: "psychometric",
    category: "interest",
    question: "I find environmental and social impact data fascinating to analyze.",
    type: "likert",
    scale: 5
  },
  {
    id: "psych-3",
    section: "psychometric",
    category: "interest",
    question: "I actively seek out information about corporate responsibility trends.",
    type: "likert",
    scale: 5
  },
  {
    id: "psych-4",
    section: "psychometric",
    category: "interest",
    question: "I would be motivated to help organizations improve their ESG performance.",
    type: "likert",
    scale: 5
  },

  // Psychometric Section - Personality Fit
  {
    id: "psych-5",
    section: "psychometric",
    category: "personality",
    question: "I work well with structured data and tight deadlines.",
    type: "likert",
    scale: 5
  },
  {
    id: "psych-6",
    section: "psychometric",
    category: "personality",
    question: "I pay close attention to details and accuracy in my work.",
    type: "likert",
    scale: 5
  },
  {
    id: "psych-7",
    section: "psychometric",
    category: "personality",
    question: "I prefer working in regulated environments with clear standards.",
    type: "likert",
    scale: 5
  },
  {
    id: "psych-8",
    section: "psychometric",
    category: "personality",
    question: "I am comfortable working with multiple stakeholders and external parties.",
    type: "likert",
    scale: 5
  },

  // Psychometric Section - Cognitive Style
  {
    id: "psych-9",
    section: "psychometric",
    category: "cognitive",
    question: "I prefer detailed and structured environments over creative ambiguity.",
    type: "likert",
    scale: 5
  },
  {
    id: "psych-10",
    section: "psychometric",
    category: "cognitive",
    question: "I excel at organizing complex information into clear, logical formats.",
    type: "likert",
    scale: 5
  },

  // Technical & Aptitude Section - Logical Reasoning
  {
    id: "tech-1",
    section: "technical",
    category: "logical-reasoning",
    question: "A company reports carbon emissions of 500 tons in 2022 and 400 tons in 2023. They also increased renewable energy usage from 20% to 35%. Which report section would logically follow these metrics?",
    type: "multiple-choice",
    options: [
      "Financial performance metrics",
      "Future carbon reduction targets and renewable energy expansion plans",
      "Employee satisfaction surveys",
      "Product development timelines"
    ]
  },
  {
    id: "tech-2",
    section: "technical",
    category: "numerical",
    question: "If a company's carbon emissions were reduced from 200 tons to 150 tons, what is the percentage reduction?",
    type: "multiple-choice",
    options: ["25%", "33%", "20%", "15%"]
  },
  {
    id: "tech-3",
    section: "technical",
    category: "esg-literacy",
    question: "Which sustainability reporting standard focuses on 'double materiality'?",
    type: "multiple-choice",
    options: ["GRI Standards", "SASB Standards", "CSRD (Corporate Sustainability Reporting Directive)", "CDP Framework"]
  },
  {
    id: "tech-4",
    section: "technical",
    category: "writing",
    question: "A company achieved 15% reduction in water usage, 20% increase in employee diversity, and 10% improvement in supply chain transparency. Which summary is most accurate for a sustainability report?",
    type: "multiple-choice",
    options: [
      "The company made significant improvements across all ESG metrics with outstanding performance.",
      "Material progress was achieved in environmental, social, and governance areas with measurable improvements in water conservation (15% reduction), workforce diversity (20% increase), and supply chain transparency (10% improvement).",
      "Water, diversity, and transparency showed positive trends this year.",
      "ESG performance was good with some improvements noted."
    ]
  },

  // WISCAR Framework - Will
  {
    id: "wiscar-1",
    section: "wiscar",
    category: "will",
    question: "How consistently do you pursue long-term goals even when facing obstacles?",
    type: "likert",
    scale: 5
  },
  {
    id: "wiscar-2",
    section: "wiscar",
    category: "will",
    question: "I maintain focus on important projects even when they become challenging or tedious.",
    type: "likert",
    scale: 5
  },

  // WISCAR Framework - Interest
  {
    id: "wiscar-3",
    section: "wiscar",
    category: "interest",
    question: "How often do you read articles, reports, or news about sustainability and ESG topics?",
    type: "multiple-choice",
    options: ["Never", "Rarely", "Sometimes", "Often", "Daily"]
  },
  {
    id: "wiscar-4",
    section: "wiscar",
    category: "interest",
    question: "Rate your curiosity about how businesses measure and report their environmental impact.",
    type: "likert",
    scale: 5
  },

  // WISCAR Framework - Skill
  {
    id: "wiscar-5",
    section: "wiscar",
    category: "skill",
    question: "How would you rate your current ability to write clear, structured reports?",
    type: "likert",
    scale: 5
  },
  {
    id: "wiscar-6",
    section: "wiscar",
    category: "skill",
    question: "How comfortable are you working with spreadsheets and data analysis?",
    type: "likert",
    scale: 5
  },

  // WISCAR Framework - Cognitive Readiness
  {
    id: "wiscar-7",
    section: "wiscar",
    category: "cognitive",
    question: "You discover inconsistencies in a company's reported environmental data across different documents. What would be your first step?",
    type: "multiple-choice",
    options: [
      "Immediately flag it as an error",
      "Systematically review the data sources and calculation methods to understand the discrepancy",
      "Ask someone else to verify the numbers",
      "Assume it's a minor issue and continue"
    ]
  },

  // WISCAR Framework - Ability to Learn
  {
    id: "wiscar-8",
    section: "wiscar",
    category: "learning",
    question: "How do you typically respond to feedback on your written work?",
    type: "multiple-choice",
    options: [
      "I get defensive and prefer my original approach",
      "I listen but don't usually make changes",
      "I appreciate feedback and make some adjustments",
      "I actively seek feedback and use it to improve my work significantly"
    ]
  },

  // WISCAR Framework - Real-World Alignment
  {
    id: "wiscar-9",
    section: "wiscar",
    category: "alignment",
    question: "Which of these daily tasks would energize you most?",
    type: "multiple-choice",
    options: [
      "Reviewing and verifying sustainability data from multiple departments",
      "Writing executive summaries of ESG performance",
      "Researching new reporting requirements and standards",
      "Coordinating with external auditors and stakeholders"
    ]
  },
  {
    id: "wiscar-10",
    section: "wiscar",
    category: "alignment",
    question: "How do you feel about working with detailed regulatory requirements and compliance frameworks?",
    type: "likert",
    scale: 5
  }
];

export const sectionTitles = {
  psychometric: "Personality & Interest Assessment",
  technical: "Technical Aptitude & Knowledge",
  wiscar: "Career Readiness Evaluation"
};

export const sectionDescriptions = {
  psychometric: "Understanding your personality traits and interests related to sustainability reporting work.",
  technical: "Evaluating your current knowledge and aptitude for technical aspects of ESG reporting.",
  wiscar: "Comprehensive assessment of your Will, Interest, Skills, Cognitive readiness, Ability to learn, and Real-world alignment."
};