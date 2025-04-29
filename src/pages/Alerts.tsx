
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertTriangle,
  AlertCircle,
  Info,
  Bell,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Alerts = () => {
  // Sample alerts data
  const alerts = {
    critical: [
      {
        id: 1,
        plant: "Usina Solar Brasília",
        title: "Falha no Inversor Principal",
        description: "O inversor principal apresentou falha de comunicação por mais de 24 horas.",
        date: "23/04/2023 - 09:45",
        status: "Não resolvido",
      },
      {
        id: 2,
        plant: "Usina Solar Recife",
        title: "Temperatura Alta nos Painéis",
        description: "Temperatura acima do limite de segurança detectada em 3 painéis.",
        date: "22/04/2023 - 14:17",
        status: "Em análise",
      },
    ],
    warning: [
      {
        id: 3,
        plant: "Usina Solar São Paulo",
        title: "Queda na Eficiência",
        description: "Redução de 15% na eficiência nos últimos 3 dias.",
        date: "21/04/2023 - 10:30",
        status: "Em análise",
      },
      {
        id: 4,
        plant: "Usina Solar Rio de Janeiro",
        title: "Painéis com Sujeira",
        description: "Detectada possível sujeira nos painéis do setor B.",
        date: "20/04/2023 - 16:23",
        status: "Agendado",
      },
      {
        id: 5,
        plant: "Usina Solar Belo Horizonte",
        title: "Bateria com Carga Baixa",
        description: "Sistema de baterias com carga abaixo do recomendado.",
        date: "19/04/2023 - 08:12",
        status: "Não resolvido",
      },
    ],
    info: [
      {
        id: 6,
        plant: "Usina Solar São Paulo",
        title: "Manutenção Programada",
        description: "Manutenção preventiva programada para 05/05/2023.",
        date: "18/04/2023 - 11:05",
        status: "Agendado",
      },
      {
        id: 7,
        plant: "Usina Solar Rio de Janeiro",
        title: "Atualização de Firmware",
        description: "Nova atualização de firmware disponível para os inversores.",
        date: "17/04/2023 - 14:40",
        status: "Pendente",
      },
    ],
    resolved: [
      {
        id: 8,
        plant: "Usina Solar Belo Horizonte",
        title: "Falha no Sensor de Temperatura",
        description: "Sensor de temperatura com leituras inconsistentes.",
        date: "15/04/2023 - 09:20",
        resolvedDate: "16/04/2023 - 13:45",
        status: "Resolvido",
      },
      {
        id: 9,
        plant: "Usina Solar São Paulo",
        title: "Conexão de Rede Instável",
        description: "Instabilidade na conexão de rede detectada.",
        date: "14/04/2023 - 16:10",
        resolvedDate: "15/04/2023 - 10:30",
        status: "Resolvido",
      },
    ],
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "critical":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />;
      case "resolved":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      default:
        return <Bell className="h-5 w-5" />;
    }
  };

  const renderAlertCards = (alertList: any[], type: string) => {
    return alertList.map((alert) => (
      <Card key={alert.id} className="mb-4">
        <CardHeader className="flex flex-row items-center gap-2">
          {getAlertIcon(type)}
          <div>
            <CardTitle className="text-lg">{alert.title}</CardTitle>
            <CardDescription>{alert.plant}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p>{alert.description}</p>
          <div className="mt-2 text-sm text-muted-foreground">
            <p>Criado em: {alert.date}</p>
            {alert.resolvedDate && <p>Resolvido em: {alert.resolvedDate}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="text-sm">
            Status: <span className={type === "resolved" ? "text-green-500" : "text-amber-500"}>{alert.status}</span>
          </div>
          {type !== "resolved" && (
            <Button size="sm" variant="outline">
              Marcar como resolvido
            </Button>
          )}
        </CardFooter>
      </Card>
    ));
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Alertas</h1>
          <p className="text-muted-foreground">Acompanhe todos os alertas das suas usinas</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filtrar por usina" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as usinas</SelectItem>
              <SelectItem value="sp">Usina Solar São Paulo</SelectItem>
              <SelectItem value="rj">Usina Solar Rio de Janeiro</SelectItem>
              <SelectItem value="bsb">Usina Solar Brasília</SelectItem>
              <SelectItem value="bh">Usina Solar Belo Horizonte</SelectItem>
              <SelectItem value="rec">Usina Solar Recife</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Bell className="mr-2 h-4 w-4" />
            Configurar Notificações
          </Button>
        </div>
      </div>

      <div className="alert-summary flex flex-wrap gap-4 mb-4">
        <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <span>Alertas Críticos</span>
            </div>
            <span className="text-xl font-bold">{alerts.critical.length}</span>
          </CardContent>
        </Card>
        <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              <span>Alertas</span>
            </div>
            <span className="text-xl font-bold">{alerts.warning.length}</span>
          </CardContent>
        </Card>
        <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-500" />
              <span>Informações</span>
            </div>
            <span className="text-xl font-bold">{alerts.info.length}</span>
          </CardContent>
        </Card>
        <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Resolvidos</span>
            </div>
            <span className="text-xl font-bold">{alerts.resolved.length}</span>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full md:w-auto grid grid-cols-2 md:grid-cols-5 md:inline-flex">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="critical">Críticos</TabsTrigger>
          <TabsTrigger value="warning">Alertas</TabsTrigger>
          <TabsTrigger value="info">Informações</TabsTrigger>
          <TabsTrigger value="resolved">Resolvidos</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <div className="space-y-4">
            {renderAlertCards(alerts.critical, "critical")}
            {renderAlertCards(alerts.warning, "warning")}
            {renderAlertCards(alerts.info, "info")}
            {renderAlertCards(alerts.resolved, "resolved")}
          </div>
        </TabsContent>
        <TabsContent value="critical" className="mt-4">
          <div className="space-y-4">
            {renderAlertCards(alerts.critical, "critical")}
          </div>
        </TabsContent>
        <TabsContent value="warning" className="mt-4">
          <div className="space-y-4">
            {renderAlertCards(alerts.warning, "warning")}
          </div>
        </TabsContent>
        <TabsContent value="info" className="mt-4">
          <div className="space-y-4">
            {renderAlertCards(alerts.info, "info")}
          </div>
        </TabsContent>
        <TabsContent value="resolved" className="mt-4">
          <div className="space-y-4">
            {renderAlertCards(alerts.resolved, "resolved")}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Alerts;
