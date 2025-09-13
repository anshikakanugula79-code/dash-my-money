import { StatCard } from "@/components/ui/stat-card";
import { ExpenseChart } from "@/components/ExpenseChart";
import { BudgetGoals } from "@/components/BudgetGoals";
import { RecentTransactions } from "@/components/RecentTransactions";
import { AIInsights } from "@/components/AIInsights";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Target,
  Bell,
  Settings,
  User,
  Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">FinanceAI</h1>
                <p className="text-sm text-muted-foreground">Smart Student Finance Manager</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button size="sm" variant="outline">
                <Bell className="h-4 w-4 mr-2" />
                Alerts
              </Button>
              <Button size="sm" variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button size="sm" className="bg-gradient-primary">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCard
            title="Current Balance"
            value="$3,247.82"
            change="+$127.50 from last month"
            changeType="positive"
            icon={DollarSign}
          />
          <StatCard
            title="Monthly Income"
            value="$1,650.00"
            change="+8.2% from last month"
            changeType="positive"
            icon={TrendingUp}
          />
          <StatCard
            title="Monthly Expenses"
            value="$1,580.00"
            change="+12.5% from last month"
            changeType="negative"
            icon={TrendingDown}
          />
          <StatCard
            title="Savings Rate"
            value="23.4%"
            change="On track with goals"
            changeType="positive"
            icon={Target}
          />
        </div>

        {/* Charts Section */}
        <div className="mb-8">
          <ExpenseChart />
        </div>

        {/* Budget and Goals */}
        <div className="mb-8">
          <BudgetGoals />
        </div>

        {/* Bottom Section */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentTransactions />
          </div>
          <div>
            <AIInsights />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
