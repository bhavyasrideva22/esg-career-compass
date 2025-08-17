import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Question, AssessmentResponse } from "@/types/assessment";
import { ChevronRight } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  onAnswer: (response: AssessmentResponse) => void;
  onNext: () => void;
  isLastQuestion: boolean;
}

export const QuestionCard = ({ question, onAnswer, onNext, isLastQuestion }: QuestionCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  
  const handleAnswerChange = (value: string) => {
    setSelectedAnswer(value);
    
    let answerValue: number | string;
    if (question.type === 'likert') {
      answerValue = parseInt(value);
    } else if (question.type === 'multiple-choice') {
      answerValue = parseInt(value);
    } else {
      answerValue = value;
    }
    
    onAnswer({
      questionId: question.id,
      answer: answerValue
    });
  };

  const renderLikertScale = () => {
    const scale = question.scale || 5;
    const labels = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];
    
    return (
      <RadioGroup value={selectedAnswer} onValueChange={handleAnswerChange}>
        <div className="grid grid-cols-1 gap-3">
          {Array.from({ length: scale }, (_, i) => i + 1).map((value) => (
            <div key={value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
              <RadioGroupItem value={value.toString()} id={`option-${value}`} />
              <Label 
                htmlFor={`option-${value}`} 
                className="flex-1 cursor-pointer font-medium"
              >
                {value} - {labels[value - 1]}
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>
    );
  };

  const renderMultipleChoice = () => {
    return (
      <RadioGroup value={selectedAnswer} onValueChange={handleAnswerChange}>
        <div className="grid grid-cols-1 gap-3">
          {question.options?.map((option, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-secondary/50 transition-colors border border-border">
              <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-1" />
              <Label 
                htmlFor={`option-${index}`} 
                className="flex-1 cursor-pointer leading-relaxed"
              >
                {option}
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>
    );
  };

  return (
    <Card className="p-8 shadow-card max-w-3xl mx-auto">
      <div className="space-y-6">
        <div>
          <div className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">
            {question.category.replace('-', ' ')}
          </div>
          <h2 className="text-xl font-semibold leading-7">
            {question.question}
          </h2>
        </div>
        
        <div className="py-4">
          {question.type === 'likert' ? renderLikertScale() : renderMultipleChoice()}
        </div>
        
        <div className="flex justify-end pt-4 border-t">
          <Button 
            onClick={onNext}
            disabled={!selectedAnswer}
            className="min-w-32"
          >
            {isLastQuestion ? 'Complete Assessment' : 'Next Question'}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </Card>
  );
};