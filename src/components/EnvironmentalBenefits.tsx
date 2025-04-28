
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EnvironmentalBenefits = () => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-medium">Benefícios ambientais</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-4">
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
              <path d="M17 14h.01"></path>
              <path d="M7 7h.01"></path>
              <path d="M7 14h.01"></path>
              <path d="M17 7h.01"></path>
              <rect width="20" height="14" x="2" y="5" rx="2"></rect>
              <path d="M6 19v2"></path>
              <path d="M18 19v2"></path>
              <path d="M12 19v2"></path>
            </svg>
          </div>
          <p className="text-xs text-muted-foreground mb-1">Carvão padrão poupado</p>
          <span className="text-sm font-bold">≈ 0</span>
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
              <path d="M8 22a5 5 0 0 1-5-5"></path>
              <path d="M3 10v7"></path>
              <path d="M16 22a5 5 0 0 0 5-5"></path>
              <path d="M21 10v7"></path>
              <rect width="18" height="10" x="3" y="2" rx="2"></rect>
            </svg>
          </div>
          <p className="text-xs text-muted-foreground mb-1">CO<sub>2</sub> evitado</p>
          <span className="text-sm font-bold">≈ 0</span>
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
              <path d="M12 22c3.47-2.43 6-5.94 6-10a6 6 0 0 0-12 0c0 4.06 2.53 7.57 6 10"></path>
              <path d="M12 14a2 2 0 0 0 0-4 2 2 0 0 0 0 4"></path>
            </svg>
          </div>
          <p className="text-xs text-muted-foreground mb-1">Árvores equivalentes plantadas</p>
          <span className="text-sm font-bold">≈ 0</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnvironmentalBenefits;
