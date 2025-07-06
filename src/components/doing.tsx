'use client';

import { useQuery } from "@tanstack/react-query";
import { item } from "@/types/item";
import { Suspense } from "react";
import EditItem from "./editItem";

interface Props {
  className?: string;
}

export const Doing: React.FC<Props> = ({ className }) => {
   const { data, isPending } = useQuery({
    queryKey: ["doingItems"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_DEV}/api/items/toDo?status=DOING`
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
            <h1 className="text-center text-2xl font-bold">Doing</h1>
            <p className="text-center text-gray-600">Tasks that you are currently doing</p>
      {isPending ? (
        // <div className="flex items-center justify-center h-screen">
        <Suspense fallback={<p className="text-gray-500">Loading...</p>}>
        </Suspense>
      ) : (
        // </div>
        <div>
            {data?.map((item, id) => (
      <div key={id} className="flex items-center justify-center">
                <EditItem item={item} status="DOING"  />
              </div>
            ))}
        </div>
      )}
        </div>
        </div>
    </>
  )
};
export default Doing;