'use client'

import TransactionDetails from '@/components/transaction-details'
import { useParams } from 'next/navigation'

export default function TransactionPage() {
    const id = useParams().id
  return (
    <main className="min-h-screen bg-background py-8">
      <TransactionDetails id={id as string} />
    </main>
  )
}
