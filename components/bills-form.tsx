'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import FraudWarningPopup from "@/components/fraud-warning-popup"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, SelectSeparator } from "@/components/ui/select"

export default function BillPaymentForm() {
  const [showWarning, setShowWarning] = useState(false)
  const [selectedBill, setSelectedBill] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [amount, setAmount] = useState("")
  const [errors, setErrors] = useState({ accountNumber: "", amount: "" })
  const userBalance = 10000 // Example balance for demonstration
  const { toast } = useToast()

  const validateAccountNumber = (value: string) => {
    if (!value) {
      return "This field is required."
    } else if (!/^\d{6,12}$/.test(value)) {
      return "Invalid account number. Must be 6-12 digits."
    }
    return ""
  }

  const validateAmount = (value: string) => {
    if (!value) {
      return "This field is required."
    } else if (parseFloat(value) < 0.32) {
      return "Minimum payment amount is 0.32."
    } else if (parseFloat(value) > userBalance) {
      return "Insufficient balance."
    }
    return ""
  }

  const handleAccountNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setAccountNumber(value)
    setErrors((prevErrors) => ({
      ...prevErrors,
      accountNumber: validateAccountNumber(value),
    }))
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setAmount(value)
    setErrors((prevErrors) => ({
      ...prevErrors,
      amount: validateAmount(value),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const accountNumberError = validateAccountNumber(accountNumber)
    const amountError = validateAmount(amount)

    if (accountNumberError || amountError) {
      setErrors({
        accountNumber: accountNumberError,
        amount: amountError,
      })
    } else {
      setShowWarning(true)
    }
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">Pay Your Bills</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {/* Bill Selection */}
            <div className="space-y-2">
              <Label htmlFor="bill">Select Bill</Label>
              <Select onValueChange={setSelectedBill} value={selectedBill}>
                <SelectTrigger id="bill" className="w-full focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  <SelectValue placeholder="Select a bill type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Utilities</SelectLabel>
                    <SelectItem value="electricity">Electricity</SelectItem>
                    <SelectItem value="water">Lembaga Air Sibu</SelectItem>
                  </SelectGroup>
                  <SelectSeparator className="my-2" />
                  <SelectGroup>
                    <SelectLabel>Telecommunications</SelectLabel>
                    <SelectItem value="internet">Maxis</SelectItem>
                    <SelectItem value="mobile">iFast Capital</SelectItem>
                  </SelectGroup>
                  <SelectSeparator className="my-2" />
                  <SelectGroup>
                    <SelectLabel>Others</SelectLabel>
                    <SelectItem value="loan">Bayaran Sewa KWSP</SelectItem>
                    <SelectItem value="insurance">Manulife</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Bill Account Number */}
            <div className="space-y-2">
              <Label htmlFor="bill-account">Bill Account Number</Label>
              <Input
                id="bill-account"
                value={accountNumber}
                onChange={handleAccountNumberChange}
                placeholder="Enter bill account number"
                required
              />
              {errors.accountNumber && <p className="text-red-600 text-sm">{errors.accountNumber}</p>}
            </div>

            {/* Amount */}
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={handleAmountChange}
                placeholder="Enter amount"
                min="0.32"
                step="0.01"
                required
              />
              {errors.amount && <p className="text-red-600 text-sm">{errors.amount}</p>}
            </div>
          </CardContent>

          {/* Submit Button */}
          <CardFooter>
            <Button type="submit" className="w-full">Pay</Button>
          </CardFooter>
        </form>
      </Card>

      {/* Fraud Warning Popup */}
      {showWarning && (
        <FraudWarningPopup
          onProceed={() => {
            console.log("Bill payment proceeded despite warning")
            setShowWarning(false)
            toast({
              title: "Payment Successful",
              description: "Your bill payment has been made.",
              duration: 3000,
              variant: "default",
              className: "fixed top-4 left-1/2 transform -translate-x-1/2 max-w-[300px]"
            })
          }}
          onCancel={() => setShowWarning(false)}
        />
      )}
    </div>
  )
}
