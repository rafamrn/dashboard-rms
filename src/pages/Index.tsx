
import React from "react";
import NavBar from "../components/NavBar";
import StatusCard from "../components/StatusCard";
import PowerChart from "../components/PowerChart";
import RevenueChart from "../components/RevenueChart";
import SystemSchema from "../components/SystemSchema";
import DeviceInfo from "../components/DeviceInfo";
import EnvironmentalBenefits from "../components/EnvironmentalBenefits";

const Index = () => {
  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <NavBar />
      
      <div className="flex-1 p-4 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <StatusCard 
            title="Rendimento hoje" 
            value="0.00" 
            unit="kWh" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <path d="M13 2v7h7"></path>
                <path d="m9.5 12.5 1.5 2 3-4"></path>
              </svg>
            }
          />
          
          <StatusCard 
            title="Receita hoje" 
            value="0.00" 
            unit="¥" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v12"></path>
                <path d="M8 10h8"></path>
                <path d="M8 14h8"></path>
              </svg>
            }
          />
          
          <StatusCard 
            title="Energia carregada no ESS hoje" 
            value="676.10" 
            unit="kWh" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 19h10"></path>
                <path d="M7 5h10"></path>
                <path d="M5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"></path>
                <path d="M19 19a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2"></path>
                <path d="M9 16v-6"></path>
                <path d="M9 10h3"></path>
                <path d="M13 8v3"></path>
                <path d="M13 14v-3h3"></path>
              </svg>
            }
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PowerChart />
          <RevenueChart />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <SystemSchema />
          <div className="grid grid-cols-1 gap-4">
            <DeviceInfo />
            <EnvironmentalBenefits />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
