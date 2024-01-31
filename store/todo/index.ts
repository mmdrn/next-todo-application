import { create } from "zustand";
import { Todo, TodoStore } from "./types";
import { v4 as uuidv4 } from "uuid";

export const useTodoStore = create<TodoStore>()((set) => ({
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
  removeAllCompeleted: () => {},
}));
