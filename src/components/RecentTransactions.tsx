import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Coffee, 
  Car, 
  ShoppingBag, 
  Gamepad2, 
  Zap, 
  Plus,
  Download,
  TrendingDown,
  TrendingUp
} from "lucide-react";

const transactions = [
  {
    id: 1,
    description: "Starbucks Coffee",
    amount: -4.85,
    category: "Food & Dining",
    date: "Today",
    icon: Coffee,
    color: "hsl(195 100% 45%)",
    type: "expense"
  },
  {
    id: 2,
    description: "Uber Ride",
    amount: -12.50,
    category: "Transport",
    date: "Today",
    icon: Car,
    color: "hsl(162 80% 48%)",
    type: "expense"
  },
  {
    id: 3,
    description: "Part-time Job",
    amount: 450.00,
    category: "Income",
    date: "Yesterday",
    icon: TrendingUp,
    color: "hsl(142 76% 36%)",
    type: "income"
  },
  {
    id: 4,
    description: "Amazon Purchase",
    amount: -28.99,
    category: "Shopping",
    date: "Yesterday",
    icon: ShoppingBag,
    color: "hsl(38 92% 50%)",
    type: "expense"
  },
  {
    id: 5,
    description: "Netflix Subscription",
    amount: -15.99,
    category: "Entertainment",
    date: "2 days ago",
    icon: Gamepad2,
    color: "hsl(0 84% 60%)",
    type: "expense"
  },
  {
    id: 6,
    description: "Electricity Bill",
    amount: -85.50,
    category: "Bills",
    date: "3 days ago",
    icon: Zap,
    color: "hsl(215 25% 50%)",
    type: "expense"
  }
];

export function RecentTransactions() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest financial activity</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm" className="bg-gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              Add Transaction
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => {
            const Icon = transaction.icon;
            const isIncome = transaction.type === "income";
            
            return (
              <div 
                key={transaction.id} 
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gradient-secondary transition-colors cursor-pointer"
              >
                <div 
                  className="flex items-center justify-center w-10 h-10 rounded-full"
                  style={{ backgroundColor: `${transaction.color}20` }}
                >
                  <Icon 
                    className="h-5 w-5" 
                    style={{ color: transaction.color }}
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium truncate">{transaction.description}</p>
                    <span 
                      className={`font-semibold ${
                        isIncome ? "text-success" : "text-foreground"
                      }`}
                    >
                      {isIncome ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge 
                      variant="secondary" 
                      className="text-xs"
                      style={{ 
                        backgroundColor: `${transaction.color}15`,
                        color: transaction.color,
                        border: "none"
                      }}
                    >
                      {transaction.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{transaction.date}</span>
                  </div>
                </div>
                
                {isIncome ? (
                  <TrendingUp className="h-4 w-4 text-success" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            );
          })}
        </div>
        
        <Button variant="outline" className="w-full mt-4">
          View All Transactions
        </Button>
      </CardContent>
    </Card>
  );
}