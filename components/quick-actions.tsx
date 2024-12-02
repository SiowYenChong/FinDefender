'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CreditCard, FileText } from 'lucide-react' // Changed News to FileText
import { useRouter } from "next/navigation"

export default function QuickActions() {
  const router = useRouter()

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-around gap-24">
        <Button variant="outline" className="flex flex-col items-center h-22 w-full" onClick={() => router.push('/transaction')}>
          <Send className="mb-2" />
          Transfer
        </Button>
        <Button variant="outline" className="flex flex-col items-center h-22 w-full" onClick={() => router.push('/bills')}>
          <CreditCard className="mb-2" />
          Pay Bills
        </Button>
        <Button variant="outline" className="flex flex-col items-center h-22 w-full" onClick={() => router.push('/news')}>
          <FileText className="mb-2" />
          Community News
        </Button>
      </CardContent>
    </Card>
  )
}
