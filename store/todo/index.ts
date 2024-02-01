import { create } from "zustand";
import { Todo, TodoStore } from "./types";
import { v4 as uuidv4 } from "uuid";
import { immer } from "zustand/middleware/immer";

export const useTodoStore = create<TodoStore>()(
  immer((set) => ({
    items: [
      {
        id: uuidv4(),
        title: "We should work on our immigration.",
        date: Date.now(),
        status: true,
      },
      {
        id: uuidv4(),
        title: "Fix the leaky faucet in the bathroom.",
        date: Date.now(),
        status: true,
      },
      {
        id: uuidv4(),
        title: "Exercise for at least 30 minutes.",
        date: Date.now(),
        status: true,
      },
      {
        id: uuidv4(),
        title: "Complete the project proposal by Friday.",
        date: Date.now(),
        status: true,
      },
    ],
    add: (todo: Omit<Todo, "id" | "date">) => {
      const _todo: Todo = {
        id: uuidv4(),
        date: Date.now(),
        ...todo,
      };

      set((state) => ({
        items: [...state.items, _todo],
      }));
    },
    remove: (id: string) => {
      set((state) => ({
        items: state.items.filter((i) => i.id !== id),
      }));
    },
    removeAllCompeleted: () => {
      set((state) => ({
        items: state.items.filter((i) => !i.status),
      }));
    },
    changeState: (id: string) => {
      set((state) => {
        const index = state.items.findIndex((item) => item.id === id);
        if (index > -1) {
          state.items[index].status = !state.items[index].status;
        } else {
          console.error("item not found!!");
        }
      });
    },
  }))
);
