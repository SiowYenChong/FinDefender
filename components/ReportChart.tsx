// components/ReportChart.tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

interface ReportChartProps {
  dailyReports: {
    date: string;
    count: number;
  }[];
  reportTypes: {
    name: string;
    value: number;
  }[];
}

export const ReportChart = ({ dailyReports, reportTypes }: ReportChartProps) => {
  return (
    <div>
      {/* Line Chart for Reports per Day */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Reports Per Day</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dailyReports}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart for Report Types */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Report Types Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={reportTypes}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              fill="#8884d8"
            >
              {reportTypes.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28'][index % 3]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
