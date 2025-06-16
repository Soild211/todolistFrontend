"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "./ui/card";
import { item } from "@/types/item";
import { useQuery } from "@tanstack/react-query";
interface Props {
  className?: string;
}

const Pending: React.FC<Props> = ({ className }) => {
  const { data, isPending } = useQuery({
    queryKey: ["pendingItems"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_DEV}/api/items/toDo?status=PENDING`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: item[] = await response.json();
      return data;
    },
    staleTime: Infinity, 
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
  return (
    <>
      {isPending ? (
        // <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Loading...</p>
      ) : (
        // </div>
        <div className={className}>
          <div className="h-dvh border-2 border-blue-500 scrollbar overflow-y-auto p-4">
            <h1 className="text-center text-2xl font-bold">Pending</h1>
            <p className="text-center text-gray-600">Tasks that are pending</p>
            {data?.map((item, id) => (
              <div key={id}>
                <Card
                  className="mt-4 scrollbar overflow-y-auto bg-red-400"
                  key={id}
                >
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
                    <p>{item.date.toString()}</p>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Pending;
