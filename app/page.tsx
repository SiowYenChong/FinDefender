import BannerCarousel from '@/components/banner-carousel'
import AccountSummary from '@/components/account-summary'
import RecentTransactions from '@/components/recent-transactions'
import QuickActions from '@/components/quick-actions'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <BannerCarousel />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Welcome, User</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <AccountSummary />
          <RecentTransactions />
        </div>
        <QuickActions />
      </main>
    </div>
  )
}

