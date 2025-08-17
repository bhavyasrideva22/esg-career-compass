export interface Question {
  id: string;
  section: string;
  category: string;
  question: string;
  type: 'likert' | 'multiple-choice' | 'scenario' | 'ranking';
  options?: string[];
  scale?: number;
}

export interface AssessmentResponse {
  questionId: string;
  answer: number | string | string[];
}

export interface SectionScore {
  section: string;
  score: number;
  maxScore: number;
  interpretation: string;
}

export interface WiscarScore {
  will: number;
  interest: number;
  skill: number;
  cognitiveReadiness: number;
  abilityToLearn: number;
  realWorldAlignment: number;
}

export interface AssessmentResult {
  psychometricScore: number;
  technicalScore: number;
  wiscarScores: WiscarScore;
  overallScore: number;
  recommendation: 'no' | 'maybe' | 'yes';
  careerFit: string;
  personalizedGuidance: string[];
  suggestedRoles: string[];
  learningPath: string[];
}

export interface AssessmentState {
  currentQuestion: number;
  responses: AssessmentResponse[];
  currentSection: string;
  isComplete: boolean;
  result?: AssessmentResult;
}