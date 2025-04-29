
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, FileText, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Reports = () => {
  const { toast } = useToast();
  
  const plants = [
    { id: 1, name: "Usina Solar São Paulo", status: "Ativo", lastUpdate: "12/04/2023", energyGenerated: "12,345 kWh" },
    { id: 2, name: "Usina Solar Rio de Janeiro", status: "Ativo", lastUpdate: "15/04/2023", energyGenerated: "9,876 kWh" },
    { id: 3, name: "Usina Solar Brasília", status: "Manutenção", lastUpdate: "10/04/2023", energyGenerated: "5,432 kWh" },
    { id: 4, name: "Usina Solar Belo Horizonte", status: "Ativo", lastUpdate: "14/04/2023", energyGenerated: "8,765 kWh" },
    { id: 5, name: "Usina Solar Recife", status: "Inativo", lastUpdate: "01/04/2023", energyGenerated: "2,345 kWh" },
  ];

  const downloadReport = (plantName: string) => {
    toast({
      title: "Relatório em processamento",
      description: `O relatório da usina ${plantName} está sendo gerado.`,
    });
  };

  const downloadAllReports = () => {
    toast({
      title: "Relatórios em processamento",
      description: "Todos os relatórios estão sendo gerados. Você receberá uma notificação quando estiverem prontos.",
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Relatórios</h1>
        <p className="text-muted-foreground">Visualize e exporte relatórios de todas as suas usinas solares.</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Lista de Usinas</CardTitle>
            <CardDescription>
              Total de {plants.length} usinas cadastradas
            </CardDescription>
          </div>
          <Button onClick={downloadAllReports}>
            <Download className="mr-2 h-4 w-4" />
            Exportar Todos
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome da Usina</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Última Atualização</TableHead>
                <TableHead>Energia Gerada</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plants.map((plant) => (
                <TableRow key={plant.id}>
                  <TableCell className="font-medium">{plant.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div 
                        className={`w-2 h-2 rounded-full ${
                          plant.status === "Ativo" 
                            ? "bg-green-500" 
                            : plant.status === "Manutenção" 
                            ? "bg-amber-500" 
                            : "bg-red-500"
                        }`}
                      />
                      {plant.status}
                    </div>
                  </TableCell>
                  <TableCell>{plant.lastUpdate}</TableCell>
                  <TableCell>{plant.energyGenerated}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" onClick={() => downloadReport(plant.name)}>
                      <FileText className="mr-2 h-4 w-4" />
                      Exportar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Relatórios Personalizados</CardTitle>
          <CardDescription>
            Crie relatórios personalizados com filtros específicos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtrar por Período
            </Button>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtrar por Usina
            </Button>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtrar por Performance
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
