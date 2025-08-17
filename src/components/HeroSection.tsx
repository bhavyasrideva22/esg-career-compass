import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Target, 
  Clock, 
  Award, 
  ChevronRight,
  Leaf,
  BarChart3,
  Users
} from "lucide-react";
import heroImage from "@/assets/hero-sustainability.jpg";

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleStartAssessment = () => {
    navigate('/assessment');
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Sustainability reporting workspace with ESG charts and green elements"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 gradient-hero opacity-20"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                <Leaf className="w-4 h-4 mr-2" />
                Career Discovery Assessment
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Should You Become a{" "}
                <span className="text-primary">Sustainability Reporting</span>{" "}
                Specialist?
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover if you have the personality, skills, and passion for a career in 
                ESG reporting with our comprehensive AI-powered assessment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleStartAssessment}
                className="gradient-hero text-primary-foreground px-8 py-6 text-lg font-semibold shadow-elegant hover:shadow-lg transition-all group"
              >
                Start Assessment
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl font-bold">20-30</div>
                <div className="text-sm text-muted-foreground">Minutes</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl font-bold">22</div>
                <div className="text-sm text-muted-foreground">Questions</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-muted-foreground">Personalized</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 shadow-card gradient-card border-primary/10">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                What You'll Discover
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Personality Fit Analysis</p>
                    <p className="text-sm text-muted-foreground">Big Five traits, interests, and work style preferences</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Technical Readiness</p>
                    <p className="text-sm text-muted-foreground">ESG knowledge, analytical skills, and reporting aptitude</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">WISCAR Framework</p>
                    <p className="text-sm text-muted-foreground">Will, Interest, Skills, Cognitive readiness, Ability to learn, Real-world alignment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Personalized Career Path</p>
                    <p className="text-sm text-muted-foreground">Tailored recommendations and learning roadmap</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card bg-muted/20">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Career Opportunities
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "ESG Reporting Specialist",
                  "Sustainability Analyst", 
                  "Corporate Responsibility Manager",
                  "ESG Data Officer",
                  "Compliance Officer"
                ].map((role) => (
                  <Badge key={role} variant="outline" className="text-xs">
                    {role}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};