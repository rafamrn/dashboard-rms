
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Maximize, Minimize } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const NavBar = () => {
  const navigate = useNavigate();
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullScreen(true);
      }).catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullScreen(false);
        }).catch(err => {
          console.error(`Error attempting to exit fullscreen: ${err.message}`);
        });
      }
    }
  };

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
        <ThemeToggle />
        <Button variant="ghost" size="icon" onClick={handleSettingsClick} aria-label="Settings">
          <Settings size={18} />
        </Button>
        <Button variant="ghost" size="icon" onClick={toggleFullScreen} aria-label="Toggle fullscreen">
          {isFullScreen ? <Minimize size={18} /> : <Maximize size={18} />}
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
