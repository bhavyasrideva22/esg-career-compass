import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Target, 
  BookOpen, 
  TrendingUp,
  Shield,
  Zap
} from "lucide-react";

export const FeatureSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Psychometric Analysis",
      description: "Advanced personality profiling using validated Big Five, Holland Codes, and Grit Scale assessments to understand your natural fit.",
      color: "text-purple-600"
    },
    {
      icon: Target,
      title: "Technical Aptitude",
      description: "Evaluate your readiness for ESG frameworks like GRI, SASB, CSRD, and technical skills in data analysis and reporting.",
      color: "text-blue-600"
    },
    {
      icon: BookOpen,
      title: "WISCAR Framework",
      description: "Comprehensive assessment of Will, Interest, Skills, Cognitive readiness, Ability to learn, and Real-world alignment.",
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Personalized Roadmap",
      description: "Receive a tailored learning path with specific courses, certifications, and skill development recommendations.",
      color: "text-orange-600"
    },
    {
      icon: Shield,
      title: "Industry-Validated",
      description: "Assessment criteria based on real sustainability reporting roles and validated by industry professionals.",
      color: "text-red-600"
    },
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description: "Advanced scoring algorithms provide nuanced career guidance beyond simple yes/no recommendations.",
      color: "text-yellow-600"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Comprehensive Career Assessment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our multi-dimensional approach evaluates every aspect of your potential 
            success in sustainability reporting careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 group">
              <div className="space-y-4">
                <div className={`inline-flex p-3 rounded-lg bg-background shadow-sm group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};