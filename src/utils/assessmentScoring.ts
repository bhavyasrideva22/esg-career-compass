import { AssessmentResponse, AssessmentResult, WiscarScore } from "@/types/assessment";
import { assessmentQuestions } from "@/data/questions";

export const calculateScores = (responses: AssessmentResponse[]): AssessmentResult => {
  const responseMap = new Map(responses.map(r => [r.questionId, r.answer]));
  
  // Calculate Psychometric Score (0-100)
  const psychometricQuestions = assessmentQuestions.filter(q => q.section === "psychometric");
  const psychometricTotal = psychometricQuestions.reduce((sum, q) => {
    const response = responseMap.get(q.id);
    if (typeof response === 'number') {
      return sum + (response * 20); // Convert to 0-100 scale
    }
    return sum;
  }, 0);
  const psychometricScore = Math.round(psychometricTotal / psychometricQuestions.length);

  // Calculate Technical Score (0-100)
  const technicalQuestions = assessmentQuestions.filter(q => q.section === "technical");
  let technicalCorrect = 0;
  
  technicalQuestions.forEach(q => {
    const response = responseMap.get(q.id);
    // Define correct answers
    const correctAnswers: { [key: string]: number } = {
      "tech-1": 1, // Future carbon reduction targets
      "tech-2": 0, // 25%
      "tech-3": 2, // CSRD
      "tech-4": 1  // Material progress summary
    };
    
    if (response === correctAnswers[q.id]) {
      technicalCorrect++;
    }
  });
  const technicalScore = Math.round((technicalCorrect / technicalQuestions.length) * 100);

  // Calculate WISCAR Scores
  const wiscarQuestions = assessmentQuestions.filter(q => q.section === "wiscar");
  
  const calculateWiscarCategory = (category: string): number => {
    const categoryQuestions = wiscarQuestions.filter(q => q.category === category);
    const categoryTotal = categoryQuestions.reduce((sum, q) => {
      const response = responseMap.get(q.id);
      if (typeof response === 'number') {
        return sum + (response * 20);
      } else if (typeof response === 'string' && q.type === 'multiple-choice') {
        // Convert multiple choice to score
        const optionIndex = q.options?.indexOf(response) || 0;
        return sum + ((optionIndex + 1) * 20);
      }
      return sum;
    }, 0);
    return Math.round(categoryTotal / categoryQuestions.length);
  };

  const wiscarScores: WiscarScore = {
    will: calculateWiscarCategory('will'),
    interest: calculateWiscarCategory('interest'),
    skill: calculateWiscarCategory('skill'),
    cognitiveReadiness: calculateWiscarCategory('cognitive'),
    abilityToLearn: calculateWiscarCategory('learning'),
    realWorldAlignment: calculateWiscarCategory('alignment')
  };

  // Calculate overall score
  const wiscarAverage = Object.values(wiscarScores).reduce((sum, score) => sum + score, 0) / 6;
  const overallScore = Math.round((psychometricScore + technicalScore + wiscarAverage) / 3);

  // Determine recommendation
  let recommendation: 'no' | 'maybe' | 'yes' = 'no';
  let careerFit = '';
  
  if (overallScore >= 71) {
    recommendation = 'yes';
    careerFit = 'Excellent fit for Sustainability Reporting career';
  } else if (overallScore >= 41) {
    recommendation = 'maybe';
    careerFit = 'Moderate fit - foundational training recommended';
  } else {
    recommendation = 'no';
    careerFit = 'Consider alternative career paths in sustainability';
  }

  // Generate personalized guidance
  const personalizedGuidance: string[] = [];
  
  if (psychometricScore < 50) {
    personalizedGuidance.push("Consider exploring your interest in sustainability topics through courses or reading");
  }
  if (technicalScore < 50) {
    personalizedGuidance.push("Start with foundational ESG and reporting frameworks training");
  }
  if (wiscarScores.skill < 50) {
    personalizedGuidance.push("Develop technical writing and data analysis skills");
  }
  if (wiscarScores.interest > 70 && technicalScore < 50) {
    personalizedGuidance.push("Your high interest is a great foundation - focus on building technical knowledge");
  }

  // Suggest roles based on scores
  const suggestedRoles: string[] = [];
  if (overallScore >= 71) {
    suggestedRoles.push("Sustainability Reporting Specialist", "ESG Analyst", "Corporate Responsibility Manager");
  } else if (overallScore >= 41) {
    suggestedRoles.push("Junior ESG Analyst", "Sustainability Coordinator", "ESG Data Assistant");
  } else {
    suggestedRoles.push("Climate Communication Specialist", "Green Marketing Coordinator", "Environmental Program Assistant");
  }

  // Generate learning path
  const learningPath: string[] = [];
  if (technicalScore < 50) {
    learningPath.push("Introduction to ESG Frameworks", "GRI Standards Fundamentals", "Understanding Materiality");
  }
  if (wiscarScores.skill < 70) {
    learningPath.push("Technical Writing for Sustainability", "Excel for ESG Reporting", "Data Visualization Basics");
  }
  if (overallScore >= 50) {
    learningPath.push("Advanced ESG Reporting", "Audit-Ready Reports", "Stakeholder Engagement");
  }

  return {
    psychometricScore,
    technicalScore,
    wiscarScores,
    overallScore,
    recommendation,
    careerFit,
    personalizedGuidance,
    suggestedRoles,
    learningPath
  };
};