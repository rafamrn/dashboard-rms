
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeviceInfo = () => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-medium">Informações do dispositivo</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center text-center">
          <div className="bg-secondary rounded-full p-3 mb-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="30" 
              height="30" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-primary"
            >
              <path d="M4 13h5"></path>
              <path d="M9 17H4"></path>
              <path d="M4 9h5"></path>
              <path d="M18 13v-1.4a1 1 0 0 0-1.5-.86l-.86.52a1 1 0 0 1-1.5-.86v-2.4a1 1 0 0 0-1.5-.86l-.86.52a1 1 0 0 1-1.5-.86V4"></path>
              <path d="m18 2-1.5 2L18 6"></path>
              <path d="M18 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"></path>
            </svg>
          </div>
          <p className="text-xs text-muted-foreground mb-1">Capacidade PV instalada</p>
          <div className="flex items-baseline justify-center">
            <span className="text-xl font-bold">0.00</span>
            <span className="text-xs ml-1 text-muted-foreground">Wp</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="bg-secondary rounded-full p-3 mb-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="30" 
              height="30" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-primary"
            >
              <path d="M14 7h.01"></path>
              <path d="M7 7h.01"></path>
              <path d="M7 14h.01"></path>
              <path d="M14 14h.01"></path>
              <path d="M4 4v16h16V4z"></path>
            </svg>
          </div>
          <p className="text-xs text-muted-foreground mb-1">Capacidade do ESS instalada</p>
          <div className="flex items-baseline justify-center">
            <span className="text-xl font-bold">5.42</span>
            <span className="text-xs ml-1 text-muted-foreground">kWh</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeviceInfo;
