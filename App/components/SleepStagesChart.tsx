import { format } from 'date-fns';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SleepStagesChartProps {
  data: {
    time: string;
    stage: number; // 3: awake, 2: REM, 1: light sleep, 0: deep sleep
  }[];
}

export default function SleepStagesChart({ data }: SleepStagesChartProps) {
  const stageToLabel = (stage: number) => {
    switch (stage) {
      case 0: return 'Deep Sleep';
      case 1: return 'Light Sleep';
      case 2: return 'REM';
      case 3: return 'Awake';
      default: return '';
    }
  };
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-900 p-2 border border-gray-200 dark:border-gray-800 rounded shadow-sm">
          <p className="text-xs text-gray-600 dark:text-gray-400">{format(new Date(label), 'h:mm a')}</p>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
            {stageToLabel(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Sleep Stages</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Your sleep pattern from last night
        </p>
      </div>
      
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -30,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="sleepGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-800" />
            <XAxis 
              dataKey="time" 
              tickFormatter={(time) => format(new Date(time), 'h a')} 
              stroke="#9ca3af"
              className="dark:stroke-gray-500"
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              stroke="#9ca3af" 
              className="dark:stroke-gray-500"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => stageToLabel(value).split(' ')[0]} 
              domain={[0, 3]}
              ticks={[0, 1, 2, 3]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="stepAfter" 
              dataKey="stage" 
              stroke="#6366f1" 
              fillOpacity={1}
              fill="url(#sleepGradient)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-indigo-100 border-2 border-indigo-500"></div>
          <span className="text-xs text-gray-600 dark:text-gray-400">Deep</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-indigo-200 border-2 border-indigo-500"></div>
          <span className="text-xs text-gray-600 dark:text-gray-400">Light</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-indigo-300 border-2 border-indigo-500"></div>
          <span className="text-xs text-gray-600 dark:text-gray-400">REM</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-indigo-400 border-2 border-indigo-500"></div>
          <span className="text-xs text-gray-600 dark:text-gray-400">Awake</span>
        </div>
      </div>
    </div>
  );
}
