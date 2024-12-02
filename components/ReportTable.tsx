// components/ReportTable.tsx
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"

interface Report {
  id: string
  type: string
  status: string
  createdAt: string
}

interface ReportTableProps {
  reports: Report[];
}

export const ReportTable = ({ reports }: ReportTableProps) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Latest Reports</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Report ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports.map((report) => (
            <TableRow key={report.id}>
              <TableCell>{report.id}</TableCell>
              <TableCell>{report.type}</TableCell>
              <TableCell>{report.status}</TableCell>
              <TableCell>{report.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
