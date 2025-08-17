import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ResultsRadarChart } from "@/components/ResultsRadarChart";
import { AssessmentResult } from "@/types/assessment";
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Target, 
  BookOpen, 
  Briefcase,
  Home,
  Download
} from "lucide-react";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [result, setResult] = useState<AssessmentResult | null>(null);

  useEffect(() => {
    if (location.state?.result) {
      setResult(location.state.result);
    } else {
      navigate('/');
    }
  }, [location.state, navigate]);

  if (!result) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Loading Results...</h2>
        </Card>
      </div>
    );
  }

  const getRecommendationIcon = () => {
    switch (result.recommendation) {
      case 'yes':
        return <CheckCircle className="w-8 h-8 text-success" />;
      case 'maybe':
        return <AlertCircle className="w-8 h-8 text-warning" />;
      case 'no':
        return <XCircle className="w-8 h-8 text-destructive" />;
    }
  };

  const getRecommendationColor = () => {
    switch (result.recommendation) {
      case 'yes':
        return 'bg-success text-success-foreground';
      case 'maybe':
        return 'bg-warning text-warning-foreground';
      case 'no':
        return 'bg-destructive text-destructive-foreground';
    }
  };

  const getRecommendationText = () => {
    switch (result.recommendation) {
      case 'yes':
        return 'Excellent Career Match';
      case 'maybe':
        return 'Potential with Training';
      case 'no':
        return 'Consider Alternative Paths';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card/50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Assessment Results</h1>
              <p className="text-muted-foreground mt-1">Your Sustainability Reporting Career Assessment</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Export PDF
              </Button>
              <Button onClick={() => navigate('/')} className="gap-2">
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 py-8 space-y-8">
        {/* Overall Recommendation */}
        <Card className="p-8 shadow-elegant">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              {getRecommendationIcon()}
            </div>
            <div>
              <Badge className={`px-4 py-2 text-lg font-semibold ${getRecommendationColor()}`}>
                {getRecommendationText()}
              </Badge>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Overall Score: {result.overallScore}/100</h2>
              <p className="text-lg text-muted-foreground">{result.careerFit}</p>
            </div>
            <Progress value={result.overallScore} className="h-4 max-w-md mx-auto" />
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section Scores */}
          <Card className="p-6 shadow-card">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Section Breakdown
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Personality & Interest</span>
                  <span className="text-sm text-muted-foreground">{result.psychometricScore}/100</span>
                </div>
                <Progress 
                  value={result.psychometricScore} 
                  variant={result.psychometricScore >= 70 ? "success" : result.psychometricScore >= 40 ? "warning" : "default"}
                  className="h-3"
                />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Technical Aptitude</span>
                  <span className="text-sm text-muted-foreground">{result.technicalScore}/100</span>
                </div>
                <Progress 
                  value={result.technicalScore}
                  variant={result.technicalScore >= 70 ? "success" : result.technicalScore >= 40 ? "warning" : "default"}
                  className="h-3"
                />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">WISCAR Framework</span>
                  <span className="text-sm text-muted-foreground">
                    {Math.round(Object.values(result.wiscarScores).reduce((sum, score) => sum + score, 0) / 6)}/100
                  </span>
                </div>
                <Progress 
                  value={Object.values(result.wiscarScores).reduce((sum, score) => sum + score, 0) / 6}
                  variant={Object.values(result.wiscarScores).reduce((sum, score) => sum + score, 0) / 6 >= 70 ? "success" : 
                          Object.values(result.wiscarScores).reduce((sum, score) => sum + score, 0) / 6 >= 40 ? "warning" : "default"}
                  className="h-3"
                />
              </div>
            </div>
          </Card>

          {/* WISCAR Radar Chart */}
          <ResultsRadarChart scores={result.wiscarScores} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personalized Guidance */}
          <Card className="p-6 shadow-card">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Personalized Guidance
            </h3>
            <div className="space-y-3">
              {result.personalizedGuidance.map((guidance, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{guidance}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Suggested Roles */}
          <Card className="p-6 shadow-card">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              Suggested Career Roles
            </h3>
            <div className="space-y-3">
              {result.suggestedRoles.map((role, index) => (
                <div key={index} className="p-3 bg-gradient-card rounded-lg border border-primary/10">
                  <p className="font-medium text-primary">{role}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Learning Path */}
        <Card className="p-6 shadow-card">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Recommended Learning Path
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {result.learningPath.map((course, index) => (
              <div key={index} className="p-4 bg-gradient-card rounded-lg border border-primary/10">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    Step {index + 1}
                  </Badge>
                </div>
                <p className="font-medium text-sm">{course}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Next Steps */}
        <Card className="p-8 shadow-elegant text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Based on your assessment results, we recommend starting with the learning path above. 
            Each step is designed to build upon your existing strengths while addressing areas for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gradient-hero text-primary-foreground px-8">
              Explore Learning Resources
            </Button>
            <Button variant="outline" onClick={() => navigate('/')}>
              Retake Assessment
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Results;