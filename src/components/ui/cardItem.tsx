import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { item } from "@/types/item";

interface CardItemProps {
  item: item;
}

const CardItem = ({ item }: CardItemProps) => {
  const formattedDate = new Date(item.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Card className="w-[300px] border border-gray-300 mx-4 my-4 hover:shadow-md transition-shadow duration-200 cursor-pointer">
      <CardTitle className="text-lg text-white">
        {item.content}
      </CardTitle>
      <CardDescription className="text-sm text-gray-500">
        Date Opened: {formattedDate}
      </CardDescription>
    </Card>
  );
};

export default CardItem;
