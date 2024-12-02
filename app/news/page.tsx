'use client'

import { useState, useEffect } from "react"
import { ReportChart } from "@/components/ReportChart"
import { ReportTable } from "@/components/ReportTable"

export default function NewsPage() {
  const [reports, setReports] = useState<{
    id: string;
    type: string;
    status: string;
    createdAt: string;
  }[]>([])
  const [dailyReports, setDailyReports] = useState<{
    date: string;
    count: number;
  }[]>([]) // For line/bar chart
  const [reportTypes, setReportTypes] = useState<{
    name: string;
    value: number;
  }[]>([]) // For pie chart

  // Simulate fetching data
  useEffect(() => {
    const fetchReports = async () => {
      // Mock data for reports
      const fetchedReports = [
        { id: "1", type: "Phishing", status: "Pending", createdAt: "2024-11-01" },
        { id: "2", type: "Identity Theft", status: "Resolved", createdAt: "2024-11-01" },
        { id: "3", type: "Phishing", status: "Pending", createdAt: "2024-11-02" },
        { id: "4", type: "Phishing", status: "Pending", createdAt: "2024-11-02" },
        { id: "5", type: "Identity Theft", status: "Pending", createdAt: "2024-11-03" },
      ]
      
      setReports(fetchedReports)

      // Generate daily report counts
      const dailyReportCounts = [
        { date: "2024-11-01", count: 2 },
        { date: "2024-11-02", count: 3 },
        { date: "2024-11-03", count: 1 },
      ]
      setDailyReports(dailyReportCounts)

      // Generate report types count
      const reportTypeCounts = [
        { name: "Phishing", value: 4 },
        { name: "Identity Theft", value: 2 },
      ]
      setReportTypes(reportTypeCounts)
    }

    fetchReports()
  }, [])

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Community News - Real-Time Dashboard</h2>
      
      {/* News tag - Dashboard */}
      <div id="news">
        {/* Render the ReportChart component */}
        <ReportChart dailyReports={dailyReports} reportTypes={reportTypes} />

        {/* Render the ReportTable component */}
        <ReportTable reports={reports} />
      </div>
    </div>
  )
}
