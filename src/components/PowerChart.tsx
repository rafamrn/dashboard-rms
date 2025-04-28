
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const generateHourlyData = () => {
  const data = [];
  for (let i = 0; i < 24; i++) {
    const hour = i.toString().padStart(2, '0') + ":00";
    const solarValue = i > 5 && i < 20 ? Math.sin((i - 6) * Math.PI / 13) * 5 : 0;
    
    data.push({
      hour,
      solar: solarValue,
      grid: Math.random() * 2,
      battery: i > 10 && i < 16 ? -1 : Math.random() * 1.5,
      consumption: 1 + Math.random()
    });
  }
  return data;
};

const PowerChart = () => {
  const data = generateHourlyData();

  return (
    <Card className="col-span-2 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-medium">Visão geral da energia</CardTitle>
        <Tabs defaultValue="dia">
          <TabsList className="bg-secondary h-7 text-xs">
            <TabsTrigger value="dia" className="text-xs px-2 py-0.5">Dia</TabsTrigger>
            <TabsTrigger value="mes" className="text-xs px-2 py-0.5">Mês</TabsTrigger>
            <TabsTrigger value="ano" className="text-xs px-2 py-0.5">Ano</TabsTrigger>
            <TabsTrigger value="tempo" className="text-xs px-2 py-0.5">Tempo personaliz.</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="px-1">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="hour" tick={{ fill: '#999', fontSize: 10 }} />
              <YAxis tick={{ fill: '#999', fontSize: 10 }} />
              <Line
                type="monotone"
                dataKey="solar"
                stroke="#10b981"
                strokeWidth={2}
                dot={false}
                name="Saída PV"
              />
              <Line
                type="monotone"
                dataKey="grid"
                stroke="#60a5fa"
                strokeWidth={2}
                dot={false}
                name="Energia da rede elétrica"
              />
              <Line
                type="monotone"
                dataKey="battery"
                stroke="#8b5cf6"
                strokeWidth={2}
                dot={false}
                name="Energia da bateria"
              />
              <Line
                type="monotone"
                dataKey="consumption"
                stroke="#f59e0b"
                strokeWidth={2}
                dot={false}
                name="Potência de consumo"
              />
              <Legend 
                layout="horizontal" 
                verticalAlign="bottom" 
                align="center"
                wrapperStyle={{fontSize: "10px", paddingTop: "10px"}}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PowerChart;
