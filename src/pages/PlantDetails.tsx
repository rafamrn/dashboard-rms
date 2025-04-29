
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Calendar, BarChart2, LineChart as LineChartIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import SpeedometerChart from "@/components/SpeedometerChart";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const generateDailyData = () => {
  const data = [];
  for (let i = 1; i <= 30; i++) {
    const value = Math.round(Math.random() * 100 + 400 + (i % 7 === 0 ? -200 : 0));
    data.push({
      day: i,
      value: value
    });
  }
  return data;
};

const generateMonthlyData = () => {
  const data = [];
  for (let i = 1; i <= 12; i++) {
    data.push({
      month: i,
      value: Math.round(Math.random() * 3000 + 10000)
    });
  }
  return data;
};

const generateYearlyData = () => {
  const data = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear - 5; i <= currentYear; i++) {
    data.push({
      year: i,
      value: Math.round(Math.random() * 40000 + 120000)
    });
  }
  return data;
};

const PlantDetails = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [viewMode, setViewMode] = useState<"day" | "month" | "year">("day");
  const [currentPowerValue] = useState(Math.floor(Math.random() * 100)); // Random value between 0-100
  
  // Data for different time periods
  const dailyData = generateDailyData();
  const monthlyData = generateMonthlyData();
  const yearlyData = generateYearlyData();
  
  // Select the correct data based on viewMode
  const chartData = viewMode === "day" 
    ? dailyData 
    : viewMode === "month" 
      ? monthlyData 
      : yearlyData;
  
  // Get the correct label for X axis
  const getXAxisLabel = () => {
    switch(viewMode) {
      case "day": return "Dia do mês";
      case "month": return "Mês";
      case "year": return "Ano";
    }
  };
  
  // Get the correct dataKey for X axis
  const getXAxisDataKey = () => {
    switch(viewMode) {
      case "day": return "day";
      case "month": return "month";
      case "year": return "year";
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-xl font-bold">Detalhes da Usina Solar</h1>
        </div>
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                <Calendar size={16} className="mr-2" />
                {date ? format(date, "dd/MM/yyyy") : "Filtrar por data"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
          <Button variant="outline" size="sm">
            <Download size={16} className="mr-2" />
            Exportar dados
          </Button>
        </div>
      </div>
      
      {/* System status at the top */}
      <Card className="mb-4">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span className="text-lg font-medium">Sistema operando normalmente</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Atualizado em: {format(new Date(), "dd/MM/yyyy HH:mm")}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total de energia gerada</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,345.67 kWh</div>
            <p className="text-xs text-muted-foreground">+12.3% comparado ao mês anterior</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Economia estimada</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">¥ 1,234.56</div>
            <p className="text-xs text-muted-foreground">Equivalente a 2.4 toneladas de CO₂ evitadas</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Eficiência do sistema</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96.5%</div>
            <p className="text-xs text-muted-foreground">Acima da média esperada de 93%</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="lg:col-span-2">
          <Card className="mb-4 lg:mb-0">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>
                {viewMode === "day" 
                  ? "Produção diária (kWh) - Maio 2023" 
                  : viewMode === "month" 
                    ? "Produção mensal (kWh) - 2023" 
                    : "Produção anual (kWh) - 2018-2023"}
              </CardTitle>
              <div className="flex space-x-2">
                <Button 
                  variant={viewMode === "day" ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setViewMode("day")}
                >
                  <BarChart2 size={16} className="mr-1" /> Dia
                </Button>
                <Button 
                  variant={viewMode === "month" ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setViewMode("month")}
                >
                  <BarChart2 size={16} className="mr-1" /> Mês
                </Button>
                <Button 
                  variant={viewMode === "year" ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setViewMode("year")}
                >
                  <LineChartIcon size={16} className="mr-1" /> Ano
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={chartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis 
                      dataKey={getXAxisDataKey()} 
                      tick={{ fill: '#999', fontSize: 12 }}
                      label={{ value: getXAxisLabel(), position: 'insideBottomRight', offset: -10, fill: '#999' }} 
                    />
                    <YAxis 
                      tick={{ fill: '#999', fontSize: 12 }}
                      label={{ value: 'kWh', angle: -90, position: 'insideLeft', fill: '#999' }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#00b0ff" 
                      strokeWidth={2} 
                      dot={{ r: 3 }} 
                      activeDot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <SpeedometerChart value={currentPowerValue} title="Potência Instantânea" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Informações do sistema</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tipo de instalação</span>
              <span>Industrial</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Painéis instalados</span>
              <span>120 unidades</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Capacidade instalada</span>
              <span>45 kWp</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Data de instalação</span>
              <span>15/01/2023</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Último serviço</span>
              <span>05/04/2023</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Estado atual do sistema</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-muted-foreground">Carga da bateria</span>
                  <span className="text-sm">76%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '76%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-muted-foreground">Eficiência atual</span>
                  <span className="text-sm">94%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-muted-foreground">Temperatura</span>
                  <span className="text-sm">37°C</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlantDetails;
