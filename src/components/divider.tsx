'use client'
import React,{useState} from "react";
import Pending from "./pending";
import Doing from "./doing";
import Completed from "./completed";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./draggable";
import { Droppable } from "./droppable";
import { CSS } from "@dnd-kit/utilities";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

// Within your component that receives `transform` from `useDraggable`:
// const style = {
//   transform: CSS.Translate.toString(transform),
// }
const Divider = () => {
  // const [isDropped, setIsDropped] = useState(false);
  // const draggableMarkup = (
  //   <Draggable>Drag me</Draggable>
  // );
  const queryClient = new QueryClient();
  return (
    <div className="flex flex-row w-full">
      {/* <DndContext>
        <Draggable />
        <Droppable /> */}
      <QueryClientProvider client={queryClient}>
        
        <Pending className="flex-1" />
        <Doing className="flex-1" />
        <Completed className="flex-1" />
      </QueryClientProvider>
      {/* </DndContext> */}
    </div>
  );
};

export default Divider;
