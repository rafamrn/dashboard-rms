import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
interface PlantEfficiency {
  name: string;
  efficiency: number | string;
}
interface EfficiencyBarChartProps {
  data: PlantEfficiency[];
}
const EfficiencyBarChart = ({
  data
}: EfficiencyBarChartProps) => {
  // Process data to convert efficiency strings to numbers if needed
  const processedData = data.map(item => ({
    name: item.name,
    efficiency: typeof item.efficiency === 'string' ? parseFloat(item.efficiency.toString().replace('%', '')) : item.efficiency
  }));

  // Color scheme based on efficiency values
  const getBarColor = (efficiency: number) => {
    if (efficiency >= 90) return '#10b981'; // Verde para alta eficiência
    if (efficiency >= 70) return '#ff5704'; // Cor secundária para média eficiência
    return '#ef4444'; // Vermelho para baixa eficiência
  };
  return;
};
export default EfficiencyBarChart;