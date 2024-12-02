'use client'

import BillForm from '@/components/bills-form'

export default function BillsPage() {
  return (
    <main className="min-h-screen bg-background py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Manage Your Bills</h1>
      <BillForm />
    </main>
  )
}
