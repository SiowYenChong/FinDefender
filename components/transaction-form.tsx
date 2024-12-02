'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import FraudWarningPopup from "@/components/fraud-warning-popup"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TransactionForm() {
  const [showWarning, setShowWarning] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState("")
  const [recipient, setRecipient] = useState("")
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
  const [errors, setErrors] = useState({ recipient: "", description: "" })
  const { toast } = useToast()

  const validateRecipient = (value: string) => {
    if (!value) {
      return "This field is required."
    } else if (!/^\d{6,12}$/.test(value)) {
      return "Invalid account number. Must be 6-12 digits."
    }
    return ""
  }

  const validateDescription = (value: string) => {
    if (!value) {
      return "This field is required."
    }
    return ""
  }

  const handleRecipientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setRecipient(value)
    setErrors((prevErrors) => ({
      ...prevErrors,
      recipient: validateRecipient(value),
    }))
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setDescription(value)
    setErrors((prevErrors) => ({
      ...prevErrors,
      description: validateDescription(value),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch('http://localhost:5000/transaction', {
      method: 'POST',
      body: JSON.stringify({ debitor_account_number: 12312981009 }),
    })

    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">Make a Transaction</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="provider">Select Bank/Service Provider</Label>
              <Select onValueChange={setSelectedProvider} value={selectedProvider}>
                <SelectTrigger id="provider" className="w-full focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  <SelectValue placeholder="Select a bank or service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Banks</SelectLabel>
                    <SelectItem value="PBB">Public Bank</SelectItem>
                    <SelectItem value="MBB">Maybank</SelectItem>
                    <SelectItem value="HSBC">HSBC</SelectItem>
                    <SelectItem value="CIMB">CIMB</SelectItem>
                    <SelectItem value="HLB">Hong Leong Bank</SelectItem>
                  </SelectGroup>
                  <SelectSeparator className="my-2" />
                  <SelectGroup>
                    <SelectLabel>Other Services</SelectLabel>
                    <SelectItem value="TnG">Touch n Go</SelectItem>
                    <SelectItem value="Grabpay">GrabPay</SelectItem>
                    <SelectItem value="Shopee">ShopeePay</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient Account Number</Label>
              <Input
                id="recipient"
                value={recipient}
                onChange={handleRecipientChange}
                placeholder="Enter recipient's account number"
                required
              />
              {errors.recipient && <p className="text-red-600 text-sm">{errors.recipient}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                min="0"
                step="0.01"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Enter transaction description"
              />
              {errors.description && <p className="text-red-600 text-sm">{errors.description}</p>}
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Send Money</Button>
          </CardFooter>
        </form>
      </Card>
      {showWarning && (
        <FraudWarningPopup 
          onProceed={() => {
            console.log("Transaction proceeded despite warning")
            setShowWarning(false)
            toast({
              title: "Transaction Completed", 
              description: "Your transaction has been made.",
              duration: 3000,
              variant: "destructive",
              className: "fixed top-4 left-1/2 transform -translate-x-1/2 max-w-[300px]"
            })
          }}
          onCancel={() => setShowWarning(false)}
        />
      )}
    </div>
  )
}
