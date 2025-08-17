import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AssessmentProgress } from "@/components/AssessmentProgress";
import { QuestionCard } from "@/components/QuestionCard";
import { assessmentQuestions, sectionTitles, sectionDescriptions } from "@/data/questions";
import { AssessmentResponse, AssessmentState } from "@/types/assessment";
import { calculateScores } from "@/utils/assessmentScoring";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Assessment = () => {
  const navigate = useNavigate();
  const [assessmentState, setAssessmentState] = useState<AssessmentState>({
    currentQuestion: 0,
    responses: [],
    currentSection: "psychometric",
    isComplete: false
  });

  const currentQuestion = assessmentQuestions[assessmentState.currentQuestion];
  const totalQuestions = assessmentQuestions.length;

  // Determine current section and completed sections
  const getCurrentSection = (questionIndex: number): string => {
    const question = assessmentQuestions[questionIndex];
    return question?.section || "psychometric";
  };

  const getCompletedSections = (): string[] => {
    const sections = ['psychometric', 'technical', 'wiscar'];
    const currentSection = getCurrentSection(assessmentState.currentQuestion);
    const currentSectionIndex = sections.indexOf(currentSection);
    return sections.slice(0, currentSectionIndex);
  };

  const handleAnswer = (response: AssessmentResponse) => {
    setAssessmentState(prev => ({
      ...prev,
      responses: [
        ...prev.responses.filter(r => r.questionId !== response.questionId),
        response
      ]
    }));
  };

  const handleNext = () => {
    if (assessmentState.currentQuestion < totalQuestions - 1) {
      const nextQuestionIndex = assessmentState.currentQuestion + 1;
      const nextSection = getCurrentSection(nextQuestionIndex);
      
      setAssessmentState(prev => ({
        ...prev,
        currentQuestion: nextQuestionIndex,
        currentSection: nextSection
      }));
    } else {
      // Complete assessment
      const result = calculateScores(assessmentState.responses);
      setAssessmentState(prev => ({
        ...prev,
        isComplete: true,
        result
      }));
      
      // Navigate to results with state
      navigate('/results', { state: { result } });
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto py-8">
          <Card className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Assessment Complete</h2>
            <p className="text-muted-foreground mb-6">
              Calculating your results...
            </p>
          </Card>
        </div>
      </div>
    );
  }

  const currentSectionInfo = {
    title: sectionTitles[currentQuestion.section as keyof typeof sectionTitles],
    description: sectionDescriptions[currentQuestion.section as keyof typeof sectionDescriptions]
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card/50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={handleBack} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <div className="text-center">
              <h1 className="text-xl font-semibold">Sustainability Reporting Specialist Assessment</h1>
              <p className="text-sm text-muted-foreground mt-1">{currentSectionInfo.title}</p>
            </div>
            <div className="w-32"></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <AssessmentProgress 
              currentQuestion={assessmentState.currentQuestion + 1}
              totalQuestions={totalQuestions}
              currentSection={assessmentState.currentSection}
              completedSections={getCompletedSections()}
            />
          </div>
          
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card border-primary/10">
                <h2 className="text-lg font-semibold text-primary mb-2">
                  {currentSectionInfo.title}
                </h2>
                <p className="text-muted-foreground">
                  {currentSectionInfo.description}
                </p>
              </Card>
              
              <QuestionCard
                question={currentQuestion}
                onAnswer={handleAnswer}
                onNext={handleNext}
                isLastQuestion={assessmentState.currentQuestion === totalQuestions - 1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;