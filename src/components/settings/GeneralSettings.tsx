
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

interface GeneralSettingsProps {
  onSave: () => void;
}

const GeneralSettings: React.FC<GeneralSettingsProps> = ({ onSave }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Configurações Gerais</CardTitle>
        <CardDescription>
          Configure as preferências gerais do sistema
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="language">Idioma</Label>
          <select
            id="language"
            className="w-full p-2 border border-input rounded-md bg-background"
          >
            <option value="pt-BR">Português (Brasil)</option>
            <option value="en-US">English (US)</option>
            <option value="es-ES">Español</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="timezone">Fuso Horário</Label>
          <select
            id="timezone"
            className="w-full p-2 border border-input rounded-md bg-background"
          >
            <option value="America/Sao_Paulo">America/Sao_Paulo (GMT-3)</option>
            <option value="America/New_York">America/New_York (GMT-5)</option>
            <option value="Europe/London">Europe/London (GMT+0)</option>
            <option value="Asia/Tokyo">Asia/Tokyo (GMT+9)</option>
          </select>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="autosave">Salvar automaticamente</Label>
            <p className="text-sm text-muted-foreground">Salvar alterações automaticamente</p>
          </div>
          <Switch id="autosave" defaultChecked />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="updates">Verificar atualizações</Label>
            <p className="text-sm text-muted-foreground">Verificar atualizações do sistema automaticamente</p>
          </div>
          <Switch id="updates" defaultChecked />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={onSave}>Salvar alterações</Button>
      </CardFooter>
    </Card>
  );
};

export default GeneralSettings;
