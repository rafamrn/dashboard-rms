
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface NotificationSettingsProps {
  onSave: () => void;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({ onSave }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notificações</CardTitle>
        <CardDescription>
          Configure suas preferências de notificações
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="emailAlerts">Alertas por email</Label>
            <p className="text-sm text-muted-foreground">Receber alertas importantes por email</p>
          </div>
          <Switch id="emailAlerts" defaultChecked />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="pushNotifications">Notificações push</Label>
            <p className="text-sm text-muted-foreground">Receber notificações push no navegador</p>
          </div>
          <Switch id="pushNotifications" defaultChecked />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="smsAlerts">Alertas por SMS</Label>
            <p className="text-sm text-muted-foreground">Receber alertas críticos por SMS</p>
          </div>
          <Switch id="smsAlerts" />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="weeklyReport">Relatório semanal</Label>
            <p className="text-sm text-muted-foreground">Receber um resumo semanal por email</p>
          </div>
          <Switch id="weeklyReport" defaultChecked />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={onSave}>Salvar alterações</Button>
      </CardFooter>
    </Card>
  );
};

export default NotificationSettings;
