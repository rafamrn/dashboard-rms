import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings as SettingsIcon, User, Bell, Palette, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Import the component modules
import GeneralSettings from "@/components/settings/GeneralSettings";
import AppearanceSettings from "@/components/settings/AppearanceSettings";
import NotificationSettings from "@/components/settings/NotificationSettings";
import AccountSettings from "@/components/settings/AccountSettings";
import SecuritySettings from "@/components/settings/SecuritySettings";
import IntegrationCard from "@/components/settings/IntegrationCard";
const Settings = () => {
  const {
    toast
  } = useToast();
  const saveSettings = () => {
    toast({
      title: "Configurações salvas",
      description: "Suas configurações foram salvas com sucesso."
    });
  };
  return <div className="flex flex-col gap-6">
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
          <GeneralSettings onSave={saveSettings} />
        </TabsContent>

        <TabsContent value="appearance">
          <AppearanceSettings onSave={saveSettings} />
        </TabsContent>

        <TabsContent value="notifications">
          <NotificationSettings onSave={saveSettings} />
        </TabsContent>

        <TabsContent value="account">
          <AccountSettings onSave={saveSettings} />
        </TabsContent>

        <TabsContent value="security">
          <SecuritySettings onSave={saveSettings} />
        </TabsContent>
      </Tabs>

      <IntegrationCard />
    </div>;
};
export default Settings;