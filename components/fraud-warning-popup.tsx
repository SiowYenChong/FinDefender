'use client'

import { AlertTriangle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface FraudWarningPopupProps {
  onProceed: () => void
  onCancel: () => void
}

export default function FraudWarningPopup({ onProceed, onCancel }: FraudWarningPopupProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-red-600 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6" />
            Fraud Warning
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg font-semibold">
            The account you are attempting to transact with has been reported by the community as potentially fraudulent.
          </p>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
            <h3 className="font-bold">Reported Fraud Tactic:</h3>
            <p>Phishing scam pretending to be a legitimate business</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Additional Information:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Multiple reports received in the past week</li>
              <li>Promises unrealistic returns on investments</li>
              <li>Pressures users to act quickly</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4">
          <Button 
            variant="destructive" 
            className="w-full sm:w-auto"
            onClick={onProceed}
          >
            Proceed Anyway
          </Button>
          <Button 
            variant="secondary" 
            className="w-full sm:w-auto"
            onClick={onCancel}
          >
            Cancel Transaction
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

