import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { CheckCircle, Circle } from "lucide-react";

interface AssessmentProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  currentSection: string;
  completedSections: string[];
}

export const AssessmentProgress = ({ 
  currentQuestion, 
  totalQuestions, 
  currentSection,
  completedSections 
}: AssessmentProgressProps) => {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;
  
  const sections = [
    { key: 'psychometric', label: 'Personality & Interest', questions: '10 questions' },
    { key: 'technical', label: 'Technical Aptitude', questions: '4 questions' },
    { key: 'wiscar', label: 'Career Readiness', questions: '8 questions' }
  ];

  return (
    <Card className="p-6 shadow-card">
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Assessment Progress</h3>
            <span className="text-sm text-muted-foreground">
              {currentQuestion} of {totalQuestions}
            </span>
          </div>
          <Progress value={progressPercentage} variant="success" className="h-3" />
        </div>
        
        <div className="space-y-3">
          <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
            Sections
          </h4>
          {sections.map((section) => {
            const isCompleted = completedSections.includes(section.key);
            const isCurrent = currentSection === section.key;
            
            return (
              <div 
                key={section.key}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  isCurrent ? 'bg-primary/10 border border-primary/20' : 'bg-muted/50'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle className="w-5 h-5 text-success" />
                ) : (
                  <Circle className={`w-5 h-5 ${isCurrent ? 'text-primary' : 'text-muted-foreground'}`} />
                )}
                <div className="flex-1">
                  <div className={`font-medium ${isCurrent ? 'text-primary' : ''}`}>
                    {section.label}
                  </div>
                  <div className="text-sm text-muted-foreground">{section.questions}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};