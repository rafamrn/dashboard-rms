import React from "react";
import StatusCard from "../components/StatusCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Cloud, Sun, Check, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import EfficiencyBarChart from "@/components/EfficiencyBarChart";
import PlantsStatusSummary from "@/components/PlantsStatusSummary";

// Mock data for plants - in a real app, this would come from an API
const plants = [{
  id: 1,
  name: "Usina Solar Alpha",
  location: "São Paulo, SP",
  status: "operational",
  energyGenerated: "1,245.8",
  efficiency: "94"
}, {
  id: 2,
  name: "Usina Solar Beta",
  location: "Rio de Janeiro, RJ",
  status: "maintenance",
  energyGenerated: "876.3",
  efficiency: "82"
}, {
  id: 3,
  name: "Usina Solar Gamma",
  location: "Belo Horizonte, MG",
  status: "operational",
  energyGenerated: "1,562.1",
  efficiency: "97"
}, {
  id: 4,
  name: "Usina Solar Delta",
  location: "Brasília, DF",
  status: "alert",
  energyGenerated: "450.7",
  efficiency: "65"
}];
const Index = () => {
  const efficiencyData = plants.map(plant => ({
    name: plant.name,
    efficiency: parseFloat(plant.efficiency)
  }));
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-500';
      case 'maintenance':
        return 'text-amber-500';
      case 'alert':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };
  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return 'Operacional';
      case 'maintenance':
        return 'Em Manutenção';
      case 'alert':
        return 'Alerta';
      default:
        return 'Desconhecido';
    }
  };
  return <div className="flex flex-col w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatusCard title="Total de Usinas" value={plants.length.toString()} unit="unidades" icon={<Sun />} />
        
        <StatusCard title="Energia Total Gerada Hoje" value="4,134.9" unit="kWh" icon={<Battery />} />
        
        <StatusCard title="Economia de CO₂ Hoje" value="2.8" unit="toneladas" icon={<Cloud />} />
      </div>
      
      <div className="mb-6">
        <PlantsStatusSummary plants={plants} />
      </div>
      
      <Card className="mb-6 card-gradient card-hover overflow-hidden">
        <CardHeader className="bg-primary/5 pb-2">
          <CardTitle className="text-lg font-bold text-primary">Minhas Usinas Solares</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-primary/20">
                  <TableHead>Nome</TableHead>
                  <TableHead className="hidden md:table-cell">Localização</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden sm:table-cell">Energia Gerada Hoje (kWh)</TableHead>
                  <TableHead className="hidden lg:table-cell">Eficiência</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {plants.map(plant => <TableRow key={plant.id} className="hover:bg-primary/5 transition-colors">
                    <TableCell>
                      <Link to={`/plant-details?id=${plant.id}`} className="text-primary hover:text-accent flex items-center font-medium">
                        {plant.name}
                      </Link>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{plant.location}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {plant.status === 'operational' ? <><Check className={`mr-1 h-4 w-4 ${getStatusColor(plant.status)}`} /> <span className={`hidden xs:inline ${getStatusColor(plant.status)}`}>{getStatusText(plant.status)}</span></> : plant.status === 'maintenance' ? <><AlertTriangle className={`mr-1 h-4 w-4 ${getStatusColor(plant.status)}`} /> <span className={`hidden xs:inline ${getStatusColor(plant.status)}`}>{getStatusText(plant.status)}</span></> : <><AlertTriangle className={`mr-1 h-4 w-4 ${getStatusColor(plant.status)}`} /> <span className={`hidden xs:inline ${getStatusColor(plant.status)}`}>{getStatusText(plant.status)}</span></>}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">{plant.energyGenerated}</TableCell>
                    <TableCell className="hidden lg:table-cell">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div className={`h-2 rounded-full ${parseFloat(plant.efficiency) >= 90 ? 'bg-green-500' : parseFloat(plant.efficiency) >= 70 ? 'bg-accent' : 'bg-red-500'}`} style={{
                        width: `${plant.efficiency}%`
                      }}></div>
                        </div>
                        <span>{plant.efficiency}%</span>
                      </div>
                    </TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 py-0 mx-0 px-[2px]">
        <EfficiencyBarChart data={efficiencyData} />
        
        <Card className="card-gradient card-hover py-0 my-0 mx-0 px-[34px]">
          <CardHeader className="bg-primary/5 pb-2 mx-0">
            <CardTitle className="text-lg font-bold text-primary">Alertas Recentes</CardTitle>
          </CardHeader>
          <CardContent className="my-0 mx-0">
            <p className="text-muted-foreground mx-0 my-0 py-0 px-0">Alertas recentes serão exibidos aqui.</p>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default Index;
