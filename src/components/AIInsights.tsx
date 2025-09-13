import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  TrendingUp, 
  AlertTriangle, 
  Target, 
  Lightbulb,
  ArrowRight
} from "lucide-react";

const insights = [
  {
    type: "prediction",
    title: "Spending Forecast",
    message: "Based on your current patterns, you're likely to spend $1,680 this month - $180 over your budget.",
    severity: "warning",
    icon: TrendingUp,
    action: "Adjust Budget"
  },
  {
    type: "opportunity",
    title: "Savings Opportunity",
    message: "You've been spending 23% more on food delivery lately. Cooking at home 2 more times could save you $85/month.",
    severity: "info",
    icon: Lightbulb,
    action: "See Tips"
  },
  {
    type: "goal",
    title: "Goal Achievement",
    message: "You're on track to reach your Emergency Fund goal 2 months ahead of schedule! Consider setting a new target.",
    severity: "success",
    icon: Target,
    action: "Update Goal"
  },
  {
    type: "alert",
    title: "Budget Alert",
    message: "You've exceeded your Entertainment budget by $20. Consider reviewing your streaming subscriptions.",
    severity: "warning",
    icon: AlertTriangle,
    action: "Review Expenses"
  }
];

export function AIInsights() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          <div>
            <CardTitle>AI Financial Insights</CardTitle>
            <CardDescription>Personalized recommendations and predictions</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg border bg-gradient-secondary hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div 
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    insight.severity === "warning" ? "bg-warning/20" :
                    insight.severity === "success" ? "bg-success/20" :
                    "bg-primary/20"
                  }`}
                >
                  <insight.icon 
                    className={`h-4 w-4 ${
                      insight.severity === "warning" ? "text-warning" :
                      insight.severity === "success" ? "text-success" :
                      "text-primary"
                    }`}
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium">{insight.title}</h4>
                    <Badge 
                      variant={
                        insight.severity === "warning" ? "destructive" :
                        insight.severity === "success" ? "default" :
                        "secondary"
                      }
                      className="text-xs"
                    >
                      {insight.type}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {insight.message}
                  </p>
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-xs"
                  >
                    {insight.action}
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-primary rounded-lg text-white">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="h-5 w-5" />
            <span className="font-medium">AI Tip of the Day</span>
          </div>
          <p className="text-sm opacity-90 mb-3">
            Try the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings. 
            You're currently at 55/35/10 - consider adjusting your entertainment spending.
          </p>
          <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 border-white/20">
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}