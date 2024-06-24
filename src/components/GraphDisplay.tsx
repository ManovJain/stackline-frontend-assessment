import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface GraphDisplayProps {
  data: { weekEnding: string, retailSales: number, wholesaleSales: number }[];
}

const GraphDisplay: React.FC<GraphDisplayProps> = ({ data }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h3 className="text-lg font-semibold mb-4">Retail Sales</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis
              dataKey="weekEnding"
              tickFormatter={(tick) => new Date(tick).toLocaleDateString()}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              tickFormatter={(tick) => tick.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              formatter={(value: number) => value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              labelFormatter={(label: string) => new Date(label).toLocaleDateString()}
            />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="retailSales" stroke="#8884d8" />
            <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GraphDisplay;
