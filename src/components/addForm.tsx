"use client";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Button } from "./ui/button";

const AddForm = () => {
  const queryClient = useQueryClient();
  const [content, setContent] = useState("");

  const mutation = useMutation({
    mutationKey: ["addItem"],
    mutationFn: async (formData: { 
      username: string; 
      content: string; 
      date: string 
    }) => {
      const url = process.env.NEXT_PUBLIC_URL_DEV || "";
      const res = await fetch(`${url}/api/addItem`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Handle non-success responses
      if (!res.ok) {
        // Try to parse error as text if JSON parsing fails
        const errorText = await res.text();
        throw new Error(errorText || res.statusText);
      }
      
      return res;
    },
    onSuccess: () => {
      toast.success("Item added successfully!");
      queryClient.invalidateQueries({ queryKey: ["pendingItems"] });
      setContent("");
    },
    onError: (error: Error) => {
      toast.error(`Failed to add item: ${error.message}`);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({
      username: "FromReact",
      content,
      date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          About the task
        </label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Describe the task"
          required
        />
      </div>
      <div className="flex flex-col items-center mb-4">
        <Button
          type="submit"
          className="bg-red-500"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default AddForm;