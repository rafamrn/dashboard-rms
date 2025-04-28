
import React from "react";
import { Card } from "@/components/ui/card";

const SystemSchema = () => {
  return (
    <Card className="col-span-2 h-full flex items-center justify-center bg-card p-4 relative">
      <div className="w-full h-full relative flex items-center justify-center">
        <img 
          src="/lovable-uploads/5e62c14e-c4fd-4ec9-8e6c-e7746d4b8248.png" 
          alt="Sistema solar" 
          className="opacity-30 max-w-full max-h-full object-contain"
        />
        
        {/* Overlays for statistics */}
        <div className="absolute left-1/3 top-1/4 bg-card/70 backdrop-blur-sm border border-border p-2 rounded-md">
          <div className="text-xs text-muted-foreground">Potência de consumo</div>
          <div className="flex items-baseline">
            <span className="text-lg font-bold">1,000</span>
            <span className="text-xs ml-1 text-muted-foreground">kW</span>
          </div>
        </div>
        
        <div className="absolute right-1/3 top-1/4 bg-card/70 backdrop-blur-sm border border-border p-2 rounded-md">
          <div className="text-xs text-muted-foreground">Potência instantânea</div>
          <div className="flex items-baseline">
            <span className="text-lg font-bold">0,000</span>
            <span className="text-xs ml-1 text-muted-foreground">kW</span>
          </div>
        </div>
        
        <div className="absolute left-1/3 bottom-1/4 bg-card/70 backdrop-blur-sm border border-border p-2 rounded-md">
          <div className="text-xs text-muted-foreground">Potência instantânea</div>
          <div className="flex items-baseline">
            <span className="text-lg font-bold">4,000</span>
            <span className="text-xs ml-1 text-muted-foreground">kW</span>
          </div>
          <div className="text-xs text-muted-foreground">SOC</div>
          <div className="flex items-baseline">
            <span className="text-lg font-bold">50,3</span>
            <span className="text-xs ml-1 text-muted-foreground">%</span>
          </div>
        </div>
        
        <div className="absolute right-1/3 bottom-1/4 bg-card/70 backdrop-blur-sm border border-border p-2 rounded-md">
          <div className="text-xs text-muted-foreground">Potência de saída</div>
          <div className="flex items-baseline">
            <span className="text-lg font-bold">5,000</span>
            <span className="text-xs ml-1 text-muted-foreground">kW</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SystemSchema;
