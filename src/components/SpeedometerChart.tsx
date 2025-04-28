
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  Label
} from "recharts";

const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

interface SpeedometerChartProps {
  value: number; // 0-100 percentage
  title?: string;
  size?: "sm" | "md" | "lg";
}

const SpeedometerChart = ({ value = 75, title = "Potência Instantânea", size = "md" }: SpeedometerChartProps) => {
  // Normalize value between 0-100
  const normalizedValue = Math.max(0, Math.min(100, value));
  
  // Calculate color based on value
  let color = COLORS[0]; // green
  if (normalizedValue < 30) {
    color = COLORS[1]; // yellow
  } else if (normalizedValue > 80) {
    color = COLORS[2]; // orange/red
  }

  const data = [
    { name: "Value", value: normalizedValue },
    { name: "Remaining", value: 100 - normalizedValue },
  ];

  const heightMap = {
    sm: 120,
    md: 200,
    lg: 300,
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-1">
        <div className="text-center mb-2">
          <span className="text-3xl font-bold">{normalizedValue}%</span>
        </div>
        <div style={{ height: heightMap[size] }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                startAngle={180}
                endAngle={0}
                innerRadius="70%"
                outerRadius="90%"
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                <Cell fill={color} />
                <Cell fill="#f3f4f6" />
                <Label
                  content={({ viewBox }) => {
                    if (!viewBox) return null;
                    const { cx, cy } = viewBox;
                    return (
                      <g>
                        <text
                          x={cx}
                          y={cy - 20}
                          textAnchor="middle"
                          dominantBaseline="central"
                          className="text-sm font-medium"
                        >
                          Potência
                        </text>
                        <text
                          x={cx}
                          y={cy}
                          textAnchor="middle"
                          dominantBaseline="central"
                          className="text-2xl font-bold"
                        >
                          {normalizedValue}
                        </text>
                        <text
                          x={cx}
                          y={cy + 20}
                          textAnchor="middle"
                          dominantBaseline="central"
                          className="text-xs"
                        >
                          %
                        </text>
                      </g>
                    );
                  }}
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-between text-xs text-muted-foreground px-4">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpeedometerChart;
