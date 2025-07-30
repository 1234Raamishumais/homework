import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SleepWeekChartProps {
  data: {
    day: string;
    hours: number;
    quality: number;
  }[];
}

export default function SleepWeekChart({ data }: SleepWeekChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-900 p-2 border border-gray-200 dark:border-gray-800 rounded shadow-sm">
          <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{label}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {payload[0].value} hours
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Quality: {payload[1].payload.quality}/100
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Weekly Sleep</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Your sleep duration over the past week
        </p>
      </div>
      
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -25,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-800" />
            <XAxis 
              dataKey="day" 
              stroke="#9ca3af"
              className="dark:stroke-gray-500"
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              stroke="#9ca3af" 
              className="dark:stroke-gray-500"
              tick={{ fontSize: 12 }}
              domain={[0, 10]}
              tickCount={6}
              label={{ 
                value: 'Hours',
                angle: -90,
                position: 'insideLeft',
                style: { textAnchor: 'middle', fill: '#9ca3af', fontSize: 12 }
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="hours" 
              fill="url(#barGradient)" 
              radius={[4, 4, 0, 0]}
              barSize={30}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
