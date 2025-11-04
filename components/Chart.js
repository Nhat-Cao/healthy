'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { fetchChartData, setPeriod } from '../store/slices/chartSlice';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 p-2 text-sm border border-gray-700">
        <p className="text-white">{label}</p>
        {payload.map((entry) => (
          <p key={entry.name} style={{ color: entry.color }}>
            {entry.name}: {entry.value.toFixed(1)}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Chart({uiContext = ''}) {
  const dispatch = useDispatch();
  const { data, period, status } = useSelector((state) => state.chart);
  const today = new Date();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchChartData(period));
    }
  }, [dispatch, period, status]);

  const periods = [
    { key: 'day', label: '日' },
    { key: 'week', label: '週' },
    { key: 'month', label: '月' },
    { key: 'year', label: '年' }
  ];

  return (
    <div className="bg-gray-900 text-white p-4">
      {uiContext === 'record' && (
        <div className="text-sm mb-4">
          BODY RECORD - {today.getFullYear()}.{(today.getMonth() + 1).toString().padStart(2, '0')}.{today.getDate().toString().padStart(2, '0')}
        </div>
      )}
      <div className={`h-${uiContext === 'record' ? "64": "96"} mb-4`}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#2d2d2d" vertical={false} />
            <XAxis 
              dataKey="label" 
              stroke="#9ca3af"
              tickMargin={10}
            />
            <YAxis 
              stroke="#9ca3af"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              name="Body Fat"
              type="monotone" 
              dataKey="bodyFat" 
              stroke="#FFCC21" 
              strokeWidth={3} 
              dot={{ r: 4 }}
            />
            <Line 
              name="Body Weight"
              type="monotone" 
              dataKey="bodyWeight" 
              stroke="#8FE9D0" 
              strokeWidth={3} 
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      { uiContext === 'record' && (<div className="flex gap-2">
        {periods.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => {
              dispatch(setPeriod(key));
              dispatch(fetchChartData(key));
            }}
            className={`px-4 py-1 text-sm rounded-full ${
              period === key 
                ? 'bg-[#FFCC21] text-white'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>)}
    </div>
  )
}
