
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

interface SecuritySettingsProps {
  onSave: () => void;
}

const SecuritySettings: React.FC<SecuritySettingsProps> = ({ onSave }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Segurança</CardTitle>
        <CardDescription>
          Gerencie as configurações de segurança da sua conta
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="2fa">Autenticação de dois fatores</Label>
            <p className="text-sm text-muted-foreground">Adicione uma camada extra de segurança</p>
          </div>
          <Switch id="2fa" />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="sessionTimeout">Timeout de sessão</Label>
            <p className="text-sm text-muted-foreground">Encerrar sessão automaticamente após inatividade</p>
          </div>
          <Switch id="sessionTimeout" defaultChecked />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="sessionDuration">Duração da sessão</Label>
          <select
            id="sessionDuration"
            className="w-full p-2 border border-input rounded-md bg-background"
          >
            <option value="15">15 minutos</option>
            <option value="30" selected>30 minutos</option>
            <option value="60">1 hora</option>
            <option value="120">2 horas</option>
          </select>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={onSave}>Salvar alterações</Button>
      </CardFooter>
    </Card>
  );
};

export default SecuritySettings;
