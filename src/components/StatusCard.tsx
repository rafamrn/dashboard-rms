
import { Card, CardContent } from "@/components/ui/card";

interface StatusCardProps {
  title: string;
  value: string;
  unit: string;
  icon: React.ReactNode;
  className?: string;
}

const StatusCard = ({ title, value, unit, icon, className }: StatusCardProps) => {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardContent className="p-4">
        <div className="flex items-center">
          <div className="mr-3 text-primary">{icon}</div>
          <div className="flex flex-col">
            <p className="text-xs text-muted-foreground">{title}</p>
            <div className="flex items-end">
              <span className="text-lg font-bold">{value}</span>
              <span className="text-xs ml-1 text-muted-foreground">{unit}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
