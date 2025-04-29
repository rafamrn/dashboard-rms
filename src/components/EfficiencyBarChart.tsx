
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";

interface PlantEfficiency {
  name: string;
  efficiency: number | string;
}

interface EfficiencyBarChartProps {
  data: PlantEfficiency[];
}

const EfficiencyBarChart = ({ data }: EfficiencyBarChartProps) => {
  // Process data to convert efficiency strings to numbers if needed
  const processedData = data.map(item => ({
    name: item.name,
    efficiency: typeof item.efficiency === 'string' ? 
      parseFloat(item.efficiency.toString().replace('%', '')) : 
      item.efficiency
  }));

  // Color scheme based on efficiency values
  const getBarColor = (efficiency: number) => {
    if (efficiency >= 90) return '#10b981'; // Verde para alta eficiência
    if (efficiency >= 70) return '#ff5704'; // Cor secundária para média eficiência
    return '#ef4444'; // Vermelho para baixa eficiência
  };

  return (
    <Card className="w-full card-gradient card-hover">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold text-primary">Eficiência das Usinas (%)</CardTitle>
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
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(14, 53, 74, 0.15)" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#666', fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={70}
              />
              <YAxis 
                tick={{ fill: '#666', fontSize: 12 }}
                domain={[0, 100]}
                label={{ value: 'Eficiência (%)', angle: -90, position: 'insideLeft', fill: '#666' }} 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderColor: '#0e354a',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value: number) => [`${value}%`, 'Eficiência']}
              />
              <Bar 
                dataKey="efficiency" 
                radius={[6, 6, 0, 0]}
                animationDuration={1500}
              >
                {processedData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(entry.efficiency as number)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default EfficiencyBarChart;
