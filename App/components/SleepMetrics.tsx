import { Clock, Moon, Sunrise, Sunset } from 'lucide-react';

interface SleepMetricsProps {
  metrics: {
    duration: string;
    bedtime: string;
    wakeup: string;
    efficiency: number;
  };
}

export default function SleepMetrics({ metrics }: SleepMetricsProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm">
      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Sleep Details</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
            <Clock size={18} className="text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
            <p className="font-medium text-gray-800 dark:text-gray-200">{metrics.duration}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
            <Moon size={18} className="text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Bedtime</p>
            <p className="font-medium text-gray-800 dark:text-gray-200">{metrics.bedtime}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
            <Sunrise size={18} className="text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Wake Up</p>
            <p className="font-medium text-gray-800 dark:text-gray-200">{metrics.wakeup}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <Sunset size={18} className="text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Efficiency</p>
            <p className="font-medium text-gray-800 dark:text-gray-200">{metrics.efficiency}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
