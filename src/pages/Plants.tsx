
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Plus,
  Edit,
  Trash,
  Power,
  ExternalLink,
  BarChart,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

interface Plant {
  id: number;
  name: string;
  location: string;
  capacity: string;
  status: "Ativo" | "Inativo" | "Manutenção";
  estimatedGeneration: string;
  dailyGeneration: string;
  efficiency: string;
}

const Plants = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [plants, setPlants] = useState<Plant[]>([
    {
      id: 1,
      name: "Usina Solar São Paulo",
      location: "São Paulo, SP",
      capacity: "120 kWp",
      status: "Ativo",
      estimatedGeneration: "480 kWh/dia",
      dailyGeneration: "465 kWh/dia",
      efficiency: "97%",
    },
    {
      id: 2,
      name: "Usina Solar Rio de Janeiro",
      location: "Rio de Janeiro, RJ",
      capacity: "85 kWp",
      status: "Ativo",
      estimatedGeneration: "340 kWh/dia",
      dailyGeneration: "325 kWh/dia",
      efficiency: "95.6%",
    },
    {
      id: 3,
      name: "Usina Solar Brasília",
      location: "Brasília, DF",
      capacity: "65 kWp",
      status: "Manutenção",
      estimatedGeneration: "260 kWh/dia",
      dailyGeneration: "195 kWh/dia",
      efficiency: "75%",
    },
    {
      id: 4,
      name: "Usina Solar Belo Horizonte",
      location: "Belo Horizonte, MG",
      capacity: "95 kWp",
      status: "Ativo",
      estimatedGeneration: "380 kWh/dia",
      dailyGeneration: "370 kWh/dia",
      efficiency: "97.4%",
    },
    {
      id: 5,
      name: "Usina Solar Recife",
      location: "Recife, PE",
      capacity: "45 kWp",
      status: "Inativo",
      estimatedGeneration: "180 kWh/dia",
      dailyGeneration: "0 kWh/dia",
      efficiency: "0%",
    },
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditGenerationDialogOpen, setIsEditGenerationDialogOpen] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [newGenerationValue, setNewGenerationValue] = useState("");

  const handleAddPlant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const newPlant: Plant = {
      id: plants.length + 1,
      name: formData.get("name") as string,
      location: formData.get("location") as string,
      capacity: `${formData.get("capacity")} kWp`,
      status: formData.get("status") as "Ativo" | "Inativo" | "Manutenção",
      estimatedGeneration: `${formData.get("estimatedGeneration")} kWh/dia`,
      dailyGeneration: `${formData.get("estimatedGeneration")} kWh/dia`, // Initially same as estimated
      efficiency: "100%", // Initially 100%
    };
    
    setPlants([...plants, newPlant]);
    setIsAddDialogOpen(false);
    toast({
      title: "Usina adicionada",
      description: `A usina ${newPlant.name} foi adicionada com sucesso.`,
    });
  };

  const openEditGenerationDialog = (plant: Plant) => {
    setSelectedPlant(plant);
    setNewGenerationValue(plant.dailyGeneration.replace(" kWh/dia", ""));
    setIsEditGenerationDialogOpen(true);
  };

  const handleUpdateGeneration = () => {
    if (selectedPlant) {
      const updatedPlants = plants.map(plant => {
        if (plant.id === selectedPlant.id) {
          const newValue = `${newGenerationValue} kWh/dia`;
          const estimatedValue = parseFloat(plant.estimatedGeneration.replace(" kWh/dia", ""));
          const enteredValue = parseFloat(newGenerationValue);
          const newEfficiency = estimatedValue > 0 ? `${Math.round((enteredValue / estimatedValue) * 100)}%` : "0%";
          
          return {
            ...plant,
            dailyGeneration: newValue,
            efficiency: newEfficiency
          };
        }
        return plant;
      });
      
      setPlants(updatedPlants);
      setIsEditGenerationDialogOpen(false);
      toast({
        title: "Geração atualizada",
        description: `A geração da usina ${selectedPlant.name} foi atualizada para ${newGenerationValue} kWh/dia.`,
      });
    }
  };

  const handleViewDetails = (id: number) => {
    navigate("/plant-details"); // In a real app, you would pass the ID as a parameter
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativo":
        return "bg-green-500";
      case "Inativo":
        return "bg-red-500";
      case "Manutenção":
        return "bg-amber-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Usinas</h1>
          <p className="text-muted-foreground">Gerencie todas as suas usinas solares</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nova Usina
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Adicionar Nova Usina</DialogTitle>
              <DialogDescription>
                Preencha as informações para adicionar uma nova usina solar
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddPlant} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome da Usina</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Localização</Label>
                <Input id="location" name="location" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="capacity">Capacidade (kWp)</Label>
                <Input id="capacity" name="capacity" type="number" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select name="status" defaultValue="Ativo">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ativo">Ativo</SelectItem>
                    <SelectItem value="Inativo">Inativo</SelectItem>
                    <SelectItem value="Manutenção">Manutenção</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="estimatedGeneration">Geração Estimada (kWh/dia)</Label>
                <Input id="estimatedGeneration" name="estimatedGeneration" type="number" required />
              </div>
              <DialogFooter>
                <Button type="submit">Adicionar Usina</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Todas as Usinas</CardTitle>
          <CardDescription>
            Total de {plants.length} usinas cadastradas no sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome da Usina</TableHead>
                  <TableHead>Localização</TableHead>
                  <TableHead>Capacidade</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Geração Estimada</TableHead>
                  <TableHead>Geração Atual</TableHead>
                  <TableHead>Eficiência</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {plants.map((plant) => (
                  <TableRow key={plant.id}>
                    <TableCell className="font-medium">{plant.name}</TableCell>
                    <TableCell>{plant.location}</TableCell>
                    <TableCell>{plant.capacity}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${getStatusColor(plant.status)}`} />
                        {plant.status}
                      </div>
                    </TableCell>
                    <TableCell>{plant.estimatedGeneration}</TableCell>
                    <TableCell>{plant.dailyGeneration}</TableCell>
                    <TableCell>{plant.efficiency}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => openEditGenerationDialog(plant)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleViewDetails(plant.id)}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isEditGenerationDialogOpen} onOpenChange={setIsEditGenerationDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Atualizar Geração</DialogTitle>
            <DialogDescription>
              Insira o valor de geração atual para {selectedPlant?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="generation">Geração Diária (kWh/dia)</Label>
              <Input 
                id="generation" 
                value={newGenerationValue} 
                onChange={(e) => setNewGenerationValue(e.target.value)}
                type="number" 
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleUpdateGeneration}>Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Card>
        <CardHeader>
          <CardTitle>Visão Geral da Eficiência</CardTitle>
          <CardDescription>
            Comparação entre geração estimada e geração real
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {plants.map((plant) => (
              <div key={plant.id} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{plant.name}</span>
                  <span className="text-sm">{plant.efficiency}</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      plant.status === "Inativo" 
                        ? "bg-gray-500" 
                        : parseFloat(plant.efficiency.replace("%", "")) > 95
                          ? "bg-green-500"
                          : parseFloat(plant.efficiency.replace("%", "")) > 80
                            ? "bg-amber-500"
                            : "bg-red-500"
                    }`} 
                    style={{ 
                      width: plant.status === "Inativo" 
                        ? "0%" 
                        : plant.efficiency 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Plants;
