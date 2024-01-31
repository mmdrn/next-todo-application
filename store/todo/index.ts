import { create } from "zustand";
import { Todo, TodoStore } from "./types";
import { v4 as uuidv4 } from "uuid";

export const useTodoStore = create<TodoStore>()((set) => ({
  items: [
    {
      id: uuidv4(),
      title: "We should work on our immigration.",
      date: "January 31, 2024",
      status: true,
    },
    {
      id: uuidv4(),
      title: "Fix the leaky faucet in the bathroom.",
      date: "January 30, 2024",
      status: true,
    },
    {
      id: uuidv4(),
      title: "Exercise for at least 30 minutes.",
      date: "January 23, 2024",
      status: true,
    },
    {
      id: uuidv4(),
      title: "Complete the project proposal by Friday.",
      date: "January 19, 2024",
      status: true,
    },
  ],
  add: (todo: Omit<Todo, "id">) => {
    const _todo: Todo = {
      id: uuidv4(),
      ...todo,
    };

    set((state) => ({
      items: [...state.items, _todo],
    }));
  },
  remove: () => {},
  removeAllCompeleted: () => {},
}));
