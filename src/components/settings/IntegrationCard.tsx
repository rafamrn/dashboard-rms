
import React from "react";
import { Button } from "@/components/ui/button";
import { Database, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const IntegrationCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Integração de dados</CardTitle>
        <CardDescription>
          Configurar a integração com outras plataformas
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            <div>
              <p className="font-medium">API de Dados</p>
              <p className="text-sm text-muted-foreground">Conectar-se à API externa de dados meteorológicos</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Configurar
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            <div>
              <p className="font-medium">Exportação Automática</p>
              <p className="text-sm text-muted-foreground">Configurar exportação automática de dados para CSV/Excel</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Configurar
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default IntegrationCard;
