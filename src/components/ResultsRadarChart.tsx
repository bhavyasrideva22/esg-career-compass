import { WiscarScore } from "@/types/assessment";
import { Card } from "@/components/ui/card";

interface ResultsRadarChartProps {
  scores: WiscarScore;
}

export const ResultsRadarChart = ({ scores }: ResultsRadarChartProps) => {
  const dimensions = [
    { key: 'will', label: 'Will', score: scores.will },
    { key: 'interest', label: 'Interest', score: scores.interest },
    { key: 'skill', label: 'Skill', score: scores.skill },
    { key: 'cognitiveReadiness', label: 'Cognitive Readiness', score: scores.cognitiveReadiness },
    { key: 'abilityToLearn', label: 'Ability to Learn', score: scores.abilityToLearn },
    { key: 'realWorldAlignment', label: 'Real-World Alignment', score: scores.realWorldAlignment }
  ];

  return (
    <Card className="p-6 shadow-card">
      <h3 className="text-lg font-semibold mb-6">WISCAR Framework Analysis</h3>
      
      {/* Simplified radar chart representation */}
      <div className="space-y-4">
        {dimensions.map((dimension) => (
          <div key={dimension.key} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{dimension.label}</span>
              <span className="text-sm text-muted-foreground">{dimension.score}/100</span>
            </div>
            <div className="w-full bg-secondary h-3 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 rounded-full ${
                  dimension.score >= 70 ? 'bg-success' :
                  dimension.score >= 40 ? 'bg-warning' : 'bg-destructive'
                }`}
                style={{ width: `${dimension.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <h4 className="font-medium mb-2">Score Interpretation</h4>
        <div className="text-sm text-muted-foreground space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <span>70-100: Strong alignment</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-warning rounded-full"></div>
            <span>40-69: Moderate alignment</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-destructive rounded-full"></div>
            <span>0-39: Low alignment</span>
          </div>
        </div>
      </div>
    </Card>
  );
};