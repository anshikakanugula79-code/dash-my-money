import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Target, TrendingUp, AlertTriangle } from "lucide-react";

const budgets = [
  { category: "Food & Dining", spent: 450, budget: 500, color: "hsl(195 100% 45%)" },
  { category: "Transport", spent: 280, budget: 300, color: "hsl(162 80% 48%)" },
  { category: "Entertainment", spent: 220, budget: 200, color: "hsl(38 92% 50%)" },
  { category: "Shopping", spent: 380, budget: 400, color: "hsl(142 76% 36%)" },
];

const goals = [
  { 
    name: "Emergency Fund", 
    current: 2500, 
    target: 5000, 
    deadline: "Dec 2024",
    status: "on-track" 
  },
  { 
    name: "Spring Break Trip", 
    current: 800, 
    target: 1500, 
    deadline: "Mar 2024",
    status: "behind" 
  },
  { 
    name: "New Laptop", 
    current: 1200, 
    target: 1200, 
    deadline: "Jan 2024",
    status: "completed" 
  },
];

export function BudgetGoals() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Monthly Budgets</CardTitle>
              <CardDescription>Track your spending against budgets</CardDescription>
            </div>
            <Button size="sm" className="bg-gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              Add Budget
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {budgets.map((budget, index) => {
            const percentage = (budget.spent / budget.budget) * 100;
            const isOverBudget = percentage > 100;
            
            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{budget.category}</span>
                  <div className="flex items-center gap-2">
                    {isOverBudget && <AlertTriangle className="h-4 w-4 text-warning" />}
                    <span className={isOverBudget ? "text-warning font-medium" : "text-muted-foreground"}>
                      ${budget.spent} / ${budget.budget}
                    </span>
                  </div>
                </div>
                <Progress 
                  value={Math.min(percentage, 100)} 
                  className="h-2"
                  style={{
                    background: `linear-gradient(to right, ${budget.color} 0%, ${budget.color} ${Math.min(percentage, 100)}%, hsl(var(--muted)) ${Math.min(percentage, 100)}%)`
                  }}
                />
                <div className="text-xs text-muted-foreground">
                  {percentage > 100 ? `${(percentage - 100).toFixed(1)}% over budget` : `${(100 - percentage).toFixed(1)}% remaining`}
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Savings Goals</CardTitle>
              <CardDescription>Your financial objectives</CardDescription>
            </div>
            <Button size="sm" variant="outline">
              <Target className="h-4 w-4 mr-2" />
              New Goal
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {goals.map((goal, index) => {
            const percentage = (goal.current / goal.target) * 100;
            
            return (
              <div key={index} className="space-y-3 p-4 rounded-lg bg-gradient-secondary">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{goal.name}</span>
                    <Badge 
                      variant={
                        goal.status === "completed" ? "default" : 
                        goal.status === "on-track" ? "secondary" : 
                        "destructive"
                      }
                      className="text-xs"
                    >
                      {goal.status === "completed" ? "Completed" : 
                       goal.status === "on-track" ? "On Track" : 
                       "Behind"}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">{goal.deadline}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>${goal.current.toLocaleString()}</span>
                    <span>${goal.target.toLocaleString()}</span>
                  </div>
                  <Progress value={percentage} className="h-3" />
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3" />
                    {percentage.toFixed(1)}% complete
                  </div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}