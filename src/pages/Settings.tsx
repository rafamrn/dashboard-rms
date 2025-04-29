
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Palette,
  Shield,
  Database,
  ExternalLink,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { ThemeToggle } from "@/components/ThemeToggle";

const Settings = () => {
  const { toast } = useToast();

  const saveSettings = () => {
    toast({
      title: "Configurações salvas",
      description: "Suas configurações foram salvas com sucesso.",
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Configurações</h1>
        <p className="text-muted-foreground">Gerencie suas preferências e configurações do sistema</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="w-full md:w-auto grid grid-cols-2 md:grid-cols-5 md:inline-flex mb-4">
          <TabsTrigger value="general">
            <SettingsIcon className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Geral</span>
          </TabsTrigger>
          <TabsTrigger value="account">
            <User className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Conta</span>
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Notificações</span>
          </TabsTrigger>
          <TabsTrigger value="appearance">
            <Palette className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Aparência</span>
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Segurança</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
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
              <Button onClick={saveSettings}>Salvar alterações</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="appearance">
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
              <Button onClick={saveSettings}>Salvar alterações</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
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
              <Button onClick={saveSettings}>Salvar alterações</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Informações da Conta</CardTitle>
              <CardDescription>
                Gerencie suas informações pessoais
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" defaultValue="Admin" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="admin@exemplo.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" type="tel" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input id="company" defaultValue="FusionSolar" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline">Alterar senha</Button>
              <Button onClick={saveSettings}>Salvar alterações</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security">
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
              <Button onClick={saveSettings}>Salvar alterações</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

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
    </div>
  );
};

export default Settings;
