'use client'

import TransactionForm from '@/components/transaction-form'

export default function TransactionPage() {
  return (
    <main className="min-h-screen bg-background py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Make a Transaction</h1>
      <TransactionForm />
    </main>
  )
}

