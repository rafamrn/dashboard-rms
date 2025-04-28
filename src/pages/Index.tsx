
import React from "react";
import StatusCard from "../components/StatusCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Cloud, Sun, Check, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import EfficiencyBarChart from "@/components/EfficiencyBarChart";

// Mock data for plants - in a real app, this would come from an API
const plants = [
  {
    id: 1,
    name: "Usina Solar Alpha",
    location: "São Paulo, SP",
    status: "operational",
    energyGenerated: "1,245.8",
    efficiency: "94",
  },
  {
    id: 2,
    name: "Usina Solar Beta",
    location: "Rio de Janeiro, RJ",
    status: "maintenance",
    energyGenerated: "876.3",
    efficiency: "82",
  },
  {
    id: 3,
    name: "Usina Solar Gamma",
    location: "Belo Horizonte, MG",
    status: "operational",
    energyGenerated: "1,562.1",
    efficiency: "97",
  },
  {
    id: 4,
    name: "Usina Solar Delta",
    location: "Brasília, DF",
    status: "alert",
    energyGenerated: "450.7",
    efficiency: "65",
  },
];

const Index = () => {
  const efficiencyData = plants.map(plant => ({
    name: plant.name,
    efficiency: parseFloat(plant.efficiency)
  }));

  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <StatusCard 
          title="Total de Usinas" 
          value={plants.length.toString()} 
          unit="unidades" 
          icon={<Sun />}
        />
        
        <StatusCard 
          title="Energia Total Gerada Hoje" 
          value="4,134.9" 
          unit="kWh" 
          icon={<Battery />}
        />
        
        <StatusCard 
          title="Economia de CO₂ Hoje" 
          value="2.8" 
          unit="toneladas" 
          icon={<Cloud />}
        />
      </div>
      
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Minhas Usinas Solares</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead className="hidden md:table-cell">Localização</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden sm:table-cell">Energia Gerada Hoje (kWh)</TableHead>
                  <TableHead className="hidden lg:table-cell">Eficiência</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {plants.map((plant) => (
                  <TableRow key={plant.id}>
                    <TableCell>
                      <Link 
                        to={`/plant-details?id=${plant.id}`} 
                        className="text-primary hover:underline flex items-center"
                      >
                        {plant.name}
                      </Link>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{plant.location}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {plant.status === 'operational' ? (
                          <><Check className="mr-1 h-4 w-4 text-green-500" /> <span className="hidden xs:inline">Operacional</span></>
                        ) : plant.status === 'maintenance' ? (
                          <><AlertTriangle className="mr-1 h-4 w-4 text-yellow-500" /> <span className="hidden xs:inline">Em Manutenção</span></>
                        ) : (
                          <><AlertTriangle className="mr-1 h-4 w-4 text-red-500" /> <span className="hidden xs:inline">Alerta</span></>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">{plant.energyGenerated}</TableCell>
                    <TableCell className="hidden lg:table-cell">{plant.efficiency}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <EfficiencyBarChart data={efficiencyData} />
        
        <Card>
          <CardHeader>
            <CardTitle>Alertas Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Alertas recentes serão exibidos aqui.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
