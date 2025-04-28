
import React from "react";
import NavBar from "../components/NavBar";
import StatusCard from "../components/StatusCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Cloud, Sun, Check, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

// Mock data for plants - in a real app, this would come from an API
const plants = [
  {
    id: 1,
    name: "Usina Solar Alpha",
    location: "São Paulo, SP",
    status: "operational",
    energyGenerated: "1,245.8",
    efficiency: "94%",
  },
  {
    id: 2,
    name: "Usina Solar Beta",
    location: "Rio de Janeiro, RJ",
    status: "maintenance",
    energyGenerated: "876.3",
    efficiency: "82%",
  },
  {
    id: 3,
    name: "Usina Solar Gamma",
    location: "Belo Horizonte, MG",
    status: "operational",
    energyGenerated: "1,562.1",
    efficiency: "97%",
  },
  {
    id: 4,
    name: "Usina Solar Delta",
    location: "Brasília, DF",
    status: "alert",
    energyGenerated: "450.7",
    efficiency: "65%",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <NavBar />
      
      <div className="flex-1 p-4 overflow-auto">
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
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Localização</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Energia Gerada Hoje (kWh)</TableHead>
                  <TableHead>Eficiência</TableHead>
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
                    <TableCell>{plant.location}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {plant.status === 'operational' ? (
                          <><Check className="mr-1 h-4 w-4 text-green-500" /> Operacional</>
                        ) : plant.status === 'maintenance' ? (
                          <><AlertTriangle className="mr-1 h-4 w-4 text-yellow-500" /> Em Manutenção</>
                        ) : (
                          <><AlertTriangle className="mr-1 h-4 w-4 text-red-500" /> Alerta</>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{plant.energyGenerated}</TableCell>
                    <TableCell>{plant.efficiency}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Visão Geral de Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Gráfico de performance por usina será exibido aqui.</p>
            </CardContent>
          </Card>
          
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
    </div>
  );
};

export default Index;
