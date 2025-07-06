'use client';
import { useEffect, useState } from "react";
import { item } from "@/types/item";
import { Button } from "./ui/button";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
interface EditProps {
  item: item;
  status: string;
}
const EditForm = ({ item, status }: EditProps) => {
   const [isUpdated, setIsUpdated] = useState(false);
  const queryClient = useQueryClient(); 
  const handleUpdate = async () => {
    console.log("Updating item with ID:", item.id, item.status);

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL_DEV}/api/items/update?id=${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: item.status,
      }),
    });

    if (!res.ok) {
      toast.error("Update failed");
    } else {
      setIsUpdated(true);

      
      queryClient.invalidateQueries({ queryKey: ["pendingItems"] });
      queryClient.invalidateQueries({ queryKey: ["doingItems"] });
      queryClient.invalidateQueries({ queryKey: ["completedItems"] });
    }
  };

  useEffect(() => {
    if (isUpdated) toast.success("Task Updated!");
  }, [isUpdated]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-extrabold"> {item.username}</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Change task content to push it into Doing or Completed
          
          <input type="text" defaultValue={item.content} />
          {/* <p className='text-lg text-white'>Current Status: {status}</p>
           */}
          </label>
          <label className="block text-sm font-medium text-white">Status</label>
          <div className="flex  justify-between  ">
            <select
            title="status"
              defaultValue={status}
              className="bg-green-300 p-2 rounded-md"
              onChange={(e) => {
                item.status = e.target.value;
              }}
            >
              <option value="PENDING">Pending</option>
              <option value="DOING">Doing</option>
              <option value="COMPLETED">Completed</option>
            </select>
            {/* write code for changing it to doing or completed and update in backend */}
            <Button type="button" variant={"destructive"} onClick={()=>{handleUpdate()}}> Update</Button>
          </div>
        </div>
      </form>
      <p className="text-xl">Created on: {item.date.toString()}</p>
    </div>
  );
};

export default EditForm;
