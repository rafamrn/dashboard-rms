
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
import { ThemeToggle } from "@/components/ThemeToggle";

interface AppearanceSettingsProps {
  onSave: () => void;
}

const AppearanceSettings: React.FC<AppearanceSettingsProps> = ({ onSave }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Aparência</CardTitle>
        <CardDescription>
          Personalize a aparência do sistema
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label>Tema</Label>
            <p className="text-sm text-muted-foreground">Escolha entre tema claro ou escuro</p>
          </div>
          <ThemeToggle />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="fontSize">Tamanho da fonte</Label>
          <select
            id="fontSize"
            className="w-full p-2 border border-input rounded-md bg-background"
          >
            <option value="small">Pequena</option>
            <option value="medium" selected>Média</option>
            <option value="large">Grande</option>
          </select>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="animations">Animações</Label>
            <p className="text-sm text-muted-foreground">Habilitar animações na interface</p>
          </div>
          <Switch id="animations" defaultChecked />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="compactMode">Modo compacto</Label>
            <p className="text-sm text-muted-foreground">Reduzir espaçamento entre elementos</p>
          </div>
          <Switch id="compactMode" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={onSave}>Salvar alterações</Button>
      </CardFooter>
    </Card>
  );
};

export default AppearanceSettings;
