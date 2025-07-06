"use client";
import ToDoItem from "./ui/card";
import { item } from "@/types/item";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import EditItem from "./editItem";
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
     <div className={className}>
          <div className="h-dvh border-2 border-blue-500 scrollbar overflow-y-auto p-4">
            <h1 className="text-center text-2xl font-bold">Pending</h1>
            <p className="text-center text-gray-600">Tasks that are pending</p>
      {isPending ? (
        // <div className="flex items-center justify-center h-screen">
        <Suspense fallback={<p className="text-gray-500">Loading...</p>}>
        </Suspense>
      ) : (
        // </div>
      
  <div className="flex flex-col gap-4 w-full max-w-md">
    {data?.map((item, id) => (
      <div key={id} className="flex items-center justify-center">
        <EditItem item={item} status="PENDING" />
      </div>
    ))}
  </div>

      )}
        </div>
        </div>
    </>
  );
};
export default Pending;
