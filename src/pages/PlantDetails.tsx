
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import SpeedometerChart from "@/components/SpeedometerChart";

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

const PlantDetails = () => {
  const navigate = useNavigate();
  const data = generateDailyData();
  const currentPowerValue = Math.floor(Math.random() * 100); // Random value between 0-100

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
          <Button variant="outline" size="sm">
            <Calendar size={16} className="mr-2" />
            Filtrar por data
          </Button>
          <Button variant="outline" size="sm">
            <Download size={16} className="mr-2" />
            Exportar dados
          </Button>
        </div>
      </div>

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
            <CardHeader>
              <CardTitle>Produção diária (kWh) - Maio 2023</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis 
                      dataKey="day" 
                      tick={{ fill: '#999', fontSize: 12 }}
                      label={{ value: 'Dia do mês', position: 'insideBottomRight', offset: -10, fill: '#999' }} 
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
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span>Sistema operando normalmente</span>
            </div>
            
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
