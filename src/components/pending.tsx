'use client';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "./ui/card";
import items from '@/dummieData.json'  
interface Props {
  className?: string;
}

const Pending: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="h-dvh border-2 border-blue-500">
        <h1 className="text-center text-2xl font-bold">Pending</h1>
        <p className="text-center text-gray-600">Tasks that are pending</p>
        {items.map((item, index)=>(
          <div key ={index} >
            {item.status === 'PENDING' ? 
          <Card className="mt-4" key={index}>
          <CardHeader>
            {/* Username */}
            <CardTitle>{item.username}</CardTitle>
            </CardHeader>
          <CardContent>
            {/* Description */}
            <p>{item.content}</p>
          </CardContent>
          <CardFooter>
            {/* Date */}
            <p>{item.date}</p>
          </CardFooter>
        </Card>
          : null
        }
        </div>
      ))}
        
      </div>
    </div>
  );
};
export default Pending;
