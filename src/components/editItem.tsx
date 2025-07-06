import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddForm from "./addForm";
import { item } from "@/types/item";
// import Card from "./ui/card";
import EditForm from "./editForm";
import CardItem from "./ui/cardItem";

// interface Item {
//   item: item;
// }
interface EditProps {
  item: item;
  status: string;
}
const EditItem = ({ item, status }: EditProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <CardItem item={item}  />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update {status} task</DialogTitle>
          <EditForm item={item} status={status} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditItem;
