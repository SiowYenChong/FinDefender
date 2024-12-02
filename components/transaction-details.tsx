import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReportForm from "./report-form"

export default function TransactionDetails({ id }: { id: string }) {
  const [isReportFormOpen, setIsReportFormOpen] = useState(false)

  return (
    <div className="container mx-auto p-4 md:p-6">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">Transaction Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-muted-foreground">Transaction ID</h3>
            <p className="text-lg">{id}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-muted-foreground">Date & Time</h3>
            <p className="text-lg">2023-11-24 15:30:45 UTC</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-muted-foreground">Amount</h3>
            <p className="text-lg font-bold text-green-600">$1,234.56</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-muted-foreground">Status</h3>
            <Badge variant="default" className="text-lg">Completed</Badge>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-muted-foreground">Sender</h3>
            <p className="text-lg">John Doe</p>
            <p className="text-sm text-muted-foreground">Account: 1234567890</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-muted-foreground">Recipient</h3>
            <p className="text-lg">Jane Smith</p>
            <p className="text-sm text-muted-foreground">Account: 0987654321</p>
          </div>
          <div className="space-y-2 md:col-span-2">
            <h3 className="font-semibold text-sm text-muted-foreground">Description</h3>
            <p className="text-lg">Payment for freelance web design services</p>
          </div>
        </CardContent>

      </Card>
      {isReportFormOpen && <ReportForm onClose={() => setIsReportFormOpen(false)} />}
    </div>
  )
}

