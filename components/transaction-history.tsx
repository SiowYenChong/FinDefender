import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function TransactionHistory() {
  const router = useRouter()
  const transactions = [
    { id: 1, description: "Grocery Store", amount: -75.50, date: "2023-11-25", type: "Debit" },
    { id: 2, description: "Salary Deposit", amount: 2500.00, date: "2023-11-24", type: "Credit" },
    { id: 3, description: "Electric Bill", amount: -120.00, date: "2023-11-23", type: "Debit" },
    { id: 4, description: "Freelance Payment", amount: 850.00, date: "2023-11-22", type: "Credit" },
    { id: 5, description: "Restaurant", amount: -45.80, date: "2023-11-21", type: "Debit" },
    { id: 6, description: "Online Shopping", amount: -234.50, date: "2023-11-20", type: "Debit" },
    { id: 7, description: "Investment Return", amount: 175.25, date: "2023-11-19", type: "Credit" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div 
              key={transaction.id}
              onClick={() => router.push(`/transaction/${transaction.id}`)}
              className="flex justify-between items-center p-4 hover:bg-accent rounded-lg cursor-pointer transition-colors border"
            >
              <div className="space-y-1">
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-muted-foreground">{transaction.date}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  transaction.type === "Credit" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}>
                  {transaction.type}
                </span>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${
                  transaction.amount > 0 ? "text-green-600" : "text-red-600"
                }`}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}