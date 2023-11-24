import { Card, CardHeader } from "@material-tailwind/react";
export default function StatusCard({
  color,
  icon,
  title,
  amount,
  percentage,
  percentageColor,
  percentageIcon,
  date,
}) {
  return (
    <div className="px-4 mb-10">
      <Card>
        <CardHeader className="p-3" color={color} iconOnly>
          {title}
        </CardHeader>
        <div className="p-4">{amount}</div>
      </Card>
    </div>
  );
}
