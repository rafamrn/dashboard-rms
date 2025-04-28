
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const generateRevenueData = () => {
  const data = [];
  for (let i = 0; i < 24; i = i + 3) {
    const hour = i.toString().padStart(2, '0') + ":00";
    data.push({
      hour,
      ess: Math.random() * 0.5,
      pv: Math.random() * 0.8
    });
  }
  return data;
};

const RevenueChart = () => {
  const data = generateRevenueData();

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-medium">Receita</CardTitle>
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
        <Card className="bg-background mb-3 p-2">
          <div className="text-xs text-muted-foreground mb-1">Receita total</div>
          <div className="text-lg font-bold">0.00 ¥</div>
        </Card>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="hour" tick={{ fill: '#999', fontSize: 10 }} />
              <YAxis tick={{ fill: '#999', fontSize: 10 }} />
              <Bar dataKey="ess" fill="#fbbf24" name="Benefício do ESS" />
              <Bar dataKey="pv" fill="#10b981" name="Benefício PV" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
