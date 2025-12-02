'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ProductivityChart() {
  const data = [
    { day: 'Mon', tasks: 8 },
    { day: 'Tue', tasks: 12 },
    { day: 'Wed', tasks: 10 },
    { day: 'Thu', tasks: 15 },
    { day: 'Fri', tasks: 13 },
    { day: 'Sat', tasks: 6 },
    { day: 'Sun', tasks: 4 },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Weekly Productivity</h2>
      
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line 
            type="monotone"
            dataKey="tasks"
            stroke="#0EA5E9"
            strokeWidth={2}
            dot={{ fill: '#0EA5E9', r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
