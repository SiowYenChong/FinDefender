import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AccountSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">$5,234.56</p>
        <p className="text-sm text-muted-foreground">Available Balance</p>
      </CardContent>
    </Card>
  )
}

