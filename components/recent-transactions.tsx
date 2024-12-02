"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function RecentTransactions() {
  const router = useRouter()
  const transactions = [
    { id: 1, description: "Grocery Store", amount: -75.50, date: "2023-11-25" },
    { id: 2, description: "Salary Deposit", amount: 2500.00, date: "2023-11-24" },
    { id: 3, description: "Electric Bill", amount: -120.00, date: "2023-11-23" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {transactions.map((transaction) => (
            <li 
              key={transaction.id} 
              className="flex justify-between items-center p-2 hover:bg-accent rounded-md cursor-pointer transition-colors"
              onClick={() => router.push(`/transaction/${transaction.id}`)}
            >
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-muted-foreground">{transaction.date}</p>
              </div>
              <p className={transaction.amount > 0 ? "text-green-600" : "text-red-600"}>
                ${Math.abs(transaction.amount).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}