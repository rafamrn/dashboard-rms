
import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Maximize } from "lucide-react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-2 bg-background border-b border-border">
      <div className="flex items-center gap-2">
        <div className="font-bold text-xl text-primary">FusionSolar</div>
      </div>

      <div className="flex-grow flex justify-center">
        <Tabs defaultValue="visao-geral">
          <TabsList className="bg-secondary">
            <TabsTrigger value="visao-geral">Visão geral</TabsTrigger>
            <TabsTrigger value="pv">PV</TabsTrigger>
            <TabsTrigger value="ess">ESS</TabsTrigger>
            <TabsTrigger value="carregador">Carregador</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="text-2xl font-bold">15:16:31</div>
          <div className="text-xs text-muted-foreground">20/05/2023</div>
        </div>
        <Button variant="ghost" size="icon">
          <Settings size={18} />
        </Button>
        <Button variant="ghost" size="icon">
          <Maximize size={18} />
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
