"use client";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { Button } from "./ui/button";
const AddForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState({
    username: "FromReact",
    content: "",
    date: new Date().toISOString().split("T")[0],
  });
  const handleSubmit = async () => {
    setIsSubmitting(true);
    const status = await fetch("http://localhost:8080/api/addItem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch((err) => {
      console.error("Error:", err);
      setIsSubmitting(false);
    });
    // console.log(status);

    // setIsSubmitting(true);
    if (status?.ok) {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setData({
        username: "UserA",
        content: "",
        date: new Date().toISOString().split("T")[0],
      });
    }
  };
    const notify = () => toast("Task Created !");
    useEffect(() => {
      if (isSubmitted) {
        notify();
      }
    }, [isSubmitted]);
  return (
    <div>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            About the task
          </label>
          <input
            type="text"
            value={data.content}
            onChange={(e) => setData({ ...data, content: e.target.value })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Describe the task"
          />
        </div>
        <div className="flex flex-col items-center  mb-4">
          {!isSubmitting && <Button className="bg-red-500" onClick={()=>handleSubmit()}>Submit</Button>}
          {isSubmitting && (
            <Button className="bg-red-500" disabled>
              Submitting...
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddForm;
