
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check, AlertTriangle, X } from "lucide-react";

interface PlantsStatusSummaryProps {
  plants: Array<{
    id: number;
    name: string;
    status: string;
  }>;
}

const PlantsStatusSummary: React.FC<PlantsStatusSummaryProps> = ({ plants }) => {
  const operationalCount = plants.filter(plant => plant.status === 'operational').length;
  const maintenanceCount = plants.filter(plant => plant.status === 'maintenance').length;
  const alertCount = plants.filter(plant => plant.status === 'alert').length;
  
  return (
    <Card className="overflow-hidden card-gradient card-hover">
      <CardContent className="p-4">
        <div className="flex flex-wrap justify-around gap-4 py-2">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-green-500/10">
              <Check className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Online</p>
              <p className="text-lg font-bold">{operationalCount}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-amber-500/10">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Em Alerta</p>
              <p className="text-lg font-bold">{alertCount}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-red-500/10">
              <X className="h-5 w-5 text-red-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Offline</p>
              <p className="text-lg font-bold">{maintenanceCount}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlantsStatusSummary;
