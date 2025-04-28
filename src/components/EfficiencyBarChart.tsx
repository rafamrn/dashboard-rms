
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

interface PlantEfficiency {
  name: string;
  efficiency: number;
}

interface EfficiencyBarChartProps {
  data: PlantEfficiency[];
}

const EfficiencyBarChart = ({ data }: EfficiencyBarChartProps) => {
  // Process data to convert efficiency strings to numbers if needed
  const processedData = data.map(item => ({
    name: item.name,
    efficiency: typeof item.efficiency === 'string' ? 
      parseFloat(item.efficiency.replace('%', '')) : 
      item.efficiency
  }));

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Eficiência das Usinas (%)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={processedData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 70,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#999', fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={70}
              />
              <YAxis 
                tick={{ fill: '#999', fontSize: 12 }}
                domain={[0, 100]}
                label={{ value: 'Eficiência (%)', angle: -90, position: 'insideLeft', fill: '#999' }} 
              />
              <Tooltip />
              <Bar dataKey="efficiency" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default EfficiencyBarChart;
