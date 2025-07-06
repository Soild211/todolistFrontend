import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AddForm from "./addForm";
const AddItem = () => {
  
  return (
    <div className="flex items-center justify-center bg-blue-700">
  <Dialog>
  <DialogTrigger>Add a new task</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Open a new task</DialogTitle>
      {/* <DialogDescription> */}
        {/* Add a new task to your list. You can add details and set a due date. */}
        <AddForm/>
      {/* </DialogDescription> */}
    </DialogHeader>
  </DialogContent>
</Dialog>
</div>
  );
};

export default AddItem;
